/*! For license information please see 154.1c4e52.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{539:function(e,t,r){"use strict";r.r(t);var a=r(5),o=r(4),i=r(9),s=r(3),n=r.n(s);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){c=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",n=o.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var i=t&&t.prototype instanceof d?t:d,s=Object.create(i.prototype),n=new R(o||[]);return a(s,"_invoke",{value:b(e,r,n)}),s}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var m={};function d(){}function v(){}function g(){}var _={};f(_,i,(function(){return this}));var h=Object.getPrototypeOf,x=h&&h(h(N([])));x&&x!==t&&r.call(x,i)&&(_=x);var y=g.prototype=d.prototype=Object.create(_);function P(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){var o;a(this,"_invoke",{value:function(a,i){function s(){return new t((function(o,s){!function a(o,i,s,n){var c=p(e[o],e,i);if("throw"!==c.type){var f=c.arg,u=f.value;return u&&"object"==l(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,s,n)}),(function(e){a("throw",e,s,n)})):t.resolve(u).then((function(e){f.value=e,s(f)}),(function(e){return a("throw",e,s,n)}))}n(c.arg)}(a,i,o,s)}))}return o=o?o.then(s,s):s()}})}function b(e,t,r){var a="suspendedStart";return function(o,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var n=w(s,r);if(n){if(n===m)continue;return n}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=p(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function w(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=p(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function N(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=g,a(y,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:v,configurable:!0}),v.displayName=f(g,n,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,f(e,n,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},P(C.prototype),f(C.prototype,s,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,a,o,i){void 0===i&&(i=Promise);var s=new C(u(t,r,a,o),i);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},P(y),f(y,n,"Generator"),f(y,i,(function(){return this})),f(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return s.type="throw",s.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var n=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(n&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(n){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var o=a.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function f(e,t,r,a,o,i,s){try{var n=e[i](s),l=n.value}catch(e){return void r(e)}n.done?t(l):Promise.resolve(l).then(a,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){f(i,a,o,s,n,"next",e)}function n(e){f(i,a,o,s,n,"throw",e)}s(void 0)}))}}var p={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("setup.general_settings.index.page_title")}},data:function(){return{allClients:[],allAccounts:[],allVatRates:[],breadcrumbsCurrent:"setup.general_settings.index.breadcrumbs_current",breadcrumbs:[{name:"setup.general_settings.index.breadcrumbs_first",url:"home"},{name:"setup.general_settings.index.breadcrumbs_second",url:"setup.index"},{name:"setup.general_settings.index.breadcrumbs_active",url:""}],form:new a.a({companyName:"",companyTagline:"",emailAddress:"",phoneNumber:"",address:"",clientPrefix:"",supplierPrefix:"",employeePrefix:"",proCatPrefix:"",proSubCatPrefix:"",productPrefix:"",expCatPrefix:"",expSubCatPrefix:"",purchasePrefix:"",purchaseReturnPrefix:"",quotationPrefix:"",invoicePrefix:"",invoiceReturnPrefix:"",adjustmentPrefix:"",currency:"",language:"en",copyrightText:"",logo:"",blackLogo:"",smallLogo:"",favicon:"",defaultClient:"",defaultAccount:"",defaultVatRate:""}),logo:"",blackLogo:"",smallLogo:"",favicon:"",isDemoMode:window.config.isDemoMode}},computed:Object(o.b)({appInfo:"operations/appInfo",items:"operations/items"}),created:function(){this.getVatRates(),this.getCurrencies(),this.getClients(),this.getAccounts(),this.assignValues()},methods:{getCurrencies:function(){var e=this;return u(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("operations/allData",{path:"/api/all-currencies"});case 2:case"end":return t.stop()}}),t)})))()},getClients:function(){var e=this;return u(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("/api/all-clients").then((function(t){if(e.allClients=t.data.data,e.allClients&&e.allClients.length>0){var r=e.appInfo.defaultClientSlug;e.form.defaultClient=e.allClients.find((function(e){return e.slug===r}))}}));case 2:case"end":return t.stop()}}),t)})))()},getAccounts:function(){var e=this;return u(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("/api/all-accounts").then((function(t){if(e.allAccounts=t.data.data,e.allAccounts&&e.allAccounts.length>0){var r=e.appInfo.defaultAccountSlug;e.form.defaultAccount=e.allAccounts.find((function(e){return e.slug===r}))}}));case 2:case"end":return t.stop()}}),t)})))()},getVatRates:function(){var e=this;n.a.get("/api/all-vat-rates").then((function(t){if(e.allVatRates=t.data.data,e.allVatRates&&e.allVatRates.length>0){var r=e.appInfo.defaultVatRateSlug;e.form.defaultVatRate=e.allVatRates.find((function(e){return e.slug===r}))}}))},assignValues:function(){this.appInfo&&(this.form.companyName=this.appInfo.companyName,this.form.companyTagline=this.appInfo.companyTagline,this.form.emailAddress=this.appInfo.email,this.form.phoneNumber=this.appInfo.phone,this.form.address=this.appInfo.address,this.form.clientPrefix=this.appInfo.clientPrefix,this.form.supplierPrefix=this.appInfo.supplierPrefix,this.form.employeePrefix=this.appInfo.employeePrefix,this.form.proCatPrefix=this.appInfo.proCatPrefix,this.form.proSubCatPrefix=this.appInfo.proSubCatPrefix,this.form.productPrefix=this.appInfo.productPrefix,this.form.expCatPrefix=this.appInfo.expCatPrefix,this.form.expSubCatPrefix=this.appInfo.expSubCatPrefix,this.form.purchasePrefix=this.appInfo.purchasePrefix,this.form.purchaseReturnPrefix=this.appInfo.purchaseReturnPrefix,this.form.quotationPrefix=this.appInfo.quotationPrefix,this.form.invoicePrefix=this.appInfo.invoicePrefix,this.form.invoiceReturnPrefix=this.appInfo.invoiceReturnPrefix,this.form.adjustmentPrefix=this.appInfo.adjustmentPrefix,this.form.currency=this.appInfo.currency,this.form.language=this.appInfo.language,this.logo=this.appInfo.logo,this.blackLogo=this.appInfo.blackLogo,this.smallLogo=this.appInfo.smallLogo,this.favicon=this.appInfo.favicon,this.form.copyrightText=this.appInfo.copyright)},onLogoChange:function(e){var t=this,r=e.target.files[0],a=new FileReader;r.size<2111775&&("image/jpeg"===r.type||"image/png"===r.type||"image/gif"===r.type||"image/svg"===r.type)?(a.onloadend=function(e){t.form.logo=a.result},a.readAsDataURL(r),this.logo=URL.createObjectURL(r)):Swal.fire(this.$t("common.error"),this.$t("common.image_error"),"error")},onBlackLogoChange:function(e){var t=this,r=e.target.files[0],a=new FileReader;r.size<2111775&&("image/jpeg"===r.type||"image/png"===r.type||"image/gif"===r.type||"image/svg"===r.type)?(a.onloadend=function(e){t.form.blackLogo=a.result},a.readAsDataURL(r),this.blackLogo=URL.createObjectURL(r)):Swal.fire(this.$t("common.error"),this.$t("common.image_error"),"error")},onSmallLogoChange:function(e){var t=this,r=e.target.files[0],a=new FileReader;r.size<2111775&&("image/jpeg"===r.type||"image/png"===r.type||"image/gif"===r.type||"image/svg"===r.type)?(a.onloadend=function(e){t.form.smallLogo=a.result},a.readAsDataURL(r),this.smallLogo=URL.createObjectURL(r)):Swal.fire(this.$t("common.error"),this.$t("common.image_error"),"error")},onFaviconChange:function(e){var t=this,r=e.target.files[0],a=new FileReader;r.size<2111775&&("image/jpeg"===r.type||"image/png"===r.type||"image/gif"===r.type)?(a.onloadend=function(e){t.form.favicon=a.result},a.readAsDataURL(r),this.favicon=URL.createObjectURL(r)):Swal.fire(this.$t("common.error"),this.$t("common.image_error"),"error")},updateSettings:function(){var e=this;return u(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.form.language,e.$i18n.locale!==r&&(Object(i.b)(r),e.$store.dispatch("lang/setLocale",{locale:r})),e.isDemoMode){t.next=7;break}return t.next=5,e.form.post(window.location.origin+"/api/update-settings").then((function(){toast.fire({type:"success",title:e.$t("setup.general_settings.index.success_message")}),window.location.reload()})).catch((function(){toast.fire({type:"error",title:e.$t("common.error_msg")})}));case 5:t.next=8;break;case 7:toast.fire({type:"warning",title:e.$t("You are not allowed to do this in demo version.")});case 8:case"end":return t.stop()}}),t)})))()}}},m=r(1),d=Object(m.a)(p,(function(){var e=this,t=e._self._c;return t("div",[t("breadcrumbs",{attrs:{items:e.breadcrumbs,current:e.breadcrumbsCurrent}}),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-xl-3"},[t("SettingsSidebar")],1),e._v(" "),t("div",{staticClass:"col-12 col-xl-9"},[t("form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),e.updateSettings.apply(null,arguments)},keydown:function(t){return e.form.onKeydown(t)}}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header setings-header"},[t("h3",{staticClass:"card-title"},[e._v("\n                "+e._s(e.$t("setup.general_settings.index.page_title"))+"\n              ")])]),e._v(" "),t("div",{staticClass:"card-body"},[t("strong",[e._v(e._s(e.$t("setup.general_settings.index.company_info.info_title")))]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"companyName"}},[e._v(e._s(e.$t("common.company_name"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.companyName,expression:"form.companyName"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("companyName")},attrs:{id:"companyName",type:"text",name:"companyName",placeholder:e.$t("common.company_name_placeholder")},domProps:{value:e.form.companyName},on:{input:function(t){t.target.composing||e.$set(e.form,"companyName",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"companyName"}})],1),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"companyTagline"}},[e._v(e._s(e.$t("setup.general_settings.index.company_info.company_tagline"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.companyTagline,expression:"form.companyTagline"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("companyTagline")},attrs:{id:"companyTagline",type:"text",name:"companyTagline",placeholder:e.$t("setup.general_settings.index.company_info.company_tagline_placeholder")},domProps:{value:e.form.companyTagline},on:{input:function(t){t.target.composing||e.$set(e.form,"companyTagline",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"companyTagline"}})],1)]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"emailAddress"}},[e._v(e._s(e.$t("setup.general_settings.index.company_info.email_address"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.emailAddress,expression:"form.emailAddress"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("emailAddress")},attrs:{id:"emailAddress",type:"email",name:"emailAddress",placeholder:e.$t("setup.general_settings.index.company_info.email_address_placeholder")},domProps:{value:e.form.emailAddress},on:{input:function(t){t.target.composing||e.$set(e.form,"emailAddress",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"emailAddress"}})],1),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"phoneNumber"}},[e._v(e._s(e.$t("setup.general_settings.index.company_info.phone_number"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phoneNumber,expression:"form.phoneNumber"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("phoneNumber")},attrs:{id:"phoneNumber",type:"text",name:"phoneNumber",placeholder:e.$t("setup.general_settings.index.company_info.phone_number_placeholder")},domProps:{value:e.form.phoneNumber},on:{input:function(t){t.target.composing||e.$set(e.form,"phoneNumber",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"name"}})],1)]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"address"}},[e._v(e._s(e.$t("common.address")))]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("address")},attrs:{id:"address",placeholder:e.$t("common.address_placeholder")},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"address"}})],1),e._v(" "),t("br"),e._v(" "),t("strong",[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.prefix_title")))]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"clientPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.client_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.clientPrefix,expression:"form.clientPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("clientPrefix")},attrs:{id:"clientPrefix",type:"text",name:"clientPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.client_prefix_placeholder")},domProps:{value:e.form.clientPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"clientPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"clientPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"supplierPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.supplier_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.supplierPrefix,expression:"form.supplierPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("supplierPrefix")},attrs:{id:"supplierPrefix",type:"text",name:"supplierPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.supplier_prefix_placeholder")},domProps:{value:e.form.supplierPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"supplierPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"supplierPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"employeePrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.employee_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.employeePrefix,expression:"form.employeePrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("employeePrefix")},attrs:{id:"employeePrefix",type:"text",name:"employeePrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.employee_prefix_placeholder")},domProps:{value:e.form.employeePrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"employeePrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"employeePrefix"}})],1)]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"proCatPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.product_category_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.proCatPrefix,expression:"form.proCatPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("proCatPrefix")},attrs:{id:"proCatPrefix",type:"text",name:"proCatPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.product_category_prefix_placeholder")},domProps:{value:e.form.proCatPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"proCatPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"proCatPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"proSubCatPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.product_sub_category_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.proSubCatPrefix,expression:"form.proSubCatPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("proSubCatPrefix")},attrs:{id:"proSubCatPrefix",type:"text",name:"proSubCatPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.product_sub_category_prefix_placeholder")},domProps:{value:e.form.proSubCatPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"proSubCatPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"proSubCatPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"productPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.product_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.productPrefix,expression:"form.productPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("productPrefix")},attrs:{id:"productPrefix",type:"text",name:"productPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.product_prefix_placeholder")},domProps:{value:e.form.productPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"productPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"productPrefix"}})],1)]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"expCatPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.expense_category_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expCatPrefix,expression:"form.expCatPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("expCatPrefix")},attrs:{id:"expCatPrefix",type:"text",name:"expCatPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.expense_category_prefix_placeholder")},domProps:{value:e.form.expCatPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"expCatPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"expCatPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"expSubCatPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.expense_sub_category_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expSubCatPrefix,expression:"form.expSubCatPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("expSubCatPrefix")},attrs:{id:"expSubCatPrefix",type:"text",name:"expSubCatPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.expense_sub_category_prefix_placeholder")},domProps:{value:e.form.expSubCatPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"expSubCatPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"expSubCatPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"purchasePrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.purchase_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.purchasePrefix,expression:"form.purchasePrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("purchasePrefix")},attrs:{id:"purchasePrefix",type:"text",name:"purchasePrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.purchase_prefix_placeholder")},domProps:{value:e.form.purchasePrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"purchasePrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"purchasePrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"purchaseReturnPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.purchase_return_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.purchaseReturnPrefix,expression:"form.purchaseReturnPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("purchaseReturnPrefix")},attrs:{id:"purchaseReturnPrefix",type:"text",name:"purchaseReturnPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.purchase_return_prefix_placeholder")},domProps:{value:e.form.purchaseReturnPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"purchaseReturnPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"purchaseReturnPrefix"}})],1)]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"quotationPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.quotation_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.quotationPrefix,expression:"form.quotationPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("quotationPrefix")},attrs:{id:"quotationPrefix",type:"text",name:"quotationPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.quotation_prefix_placeholder")},domProps:{value:e.form.quotationPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"quotationPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"quotationPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"invoicePrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.invoice_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.invoicePrefix,expression:"form.invoicePrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("invoicePrefix")},attrs:{id:"invoicePrefix",type:"text",name:"invoicePrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.invoice_prefix_placeholder")},domProps:{value:e.form.invoicePrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"invoicePrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"invoicePrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"invoiceReturnPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.invoice_return_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.invoiceReturnPrefix,expression:"form.invoiceReturnPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("invoiceReturnPrefix")},attrs:{id:"invoiceReturnPrefix",type:"text",name:"invoiceReturnPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.invoice_return_prefix_placeholder")},domProps:{value:e.form.invoiceReturnPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"invoiceReturnPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"invoiceReturnPrefix"}})],1),e._v(" "),t("div",{staticClass:"form-group col-lg-6 col-xl-3"},[t("label",{attrs:{for:"adjustmentPrefix"}},[e._v(e._s(e.$t("setup.general_settings.index.code_prefixes.invoice_adjustment_prefix"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.adjustmentPrefix,expression:"form.adjustmentPrefix"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("adjustmentPrefix")},attrs:{id:"adjustmentPrefix",type:"text",name:"adjustmentPrefix",placeholder:e.$t("setup.general_settings.index.code_prefixes.invoice_adjustment_prefix_placeholder")},domProps:{value:e.form.adjustmentPrefix},on:{input:function(t){t.target.composing||e.$set(e.form,"adjustmentPrefix",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"adjustmentPrefix"}})],1)]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v(e._s(e.$t("setup.general_settings.index.default_elements.default_elements_title")))]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"row"},[e.items?t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"currency"}},[e._v(e._s(e.$t("setup.general_settings.index.default_elements.default_currency"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("v-select",{class:{"is-invalid":e.form.errors.has("currency")},attrs:{options:e.items,label:"label",name:"currency",placeholder:e.$t("setup.general_settings.index.default_elements.select_a_currency")},model:{value:e.form.currency,callback:function(t){e.$set(e.form,"currency",t)},expression:"form.currency"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"currency"}})],1):e._e(),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"language"}},[e._v(e._s(e.$t("setup.general_settings.index.default_elements.default_language"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.language,expression:"form.language"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("language")},attrs:{name:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"language",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:"en"}},[e._v("\n                      "+e._s(e.$t("setup.general_settings.index.default_elements.english_en"))+"\n                    ")]),e._v(" "),t("option",{attrs:{value:"hi"}},[e._v("\n                      "+e._s(e.$t("setup.general_settings.index.default_elements.hindi_hi"))+"\n                    ")])]),e._v(" "),t("has-error",{attrs:{form:e.form,field:"language"}})],1)]),e._v(" "),t("div",{staticClass:"row"},[this.allClients?t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"client"}},[e._v(e._s(e.$t("setup.general_settings.index.default_elements.default_client"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("v-select",{class:{"is-invalid":e.form.errors.has("defaultClient")},attrs:{options:this.allClients,label:"name",name:"client",placeholder:e.$t("setup.general_settings.index.default_elements.select_a_client")},model:{value:e.form.defaultClient,callback:function(t){e.$set(e.form,"defaultClient",t)},expression:"form.defaultClient"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"defaultClient"}})],1):e._e(),e._v(" "),this.allAccounts?t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"client"}},[e._v(e._s(e.$t("setup.general_settings.index.default_elements.default_account"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("v-select",{class:{"is-invalid":e.form.errors.has("defaultAccount")},attrs:{options:e.allAccounts,label:"bankName",name:"account",placeholder:e.$t("setup.general_settings.index.default_elements.select_a_account")},model:{value:e.form.defaultAccount,callback:function(t){e.$set(e.form,"defaultAccount",t)},expression:"form.defaultAccount"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"defaultAccount"}})],1):e._e(),e._v(" "),this.allVatRates?t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"vatRate"}},[e._v(e._s(e.$t("setup.general_settings.index.default_elements.default_vat_rate"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("v-select",{class:{"is-invalid":e.form.errors.has("defaultVatRate")},attrs:{options:this.allVatRates,label:"name",name:"vatRate",placeholder:e.$t("setup.general_settings.index.default_elements.select_a_vat_rate")},model:{value:e.form.defaultVatRate,callback:function(t){e.$set(e.form,"defaultVatRate",t)},expression:"form.defaultVatRate"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"defaultVatRate"}})],1):e._e()]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"logo"}},[e._v(e._s(e.$t("setup.general_settings.index.logo.white_logo")))]),e._v(" "),t("div",{staticClass:"custom-file"},[t("input",{staticClass:"custom-file-input",class:{"is-invalid":e.form.errors.has("logo")},attrs:{id:"logo",type:"file",name:"logo"},on:{change:e.onLogoChange}}),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"logo"}},[e._v(e._s(e.$t("common.choose_file")))])]),e._v(" "),t("has-error",{attrs:{form:e.form,field:"logo"}}),e._v(" "),t("div",{staticClass:"bg-light mt-4 w-25"},[e.logo?t("img",{staticClass:"img-fluid",attrs:{src:e.logo,alt:"Logo"}}):e._e()])],1),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"blackLogo"}},[e._v(e._s(e.$t("setup.general_settings.index.logo.black_logo")))]),e._v(" "),t("div",{staticClass:"custom-file"},[t("input",{staticClass:"custom-file-input",class:{"is-invalid":e.form.errors.has("blackLogo")},attrs:{id:"blackLogo",type:"file",name:"blackLogo"},on:{change:e.onBlackLogoChange}}),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"blackLogo"}},[e._v(e._s(e.$t("common.choose_file")))])]),e._v(" "),t("has-error",{attrs:{form:e.form,field:"blackLogo"}}),e._v(" "),t("div",{staticClass:"bg-light mt-4 w-25"},[e.blackLogo?t("img",{staticClass:"img-fluid",attrs:{src:e.blackLogo,alt:"Black Logo"}}):e._e()])],1)]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"smallLogo"}},[e._v(e._s(e.$t("setup.general_settings.index.logo.small_logo")))]),e._v(" "),t("div",{staticClass:"custom-file"},[t("input",{staticClass:"custom-file-input",class:{"is-invalid":e.form.errors.has("smallLogo")},attrs:{id:"smallLogo",type:"file",name:"smallLogo"},on:{change:e.onSmallLogoChange}}),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"smallLogo"}},[e._v(e._s(e.$t("common.choose_file")))])]),e._v(" "),t("has-error",{attrs:{form:e.form,field:"smallLogo"}}),e._v(" "),t("div",{staticClass:"bg-light mt-4 w-25"},[e.smallLogo?t("img",{staticClass:"img-fluid",attrs:{src:e.smallLogo,alt:"Small Logo"}}):e._e()])],1),e._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",{attrs:{for:"favicon"}},[e._v(e._s(e.$t("setup.general_settings.index.logo.favicon")))]),e._v(" "),t("div",{staticClass:"custom-file"},[t("input",{staticClass:"custom-file-input",class:{"is-invalid":e.form.errors.has("favicon")},attrs:{id:"favicon",type:"file",name:"favicon"},on:{change:e.onFaviconChange}}),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"favicon"}},[e._v(e._s(e.$t("common.choose_file")))])]),e._v(" "),t("has-error",{attrs:{form:e.form,field:"favicon"}}),e._v(" "),t("div",{staticClass:"bg-light mt-4 w-25"},[e.favicon?t("img",{staticClass:"img-fluid",attrs:{src:e.favicon,alt:"Favicon"}}):e._e()])],1)]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-md-12"},[t("label",{attrs:{for:"copyrightText"}},[e._v(e._s(e.$t("setup.general_settings.index.default_elements.copyright_text"))+"\n                    "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.copyrightText,expression:"form.copyrightText"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("copyrightText")},attrs:{id:"copyrightText",type:"text",name:"copyrightText",placeholder:"$t('setup.general_settings.index.default_elements.copyright_text_placeholder')"},domProps:{value:e.form.copyrightText},on:{input:function(t){t.target.composing||e.$set(e.form,"copyrightText",t.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"copyrightText"}})],1)])]),e._v(" "),t("div",{staticClass:"card-footer"},[t("v-button",{staticClass:"btn btn-primary",attrs:{loading:e.form.busy}},[t("i",{staticClass:"fas fa-edit"}),e._v(" "+e._s(e.$t("common.save_changes"))+"\n              ")])],1)])])])])],1)}),[],!1,null,null,null);t.default=d.exports}}]);