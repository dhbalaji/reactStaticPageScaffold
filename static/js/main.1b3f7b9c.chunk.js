(this.webpackJsonpgithub_actions_with_react=this.webpackJsonpgithub_actions_with_react||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),i=t.n(r),c=(t(12),t(13),t(3)),s=t(4),l=t(5),u=t(6),d=(t(14),function(){var e=new Date,n=e.getHours(),t=e.getMinutes(),o=e.getSeconds();return{hours:n=n<10?"0"+n:n,minutes:t=t<10?"0"+t:t,seconds:o=o<10?"0"+o:o}}),f=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={time:d()},e.tick=function(){e.setState((function(e){return{time:d()}}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.time,n=e.hours,t=e.minutes,o=e.seconds;return a.a.createElement("div",{className:"clock"},a.a.createElement("span",{className:"hour"},n),a.a.createElement("span",{className:"minutes"}," : ",t),a.a.createElement("span",{className:"seconds"}," : ",o))}}]),t}(o.Component);var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:"./img/logo.svg",className:"App-logo",alt:"logo"}),a.a.createElement("p",{className:"App-env"}," > ","production")),a.a.createElement("body",{className:"centre-align"},a.a.createElement(f,null)))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(15);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.1b3f7b9c.chunk.js.map