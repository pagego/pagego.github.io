(window.webpackJsonp=window.webpackJsonp||[]).push([["MessagePage"],{"./src/pages/Message.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n("./node_modules/pagego/index.js")),a=l(n("./node_modules/react/index.js"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.goNext=function(){o.default.next("restorestate")},r.back=function(){o.default.back()},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"innerContainer"},a.default.createElement("div",{className:"back",onClick:this.back},"< back"),a.default.createElement("h2",null,"The message is: "),a.default.createElement("h3",{className:"red"},this.props.message),a.default.createElement("p",{style:{marginBottom:"15px"}},"If you refresh your browser, this message will not disappear."),a.default.createElement("button",{onClick:this.goNext},"Next")))}}]),t}();u.defaultProps={PageTitle:"message"},t.default=u}}]);