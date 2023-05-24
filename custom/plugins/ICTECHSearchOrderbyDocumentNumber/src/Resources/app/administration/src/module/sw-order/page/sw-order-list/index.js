import template from './sw-order-list.html.twig';
import './sw-order-list.scss'
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
    },
    watch: {
        orderCriteria: {
            handler() {
                this.getList();
            },
            deep: true,
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.loadFilterValues();
        },
        onSearchTermChange(searchTerm) {
            this.isLoading = true;
            this.searchTerm = searchTerm;
            const criteria = new Criteria(this.page, this.limit);
            this.filterCriteria.forEach(filter => {
                criteria.addFilter(filter);
            });
            criteria.addAssociation('documents');
            criteria.addAssociation('addresses');
            criteria.addAssociation('billingAddress');
            criteria.addAssociation('salesChannel');
            criteria.addAssociation('orderCustomer');
            criteria.addAssociation('currency');
            criteria.addAssociation('transactions');
            criteria.addAssociation('deliveries');
            criteria.getAssociation('transactions').addSorting(Criteria.sort('createdAt'));

            if(this.searchTerm == 0){
                this.orderRepository.search((criteria)).then((res)=>{
                    this.total = res.total;
                    this.orders = res;
                    this.isLoading = false;
                })
            }else{
                criteria.addFilter(Criteria.equals('documents.config.documentNumber',this.searchTerm));
                this.orderRepository.search((criteria)).then((res)=>{
                    this.total = res.total;
                    this.orders = res;
                    this.isLoading = false;
                })
            }
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
                this.total = response.total;
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
