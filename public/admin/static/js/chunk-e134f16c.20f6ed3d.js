(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e134f16c"],{"0868":function(t,e,a){},"09b9":function(t,e,a){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},"29ca":function(t,e,a){"use strict";var n=a("2b5f"),s=a("45b1"),i=a("064d"),l=a("6337"),o=a("3a4d"),r=a("09b9"),c=a("199e"),u=a("f55d"),d=a("85ec");s("search",(function(t,e,a){return[function(e){var a=o(this),s=l(e)?void 0:u(e,t);return s?n(s,e,a):new RegExp(e)[t](c(a))},function(t){var n=i(this),s=c(t),l=a(e,n,s);if(l.done)return l.value;var o=n.lastIndex;r(o,0)||(n.lastIndex=0);var u=d(n,s);return r(n.lastIndex,o)||(n.lastIndex=o),null===u?-1:u.index}]}))},3406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"toolbar",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",padding:"20px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.showForm(0)}}},[t._v(t._s(t._f("lang")("新增禁言用户")))]),a("div",[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"320px"},attrs:{placeholder:t._f("lang")("用户ID"),size:"small",clearable:""},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}},slot:"append"})],1)],1)],1),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"freeze_time",label:t._f("lang")("禁言时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"id",label:t._f("lang")("用户ID"),width:"80"}}),a("el-table-column",{attrs:{prop:"create_time",label:t._f("lang")("注册时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"nickname",label:t._f("lang")("头像昵称"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.avatar}}),t._v(" "+t._s(e.row.nickname)+" ")])]}}])}),a("el-table-column",{attrs:{label:t._f("lang")("共消费"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.order_total)+" "+t._s(t._f("lang")("元"))+" ")]}}])}),a("el-table-column",{attrs:{label:t._f("lang")("共提问"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.msg_count)+" "+t._s(t._f("lang")("条"))+" ")]}}])}),a("el-table-column",{attrs:{label:t._f("lang")("推荐人"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.tuser?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.tuser.avatar}}),t._v(" "+t._s(e.row.tuser.nickname)+" [ID: "+t._s(e.row.tuid)+"] ")]):t._e()]}}])}),a("el-table-column",{attrs:{label:t._f("lang")("操作")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",icon:"el-icon-recycle",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.doUnfreeze(e.row.id)}}},[t._v(t._s(t._f("lang")("解除禁言")))])]}}])})],1),a("div",{staticClass:"footer"},[a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)],1),t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:t._f("lang")("禁言用户"),width:"480px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t._f("lang")("用户ID"),prop:"num"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:t._f("lang")("填入用户ID（数字）"),size:"small"},model:{value:t.form.user_id,callback:function(e){t.$set(t.form,"user_id",e)},expression:"form.user_id"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v(t._s(t._f("lang")("取 消")))]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doFreeze}},[t._v(t._s(t._f("lang")("禁言他")))])],1)],1)],1):t._e()])},s=[],i=(a("cac0"),a("29ca"),a("c24f")),l={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:15,dateType:"",search:{user_id:""},form:null}},created:function(){this.doInit()},methods:{doInit:function(){this.search={user_id:""},this.doSearch()},getList:function(){var t=this,e=Object.assign(this.search,{is_freeze:1,page:this.page,pagesize:this.pagesize});Object(i["i"])(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},showForm:function(){this.form={}},closeForm:function(){this.form=null},doFreeze:function(){var t=this;Object(i["c"])(this.form).then((function(e){t.getList(),t.$message.success(e.message),t.closeForm()}))},doUnfreeze:function(t){var e=this;this.$confirm("确定解除他的禁言吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["e"])({user_id:t}).then((function(t){e.getList(),e.$message.success(t.message),e.closeForm()}))}))}}},o=l,r=(a("9864"),a("76b2")),c=Object(r["a"])(o,n,s,!1,null,"b2954586",null);e["default"]=c.exports},9864:function(t,e,a){"use strict";a("0868")}}]);