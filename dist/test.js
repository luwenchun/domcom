!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/",n(n.s=0)}([
/*!**************************!*\
  !*** ./test/js/index.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";dc.alwaysRender=!0,n(/*! ./test-new-dc */1)},
/*!********************************!*\
  !*** ./test/js/test-new-dc.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r,o,i,c=n(/*! bdd-test-helper */2);o=c.expect,c.iit,c.idescribe,c.nit,c.ndescribe,c.newDemoNode,n(/*! ./helper */4).newDemoNode;var u=dc;r=u.bindings,u.see,u.Tag,u.Text,u.List,u.txt,u.list,u.p,u.div,u.Html,u.html,u.classFn,u.styleFrom,u.Nothing,i=u.isComponent,r({a:1,b:2}).a_,describe("test-base-component",function(){return afterEach(function(){return dc.reset()}),describe("update baseComponent",function(){return it("should dc generate a component",function(){var t;return t=dc(),o(i(t)).to.be.true}),it("dc() chaining call",function(){return dc.div(at("x y")).data({x:x,y:y})})})})},
/*!**********************************************************************!*\
  !*** ./node_modules/_bdd-test-helper@0.0.3@bdd-test-helper/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";if("undefined"==typeof window)var r=n(/*! chai */3);else r=window.chai;e.expect=r.expect,e.iit=it.only,e.idescribe=describe.only,e.nit=function(){},e.ndescribe=function(){}},
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=chai},
/*!***************************!*\
  !*** ./test/js/helper.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r;r=n(/*! extend */5),e.newDemoNode=function(t){var e;return e=document.createElement("div"),document.body.appendChild(e),t&&e.setAttribute("id",t),e},e.fakeEvent=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click",n=arguments[2];return"number"==typeof n?{target:t,type:e,keyCode:n,preventDefault:function(){},stopPropagation:function(){}}:r({target:t,type:e,preventDefault:function(){},stopPropagation:function(){}},n)}},
/*!****************************************************!*\
  !*** ./node_modules/_extend@3.0.2@extend/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===i.call(t)},f=function(t){if(!t||"[object Object]"!==i.call(t))return!1;var e,n=o.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&o.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;for(e in t);return void 0===e||o.call(t,e)},l=function(t,e){c&&"__proto__"===e.name?c(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},p=function(t,e){if("__proto__"===e){if(!o.call(t,e))return;if(u)return u(t,e).value}return t[e]};t.exports=function t(){var e,n,o,i,c,u,s=arguments[0],d=1,y=arguments.length,b=!1;for("boolean"==typeof s&&(b=s,s=arguments[1]||{},d=2),(null==s||"object"!==(void 0===s?"undefined":r(s))&&"function"!=typeof s)&&(s={});d<y;++d)if(null!=(e=arguments[d]))for(n in e)o=p(s,n),s!==(i=p(e,n))&&(b&&i&&(f(i)||(c=a(i)))?(c?(c=!1,u=o&&a(o)?o:[]):u=o&&f(o)?o:{},l(s,{name:n,newValue:t(b,u,i)})):void 0!==i&&l(s,{name:n,newValue:i}));return s}}]);