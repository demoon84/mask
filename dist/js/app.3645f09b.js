(function(t){function e(e){for(var s,i,r=e[0],c=e[1],d=e[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"06e1":function(t,e,a){"use strict";var s=a("f044"),n=a.n(s);n.a},"361f":function(t,e,a){"use strict";var s=a("666b"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.ready?a("StoreMap",{attrs:{stores:t.stores,position:t.position,activeMap:t.activeMap},on:{updateActiveStore:t.handleUpdateActiveStore,updateStoreMapCenter:t.handleUpdateStoreMapCenter}}):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.enableCover,expression:"enableCover"}],staticClass:"store-map-cover"}),a("DataInfo",{attrs:{time:t.time,canFind:t.canFind,activeMap:t.activeMap},on:{updateFindData:t.handleUpdateFindData}}),a("StoreList",{attrs:{stores:t.stores,activeMap:t.activeMap,activeStore:t.activeStore},on:{updateCenterPosition:t.handleUpdateCenterPosition}}),t.activeMap?a("el-button",{staticClass:"store-map-close",attrs:{type:"danger",icon:"el-icon-close",circle:""},on:{click:t.handleCloseMap}}):t._e()],1)},o=[],i=(a("4160"),a("45fc"),a("159b"),a("96cf"),a("1da1")),r=a("5c96"),c=a.n(r),d=a("2ef0"),l=a.n(d),u=a("c1df"),f=a.n(u),p=a("bc3a"),h=a.n(p),m=function(t,e){return h.a.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json",{params:{lat:t,lng:e,m:1e3}})},b=m,j=a("f13c"),v=a.n(j),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-info"},[a("div",{staticClass:"data-info__time"},[t._v("데이터 업데이트: "+t._s(t.updateTime))]),a("a",{staticClass:"data-info__find",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleUpdateData(e)}}},[t.visiblePointFind?a("span",[a("i",{staticClass:"el-icon-location"}),t._v(" 지점에서")]):a("i",{staticClass:"el-icon-refresh"}),t._v(" 재검색")])])},g=[],w={name:"DataInfo",props:["time","canFind","activeMap"],computed:{updateTime:function(){return this.time?f()(this.time.created_at).calendar():""},visiblePointFind:function(){return this.canFind&&this.activeMap}},methods:{handleUpdateData:function(){this.$emit("updateFindData")}}},_=w,y=(a("8c62"),a("2877")),M=Object(y["a"])(_,k,g,!1,null,null,null),S=M.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["store-map",{"store-map--active":t.activeMap}]},[t._m(0),a("div",{staticClass:"store-map__area",attrs:{id:"map"}})])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"store-map__location"},[a("i",{staticClass:"el-icon-location"})])}],x=(a("d81d"),a("b0c0"),{name:"StoreMap",props:["stores","position","activeMap"],data:function(){return{map:null,active:!1,markerList:[],overlayList:[]}},watch:{position:{handler:function(t){this.map.setCenter(new window.kakao.maps.LatLng(t.lat,t.lng))},deep:!0},stores:{handler:function(){this.removeMarker(),this.addMarker()},deep:!0}},methods:{removeMarker:function(){l.a.forEach(this.markerList,(function(t){t.setMap(null)})),l.a.forEach(this.overlayList,(function(t){t.setMap(null)})),this.markerList=[],this.overlayList=[]},addMarker:function(){var t=this;l.a.forEach(this.stores,(function(e){l.a.forEach(e,(function(e){var a=new window.kakao.maps.LatLng(e.lat,e.lng),s=new window.kakao.maps.Marker({map:t.map,position:a,image:new window.kakao.maps.MarkerImage("https://demoon84.github.io/mask/dist/".concat(e.remain_stat,".png"),new window.kakao.maps.Size(16,22))});s.code=e.code,t.markerList.push(s),window.kakao.maps.event.addListener(s,"click",(function(){t.$emit("updateActiveStore",s.code),t.map.panTo(s.getPosition()),t.$nextTick((function(){v.a.scrollTo("#store-".concat(s.code),{duration:500,offset:-window.innerHeight/2-70})}))}));var n=new window.kakao.maps.CustomOverlay({map:t.map,position:a,content:'<div style="font-size: 10px; background: rgba(255,255,255,.7);padding: 1px 4px;border-radius: 12px;border: 1px solid #ccc;">'.concat(e.name,"</div>"),yAnchor:0});t.overlayList.push(n)}))}))},updateCenterPosition:l.a.debounce((function(){var t=this.map.getCenter();this.$emit("updateStoreMapCenter",{lat:t.getLat(),lng:t.getLng()})}),250)},mounted:function(){var t=this;this.map=new window.kakao.maps.Map(document.getElementById("map"),{center:new window.kakao.maps.LatLng(this.position.lat,this.position.lng),level:3}),window.kakao.maps.event.addListener(this.map,"center_changed",(function(){t.updateCenterPosition()})),this.addMarker()}}),z=x,O=(a("06e1"),Object(y["a"])(z,L,C,!1,null,null,null)),P=O.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["store-list",{"store-list--active-map":t.activeMap}]},[a("ul",[t._l(t.stores.plenty,(function(e){return a("StoreListItem",{key:e.code,attrs:{store:e,isActive:t.activeStore===e.code},on:{updateViewMap:t.handleUpdateViewMap}})})),t._l(t.stores.some,(function(e){return a("StoreListItem",{key:e.code,attrs:{store:e,isActive:t.activeStore===e.code},on:{updateViewMap:t.handleUpdateViewMap}})})),t._l(t.stores.few,(function(e){return a("StoreListItem",{key:e.code,attrs:{store:e,isActive:t.activeStore===e.code},on:{updateViewMap:t.handleUpdateViewMap}})})),t._l(t.stores.break,(function(e){return a("StoreListItem",{key:e.code,attrs:{store:e,isActive:t.activeStore===e.code},on:{updateViewMap:t.handleUpdateViewMap}})})),t._l(t.stores.empty,(function(e){return a("StoreListItem",{key:e.code,attrs:{store:e,isActive:t.activeStore===e.code},on:{updateViewMap:t.handleUpdateViewMap}})}))],2)])},I=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:["store-list-item",{"store-list-item--active":t.isActive}],attrs:{id:"store-"+t.store.code},on:{click:function(e){return t.handleViewMap(t.store.lat,t.store.lng,t.store.code)}}},[a("div",{class:[t.store.remain_stat,"stat"]},[t._v(t._s(t.status))]),a("div",[t._v(t._s(t.store.name)+" | "),a("span",{staticClass:"store-list-item__distance"},[t._v(t._s(t.store.distance)+"미터")])]),a("div",[t._v(t._s(t.store.addr))]),t.store.stock_at?a("div",{staticClass:"store-list-item__input-time"},[t._v("입고시간: "+t._s(t.store.stock_at))]):t._e()])},F=[],V=(a("99af"),{name:"StoreListItem",props:["store","isActive"],computed:{status:function(){return"plenty"===this.store.remain_stat?"100개 이상":"some"===this.store.remain_stat?"100개 미만":"few"===this.store.remain_stat?"30개 미만":"empty"===this.store.remain_stat?"품절":"break"===this.store.remain_stat?"판매중지":""}},methods:{handleViewMap:function(){this.$emit("updateViewMap",this.store)},handleFindLoad:function(t,e,a){location.href="https://map.kakao.com/link/to/".concat(t,",").concat(e,",").concat(a)}}}),$=V,A=(a("88a6"),Object(y["a"])($,E,F,!1,null,null,null)),D=A.exports,T={name:"StoreList",props:["stores","activeMap","activeStore"],components:{StoreListItem:D},data:function(){return{}},methods:{handleUpdateViewMap:function(t){this.$emit("updateCenterPosition",t)}}},N=T,B=(a("361f"),Object(y["a"])(N,U,I,!1,null,null,null)),G=B.exports,q={name:"App",components:{StoreMap:P,DataInfo:S,StoreList:G},data:function(){return{loading:null,ready:!1,activeStore:"",canFind:!1,activeMap:!1,stores:{plenty:[],some:[],few:[],empty:[],break:[]},position:{lat:0,lng:0},mapCenter:{lat:0,lng:0}}},computed:{time:function(){return this.stores.plenty[0]?this.stores.plenty[0]:this.stores.some[0]?this.stores.some[0]:this.stores.few[0]?this.stores.few[0]:this.stores.empty[0]?this.stores.empty[0]:!!this.stores.break[0]&&this.stores.break[0]},enableCover:function(){return this.loading&&!this.activeMap}},methods:{distance:function(t,e,a,s,n){if(t===a&&e===s)return 0;var o=Math.PI*t/180,i=Math.PI*a/180,r=e-s,c=Math.PI*r/180,d=Math.sin(o)*Math.sin(i)+Math.cos(o)*Math.cos(i)*Math.cos(c);return d>1&&(d=1),d=Math.acos(d),d=180*d/Math.PI,d=60*d*1.1515,"K"===n&&(d*=1.609344),"N"===n&&(d*=.8684),d},handleCloseMap:function(){this.activeMap=!1,this.activeStore=!1},handleUpdateFindData:function(){this.loading=r["Loading"].service({fullscreen:!0,background:"rgb(255, 255, 255, 0.95)"}),this.getStoreList(this.mapCenter.lat,this.mapCenter.lng)},handleUpdateCenterPosition:function(t){this.position={lat:t.lat,lng:t.lng},this.mapCenter=this.position,this.activeMap=!0,this.activeStore=t.code,this.$nextTick((function(){v.a.scrollTo("#store-".concat(t.code),{duration:500,offset:-window.innerHeight/2-70})}))},handleUpdateActiveStore:function(t){this.activeStore=t},handleUpdateStoreMapCenter:function(t){this.mapCenter=t,this.canFind=!0},getStoreList:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a.canFind=!1,a.stores={plenty:[],some:[],few:[],empty:[],break:[]},s.next=4,b(t,e);case 4:n=s.sent.data.stores,l.a.forEach(n,(function(s){s.distance=Math.floor(1e3*a.distance(s.lat,s.lng,t,e,"K"))})),o=l.a.sortBy(n,[function(t){return t.distance}]),l.a.forEach(o,(function(t){t.remain_stat&&(t.stock_at=f()(t.stock_at).format("LLLL"),a.stores[t.remain_stat].push(t))})),a.ready=!0,setTimeout((function(){a.loading.close(),a.loading=!1}),500);case 10:case"end":return s.stop()}}),s)})))()}},created:function(){var t=this;this.loading=r["Loading"].service({fullscreen:!0,background:"rgba(255, 255, 255, 0.95)"}),navigator.geolocation.getCurrentPosition((function(e){t.position={lat:e.coords.latitude,lng:e.coords.longitude},t.mapCenter={lat:e.coords.latitude,lng:e.coords.longitude},t.getStoreList(e.coords.latitude,e.coords.longitude)}))}},H=q,J=(a("034f"),Object(y["a"])(H,n,o,!1,null,null,null)),K=J.exports;a("0fae");f.a.locale("ko"),s["default"].use(c.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(K)}}).$mount("#app")},"666b":function(t,e,a){},"85ec":function(t,e,a){},"88a6":function(t,e,a){"use strict";var s=a("9830"),n=a.n(s);n.a},"8c62":function(t,e,a){"use strict";var s=a("d3d5"),n=a.n(s);n.a},9830:function(t,e,a){},d3d5:function(t,e,a){},f044:function(t,e,a){}});
//# sourceMappingURL=app.3645f09b.js.map