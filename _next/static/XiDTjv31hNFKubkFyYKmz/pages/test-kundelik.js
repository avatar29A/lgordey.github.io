(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"i2/s":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test-kundelik",function(){return t("s6jl")}])},s6jl:function(e,n,t){"use strict";t.r(n);var o=t("ln6h"),r=t.n(o),s=t("9Jkg"),i=t.n(s),a=t("dfwq"),c=t("O40h"),u=t("q1tI"),d=t.n(u),l=t("DYRK");function f(e,n){var t,o,r=(t={current:0,next:function(){return++this.current}},o={},{add:function(e,n){var r=null!=n?n:t.next();return o[r]=e,r},resolve:function(e,n,t,r){var s=o[e];s&&(t(r)?s.resolve(n):s.reject(r),o[e]=null)}});return n(function(e){if(e.detail&&"requestId"in e.detail){var n=e.detail,t=n.requestId;t&&r.resolve(t,n.data,function(e){return!e},n.error)}}),function(){var n=arguments;return new Promise(function(t,o){var s=r.add({resolve:t,reject:o});e.apply(void 0,[s].concat([].slice.call(n)))})}}var p="undefined"!=typeof window&&window.aitu_embedded_bridge,g="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,w=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(n){[].concat(e).map(function(e){return e.call(null,n)})});var n=function(n){e.push(n)};return{getKundelikAuthToken:f(function(e){var n=g&&g.getKundelikAuthToken;p&&p.getKundelikAuthToken?p.getKundelikAuthToken(e):n?g.getKundelikAuthToken.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--getKundelikAuthToken-isWeb")},n),openSettings:f(function(e){var n=g&&g.openSettings;p&&p.openSettings?p.openSettings(e):n?g.openSettings.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")},n),getContacts:f(function(e){var n=g&&g.getContacts;p&&p.getContacts?p.getContacts(e):n?g.getContacts.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--getContacts-isWeb")},n),getKundelikUserInfo:f(function(e){var n=g&&g.getKundelikUserInfo;p&&p.getKundelikUserInfo?p.getKundelikUserInfo(e):n?g.getKundelikUserInfo.postMessage({requestId:e}):"undefined"!=typeof window&&console.log("--getKundelikUserInfo-isWeb")},n),showNewMessengerEvent:f(function(e,n){var t=g&&g.showNewMessengerEvent;p&&p.showNewMessengerEvent?p.showNewMessengerEvent(e,n):t?g.showNewMessengerEvent.postMessage({requestId:e,data:n}):"undefined"!=typeof window&&console.log("--showNewMessengerEventMethod-isWeb")},n),isSupported:function(){return Boolean(p||g)},supports:function(e){return p&&"function"==typeof p[e]||g&&g[e]&&"function"==typeof g[e].postMessage},sub:n}}(),v=d.a.createElement,k={eventType:"new_message"};n.default=Object(l.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:"0 20px 20px 0",border:"10px solid black",marginTop:20,"& button, & a, & span":{margin:"20px 0 0 20px",display:"inline-block"}}})(function(e){var n=e.classes,t=Object(u.useState)([]),o=t[0],s=t[1],d=Object(u.useState)([]),l=d[0],f=d[1],p=Object(u.useState)([]),g=p[0],h=p[1],b=Object(u.useState)([]),m=b[0],y=(b[1],function(){var e=Object(c.a)(r.a.mark(function e(n){var t,o,c,u=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:[],s(function(e){return[].concat(Object(a.a)(e),[n])}),console.log("==handle ".concat(n," method").concat(t.length>0?" with params ".concat(i()(t)):"")),e.prev=3,e.next=6,w[n].apply(w,Object(a.a)(t));case 6:o=e.sent,f(function(e){return[].concat(Object(a.a)(e),[i()(o)])}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0),c=e.t0 instanceof Error?"".concat(e.t0.name,": ").concat(e.t0.message):i()(e.t0),h(function(e){return[].concat(Object(a.a)(e),[c])});case 15:case"end":return e.stop()}},e,null,[[3,10]])}));return function(n){return e.apply(this,arguments)}}()),j=function(){var e=Object(c.a)(r.a.mark(function e(n){var t,o,c,u=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:{},s(function(e){return[].concat(Object(a.a)(e),[n])}),console.log("==handle ".concat(n," method"," with params ".concat(i()(t)))),e.prev=3,e.next=6,w[n](t);case 6:o=e.sent,f(function(e){return[].concat(Object(a.a)(e),[i()(o)])}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0),c=e.t0 instanceof Error?"".concat(e.t0.name,": ").concat(e.t0.message):i()(e.t0),h(function(e){return[].concat(Object(a.a)(e),[c])});case 15:case"end":return e.stop()}},e,null,[[3,10]])}));return function(n){return e.apply(this,arguments)}}();return v("div",{className:n.testWrapper},v("div",{className:n.btnWrapper},v("button",{onClick:function(){return y("getKundelikAuthToken")}},"getKundelikAuthToken"),v("button",{onClick:function(){return y("openSettings")}},"openSettings"),v("button",{onClick:function(){return y("getContacts")}},"getContacts"),v("button",{onClick:function(){return y("getKundelikUserInfo")}},"getKundelikUserInfo"),v("button",{onClick:function(){return j("showNewMessengerEvent",k)}},"showNewMessengerEvent")),v("div",{style:{marginTop:20}},v("b",null,"Errors:"),m.map(function(e,n){return v("div",{key:n+e},e)})),v("div",{style:{marginTop:20,display:"flex"}},v("div",{style:{width:"30%"}},v("b",{style:{marginBottom:10}},"Invoked methods:"),o.map(function(e,n){return v("div",{key:n+e},n+1+") ",e)})),v("div",{style:{width:"30%"}},v("b",{style:{marginBottom:10}},"Received data:"),l&&l.map(function(e,n){return v("div",{key:n+e},n+1+". ",e)})),v("div",{style:{width:"30%"}},v("b",{style:{marginBottom:10}},"Received errors:"),g&&g.map(function(e,n){return v("div",{key:n+e},n+1+". ",e)}))))})}},[["i2/s",1,0]]]);