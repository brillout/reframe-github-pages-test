!function(e){function t(t){for(var n,i,a=t[0],c=t[1],s=t[2],p=0,l=[];p<a.length;p++)i=a[p],o[i]&&l.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(t);l.length;)l.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={2:0},u=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=c;u.push([163,0]),r()}({10:function(e,t,r){"use strict";var n=r(51);e.exports=function(){o||(o=function(){var e=[],t=void 0,r={};return o(),r;function o(){for(var o in r)delete r[o];var a={plugins:e},c=n(a),s=Object.getOwnPropertyDescriptors(c);for(var f in s)Object.defineProperty(r,f,s[f]);Object.assign(r,{addPlugins:i,setCurrentPageConfig:u,currentPageConfig:t})}function u(e){t=e,o()}function i(t){e.push.apply(e,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t)),o()}}());return o};var o=void 0},161:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),u=r(24),i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={time:r.getTime()},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),i(t,[{key:"render",value:function(){return o.a.createElement("span",null,this.state.time)}}]),i(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.setState({time:e.getTime()})},1e3)}},{key:"getTime",value:function(){var e=new Date;return[e.getHours(),e.getMinutes(),e.getSeconds()].map(function(e){return e<=9?"0"+e:e}).join(":")}}]),t}();t.default={route:"/time",view:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null),o.a.createElement("div",{style:{textAlign:"center",fontSize:"2em",margin:50}},o.a.createElement(a,null)))},htmlStatic:!0}},162:function(e,t,r){"use strict";var n,o;r(10)().addPlugins([r(49)(),r(46)()]),n=r(10)(),o=!0===((o=r(161))||{}).__esModule?o.default:o,n.setCurrentPageConfig(o),r(41)},163:function(e,t,r){r(89),e.exports=r(162)},24:function(e,t,r){"use strict";var n=r(1),o=r.n(n),u=(r(43),r(26)),i=r.n(u),a=function(){return o.a.createElement("div",{className:"header"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:i.a,className:"logo"}),o.a.createElement("span",null,"MyApp")))};r.d(t,"a",function(){return a})},25:function(e,t,r){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function e(t){var r,n,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=i(),n=r.renderToDom,o=r.router,u=r.currentPageConfig,e.next=4,a({pageConfig:t||u,router:o,renderToDom:n});case 4:case"end":return e.stop()}},e,this)}),o=function(){var e=n.apply(this,arguments);return new Promise(function(t,r){return function n(o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});t(a)}("next")})},function(e){return o.apply(this,arguments)});var i=r(10),a=r(40);e.exports=u},26:function(e,t,r){e.exports=r.p+"logo.hash_a58c73cea39efb53701a30522cd1d6a0.svg"},39:function(e,t,r){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function e(t){var r,n,o=t.pageConfig,u=t.url,i=t.router;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a({url:u,router:i,pageConfig:o}),n={route:r},!o.getInitialProps){e.next=9;break}return e.t0=Object,e.t1=n,e.next=7,o.getInitialProps(n);case 7:e.t2=e.sent,e.t0.assign.call(e.t0,e.t1,e.t2);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this)}),o=function(){var e=n.apply(this,arguments);return new Promise(function(t,r){return function n(o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});t(a)}("next")})},function(e){return o.apply(this,arguments)});var i=r(71);function a(e){var t=e.url,r=e.router,n=e.pageConfig;return{args:r.getRouteArguments(t,n)||{},url:t}}e.exports={getUrl:function(e){var t=e.uri;return i(t)},getInitialProps:u}},40:function(e,t,r){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function e(t){var r,n,o,u=t.pageConfig,i=t.router,s=t.navigator,f=void 0===s?function(){return{getCurrentRoute:function(){return window.location.href.replace(window.location.origin,"")}}}():s,p=t.renderToDom;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.getCurrentRoute(),n=a({uri:r}),e.next=4,c({pageConfig:u,url:n,router:i});case 4:return o=e.sent,e.next=7,p({pageConfig:u,initialProps:o});case 7:case"end":return e.stop()}},e,this)}),o=function(){var e=n.apply(this,arguments);return new Promise(function(t,r){return function n(o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});t(a)}("next")})},function(e){return o.apply(this,arguments)});var i=r(39),a=i.getUrl,c=i.getInitialProps;e.exports=u},41:function(e,t,r){"use strict";r.r(t);var n,o=r(25),u=r.n(o);(n=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()();case 2:case"end":return e.stop()}},e,void 0)}),function(){var e=n.apply(this,arguments);return new Promise(function(t,r){return function n(o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});t(a)}("next")})})()},43:function(e,t,r){},44:function(e){e.exports={name:"@reframe/path-to-regexp",version:"0.1.11",dependencies:{"react-router":"4.2.0",reassert:"^1.1.9"},publishConfig:{access:"public"},repository:"https://github.com/reframejs/reframe/tree/master/plugins/path-to-regexp"}},45:function(e,t,r){"use strict";var n=r(35),o=r(34),u=r(72).default,i={doesMatchUrl:function(e,t){var r=a(e,t);return!!r},getRouteArguments:function(e,t){var r=a(e,t);if(!r)return null;var o={match_info:r};return n(o&&o.constructor===Object,o),r.params},getRouteUri:function(e,t){return o(e&&e.constructor===Object&&0===Object.keys(e).length,"`getRouteUri` not supported for parameterized routes."),t.route}};function a(e,t){var r=t&&t.route;if(!r)return null;o([String,Object].includes(r.constructor));var i=r.constructor===String?{path:r,exact:!0}:Object.assign({exact:!0},r);!function(e){n(e&&e.constructor===Object,e),n(e.pathname&&e.pathname.constructor===String&&e.pathname.startsWith("/"),e)}(e);var a=e.pathname;return u(a,i)}e.exports=i},46:function(e,t,r){"use strict";e.exports=function(){var e=r(45);return{name:r(44).name,router:e}}},47:function(e){e.exports={name:"@reframe/react",version:"0.1.11",dependencies:{"@brillout/index-html":"^0.1.1","@reframe/utils":"0.1.11",react:"^16.1.1","react-dom":"^16.1.1"},publishConfig:{access:"public"},repository:"https://github.com/reframejs/reframe/tree/master/plugins/react"}},48:function(e,t,r){"use strict";var n,o,u=(n=regeneratorRuntime.mark(function e(t){var r,n,o=t.pageConfig,u=t.initialProps;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=f(r=i.createElement(o.view,u),u),n=document.getElementById(s),a.hydrate(r,n);case 4:case"end":return e.stop()}},e,this)}),o=function(){var e=n.apply(this,arguments);return new Promise(function(t,r){return function n(o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});t(a)}("next")})},function(e){return o.apply(this,arguments)});var i=r(67),a=r(73),c=r(10),s="root-react";function f(e,t){return c().viewWrappers.forEach(function(r){e=r(e,t)}),e}e.exports=u},49:function(e,t,r){"use strict";e.exports=function(){var e=r(48);return{name:r(47).name,renderToDom:e}}},50:function(e,t,r){"use strict";var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var u=r(35),i=r(34);function a(e,t){if(i(e&&e.constructor===Object,e),i(e.name,e,"The plugin printed above is missing a name."),i(e.name.constructor===String,e,"The `name` of the plugin printed above should be a string."),!t.has(e)){t.set(e,!0);var r=[e];return(e.plugins||[]).forEach(function(e){r.push.apply(r,o(a(e,t)))}),r}}e.exports={get_r_objects:function(e,t){var r=new WeakMap,c=[];e&&(e.name=e.name||"__root_config__",c.push.apply(c,o(a(e,r))));t&&t.forEach(function(e){c.push.apply(c,o(a(e,r)))});return function(e,t,r){var o={};e.forEach(function(e){u(e.name.constructor===String),o[e.name]=(o[e.name]||0)+1});var a=[];Object.entries(o).forEach(function(e){var t=n(e,2),r=t[0],u=t[1];1!==o[r]&&a.push("Plugin `"+r+"` added "+u+" times.")}),i(0===a.length,"Root Reframe config plugins:",((t||{}).plugins||[]).map(function(e){return e.name}),"","Root extra plugins:",(r||[]).map(function(e){return e.name}),"",a.join("\n"),"","A plugin should be added only one time.")}(c,e),c},get_view_wrappers:function(e,t){var r=e.viewWrappers=[];t.forEach(function(e){var t=e.viewWrapper;t&&r.push(t)})}}},51:function(e,t,r){"use strict";var n=r(62),o=n,u=r(50),i=u.get_r_objects,a=u.get_view_wrappers;e.exports=function(e){o(e.constructor===Object);var t={},r=i(e);return a(t,r),function(e,t){t.reverse().forEach(function(t){t.router&&(e.router=t.router),t.renderToDom&&(e.renderToDom=t.renderToDom)})}(t,r),t}}});
//# sourceMappingURL=TimePage.hash_40829799ef87338f8bbc.js.map