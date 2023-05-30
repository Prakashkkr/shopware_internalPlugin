import template from './sw-order-list.html.twig';
import './sw-order-list.scss';
const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Shopware.Component.override('sw-order-list', {
    template,

    inject: [
        'repositoryFactory',
        'acl',
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
            filterCriteria: [],
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
            if(this.searchTerm != 0){
                criteria.addFilter(Criteria.prefix('documents.config.documentNumber',this.searchTerm));
            }
            this.orderRepository.search((criteria)).then((res)=>{
                this.total = res.total;
                this.orders = res;
                this.isLoading = false;
            })
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
    },
});
