(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5096d8a"],{"1a6a":function(t,e,n){},"3e51":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[n("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[n("el-tab-pane",{attrs:{label:t._f("lang")("登录设置"),name:"login"}},[t.form?n("el-form",{ref:"form",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"140px"}},[n("el-form-item",{attrs:{label:t._f("lang")("微信登录"),prop:"login_wechat"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["login_wechat"],callback:function(e){t.$set(t.form,"login_wechat",e)},expression:"form['login_wechat']"}}),n("p",[t._v(t._s(t._f("lang")("需配置公众号参数")))])],1),n("el-form-item",{attrs:{label:t._f("lang")("手机账号登录"),prop:"login_phone"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["login_phone"],callback:function(e){t.$set(t.form,"login_phone",e)},expression:"form['login_phone']"}}),n("p",[t._v(t._s(t._f("lang")("需配置短信参数")))])],1),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v(t._s(t._f("lang")("保 存")))])],1)],1):t._e()],1)],1)],1)},i=[],o=(n("f17d"),n("90e7")),r={data:function(){return{tabName:"login",form:null,formRules:{}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(o["c"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting()},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(e){if(!t.form.login_wechat&&!t.form.login_phone)return void t.$message.error(t.$lang("至少启用一种登录方式"));Object(o["e"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message.success(e.message)}))}else t.$message.error(t.$lang("请填写必填项"))}))}}},l=r,c=(n("9862"),n("76b2")),s=Object(c["a"])(l,a,i,!1,null,"15ff205b",null);e["default"]=s.exports},"90e7":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return c}));var a=n("b775");function i(t){return Object(a["a"])({url:"/setting/getSetting",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/setting/setSetting",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/setting/getBalance",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/setting/getLxaiBalance",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/setting/getSkinList",method:"post",data:t})}},9862:function(t,e,n){"use strict";n("1a6a")}}]);