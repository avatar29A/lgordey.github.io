(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9Jkg":function(n,t,e){n.exports=e("oh+g")},FCuQ:function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),i=e("9Jkg"),a=e.n(i),u=e("p0XB"),c=e.n(u);var s=e("d04V"),d=e.n(s),l=e("yLu3"),f=e.n(l);function v(n){return function(n){if(c()(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(f()(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n))return d()(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=e("eVuF"),g=e.n(p);function w(n,t,e,r,o,i,a){try{var u=n[i](a),c=u.value}catch(s){return void e(s)}u.done?t(c):g.a.resolve(c).then(r,o)}var h=e("q1tI"),y=e.n(h),m=e("DYRK"),b="undefined"!=typeof window&&window.AndroidBridge,k="undefined"!=typeof window&&window.IosBridge,O=function(){var n=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){var e=JSON.stringify(t.detail);console.log("subs_data",e),[].concat(n).map(function(n){return n.call(null,t)})});var t,e,r,o,i=function(t){n.push(t)};return{invoke:(t=i,e={current:0,next:function(){return++this.current}},r={},o={add:function(n,t){var o=null!=t?t:e.next();return r[o]=n,o},resolve:function(n,t,e,o){var i=r[n];i&&(e(o)?i.resolve(t):i.reject(o),r[n]=null)}},t(function(n){if(n.detail&&n.detail.data&&"reqId"in n.detail){var t=n.detail,e=t.reqId;e&&o.resolve(e,t.data,function(n){return!n},t.error)}}),function(n,t){return void 0===t&&(t={}),new Promise(function(e,r){!function(n,t,e){void 0===e&&(e={}),b&&b.invoke&&b.invoke(n,t,JSON.stringify(e)),k&&k.invoke&&k.invoke.postMessage(n,t,e),console.log("=----------------------="),console.log("invoke method: ",t),console.log("params: ",e)}(o.add({resolve:e,reject:r},t.reqId),n,t)})}),sub:i}}(),_=y.a.createElement;t.default=Object(m.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"2px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(n){var t=n.classes,e=Object(h.useState)([]),r=e[0],i=e[1],u=Object(h.useState)([]),c=u[0],s=u[1],d=Object(h.useState)([]),l=d[0],f=d[1];Object(h.useEffect)(function(){p("InitApps")},[]);var p=function(){var n,t=(n=o.a.mark(function n(t){var e;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i(function(n){return[].concat(v(n),[t])}),n.prev=1,n.next=4,O.invoke(t);case 4:e=n.sent,console.log("____Received__data!",a()(e)),s(function(n){return[].concat(v(n),[a()(e)])}),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("ERROR ---- on client"),console.log(n.t0),f(function(t){return[].concat(v(t),[a()(n.t0)])});case 14:case"end":return n.stop()}},n,null,[[1,9]])}),function(){var t=this,e=arguments;return new g.a(function(r,o){var i=n.apply(t,e);function a(n){w(i,r,o,a,u,"next",n)}function u(n){w(i,r,o,a,u,"throw",n)}a(void 0)})});return function(n){return t.apply(this,arguments)}}();return _("div",{className:t.testWrapper},_("div",{className:t.btnWrapper},_("button",{onClick:function(){return p("getMe")}},"getMe"),_("button",{onClick:function(){return p("getPhone")}},"getPhone")),_("div",{style:{marginTop:20,display:"flex"}},_("div",{style:{width:"30%"}},_("b",{style:{marginBottom:10}},"Invoked methods:"),r.map(function(n,t){return _("div",{key:t+n},t+1+") ",n)})),_("div",{style:{width:"30%"}},_("b",{style:{marginBottom:10}},"Received data:"),c&&c.map(function(n,t){return _("div",{key:t+n},t+1+". ",n)})),_("div",{style:{width:"30%"}},_("b",{style:{marginBottom:10}},"Received errors:"),l&&l.map(function(n,t){return _("div",{key:t+n},t+1+". ",n)}))))})},"oh+g":function(n,t,e){var r=e("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},"zl3/":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return e("FCuQ")}])}},[["zl3/",1,0]]]);