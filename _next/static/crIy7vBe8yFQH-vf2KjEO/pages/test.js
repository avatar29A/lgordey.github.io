(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9Jkg":function(n,t,e){n.exports=e("oh+g")},FCuQ:function(n,t,e){"use strict";e.r(t);var o=e("ln6h"),r=e.n(o),i=e("9Jkg"),a=e.n(i),u=e("p0XB"),c=e.n(u);var s=e("d04V"),d=e.n(s),l=e("yLu3"),f=e.n(l);function v(n){return function(n){if(c()(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(f()(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n))return d()(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=e("eVuF"),w=e.n(p);function g(n,t,e,o,r,i,a){try{var u=n[i](a),c=u.value}catch(s){return void e(s)}u.done?t(c):w.a.resolve(c).then(o,r)}var h=e("q1tI"),m=e.n(h),b=e("DYRK"),y="undefined"!=typeof window&&window.AndroidBridge,k="undefined"!=typeof window&&window.webkit&&window.webkit.messageHandlers,O=function(){var n=[];"undefined"!=typeof window&&window.addEventListener("aituEvents",function(t){var e=JSON.stringify(t.detail);console.log("subs_data",e),[].concat(n).map(function(n){return n.call(null,t)})});var t,e,o,r,i=function(t){n.push(t)};return{invoke:(t=i,e={current:0,next:function(){return++this.current}},o={},r={add:function(n,t){var r=null!=t?t:e.next();return o[r]=n,r},resolve:function(n,t,e,r){var i=o[n];i&&(e(r)?i.resolve(t):i.reject(r),o[n]=null)}},t(function(n){if(n.detail&&n.detail.data&&"reqId"in n.detail){var t=n.detail,e=t.reqId;e&&r.resolve(e,t.data,function(n){return!n},t.error)}}),function(n,t){return void 0===t&&(t={}),new Promise(function(e,o){!function(n,t,e){void 0===e&&(e={}),console.log("_start_____INVOKE"),console.log("reqId: ",n),console.log("method: ",t),console.log("data: ",e),y&&y.invoke&&y.invoke(n,t,JSON.stringify(e)),console.log("----before ios PostMessage"),k&&k.invoke&&(console.log("----INSIDE if - GO ios PostMessage"),k.invoke.postMessage({reqId:n,method:t,data:e})),console.log("----after ios PostMessage")}(r.add({resolve:e,reject:o},t.reqId),n,t)})}),sub:i}}(),_=m.a.createElement;t.default=Object(b.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"5px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(n){var t=n.classes,e=Object(h.useState)([]),o=e[0],i=e[1],u=Object(h.useState)([]),c=u[0],s=u[1],d=Object(h.useState)([]),l=d[0],f=d[1],p=function(){var n,t=(n=r.a.mark(function n(t){var e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i(function(n){return[].concat(v(n),[t])}),n.prev=1,n.next=4,O.invoke(t);case 4:e=n.sent,s(function(n){return[].concat(v(n),[a()(e)])}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),f(function(t){return[].concat(v(t),[a()(n.t0)])});case 11:case"end":return n.stop()}},n,null,[[1,8]])}),function(){var t=this,e=arguments;return new w.a(function(o,r){var i=n.apply(t,e);function a(n){g(i,o,r,a,u,"next",n)}function u(n){g(i,o,r,a,u,"throw",n)}a(void 0)})});return function(n){return t.apply(this,arguments)}}();return _("div",{className:t.testWrapper},_("div",{className:t.btnWrapper},_("button",{onClick:function(){return p("GetMe")}},"GetMe"),_("button",{onClick:function(){return p("GetPhone")}},"GetPhone"),_("button",{onClick:function(){return p("GetAdminPassword")}},"GetAdminPassword")),_("div",{style:{marginTop:20,display:"flex"}},_("div",{style:{width:"30%"}},_("b",{style:{marginBottom:10}},"Invoked methods:"),o.map(function(n,t){return _("div",{key:t+n},t+1+") ",n)})),_("div",{style:{width:"30%"}},_("b",{style:{marginBottom:10}},"Received data:"),c&&c.map(function(n,t){return _("div",{key:t+n},t+1+". ",n)})),_("div",{style:{width:"30%"}},_("b",{style:{marginBottom:10}},"Received errors:"),l&&l.map(function(n,t){return _("div",{key:t+n},t+1+". ",n)}))))})},"oh+g":function(n,t,e){var o=e("WEpk"),r=o.JSON||(o.JSON={stringify:JSON.stringify});n.exports=function(n){return r.stringify.apply(r,arguments)}},"zl3/":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return e("FCuQ")}])}},[["zl3/",1,0]]]);