(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3de58a64"],{"191c":function(t,e,n){"use strict";n("d41e")},"1dd0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[n("el-form",{ref:"form",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:t._f("lang")("文章内容"),prop:"content"}},[n("keep-alive",[n("UEditor",{ref:"ue"})],1)],1),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v(t._s(t._f("lang")("保 存")))])],1)],1)],1)},i=[],o=(n("97ce"),n("2423")),c=n("8339"),u={components:{UEditor:c["a"]},data:function(){return{form:{content:""},formRules:{content:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},computed:{type:function(){return this.$route.meta.name}},watch:{type:function(){this.getArticle()}},mounted:function(){var t=this;setTimeout((function(){t.getArticle()}),500)},methods:{getArticle:function(){var t=this;Object(o["b"])({type:this.type}).then((function(e){e.data?t.$refs.ue.setUEContent(e.data.content):t.$refs.ue.setUEContent("")}))},doSubmit:function(){var t=this,e=this.$refs.ue.getUEContent();Object(o["e"])({type:this.type,content:e}).then((function(e){t.getArticle(),t.$message.success(e.message)}))}}},a=u,s=(n("191c"),n("1805")),d=Object(s["a"])(a,r,i,!1,null,"31f751e3",null);e["default"]=d.exports},2423:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return s}));var r=n("b775");function i(t){return Object(r["a"])({url:"/article/getHelpList",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/article/getHelpArticle",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/article/saveHelpArticle",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/article/delHelpArticle",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/article/getArticle",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/article/saveArticle",method:"post",data:t})}},8339:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("script",{staticStyle:{width:"100%","min-width":"500px","max-width":"800px"},style:"height:"+t.height+"px;",attrs:{id:"editor",type:"text/plain"}})])},i=[],o=(n("c6d2"),{name:"Ue",props:{height:{type:Number,default:400},value:{type:String,default:""}},data:function(){return{config:{serverUrl:"/admin.php/upload/ueditor"},editor:null}},mounted:function(){var t=this;window.UE.delEditor("editor"),this.editor=window.UE.getEditor("editor",this.config),this.editor.addListener("ready",(function(){t.editor.setContent(t.value)}))},methods:{setUEContent:function(t){this.editor.setContent(t)},getUEContent:function(){return this.editor.getContent()},destroyed:function(){this.editor.destroy()}}}),c=o,u=n("1805"),a=Object(u["a"])(c,r,i,!1,null,null,null);e["a"]=a.exports},d41e:function(t,e,n){}}]);