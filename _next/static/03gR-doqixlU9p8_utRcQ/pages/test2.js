(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9Jkg":function(e,t,n){e.exports=n("oh+g")},O40h:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("eVuF"),o=n.n(r);function i(e,t,n,r,i,a,c){try{var s=e[a](c),u=s.value}catch(d){return void n(d)}s.done?t(u):o.a.resolve(u).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new o.a(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,s,"next",e)}function s(e){i(a,r,o,c,s,"throw",e)}c(void 0)})}}},TJeZ:function(e,t,n){"use strict";function r(e,t){var n,r,o=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var o=null!=t?t:n.next();return r[o]=e,o},resolve:function(e,t,n,o){var i=r[e];i&&(n(o)?i.resolve(t):i.reject(o),r[e]=null)}});return t(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&o.resolve(n,t.data,function(e){return!e},t.error)}}),function(){var t=arguments;return new Promise(function(n,r){var i=o.add({resolve:n,reject:r});e.apply(void 0,[i].concat([].slice.call(t)))})}}var o;n.r(t),function(e){e.getMe="GetMe",e.getPhone="GetPhone",e.getContacts="GetContacts",e.enableNotifications="AllowNotifications",e.disableNotifications="DisableNotifications"}(o||(o={}));var i="invoke",a="storage",c="undefined"!=typeof window&&window.AndroidBridge,s="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,u="undefined"!=typeof window&&window.top!==window&&(window.WebBridge=window.WebBridge||{});if(u){var d=window.AITU_ORIGIN||"https://aitu.io";[i,a].forEach(function(e){u[e]||(u[e]=function(){return window.top.postMessage(JSON.stringify({method:e,payload:[].slice.call(arguments)}),d)})}),window.addEventListener("message",function(e){if(e.origin===d&&e.data)try{var t=JSON.parse(e.data);window.dispatchEvent(new CustomEvent("aituEvents",{detail:t}))}catch(e){}})}var f=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){[].concat(e).map(function(e){return e.call(null,t)})});var t,n,d,f=function(t){e.push(t)},l=(t={current:0,next:function(){return++this.current}},n={},d={add:function(e,r){var o=null!=r?r:t.next();return n[o]=e,o},resolve:function(e,t,r,o){var i=n[e];i&&(r(o)?i.resolve(t):i.reject(o),n[e]=null)}},f(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&d.resolve(n,t.data,function(e){return!e},t.error)}}),function(e,t){return void 0===t&&(t={}),new Promise(function(n,r){!function(e,t,n){void 0===n&&(n={});var r=s&&s[i],o=u&&u[i];c&&c[i]?c[i](e,t,JSON.stringify(n)):r?s[i].postMessage({reqId:e,method:t,data:n}):o?u[i](e,t,n):"undefined"!=typeof window&&console.log("--invoke-isUnknown")}(d.add({resolve:n,reject:r},t.reqId),e,t)})}),p=function(e,t){var n,r,o=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var o="s"+(null!=t?t:n.next());return r[o]=e,o},resolve:function(e,t,n,o){var i=r[e];i&&(n(o)?i.resolve(t):i.reject(o),r[e]=null)}});return f(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&o.resolve(n,t.data,function(e){return!e},t.error)}}),{setItem:function(t,n){return new Promise(function(r,i){var a=o.add({resolve:r,reject:i});e(a,"setItem",{keyName:t,keyValue:n})})},getItem:function(t){return new Promise(function(n,r){var i=o.add({resolve:n,reject:r});e(i,"getItem",{keyName:t})})},clear:function(){return new Promise(function(t,n){var r=o.add({resolve:t,reject:n});e(r,"clear",{})})}}}(function(e,t,n){void 0===n&&(n={});var r=s&&s[a],o=u&&u[a];c&&c[a]?c[a](e,t,JSON.stringify(n)):r?s[a].postMessage({reqId:e,method:t,data:n}):o?u[a](e,t,n):"undefined"!=typeof window&&console.log("--storage-isUnknown")}),v=r(function(e){var t=s&&s.getGeo;c&&c.getGeo?c.getGeo(e):t?s.getGeo.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getGeo-isWeb")},f),g=r(function(e){var t=s&&s.getQr;c&&c.getQr?c.getQr(e):t?s.getQr.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getQr-isWeb")},f),w=r(function(e){var t=s&&s.selectContact;c&&c.selectContact?c.selectContact(e):t?s.selectContact.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--selectContact-isWeb")},f),b=r(function(e){var t=s&&s.openSettings;c&&c.openSettings?c.openSettings(e):t?s.openSettings.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")},f),h=r(function(e,t){var n=s&&s.share;c&&c.share?c.share(e,t):n?s.share.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--share-isWeb")},f),m=r(function(e,t){var n=s&&s.copyToClipboard;c&&c.copyToClipboard?c.copyToClipboard(e,t):n?s.copyToClipboard.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--copyToClipboard-isWeb")},f),y=r(function(e,t,n){var r=s&&s.shareImage;c&&c.shareImage?c.shareImage(e,t,n):r?s.shareImage.postMessage({reqId:e,text:t,image:n}):"undefined"!=typeof window&&console.log("--shareImage-isWeb")},f),I=r(function(e,t){if(!Array.isArray(t)||t.some(function(e){return e<1||e!==Math.floor(e)})||t.reduce(function(e,t){return e+t})>1e4)console.error("Pattern should be an array of positive integers no longer than 10000ms total");else{var n=s&&s.vibrate;c&&c.vibrate?c.vibrate(e,JSON.stringify(t)):n?s.vibrate.postMessage({reqId:e,pattern:t}):"undefined"!=typeof window&&console.log("--vibrate-isWeb")}},f);return{copyToClipboard:m,invoke:l,storage:p,getMe:function(){return l(o.getMe)},getPhone:function(){return l(o.getPhone)},getContacts:function(){return l(o.getContacts)},getGeo:v,getQr:g,selectContact:w,enableNotifications:function(){return l(o.enableNotifications)},disableNotifications:function(){return l(o.disableNotifications)},openSettings:b,share:h,shareImage:y,setShakeHandler:function(e){c&&c.setShakeHandler||s&&s.setShakeHandler?window.onAituBridgeShake=e:"undefined"!=typeof window&&console.log("--setShakeHandler-isWeb")},vibrate:I,isSupported:function(){return c||s||u},supports:function(e){return c&&"function"==typeof c[e]||s&&s[e]&&"function"==typeof s[e].postMessage||u&&"function"==typeof u[e]},sub:f}}();t.default=f},dfwq:function(e,t,n){"use strict";var r=n("p0XB"),o=n.n(r);var i=n("d04V"),a=n.n(i),c=n("yLu3"),s=n.n(c);function u(e){return function(e){if(o()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(s()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return u})},hq78:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n("wjp+")}])},"oh+g":function(e,t,n){var r=n("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},"wjp+":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),i=n("9Jkg"),a=n.n(i),c=n("dfwq"),s=n("O40h"),u=n("q1tI"),d=n.n(u),f=n("DYRK"),l=d.a.createElement;t.default=Object(f.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"10px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(e){var t=e.classes,r=Object(u.useState)([]),i=r[0],d=r[1],f=Object(u.useState)([]),p=f[0],v=f[1],g=Object(u.useState)([]),w=g[0],b=g[1],h=Object(u.useState)(),m=h[0],y=h[1];Object(u.useEffect)(function(){window.AITU_ORIGIN="http://localhost:3000",y(n("TJeZ").default)},[]);var I=function(){var e=Object(s.a)(o.a.mark(function e(t,n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(c.a)(e),["setItem(".concat(t,", ").concat(n,")")])}),e.prev=1,e.next=4,m.storage.setItem(t,n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(c.a)(e),["getItem(".concat(t,")")])}),e.prev=1,e.next=4,m.storage.getItem(t);case 4:n=e.sent,v(function(e){return[].concat(Object(c.a)(e),[a()(n)])}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(function(e){return[].concat(Object(c.a)(e),["clear()"])}),e.prev=1,e.next=4,m.storage.clear();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(function(t){return[].concat(Object(c.a)(t),[a()(e.t0)])});case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(){return e.apply(this,arguments)}}();return l("div",{className:t.testWrapper},l("a",{href:"/test"},"To test"),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return I("testItem","123-456-789")}},"setItem('testItem', '123-456-789')"),l("button",{onClick:function(){return k("testItem")}},"getItem('testItem')")),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return I("oneMoreTest","tatatatata")}},"setItem('oneMoreTest', 'tatatatata')"),l("button",{onClick:function(){return k("oneMoreTest")}},"getItem('oneMoreTest')")),l("div",{className:t.btnWrapper},l("button",{onClick:function(){return O()}},"clear()")),l("div",{style:{marginTop:20,display:"flex"}},l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Invoked methods:"),i.map(function(e,t){return l("div",{key:t+e},t+1+") ",e)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received data:"),p&&p.map(function(e,t){return l("div",{key:t+e},t+1+". ",e)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received errors:"),w&&w.map(function(e,t){return l("div",{key:t+e},t+1+". ",e)}))))})}},[["hq78",1,0]]]);