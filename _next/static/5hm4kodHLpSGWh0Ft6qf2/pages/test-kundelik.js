(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"i2/s":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test-kundelik",function(){return e("s6jl")}])},s6jl:function(t,n,e){"use strict";e.r(n);var o=e("ln6h"),r=e.n(o),i=e("9Jkg"),a=e.n(i),c=e("dfwq"),s=e("O40h"),u=e("q1tI"),d=e.n(u),l=e("DYRK"),p=e("eVuF"),g=e.n(p);var f=function(t,n){var e=function(){var t={current:0,next:function(){return++this.current}},n={};return{add:function(e,o){var r=null!=o?o:t.next();return n[r]=e,r},resolve:function(t,e,o,r){var i=n[t];i&&(o(r)?i.resolve(e):i.reject(r),n[t]=null)}}}();return n(function(t){if(t.detail&&"reqId"in t.detail){var n=t.detail,o=n.reqId,r=n.data,i=n.error;o&&e.resolve(o,r,function(t){return!t},i)}}),function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return new g.a(function(n,r){var i=e.add({resolve:n,reject:r});t.apply(void 0,[i].concat(o))})}},v=window.aitu_embedded_bridge,b=window.webkit&&window.webkit.messageHandlers,w=function(){var t=[];window.addEventListener("aituEvents",function(n){[].concat(t).map(function(t){return t.call(null,n)})});var n=function(n){t.push(n)};return{getKundelikAuthToken:f(function(t){var n=v&&v.getKundelikAuthToken,e=b&&b.openSettings;n?v.openSettings(t):e?b.openSettings.postMessage({reqId:t}):console.log("--getKundelikAuthToken-isWeb")},n),openSettings:f(function(t){var n=v&&v.openSettings,e=b&&b.openSettings;n?v.openSettings(t):e?b.openSettings.postMessage({reqId:t}):console.log("--openSettings-isWeb")},n),getContacts:f(function(t){var n=v&&v.getContacts,e=b&&b.openSettings;n?v.openSettings(t):e?b.openSettings.postMessage({reqId:t}):console.log("--getContacts-isWeb")},n),isSupported:function(){return Boolean(v||b)},supports:function(t){return v&&"function"===typeof v[t]||b&&b[t]&&"function"===typeof b[t].postMessage},sub:n}}(),k=d.a.createElement;n.default=Object(l.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:"0 20px 20px 0",border:"10px solid black",marginTop:20,"& button, & a, & span":{margin:"20px 0 0 20px",display:"inline-block"}}})(function(t){var n=t.classes,e=Object(u.useState)([]),o=e[0],i=e[1],d=Object(u.useState)([]),l=d[0],p=d[1],g=Object(u.useState)([]),f=g[0],v=g[1],b=Object(u.useState)([]),m=b[0],h=(b[1],function(){var t=Object(s.a)(r.a.mark(function t(n){var e,o,s,u=arguments;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:[],i(function(t){return[].concat(Object(c.a)(t),[n])}),console.log("==handle ".concat(n," method").concat(e.length>0?" with params ".concat(a()(e)):"")),t.prev=3,t.next=6,w[n].apply(w,Object(c.a)(e));case 6:o=t.sent,p(function(t){return[].concat(Object(c.a)(t),[a()(o)])}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(3),console.error(t.t0),s=t.t0 instanceof Error?"".concat(t.t0.name,": ").concat(t.t0.message):a()(t.t0),v(function(t){return[].concat(Object(c.a)(t),[s])});case 15:case"end":return t.stop()}},t,null,[[3,10]])}));return function(n){return t.apply(this,arguments)}}());return k("div",{className:n.testWrapper},k("div",{className:n.btnWrapper},k("button",{onClick:function(){return h("getKundelikAuthToken")}},"getKundelikAuthToken"),k("button",{onClick:function(){return h("openSettings")}},"openSettings"),k("button",{onClick:function(){return h("getContacts")}},"getContacts")),k("div",{style:{marginTop:20}},k("b",null,"Errors:"),m.map(function(t,n){return k("div",{key:n+t},t)})),k("div",{style:{marginTop:20,display:"flex"}},k("div",{style:{width:"30%"}},k("b",{style:{marginBottom:10}},"Invoked methods:"),o.map(function(t,n){return k("div",{key:n+t},n+1+") ",t)})),k("div",{style:{width:"30%"}},k("b",{style:{marginBottom:10}},"Received data:"),l&&l.map(function(t,n){return k("div",{key:n+t},n+1+". ",t)})),k("div",{style:{width:"30%"}},k("b",{style:{marginBottom:10}},"Received errors:"),f&&f.map(function(t,n){return k("div",{key:n+t},n+1+". ",t)}))))})}},[["i2/s",1,0]]]);