/*! For license information please see 59.5a25d3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{212:function(t,e,r){var a=r(679);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(32)(a,o);a.locals&&(t.exports=a.locals)},521:function(t,e,r){"use strict";r.r(e);var a=r(5),o=r(4),n=r(16),s=r.n(n);r(212);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function p(t,e,r,o){var n=e&&e.prototype instanceof v?e:v,s=Object.create(n.prototype),i=new D(o||[]);return a(s,"_invoke",{value:j(t,r,i)}),s}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var f={};function v(){}function m(){}function h(){}var g={};d(g,n,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(O([])));b&&b!==e&&r.call(b,n)&&(g=b);var y=h.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;a(this,"_invoke",{value:function(a,n){function s(){return new e((function(o,s){!function a(o,n,s,l){var c=u(t[o],t,n);if("throw"!==c.type){var d=c.arg,p=d.value;return p&&"object"==i(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){a("next",t,s,l)}),(function(t){a("throw",t,s,l)})):e.resolve(p).then((function(t){d.value=t,s(d)}),(function(t){return a("throw",t,s,l)}))}l(c.arg)}(a,n,o,s)}))}return o=o?o.then(s,s):s()}})}function j(t,e,r){var a="suspendedStart";return function(o,n){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===o)throw n;return L()}for(r.method=o,r.arg=n;;){var s=r.delegate;if(s){var i=k(s,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(t,e,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function k(t,e){var r=e.method,a=t.iterator[r];if(void 0===a)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=u(a,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function O(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=h,a(y,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:m,configurable:!0}),m.displayName=d(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,d(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(w.prototype),d(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,a,o,n){void 0===n&&(n=Promise);var s=new w(p(e,r,a,o),n);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(y),d(y,c,"Generator"),d(y,n,(function(){return this})),d(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=O,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],s=n.completion;if("root"===n.tryLoc)return a("end");if(n.tryLoc<=this.prev){var i=r.call(n,"catchLoc"),l=r.call(n,"finallyLoc");if(i&&l){if(this.prev<n.catchLoc)return a(n.catchLoc,!0);if(this.prev<n.finallyLoc)return a(n.finallyLoc)}else if(i){if(this.prev<n.catchLoc)return a(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return a(n.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var o=a.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,e,r,a,o,n,s){try{var i=t[n](s),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(a,o)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("reports.profit_loss.page_title")}},data:function(){return{breadcrumbsCurrent:"reports.profit_loss.breadcrumbs_current",breadcrumbs:[{name:"reports.profit_loss.breadcrumbs_first",url:"home"},{name:"reports.profit_loss.breadcrumbs_second",url:""},{name:"reports.profit_loss.breadcrumbs_active",url:""}],form:new a.a({fromDate:String(new Date(Date.now()-6048e5)),toDate:String(new Date),reportType:1}),loading:!1,allData:"",reportType:"",totalQty:0,grossItems:[],totalProfitOrLoss:0,totalPurchased:0,totalSold:0,date:new Date,productPrefix:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.b)("operations",["appInfo"])),methods:{update:function(t){var e,r=this;return(e=l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.form.fromDate=t.from,r.form.toDate=t.to,r.productPrefix=r.appInfo.productPrefix,r.loading=!0,e.next=6,r.form.post(window.location.origin+"/api/reports/profit-loss").then((function(t){r.allData=t.data.reportData,r.reportType=t.data.type,1==r.reportType&&(r.calculateTotal(r.allData),r.grossItems=r.allData,r.grossItems.sort(r.sortProducts)),r.loading=!1})).catch((function(){toast.fire({type:"error",title:r.$t("common.delete_failed")})}));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function s(t){c(n,a,o,s,i,"next",t)}function i(t){c(n,a,o,s,i,"throw",t)}s(void 0)}))})()},sortProducts:function(t,e){return t.code<e.code?-1:t.code>e.code?1:0},calculateTotal:function(t){var e=this,r=[0,0,0,0];this.totalQty=r[0],this.totalProfitOrLoss=r[1],this.totalPurchased=r[2],this.totalSold=r[3],t.forEach((function(t){e.totalQty+=t.currentQty,e.totalProfitOrLoss+=t.profitOrLoss,e.totalPurchased+=t.avgPurchasePrice*t.currentQty,e.totalSold+=t.avgSalePrice*t.currentQty}))},printWindow:function(){window.print()},generatePDF:function(){var t=document.getElementById("content-to-pdf");s()().from(t).set({margin:5,filename:"Profit/Loss Report.pdf",image:{type:"jpeg",quality:.98},pagebreak:{mode:"avoid-all",before:"#page-break"},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"landscape"}}).save()}}},f=r(1),v=Object(f.a)(u,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row no-print"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card"},[e("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.saveType.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-md-12"},[e("label",{attrs:{for:"reportType"}},[t._v(t._s(t.$t("reports.report_type")))]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.reportType,expression:"form.reportType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("reportType")},attrs:{id:"reportType"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"reportType",e.target.multiple?r:r[0])}}},[e("option",{attrs:{value:"1"}},[t._v("\n                    "+t._s(t.$t("reports.gross_profit_Loss"))+"\n                  ")]),t._v(" "),e("option",{attrs:{value:"0"}},[t._v("\n                    "+t._s(t.$t("reports.net_profit_Loss"))+"\n                  ")])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"reportType"}})],1)]),t._v(" "),e("div",{staticClass:"col-12"},[[e("date-range-picker",{attrs:{from:t.form.fromDate,to:t.form.toDate,panel:t.$route.query.panel},on:{update:t.update}})]],2)])])])])]),t._v(" "),e("div",{staticClass:"row no-print mb-2"},[e("div",{staticClass:"w-100 text-right float-right"},[t.allData&&t.allData.length>0?e("div",{staticClass:"btn-group"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.generatePDF()}}},[e("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("download"))+"\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(e){return t.printWindow()}}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print"))+"\n        ")]),t._v(" "),e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"home"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n        ")])],1):t._e()])]),t._v(" "),t.allData&&t.allData.length>0?e("div",{staticClass:"row"},[e("div",{staticClass:"invoice p-3 mb-3 w-100",attrs:{id:"content-to-pdf"}},[e("div",{staticClass:"row invoice-info"},[e("div",{staticClass:"m-auto invoice-col"},[e("CompanyInfo",{staticClass:"text-center"})],1)]),t._v(" "),e("hr"),t._v(" "),1===t.reportType?e("div",{staticClass:"row mt-5 position-relative"},[e("table-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),0==t.loading?e("div",{staticClass:"table-responsive table-custom mb-2"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("products.list.common.avg_purchase_price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("products.list.common.avg_selling_price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("reports.sold_qty")))]),t._v(" "),e("th",{staticClass:"text-right"},[e("strong",[e("span",{staticClass:"green"},[t._v(t._s(t.$t("reports.profit")))]),t._v(" /\n                    "),e("span",{staticClass:"red"},[t._v(t._s(t.$t("reports.loss")))])])])])]),t._v(" "),e("tbody",[t._l(t.grossItems,(function(r,a){return e("tr",{key:a},[e("td",[t._v(t._s(++a))]),t._v(" "),e("td",[t._v(t._s(t._f("withPrefix")(r.itemCode,t.productPrefix)))]),t._v(" "),e("td",[t._v(t._s(r.itemName))]),t._v(" "),e("td",[t._v(t._s(t._f("withAbsoluteCurrency")(r.avgPurchasePrice)))]),t._v(" "),e("td",[t._v(t._s(t._f("withAbsoluteCurrency")(r.avgSalePrice)))]),t._v(" "),e("td",[t._v(t._s(r.currentQty))]),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[r.profitOrLoss>=0?e("span",{staticClass:"green"},[t._v(t._s(r.profitOrLoss))]):e("span",{staticClass:"red"},[t._v(t._s(r.profitOrLoss))])])])])})),t._v(" "),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"5"}},[e("strong",[t._v(t._s(t.$t("common.total")))])]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.totalQty))])]),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.totalProfitOrLoss)))])])])],2)])]):t._e(),t._v(" "),0==t.loading?e("div",{staticClass:"table-responsive table-custom"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",[t._v(t._s(t.$t("reports.total_sales_avg")))]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.totalSold)))])])]),t._v(" "),t._m(0),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("reports.total_purchased_avg")))]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("u",[e("strong",[t._v("("+t._s(t._f("withAbsoluteCurrency")(t.totalPurchased))+")")])])])]),t._v(" "),e("tr",{class:t.totalProfitOrLoss>=0?"green":"red"},[e("th",[t.totalProfitOrLoss>=0?e("span",[t._v(t._s(t.$t("reports.profit")))]):e("span",[t._v(t._s(t.$t("reports.loss")))])]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.totalProfitOrLoss)))])])])])])]):t._e()],1):e("div",{staticClass:"row mt-5 position-relative"},[e("table-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),e("div",{staticClass:"table-responsive table-custom"},[e("table",{staticClass:"table text-left"},[e("thead",[e("tr",{staticClass:"success text-center"},[e("th",{attrs:{colspan:"3"}},[e("h5",[t._v(t._s(t.$t("reports.income_statement"))+" "),e("br")])])]),t._v(" "),e("tr",{staticClass:"text-center"},[e("td",{attrs:{colspan:"3"}},[e("strong",[t._v(t._s(t.$t("common.from"))+"\n                    "+t._s(t._f("moment")(t.form.fromDate,"Do MMM, YYYY"))+"\n                    "+t._s(t.$t("common.to"))+"\n                    "+t._s(t._f("moment")(t.form.toDate,"Do MMM, YYYY")))])])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v(t._s(t.$t("reports.total_sales")))]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].totalSales)))])])]),t._v(" "),t._m(1),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("reports.cost_of_goods_sold")))]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("u",[e("strong",[t._v("("+t._s(t._f("withAbsoluteCurrency")(t.allData[0].costOfGoodsSold))+")")])])])]),t._v(" "),e("tr",[e("th",{attrs:{colspan:"3"}},[t._v("\n                  "+t._s(t.$t("sidebar.inventory_adjustment"))+"\n                ")])]),t._v(" "),e("tr",{staticClass:"text-success"},[e("td",[t._v(t._s(t.$t("reports.positive_adjusted")))]),t._v(" "),e("td",{staticClass:"text-right"},[e("u",[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].posAdjustment)))])])]),t._v(" "),e("td")]),t._v(" "),e("tr",{staticClass:"text-danger"},[e("td",[t._v(t._s(t.$t("reports.negative_adjusted")))]),t._v(" "),e("td",{staticClass:"text-right"},[e("u",[e("strong",[t._v("("+t._s(t._f("withAbsoluteCurrency")(t.allData[0].negAdjustment))+")")])])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("reports.total_adjusted")))]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right",class:t.allData[0].totalAdjustment>=0?"text-success":"text-danger"},[t.allData[0].totalAdjustment>=0?e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].totalAdjustment)))]):e("strong",[t._v("("+t._s(t._f("withAbsoluteCurrency")(t.allData[0].totalAdjustment))+")")])])]),t._v(" "),e("tr",[e("th",[t.allData[0].grossProfitOrLoss>0?e("span",[t._v(t._s(t.$t("reports.gross_profit")))]):e("span",[t._v(t._s(t.$t("reports.gross_loss")))])]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].grossProfitOrLoss)))])])]),t._v(" "),t._m(2),t._v(" "),e("tr",[e("th",{attrs:{colspan:"3"}},[t._v(t._s(t.$t("reports.operating_expenses")))])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("reports.salaries")))]),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].payrollAmount)))])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("reports.general_expenses")))]),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].expenseAmount)))])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("reports.loan_interest")))]),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].loanInterest)))])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("reports.asset_depriciation")))]),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("withAbsoluteCurrency")(t.allData[0].assetDepriciation)))])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("reports.total_expense")))]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v("("+t._s(t._f("withAbsoluteCurrency")(t.allData[0].totalExpense))+")")])])]),t._v(" "),e("tr",{class:t.allData[0].netProfitOrLoss>=0?"text-success":"text-danger"},[e("th",[t.allData[0].netProfitOrLoss>=0?e("span",[t._v(t._s(t.$t("reports.net_profit")))]):e("span",[t._v(t._s(t.$t("reports.net_loss")))])]),t._v(" "),e("td"),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v("\n                    "+t._s(t._f("withAbsoluteCurrency")(t.allData[0].netProfitOrLoss))+"\n                  ")])])])])])])],1)])]):t.allData&&t.allData.length<=0?e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-xl-10 offset-xl-1"},[e("div",{staticClass:"alert alert-secondary"},[e("h5",[e("i",{staticClass:"icon fas fa-info"}),t._v("\n          "+t._s(t.$t("reports.profit_loss.empty_msg_title"))+"\n        ")]),t._v("\n        "+t._s(t.$t("reports.profit_loss.empty_msg_text"))+"\n      ")])])]):t._e()],1)}),[function(){var t=this._self._c;return t("tr",[t("td",{attrs:{colspan:"3"}})])},function(){var t=this._self._c;return t("tr",[t("td",{attrs:{colspan:"3"}})])},function(){var t=this._self._c;return t("tr",[t("td",{attrs:{colspan:"3"}})])}],!1,null,null,null);e.default=v.exports},679:function(t,e,r){(t.exports=r(31)(!1)).push([t.i,'.mj-daterange-picker{text-align:left;min-width:400px;width:var(--default-width);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid var(--border-color);border-radius:4px}.mj-daterange-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.mj-daterange-picker .panels-choices{display:grid;grid-gap:10px 10px;grid-template-columns:1fr 1fr 1fr 1fr 1fr;border-bottom:1px solid var(--border-color);padding:20px}.mj-daterange-picker .panels-choices .panel-button{font-size:12px;font-weight:700;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;padding:5px 15px;border-radius:4px;cursor:pointer;background-color:#f2f4f5}.mj-daterange-picker .panels-choices .panel-button.is-current,.mj-daterange-picker .panels-choices .panel-button:hover{background-color:var(--primary-color);color:#fff}.mj-daterange-picker .preset-ranges{padding:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;border-bottom:1px solid var(--border-color)}.mj-daterange-picker .preset-ranges .preset{width:50%;font-size:13px;height:20px;cursor:pointer;position:relative;margin:5px 0}.mj-daterange-picker .preset-ranges .preset input{position:absolute;opacity:0;height:0;width:0}.mj-daterange-picker .preset-ranges .preset input:checked~label .check{background-color:var(--primary-color)}.mj-daterange-picker .preset-ranges .preset input:checked~label .check:after{background-color:transparent}.mj-daterange-picker .preset-ranges .preset label{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mj-daterange-picker .preset-ranges .preset label span+span{margin-left:10px}.mj-daterange-picker .preset-ranges .preset label .check{display:block;position:relative;height:20px;width:20px;background-color:var(--secondary-color);border-radius:10px}.mj-daterange-picker .preset-ranges .preset label .check:after{content:"";position:absolute;height:10px;width:10px;left:50%;top:50%;background-color:#fff;border-radius:100%;border:3px solid #fff;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.mj-daterange-picker .preset-ranges .preset *{cursor:pointer}.mj-calendar{color:var(--contrast-color);background-color:var(--normal-color);padding:20px}.mj-calendar .calendar-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mj-calendar .calendar-header .calendar-month-name{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;color:var(--secondary-color);font-weight:700;font-size:14px}.mj-calendar .calendar-header .calendar-arrow{fill:var(--secondary-color);cursor:pointer}.mj-calendar .calendar-months{margin-top:20px;display:grid;grid-gap:10px 10px;grid-template-columns:1fr 1fr 1fr}.mj-calendar .calendar-months .month{height:50px;padding:10px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:1px solid var(--border-color);border-radius:4px;font-size:13px}.mj-calendar .calendar-months .month:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-months .month.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-months .month.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-months .month:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-quarters{margin-top:20px}.mj-calendar .calendar-quarters .quarter{display:grid;grid-gap:10px 10px;grid-template-columns:1fr 3fr;margin:10px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px}.mj-calendar .calendar-quarters .quarter .months{display:grid;grid-gap:10px 10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-template-columns:1fr 1fr 1fr;border:1px solid var(--border-color);border-radius:4px;height:50px;padding:10px 30px}.mj-calendar .calendar-quarters .quarter .months:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-quarters .quarter .months .month{text-align:center}.mj-calendar .calendar-quarters .quarter.is-selected .months{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-quarters .quarter.is-disabled .months{opacity:.5}.mj-calendar .calendar-quarters .quarter.is-disabled{cursor:not-allowed;pointer-events:none}.mj-calendar .calendar-quarters .quarter:not(.is-disabled) .months{cursor:pointer}.mj-calendar .calendar-years .year{height:50px;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:1px solid var(--border-color);border-radius:4px;font-size:13px;margin:10px 0}.mj-calendar .calendar-years .year:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-years .year.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-years .year.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-years .year:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-days,.mj-calendar .calendar-days-name{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.mj-calendar .calendar-days-name .day,.mj-calendar .calendar-days .day{width:14.28571%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mj-calendar .calendar-days-name .day{font-size:11px;color:var(--ternary-color);height:30px}.mj-calendar .calendar-days .day{height:40px;font-size:13px;border-top:2px solid #fff;border-bottom:2px solid #fff}.mj-calendar .calendar-days .day:not(.is-current-month){color:var(--ternary-color)}.mj-calendar .calendar-days .day.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-days .day.is-today span{color:var(--secondary-color);font-weight:700}.mj-calendar .calendar-days .day.is-in-range{background-color:var(--hover-range-color)}.mj-calendar .calendar-days .day.is-first-range{border-top-left-radius:4px;border-bottom-left-radius:4px}.mj-calendar .calendar-days .day.is-last-range{border-top-right-radius:4px;border-bottom-right-radius:4px}.mj-calendar .calendar-days .day.is-edge-range,.mj-calendar .calendar-days .day.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-days .day:not(.is-disabled){cursor:pointer}.mj-calendar.mj-calendar-days .calendar-days .day:not(.is-edge-range):hover{background-color:var(--hover-day-color)}.mj-daterange-picker-controls{margin-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid var(--border-color);padding:20px}.mj-daterange-picker-controls .mj-daterange-picker-button{height:36px;min-width:150px;padding:5px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:4px;font-size:12px}.mj-daterange-picker-controls .mj-daterange-picker-button:not(.is-disabled){cursor:pointer}.mj-daterange-picker-reset{border:1px solid #e6eaed}.mj-daterange-picker-submit{background-color:var(--primary-color);color:#fff}.mj-daterange-picker-submit.is-disabled{opacity:.5;cursor:not-allowed;pointer-events:none}',""])}}]);