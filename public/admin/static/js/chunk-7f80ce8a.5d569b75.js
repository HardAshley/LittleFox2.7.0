(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f80ce8a"],{8339:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("script",{staticStyle:{width:"100%","min-width":"500px","max-width":"800px"},style:"height:"+t.height+"px;",attrs:{id:"editor",type:"text/plain"}})])},i=[],n=(a("c6d2"),{name:"Ue",props:{height:{type:Number,default:400},value:{type:String,default:""}},data:function(){return{config:{serverUrl:"/admin.php/upload/ueditor"},editor:null}},mounted:function(){var t=this;window.UE.delEditor("editor"),this.editor=window.UE.getEditor("editor",this.config),this.editor.addListener("ready",(function(){t.editor.setContent(t.value)}))},methods:{setUEContent:function(t){this.editor.setContent(t)},getUEContent:function(){return this.editor.getContent()},destroyed:function(){this.editor.destroy()}}}),r=n,o=a("1805"),s=Object(o["a"])(r,l,i,!1,null,null,null);e["a"]=s.exports},acb2:function(t,e,a){},c0e5:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.showEdit(0)}}},[t._v(t._s(t._f("lang")("添加公告")))])],1),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","row-key":"id","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"create_time",label:t._f("lang")("添加时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"type",label:t._f("lang")("类型"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["alert"===e.row.type?a("span",[t._v(t._s(t._f("lang")("顶部滚动条")))]):t._e(),"dialog"===e.row.type?a("span",[t._v(t._s(t._f("lang")("弹窗")))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"platform",label:t._f("lang")("应用范围"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["all"===e.row.platform?a("span",[t._v(t._s(t._f("lang")("全部")))]):t._e(),"pc"===e.row.platform?a("span",[t._v(t._s(t._f("lang")("PC端")))]):t._e(),"h5"===e.row.platform?a("span",[t._v(t._s(t._f("lang")("手机端")))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"start_time",label:t._f("lang")("开始时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"end_time",label:t._f("lang")("结束时间"),width:"160"}}),a("el-table-column",{attrs:{prop:"status",label:t._f("lang")("状态"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["wait"===e.row.status?a("el-button",{attrs:{type:"primary",size:"mini",plain:"",disabled:""}},[t._v(t._s(t._f("lang")("未开始")))]):t._e(),"active"===e.row.status?a("el-button",{attrs:{type:"success",size:"mini",plain:"",disabled:""}},[t._v(t._s(t._f("lang")("生效中")))]):t._e(),"expired"===e.row.status?a("el-button",{attrs:{type:"danger",size:"mini",plain:"",disabled:""}},[t._v(t._s(t._f("lang")("已过期")))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"views",label:t._f("lang")("展现量"),width:"100"}}),a("el-table-column",{attrs:{prop:"remark",label:t._f("lang")("备注")}}),a("el-table-column",{attrs:{label:t._f("lang")("操作"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showEdit(e.row.id)}}},[t._v(t._s(t._f("lang")("编辑")))]),a("el-button",{attrs:{type:"danger",icon:"el-icon-recycle",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.doDel(e.row.id)}}},[t._v(t._s(t._f("lang")("删除")))])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.article?a("edit",{attrs:{article:t.article},on:{close:t.closeEdit,submit:t.saveArticle}}):t._e()],1)},i=[],n=a("b775");function r(t){return Object(n["a"])({url:"/notice/getList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/notice/getArticle",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/notice/saveArticle",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/notice/delArticle",method:"post",data:t})}var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog notice-dialog",title:t._f("lang")(t.article.id?"编辑":"新建"),width:"820px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:t._f("lang")("应用范围"),prop:"platform"}},[a("el-radio-group",{model:{value:t.form.platform,callback:function(e){t.$set(t.form,"platform",e)},expression:"form.platform"}},[a("el-radio",{attrs:{label:"all"}},[t._v(t._s(t._f("lang")("全部")))]),a("el-radio",{attrs:{label:"pc"}},[t._v(t._s(t._f("lang")("PC端")))]),a("el-radio",{attrs:{label:"h5"}},[t._v(t._s(t._f("lang")("手机端")))])],1)],1),a("el-form-item",{attrs:{label:t._f("lang")("类型"),prop:"type"}},[a("el-radio-group",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("el-radio",{attrs:{label:"dialog"}},[t._v(t._s(t._f("lang")("弹窗")))])],1)],1),a("el-form-item",{style:"display: "+("dialog"===t.form.type?"block":"none")+";",attrs:{label:t._f("lang")("公告内容")}},[a("div",{staticStyle:{width:"600px"}},[a("keep-alive",[a("UEditor",{key:"ue"+t.form.id,ref:"ue",attrs:{value:t.form.content,height:"200"}})],1)],1)]),"alert"===t.form.type?a("el-form-item",{attrs:{label:t._f("lang")("公告内容"),prop:"content"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:"5",placeholder:"",size:"small"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1):t._e(),a("el-form-item",{attrs:{label:t._f("lang")("生效时间"),prop:"date"}},[a("el-date-picker",{staticStyle:{width:"400px"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":t._f("lang")("至"),"start-placeholder":t._f("lang")("时间开始"),"end-placeholder":t._f("lang")("时间结束"),size:"small"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("备注"),prop:"title"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:"2",placeholder:t._f("lang")("备注仅后台可见"),size:"small"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v(t._s(t._f("lang")("取 消")))]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v(t._s(t._f("lang")("提 交")))])],1)],1)],1):t._e()},f=[],u=(a("f065"),a("6506"),a("8339")),p={components:{UEditor:u["a"]},props:{article:{type:Object,default:null}},data:function(){return{form:null,formRules:{platform:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],date:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],type:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],content:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},created:function(){this.form=this.article,this.form.platform||this.$set(this.form,"platform","all"),this.form.type||this.$set(this.form,"type","dialog"),this.form.start_time&&this.form.end_time&&this.$set(this.form,"date",[this.form.start_time,this.form.end_time])},methods:{closeForm:function(){this.$emit("close")},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(e){var a=JSON.parse(JSON.stringify(t.form));"dialog"===a.type&&(a.content=t.$refs.ue.getUEContent()),a.start_time=a.date[0],a.end_time=a.date[1],t.$emit("submit",a)}else t.$message.error(t.$lang("请填写必填项"))}))}}},m=p,g=(a("d896"),a("1805")),_=Object(g["a"])(m,d,f,!1,null,"00dbeb87",null),h=_.exports,b={components:{edit:h},data:function(){return{dataList:[],pagesize:10,page:1,dataTotal:0,article:null}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;r({page:this.page}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},showEdit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e?o({id:e}).then((function(e){t.article=e.data})):this.article={}},closeEdit:function(){this.article=null},saveArticle:function(t){var e=this;s(t).then((function(t){e.getList(),e.$message.success(t.message),e.closeEdit()}))},doDel:function(t){var e=this;this.$confirm("删除后不可恢复，确认删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){c({id:t}).then((function(t){e.getList(),e.$message.success(t.message)}))}))}}},y=b,v=Object(g["a"])(y,l,i,!1,null,null,null);e["default"]=v.exports},d896:function(t,e,a){"use strict";a("acb2")}}]);