(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"VYW/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test-kundelik",function(){return n("j3ff")}])},j3ff:function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),a=n.n(r),c=n("9Jkg"),o=n.n(c),u=n("dfwq"),i=n("O40h"),s=n("q1tI"),f=n.n(s),p=n("DYRK"),l=f.a.createElement;e.default=Object(p.a)({testWrapper:{width:"100%",maxWidth:800,margin:"0 auto"},btnWrapper:{padding:20,border:"10px solid black",marginTop:20,"& button:not(:first-child)":{marginLeft:20}}})(function(t){var e=t.classes,r=Object(s.useState)([]),c=r[0],f=r[1],p=Object(s.useState)([]),d=p[0],b=p[1],m=Object(s.useState)([]),v=m[0],h=m[1],w=Object(s.useState)(),k=w[0],j=w[1];Object(s.useEffect)(function(){window.AITU_ORIGIN="http://localhost:3000",j(n("TJeZ").default)},[]);var O=function(){var t=Object(i.a)(a.a.mark(function t(e,n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f(function(t){return[].concat(Object(u.a)(t),["setItem(".concat(e,", ").concat(n,")")])}),t.prev=1,t.next=4,k.storage.setItem(e,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),h(function(e){return[].concat(Object(u.a)(e),[o()(t.t0)])});case 9:case"end":return t.stop()}},t,null,[[1,6]])}));return function(e,n){return t.apply(this,arguments)}}(),I=function(){var t=Object(i.a)(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f(function(t){return[].concat(Object(u.a)(t),["getItem(".concat(e,")")])}),t.prev=1,t.next=4,k.storage.getItem(e);case 4:n=t.sent,b(function(t){return[].concat(Object(u.a)(t),[o()(n)])}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),h(function(e){return[].concat(Object(u.a)(e),[o()(t.t0)])});case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(i.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f(function(t){return[].concat(Object(u.a)(t),["clear()"])}),t.prev=1,t.next=4,k.storage.clear();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),h(function(e){return[].concat(Object(u.a)(e),[o()(t.t0)])});case 9:case"end":return t.stop()}},t,null,[[1,6]])}));return function(){return t.apply(this,arguments)}}();return l("div",{className:e.testWrapper},l("a",{href:"/test"},"To test"),l("div",{className:e.btnWrapper},l("button",{onClick:function(){return O("testItem","123-456-789")}},"setItem('testItem', '123-456-789')"),l("button",{onClick:function(){return I("testItem")}},"getItem('testItem')")),l("div",{className:e.btnWrapper},l("button",{onClick:function(){return O("oneMoreTest","tatatatata")}},"setItem('oneMoreTest', 'tatatatata')"),l("button",{onClick:function(){return I("oneMoreTest")}},"getItem('oneMoreTest')")),l("div",{className:e.btnWrapper},l("button",{onClick:function(){return g()}},"clear()")),l("div",{style:{marginTop:20,display:"flex"}},l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Invoked methods:"),c.map(function(t,e){return l("div",{key:e+t},e+1+") ",t)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received data:"),d&&d.map(function(t,e){return l("div",{key:e+t},e+1+". ",t)})),l("div",{style:{width:"30%"}},l("b",{style:{marginBottom:10}},"Received errors:"),v&&v.map(function(t,e){return l("div",{key:e+t},e+1+". ",t)}))))})}},[["VYW/",1,0]]]);