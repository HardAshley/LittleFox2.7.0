(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cdcae3e"],{"02f3":function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"f",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return d}));var n=a("b775");function r(t){return Object(n["a"])({url:"/reward/getShareList",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/reward/getShareTongji",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/reward/getInviteList",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/reward/getInviteTongji",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/reward/getAdList",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/reward/getAdTongji",method:"post",data:t})}},"72a3":function(t,e,a){"use strict";var n=a("fd6f"),r=a("f99f"),i=a("62ee"),s=a("5d64"),c=a("df01").get,o=RegExp.prototype,d=TypeError;n&&r&&s(o,"dotAll",{configurable:!0,get:function(){if(this!==o){if("RegExp"===i(this))return!!c(this).dotAll;throw new d("Incompatible receiver, RegExp required")}}})},"98c9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("注册时间"))+"：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":t._f("lang")("至"),"start-placeholder":t._f("lang")("时间开始"),"end-placeholder":t._f("lang")("时间结束"),size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v(t._s(t._f("lang")("今天")))]),a("el-radio-button",{attrs:{label:"day1"}},[t._v(t._s(t._f("lang")("昨天")))]),a("el-radio-button",{attrs:{label:"day2"}},[t._v(t._s(t._f("lang")("前天")))])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("用户ID"))+"：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:t._f("lang")("请输入用户id")},model:{value:t.search.user_id,callback:function(e){t.$set(t.search,"user_id",e)},expression:"search.user_id"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v(t._s(t._f("lang")("筛选")))]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v(t._s(t._f("lang")("重置")))])],1)]),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"create_time",label:t._f("lang")("观看时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"user_id",label:t._f("lang")("用户ID"),width:"100"}}),a("el-table-column",{attrs:{prop:"reward_num",label:t._f("lang")("奖励"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.reward_num)+" "+t._s(t._f("lang")("条")))])]}}])}),a("el-table-column",{attrs:{prop:"ad_unit_id",label:t._f("lang")("广告位ID")}})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),t._v(" "+t._s(t._f("lang")("共观看"))+" "),a("span",{staticClass:"text-green"},[t._v(" "+t._s(t.tongji.adCount)+" ")]),t._v(" "+t._s(t._f("lang")("次"))+"，"+t._s(t._f("lang")("共发放奖励"))+" "),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.tongji.rewardTotal)+" ")]),t._v(" "+t._s(t._f("lang")("条"))+" ")]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)],1)])},r=[],i=(a("582c"),a("cee4"),a("36fd"),a("772a"),a("d84b"),a("72a3"),a("b208"),a("e3e9"),a("02f3")),s={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:15,dateType:"",search:{date:[],user_id:"",keyword:""},tongji:{adCount:0,rewardTotal:0}}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={date:[],user_id:"",keyword:""},this.doSearch()},getList:function(){var t=this,e=Object.assign(this.search,{page:this.page,pagesize:this.pagesize});Object(i["a"])(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count})),1===this.page&&Object(i["b"])(e).then((function(e){t.tongji=e.data}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),n=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=n),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e}}},c=s,o=(a("db9d"),a("1805")),d=Object(o["a"])(c,n,r,!1,null,"23ab6925",null);e["default"]=d.exports},ae13:function(t,e,a){},b208:function(t,e,a){"use strict";var n=a("fd6f"),r=a("0cb5").MISSED_STICKY,i=a("62ee"),s=a("5d64"),c=a("df01").get,o=RegExp.prototype,d=TypeError;n&&r&&s(o,"sticky",{configurable:!0,get:function(){if(this!==o){if("RegExp"===i(this))return!!c(this).sticky;throw new d("Incompatible receiver, RegExp required")}}})},c0e3:function(t,e,a){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},cee4:function(t,e,a){"use strict";var n=a("c308"),r=a("d53d"),i=a("61eb"),s=a("bce3"),c=a("1d9f"),o=a("c0e3"),d=a("5206"),l=a("a8d7"),u=a("248e");r("search",(function(t,e,a){return[function(e){var a=c(this),r=s(e)?void 0:l(e,t);return r?n(r,e,a):new RegExp(e)[t](d(a))},function(t){var n=i(this),r=d(t),s=a(e,n,r);if(s.done)return s.value;var c=n.lastIndex;o(c,0)||(n.lastIndex=0);var l=u(n,r);return o(n.lastIndex,c)||(n.lastIndex=c),null===l?-1:l.index}]}))},d84b:function(t,e,a){"use strict";var n=a("fd6f"),r=a("08f9"),i=a("674f"),s=a("9de7"),c=a("c4c2"),o=a("957e"),d=a("00ab").f,l=a("08dc"),u=a("5cdc"),g=a("5206"),p=a("d42b"),f=a("0cb5"),h=a("7d0a"),b=a("ec4a"),y=a("ce8f"),_=a("dc33"),v=a("df01").enforce,m=a("070c"),x=a("b12d"),w=a("f99f"),S=a("4406"),T=x("match"),E=r.RegExp,C=E.prototype,I=r.SyntaxError,j=i(C.exec),k=i("".charAt),D=i("".replace),R=i("".indexOf),M=i("".slice),z=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,L=/a/g,A=new E(O)!==O,$=f.MISSED_STICKY,F=f.UNSUPPORTED_Y,Y=n&&(!A||$||w||S||y((function(){return L[T]=!1,E(O)!==O||E(L)===L||"/a/i"!==String(E(O,"i"))}))),q=function(t){for(var e,a=t.length,n=0,r="",i=!1;n<=a;n++)e=k(t,n),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),r+=e):r+="[\\s\\S]":r+=e+k(t,++n);return r},H=function(t){for(var e,a=t.length,n=0,r="",i=[],s={},c=!1,o=!1,d=0,l="";n<=a;n++){if(e=k(t,n),"\\"===e)e+=k(t,++n);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:j(z,M(t,n+1))&&(n+=2,o=!0),r+=e,d++;continue;case">"===e&&o:if(""===l||_(s,l))throw new I("Invalid capture group name");s[l]=!0,i[i.length]=[l,d],o=!1,l="";continue}o?l+=e:r+=e}return[r,i]};if(s("RegExp",Y)){for(var J=function(t,e){var a,n,r,i,s,d,f=l(C,this),h=u(t),b=void 0===e,y=[],_=t;if(!f&&h&&b&&t.constructor===J)return t;if((h||l(C,t))&&(t=t.source,b&&(e=p(_))),t=void 0===t?"":g(t),e=void 0===e?"":g(e),_=t,w&&"dotAll"in O&&(n=!!e&&R(e,"s")>-1,n&&(e=D(e,/s/g,""))),a=e,$&&"sticky"in O&&(r=!!e&&R(e,"y")>-1,r&&F&&(e=D(e,/y/g,""))),S&&(i=H(t),t=i[0],y=i[1]),s=c(E(t,e),f?this:C,J),(n||r||y.length)&&(d=v(s),n&&(d.dotAll=!0,d.raw=J(q(t),a)),r&&(d.sticky=!0),y.length&&(d.groups=y)),t!==_)try{o(s,"source",""===_?"(?:)":_)}catch(m){}return s},K=d(E),P=0;K.length>P;)h(J,E,K[P++]);C.constructor=J,J.prototype=C,b(r,"RegExp",J,{constructor:!0})}m("RegExp")},db9d:function(t,e,a){"use strict";a("ae13")}}]);