(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9Jkg":function(e,t,n){e.exports=n("oh+g")},O40h:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("eVuF"),r=n.n(o);function i(e,t,n,o,i,a,c){try{var s=e[a](c),u=s.value}catch(d){return void n(d)}s.done?t(u):r.a.resolve(u).then(o,i)}function a(e){return function(){var t=this,n=arguments;return new r.a(function(o,r){var a=e.apply(t,n);function c(e){i(a,o,r,c,s,"next",e)}function s(e){i(a,o,r,c,s,"throw",e)}c(void 0)})}}},TJeZ:function(e,t,n){"use strict";function o(e,t){var n,o,r=(n={current:0,next:function(){return++this.current}},o={},{add:function(e,t){var r=null!=t?t:n.next();return o[r]=e,r},resolve:function(e,t,n,r){var i=o[e];i&&(n(r)?i.resolve(t):i.reject(r),o[e]=null)}});return t(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&r.resolve(n,t.data,function(e){return!e},t.error)}}),function(){var t=arguments;return new Promise(function(n,o){var i=r.add({resolve:n,reject:o});e.apply(void 0,[i].concat([].slice.call(t)))})}}var r;n.r(t),function(e){e.getMe="GetMe",e.getPhone="GetPhone",e.getContacts="GetContacts",e.enableNotifications="AllowNotifications",e.disableNotifications="DisableNotifications"}(r||(r={}));var i="invoke",a="storage",c="undefined"!=typeof window&&window.AndroidBridge,s="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,u="undefined"!=typeof window&&window.top!==window&&(window.WebBridge=window.WebBridge||{});if(u){var d=window.AITU_ORIGIN||"https://aitu.io";console.log("aituOrigin",d),[i,a].forEach(function(e){u[e]||(u[e]=function(){return window.top.postMessage(JSON.stringify({method:e,payload:[].slice.call(arguments)}),d)})}),window.addEventListener("message",function(e){if(e.origin===d&&e.data)try{var t=JSON.parse(e.data);window.dispatchEvent(new CustomEvent("aituEvents",{detail:t}))}catch(e){}})}var f=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){[].concat(e).map(function(e){return e.call(null,t)})});var t,n,d,f=function(t){e.push(t)},l=(t={current:0,next:function(){return++this.current}},n={},d={add:function(e,o){var r=null!=o?o:t.next();return n[r]=e,r},resolve:function(e,t,o,r){var i=n[e];i&&(o(r)?i.resolve(t):i.reject(r),n[e]=null)}},f(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&d.resolve(n,t.data,function(e){return!e},t.error)}}),function(e,t){return void 0===t&&(t={}),new Promise(function(n,o){!function(e,t,n){void 0===n&&(n={});var o=s&&s[i],r=u&&u[i];c&&c[i]?c[i](e,t,JSON.stringify(n)):o?s[i].postMessage({reqId:e,method:t,data:n}):r?u[i](e,t,n):"undefined"!=typeof window&&console.log("--invoke-isUnknown")}(d.add({resolve:n,reject:o},t.reqId),e,t)})}),p=function(e,t){var n,o,r=(n={current:0,next:function(){return++this.current}},o={},{add:function(e,t){var r="s"+(null!=t?t:n.next());return o[r]=e,r},resolve:function(e,t,n,r){var i=o[e];i&&(n(r)?i.resolve(t):i.reject(r),o[e]=null)}});return f(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&r.resolve(n,t.data,function(e){return!e},t.error)}}),{setItem:function(t,n){return new Promise(function(o,i){var a=r.add({resolve:o,reject:i});e(a,"setItem",{keyName:t,keyValue:n})})},getItem:function(t){return new Promise(function(n,o){var i=r.add({resolve:n,reject:o});e(i,"getItem",{keyName:t})})},clear:function(){return new Promise(function(t,n){var o=r.add({resolve:t,reject:n});e(o,"clear",{})})}}}(function(e,t,n){void 0===n&&(n={});var o=s&&s[a],r=u&&u[a];c&&c[a]?c[a](e,t,JSON.stringify(n)):o?s[a].postMessage({reqId:e,method:t,data:n}):r?u[a](e,t,n):"undefined"!=typeof window&&console.log("--storage-isUnknown")}),v=o(function(e){var t=s&&s.getGeo;c&&c.getGeo?c.getGeo(e):t?s.getGeo.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getGeo-isWeb")},f),g=o(function(e){var t=s&&s.getQr;c&&c.getQr?c.getQr(e):t?s.getQr.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getQr-isWeb")},f),w=o(function(e){var t=s&&s.selectContact;c&&c.selectContact?c.selectContact(e):t?s.selectContact.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--selectContact-isWeb")},f),b=o(function(e){var t=s&&s.openSettings;c&&c.openSettings?c.openSettings(e):t?s.openSettings.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")},f),h=o(function(e,t){var n=s&&s.share;c&&c.share?c.share(e,t):n?s.share.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--share-isWeb")},f),m=o(function(e,t){var n=s&&s.copyToClipboard;c&&c.copyToClipboard?c.copyToClipboard(e,t):n?s.copyToClipboard.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--copyToClipboard-isWeb")},f),y=o(function(e,t,n){var o=s&&s.shareImage;c&&c.shareImage?c.shareImage(e,t,n):o?s.shareImage.postMessage({reqId:e,text:t,image:n}):"undefined"!=typeof window&&console.log("--shareImage-isWeb")},f),I=o(function(e,t){if(!Array.isArray(t)||t.some(function(e){return e<1||e!==Math.floor(e)})||t.reduce(function(e,t){return e+t})>1e4)console.error("Pattern should be an array of positive integers no longer than 10000ms total");else{var n=s&&s.vibrate;c&&c.vibrate?c.vibrate(e,JSON.stringify(t)):n?s.vibrate.postMessage({reqId:e,pattern:t}):"undefined"!=typeof window&&console.log("--vibrate-isWeb")}},f);return{copyToClipboard:m,invoke:l,storage:p,getMe:function(){return l(r.getMe)},getPhone:function(){return l(r.getPhone)},getContacts:function(){return l(r.getContacts)},getGeo:v,getQr:g,selectContact:w,enableNotifications:function(){return l(r.enableNotifications)},disableNotifications:function(){return l(r.disableNotifications)},openSettings:b,share:h,shareImage:y,setShakeHandler:function(e){c&&c.setShakeHandler||s&&s.setShakeHandler?window.onAituBridgeShake=e:"undefined"!=typeof window&&console.log("--setShakeHandler-isWeb")},vibrate:I,isSupported:function(){return Boolean(c||s||u)},supports:function(e){return c&&"function"==typeof c[e]||s&&s[e]&&"function"==typeof s[e].postMessage||u&&"function"==typeof u[e]},sub:f}}();t.default=f},dfwq:function(e,t,n){"use strict";var o=n("p0XB"),r=n.n(o);var i=n("d04V"),a=n.n(i),c=n("yLu3"),s=n.n(c);function u(e){return function(e){if(r()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(s()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return u})},hq78:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n("wjp+")}])},"oh+g":function(e,t,n){var o=n("WEpk"),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},"wjp+":function(e,t,n){"use strict";n.r(t);var o=n("ln6h"),r=n.n(o),i=n("9Jkg"),a=n.n(i),c=n("dfwq"),s=n("O40h"),u=n("q1tI"),d=n.n(u),f=n("DYRK"),l=d.a.createElement;t.default=Object(f.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"10px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(e){var t=e.classes,o=Object(u.useState)([]),i=o[0],d=o[1],f=Object(u.useState)([]),p=f[0],v=f[1],g=Object(u.useState)([]),w=g[0],b=g[1],h=Object(u.useState)(),m=h[0],y=h[1];Object(u.useEffect)(function(){window.AITU_ORIGIN="http://localhost:3000",y(n("TJeZ").default)},[]);var I=function(){var e=Object(s.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(c.a)(e),["setItem(".concat(t,", ").concat(n,")")])}),e.prev=1,e.next=4,m.storage.setItem(t,n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(c.a)(e),["getItem(".concat(t,")")])}),e.prev=1,e.next=4,m.storage.getItem(t);case 4:n=e.sent,v(function(e){return[].concat(Object(c.a)(e),[a()(n)])}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(c.a)(e),["clear()"])}),e.prev=1,e.next=4,m.storage.clear();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(){return e.apply(this,arguments)}}();return l("div",{className:t.testWrapper},l("a",{href:"/test"},"To test"),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return I("testItem","123-456-789")}},"setItem('testItem', '123-456-789')"),l("button",{onClick:function(){return k("testItem")}},"getItem('testItem')")),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return I("oneMoreTest","tatatatata")}},"setItem('oneMoreTest', 'tatatatata')"),l("button",{onClick:function(){return k("oneMoreTest")}},"getItem('oneMoreTest')")),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return O()}},"clear()")),l("div",{style:{marginTop:20,display:"flex"}},l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Invoked methods:"),i.map(function(e,t){return l("div",{key:t+e},t+1+") ",e)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received data:"),p&&p.map(function(e,t){return l("div",{key:t+e},t+1+". ",e)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received errors:"),w&&w.map(function(e,t){return l("div",{key:t+e},t+1+". ",e)}))))})}},[["hq78",1,0]]]);