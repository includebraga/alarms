webpackJsonp([35783957827783],{435:function(e,t,n){e.exports=n.p+"static/siren.9224a897.mp3"},292:function(e,t){e.exports={root:"src-components-Button-___index__root___3iZ50"}},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(4),u=r(c),i=n(7),_=r(i),l=n(199),f=r(l);n(292);var p=n(435),d=r(p),m=function(e){function t(){var n,r,s;a(this,t);for(var c=arguments.length,u=Array(c),i=0;i<c;i++)u[i]=arguments[i];return n=r=o(this,e.call.apply(e,[this].concat(u))),r.handleClick=function(){var e=new Audio(d.default);e.play(),(0,f.default)(r.props.message)},s=n,o(r,s)}return s(t,e),t.prototype.render=function(){var e=this.props.message;return u.default.createElement("button",{key:e,className:"src-components-Button-___index__root___3iZ50",onClick:this.handleClick},e)},t}(u.default.Component);m.propTypes={message:_.default.string.isRequired},t.default=m,e.exports=t.default},199:function(e,t){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r={volume:1,rate:1,pitch:1,lang:"pt-PT"},a=function(e){var t=n({},r,{text:e}),a=new SpeechSynthesisUtterance;n(a,t),window.speechSynthesis.speak(a)};t.default=a,e.exports=t.default},295:function(e,t){e.exports={root:"src-pages-___index__root___1AzIl",header:"src-pages-___index__header___IEh1s",main:"src-pages-___index__main___3HATL"}},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(4),o=r(a),s=n(196),c=r(s);n(295);var u=function(){return o.default.createElement("div",{className:"src-pages-___index__root___1AzIl"},o.default.createElement("h1",{className:"src-pages-___index__header___IEh1s"},"Ocorrência"),o.default.createElement("div",{className:"src-pages-___index__main___3HATL"},o.default.createElement(c.default,{message:"Incêndio Urbano"}),o.default.createElement(c.default,{message:"Incêndio Florestal"}),o.default.createElement(c.default,{message:"Desencarceramento"}),o.default.createElement(c.default,{message:"Emergência Médica"}),o.default.createElement(c.default,{message:"Transporte"})))};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-77d24c58f4c697b398d8.js.map