(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-781dd7fa"],{"09b9":function(t,e,a){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},"29ca":function(t,e,a){"use strict";var s=a("2b5f"),i=a("45b1"),n=a("064d"),l=a("6337"),o=a("3a4d"),r=a("09b9"),c=a("199e"),d=a("f55d"),u=a("85ec");i("search",(function(t,e,a){return[function(e){var a=o(this),i=l(e)?void 0:d(e,t);return i?s(i,e,a):new RegExp(e)[t](c(a))},function(t){var s=n(this),i=c(t),l=a(e,s,i);if(l.done)return l.value;var o=s.lastIndex;r(o,0)||(s.lastIndex=0);var d=u(s,i);return r(s.lastIndex,o)||(s.lastIndex=o),null===d?-1:d.index}]}))},"2c834":function(t,e,a){},"4e57":function(t,e,a){},5783:function(t,e,a){"use strict";a("4e57")},c3ce:function(t,e,a){"use strict";a("2c834")},f208:function(t,e,a){"use strict";var s=a("bbaf"),i=a("add4"),n=a("e0ec"),l=a("218c"),o=a("0257").get,r=RegExp.prototype,c=TypeError;s&&i&&l(r,"dotAll",{configurable:!0,get:function(){if(this!==r){if("RegExp"===n(this))return!!o(this).dotAll;throw new c("Incompatible receiver, RegExp required")}}})},f4f1:function(t,e,a){"use strict";var s=a("bbaf"),i=a("e817"),n=a("9372"),l=a("e253"),o=a("8a85"),r=a("e488"),c=a("1490").f,d=a("3a6e"),u=a("4b9a"),p=a("199e"),h=a("7454"),f=a("8421"),g=a("6abb"),b=a("696a"),y=a("6368"),v=a("c668"),m=a("0257").enforce,w=a("71ff"),_=a("ee0d"),x=a("add4"),k=a("fafb"),T=_("match"),S=i.RegExp,L=S.prototype,E=i.SyntaxError,z=n(L.exec),I=n("".charAt),C=n("".replace),R=n("".indexOf),D=n("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,B=/a/g,$=/a/g,O=new S(B)!==B,A=f.MISSED_STICKY,j=f.UNSUPPORTED_Y,F=s&&(!O||A||x||k||y((function(){return $[T]=!1,S(B)!==B||S($)===$||"/a/i"!==String(S(B,"i"))}))),H=function(t){for(var e,a=t.length,s=0,i="",n=!1;s<=a;s++)e=I(t,s),"\\"!==e?n||"."!==e?("["===e?n=!0:"]"===e&&(n=!1),i+=e):i+="[\\s\\S]":i+=e+I(t,++s);return i},Y=function(t){for(var e,a=t.length,s=0,i="",n=[],l={},o=!1,r=!1,c=0,d="";s<=a;s++){if(e=I(t,s),"\\"===e)e+=I(t,++s);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:z(M,D(t,s+1))&&(s+=2,r=!0),i+=e,c++;continue;case">"===e&&r:if(""===d||v(l,d))throw new E("Invalid capture group name");l[d]=!0,n[n.length]=[d,c],r=!1,d="";continue}r?d+=e:i+=e}return[i,n]};if(l("RegExp",F)){for(var q=function(t,e){var a,s,i,n,l,c,f=d(L,this),g=u(t),b=void 0===e,y=[],v=t;if(!f&&g&&b&&t.constructor===q)return t;if((g||d(L,t))&&(t=t.source,b&&(e=h(v))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),v=t,x&&"dotAll"in B&&(s=!!e&&R(e,"s")>-1,s&&(e=C(e,/s/g,""))),a=e,A&&"sticky"in B&&(i=!!e&&R(e,"y")>-1,i&&j&&(e=C(e,/y/g,""))),k&&(n=Y(t),t=n[0],y=n[1]),l=o(S(t,e),f?this:L,q),(s||i||y.length)&&(c=m(l),s&&(c.dotAll=!0,c.raw=q(H(t),a)),i&&(c.sticky=!0),y.length&&(c.groups=y)),t!==v)try{r(l,"source",""===v?"(?:)":v)}catch(w){}return l},P=c(S),J=0;P.length>J;)g(q,S,P[J++]);L.constructor=q,q.prototype=L,b(i,"RegExp",q,{constructor:!0})}w("RegExp")},f5d7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("时间"))+"：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":t._f("lang")("至"),"start-placeholder":t._f("lang")("时间开始"),"end-placeholder":t._f("lang")("时间结束"),size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v(t._s(t._f("lang")("今天")))]),a("el-radio-button",{attrs:{label:"day1"}},[t._v(t._s(t._f("lang")("昨天")))]),a("el-radio-button",{attrs:{label:"day2"}},[t._v(t._s(t._f("lang")("前天")))])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("用户ID"))+"：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:t._f("lang")("请输入用户id")},model:{value:t.search.user_id,callback:function(e){t.$set(t.search,"user_id",e)},expression:"search.user_id"}}),a("span",{staticClass:"label"},[t._v(t._s(t._f("lang")("关键词"))+"：")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:t._f("lang")("请输入关键词")},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v(t._s(t._f("lang")("筛选")))]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v(t._s(t._f("lang")("重置")))])],1)]),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.batchList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"任务组ID",width:"80"}}),a("el-table-column",{attrs:{prop:"create_time",label:t._f("lang")("创建时间"),width:"170"}}),a("el-table-column",{attrs:{prop:"user_id",label:t._f("lang")("用户ID"),width:"80"}}),a("el-table-column",{attrs:{prop:"prompt",label:t._f("lang")("任务前置指令")}}),a("el-table-column",{attrs:{prop:"ai",label:t._f("lang")("AI通道"),width:"110"}}),a("el-table-column",{attrs:{label:t._f("lang")("查看任务"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"large"},on:{click:function(a){return t.showTaskList(e.row.batch_id)}}},[t._v(" "+t._s(e.row.count_finished)+" / "+t._s(e.row.count_total)+" ")])]}}])})],1),a("div",{staticClass:"footer"},[a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.batchTotal},on:{"current-change":t.pageChange}})],1),t.taskListShow?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog full-dialog",title:t._f("lang")("任务列表"),width:"1400px",visible:!0,"close-on-click-modal":!0,"before-close":t.closeTaskList}},[a("div",{staticStyle:{width:"100%",height:"100%",position:"relative",overflow:"hidden"}},[a("div",{staticStyle:{width:"567px",position:"absolute",left:"0",top:"0",bottom:"0","overflow-x":"hidden","overflow-y":"scroll"}},[a("el-table",{ref:"taskTable",staticStyle:{width:"550px"},attrs:{data:t.taskList,size:"medium","header-cell-class-name":"bg-gray","highlight-current-row":"","row-class-name":"row-class"},on:{"row-click":t.showBatchTaskResponse}},[a("el-table-column",{attrs:{type:"index",label:t._f("lang")("序号"),index:t.tableIndex,width:"50"}}),a("el-table-column",{attrs:{prop:"message",label:t._f("lang")("任务标题"),width:"400"}}),a("el-table-column",{attrs:{prop:"state",label:t._f("lang")("状态"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"td state"},[1===e.row.state?a("el-tag",{attrs:{type:"success",size:"small"}},[t._v("已完成")]):a("el-tag",{attrs:{type:"info",size:"small"}},[t._v("未开始")])],1)]}}],null,!1,3649560469)})],1)],1),a("div",{staticClass:"bg-gray",staticStyle:{position:"absolute",left:"567px",top:"0",bottom:"0",right:"0",padding:"30px","box-sizing":"border-box","border-top-right-radius":"10px","border-bottom-right-radius":"10px","overflow-x":"hidden","overflow-y":"scroll"}},[a("div",{staticStyle:{"font-size":"16px","line-height":"24px",color:"#333"}},[t.activeTask&&t.activeTask.response?a("span",{domProps:{innerHTML:t._s(t.activeTask.response)}}):a("p",{staticStyle:{color:"#999","text-align":"center"}},[t._v("无内容")])])])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeTaskList}},[t._v(t._s(t._f("lang")("关 闭")))])],1)])],1):t._e()],1)])},i=[],n=(a("cac0"),a("29ca"),a("f7c6"),a("0f4e"),a("f4f1"),a("f208"),a("fb0e"),a("30f8"),a("a7fa"),a("b775"));function l(t){return Object(n["a"])({url:"/batch/getBatchList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/batch/getTaskList",method:"post",data:t})}var r={data:function(){return{batchList:[],batchTotal:0,page:1,pagesize:20,dateType:"",search:{date:[],user_id:"",keyword:""},taskListShow:!1,taskList:null,activeTask:null}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={date:[],user_id:"",keyword:""},this.doSearch()},getBatchList:function(){var t=this,e=Object.assign(this.search,{page:this.page,pagesize:this.pagesize});l(e).then((function(e){t.batchList=e.data.list,t.batchTotal=e.data.count}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getBatchList()},doSearch:function(){this.page=1,this.getBatchList()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),s=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=s),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return e},showTaskList:function(t){var e=this;o({id:t}).then((function(t){e.taskListShow=!0,e.taskList=t.data.list,e.taskList.length>0&&(e.activeTask=e.taskList[0])}))},closeTaskList:function(){this.taskListShow=!1,this.taskList=null,this.activeTask=null},showBatchTaskResponse:function(t){this.activeTask=t},delBatch:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=this;this.$confirm("确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){delBatch({id:t}).then((function(t){e.getBatchList(),e.$message.success(t.message)}))}))}))}},c=r,d=(a("5783"),a("c3ce"),a("76b2")),u=Object(d["a"])(c,s,i,!1,null,"0a55a98b",null);e["default"]=u.exports},fb0e:function(t,e,a){"use strict";var s=a("bbaf"),i=a("8421").MISSED_STICKY,n=a("e0ec"),l=a("218c"),o=a("0257").get,r=RegExp.prototype,c=TypeError;s&&i&&l(r,"sticky",{configurable:!0,get:function(){if(this!==r){if("RegExp"===n(this))return!!o(this).sticky;throw new c("Incompatible receiver, RegExp required")}}})}}]);