(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9Jkg":function(t,e,n){t.exports=n("oh+g")},O40h:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("eVuF"),o=n.n(r);function a(t,e,n,r,a,c,i){try{var u=t[c](i),s=u.value}catch(f){return void n(f)}u.done?e(s):o.a.resolve(s).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new o.a(function(r,o){var c=t.apply(e,n);function i(t){a(c,r,o,i,u,"next",t)}function u(t){a(c,r,o,i,u,"throw",t)}i(void 0)})}}},TJeZ:function(t,e,n){"use strict";var r="undefined"!=typeof window&&window.AndroidBridge,o="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,a=function(){var t=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(e){[].concat(t).map(function(t){return t.call(null,e)})});var e,n,a,c,i=function(e){t.push(e)};return{invoke:(e=i,n={current:0,next:function(){return++this.current}},a={},c={add:function(t,e){var r=null!=e?e:n.next();return a[r]=t,r},resolve:function(t,e,n,r){var o=a[t];o&&(n(r)?o.resolve(e):o.reject(r),a[t]=null)}},e(function(t){if(t.detail&&"reqId"in t.detail){var e=t.detail,n=e.reqId;n&&c.resolve(n,e.data,function(t){return!t},e.error)}}),function(t,e){return void 0===e&&(e={}),new Promise(function(n,a){!function(t,e,n){void 0===n&&(n={});var a=o&&o.invoke;r&&r.invoke?r.invoke(t,e,JSON.stringify(n)):a?o.invoke.postMessage({reqId:t,method:e,data:n}):"undefined"!=typeof window&&(console.log("isWeb"),console.log(t,e,n))}(c.add({resolve:n,reject:a},e.reqId),t,e)})}),storage:function(t,e){var n,r,o=(n={current:0,next:function(){return++this.current}},r={},{add:function(t,e){var o="s"+(null!=e?e:n.next());return r[o]=t,o},resolve:function(t,e,n,o){var a=r[t];a&&(n(o)?a.resolve(e):a.reject(o),r[t]=null)}});return i(function(t){if(t.detail&&"reqId"in t.detail){var e=t.detail,n=e.reqId;n&&o.resolve(n,e.data,function(t){return!t},e.error)}}),{setItem:function(e,n){return new Promise(function(r,a){var c=o.add({resolve:r,reject:a});t(c,"setItem",{keyName:e,keyValue:n})})},getItem:function(e){return new Promise(function(n,r){var a=o.add({resolve:n,reject:r});t(a,"getItem",{keyName:e})})},removeItem:function(e){return new Promise(function(n,r){var a=o.add({resolve:n,reject:r});t(a,"removeItem",{keyName:e})})},key:function(e){return new Promise(function(n,r){var a=o.add({resolve:n,reject:r});t(a,"key",{index:e})})},clear:function(){return new Promise(function(e,n){var r=o.add({resolve:e,reject:n});t(r,"key",{})})}}}(function(t,e,n){void 0===n&&(n={});var a=o&&o.storage;r&&r.storage?r.storage(t,e,JSON.stringify(n)):a?o.storage.postMessage({reqId:t,method:e,data:n}):"undefined"!=typeof window&&(console.log("---S-----isWeb"),console.log(t,e,n))}),isSupported:function(){return r||o},sub:i}}();e.a=a},dfwq:function(t,e,n){"use strict";var r=n("p0XB"),o=n.n(r);var a=n("d04V"),c=n.n(a),i=n("yLu3"),u=n.n(i);function s(t){return function(t){if(o()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return s})},hq78:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n("wjp+")}])},"oh+g":function(t,e,n){var r=n("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},"wjp+":function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),o=n.n(r),a=n("9Jkg"),c=n.n(a),i=n("dfwq"),u=n("O40h"),s=n("q1tI"),f=n.n(s),d=n("DYRK"),l=n("TJeZ"),v=f.a.createElement;e.default=Object(d.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"10px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(t){var e=t.classes,n=Object(s.useState)([]),r=n[0],a=n[1],f=Object(s.useState)([]),d=f[0],p=f[1],m=Object(s.useState)([]),w=m[0],b=m[1],k=function(){var t=Object(u.a)(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(function(t){return[].concat(Object(i.a)(t),["setItem(".concat(e,", ").concat(n,")")])}),t.prev=1,t.next=4,l.a.storage.setItem(e,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),b(function(e){return[].concat(Object(i.a)(e),[c()(t.t0)])});case 9:case"end":return t.stop()}},t,null,[[1,6]])}));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var t=Object(u.a)(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(function(t){return[].concat(Object(i.a)(t),["getItem(".concat(e,")")])}),t.prev=1,t.next=4,l.a.storage.getItem(e);case 4:n=t.sent,p(function(t){return[].concat(Object(i.a)(t),[c()(n)])}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),b(function(e){return[].concat(Object(i.a)(e),[c()(t.t0)])});case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(u.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(function(t){return[].concat(Object(i.a)(t),["removeItem(".concat(e,")")])}),t.prev=1,t.next=4,l.a.storage.removeItem(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),b(function(e){return[].concat(Object(i.a)(e),[c()(t.t0)])});case 9:case"end":return t.stop()}},t,null,[[1,6]])}));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(u.a)(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(function(t){return[].concat(Object(i.a)(t),["key(".concat(e,")")])}),t.prev=1,t.next=4,l.a.storage.key(e);case 4:n=t.sent,p(function(t){return[].concat(Object(i.a)(t),[c()(n)])}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),b(function(e){return[].concat(Object(i.a)(e),[c()(t.t0)])});case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(function(t){return[].concat(Object(i.a)(t),["clear()"])}),t.prev=1,t.next=4,l.a.storage.clear();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),b(function(e){return[].concat(Object(i.a)(e),[c()(t.t0)])});case 9:case"end":return t.stop()}},t,null,[[1,6]])}));return function(){return t.apply(this,arguments)}}();return v("div",{className:e.testWrapper},v("div",{className:e.btnWrapper},v("button",{onClick:function(){return k("testItem","123-456-789")}},"setItem('testItem', '123-456-789')"),v("button",{onClick:function(){return g("testItem")}},"getItem('testItem')"),v("button",{onClick:function(){return y("testItem")}},"removeItem('testItem')"),v("button",{onClick:function(){return h(0)}},"key(0)"),v("button",{onClick:j},"Clear")),v("div",{className:e.btnWrapper},v("button",{onClick:function(){return k("oneMoreTest","tatatatata")}},"setItem('oneMoreTest', 'tatatatata')"),v("button",{onClick:function(){return g("oneMoreTest")}},"getItem('oneMoreTest')"),v("button",{onClick:function(){return y("oneMoreTest")}},"removeItem('oneMoreTest')"),v("button",{onClick:function(){return h(1)}},"key(1)")),v("div",{style:{marginTop:20,display:"flex"}},v("div",{style:{width:"30%"}},v("b",{style:{marginBottom:10}},"Invoked methods:"),r.map(function(t,e){return v("div",{key:e+t},e+1+") ",t)})),v("div",{style:{width:"30%"}},v("b",{style:{marginBottom:10}},"Received data:"),d&&d.map(function(t,e){return v("div",{key:e+t},e+1+". ",t)})),v("div",{style:{width:"30%"}},v("b",{style:{marginBottom:10}},"Received errors:"),w&&w.map(function(t,e){return v("div",{key:e+t},e+1+". ",t)}))))})}},[["hq78",1,0]]]);