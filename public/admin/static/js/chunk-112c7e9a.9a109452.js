(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-112c7e9a"],{"09b9":function(t,e,a){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},"1e47":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return l}));var r=a("b775");function n(t){return Object(r["a"])({url:"/keys/getKeyList",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/keys/saveKey",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/keys/delKey",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/keys/setKeyState",method:"post",data:t})}},"29ca":function(t,e,a){"use strict";var r=a("2b5f"),n=a("45b1"),i=a("064d"),s=a("6337"),l=a("3a4d"),o=a("09b9"),c=a("199e"),u=a("f55d"),p=a("85ec");n("search",(function(t,e,a){return[function(e){var a=l(this),n=s(e)?void 0:u(e,t);return n?r(n,e,a):new RegExp(e)[t](c(a))},function(t){var r=i(this),n=c(t),s=a(e,r,n);if(s.done)return s.value;var l=r.lastIndex;o(l,0)||(r.lastIndex=0);var u=p(r,n);return o(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},ef3d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.clickCreate}},[t._v(t._s(t._f("lang")("添加Key")))]),a("div",{staticStyle:{float:"right"}},[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"240px"},attrs:{placeholder:t._f("lang")("GroupID / KEY / 备注"),size:"small",clearable:""},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}},slot:"append"})],1)],1)],1),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"create_time",label:t._f("lang")("添加时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"groupid",label:"GroupID",width:"260"}}),a("el-table-column",{attrs:{prop:"apikey",label:"API KEY",width:"260"}}),a("el-table-column",{attrs:{prop:"remark",label:t._f("lang")("备注"),width:"220"}}),a("el-table-column",{attrs:{prop:"state",label:t._f("lang")("状态"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.setKeyState(e.row.id,a)}},model:{value:e.row.state,callback:function(a){t.$set(e.row,"state",a)},expression:"scope.row.state"}})]}}])}),a("el-table-column",{attrs:{prop:"stop_reason",label:t._f("lang")("停用原因"),width:"220"}}),a("el-table-column",{attrs:{label:t._f("lang")("操作")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.clickDel(e.row.id)}}},[t._v(t._s(t._f("lang")("删除")))])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:t._f("lang")("添加Key"),visible:!0,width:"680px","close-on-click-modal":!1,"before-close":t.closeForm}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"GroupID",prop:"groupid"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:t._f("lang")("填入MiniMax的GroupID"),size:"small"},model:{value:t.form.groupid,callback:function(e){t.$set(t.form,"groupid",e)},expression:"form.groupid"}})],1),a("el-form-item",{attrs:{label:"API KEY",prop:"apikey"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:"12",placeholder:t._f("lang")("填入MiniMax的API KEY"),size:"small"},model:{value:t.form.apikey,callback:function(e){t.$set(t.form,"apikey",e)},expression:"form.apikey"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("备注"),prop:"remark"}},[a("el-input",{staticStyle:{width:"300px","max-width":"100%"},attrs:{type:"textarea",placeholder:t._f("lang")("自定义备注"),size:"small"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}}),a("p",{staticStyle:{"line-height":"26px",margin:"5px 0 0 0"}},[a("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/minimax",target:"_blank"}},[t._v(t._s(t._f("lang")("直达链接")))])])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v(t._s(t._f("lang")("取 消")))]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v(t._s(t._f("lang")("提 交")))])],1)],1)],1):t._e()],1)},n=[],i=(a("cac0"),a("29ca"),a("1e47")),s={data:function(){return{type:"minimax",form:null,search:{},dataList:[],dataTotal:0,page:1,pagesize:15,formRules:{groupid:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],apikey:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},created:function(){this.getKeyList()},methods:{getKeyList:function(){var t=this;Object(i["b"])({page:this.page,pagesize:this.pagesize,keyword:this.search.keyword,type:this.type}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getKeyList()},clickCreate:function(){this.form={}},closeForm:function(){this.form=null},doSubmit:function(t){var e=this;this.$refs.form.validate((function(t){t&&(e.form.type=e.type,e.form.key=e.form.groupid+"|"+e.form.apikey,Object(i["c"])(e.form).then((function(t){e.page=1,e.getKeyList(),e.$message.success(t.message),e.closeForm()})))}))},clickDel:function(t){var e=this;this.$confirm("删除后不可找回，确定删除吗？","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])({id:t}).then((function(t){t.errno?e.$message.error(t.message):(e.getKeyList(),e.$message.success(t.message))}))}))},setKeyState:function(t,e){var a=this;Object(i["d"])({id:t,state:e}).then((function(t){a.getKeyList(),a.$message.success(t.message)}))},doSearch:function(){this.page=1,this.getKeyList()}}},l=s,o=a("76b2"),c=Object(o["a"])(l,r,n,!1,null,null,null);e["default"]=c.exports}}]);