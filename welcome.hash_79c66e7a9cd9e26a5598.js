!function(r){function t(t){for(var n,i,a=t[0],c=t[1],s=t[2],p=0,l=[];p<a.length;p++)i=a[p],o[i]&&l.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(r[n]=c[n]);for(f&&f(t);l.length;)l.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var r,t=0;t<u.length;t++){for(var e=u[t],n=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),r=i(i.s=e[0]))}return r}var n={},o={1:0},u=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=r,i.c=n,i.d=function(r,t,e){i.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},i.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},i.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(t,"a",t),t},i.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=c;u.push([365,0]),e()}({134:function(r,t,e){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function r(t){var e,n,o,u;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=i(),n=e.renderToDom,o=e.router,u=e.currentPageConfig,r.next=4,a({pageConfig:t||u,router:o,renderToDom:n});case 4:case"end":return r.stop()}},r,this)}),o=function(){var r=n.apply(this,arguments);return new Promise(function(t,e){return function n(o,u){try{var i=r[o](u),a=i.value}catch(r){return void e(r)}if(!i.done)return Promise.resolve(a).then(function(r){n("next",r)},function(r){n("throw",r)});t(a)}("next")})},function(r){return o.apply(this,arguments)});var i=e(50),a=e(137);r.exports=u},136:function(r,t,e){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function r(t){var e,n,o=t.pageConfig,u=t.url,i=t.router;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e=a({url:u,router:i,pageConfig:o}),n={route:e},!o.getInitialProps){r.next=9;break}return r.t0=Object,r.t1=n,r.next=7,o.getInitialProps(n);case 7:r.t2=r.sent,r.t0.assign.call(r.t0,r.t1,r.t2);case 9:return r.abrupt("return",n);case 10:case"end":return r.stop()}},r,this)}),o=function(){var r=n.apply(this,arguments);return new Promise(function(t,e){return function n(o,u){try{var i=r[o](u),a=i.value}catch(r){return void e(r)}if(!i.done)return Promise.resolve(a).then(function(r){n("next",r)},function(r){n("throw",r)});t(a)}("next")})},function(r){return o.apply(this,arguments)});var i=e(135);function a(r){var t=r.url,e=r.router,n=r.pageConfig;return{args:e.getRouteArguments(t,n)||{},url:t}}r.exports={getUrl:function(r){var t=r.uri;return i(t)},getInitialProps:u}},137:function(r,t,e){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function r(t){var e,n,o,u=t.pageConfig,i=t.router,s=t.navigator,f=void 0===s?function(){return{getCurrentRoute:function(){return window.location.href.replace(window.location.origin,"")}}}():s,p=t.renderToDom;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=f.getCurrentRoute(),n=a({uri:e}),r.next=4,c({pageConfig:u,url:n,router:i});case 4:return o=r.sent,r.next=7,p({pageConfig:u,initialProps:o});case 7:case"end":return r.stop()}},r,this)}),o=function(){var r=n.apply(this,arguments);return new Promise(function(t,e){return function n(o,u){try{var i=r[o](u),a=i.value}catch(r){return void e(r)}if(!i.done)return Promise.resolve(a).then(function(r){n("next",r)},function(r){n("throw",r)});t(a)}("next")})},function(r){return o.apply(this,arguments)});var i=e(136),a=i.getUrl,c=i.getInitialProps;r.exports=u},138:function(r,t,e){"use strict";e.r(t);var n,o=e(134),u=e.n(o);(n=regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u()();case 2:case"end":return r.stop()}},r,void 0)}),function(){var r=n.apply(this,arguments);return new Promise(function(t,e){return function n(o,u){try{var i=r[o](u),a=i.value}catch(r){return void e(r)}if(!i.done)return Promise.resolve(a).then(function(r){n("next",r)},function(r){n("throw",r)});t(a)}("next")})})()},139:function(r,t,e){"use strict";e.r(t);var n=e(66),o=e.n(n),u={route:"/",view:function(){return o.a.createElement("div",null,"Welcome to Reframe.")},htmlStatic:!0};t.default=u},140:function(r){r.exports={name:"@reframe/path-to-regexp",version:"0.1.7",dependencies:{"react-router":"4.2.0",reassert:"^1.1.8"},publishConfig:{access:"public"},repository:"https://github.com/reframejs/reframe/tree/master/plugins/path-to-regexp"}},144:function(r,t,e){"use strict";var n=e(98),o=e(97),u=e(143).default,i={doesMatchUrl:function(r,t){var e=a(r,t);return!!e},getRouteArguments:function(r,t){var e=a(r,t);if(!e)return null;var o={match_info:e};return n(o&&o.constructor===Object,o),e.params},getRouteUri:function(r,t){return o(r&&r.constructor===Object&&0===Object.keys(r).length,"`getRouteUri` not supported for parameterized routes."),t.route}};function a(r,t){var e=t&&t.route;if(!e)return null;o([String,Object].includes(e.constructor));var i=e.constructor===String?{path:e,exact:!0}:Object.assign({exact:!0},e);!function(r){n(r&&r.constructor===Object,r),n(r.pathname&&r.pathname.constructor===String&&r.pathname.startsWith("/"),r)}(r);var a=r.pathname;return u(a,i)}r.exports=i},145:function(r,t,e){"use strict";r.exports=function(){var r=e(144);return{name:e(140).name,router:r}}},146:function(r){r.exports={name:"@reframe/react",version:"0.1.7",dependencies:{"@brillout/index-html":"^0.1.1","@reframe/utils":"0.1.7",react:"^16.1.1","react-dom":"^16.1.1"},publishConfig:{access:"public"},repository:"https://github.com/reframejs/reframe/tree/master/plugins/react"}},156:function(r,t,e){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function r(t){var e,n,o=t.pageConfig,u=t.initialProps;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e=f(e=i.createElement(o.view,u),u),n=document.getElementById(s),a.hydrate(e,n);case 4:case"end":return r.stop()}},r,this)}),o=function(){var r=n.apply(this,arguments);return new Promise(function(t,e){return function n(o,u){try{var i=r[o](u),a=i.value}catch(r){return void e(r)}if(!i.done)return Promise.resolve(a).then(function(r){n("next",r)},function(r){n("throw",r)});t(a)}("next")})},function(r){return o.apply(this,arguments)});var i=e(66),a=e(154),c=e(50),s="root-react";function f(r,t){return c().viewWrappers.forEach(function(e){r=e(r,t)}),r}r.exports=u},157:function(r,t,e){"use strict";r.exports=function(){var r=e(156);return{name:e(146).name,renderToDom:r}}},158:function(r,t,e){"use strict";var n=function(){return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var e=[],n=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,u=r}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return e}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}var u=e(98),i=e(97);function a(r,t){if(i(r&&r.constructor===Object,r),i(r.name,r,"The plugin printed above is missing a name."),i(r.name.constructor===String,r,"The `name` of the plugin printed above should be a string."),!t.has(r)){t.set(r,!0);var e=[r];return(r.plugins||[]).forEach(function(r){e.push.apply(e,o(a(r,t)))}),e}}r.exports={get_r_objects:function(r,t){var e=new WeakMap,c=[];r&&(r.name=r.name||"__root_config__",c.push.apply(c,o(a(r,e))));t&&t.forEach(function(r){c.push.apply(c,o(a(r,e)))});return function(r,t,e){var o={};r.forEach(function(r){u(r.name.constructor===String),o[r.name]=(o[r.name]||0)+1});var a=[];Object.entries(o).forEach(function(r){var t=n(r,2),e=t[0],u=t[1];1!==o[e]&&a.push("Plugin `"+e+"` added "+u+" times.")}),i(0===a.length,"Root Reframe config plugins:",((t||{}).plugins||[]).map(function(r){return r.name}),"","Root extra plugins:",(e||[]).map(function(r){return r.name}),"",a.join("\n"),"","A plugin should be added only one time.")}(c,r),c},get_view_wrappers:function(r,t){var e=r.viewWrappers=[];t.forEach(function(r){var t=r.viewWrapper;t&&e.push(t)})}}},161:function(r,t,e){"use strict";var n=e(49),o=n,u=e(158),i=u.get_r_objects,a=u.get_view_wrappers;r.exports=function(r){o(r.constructor===Object);var t={},e=i(r);return a(t,e),function(r,t){t.reverse().forEach(function(t){t.router&&(r.router=t.router),t.renderToDom&&(r.renderToDom=t.renderToDom)})}(t,e),t}},162:function(r,t,e){"use strict";var n,o;e(50)().addPlugins([e(157)(),e(145)()]),n=e(50)(),o=!0===((o=e(139))||{}).__esModule?o.default:o,n.setCurrentPageConfig(o),e(138)},365:function(r,t,e){e(364),r.exports=e(162)},50:function(r,t,e){"use strict";var n=e(161);r.exports=function(){o||(o=function(){var r=[],t=void 0,e={};return o(),e;function o(){for(var o in e)delete e[o];var a={plugins:r},c=n(a),s=Object.getOwnPropertyDescriptors(c);for(var f in s)Object.defineProperty(e,f,s[f]);Object.assign(e,{addPlugins:i,setCurrentPageConfig:u,currentPageConfig:t})}function u(r){t=r,o()}function i(t){r.push.apply(r,function(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}(t)),o()}}());return o};var o=void 0}});
//# sourceMappingURL=welcome.hash_79c66e7a9cd9e26a5598.js.map