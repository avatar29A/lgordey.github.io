(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"i2/s":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test-kundelik",function(){return e("s6jl")}])},s6jl:function(t,n,e){"use strict";e.r(n);var o=e("ln6h"),r=e.n(o),i=e("9Jkg"),a=e.n(i),c=e("dfwq"),u=e("O40h"),s=e("q1tI"),d=e.n(s),l=e("DYRK"),p=e("eVuF"),g=e.n(p);var f=function(t,n){var e=function(){var t={current:0,next:function(){return++this.current}},n={};return{add:function(e,o){var r=null!=o?o:t.next();return n[r]=e,r},resolve:function(t,e,o,r){var i=n[t];i&&(o(r)?i.resolve(e):i.reject(r),n[t]=null)}}}();return n(function(t){if(t.detail&&"reqId"in t.detail){var n=t.detail,o=n.reqId,r=n.data,i=n.error;o&&e.resolve(o,r,function(t){return!t},i)}}),function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return new g.a(function(n,r){var i=e.add({resolve:n,reject:r});t.apply(void 0,[i].concat(o))})}},v=window.aitu_embedded_bridge,k=window.webkit&&window.webkit.messageHandlers,b=function(){var t=[];window.addEventListener("aituEvents",function(n){[].concat(t).map(function(t){return t.call(null,n)})});var n=function(n){t.push(n)};return{getKundelikAuthToken:f(function(t){var n=v&&v.getKundelikAuthToken,e=k&&k.getKundelikAuthToken;n?v.getKundelikAuthToken(t):e?k.getKundelikAuthToken.postMessage({reqId:t}):console.log("--getKundelikAuthToken-isWeb")},n),openSettings:f(function(t){var n=v&&v.openSettings,e=k&&k.openSettings;n?v.openSettings(t):e?k.openSettings.postMessage({reqId:t}):console.log("--openSettings-isWeb")},n),getContacts:f(function(t){var n=v&&v.getContacts,e=k&&k.getContacts;n?v.getContacts(t):e?k.getContacts.postMessage({reqId:t}):console.log("--getContacts-isWeb")},n),isSupported:function(){return Boolean(v||k)},supports:function(t){return v&&"function"===typeof v[t]||k&&k[t]&&"function"===typeof k[t].postMessage},sub:n}}(),w=d.a.createElement;n.default=Object(l.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:"0 20px 20px 0",border:"10px solid black",marginTop:20,"& button, & a, & span":{margin:"20px 0 0 20px",display:"inline-block"}}})(function(t){var n=t.classes,e=Object(s.useState)([]),o=e[0],i=e[1],d=Object(s.useState)([]),l=d[0],p=d[1],g=Object(s.useState)([]),f=g[0],v=g[1],k=Object(s.useState)([]),h=k[0],m=(k[1],function(){var t=Object(u.a)(r.a.mark(function t(n){var e,o,u,s=arguments;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:[],i(function(t){return[].concat(Object(c.a)(t),[n])}),console.log("==handle ".concat(n," method").concat(e.length>0?" with params ".concat(a()(e)):"")),t.prev=3,t.next=6,b[n].apply(b,Object(c.a)(e));case 6:o=t.sent,p(function(t){return[].concat(Object(c.a)(t),[a()(o)])}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(3),console.error(t.t0),u=t.t0 instanceof Error?"".concat(t.t0.name,": ").concat(t.t0.message):a()(t.t0),v(function(t){return[].concat(Object(c.a)(t),[u])});case 15:case"end":return t.stop()}},t,null,[[3,10]])}));return function(n){return t.apply(this,arguments)}}());return w("div",{className:n.testWrapper},w("div",{className:n.btnWrapper},w("button",{onClick:function(){return m("getKundelikAuthToken")}},"getKundelikAuthToken"),w("button",{onClick:function(){return m("openSettings")}},"openSettings"),w("button",{onClick:function(){return m("getContacts")}},"getContacts")),w("div",{style:{marginTop:20}},w("b",null,"Errors:"),h.map(function(t,n){return w("div",{key:n+t},t)})),w("div",{style:{marginTop:20,display:"flex"}},w("div",{style:{width:"30%"}},w("b",{style:{marginBottom:10}},"Invoked methods:"),o.map(function(t,n){return w("div",{key:n+t},n+1+") ",t)})),w("div",{style:{width:"30%"}},w("b",{style:{marginBottom:10}},"Received data:"),l&&l.map(function(t,n){return w("div",{key:n+t},n+1+". ",t)})),w("div",{style:{width:"30%"}},w("b",{style:{marginBottom:10}},"Received errors:"),f&&f.map(function(t,n){return w("div",{key:n+t},n+1+". ",t)}))))})}},[["i2/s",1,0]]]);