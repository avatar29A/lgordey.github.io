(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"85hM":function(e,t,n){"use strict";n.r(t);var o=n("ln6h"),r=n.n(o),i=n("9Jkg"),a=n.n(i),s=n("dfwq"),c=n("O40h"),d=n("q1tI"),u=n.n(d),l=n("DYRK"),f=u.a.createElement,p=["getMe","getPhone","getContacts","enableNotifications","disableNotifications"];t.default=Object(l.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:"0 20px 20px 0",border:"10px solid black",marginTop:20,"& button, & a, & span":{margin:"20px 0 0 20px",display:"inline-block"}}})(function(e){var t=e.classes,o=Object(d.useState)([]),i=o[0],u=o[1],l=Object(d.useState)([]),g=l[0],v=l[1],w=Object(d.useState)([]),b=w[0],h=w[1],y=Object(d.useState)([]),m=y[0],S=y[1],I=Object(d.useState)("loading..."),k=I[0],M=I[1],C=Object(d.useState)(),x=C[0],N=C[1];Object(d.useEffect)(function(){M(window.location.href),N(n("TJeZ").default)},[]);var j=function(){var e=Object(c.a)(r.a.mark(function e(t){var n,o,i,c=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>1&&void 0!==c[1]?c[1]:[],p.includes(t)||x.supports(t)){e.next=4;break}return S(function(e){return[].concat(Object(s.a)(e),['\u041c\u0435\u0442\u043e\u0434 "'.concat(t,'" \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f')])}),e.abrupt("return");case 4:return u(function(e){return[].concat(Object(s.a)(e),[t])}),console.log("==handle ".concat(t," method").concat(n.length>0?" with params ".concat(a()(n)):"")),e.prev=6,e.next=9,x[t].apply(x,Object(s.a)(n));case 9:o=e.sent,v(function(e){return[].concat(Object(s.a)(e),[a()(o)])}),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0),i=e.t0 instanceof Error?"".concat(e.t0.name,": ").concat(e.t0.message):a()(e.t0),h(function(e){return[].concat(Object(s.a)(e),[i])});case 18:case"end":return e.stop()}},e,null,[[6,13]])}));return function(t){return e.apply(this,arguments)}}();return f("div",{className:t.testWrapper},f("a",{href:"/test"},"To test"),f("br",null),f("a",{href:"/test2"},"To test2"),f("div",{className:t.btnWrapper},f("span",null,"Current url: ",k)),f("div",{className:t.btnWrapper},f("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){console.log("===============base64String"),console.log(n.result),"string"===typeof n.result&&j("shareImage",[n.result])}},style:{margin:"20px 20px 0"}})),f("div",{style:{marginTop:20}},f("b",null,"Errors:"),m.map(function(e,t){return f("div",{key:t+e},e)})),f("div",{style:{marginTop:20,display:"flex"}},f("div",{style:{width:"30%"}},f("b",{style:{marginBottom:10}},"Invoked methods:"),i.map(function(e,t){return f("div",{key:t+e},t+1+") ",e)})),f("div",{style:{width:"30%"}},f("b",{style:{marginBottom:10}},"Received data:"),g&&g.map(function(e,t){return f("div",{key:t+e},t+1+". ",e)})),f("div",{style:{width:"30%"}},f("b",{style:{marginBottom:10}},"Received errors:"),b&&b.map(function(e,t){return f("div",{key:t+e},t+1+". ",e)}))))})},FgB9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test-share",function(){return n("85hM")}])},TJeZ:function(e,t,n){"use strict";function o(e,t){var n,o,r=(n={current:0,next:function(){return++this.current}},o={},{add:function(e,t){var r=null!=t?t:n.next();return o[r]=e,r},resolve:function(e,t,n,r){var i=o[e];i&&(n(r)?i.resolve(t):i.reject(r),o[e]=null)}});return t(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&r.resolve(n,t.data,function(e){return!e},t.error)}}),function(){var t=arguments;return new Promise(function(n,o){var i=r.add({resolve:n,reject:o});e.apply(void 0,[i].concat([].slice.call(t)))})}}var r;n.r(t),function(e){e.getMe="GetMe",e.getPhone="GetPhone",e.getContacts="GetContacts",e.enableNotifications="AllowNotifications",e.disableNotifications="DisableNotifications"}(r||(r={}));var i="invoke",a="storage",s="undefined"!=typeof window&&window.AndroidBridge,c="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.invoke,d="undefined"!=typeof window&&window.top!==window&&(window.WebBridge=window.WebBridge||{});if(d){var u=window.AITU_ORIGIN||"https://aitu.io";[i,a].forEach(function(e){d[e]||(d[e]=function(){return window.top.postMessage(JSON.stringify({method:e,payload:[].slice.call(arguments)}),u)})}),window.addEventListener("message",function(e){if(e.origin===u&&e.data)try{var t=JSON.parse(e.data);window.dispatchEvent(new CustomEvent("aituEvents",{detail:t}))}catch(e){}})}var l=function(){var e=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){[].concat(e).map(function(e){return e.call(null,t)})});var t,n,u,l=function(t){e.push(t)},f=(t={current:0,next:function(){return++this.current}},n={},u={add:function(e,o){var r=null!=o?o:t.next();return n[r]=e,r},resolve:function(e,t,o,r){var i=n[e];i&&(o(r)?i.resolve(t):i.reject(r),n[e]=null)}},l(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&u.resolve(n,t.data,function(e){return!e},t.error)}}),function(e,t){return void 0===t&&(t={}),new Promise(function(n,o){!function(e,t,n){void 0===n&&(n={});var o=c&&c[i],r=d&&d[i];s&&s[i]?s[i](e,t,JSON.stringify(n)):o?c[i].postMessage({reqId:e,method:t,data:n}):r?d[i](e,t,n):"undefined"!=typeof window&&console.log("--invoke-isUnknown")}(u.add({resolve:n,reject:o},t.reqId),e,t)})}),p=function(e,t){var n,o,r=(n={current:0,next:function(){return++this.current}},o={},{add:function(e,t){var r="s"+(null!=t?t:n.next());return o[r]=e,r},resolve:function(e,t,n,r){var i=o[e];i&&(n(r)?i.resolve(t):i.reject(r),o[e]=null)}});return l(function(e){if(e.detail&&"reqId"in e.detail){var t=e.detail,n=t.reqId;n&&r.resolve(n,t.data,function(e){return!e},t.error)}}),{setItem:function(t,n){return new Promise(function(o,i){var a=r.add({resolve:o,reject:i});e(a,"setItem",{keyName:t,keyValue:n})})},getItem:function(t){return new Promise(function(n,o){var i=r.add({resolve:n,reject:o});e(i,"getItem",{keyName:t})})},clear:function(){return new Promise(function(t,n){var o=r.add({resolve:t,reject:n});e(o,"clear",{})})}}}(function(e,t,n){void 0===n&&(n={});var o=c&&c[a],r=d&&d[a];s&&s[a]?s[a](e,t,JSON.stringify(n)):o?c[a].postMessage({reqId:e,method:t,data:n}):r?d[a](e,t,n):"undefined"!=typeof window&&console.log("--storage-isUnknown")}),g=o(function(e){var t=c&&c.getGeo;s&&s.getGeo?s.getGeo(e):t?c.getGeo.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getGeo-isWeb")},l),v=o(function(e){var t=c&&c.getQr;s&&s.getQr?s.getQr(e):t?c.getQr.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getQr-isWeb")},l),w=o(function(e){var t=c&&c.getSMSCode;s&&s.getSMSCode?s.getSMSCode(e):t?c.getSMSCode.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--getSMSCode-isWeb")},l),b=o(function(e){var t=c&&c.selectContact;s&&s.selectContact?s.selectContact(e):t?c.selectContact.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--selectContact-isWeb")},l),h=o(function(e){var t=c&&c.openSettings;s&&s.openSettings?s.openSettings(e):t?c.openSettings.postMessage({reqId:e}):"undefined"!=typeof window&&console.log("--openSettings-isWeb")},l),y=o(function(e,t){var n=c&&c.share;s&&s.share?s.share(e,t):n?c.share.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--share-isWeb")},l),m=o(function(e,t){var n=c&&c.copyToClipboard;s&&s.copyToClipboard?s.copyToClipboard(e,t):n?c.copyToClipboard.postMessage({reqId:e,text:t}):"undefined"!=typeof window&&console.log("--copyToClipboard-isWeb")},l),S=o(function(e,t,n){var o=c&&c.shareImage;s&&s.shareImage?s.shareImage(e,t,n):o?c.shareImage.postMessage({reqId:e,text:t,image:n}):"undefined"!=typeof window&&console.log("--shareImage-isWeb")},l),I=o(function(e,t,n){var o=c&&c.shareFile;s&&s.shareFile?s.shareFile(e,t,n):o?c.shareFile.postMessage({reqId:e,text:t,file:n}):"undefined"!=typeof window&&console.log("--shareFile-isWeb")},l),k=o(function(e,t){if(!Array.isArray(t)||t.some(function(e){return e<1||e!==Math.floor(e)})||t.reduce(function(e,t){return e+t})>1e4)console.error("Pattern should be an array of positive integers no longer than 10000ms total");else{var n=c&&c.vibrate;s&&s.vibrate?s.vibrate(e,JSON.stringify(t)):n?c.vibrate.postMessage({reqId:e,pattern:t}):"undefined"!=typeof window&&console.log("--vibrate-isWeb")}},l);return{copyToClipboard:m,invoke:f,storage:p,getMe:function(){return f(r.getMe)},getPhone:function(){return f(r.getPhone)},getContacts:function(){return f(r.getContacts)},getGeo:g,getQr:v,getSMSCode:w,selectContact:b,enableNotifications:function(){return f(r.enableNotifications)},disableNotifications:function(){return f(r.disableNotifications)},openSettings:h,share:y,shareImage:S,shareFile:I,setShakeHandler:function(e){s&&s.setShakeHandler||c&&c.setShakeHandler?window.onAituBridgeShake=e:"undefined"!=typeof window&&console.log("--setShakeHandler-isWeb")},vibrate:k,isSupported:function(){return Boolean(s||c||d)},supports:function(e){return s&&"function"==typeof s[e]||c&&c[e]&&"function"==typeof c[e].postMessage||d&&"function"==typeof d[e]},sub:l}}();t.default=l}},[["FgB9",1,0]]]);