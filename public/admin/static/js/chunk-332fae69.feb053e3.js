(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-332fae69"],{"08ff":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"box-panel",staticStyle:{"padding-top":"10px","padding-bottom":"0"}},[a("el-tabs",{staticClass:"search-tabs",on:{"tab-click":t.switchTab},model:{value:t.search.type,callback:function(e){t.$set(t.search,"type",e)},expression:"search.type"}},[a("el-tab-pane",{attrs:{label:"自由对话",name:"chat"}}),a("el-tab-pane",{attrs:{label:"文本创作",name:"write"}}),a("el-tab-pane",{attrs:{label:"角色模拟",name:"cosplay"}}),a("el-tab-pane",{attrs:{label:"AI擂台",name:"pk"}})],1),a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("提问时间"))+"：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":t._f("lang")("至"),"start-placeholder":t._f("lang")("时间开始"),"end-placeholder":t._f("lang")("时间结束"),size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v(t._s(t._f("lang")("今天")))]),a("el-radio-button",{attrs:{label:"day1"}},[t._v(t._s(t._f("lang")("昨天")))]),a("el-radio-button",{attrs:{label:"day2"}},[t._v(t._s(t._f("lang")("前天")))])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("用户ID"))+"：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:t._f("lang")("请输入用户id")},model:{value:t.search.user_id,callback:function(e){t.$set(t.search,"user_id",e)},expression:"search.user_id"}}),a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("关键词"))+"：")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:t._f("lang")("请输入关键词")},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v(t._s(t._f("lang")("筛选")))]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v(t._s(t._f("lang")("重置")))])],1)])],1),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","padding-top":"0","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{prop:"create_time",label:t._f("lang")("时间"),width:"170"}}),a("el-table-column",{attrs:{prop:"user_id",label:t._f("lang")("用户ID"),width:"80"}}),"write"===t.search.type||"cosplay"===t.search.type?a("el-table-column",{attrs:{label:t._f("lang")("使用模型"),width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.topic_title?a("span",[t._v(" 【"+t._s(e.row.topic_title)+"】"+t._s(e.row.prompt_title)+" ")]):t._e()]}}],null,!1,3922376494)}):t._e(),a("el-table-column",{attrs:{label:t._f("lang")("用户输入"),"min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(e.row.message)}}),e.row.message_input?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.message_input)}}},[t._v(t._s(t._f("lang")("查看原文")))]):t._e()]}}])}),"pk"===t.search.type?a("el-table-column",{attrs:{label:t._f("lang")("左侧AI回复"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.response_a)}}},[t._v(t._s(e.row.channel_a))])]}}],null,!1,755032364)}):t._e(),"pk"===t.search.type?a("el-table-column",{attrs:{label:t._f("lang")("右侧AI回复"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.response_b)}}},[t._v(t._s(e.row.channel_b))])]}}],null,!1,4116438540)}):t._e(),"pk"!==t.search.type?a("el-table-column",{attrs:{label:t._f("lang")("AI回复"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"large"},on:{click:function(a){return t.showMsgDialog(e.row.response)}}},[t._v(t._s(e.row.channel))])]}}],null,!1,4112849486)}):t._e(),a("el-table-column",{attrs:{prop:"total_tokens",label:t._f("lang")("消耗tokens"),width:"100"}}),a("el-table-column",{attrs:{prop:"user_ip",label:t._f("lang")("用户IP"),width:"130"}})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),t._v(" "+t._s(t._f("lang")("共"))+" "),a("span",{staticClass:"text-green"},[t._v(" "+t._s(t.tongji.msgCount)+" ")]),t._v(" "+t._s(t._f("lang")("条问题"))+"， "),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.tongji.msgTokens)+" ")]),t._v(" tokens ")]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1),t.dialogMessage?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog full-dialog",title:t._f("lang")("查看原文"),width:"800px",visible:!0,"close-on-click-modal":!0,"before-close":t.closeMsgDialog}},[a("div",{staticStyle:{padding:"0","font-size":"16px","line-height":"24px",color:"#333"}},[a("span",{domProps:{innerHTML:t._s(t.dialogMessage)}})]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeMsgDialog}},[t._v(t._s(t._f("lang")("关 闭")))])],1)])],1):t._e()],1)])},n=[],i=(a("cac0"),a("29ca"),a("f7c6"),a("0f4e"),a("f4f1"),a("f208"),a("fb0e"),a("30f8"),a("0e2f")),l={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:20,dateType:"",search:{type:"chat",date:[],user_id:"",keyword:""},tongji:{msgCount:0,msgTokens:0},dialogMessage:""}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={type:"chat",date:[],user_id:"",keyword:""},this.doSearch()},getList:function(){var t=this,e=Object.assign(this.search,{is_history:1,page:this.page,pagesize:this.pagesize});Object(i["b"])(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count})),1===this.page&&Object(i["c"])(e).then((function(e){t.tongji=e.data}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},switchTab:function(){this.dataList=[],this.dataTotal=0,this.doSearch()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),s=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=s),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return e},showMsgDialog:function(t){this.dialogMessage=t},closeMsgDialog:function(){this.dialogMessage=""},doDel:function(t){var e=this;this.$confirm("确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])({type:e.search.type,id:t,is_history:1}).then((function(t){e.getList(),e.$message.success(t.message)}))}))}}},o=l,r=(a("c326"),a("76b2")),c=Object(r["a"])(o,s,n,!1,null,"05d0c70b",null);e["default"]=c.exports},"09b9":function(t,e,a){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},"0e2f":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return l}));var s=a("b775");function n(t){return Object(s["a"])({url:"/msg/getMsgList",method:"post",data:t})}function i(t){return Object(s["a"])({url:"/msg/getMsgTongji",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/msg/delMsg",method:"post",data:t})}},"29ca":function(t,e,a){"use strict";var s=a("2b5f"),n=a("45b1"),i=a("064d"),l=a("6337"),o=a("3a4d"),r=a("09b9"),c=a("199e"),d=a("f55d"),p=a("85ec");n("search",(function(t,e,a){return[function(e){var a=o(this),n=l(e)?void 0:d(e,t);return n?s(n,e,a):new RegExp(e)[t](c(a))},function(t){var s=i(this),n=c(t),l=a(e,s,n);if(l.done)return l.value;var o=s.lastIndex;r(o,0)||(s.lastIndex=0);var d=p(s,n);return r(s.lastIndex,o)||(s.lastIndex=o),null===d?-1:d.index}]}))},c326:function(t,e,a){"use strict";a("f6c5")},f208:function(t,e,a){"use strict";var s=a("bbaf"),n=a("add4"),i=a("e0ec"),l=a("218c"),o=a("0257").get,r=RegExp.prototype,c=TypeError;s&&n&&l(r,"dotAll",{configurable:!0,get:function(){if(this!==r){if("RegExp"===i(this))return!!o(this).dotAll;throw new c("Incompatible receiver, RegExp required")}}})},f4f1:function(t,e,a){"use strict";var s=a("bbaf"),n=a("e817"),i=a("9372"),l=a("e253"),o=a("8a85"),r=a("e488"),c=a("1490").f,d=a("3a6e"),p=a("4b9a"),u=a("199e"),g=a("7454"),f=a("8421"),h=a("6abb"),b=a("696a"),_=a("6368"),y=a("c668"),m=a("0257").enforce,w=a("71ff"),v=a("ee0d"),x=a("add4"),k=a("fafb"),M=v("match"),S=n.RegExp,T=S.prototype,D=n.SyntaxError,C=i(T.exec),E=i("".charAt),I=i("".replace),z=i("".indexOf),R=i("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,O=/a/g,$=new S(L)!==L,A=f.MISSED_STICKY,F=f.UNSUPPORTED_Y,H=s&&(!$||A||x||k||_((function(){return O[M]=!1,S(L)!==L||S(O)===O||"/a/i"!==String(S(L,"i"))}))),P=function(t){for(var e,a=t.length,s=0,n="",i=!1;s<=a;s++)e=E(t,s),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),n+=e):n+="[\\s\\S]":n+=e+E(t,++s);return n},Y=function(t){for(var e,a=t.length,s=0,n="",i=[],l={},o=!1,r=!1,c=0,d="";s<=a;s++){if(e=E(t,s),"\\"===e)e+=E(t,++s);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:C(j,R(t,s+1))&&(s+=2,r=!0),n+=e,c++;continue;case">"===e&&r:if(""===d||y(l,d))throw new D("Invalid capture group name");l[d]=!0,i[i.length]=[d,c],r=!1,d="";continue}r?d+=e:n+=e}return[n,i]};if(l("RegExp",H)){for(var q=function(t,e){var a,s,n,i,l,c,f=d(T,this),h=p(t),b=void 0===e,_=[],y=t;if(!f&&h&&b&&t.constructor===q)return t;if((h||d(T,t))&&(t=t.source,b&&(e=g(y))),t=void 0===t?"":u(t),e=void 0===e?"":u(e),y=t,x&&"dotAll"in L&&(s=!!e&&z(e,"s")>-1,s&&(e=I(e,/s/g,""))),a=e,A&&"sticky"in L&&(n=!!e&&z(e,"y")>-1,n&&F&&(e=I(e,/y/g,""))),k&&(i=Y(t),t=i[0],_=i[1]),l=o(S(t,e),f?this:T,q),(s||n||_.length)&&(c=m(l),s&&(c.dotAll=!0,c.raw=q(P(t),a)),n&&(c.sticky=!0),_.length&&(c.groups=_)),t!==y)try{r(l,"source",""===y?"(?:)":y)}catch(w){}return l},B=c(S),J=0;B.length>J;)h(q,S,B[J++]);T.constructor=q,q.prototype=T,b(n,"RegExp",q,{constructor:!0})}w("RegExp")},f6c5:function(t,e,a){},fb0e:function(t,e,a){"use strict";var s=a("bbaf"),n=a("8421").MISSED_STICKY,i=a("e0ec"),l=a("218c"),o=a("0257").get,r=RegExp.prototype,c=TypeError;s&&n&&l(r,"sticky",{configurable:!0,get:function(){if(this!==r){if("RegExp"===i(this))return!!o(this).sticky;throw new c("Incompatible receiver, RegExp required")}}})}}]);