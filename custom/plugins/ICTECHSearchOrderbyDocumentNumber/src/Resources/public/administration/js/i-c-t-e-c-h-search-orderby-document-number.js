/*! For license information please see i-c-t-e-c-h-search-orderby-document-number.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/ictechsearchorderbydocumentnumber/",n(n.s="jF8A")}({LIpv:function(e,t,n){var r=n("MT9A");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("7f5520f7",r,!0,{})},MT9A:function(e,t,n){},SZ7m:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,d=function(){},u=null,m="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){c=n,u=o||{};var a=r(e,t);return f(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(l=i[s.id]).refs--,n.push(l)}t?f(a=r(e,t)):a=[];for(o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(b(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(_){var o=l++;r=s||(s=h()),t=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=h(),t=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,v=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function y(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},jF8A:function(e,t,n){"use strict";n.r(t);n("LIpv");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(){o=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),s=new C(r||[]);return i(a,"_invoke",{value:S(e,n,s)}),a}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var _={};function p(){}function f(){}function h(){}var b={};d(b,s,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(T([])));v&&v!==t&&n.call(v,s)&&(b=v);var w=h.prototype=p.prototype=Object.create(b);function y(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function o(i,a,s,l){var c=m(e[i],e,a);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==r(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){o("next",e,s,l)}),(function(e){o("throw",e,s,l)})):t.resolve(u).then((function(e){d.value=e,s(d)}),(function(e){return o("throw",e,s,l)}))}l(c.arg)}var a;i(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function S(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===_)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=m(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var o=m(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,_;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,_):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,_)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function T(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,i(w,"constructor",{value:h,configurable:!0}),i(h,"constructor",{value:f,configurable:!0}),f.displayName=d(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,d(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},y(k.prototype),d(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(w),d(w,c,"Generator"),d(w,s,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),_},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),_}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),_}},e}function i(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}var a=Shopware,s=(a.Component,a.Mixin),l=Shopware.Data.Criteria;Shopware.Component.override("sw-order-list",{template:'\n{% block sw_order_list %}\n<sw-page class="sw-order-list">\n    \n    {% block sw_order_list_search_bar %}\n        <template #search-bar>\n            <sw-search-bar\n                initial-search-type="order"\n                :initial-search="term"\n                @search="onSearch"\n            />\n        </template>\n    {% endblock %}\n\n    \n    {% block sw_order_list_smart_bar_header %}\n        <template #smart-bar-header>\n            \n            {% block sw_order_list_smart_bar_header_title %}\n                <h2>\n                    \n                    {% block sw_order_list_smart_bar_header_title_text %}\n                        {{ $tc(\'sw-order.list.textOrders\') }}\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_smart_bar_header_amount %}\n                        <span\n                            v-if="!isLoading"\n                            class="sw-page__smart-bar-amount"\n                        >\n                            ({{ total }})\n                        </span>\n                        \n                        {% block sw_order_module_toolbar_search_field %}\n                            <sw-simple-search-field\n                                    v-model="searchTerm"\n                                    class="sw_order_list_search"\n                                    size="small"\n                                    :placeholder="$tc(\'sw-order.placeholderSearchField\')"\n                                    variant="form"\n                                    @search-term-change="onSearchTermChange"\n                            />\n                        {% endblock %}\n                    {% endblock %}\n                </h2>\n            {% endblock %}\n        </template>\n    {% endblock %}\n\n    \n    {% block sw_order_list_smart_bar_actions %}\n        <template #smart-bar-actions>\n            \n            {% block sw_order_list_smart_bar_actions_slot %}\n\n                \n                {% block sw_order_list_smart_bar_actions_add %}\n                    <sw-button\n                        v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.creator\'),\n                showOnDisabledElements: true\n            }"\n                        class="sw-order-list__add-order"\n                        :disabled="!acl.can(\'order.creator\')"\n                        variant="primary"\n                        :router-link="{ name: \'sw.order.create\' }"\n                    >\n                        {{ $tc(\'sw-order.list.buttonAddOrder\') }}\n                    </sw-button>\n                {% endblock %}\n\n            {% endblock %}\n        </template>\n    {% endblock %}\n\n    \n    {% block sw_order_list_language_switch %}\n        <sw-language-switch\n            slot="language-switch"\n            @on-change="onChangeLanguage"\n        />\n    {% endblock %}\n\n    \n    {% block sw_order_list_content %}\n    <template #content>\n\n        \n        {% block sw_order_list_content_slot %}\n        <div class="sw-order-list__content">\n\n            \n            {% block sw_order_list_grid %}\n            <sw-data-grid\n                v-if="entitySearchable"\n                ref="orderGrid"\n                :data-source="orders"\n                :columns="orderColumns"\n                :full-page="true"\n                :show-settings="true"\n                :show-selection="true"\n                :sort-by="currentSortBy"\n                :sort-direction="sortDirection"\n                :is-loading="isLoading"\n                :allow-column-edit="true"\n                identifier="sw-order-list"\n                :disable-data-fetching="true"\n                :maximum-select-items="100"\n                @column-sort="onSortColumn"\n                @page-change="onPageChange"\n                @selection-change="updateSelection"\n            >\n\n                \n                {% block sw_order_list_grid_columns %}\n                    \n                    {% block sw_order_list_grid_columns_order_number %}\n                        <template #column-orderNumber="{ item }">\n                            \n                            {% block sw_order_list_grid_order_number_link %}\n                                <router-link :to="{ name: \'sw.order.detail\', params: { id: item.id } }">\n                                    {{ item.orderNumber }}\n                                </router-link>\n                            {% endblock %}\n                            \n                            {% block sw_order_list_grid_label_manual_order %}\n                                <sw-label\n                                    v-if="item.createdById"\n                                    appearance="pill"\n                                    size="small"\n                                    class="sw-order-list__manual-order-label"\n                                >\n                                    {{ $tc(\'sw-order.list.labelManualOrder\') }}\n                                </sw-label>\n                            {% endblock %}\n                        </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_customer_name %}\n                        <template #column-orderCustomer.firstName="{ item }">\n                            <router-link :to="{ name: \'sw.customer.detail\', params: { id: item.orderCustomer.customerId } }">\n                                {{ item.orderCustomer.lastName }}, {{ item.orderCustomer.firstName }}\n                            </router-link>\n                        </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_billing_address %}\n                        <template #column-billingAddressId="{ item }">\n                            {{ item.billingAddress.street }},\n                            {{ item.billingAddress.zipcode }}\n                            {{ item.billingAddress.city }}\n                        </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_amount %}\n                        <template #column-amountTotal="{ item }">\n                            {{ item.amountTotal | currency(item.currency.translated.shortName) }}\n                        </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_state %}\n                        <template #column-stateMachineState.name="{ item }">\n                            <sw-label\n                                v-if="!feature.isActive(\'FEATURE_NEXT_7530\')"\n                                :variant="getVariantFromOrderState(item)"\n                                appearance="pill"\n                            >\n                                {{ item.stateMachineState.translated.name }}\n                            </sw-label>\n                            <div\n                                v-if="feature.isActive(\'FEATURE_NEXT_7530\')"\n                                class="sw-order-list__state"\n                            >\n                                <sw-color-badge\n                                    :color="getVariantFromOrderState(item)"\n                                    rounded\n                                />\n\n                                {{ item.stateMachineState.translated.name }}\n                            </div>\n                        </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_transaction_state %}\n                        <template #column-transactions.last().stateMachineState.name="{ item }">\n                            <sw-label\n                                v-if="!feature.isActive(\'FEATURE_NEXT_7530\') && item.transactions && item.transactions[0]"\n                                :variant="getVariantFromPaymentState(item)"\n                                appearance="pill"\n                            >\n                                {{ transaction(item).stateMachineState.translated.name }}\n                            </sw-label>\n\n                            <div\n                                v-if="feature.isActive(\'FEATURE_NEXT_7530\') && item.transactions && item.transactions[0]"\n                                class="sw-order-list__state"\n                            >\n                                <sw-color-badge\n                                    v-if="item.transactions && item.transactions[0]"\n                                    :color="getVariantFromPaymentState(item)"\n                                    rounded\n                                />\n\n                                {{ transaction(item).stateMachineState.translated.name }}\n                            </div>\n                        </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_delivery_state %}\n                        <template #column-deliveries[0].stateMachineState.name="{ item }">\n                            <sw-label\n                                v-if="!feature.isActive(\'FEATURE_NEXT_7530\') && item.deliveries && item.deliveries[0]"\n                                :variant="getVariantFromDeliveryState(item)"\n                                appearance="pill"\n                            >\n                                {{ item.deliveries[0].stateMachineState.translated.name }}\n                            </sw-label>\n\n                            <div\n                                v-if="feature.isActive(\'FEATURE_NEXT_7530\') && item.deliveries && item.deliveries[0]"\n                                class="sw-order-list__state"\n                            >\n                                <sw-color-badge\n                                    v-if="item.deliveries && item.deliveries[0]"\n                                    :color="getVariantFromDeliveryState(item)"\n                                    rounded\n                                />\n\n                                {{ item.deliveries[0].stateMachineState.translated.name }}\n                            </div>\n                        </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_order_date %}\n                        <template #column-orderDateTime="{ item }">\n                            <sw-time-ago :date="item.orderDateTime" />\n                        </template>\n                    {% endblock %}\n                {% endblock %}\n\n                {% block sw_order_list_grid_columns_actions %}\n                    <template #actions="{ item }">\n                        \n                        {% block sw_order_list_grid_columns_actions_view %}\n                            <sw-context-menu-item\n                                class="sw-order-list__order-view-action"\n                                :router-link="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                            >\n                                {{ $tc(\'sw-order.list.contextMenuView\') }}\n                            </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_grid_columns_actions_delete %}\n                            <sw-context-menu-item\n                                variant="danger"\n                                :disabled="disableDeletion(item)"\n                                @click="onDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-order.list.contextMenuDelete\') }}\n                            </sw-context-menu-item>\n                        {% endblock %}\n                    </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_action_modals %}\n                <template #action-modals="{ item }">\n                    \n                    {% block sw_order_list_delete_modal %}\n                    <sw-modal\n                        v-if="showDeleteModal === item.id"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="small"\n                        @modal-close="onCloseDeleteModal"\n                    >\n                        \n                        {% block sw_order_list_delete_modal_confirm_delete_text %}\n                        <p class="sw-order-list__confirm-delete-text">\n                        {{ $tc(\'sw-order.list.textDeleteConfirm\', 0, { orderNumber: `${item.orderNumber}` }) }}\n                    </p>\n                    {% endblock %}\n\n                        \n                    {% block sw_order_list_delete_modal_footer %}\n                        <template #modal-footer>\n                            \n                            {% block sw_order_list_delete_modal_cancel %}\n                            <sw-button\n                                size="small"\n                                @click="onCloseDeleteModal"\n                            >\n                                {{ $tc(\'sw-order.list.buttonCancel\') }}\n                                </sw-button>\n                                {% endblock %}\n\n                                {% block sw_order_list_delete_modal_confirm %}\n                                <sw-button\n                                    variant="danger"\n                                    size="small"\n                                    @click="onConfirmDelete(item.id)"\n                                >\n                                    {{ $tc(\'sw-order.list.buttonDelete\') }}\n                                </sw-button>\n                                {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-modal>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                <template #pagination>\n                    \n                    {% block sw_order_list_grid_pagination %}\n                        <sw-pagination\n                            :page="page"\n                            :limit="limit"\n                            :total="total"\n                            :total-visible="7"\n                            @page-change="onPageChange"\n                        />\n                    {% endblock %}\n                </template>\n\n                \n                {% block sw_order_list_bulk_selected_actions_content %}\n                    <template #bulk>\n                        \n                        {% block sw_order_list_bulk_selected_actions_content_bulk_edit %}\n                            \n                            <a\n                                v-if="acl.can(\'order.editor\')"\n                                class="link link-primary"\n                                @click="showBulkEditModal = true"\n                            >\n                                {{ $tc(\'global.sw-bulk-edit-modal.bulkEdit\') }}\n                            </a>\n                        {% endblock %}\n                    </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_bulk_edit_modal %}\n                    <template #bulk-modals="{ selection }">\n                        <sw-bulk-edit-modal\n                            v-if="showBulkEditModal"\n                            ref="bulkEditModal"\n                            class="sw-order-bulk-edit-modal"\n                            :selection="selection"\n                            :bulk-grid-edit-columns="orderColumns"\n                            @edit-items="onBulkEditItems"\n                            @modal-close="showBulkEditModal = false"\n                        >\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_order_number %}\n                                <template #column-orderNumber="{ item }">\n                                    \n                                    {% block sw_order_list_bulk_edit_grid_order_number_link %}\n                                        <router-link\n                                            :to="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                                            target="_blank"\n                                            rel="noreferrer noopener"\n                                        >\n                                            {{ item.orderNumber }}\n                                        </router-link>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_order_list_bulk_edit_grid_label_manual_order %}\n                                        <sw-label\n                                            v-if="item.createdById"\n                                            appearance="pill"\n                                            size="small"\n                                            class="sw-order-bulk_edit__manual-order-label"\n                                        >\n                                            {{ $tc(\'sw-order.list.labelManualOrder\') }}\n                                        </sw-label>\n                                    {% endblock %}\n                                </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_customer_name %}\n                                <template #column-orderCustomer.firstName="{ item }">\n                                    <router-link\n                                        :to="{ name: \'sw.customer.detail\', params: { id: item.orderCustomer.customerId } }"\n                                        target="_blank"\n                                        rel="noreferrer noopener"\n                                    >\n                                        {{ item.orderCustomer.lastName }}, {{ item.orderCustomer.firstName }}\n                                    </router-link>\n                                </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_billing_address %}\n                                <template #column-billingAddressId="{ item }">\n                                    {{ item.billingAddress.street }},\n                                    {{ item.billingAddress.zipcode }}\n                                    {{ item.billingAddress.city }}\n                                </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_amount %}\n                                <template #column-amountTotal="{ item }">\n                                    {{ item.amountTotal | currency(item.currency.translated.shortName) }}\n                                </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_state %}\n                                <template #column-stateMachineState.name="{ item }">\n                                    <sw-label\n                                        :variant="getVariantFromOrderState(item)"\n                                        appearance="pill"\n                                    >\n                                        {{ item.stateMachineState.translated.name }}\n                                    </sw-label>\n                                </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_transaction_state %}\n                                <template #column-transactions.last().stateMachineState.name="{ item }">\n                                    <sw-label\n                                        v-if="item.transactions && item.transactions[0]"\n                                        :variant="getVariantFromPaymentState(item)"\n                                        appearance="pill"\n                                    >\n                                        {{ item.transactions.last().stateMachineState.translated.name }}\n                                    </sw-label>\n                                </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_delivery_state %}\n                                <template #column-deliveries[0].stateMachineState.name="{ item }">\n                                    <sw-label\n                                        v-if="item.deliveries && item.deliveries[0]"\n                                        :variant="getVariantFromDeliveryState(item)"\n                                        appearance="pill"\n                                    >\n                                        {{ item.deliveries[0].stateMachineState.translated.name }}\n                                    </sw-label>\n                                </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_columns_order_date %}\n                                <template #column-orderDateTime="{ item }">\n                                    {{ item.orderDateTime | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n                                </template>\n                            {% endblock %}\n                        </sw-bulk-edit-modal>\n                    </template>\n                {% endblock %}\n            </sw-data-grid>\n            {% endblock %}\n\n            \n            {% block sw_order_list_empty_state %}\n                <template v-if="!isLoading && !total">\n                    <sw-empty-state\n                        v-if="filterCriteria.length || isValidTerm(term)"\n                        :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                    >\n                        <template #icon>\n                            <img\n                                :src="\'/administration/static/img/empty-states/order-empty-state.svg\' | asset"\n                                :alt="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                            >\n                        </template>\n\n                        <template #default>\n                            {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                            <router-link\n                                class="sw-empty-state__description-link"\n                                :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                            >\n                                {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                            </router-link>\n                            {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                        </template>\n                    </sw-empty-state>\n                    <sw-empty-state\n                        v-else\n                        :title="$tc(\'sw-order.list.messageEmpty\')"\n                    >\n                        <template #icon>\n                            <img\n                                :src="\'/administration/static/img/empty-states/order-empty-state.svg\' | asset"\n                                :alt="$tc(\'sw-order.list.messageEmpty\')"\n                            >\n                        </template>\n                    </sw-empty-state>\n                </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_order_list_sidebar %}\n        <template #sidebar>\n            <sw-sidebar class="sw-order-list__sidebar">\n                \n                {% block sw_order_list_sidebar_refresh %}\n                    <sw-sidebar-item\n                        icon="regular-undo"\n                        :title="$tc(\'sw-order.list.titleSidebarItemRefresh\')"\n                        @click="onRefresh"\n                    />\n                {% endblock %}\n\n                \n                {% block sw_order_list_sidebar_filter %}\n                    <sw-sidebar-filter-panel\n                        entity="order"\n                        :store-key="storeKey"\n                        :filters="listFilters"\n                        :defaults="defaultFilters"\n                        :active-filter-number="activeFilterNumber"\n                        @criteria-changed="updateCriteria"\n                    />\n                {% endblock %}\n            </sw-sidebar>\n        </template>\n    {% endblock %}\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[s.getByName("listing")],data:function(){return{orders:[],documents:[],documentTypes:null,showModal:!1,documentsLoading:!1,searchTerm:"",sortBy:"orderDateTime",sortDirection:"DESC",filterCriteria:[]}},metaInfo:function(){return{title:this.$createTitle()}},computed:{orderRepository:function(){return this.repositoryFactory.create("order")},orderColumns:function(){return this.getOrderColumns()},orderCriteria:function(){var e=this,t=new l(this.page,this.limit);return t.setTerm(this.term),this.sortBy.split(",").forEach((function(n){t.addSorting(l.sort(n,e.sortDirection))})),this.filterCriteria.forEach((function(e){t.addFilter(e)})),t.addAssociation("billingAddress"),t.addAssociation("salesChannel"),t.addAssociation("orderCustomer"),t.addAssociation("currency"),t.addAssociation("documents"),t.addAssociation("transactions"),t.addAssociation("deliveries"),t.getAssociation("transactions").addSorting(l.sort("createdAt")),t}},watch:{orderCriteria:{handler:function(){this.getList()},deep:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadFilterValues()},onSearchTermChange:function(e){var t=this;this.isLoading=!0,this.searchTerm=e;var n=new l(this.page,this.limit);this.filterCriteria.forEach((function(e){n.addFilter(e)})),n.addAssociation("documents"),n.addAssociation("addresses"),n.addAssociation("billingAddress"),n.addAssociation("salesChannel"),n.addAssociation("orderCustomer"),n.addAssociation("currency"),n.addAssociation("transactions"),n.addAssociation("deliveries"),n.getAssociation("transactions").addSorting(l.sort("createdAt")),0!=this.searchTerm&&n.addFilter(l.prefix("documents.config.documentNumber",this.searchTerm)),this.orderRepository.search(n).then((function(e){t.total=e.total,t.orders=e,t.isLoading=!1}))},getList:function(){var e,t=this;return(e=o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,Shopware.Service("filterService").mergeWithStoredFilters(t.storeKey,t.orderCriteria);case 3:return n=e.sent,e.next=6,t.addQueryScores(t.term,n);case 6:if(n=e.sent,t.activeFilterNumber=n.filters.length,t.entitySearchable){e.next=12;break}return t.isLoading=!1,t.total=0,e.abrupt("return");case 12:return t.freshSearchTerm&&n.resetSorting(),e.prev=13,e.next=16,t.orderRepository.search(n);case 16:r=e.sent,t.total=r.total,t.orders=r,t.isLoading=!1,e.next=25;break;case 22:e.prev=22,e.t0=e.catch(13),t.isLoading=!1;case 25:case"end":return e.stop()}}),e,null,[[13,22]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){i(a,r,o,s,l,"next",e)}function l(e){i(a,r,o,s,l,"throw",e)}s(void 0)}))})()}}})}});
//# sourceMappingURL=i-c-t-e-c-h-search-orderby-document-number.js.map