(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-329976bb"],{"90e7":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return l}));var a=n("b775");function i(t){return Object(a["a"])({url:"/setting/getSetting",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/setting/setSetting",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/setting/getBalance",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/setting/getLxaiBalance",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/setting/getSkinList",method:"post",data:t})}},"99a8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[n("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[n("el-tab-pane",{attrs:{label:t._f("lang")("流量主广告配置"),name:"ad"}},[n("el-form",{ref:"adForm",staticStyle:{width:"500px",padding:"30px 0"},attrs:{model:t.form,"label-width":"180px"}},[n("el-form-item",{attrs:{label:t._f("lang")("首页插屏广告"),prop:"inter_is_open"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["inter_is_open"],callback:function(e){t.$set(t.form,"inter_is_open",e)},expression:"form['inter_is_open']"}})],1),n("el-form-item",{attrs:{label:t._f("lang")("插屏广告位ID"),prop:"inter_unit_id"}},[n("el-input",{attrs:{size:"small"},model:{value:t.form["inter_unit_id"],callback:function(e){t.$set(t.form,"inter_unit_id",e)},expression:"form['inter_unit_id']"}}),n("p",{staticStyle:{color:"#666",margin:"0"}},[t._v(t._s(t._f("lang")("首页插屏广告的广告位ID，每隔6小时显示一次")))])],1),n("el-form-item",{attrs:{label:t._f("lang")("首页底部banner广告"),prop:"banner_is_open"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["banner_is_open"],callback:function(e){t.$set(t.form,"banner_is_open",e)},expression:"form['banner_is_open']"}})],1),n("el-form-item",{attrs:{label:t._f("lang")("banner广告位ID"),prop:"banner_unit_id"}},[n("el-input",{attrs:{size:"small"},model:{value:t.form["banner_unit_id"],callback:function(e){t.$set(t.form,"banner_unit_id",e)},expression:"form['banner_unit_id']"}}),n("p",{staticStyle:{color:"#666",margin:"0"}},[t._v(t._s(t._f("lang")("首页底部banner广告的广告位ID")))])],1),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v(t._s(t._f("lang")("保 存")))])],1)],1)],1)],1)],1)},i=[],r=(n("f17d"),n("90e7")),o={data:function(){return{tabName:"ad",form:{}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(r["c"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting()},doSubmit:function(){var t=this;Object(r["e"])({name:this.tabName,data:JSON.stringify(this.form)}).then((function(e){t.getSetting(),t.$message.success(e.message)}))}}},s=o,l=n("76b2"),c=Object(l["a"])(s,a,i,!1,null,null,null);e["default"]=c.exports}}]);