/*! For license information please see 100.574534.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{478:function(t,e,r){"use strict";r.r(e);var n=r(4);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function p(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),s=new j(o||[]);return n(i,"_invoke",{value:P(t,r,s)}),i}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var f={};function h(){}function d(){}function m(){}var g={};l(g,s,(function(){return this}));var _=Object.getPrototypeOf,y=_&&_(_(k([])));y&&y!==e&&r.call(y,s)&&(g=y);var b=m.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var a;n(this,"_invoke",{value:function(n,i){function s(){return new e((function(a,s){!function n(a,i,s,c){var u=v(t[a],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==o(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}(n,i,a,s)}))}return a=a?a.then(s,s):s()}})}function P(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=v(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=v(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=m,n(b,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(p(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,u,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function i(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))}}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("inventory.non_zero.page_title")}},data:function(){return{breadcrumbsCurrent:"inventory.non_zero.breadcrumbs_current",breadcrumbs:[{name:"inventory.non_zero.breadcrumbs_first",url:"home"},{name:"inventory.non_zero.breadcrumbs_second",url:"products.index"},{name:"inventory.non_zero.breadcrumbs_active",url:""}],query:"",showModal:!1,perPage:10,prefix:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.b)("operations",["items","loading","pagination","appInfo"])),watch:{query:function(t,e){""===t?this.getData():this.searchData()}},created:function(){this.getData(),this.prefix=this.appInfo.productPrefix},methods:{updatePerPager:function(){this.pagination.current_page=1,""===this.query?this.getData():this.searchData()},getData:function(){var t=this;return s(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.state.operations.loading=!0,r=t.pagination?t.pagination.current_page:1,e.next=4,t.$store.dispatch("operations/fetchData",{path:"/api/non-zero-inventory?page=",currentPage:r+"&perPage="+t.perPage});case 4:case"end":return e.stop()}}),e)})))()},paginate:function(){var t=this;return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===t.query?t.getData():t.searchData();case 1:case"end":return e.stop()}}),e)})))()},resetPagination:function(){var t=this;return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.pagination.current_page=1;case 1:case"end":return e.stop()}}),e)})))()},searchData:function(){var t=this;return s(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.state.operations.loading=!0,r=t.pagination?t.pagination.current_page:1,e.next=4,t.$store.dispatch("operations/searchData",{path:"/api/non-zero-inventory/search",term:t.query,currentPage:r+"&perPage="+t.perPage});case 4:case"end":return e.stop()}}),e)})))()},reload:function(){var t=this;return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.query="";case 1:case"end":return e.stop()}}),e)})))()},previewModal:function(t){return this.imagePath=t,this.showModal?this.showModal=!1:this.showModal=!0},print:function(){var t=this;return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$htmlToPaper("printMe");case 2:case"end":return e.stop()}}),e)})))()},refreshTable:function(){this.query="",""===this.query?this.getData():this.searchData()}}},p=r(1),v=Object(p.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card custom-card w-100"},[e("div",{staticClass:"card-header setings-header"},[e("div",{staticClass:"col-xl-4 col-4"},[e("h3",{staticClass:"card-title"},[t._v("\n              "+t._s(t.$t("inventory.non_zero.page_title"))+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-xl-8 col-8 float-right text-right"},[e("div",{staticClass:"btn-group c-w-100"},[e("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Refresh",expression:"'Refresh'"}],staticClass:"btn btn-success",attrs:{href:"#"},on:{click:function(e){return t.refreshTable()}}},[e("i",{staticClass:"fas fa-sync"})]),t._v(" "),e("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("common.export_table"),expression:"$t('common.export_table')"}],staticClass:"btn btn-secondary",attrs:{href:"/non-zero-inventory/pdf"}},[e("i",{staticClass:"fas fa-download"})]),t._v(" "),e("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("common.print_table"),expression:"$t('common.print_table')"}],staticClass:"btn btn-info",on:{click:t.print}},[e("i",{staticClass:"fas fa-print"})]),t._v(" "),t.$can("product-create")?e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"products.create"}}},[t._v("\n                "+t._s(t.$t("common.create"))+"\n                "),e("i",{staticClass:"fas fa-plus-circle d-none d-sm-inline-block"})]):t._e()],1)])]),t._v(" "),e("div",{staticClass:"card-body position-relative"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-xl-4 mb-2"},[e("search",{on:{"reset-pagination":function(e){return t.resetPagination()},reload:t.reload},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)]),t._v(" "),e("table-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),e("div",{staticClass:"table-responsive table-custom mt-3",attrs:{id:"printMe"}},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.image")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.item_model")))]),t._v(" "),e("th",[t._v(t._s(t.$t("products.list.common.stock")))]),t._v(" "),e("th",[t._v(t._s(t.$t("products.list.common.avg_purchase_price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("products.list.common.selling_price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("products.list.common.inventory_value")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.status")))]),t._v(" "),e("th",{staticClass:"no-print"},[t._v(t._s(t.$t("common.action")))])])]),t._v(" "),e("tbody",[t._l(t.items,(function(r,n){return e("tr",{directives:[{name:"show",rawName:"v-show",value:t.items.length,expression:"items.length"}],key:n},[e("td",[t.pagination&&t.pagination.current_page>1?e("span",[t._v("\n                      "+t._s(t.pagination.per_page*(t.pagination.current_page-1)+(n+1))+"\n                    ")]):e("span",[t._v(t._s(n+1))])]),t._v(" "),e("td",[r.image?e("a",{attrs:{href:"#",id:"show-modal"},on:{click:function(e){return t.previewModal(r.image)}}},[e("img",{staticClass:"rounded preview-sm",attrs:{src:r.image,loading:"lazy"}})]):e("div",{staticClass:"bg-secondary rounded no-preview-sm"},[e("small",[t._v(t._s(t.$t("common.no_preview")))])])]),t._v(" "),e("td",[t._v(t._s(t._f("withPrefix")(r.code,t.prefix)))]),t._v(" "),e("td",[e("router-link",{attrs:{to:{name:"products.show",params:{slug:r.slug}}}},[t._v("\n                      "+t._s(r.name)+"\n                    ")])],1),t._v(" "),e("td",[t._v(t._s(r.itemModel))]),t._v(" "),e("td",[r.availableQty<r.alertQty?e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("common.stock_alert_msg"),expression:"$t('common.stock_alert_msg')"}],staticClass:"badge badge-danger p-2"},[e("i",{staticClass:"fas fa-exclamation"})]):t._e(),t._v(" "),r.itemUnit?e("span",[t._v("\n                      "+t._s(r.availableQty)+" "+t._s(r.itemUnit.code)+"\n                    ")]):t._e()]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(r.avgPurchasePrice)))]),t._v(" "),e("td",[r.discount>0?e("span",[e("del",[t._v(t._s(t._f("withCurrency")(r.regularPrice)))]),t._v(t._s(t._f("withCurrency")(r.sellingPrice))+" ("+t._s(r.discount)+"%)\n                    ")]):e("span",[t._v(t._s(t._f("withCurrency")(r.regularPrice))+"\n                    ")])]),t._v(" "),e("td",[t._v("\n                    "+t._s(t._f("withCurrency")(r.avgPurchasePrice*r.availableQty))+"\n                  ")]),t._v(" "),e("td",[1===r.status?e("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):e("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),e("td",{staticClass:"text-right no-print"},[e("div",{staticClass:"btn-group"},[t.$can("inventory-history")?e("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("inventory.common.inventory_history"),expression:"$t('inventory.common.inventory_history')"}],staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"inventory.history",params:{slug:r.slug}}}},[e("i",{staticClass:"fas fa-history"})]):t._e()],1)])])})),t._v(" "),e("tr",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.items.length,expression:"!loading && !items.length"}]},[e("td",{attrs:{colspan:"11"}},[e("EmptyTable")],1)])],2)])])],1),t._v(" "),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"dtable-footer"},[e("div",{staticClass:"form-group row display-per-page"},[e("label",[t._v(t._s(t.$t("per_page"))+" ")]),t._v(" "),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"form-control form-control-sm ml-1",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.perPage=e.target.multiple?r:r[0]},t.updatePerPager]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),e("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),e("option",{attrs:{value:"100"}},[t._v("100")])])])]),t._v(" "),t.pagination&&t.pagination.last_page>1?e("pagination",{staticClass:"justify-flex-end",attrs:{pagination:t.pagination,offset:5},on:{paginate:t.paginate}}):t._e()],1)])])])]),t._v(" "),t.showModal?e("Modal",{on:{close:function(e){return t.previewModal()}}},[e("h5",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("common.modal_header")))]),t._v(" "),e("div",{staticClass:"w-100",attrs:{slot:"body"},slot:"body"},[e("img",{staticClass:"rounded img-fluid",attrs:{src:t.imagePath,loading:"lazy"}})])]):t._e()],1)}),[],!1,null,null,null);e.default=v.exports}}]);