(function(t){function e(e){for(var a,i,r=e[0],c=e[1],d=e[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.ready?s("Store",{attrs:{stores:t.stores,position:t.position}}):t._e(),s("div",{staticClass:"last-update-time"},[t._v("데이터 업데이트: "+t._s(t.lastUpdateTime))])],1)},o=[],i=(s("4160"),s("159b"),s("bc3a")),r=s.n(i),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store"},[t._m(0),s("div",{staticClass:"store__list"},[s("ul",[t._l(t.stores.plenty,(function(e){return[s("li",{key:e.code,class:["store__list-item",{"store__list-item--active":t.activeItem===e.code}],attrs:{id:"store-"+e.code}},[s("div",{class:[e.remain_stat,"stat"]},[t._v(t._s(t.getsStatNumber(e.remain_stat)))]),s("div",[t._v(t._s(e.name)+" | "),s("span",{staticClass:"store__distance"},[t._v(t._s(e.distance)+"미터")])]),s("div",[t._v(t._s(e.addr))]),e.stock_at?s("div",{staticClass:"store__input-time"},[t._v("입고시간: "+t._s(e.stock_at))]):t._e(),s("el-button-group",{staticClass:"store__btn-group"},[s("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(s){return t.handleFindLoad(e.name,e.lat,e.lng)}}},[t._v("길찾기")]),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.handleViewMap(e.lat,e.lng,e.code)}}},[t._v("위치보기")])],1)],1)]})),t._l(t.stores.some,(function(e){return[s("li",{key:e.code,class:["store__list-item",{"store__list-item--active":t.activeItem===e.code}],attrs:{id:"store-"+e.code}},[s("div",{class:[e.remain_stat,"stat"]},[t._v(t._s(t.getsStatNumber(e.remain_stat)))]),s("div",[t._v(t._s(e.name)+" | "),s("span",{staticClass:"store__distance"},[t._v(t._s(e.distance)+"미터")])]),s("div",[t._v(t._s(e.addr))]),e.stock_at?s("div",{staticClass:"store__input-time"},[t._v("입고시간: "+t._s(e.stock_at))]):t._e(),s("el-button-group",{staticClass:"store__btn-group"},[s("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(s){return t.handleFindLoad(e.name,e.lat,e.lng)}}},[t._v("길찾기")]),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.handleViewMap(e.lat,e.lng,e.code)}}},[t._v("위치보기")])],1)],1)]})),t._l(t.stores.few,(function(e){return[s("li",{key:e.code,class:["store__list-item",{"store__list-item--active":t.activeItem===e.code}],attrs:{id:"store-"+e.code}},[s("div",{class:[e.remain_stat,"stat"]},[t._v(t._s(t.getsStatNumber(e.remain_stat)))]),s("div",[t._v(t._s(e.name)+" | "),s("span",{staticClass:"store__distance"},[t._v(t._s(e.distance)+"미터")])]),s("div",[t._v(t._s(e.addr))]),e.stock_at?s("div",{staticClass:"store__input-time"},[t._v("입고시간: "+t._s(e.stock_at))]):t._e(),s("el-button-group",{staticClass:"store__btn-group"},[s("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(s){return t.handleFindLoad(e.name,e.lat,e.lng)}}},[t._v("길찾기")]),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.handleViewMap(e.lat,e.lng,e.code)}}},[t._v("위치보기")])],1)],1)]})),t._l(t.stores.break,(function(e){return[s("li",{key:e.code,class:["store__list-item","sold-out",{"store__list-item--active":t.activeItem===e.code}],attrs:{id:"store-"+e.code}},[s("div",{class:[e.remain_stat,"stat"]},[t._v(t._s(t.getsStatNumber(e.remain_stat)))]),s("div",[t._v(t._s(e.name)+" | "),s("span",{staticClass:"store__distance"},[t._v(t._s(e.distance)+"미터")])]),s("div",[t._v(t._s(e.addr))]),e.stock_at?s("div",{staticClass:"store__input-time"},[t._v("입고시간: "+t._s(e.stock_at))]):t._e(),s("el-button-group",{staticClass:"store__btn-group"},[s("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(s){return t.handleFindLoad(e.name,e.lat,e.lng)}}},[t._v("길찾기")]),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.handleViewMap(e.lat,e.lng,e.code)}}},[t._v("위치보기")])],1)],1)]})),t._l(t.stores.empty,(function(e){return[s("li",{key:e.code,class:["store__list-item","sold-out",{"store__list-item--active":t.activeItem===e.code}],attrs:{id:"store-"+e.code}},[s("div",{class:[e.remain_stat,"stat"]},[t._v(t._s(t.getsStatNumber(e.remain_stat)))]),s("div",[t._v(t._s(e.name)+" | "),s("span",{staticClass:"store__distance"},[t._v(t._s(e.distance)+"미터")])]),s("div",[t._v(t._s(e.addr))]),e.stock_at?s("div",{staticClass:"store__input-time"},[t._v("입고시간: "+t._s(e.stock_at))]):t._e(),s("el-button-group",{staticClass:"store__btn-group"},[s("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(s){return t.handleFindLoad(e.name,e.lat,e.lng)}}},[t._v("길찾기")]),s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){return t.handleViewMap(e.lat,e.lng,e.code)}}},[t._v("위치보기")])],1)],1)]}))],2)])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store__map"},[s("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"map"}})])}],l=(s("99af"),s("d81d"),s("45fc"),s("b0c0"),s("2ef0")),u=s.n(l),f=s("f13c"),m=s.n(f),_={name:"StoreList",props:["stores","position"],data:function(){return{map:null,activeItem:""}},methods:{handleViewMap:function(t,e,s){this.map.setCenter(new window.kakao.maps.LatLng(t,e)),this.activeItem=s},handleFindLoad:function(t,e,s){location.href="https://map.kakao.com/link/to/".concat(t,",").concat(e,",").concat(s)},getsStatNumber:function(t){return"plenty"===t?"100개 이상":"some"===t?"100개 미만":"few"===t?"30개 미만":"empty"===t?"품절":"break"===t?"판매중지":void 0}},mounted:function(){var t,e=this;this.map=new window.kakao.maps.Map(document.getElementById("map"),{center:new window.kakao.maps.LatLng(this.position.lat,this.position.lng),level:3}),u.a.forEach(this.stores,(function(t){u.a.forEach(t,(function(t){var s=new window.kakao.maps.LatLng(t.lat,t.lng),a=new window.kakao.maps.Marker({map:e.map,position:s,image:new window.kakao.maps.MarkerImage("https://demoon84.github.io/mask/dist/".concat(t.remain_stat,".png"),new window.kakao.maps.Size(16,22))});a.code=t.code,window.kakao.maps.event.addListener(a,"click",(function(){m.a.scrollTo("#store-".concat(a.code),500,{offset:-window.innerHeight/2-70}),e.activeItem=a.code})),new window.kakao.maps.CustomOverlay({map:e.map,position:s,content:'<div style="font-size: 10px; background: rgba(255,255,255,.7);padding: 1px 4px;border-radius: 12px;border: 1px solid #ccc;">'.concat(t.name,"</div>"),yAnchor:0})}))})),this.stores.plenty[0]?t=this.stores.plenty[0]:this.stores.some[0]?t=this.stores.some[0]:this.stores.few[0]&&(t=this.stores.few[0]),this.activeItem=t.code,this.map.setCenter(new window.kakao.maps.LatLng(t.lat,t.lng))}},p=_,b=(s("8824"),s("2877")),j=Object(b["a"])(p,c,d,!1,null,null,null),v=j.exports,h=s("5c96"),g=s.n(h),k=s("c1df"),y=s.n(k),w={name:"App",components:{Store:v},data:function(){return{stores:{plenty:[],some:[],few:[],empty:[],break:[]},loading:null,position:null,ready:!1}},computed:{lastUpdateTime:function(){return this.stores.plenty[0]?y()(this.stores.plenty[0].created_at).format("LLL"):this.stores.empty[0]?y()(this.stores.empty[0].created_at).format("LLL"):""}},methods:{distance:function(t,e,s,a,n){if(t===s&&e===a)return 0;var o=Math.PI*t/180,i=Math.PI*s/180,r=e-a,c=Math.PI*r/180,d=Math.sin(o)*Math.sin(i)+Math.cos(o)*Math.cos(i)*Math.cos(c);return d>1&&(d=1),d=Math.acos(d),d=180*d/Math.PI,d=60*d*1.1515,"K"===n&&(d*=1.609344),"N"===n&&(d*=.8684),d}},created:function(){this.loading=h["Loading"].service({fullscreen:!0}),y.a.locale("ko")},beforeMount:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.position={lat:e.coords.latitude,lng:e.coords.longitude},r.a.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json",{params:{lat:e.coords.latitude,lng:e.coords.longitude,m:1500}}).then((function(s){var a=s.data.stores;u.a.forEach(a,(function(s){s.distance=Math.floor(1e3*t.distance(s.lat,s.lng,e.coords.latitude,e.coords.longitude,"K"))}));var n=u.a.sortBy(a,[function(t){return t.distance}]);u.a.forEach(n,(function(e){e.remain_stat&&(e.stock_at=y()(e.stock_at).format("LLLL"),t.stores[e.remain_stat].push(e))})),t.ready=!0,t.loading.close()}))}),(function(){}),{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3})}},z=w,L=(s("034f"),Object(b["a"])(z,n,o,!1,null,null,null)),M=L.exports;s("0fae");a["default"].use(g.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,s){},8824:function(t,e,s){"use strict";var a=s("af75"),n=s.n(a);n.a},af75:function(t,e,s){}});
//# sourceMappingURL=app.3fa55772.js.map