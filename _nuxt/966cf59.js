(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{581:function(e,t,r){var content=r(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},582:function(e,t,r){var n=r(19)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},591:function(e,t,r){"use strict";r(12),r(9),r(11),r(14),r(13),r(17);var n=r(3),o=(r(76),r(581),r(85)),c=r(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(1),m=Object(v.h)("v-breadcrumbs__divider","li"),f=r(21);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(c.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(m,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(h,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},631:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=631},633:function(e,t,r){var content=r(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("47d21e20",content,!0,{sourceMap:!1})},654:function(e,t,r){"use strict";r(633)},655:function(e,t,r){var n=r(19)(!1);n.push([e.i,".badge-secondary{color:#fff;background-color:#6c757d}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}",""]),e.exports=n},711:function(e,t,r){"use strict";r.r(t);r(56),r(73),r(124);var n=r(617),o=r.n(n),c=r(630),l=(r(632),function(e){var t=document.createElement("div");t.className="pa-2";var r=document.createElement("div");r.className="mt-2",t.appendChild(r);var n=document.createElement("div");return n.className="mt-2",t.appendChild(n),e.annotation.body.map((function(body){var e,div,t,button;"tagging"==body.purpose?n.appendChild((t=body.value,(button=document.createElement("span")).className="badge badge-secondary mx-1 pa-2",button.innerHTML=t,button)):r.appendChild((e=body.value,(div=document.createElement("div")).innerHTML=e.trim(),div.firstChild))})),t});var d={components:{},data:function(){return{viewer:null,anno:null,bh:[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("osd")}]}},mounted:function(){var e=o()({id:"openseadragon",prefixUrl:"https://recogito.github.io/js/openseadragon/images/",tileSources:{type:"image",url:"https://recogito.github.io/images/1280px-Hallstatt.jpg"}});this.viewer=e;var t=c(e,{readOnly:!0,widgets:[l]});this.anno=t;t.setAnnotations([{"@context":"http://www.w3.org/ns/anno.jsonld",id:"#a88b22d0-6106-4872-9435-c78b5e89fede",type:"Annotation",body:[{type:"TextualBody",value:"It's Hallstatt in Upper Austria"}],target:{selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:"xywh=pixel:270,120,90,170"}}},{"@context":"http://www.w3.org/ns/anno.jsonld",id:"#07475897-d2eb-4dce-aa12-ecb50771c734",type:"Annotation",body:[{type:"TextualBody",value:"<div><a href='#'>bbb</a> yahhhhhhhhhhh !!!</div>"},{type:"TextualBody",purpose:"tagging",value:"Church2"},{type:"TextualBody",purpose:"tagging",value:"Church3"},{type:"TextualBody",purpose:"tagging",value:"Church4"},{type:"TextualBody",purpose:"tagging",value:"Church"},{type:"TextualBody",purpose:"tagging",value:"Church"},{type:"TextualBody",purpose:"tagging",value:"Church"},{type:"TextualBody",purpose:"tagging",value:"Church"},{type:"TextualBody",purpose:"tagging",value:"Church"}],target:{selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:"xywh=540,240,180,340"}}}])},methods:{zoom:function(e){0===e?this.anno.fitBounds("#a88b22d0-6106-4872-9435-c78b5e89fede"):this.anno.fitBounds("#07475897-d2eb-4dce-aa12-ecb50771c734")}},head:function(){return{title:this.$t("osd")}}},h=(r(654),r(97)),v=r(110),m=r.n(v),f=r(591),y=r(560),w=r(597),x=r(575),O=r(226),j=r(598),_=r(70),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.bh},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),e._v(" "),r("v-container",{staticClass:"my-5",attrs:{fluid:""}},[r("v-row",[r("v-col",[r("v-btn",{on:{click:function(t){return e.zoom(0)}}},[e._v("aaa")]),e._v(" "),r("v-btn",{on:{click:function(t){return e.zoom(1)}}},[e._v("bbb")])],1),e._v(" "),r("v-col",[r("div",{staticStyle:{height:"600px",width:"100%"},attrs:{id:"openseadragon"}})])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBreadcrumbs:f.a,VBtn:y.a,VCol:w.a,VContainer:x.a,VIcon:O.a,VRow:j.a,VSheet:_.a})}}]);