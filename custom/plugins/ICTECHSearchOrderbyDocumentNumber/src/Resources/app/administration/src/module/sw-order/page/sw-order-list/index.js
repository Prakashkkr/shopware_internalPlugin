import template from './sw-order-list.html.twig';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Shopware.Component.override('sw-order-list', {
    template,

    inject: [
        'documentService',
        'repositoryFactory',
        'stateStyleDataProviderService',
        'acl',
        'filterFactory',
        'feature',
    ],

    mixins: [
        Mixin.getByName('listing'),
    ],

    data() {
        return {
            orders: [],
            documents: [],
            documentTypes: null,
            showModal: false,
            documentsLoading: false,
            searchTerm: '',
            sortBy: 'orderDateTime',
            sortDirection: 'DESC',
            isLoading: false,
            filterLoading: false,
            showDeleteModal: false,
            availableAffiliateCodes: [],
            availableCampaignCodes: [],

            /** @deprecated tag:v6.5.0 - values will be handled by filterFactory */
            affiliateCodeFilter: [],

            /** @deprecated tag:v6.5.0 - values will be handled by filterFactory */
            campaignCodeFilter: [],

            filterCriteria: [],
            defaultFilters: [
                'affiliate-code-filter',
                'campaign-code-filter',
                'document-filter',
                'order-date-filter',
                'order-value-filter',
                'status-filter',
                'payment-status-filter',
                'delivery-status-filter',
                'payment-method-filter',
                'shipping-method-filter',
                'sales-channel-filter',
                'billing-country-filter',
                'customer-group-filter',
                'shipping-country-filter',
                'customer-group-filter',
                'tag-filter',
                'line-item-filter',
            ],
            storeKey: 'grid.filter.order',
            activeFilterNumber: 0,
            showBulkEditModal: false,
            searchConfigEntity: 'order',
        };
    },


    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },

    computed: {
        orderRepository(){
          return this.repositoryFactory.create('order');
        },

        orderColumns() {
            return this.getOrderColumns();
        },
        orderCriteria() {
            const criteria = new Criteria(this.page, this.limit);

            criteria.setTerm(this.term);

            this.sortBy.split(',').forEach(sortBy => {
                criteria.addSorting(Criteria.sort(sortBy, this.sortDirection));
            });

            this.filterCriteria.forEach(filter => {
                criteria.addFilter(filter);
            });

            criteria.addAssociation('billingAddress');
            criteria.addAssociation('salesChannel');
            criteria.addAssociation('orderCustomer');
            criteria.addAssociation('currency');
            criteria.addAssociation('documents');
            criteria.addAssociation('transactions');
            criteria.addAssociation('deliveries');
            criteria.getAssociation('transactions').addSorting(Criteria.sort('createdAt'));

            return criteria;
        },
        documentTypeRepository() {
            return this.repositoryFactory.create('document_type');
        },
        documentRepository() {
            return this.repositoryFactory.create('document');
        },

        documentCriteria() {
            const criteria = new Criteria(this.page, this.limit);
            criteria.addSorting(Criteria.sort('createdAt', 'DESC'));
            criteria.setTerm(this.term);
            criteria.addAssociation('documentType');
            criteria.addFilter(Criteria.equals('order.id', this.order.id));
            criteria.addFilter(Criteria.equals('order.versionId', this.order.versionId));

            return criteria;
        },
        isDataLoading() {
            return this.isLoading || this.documentsLoading || this.cardLoading;
        },
        showCardFilter() {
            if (this.feature.isActive('FEATURE_NEXT_7530')) {
                return this.order?.documents?.length > 0;
            }
            return true;
        },

        filterSelectCriteria() {
            const criteria = new Criteria(1, 1);
            criteria.addFilter(Criteria.not(
                'AND',
                [Criteria.equals('affiliateCode', null), Criteria.equals('campaignCode', null)],
            ));
            criteria.addAggregation(Criteria.terms('affiliateCodes', 'affiliateCode', null, null, null));
            criteria.addAggregation(Criteria.terms('campaignCodes', 'campaignCode', null, null, null));

            return criteria;
        },

        listFilterOptions() {
            if (this.feature.isActive('FEATURE_NEXT_7530')) {
                return {
                    'sales-channel-filter': {
                        property: 'salesChannel',
                        label: this.$tc('sw-order.filters.salesChannelFilter.label'),
                        placeholder: this.$tc('sw-order.filters.salesChannelFilter.placeholder'),
                    },
                    'order-value-filter': {
                        property: 'amountTotal',
                        type: 'number-filter',
                        label: this.$tc('sw-order.filters.orderValueFilter.label'),
                        fromFieldLabel: null,
                        toFieldLabel: null,
                        fromPlaceholder: this.$tc('global.default.from'),
                        toPlaceholder: this.$tc('global.default.to'),
                    },
                    'payment-status-filter': {
                        property: 'transactions.stateMachineState',
                        criteria: this.getStatusCriteria('order_transaction.state'),
                        label: this.$tc('sw-order.filters.paymentStatusFilter.label'),
                        placeholder: this.$tc('sw-order.filters.paymentStatusFilter.placeholder'),
                    },
                    'delivery-status-filter': {
                        property: 'deliveries.stateMachineState',
                        criteria: this.getStatusCriteria('order_delivery.state'),
                        label: this.$tc('sw-order.filters.deliveryStatusFilter.label'),
                        placeholder: this.$tc('sw-order.filters.deliveryStatusFilter.placeholder'),
                    },
                    'status-filter': {
                        property: 'stateMachineState',
                        criteria: this.getStatusCriteria('order.state'),
                        label: this.$tc('sw-order.filters.statusFilter.label'),
                        placeholder: this.$tc('sw-order.filters.statusFilter.placeholder'),
                    },
                    'order-date-filter': {
                        property: 'orderDateTime',
                        label: this.$tc('sw-order.filters.orderDateFilter.label'),
                        dateType: 'date',
                        fromFieldLabel: null,
                        toFieldLabel: null,
                        showTimeframe: true,
                    },
                    'tag-filter': {
                        property: 'tags',
                        label: this.$tc('sw-order.filters.tagFilter.label'),
                        placeholder: this.$tc('sw-order.filters.tagFilter.placeholder'),
                    },
                    'affiliate-code-filter': {
                        property: 'affiliateCode',
                        type: 'multi-select-filter',
                        label: this.$tc('sw-order.filters.affiliateCodeFilter.label'),
                        placeholder: this.$tc('sw-order.filters.affiliateCodeFilter.placeholder'),
                        valueProperty: 'key',
                        labelProperty: 'key',
                        options: this.availableAffiliateCodes,
                    },
                    'campaign-code-filter': {
                        property: 'campaignCode',
                        type: 'multi-select-filter',
                        label: this.$tc('sw-order.filters.campaignCodeFilter.label'),
                        placeholder: this.$tc('sw-order.filters.campaignCodeFilter.placeholder'),
                        valueProperty: 'key',
                        labelProperty: 'key',
                        options: this.availableCampaignCodes,
                    },
                    'document-filter': {
                        property: 'documents',
                        label: this.$tc('sw-order.filters.documentFilter.label'),
                        placeholder: this.$tc('sw-order.filters.documentFilter.placeholder'),
                        optionHasCriteria: this.$tc('sw-order.filters.documentFilter.textHasCriteria'),
                        optionNoCriteria: this.$tc('sw-order.filters.documentFilter.textNoCriteria'),
                    },
                    'payment-method-filter': {
                        property: 'transactions.paymentMethod',
                        label: this.$tc('sw-order.filters.paymentMethodFilter.label'),
                        placeholder: this.$tc('sw-order.filters.paymentMethodFilter.placeholder'),
                    },
                    'shipping-method-filter': {
                        property: 'deliveries.shippingMethod',
                        label: this.$tc('sw-order.filters.shippingMethodFilter.label'),
                        placeholder: this.$tc('sw-order.filters.shippingMethodFilter.placeholder'),
                    },
                    'billing-country-filter': {
                        property: 'billingAddress.country',
                        label: this.$tc('sw-order.filters.billingCountryFilter.label'),
                        placeholder: this.$tc('sw-order.filters.billingCountryFilter.placeholder'),
                    },
                    'shipping-country-filter': {
                        property: 'deliveries.shippingOrderAddress.country',
                        label: this.$tc('sw-order.filters.shippingCountryFilter.label'),
                        placeholder: this.$tc('sw-order.filters.shippingCountryFilter.placeholder'),
                    },
                    'customer-group-filter': {
                        property: 'orderCustomer.customer.group',
                        label: this.$tc('sw-order.filters.customerGroupFilter.label'),
                        placeholder: this.$tc('sw-order.filters.customerGroupFilter.placeholder'),
                    },
                    'line-item-filter': {
                        property: 'lineItems.product',
                        label: this.$tc('sw-order.filters.productFilter.label'),
                        placeholder: this.$tc('sw-order.filters.productFilter.placeholder'),
                        criteria: this.productCriteria,
                        displayVariants: true,
                    },
                };
            }

            return {
                'affiliate-code-filter': {
                    property: 'affiliateCode',
                    type: 'multi-select-filter',
                    label: this.$tc('sw-order.filters.affiliateCodeFilter.label'),
                    placeholder: this.$tc('sw-order.filters.affiliateCodeFilter.placeholder'),
                    valueProperty: 'key',
                    labelProperty: 'key',
                    options: this.availableAffiliateCodes,
                },
                'campaign-code-filter': {
                    property: 'campaignCode',
                    type: 'multi-select-filter',
                    label: this.$tc('sw-order.filters.campaignCodeFilter.label'),
                    placeholder: this.$tc('sw-order.filters.campaignCodeFilter.placeholder'),
                    valueProperty: 'key',
                    labelProperty: 'key',
                    options: this.availableCampaignCodes,
                },
                'document-filter': {
                    property: 'documents',
                    label: this.$tc('sw-order.filters.documentFilter.label'),
                    placeholder: this.$tc('sw-order.filters.documentFilter.placeholder'),
                    optionHasCriteria: this.$tc('sw-order.filters.documentFilter.textHasCriteria'),
                    optionNoCriteria: this.$tc('sw-order.filters.documentFilter.textNoCriteria'),
                },
                'order-date-filter': {
                    property: 'orderDateTime',
                    label: this.$tc('sw-order.filters.orderDateFilter.label'),
                    dateType: 'datetime-local',
                },
                'status-filter': {
                    property: 'stateMachineState',
                    criteria: this.getStatusCriteria('order.state'),
                    label: this.$tc('sw-order.filters.statusFilter.label'),
                    placeholder: this.$tc('sw-order.filters.statusFilter.placeholder'),
                },
                'payment-status-filter': {
                    property: 'transactions.stateMachineState',
                    criteria: this.getStatusCriteria('order_transaction.state'),
                    label: this.$tc('sw-order.filters.paymentStatusFilter.label'),
                    placeholder: this.$tc('sw-order.filters.paymentStatusFilter.placeholder'),
                },
                'delivery-status-filter': {
                    property: 'deliveries.stateMachineState',
                    criteria: this.getStatusCriteria('order_delivery.state'),
                    label: this.$tc('sw-order.filters.deliveryStatusFilter.label'),
                    placeholder: this.$tc('sw-order.filters.deliveryStatusFilter.placeholder'),
                },
                'payment-method-filter': {
                    property: 'transactions.paymentMethod',
                    label: this.$tc('sw-order.filters.paymentMethodFilter.label'),
                    placeholder: this.$tc('sw-order.filters.paymentMethodFilter.placeholder'),
                },
                'shipping-method-filter': {
                    property: 'deliveries.shippingMethod',
                    label: this.$tc('sw-order.filters.shippingMethodFilter.label'),
                    placeholder: this.$tc('sw-order.filters.shippingMethodFilter.placeholder'),
                },
                'sales-channel-filter': {
                    property: 'salesChannel',
                    label: this.$tc('sw-order.filters.salesChannelFilter.label'),
                    placeholder: this.$tc('sw-order.filters.salesChannelFilter.placeholder'),
                },
                'billing-country-filter': {
                    property: 'billingAddress.country',
                    label: this.$tc('sw-order.filters.billingCountryFilter.label'),
                    placeholder: this.$tc('sw-order.filters.billingCountryFilter.placeholder'),
                },
                'shipping-country-filter': {
                    property: 'deliveries.shippingOrderAddress.country',
                    label: this.$tc('sw-order.filters.shippingCountryFilter.label'),
                    placeholder: this.$tc('sw-order.filters.shippingCountryFilter.placeholder'),
                },
                'customer-group-filter': {
                    property: 'orderCustomer.customer.group',
                    label: this.$tc('sw-order.filters.customerGroupFilter.label'),
                    placeholder: this.$tc('sw-order.filters.customerGroupFilter.placeholder'),
                },
                'tag-filter': {
                    property: 'tags',
                    label: this.$tc('sw-order.filters.tagFilter.label'),
                    placeholder: this.$tc('sw-order.filters.tagFilter.placeholder'),
                },
                'line-item-filter': {
                    property: 'lineItems.product',
                    label: this.$tc('sw-order.filters.productFilter.label'),
                    placeholder: this.$tc('sw-order.filters.productFilter.placeholder'),
                    criteria: this.productCriteria,
                    displayVariants: true,
                },
            };
        },

        listFilters() {
            return this.filterFactory.create('order', this.listFilterOptions);
        },

    },


    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.loadFilterValues();
            // this.documentRepository.search(this.documentCriteria).then((response) => {
            //     this.documents = response;
            //     this.cardLoading = false;
            // });
            //
            // this.documentService.setListener(this.convertStoreEventToVueEvent);
        },

        onPrepareDocument(documentType) {
            if (!this.feature.isActive('FEATURE_NEXT_7530')) {
                this.currentDocumentType = documentType;
            }
            this.showModal = true;
        },
        markDocumentAsSent(documentId) {
            const document = this.documents.get(documentId);
            document.sent = true;

            this.documentRepository.save(document).then(() => {
                this.getList();
            });
        },
        onSearchTermChange(searchTerm) {
            this.isLoading = true;
            this.searchTerm = searchTerm;
            this.isLoading = true;
            const criteria = new Criteria(this.page, this.limit);
            // criteria.setTerm(this.searchTerm);
            criteria.addAssociation('documents');
            criteria.addFilter(Criteria.equals('documents.config.documentNumber',this.searchTerm));
            this.orderRepository.search((criteria)).then((res)=>{
                // console.log(res);
                this.orders = res;
                this.isLoading = false;
            })
        },

        loadFilterValues() {
            this.filterLoading = true;

            return this.orderRepository.search(this.filterSelectCriteria).then(({ aggregations }) => {
                this.availableAffiliateCodes = aggregations?.affiliateCodes?.buckets ?? [];
                this.availableCampaignCodes = aggregations?.campaignCodes?.buckets ?? [];
                this.filterLoading = false;

                return aggregations;
            }).catch(() => {
                this.filterLoading = false;
            });
        },
        async getList() {

            this.isLoading = true;

            let criteria = await Shopware.Service('filterService')
                .mergeWithStoredFilters(this.storeKey, this.orderCriteria);

            criteria = await this.addQueryScores(this.term, criteria);
            this.activeFilterNumber = criteria.filters.length;

            if (!this.entitySearchable) {
                this.isLoading = false;
                this.total = 0;

                return;
            }

            if (this.freshSearchTerm) {
                criteria.resetSorting();
            }

            try {
                const response = await this.orderRepository.search(criteria);
                // console.log(response);
                this.total = response.total;

                console.log(response)
                this.orders = response;
                this.isLoading = false;
            } catch {
                this.isLoading = false;
            }
        },
        updateCriteria(criteria) {
            this.page = 1;

            this.filterCriteria = criteria;
        },
    },
});
