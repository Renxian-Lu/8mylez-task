(window.webpackJsonp=window.webpackJsonp||[]).push([["swag-template"],{FHOq:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("FGIj"),o=n("Cxgn"),i=n("ERap"),a=n("gHbT"),u=n("2Y4b");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h,b,d,v=function(t){function e(){return s(this,e),l(this,p(e).apply(this,arguments))}var n,r,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),n=e,(r=[{key:"init",value:function(){if(this._getForm(),!this._form)throw new Error("No form found for the plugin: ".concat(this.constructor.name));this._prepareFormRedirect(),this._registerEvents()}},{key:"_prepareFormRedirect",value:function(){try{var t=a.a.querySelector(this._form,this.options.redirectSelector),e=a.a.querySelector(this._form,this.options.redirectParamSelector);t.value=this.options.redirectTo,e.disabled=!0}catch(t){}}},{key:"_getForm",value:function(){this.el&&"FORM"===this.el.nodeName?this._form=this.el:this._form=this.el.closest("form")}},{key:"_registerEvents",value:function(){this.el.addEventListener("submit",this._formSubmit.bind(this))}},{key:"_formSubmit",value:function(t){t.preventDefault();var e=a.a.getAttribute(this._form,"action"),n=u.a.serialize(this._form);this.$emitter.publish("beforeFormSubmit",n),this._openOffCanvasCarts(e,n)}},{key:"_openOffCanvasCarts",value:function(t,e){var n=this,r=o.a.getPluginInstances("OffCanvasCart");i.a.iterate(r,(function(r){return n._openOffCanvasCart(r,t,e)}))}},{key:"_openOffCanvasCart",value:function(t,e,n){var r=this;t.openOffCanvas(e,n,(function(){r.$emitter.publish("openOffCanvasCart")}))}}])&&f(n.prototype,r),c&&f(n,c),e}(r.a);d={redirectSelector:'[name="redirectTo"]',redirectParamSelector:'[data-redirect-parameters="true"]',redirectTo:"frontend.cart.offcanvas"},(b="options")in(h=v)?Object.defineProperty(h,b,{value:d,enumerable:!0,configurable:!0,writable:!0}):h[b]=d},c6X6:function(t,e,n){"use strict";n.r(e);var r=n("FGIj"),o=n("gHbT");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){return a(this,e),c(this,s(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(r=[{key:"init",value:function(){this.minus=o.a.querySelector(this.el,".decrease"),this.plus=o.a.querySelector(this.el,".increase"),this.field=o.a.querySelector(this.el,'input[type="number"]'),this.registerEvents()}},{key:"registerEvents",value:function(){this.minus.addEventListener("click",this.decreaseQuantity.bind(this)),this.plus.addEventListener("click",this.increaseQuantity.bind(this))}},{key:"decreaseQuantity",value:function(){var t=parseInt(this.options.purchaseSteps),e=parseInt(this.field.value)-t;this.field.value<=t?this.field.value=t:this.field.value=e}},{key:"increaseQuantity",value:function(){var t=parseInt(this.options.purchaseSteps),e=parseInt(this.options.maxQuantity),n=parseInt(this.field.value)+t;console.info(n,e),this.field.value=n>=e?e:parseInt(this.field.value)+t}}])&&u(n.prototype,r),i&&u(n,i),e}(r.a),p=n("FHOq"),y=n("k8s9");function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t,e,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(){return b(this,e),v(this,_(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,t),n=e,(r=[{key:"init",value:function(){this.PluginManager=window.PluginManager,this._cartEl=o.a.querySelector(document,".header-cart"),this._buyEl=o.a.querySelector(document,".btn-buy"),this._client=new y.a(window.accessKey,window.contextToken),m(_(e.prototype),"init",this).call(this),this._buyEl.innerHTML="In den Warenkorb"}},{key:"_openOffCanvasCart",value:function(t,e,n){this._client.post(e,n,this._afterAddItemToCart.bind(this))}},{key:"_afterAddItemToCart",value:function(){this._refreshCartValue(),this._cartFeedback()}},{key:"_cartFeedback",value:function(){var t=this;this._buyEl.innerHTML="Wird in den Warenkorb gelegt",this._buyEl.style.backgroundColor="#526e7f",window.setTimeout((function(){t._buyEl.innerHTML="In den Warenkorb",t._buyEl.style.backgroundColor="#008490",t._buyEl.classList.remove("background-change")}),1e3)}},{key:"_refreshCartValue",value:function(){var t=o.a.querySelector(this._cartEl,"[data-cart-widget]");this.PluginManager.getPluginInstanceFromElement(t,"CartWidget").fetch()}}])&&d(n.prototype,r),i&&d(n,i),e}(p.a);window.PluginManager.register("QuantityField",l,"[data-quantity-field]"),window.PluginManager.override("AddToCart",w,"[data-add-to-cart]")}},[["c6X6","runtime","vendor-node","vendor-shared"]]]);