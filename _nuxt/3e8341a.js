(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{404:function(t,e,n){"use strict";(function(t){n(78);var o=n(16),l=n(29),r=n(41),c=n(42),f=n(37),m=n(25),h=n(12),_=(n(68),n(13),n(178));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(m.a)(t);if(e){var l=Object(m.a)(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var d=function(t,e,n,desc){var o,l=arguments.length,r=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(e,n,r):o(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},w=function(e){Object(c.a)(m,e);var n,f=v(m);function m(){var e;return Object(l.a)(this,m),(e=f.apply(this,arguments)).item={},e.hide=t.env.hide,e.opened=-1,e.confMap={metmuseum:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Metropolitan_Museum_of_Art_Logo.svg/220px-The_Metropolitan_Museum_of_Art_Logo.svg.png",label:"メトロポリタン美術館"},minneapolis:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mia_minneapolis_logo.png/220px-Mia_minneapolis_logo.png",label:"ミネアポリス美術館"},najda:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/National_Archives_of_Japan_logo.svg/220px-National_Archives_of_Japan_logo.svg.png",label:"国立公文書館"},cleveland:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cleveland_Museum_of_Art_logo.png/220px-Cleveland_Museum_of_Art_logo.png",label:"クリーヴランド美術館"}},e.page=1,e.perPage=10,e.baseUrl="https://nakamura196.github.io/cj_ex_app",e}return Object(r.a)(m,[{key:"asyncData",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,l,r,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.payload,e.app,o=e.query,l=e.$axios,!n){t.next=5;break}return t.abrupt("return",{item:n});case 5:return r="https://api.jsonbin.io/b/6164afa29548541c29c1c651/1",o.u&&(r=o.u),t.next=9,l.$get(r);case 9:return c=t.sent,(f=c).collections=f.collections,t.abrupt("return",{url:r,collections:f});case 13:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"items",get:function(){return this.collections.collections}},{key:"total",get:function(){return this.collections.collections.length}},{key:"length",get:function(){return Math.ceil(this.total/this.perPage)}},{key:"head",value:function(){return{titleTemplate:null,title:"CJ Gallery"}}}]),m}(_.Vue);w=d([Object(_.Component)({components:{}})],w),e.a=w}).call(this,n(187))},452:function(t,e,n){"use strict";n.r(e);var o=n(404).a,l=n(96),r=n(137),c=n.n(r),f=n(442),m=n(407),h=n(443),_=n(403),v=n(179),d=n(150),w=n(444),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("div",{staticClass:"ma-10"},[t._v("\n      Cultural Japanで集約された展示会の情報をまとめました。\n      "),n("a",{staticClass:"ml-2",attrs:{href:"https://ld.cultural.jp/snorql/?query=SELECT+*+WHERE+%7B%0D%0A%09%3Fcho+a+type%3A%E5%B1%95%E8%A6%A7%E4%BC%9A%3B+rdfs%3Alabel+%3Flabel%0D%0A%7D+%0D%0A",target:"_blank"}},[t._v("RDFストア "),n("v-icon",{staticClass:"ml-1"},[t._v("mdi-open-in-new")])],1),t._v(" "),n("a",{staticClass:"ml-2",attrs:{href:"http://www.kanzaki.com/works/2016/pub/image-annotator?u="+t.url,target:"_blank"}},[t._v("Image Annotator "),n("v-icon",{staticClass:"ml-1"},[t._v("mdi-open-in-new")])],1)]),t._v(" "),n("v-row",t._l(t.items,(function(e,o){return n("v-col",{attrs:{cols:"12",sm:"3"}},[t.confMap[e.label]?n("v-card",{staticClass:"my-5",attrs:{outlined:""}},[n("div",{staticClass:"grey lighten-2 pa-2"},[n("v-img",{staticClass:"white",staticStyle:{height:"150px"},attrs:{contain:"","max-height":"150",width:"100%",src:t.confMap[e.label].image}})],1),t._v(" "),n("div",{staticClass:"pa-5"},[n("h3",{staticClass:"mb-5"},[n("nuxt-link",{attrs:{to:t.localePath({name:"list",query:{id:e.label}})}},[t._v(t._s(t.confMap[e.label].label))])],1),t._v(" "),n("div",[n("v-chip",{staticClass:"ma-2"},[t._v("\n                "+t._s(e.collections.length+"件")+"\n              ")])],1)])]):t._e()],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VChip:m.a,VCol:h.a,VContainer:_.a,VIcon:v.a,VImg:d.a,VRow:w.a})}}]);