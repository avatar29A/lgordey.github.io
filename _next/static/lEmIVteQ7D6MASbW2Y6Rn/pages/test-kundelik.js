(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"i2/s":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test-kundelik",function(){return n("s6jl")}])},s6jl:function(t,e,n){"use strict";n.r(e);var o=n("ln6h"),r=n.n(o),i=n("9Jkg"),a=n.n(i),u=n("dfwq"),c=n("O40h"),s=n("q1tI"),d=n.n(s),l=n("DYRK"),p=n("eVuF"),g=n.n(p);var f=function(t,e){var n=function(){var t={current:0,next:function(){return++this.current}},e={};return{add:function(n,o){var r=null!=o?o:t.next();return e[r]=n,r},resolve:function(t,n,o,r){var i=e[t];i&&(o(r)?i.resolve(n):i.reject(r),e[t]=null)}}}();return e(function(t){if(t.detail&&"requestId"in t.detail){var e=t.detail,o=e.requestId,r=e.data,i=e.error;o&&n.resolve(o,r,function(t){return!t},i)}}),function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return new g.a(function(e,r){var i=n.add({resolve:e,reject:r});t.apply(void 0,[i].concat(o))})}},v=window.aitu_embedded_bridge,k=window.webkit&&window.webkit.messageHandlers,b=function(){var t=[];window.addEventListener("aituEvents",function(e){[].concat(t).map(function(t){return t.call(null,e)})});var e=function(e){t.push(e)};return{getKundelikAuthToken:f(function(t){var e=v&&v.getKundelikAuthToken,n=k&&k.getKundelikAuthToken;e?v.getKundelikAuthToken(t):n?k.getKundelikAuthToken.postMessage({requestId:t}):console.log("--getKundelikAuthToken-isWeb")},e),openSettings:f(function(t){var e=v&&v.openSettings,n=k&&k.openSettings;e?v.openSettings(t):n?k.openSettings.postMessage({requestId:t}):console.log("--openSettings-isWeb")},e),getContacts:f(function(t){var e=v&&v.getContacts,n=k&&k.getContacts;e?v.getContacts(t):n?k.getContacts.postMessage({requestId:t}):console.log("--getContacts-isWeb")},e),isSupported:function(){return Boolean(v||k)},supports:function(t){return v&&"function"===typeof v[t]||k&&k[t]&&"function"===typeof k[t].postMessage},sub:e}}(),w=d.a.createElement;e.default=Object(l.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:"0 20px 20px 0",border:"10px solid black",marginTop:20,"& button, & a, & span":{margin:"20px 0 0 20px",display:"inline-block"}}})(function(t){var e=t.classes,n=Object(s.useState)([]),o=n[0],i=n[1],d=Object(s.useState)([]),l=d[0],p=d[1],g=Object(s.useState)([]),f=g[0],v=g[1],k=Object(s.useState)([]),h=k[0],m=(k[1],function(){var t=Object(c.a)(r.a.mark(function t(e){var n,o,c,s=arguments;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:[],i(function(t){return[].concat(Object(u.a)(t),[e])}),console.log("==handle ".concat(e," method").concat(n.length>0?" with params ".concat(a()(n)):"")),t.prev=3,t.next=6,b[e].apply(b,Object(u.a)(n));case 6:o=t.sent,p(function(t){return[].concat(Object(u.a)(t),[a()(o)])}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(3),console.error(t.t0),c=t.t0 instanceof Error?"".concat(t.t0.name,": ").concat(t.t0.message):a()(t.t0),v(function(t){return[].concat(Object(u.a)(t),[c])});case 15:case"end":return t.stop()}},t,null,[[3,10]])}));return function(e){return t.apply(this,arguments)}}());return w("div",{className:e.testWrapper},w("div",{className:e.btnWrapper},w("button",{onClick:function(){return m("getKundelikAuthToken")}},"getKundelikAuthToken"),w("button",{onClick:function(){return m("openSettings")}},"openSettings"),w("button",{onClick:function(){return m("getContacts")}},"getContacts")),w("div",{style:{marginTop:20}},w("b",null,"Errors:"),h.map(function(t,e){return w("div",{key:e+t},t)})),w("div",{style:{marginTop:20,display:"flex"}},w("div",{style:{width:"30%"}},w("b",{style:{marginBottom:10}},"Invoked methods:"),o.map(function(t,e){return w("div",{key:e+t},e+1+") ",t)})),w("div",{style:{width:"30%"}},w("b",{style:{marginBottom:10}},"Received data:"),l&&l.map(function(t,e){return w("div",{key:e+t},e+1+". ",t)})),w("div",{style:{width:"30%"}},w("b",{style:{marginBottom:10}},"Received errors:"),f&&f.map(function(t,e){return w("div",{key:e+t},e+1+". ",t)}))))})}},[["i2/s",1,0]]]);