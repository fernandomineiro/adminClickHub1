/*! For license information please see 57.ae5a78.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{212:function(e,t,r){var a=r(679);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(32)(a,n);a.locals&&(e.exports=a.locals)},519:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r(3),o=r.n(n),i=r(4),s=r(16),c=r.n(s);r(212);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),s=new D(n||[]);return a(i,"_invoke",{value:k(e,r,s)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=p;var m={};function f(){}function g(){}function v(){}var b={};c(b,o,(function(){return this}));var y=Object.getPrototypeOf,h=y&&y(y(P([])));h&&h!==t&&r.call(h,o)&&(b=h);var x=v.prototype=f.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(n,i){!function a(n,o,i,s){var c=u(e[n],e,o);if("throw"!==c.type){var d=c.arg,p=d.value;return p&&"object"==l(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){a("next",e,i,s)}),(function(e){a("throw",e,i,s)})):t.resolve(p).then((function(e){d.value=e,i(d)}),(function(e){return a("throw",e,i,s)}))}s(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}})}function k(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return $()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=j(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=u(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:$}}function $(){return{value:void 0,done:!0}}return g.prototype=v,a(x,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:g,configurable:!0}),g.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new w(p(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(x),c(x,s,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=P,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function p(e,t,r,a,n,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){p(o,a,n,i,s,"next",e)}function s(e){p(o,a,n,i,s,"throw",e)}i(void 0)}))}}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("reports.inventory.page_title")}},data:function(){return{breadcrumbsCurrent:"reports.inventory.breadcrumbs_current",breadcrumbs:[{name:"reports.inventory.breadcrumbs_first",url:"home"},{name:"reports.inventory.breadcrumbs_second",url:""},{name:"reports.inventory.breadcrumbs_active",url:""}],form:new a.a({fromDate:String(new Date(Date.now()-6048e5)),toDate:String(new Date),category:"",subCategory:"",itemName:""}),loading:!1,subCategories:[],products:[],date:new Date,inventoryData:"",stockIn:0,stockOut:0,stockInHand:0,prefix:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(i.b)("operations",["items","appInfo"])),created:function(){this.getCategories(),this.prefix=this.appInfo.productPrefix},methods:{getCategories:function(){var e=this;return u(d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("operations/allData",{path:"/api/all-product-categories"});case 2:e.items.unshift({id:0,name:"All Categories",slug:"all"});case 3:case"end":return t.stop()}}),t)})))()},getSubCategories:function(){var e=this;return u(d().mark((function t(){var r,a,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.subCategories=[],e.form.subCategory="",r=e.form.category.slug,t.next=5,o.a.get(window.location.origin+"/api/pro-sub-categories-by-category/"+r);case 5:a=t.sent,n=a.data,e.subCategories=n.cats,e.products=n.products,e.subCategories.length>0&&e.subCategories.unshift({id:0,name:"All Sub Categories",slug:"all"}),e.products.length>0&&e.products.unshift({id:0,name:"All Items",slug:"all"});case 11:case"end":return t.stop()}}),t)})))()},getProducts:function(){var e=this;return u(d().mark((function t(){var r,a,n,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.products=[],e.form.itemName="",r=e.form.category.slug,a=e.form.subCategory.slug,t.next=6,o.a.get(window.location.origin+"/api/products-by-sub-categories/"+r+"/"+a);case 6:n=t.sent,i=n.data,e.products=i.data,e.products.length>0&&e.products.unshift({id:0,name:"All Items",slug:"all"});case 10:case"end":return t.stop()}}),t)})))()},update:function(e){var t=this;return u(d().mark((function r(){return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,t.form.fromDate=e.from,t.form.toDate=e.to,r.next=5,t.form.post(window.location.origin+"/api/reports/inventory").then((function(e){t.inventoryData=e.data,t.calculateSum(t.inventoryData)})).catch((function(){toast.fire({type:"error",title:t.$t("common.delete_failed")})}));case 5:t.loading=!1;case 6:case"end":return r.stop()}}),r)})))()},inventoryItems:function(e){var t,r=0;for(t in e)e.hasOwnProperty(t)&&r++;return r},calculateSum:function(e){var t=0,r=0,a=0,n=0;for(n in e)e.hasOwnProperty(n)&&(t+=Number(e[n].stockIn),r+=Number(e[n].stockOut),a+=Number(e[n].availableStock));this.stockIn=t,this.stockOut=r,this.stockInHand=a},printWindow:function(){window.print()},generatePDF:function(){var e=document.getElementById("content-to-pdf");c()().from(e).set({margin:5,filename:"Inventory Report.pdf",image:{type:"jpeg",quality:.98},pagebreak:{mode:"avoid-all",before:"#page-break"},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"landscape"}}).save()}}},v=r(1),b=Object(v.a)(g,(function(){var e=this,t=e._self._c;return t("div",[t("breadcrumbs",{attrs:{items:e.breadcrumbs,current:e.breadcrumbsCurrent}}),e._v(" "),t("div",{staticClass:"row no-print"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"card"},[t("form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),e.saveType.apply(null,arguments)},keydown:function(t){return e.form.onKeydown(t)}}},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"row"},[e.items?t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"category"}},[e._v(e._s(e.$t("common.category"))+"\n                  "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("v-select",{class:{"is-invalid":e.form.errors.has("category")},attrs:{options:e.items,label:"name",name:"category",placeholder:e.$t("common.category_name_placeholder")},on:{input:e.getSubCategories},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"category"}})],1):e._e(),e._v(" "),e.items?t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"subCategory"}},[e._v(e._s(e.$t("common.sub_category_name"))+"\n                  "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("v-select",{class:{"is-invalid":e.form.errors.has("subCategory")},attrs:{options:e.subCategories,label:"name",name:"subCategory",placeholder:e.$t("common.category_name_placeholder")},on:{input:e.getProducts},model:{value:e.form.subCategory,callback:function(t){e.$set(e.form,"subCategory",t)},expression:"form.subCategory"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"subCategory"}})],1):e._e()]),e._v(" "),t("div",{staticClass:"row"},[e.items?t("div",{staticClass:"form-group col-md-12"},[t("label",{attrs:{for:"itemName"}},[e._v(e._s(e.$t("common.product_name"))+"\n                  "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("v-select",{class:{"is-invalid":e.form.errors.has("itemName")},attrs:{options:e.products,label:"name",name:"itemName",placeholder:e.$t("common.product_name_placeholder")},model:{value:e.form.itemName,callback:function(t){e.$set(e.form,"itemName",t)},expression:"form.itemName"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"itemName"}})],1):e._e()]),e._v(" "),t("div",{staticClass:"col-12"},[[t("date-range-picker",{attrs:{from:e.form.fromDate,to:e.form.toDate,panel:e.$route.query.panel},on:{update:e.update}})]],2)])])])])]),e._v(" "),t("div",{staticClass:"row no-print mb-2"},[t("div",{staticClass:"w-100 text-right float-right"},[e.inventoryData&&e.inventoryItems(e.inventoryData)>0?t("div",{staticClass:"btn-group"},[t("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(t){return e.generatePDF()}}},[t("i",{staticClass:"fas fa-download"}),e._v(" "+e._s(e.$t("download"))+"\n        ")]),e._v(" "),t("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(t){return e.printWindow()}}},[t("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.$t("common.print"))+"\n        ")]),e._v(" "),t("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"home"}}},[t("i",{staticClass:"fas fa-long-arrow-alt-left"}),e._v(" "+e._s(e.$t("common.back"))+"\n        ")])],1):e._e()])]),e._v(" "),e.inventoryData&&e.inventoryItems(e.inventoryData)>0?t("div",{staticClass:"row"},[t("div",{staticClass:"invoice p-3 mb-3 w-100",attrs:{id:"content-to-pdf"}},[t("div",{staticClass:"row invoice-info"},[t("div",{staticClass:"col-sm-4 invoice-col"},[t("CompanyInfo")],1),e._v(" "),t("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[t("h5",[e._v(e._s(e.$t("reports.inventory.page_title")))]),e._v(" "),t("br"),e._v(" "),t("span",[t("strong",[e._v(e._s(e.$t("common.date"))+":")]),e._v("\n            "+e._s(e._f("moment")(e.date,"Do MMM, YYYY")))]),t("br"),e._v(" "),e.form.itemName?t("span",[t("strong",[e._v(e._s(e.$t("common.product_name"))+":")]),e._v("\n            "+e._s(e.form.itemName.name)),t("br")]):e._e(),e._v(" "),t("strong",[e._v(e._s(e.$t("common.category_name"))+":")]),e._v("\n          "+e._s(e.form.category.name)),t("br"),e._v(" "),e.form.subCategory?t("span",[t("strong",[e._v(e._s(e.$t("common.sub_category_name"))+":")]),e._v("\n            "+e._s(e.form.subCategory.name)),t("br")]):e._e(),e._v(" "),t("strong",[e._v(e._s(e.$t("reports.date_range"))+":")]),e._v("\n          "+e._s(e._f("moment")(e.form.fromDate,"Do MMM, YYYY"))+" -\n          "+e._s(e._f("moment")(e.form.toDate,"Do MMM, YYYY"))+" "),t("br")])]),e._v(" "),t("div",{staticClass:"row mt-5 position-relative"},[t("table-loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),e._v(" "),0==e.loading?t("div",{staticClass:"table-responsive table-custom"},[t("table",{staticClass:"table table-sm"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.$t("common.s_no")))]),e._v(" "),t("th",[e._v(e._s(e.$t("common.code")))]),e._v(" "),t("th",[e._v(e._s(e.$t("common.name")))]),e._v(" "),t("th",[e._v(e._s(e.$t("reports.stock_in")))]),e._v(" "),t("th",[e._v(e._s(e.$t("reports.stock_out")))]),e._v(" "),t("th",[e._v(e._s(e.$t("reports.stock_in_hand")))])])]),e._v(" "),t("tbody",[e._l(e.inventoryData,(function(r,a){return t("tr",{key:a},[t("td",[e._v(e._s(++a))]),e._v(" "),t("td",[e._v(e._s(e._f("withPrefix")(r.productCode,e.prefix)))]),e._v(" "),t("td",[e._v(e._s(r.productName))]),e._v(" "),t("td",[e._v(e._s(r.stockIn))]),e._v(" "),t("td",[e._v(e._s(r.stockOut))]),e._v(" "),t("td",[e._v(e._s(r.availableStock))])])})),e._v(" "),t("tr",[t("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t("strong",[e._v(e._s(e.$t("reports.total_quantity")))])]),e._v(" "),t("td",[t("strong",[e._v(e._s(e.stockIn))])]),e._v(" "),t("td",[t("strong",[e._v(e._s(e.stockOut))])]),e._v(" "),t("td",[t("strong",[e._v(e._s(e.stockInHand))])])])],2)])]):e._e()],1)])]):e.inventoryData&&e.inventoryItems(e.inventoryData)<=0?t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12 col-xl-10 offset-xl-1"},[t("EmptyTable")],1)]):e._e()],1)}),[],!1,null,null,null);t.default=b.exports},679:function(e,t,r){(e.exports=r(31)(!1)).push([e.i,'.mj-daterange-picker{text-align:left;min-width:400px;width:var(--default-width);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid var(--border-color);border-radius:4px}.mj-daterange-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.mj-daterange-picker .panels-choices{display:grid;grid-gap:10px 10px;grid-template-columns:1fr 1fr 1fr 1fr 1fr;border-bottom:1px solid var(--border-color);padding:20px}.mj-daterange-picker .panels-choices .panel-button{font-size:12px;font-weight:700;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;padding:5px 15px;border-radius:4px;cursor:pointer;background-color:#f2f4f5}.mj-daterange-picker .panels-choices .panel-button.is-current,.mj-daterange-picker .panels-choices .panel-button:hover{background-color:var(--primary-color);color:#fff}.mj-daterange-picker .preset-ranges{padding:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;border-bottom:1px solid var(--border-color)}.mj-daterange-picker .preset-ranges .preset{width:50%;font-size:13px;height:20px;cursor:pointer;position:relative;margin:5px 0}.mj-daterange-picker .preset-ranges .preset input{position:absolute;opacity:0;height:0;width:0}.mj-daterange-picker .preset-ranges .preset input:checked~label .check{background-color:var(--primary-color)}.mj-daterange-picker .preset-ranges .preset input:checked~label .check:after{background-color:transparent}.mj-daterange-picker .preset-ranges .preset label{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mj-daterange-picker .preset-ranges .preset label span+span{margin-left:10px}.mj-daterange-picker .preset-ranges .preset label .check{display:block;position:relative;height:20px;width:20px;background-color:var(--secondary-color);border-radius:10px}.mj-daterange-picker .preset-ranges .preset label .check:after{content:"";position:absolute;height:10px;width:10px;left:50%;top:50%;background-color:#fff;border-radius:100%;border:3px solid #fff;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.mj-daterange-picker .preset-ranges .preset *{cursor:pointer}.mj-calendar{color:var(--contrast-color);background-color:var(--normal-color);padding:20px}.mj-calendar .calendar-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mj-calendar .calendar-header .calendar-month-name{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;color:var(--secondary-color);font-weight:700;font-size:14px}.mj-calendar .calendar-header .calendar-arrow{fill:var(--secondary-color);cursor:pointer}.mj-calendar .calendar-months{margin-top:20px;display:grid;grid-gap:10px 10px;grid-template-columns:1fr 1fr 1fr}.mj-calendar .calendar-months .month{height:50px;padding:10px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:1px solid var(--border-color);border-radius:4px;font-size:13px}.mj-calendar .calendar-months .month:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-months .month.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-months .month.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-months .month:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-quarters{margin-top:20px}.mj-calendar .calendar-quarters .quarter{display:grid;grid-gap:10px 10px;grid-template-columns:1fr 3fr;margin:10px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px}.mj-calendar .calendar-quarters .quarter .months{display:grid;grid-gap:10px 10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-template-columns:1fr 1fr 1fr;border:1px solid var(--border-color);border-radius:4px;height:50px;padding:10px 30px}.mj-calendar .calendar-quarters .quarter .months:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-quarters .quarter .months .month{text-align:center}.mj-calendar .calendar-quarters .quarter.is-selected .months{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-quarters .quarter.is-disabled .months{opacity:.5}.mj-calendar .calendar-quarters .quarter.is-disabled{cursor:not-allowed;pointer-events:none}.mj-calendar .calendar-quarters .quarter:not(.is-disabled) .months{cursor:pointer}.mj-calendar .calendar-years .year{height:50px;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:1px solid var(--border-color);border-radius:4px;font-size:13px;margin:10px 0}.mj-calendar .calendar-years .year:hover{background-color:var(--hover-range-color)}.mj-calendar .calendar-years .year.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-years .year.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-years .year:not(.is-disabled){cursor:pointer}.mj-calendar .calendar-days,.mj-calendar .calendar-days-name{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.mj-calendar .calendar-days-name .day,.mj-calendar .calendar-days .day{width:14.28571%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mj-calendar .calendar-days-name .day{font-size:11px;color:var(--ternary-color);height:30px}.mj-calendar .calendar-days .day{height:40px;font-size:13px;border-top:2px solid #fff;border-bottom:2px solid #fff}.mj-calendar .calendar-days .day:not(.is-current-month){color:var(--ternary-color)}.mj-calendar .calendar-days .day.is-disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.mj-calendar .calendar-days .day.is-today span{color:var(--secondary-color);font-weight:700}.mj-calendar .calendar-days .day.is-in-range{background-color:var(--hover-range-color)}.mj-calendar .calendar-days .day.is-first-range{border-top-left-radius:4px;border-bottom-left-radius:4px}.mj-calendar .calendar-days .day.is-last-range{border-top-right-radius:4px;border-bottom-right-radius:4px}.mj-calendar .calendar-days .day.is-edge-range,.mj-calendar .calendar-days .day.is-selected{background-color:var(--primary-color);color:#fff}.mj-calendar .calendar-days .day:not(.is-disabled){cursor:pointer}.mj-calendar.mj-calendar-days .calendar-days .day:not(.is-edge-range):hover{background-color:var(--hover-day-color)}.mj-daterange-picker-controls{margin-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid var(--border-color);padding:20px}.mj-daterange-picker-controls .mj-daterange-picker-button{height:36px;min-width:150px;padding:5px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:4px;font-size:12px}.mj-daterange-picker-controls .mj-daterange-picker-button:not(.is-disabled){cursor:pointer}.mj-daterange-picker-reset{border:1px solid #e6eaed}.mj-daterange-picker-submit{background-color:var(--primary-color);color:#fff}.mj-daterange-picker-submit.is-disabled{opacity:.5;cursor:not-allowed;pointer-events:none}',""])}}]);