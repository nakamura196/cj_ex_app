(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{629:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=629},636:function(t,e,n){var content=n(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("29daf1c1",content,!0,{sourceMap:!1})},677:function(t,e,n){"use strict";n(636)},678:function(t,e,n){var r=n(19)(!1);r.push([t.i,".badge-secondary{color:#fff;background-color:#6c757d}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.openseadragon-canvas{outline:none;background-color:#f4f4f4!important}svg.a9s-annotationlayer .a9s-annotation .a9s-inner,svg.a9s-annotationlayer .a9s-selection .a9s-inner{stroke:#1976d2}",""]),t.exports=r},716:function(t,e,n){"use strict";n.r(e);n(43),n(22),n(29),n(48),n(37),n(9),n(51),n(54),n(41);var r=n(24),o=(n(79),n(56),n(73),n(38),n(61),n(33),n(77),n(40),n(25),n(124)),l=n.n(o),c=n(617),d=n.n(c),v=n(628);n(630);function f(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=function(t){var e=document.createElement("div");e.className="pa-2";var n=document.createElement("div");n.className="mt-2",e.appendChild(n);var r=document.createElement("div");return r.className="mt-2",e.appendChild(r),t.annotation.body.map((function(body){var t,div,e,button;"tagging"==body.purpose?r.appendChild((e=body.value,(button=document.createElement("span")).className="badge badge-secondary mx-1 pa-2",button.innerHTML=e,button)):n.appendChild((t=body.value,(div=document.createElement("div")).innerHTML=t.trim(),div.firstChild))})),e};var y={components:{},data:function(){return{dialog:!1,detail:{},baseUrl:"https://nakamura196.github.io/cj_ex_app",search:"",headers:[{text:this.$t("name"),value:"label"},{text:"分類",value:"category"},{text:"詳細",value:"detail",sortable:!1}],rows:[],viewer:null,anno:null,tabs:"0",items:[],thres:2e3,alert:!1,details:[{label:"図",value:"図"},{label:"分類",value:"category"},{label:"現在の地名",value:"現在の地名",type:"text"},{label:"リンク",value:"リンク",type:"link"},{label:"備考",value:"備考",type:"text"},{label:"沖縄県教育委員会編『琉球国絵図史料集』第１集の番号",value:"番号",type:"text"}],hide:[]}},props:{itemsAll:{required:!0},aggs:{required:!0}},mounted:function(){this.init(),this.update()},methods:{zoom:function(t){this.anno.fitBounds(t)},init:function(){this.alert=!1;var t=this.aggs["図"].value,e={"shoho-0001":{label:"正保琉球国絵図写"}},map={};for(var n in e)map[e[n].label]=n;var r,o=[],l={},c=f(t);try{for(c.s();!(r=c.n()).done;){var d=r.value,label=d[0],v=d[1],h=map[label];o.push({id:h,label:label,value:v,annos:[],rows:[]}),l[label]=o.length-1}}catch(t){c.e(t)}finally{c.f()}var m,y=0,_=f(this.itemsAll);try{for(_.s();!(m=_.n()).done;){var w=m.value,x=o[l[w["図"][0]]],k=w.member.split("=")[1];x.image=w.thumbnail.split("/"+k)[0]+"/info.json";var C=x.annos,V=x.rows,body=[{type:"TextualBody",value:'<div><a href="'.concat(this.baseUrl+"/item/"+w.objectID,'">').concat(w.label,"</a></div>")}];for(var A in w){var S=this.$utils.formatArrayValue(w[A]);S&&("".concat(S).startsWith("http")||["objectID","fulltext","label","sort"].includes(A)||body.push({type:"TextualBody",purpose:"tagging",value:A+": "+S}))}var T={"@context":"http://www.w3.org/ns/anno.jsonld",id:w.objectID,type:"Annotation",body:body,target:{selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:w.member.split("#")[1]}}};if(C.push(T),V.push({id:w.objectID,label:w.label,category:this.$utils.formatArrayValue(w.category),index:y}),(y+=1)>=this.thres&&this.thres>0){this.alert=!0;break}}}catch(t){_.e(t)}finally{_.f()}for(var j=[],D=0,E=o;D<E.length;D++){var I=E[D];I.annos.length>0&&(I.value=I.annos.length,j.push(I))}this.items=j},update:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("openseadragon").innerHTML="",n=t.items[Number(t.tabs)],e.next=4,l.a.get(n.image);case 4:r=e.sent,o=r.data,c={readOnly:!0,locale:"auto",widgets:[m]},f=d()({id:"openseadragon",prefixUrl:"https://recogito.github.io/js/openseadragon/images/",tileSources:o}),(h=v(f,c)).setAnnotations(n.annos),t.rows=n.rows,t.anno=h;case 12:case"end":return e.stop()}}),e)})))()},showAll:function(){this.thres=-1,this.init(),this.update()}},watch:{tabs:function(t,e){this.update()},aggs:function(t,e){JSON.stringify(t)!=JSON.stringify(e)&&(this.init(),this.update())}}},_=(n(677),n(97)),w=n(110),x=n.n(w),k=n(718),C=n(560),V=n(224),A=n(182),S=n(597),T=n(699),j=n(664),D=n(561),E=n(226),I=n(598),O=n(602),N=n(576),$=n(671),M=n(688),L=n(565),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tabs",{staticClass:"my-5",model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(t.items,(function(e,r){return n("v-tab",{key:r,staticClass:"primary--text",attrs:{href:"#"+r}},[t._v("\n          "+t._s(e.label)+" ("+t._s(e.value.toLocaleString())+" "+t._s(t.$t("results"))+")\n        ")])})),1),t._v(" "),t.alert?n("v-alert",{staticClass:"my-5",attrs:{type:"warning",prominent:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow"},[t._v("\n            上位 "+t._s(t.thres.toLocaleString())+" 件の結果のみを表示しています。全件を表示するには、検索結果を絞り込んでください。もしくは、表示に時間がかかる可能性がありますが、右のボタンから全件を表示してください。\n          ")]),t._v(" "),n("v-col",{staticClass:"shrink"},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.showAll()}}},[t._v("全件表示")])],1)],1)],1):t._e(),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-data-table",{attrs:{headers:t.headers,items:t.rows,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-text-field",{staticClass:"mx-4 my-5",attrs:{"background-color":"grey lighten-3",filled:"",rounded:"",dense:"","hide-details":"",placeholder:t.$t("add_a_search_term"),"append-icon":"mdi-magnify",clearable:"","clear-icon":"mdi-close-circle",label:t.$t("search")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.label",fn:function(e){var r=e.item;return[n("a",{on:{click:function(e){return t.zoom(r.id)}}},[t._v(t._s(r.label))])]}},{key:"item.detail",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{target:"_blank",icon:"",color:"primary"},on:{click:function(e){t.detail=t.itemsAll[r.index],t.dialog=!0}}},[n("v-icon",[t._v("mdi-menu")])],1)]}}])})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticStyle:{height:"600px",width:"100%"},attrs:{id:"openseadragon"}})])],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[n("span",{staticClass:"text-h5"},[t._v(t._s(t.detail.label))])]),t._v(" "),n("v-card-text",{staticClass:"py-5",staticStyle:{height:"400px","overflow-y":"auto"}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[t._l(t.details,(function(e,r){return[!t.hide[e.value]&&t.detail[e.value]&&t.detail[e.value].length>0?n("tr",{key:r},[n("td",[t._v(t._s(e.value))]),t._v(" "),n("td",[t._v(t._s(t.$utils.formatArrayValue(t.detail[e.value])))])]):t._e()]}))],2)]},proxy:!0}])})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              "+t._s("閉じる")+"\n            ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",to:t.localePath({name:"item-id",params:{id:t.detail.objectID}})}},[t._v("\n              "+t._s("詳細を開く")+"\n            ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VAlert:k.a,VBtn:C.a,VCard:V.a,VCardActions:A.a,VCardText:A.b,VCardTitle:A.c,VCol:S.a,VDataTable:T.a,VDialog:j.a,VDivider:D.a,VIcon:E.a,VRow:I.a,VSimpleTable:O.a,VSpacer:N.a,VTab:$.a,VTabs:M.a,VTextField:L.a})}}]);