(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c440cde"],{"09b9":function(e,t,a){"use strict";e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}},"1e47":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return o}));var n=a("b775");function s(e){return Object(n["a"])({url:"/keys/getKeyList",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/keys/saveKey",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/keys/delKey",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/keys/setKeyState",method:"post",data:e})}},"1fb6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.clickCreate}},[e._v(e._s(e._f("lang")("添加Key")))]),a("div",{staticStyle:{float:"right"}},[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"240px"},attrs:{placeholder:e._f("lang")("key / 备注"),size:"small",clearable:""},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.doSearch()}},slot:"append"})],1)],1)],1),a("el-table",{attrs:{data:e.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"create_time",label:e._f("lang")("添加时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"key",label:"GPT-3.5 Key",width:"260"}}),a("el-table-column",{attrs:{prop:"remark",label:e._f("lang")("备注"),width:"220"}}),a("el-table-column",{attrs:{prop:"state",label:e._f("lang")("状态"),width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.setKeyState(t.row.id,a)}},model:{value:t.row.state,callback:function(a){e.$set(t.row,"state",a)},expression:"scope.row.state"}})]}}])}),a("el-table-column",{attrs:{prop:"stop_reason",label:e._f("lang")("停用原因"),width:"220"}}),a("el-table-column",{attrs:{label:e._f("lang")("操作")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button-group",[a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),e.clickDel(t.row.id)}}},[e._v(e._s(e._f("lang")("删除")))])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.page,"page-size":e.pagesize,layout:"total, prev, pager, next",total:e.dataTotal},on:{"current-change":e.pageChange}}),e.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:e._f("lang")("添加Key"),visible:!0,width:"500px","close-on-click-modal":!1,"before-close":e.closeForm}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"key",prop:"key"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:e._f("lang")("填入自定义接口的key"),size:"small"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),a("el-form-item",{attrs:{label:e._f("lang")("备注"),prop:"remark"}},[a("el-input",{staticStyle:{width:"300px","max-width":"100%"},attrs:{type:"textarea",placeholder:e._f("lang")("自定义备注"),size:"small"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:e.closeForm}},[e._v(e._s(e._f("lang")("取 消")))]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v(e._s(e._f("lang")("提 交")))])],1)],1)],1):e._e()],1)},s=[],r=(a("cac0"),a("29ca"),a("1e47")),l={data:function(){return{type:"openai3",form:null,search:{},dataList:[],dataTotal:0,page:1,pagesize:15,formRules:{key:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},created:function(){this.getKeyList()},methods:{getKeyList:function(){var e=this;Object(r["b"])({page:this.page,pagesize:this.pagesize,keyword:this.search.keyword,type:this.type}).then((function(t){e.dataList=t.data.list,e.dataTotal=t.data.count}))},pageChange:function(e){this.page=e,this.getKeyList()},clickCreate:function(){this.form={}},closeForm:function(){this.form=null},doSubmit:function(e){var t=this;this.$refs.form.validate((function(e){e&&(t.form.type=t.type,Object(r["c"])(t.form).then((function(e){t.page=1,t.getKeyList(),t.$message.success(e.message),t.closeForm()})))}))},clickDel:function(e){var t=this;this.$confirm("删除后不可找回，确定删除吗？","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["a"])({id:e}).then((function(e){e.errno?t.$message.error(e.message):(t.getKeyList(),t.$message.success(e.message))}))}))},setKeyState:function(e,t){var a=this;Object(r["d"])({id:e,state:t}).then((function(e){a.getKeyList(),a.$message.success(e.message)}))},doSearch:function(){this.page=1,this.getKeyList()}}},o=l,i=(a("a992"),a("76b2")),c=Object(i["a"])(o,n,s,!1,null,"78db13ac",null);t["default"]=c.exports},"29ca":function(e,t,a){"use strict";var n=a("2b5f"),s=a("45b1"),r=a("064d"),l=a("6337"),o=a("3a4d"),i=a("09b9"),c=a("199e"),u=a("f55d"),f=a("85ec");s("search",(function(e,t,a){return[function(t){var a=o(this),s=l(t)?void 0:u(t,e);return s?n(s,t,a):new RegExp(t)[e](c(a))},function(e){var n=r(this),s=c(e),l=a(t,n,s);if(l.done)return l.value;var o=n.lastIndex;i(o,0)||(n.lastIndex=0);var u=f(n,s);return i(n.lastIndex,o)||(n.lastIndex=o),null===u?-1:u.index}]}))},6577:function(e,t,a){},a992:function(e,t,a){"use strict";a("6577")}}]);