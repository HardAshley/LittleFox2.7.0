(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8976ab6"],{"08ff":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"box-panel",staticStyle:{"padding-top":"10px","padding-bottom":"0"}},[a("el-tabs",{staticClass:"search-tabs",on:{"tab-click":t.switchTab},model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}},[a("el-tab-pane",{attrs:{label:"自由对话",name:"chat"}}),a("el-tab-pane",{attrs:{label:"文本创作",name:"write"}}),a("el-tab-pane",{attrs:{label:"角色模拟",name:"cosplay"}})],1),a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("选择站点"))+"：")]),a("el-select",{attrs:{size:"small",clearable:"",placeholder:t._f("lang")("请选择站点")},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}},t._l(t.siteList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1),a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("提问时间"))+"：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":t._f("lang")("至"),"start-placeholder":t._f("lang")("时间开始"),"end-placeholder":t._f("lang")("时间结束"),size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v(t._s(t._f("lang")("今天")))]),a("el-radio-button",{attrs:{label:"day1"}},[t._v(t._s(t._f("lang")("昨天")))]),a("el-radio-button",{attrs:{label:"day2"}},[t._v(t._s(t._f("lang")("前天")))])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("用户ID"))+"：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:t._f("lang")("请输入用户id")},model:{value:t.search.user_id,callback:function(e){t.$set(t.search,"user_id",e)},expression:"search.user_id"}}),a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("关键词"))+"：")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:t._f("lang")("请输入关键词")},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v(t._s(t._f("lang")("筛选")))]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v(t._s(t._f("lang")("重置")))])],1)])],1),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","padding-top":"0","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{prop:"create_time",label:t._f("lang")("时间"),width:"170"}}),a("el-table-column",{attrs:{prop:"user_id",label:t._f("lang")("用户ID"),width:"80"}}),"write"===t.search.type||"cosplay"===t.search.type?a("el-table-column",{attrs:{label:t._f("lang")("使用模型"),width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.topic_title?a("span",[t._v(" 【"+t._s(e.row.topic_title)+"】"+t._s(e.row.prompt_title)+" ")]):t._e()]}}],null,!1,3922376494)}):t._e(),a("el-table-column",{attrs:{label:t._f("lang")("用户输入"),"min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(e.row.message)}}),e.row.message_input?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.message_input)}}},[t._v(t._s(t._f("lang")("查看原文")))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"channel",label:t._f("lang")("AI通道"),width:"120"}}),a("el-table-column",{attrs:{label:t._f("lang")("AI回复"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.response)}}},[t._v(t._s(t._f("lang")("查看回复")))])]}}])}),a("el-table-column",{attrs:{prop:"total_tokens",label:t._f("lang")("消耗tokens"),width:"100"}}),a("el-table-column",{attrs:{label:t._f("lang")("操作"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.doDel(e.row.id)}}},[t._v(t._s(t._f("lang")("删除")))])]}}])})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),t._v(" "+t._s(t._f("lang")("共"))+" "),a("span",{staticClass:"text-green"},[t._v(" "+t._s(t.tongji.msgCount)+" ")]),t._v(" "+t._s(t._f("lang")("条问题"))+"， "),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.tongji.msgTokens)+" ")]),t._v(" tokens ")]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1),t.dialogMessage?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog full-dialog",title:t._f("lang")("查看原文"),width:"800px",visible:!0,"close-on-click-modal":!0,"before-close":t.closeMsgDialog}},[a("div",{staticStyle:{padding:"0","font-size":"16px","line-height":"24px",color:"#333"}},[a("span",{domProps:{innerHTML:t._s(t.dialogMessage)}})]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeMsgDialog}},[t._v(t._s(t._f("lang")("关 闭")))])],1)])],1):t._e()],1)])},s=[],i=(a("582c"),a("cee4"),a("36fd"),a("772a"),a("d84b"),a("72a3"),a("b208"),a("e3e9"),a("0e2f")),o=a("571f"),r={data:function(){return{siteList:[],dataList:[],dataTotal:0,page:1,pagesize:20,dateType:"",search:{site_id:"",type:"chat",date:[],user_id:"",keyword:""},tongji:{msgCount:0,msgTokens:0},dialogMessage:""}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={site_id:"",type:"chat",date:[],user_id:"",keyword:""},this.doSearch(),this.getSiteList()},getSiteList:function(){var t=this;Object(o["e"])().then((function(e){t.siteList=e.data}))},getList:function(){var t=this,e=Object.assign(this.search,{is_history:1,page:this.page,pagesize:this.pagesize});Object(i["c"])(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count})),1===this.page&&Object(i["d"])(e).then((function(e){t.tongji=e.data}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},switchTab:function(){this.dataList=[],this.dataTotal=0,this.doSearch()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),n=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=n),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e},showMsgDialog:function(t){this.dialogMessage=t},closeMsgDialog:function(){this.dialogMessage=""},doDel:function(t){var e=this;this.$confirm("确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])({id:t,is_history:1}).then((function(t){e.getList(),e.$message.success(t.message)}))}))}}},l=r,c=(a("4ba4"),a("1805")),d=Object(c["a"])(l,n,s,!1,null,"5095a210",null);e["default"]=d.exports},"0e2f":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"e",(function(){return l}));var n=a("b775");function s(t){return Object(n["a"])({url:"/msg/getMsgList",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/msg/getMsgTongji",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/msg/delMsg",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/msg/getMoveCount",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/msg/moveData",method:"post",data:t})}},"4ba4":function(t,e,a){"use strict";a("8cc1")},"571f":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"g",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return d}));var n=a("b775");function s(t){return Object(n["a"])({url:"/site/getList",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/site/getInfo",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/site/saveInfo",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/site/del",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/site/setStatus",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/site/getLoginToken",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/site/getSelectSiteList",method:"post",data:t})}},"72a3":function(t,e,a){"use strict";var n=a("fd6f"),s=a("f99f"),i=a("62ee"),o=a("5d64"),r=a("df01").get,l=RegExp.prototype,c=TypeError;n&&s&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===i(this))return!!r(this).dotAll;throw new c("Incompatible receiver, RegExp required")}}})},"8cc1":function(t,e,a){},b208:function(t,e,a){"use strict";var n=a("fd6f"),s=a("0cb5").MISSED_STICKY,i=a("62ee"),o=a("5d64"),r=a("df01").get,l=RegExp.prototype,c=TypeError;n&&s&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===i(this))return!!r(this).sticky;throw new c("Incompatible receiver, RegExp required")}}})},c0e3:function(t,e,a){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},cee4:function(t,e,a){"use strict";var n=a("c308"),s=a("d53d"),i=a("61eb"),o=a("bce3"),r=a("1d9f"),l=a("c0e3"),c=a("5206"),d=a("a8d7"),u=a("248e");s("search",(function(t,e,a){return[function(e){var a=r(this),s=o(e)?void 0:d(e,t);return s?n(s,e,a):new RegExp(e)[t](c(a))},function(t){var n=i(this),s=c(t),o=a(e,n,s);if(o.done)return o.value;var r=n.lastIndex;l(r,0)||(n.lastIndex=0);var d=u(n,s);return l(n.lastIndex,r)||(n.lastIndex=r),null===d?-1:d.index}]}))},d84b:function(t,e,a){"use strict";var n=a("fd6f"),s=a("08f9"),i=a("674f"),o=a("9de7"),r=a("c4c2"),l=a("957e"),c=a("00ab").f,d=a("08dc"),u=a("5cdc"),g=a("5206"),p=a("d42b"),f=a("0cb5"),h=a("7d0a"),b=a("ec4a"),_=a("ce8f"),y=a("dc33"),m=a("df01").enforce,v=a("070c"),x=a("b12d"),w=a("f99f"),k=a("4406"),S=x("match"),M=s.RegExp,T=M.prototype,D=s.SyntaxError,C=i(T.exec),j=i("".charAt),E=i("".replace),I=i("".indexOf),O=i("".slice),z=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,R=/a/g,$=new M(L)!==L,A=f.MISSED_STICKY,F=f.UNSUPPORTED_Y,H=n&&(!$||A||w||k||_((function(){return R[S]=!1,M(L)!==L||M(R)===R||"/a/i"!==String(M(L,"i"))}))),P=function(t){for(var e,a=t.length,n=0,s="",i=!1;n<=a;n++)e=j(t,n),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),s+=e):s+="[\\s\\S]":s+=e+j(t,++n);return s},Y=function(t){for(var e,a=t.length,n=0,s="",i=[],o={},r=!1,l=!1,c=0,d="";n<=a;n++){if(e=j(t,n),"\\"===e)e+=j(t,++n);else if("]"===e)r=!1;else if(!r)switch(!0){case"["===e:r=!0;break;case"("===e:C(z,O(t,n+1))&&(n+=2,l=!0),s+=e,c++;continue;case">"===e&&l:if(""===d||y(o,d))throw new D("Invalid capture group name");o[d]=!0,i[i.length]=[d,c],l=!1,d="";continue}l?d+=e:s+=e}return[s,i]};if(o("RegExp",H)){for(var q=function(t,e){var a,n,s,i,o,c,f=d(T,this),h=u(t),b=void 0===e,_=[],y=t;if(!f&&h&&b&&t.constructor===q)return t;if((h||d(T,t))&&(t=t.source,b&&(e=p(y))),t=void 0===t?"":g(t),e=void 0===e?"":g(e),y=t,w&&"dotAll"in L&&(n=!!e&&I(e,"s")>-1,n&&(e=E(e,/s/g,""))),a=e,A&&"sticky"in L&&(s=!!e&&I(e,"y")>-1,s&&F&&(e=E(e,/y/g,""))),k&&(i=Y(t),t=i[0],_=i[1]),o=r(M(t,e),f?this:T,q),(n||s||_.length)&&(c=m(o),n&&(c.dotAll=!0,c.raw=q(P(t),a)),s&&(c.sticky=!0),_.length&&(c.groups=_)),t!==y)try{l(o,"source",""===y?"(?:)":y)}catch(v){}return o},B=c(M),J=0;B.length>J;)h(q,M,B[J++]);T.constructor=q,q.prototype=T,b(s,"RegExp",q,{constructor:!0})}v("RegExp")}}]);