/*! For license information please see 148.d7a814.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{533:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),o=n(4),i=n(16),s=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function v(t,e,n,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),s=new L(a||[]);return r(i,"_invoke",{value:x(t,n,s)}),i}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=v;var d={};function f(){}function h(){}function m(){}var p={};u(p,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&n.call(g,o)&&(p=g);var b=m.prototype=f.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,s){var l=_(t[a],t,o);if("throw"!==l.type){var u=l.arg,v=u.value;return v&&"object"==c(v)&&n.call(v,"__await")?e.resolve(v.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(v).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function x(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=D(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=_(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function D(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,D(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=_(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=m,r(b,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:h,configurable:!0}),h.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(C.prototype),u(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new C(v(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,s,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;$(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}var v={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("sales.returns.view.page_title")}},data:function(){return{breadcrumbsCurrent:"sales.returns.view.breadcrumbs_current",breadcrumbs:[{name:"sales.returns.view.breadcrumbs_first",url:"home"},{name:"sales.returns.view.breadcrumbs_second",url:"invoiceReturns.index"},{name:"sales.returns.view.breadcrumbs_active",url:""}],allData:"",invoiceSubTotal:0,invoiceReturn:0,returnProducts:[],productPrefix:"",invoicePrefix:"",returnPrefix:"",clientPrefix:"",loading:!1}},computed:Object(o.b)({appInfo:"operations/appInfo"}),created:function(){this.getInvoiceReturn(),this.productPrefix=this.appInfo.productPrefix,this.invoicePrefix=this.appInfo.invoicePrefix,this.returnPrefix=this.appInfo.invoiceReturnPrefix,this.clientPrefix=this.appInfo.clientPrefix},methods:{getInvoiceReturn:function(){var t,e=this;return(t=l().mark((function t(){var n,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,a.a.get(window.location.origin+"/api/invoice-returns/"+e.$route.params.slug);case 3:n=t.sent,r=n.data,e.allData=r.data,e.returnProducts=e.allData.invoiceReturnProducts,e.returnProducts.sort(e.sortProducts),e.calculateTotalAmount(),e.loading=!1;case 10:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){u(o,r,a,i,s,"next",t)}function s(t){u(o,r,a,i,s,"throw",t)}i(void 0)}))})()},sortProducts:function(t,e){return t.productCode<e.productCode?-1:t.productCode>e.productCode?1:0},calculateTotalAmount:function(){var t=0,e=0;this.allData.invoiceReturnProducts&&(t=this.allData.invoiceReturnProducts.reduce((function(t,e){return t+Number(e.invoiceQty)*Number(e.salePrice)}),0),e=this.allData.invoiceReturnProducts.reduce((function(t,e){return t+Number(e.returnQty)*Number(e.salePrice)}),0)),this.invoiceSubTotal=t,this.invoiceReturn=e},printWindow:function(){window.print()},generatePDF:function(){var t=document.getElementById("content-to-pdf"),e={margin:5,filename:"Invoice Return -"+this.$route.params.slug+".pdf",image:{type:"jpeg",quality:.98},pagebreak:{mode:"avoid-all",before:"#page-break"},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"landscape"}};s()().from(t).set(e).save()}}},_=n(1),d=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row no-print mb-2"},[e("div",{staticClass:"w-100 text-right float-right"},[t.allData?e("div",{staticClass:"btn-group"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.generatePDF()}}},[e("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("download"))+"\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(e){return t.printWindow()}}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print"))+"\n        ")]),t._v(" "),t.$can("invoice-return-edit")?e("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"invoiceReturns.edit",params:{slug:t.allData.slug}}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("common.edit"))+"\n        ")]):t._e(),t._v(" "),e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"invoiceReturns.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n        ")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"invoice p-3 mb-3 w-100",attrs:{id:"content-to-pdf"}},[e("div",{staticClass:"row invoice-info"},[e("div",{staticClass:"col-sm-4 invoice-col"},[e("CompanyInfo")],1),t._v(" "),e("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[e("h5",[t._v(t._s(t.$t("common.client_details")))]),t._v(" "),t.allData.client?e("div",[t.allData.client.companyName?e("span",[e("strong",[t._v(t._s(t.$t("common.client_id"))+":")]),t._v("\n              "+t._s(t._f("withPrefix")(t.allData.client.clientID,t.clientPrefix))),e("br")]):t._e(),t._v(" "),e("strong",[t._v(t._s(t.$t("common.client_name"))+":")]),t._v("\n            "+t._s(t.allData.client.name)),e("br"),t._v(" "),t.allData.client.companyName?e("span",[e("strong",[t._v(t._s(t.$t("common.company_name"))+":")]),t._v("\n              "+t._s(t.allData.client.companyName)),e("br")]):t._e(),t._v(" "),t.allData.client.email?e("span",[e("strong",[t._v(t._s(t.$t("common.email"))+":")]),t._v("\n              "+t._s(t.allData.client.email)),e("br")]):t._e(),t._v(" "),t.allData.client.contactNumber?e("span",[e("strong",[t._v(t._s(t.$t("common.contact_number"))+":")]),t._v("\n              "+t._s(t.allData.client.contactNumber)),e("br")]):t._e(),t._v(" "),t.allData.client.address?e("span",[e("strong",[t._v(t._s(t.$t("common.address"))+":")]),t._v("\n              "+t._s(t.allData.client.address)),e("br")]):t._e()]):t._e()])]),t._v(" "),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-custom table-responsive"},[t.allData.invoice?e("table",{staticClass:"table table-bordered"},[e("thead",[e("tr",[t.allData.invoice.invoiceNo?e("th",[t._v("\n                    "+t._s(t.$t("common.invoice_no"))+"\n                  ")]):t._e(),t._v(" "),t.allData.returnNo?e("th",[t._v("\n                    "+t._s(t.$t("common.return_no"))+"\n                  ")]):t._e(),t._v(" "),t.allData.invoice.invoiceDate?e("th",[t._v("\n                    "+t._s(t.$t("common.invoice_date"))+"\n                  ")]):t._e(),t._v(" "),t.allData.returnDate?e("th",[t._v("\n                    "+t._s(t.$t("sales.common.return_date"))+"\n                  ")]):t._e(),t._v(" "),t.allData.reason?e("th",[t._v("\n                    "+t._s(t.$t("common.return_reason"))+"\n                  ")]):t._e(),t._v(" "),t.allData.note?e("th",[t._v(t._s(t.$t("common.note")))]):t._e(),t._v(" "),e("th",[t._v(t._s(t.$t("common.status")))]),t._v(" "),t.allData.createdBy?e("th",{staticClass:"text-right"},[t._v("\n                    "+t._s(t.$t("common.created_by"))+"\n                  ")]):t._e()])]),t._v(" "),e("tbody",[e("tr",[t.allData.invoice.invoiceNo?e("td",[t._v("\n                    "+t._s(t._f("withPrefix")(t.allData.invoice.invoiceNo,t.invoicePrefix))+"\n                  ")]):t._e(),t._v(" "),t.allData.returnNo?e("td",[t._v("\n                    "+t._s(t._f("withPrefix")(t.allData.returnNo,t.returnPrefix))+"\n                  ")]):t._e(),t._v(" "),t.allData.invoice.invoiceDate?e("td",[t._v("\n                    "+t._s(t._f("moment")(t.allData.invoice.invoiceDate,"Do MMM, YYYY"))+"\n                  ")]):t._e(),t._v(" "),t.allData.returnDate?e("td",[t._v("\n                    "+t._s(t._f("moment")(t.allData.returnDate,"Do MMM, YYYY"))+"\n                  ")]):t._e(),t._v(" "),t.allData.reason?e("td",[t._v(t._s(t.allData.reason))]):t._e(),t._v(" "),t.allData.note?e("td",[t._v(t._s(t.allData.note))]):t._e(),t._v(" "),e("td",[1===t.allData.status?e("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):e("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),t.allData.createdBy?e("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(t.allData.createdBy)+"\n                  ")]):t._e()])])]):t._e()])])]),t._v(" "),e("div",{staticClass:"row position-relative mt-4 mb-4"},[e("table-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),e("div",{staticClass:"col-12"},[e("strong",{staticClass:"mt-3"},[t._v(t._s(t.$t("common.return_products"))+":")]),t._v(" "),t.allData.invoice?e("div",{staticClass:"table-custom table-responsive text-center"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.product_name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.invoice_qty")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.return_qty")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.unit_price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.subtotal")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("\n                    "+t._s(t.$t("common.total_return"))+"\n                  ")])])]),t._v(" "),t.returnProducts?e("tbody",[t._l(t.returnProducts,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(++r))]),t._v(" "),e("td",[t._v("\n                    "+t._s(t._f("withPrefix")(n.productCode,t.productPrefix))+"\n                  ")]),t._v(" "),e("td",[t._v(t._s(n.productName))]),t._v(" "),e("td",[t._v(t._s(n.invoiceQty)+" "+t._s(n.productUnit))]),t._v(" "),e("td",[t._v(t._s(n.returnQty)+" "+t._s(n.productUnit))]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(n.salePrice)))]),t._v(" "),e("td",[t._v("\n                    "+t._s(t._f("withCurrency")(n.salePrice*n.invoiceQty))+"\n                  ")]),t._v(" "),e("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(t._f("withCurrency")(n.salePrice*n.returnQty))+"\n                  ")])])})),t._v(" "),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"6"}},[e("strong",[t._v(t._s(t.$t("common.subtotal")))])]),t._v(" "),e("td",[e("strong",[t._v(t._s(t._f("withCurrency")(t.allData.invoice.subTotal)))])]),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withCurrency")(t.invoiceReturn)))])])])],2):t._e()])]):t._e()])],1),t._v(" "),t.allData.invoice?e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"offset-xl-8 col-lg-12 col-xl-4 text-lg-right"},[e("div",{staticClass:"table-responsive table-custom table-border-y-0"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",{staticClass:"bg-sub-light text-bold"},[e("th",[t._v(t._s(t.$t("common.subtotal"))+":")]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(t.allData.invoice.subTotal)))])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.return_cost"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.invoiceReturn))+"\n                  ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.discount"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.invoice.discount))+"\n                  ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.transport"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"plus-sign"},[t._v("+")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.invoice.transport))+"\n                  ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.tax"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"plus-sign"},[t._v("+")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.invoice.tax))+"\n                  ")])]),t._v(" "),e("tr",{staticClass:"bg-indigo-light"},[e("th",[t._v(t._s(t.$t("common.total"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"equal-sign"},[t._v("=")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.invoice.subTotal-t.invoiceReturn-t.allData.invoice.discount+t.allData.invoice.transport+t.allData.invoice.tax))+"\n                  ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.total_paid"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.invoice.totalPaid))+"\n                  ")])]),t._v(" "),e("tr",{staticClass:"bg-red-light"},[e("th",[t._v(t._s(t.$t("common.due"))+":")]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(t.allData.invoice.due)))])]),t._v(" "),t.allData.accountPayable?e("tr",{staticClass:"bg-green-light"},[e("th",[t._v(t._s(t.$t("common.account_payable"))+":")]),t._v(" "),e("td",[t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.accountPayable.amount))+"\n                  ")])]):t._e()])])])])]):t._e(),t._v(" "),e("div",{staticClass:"row no-print mt-5"},[e("div",{staticClass:"col-12"},[e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"invoiceReturns.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")]),t._v(" "),e("a",{staticClass:"btn btn-default",attrs:{href:"#"},on:{click:t.printWindow}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print")))])],1)])])])],1)}),[],!1,null,"602ec9a2",null);e.default=d.exports}}]);