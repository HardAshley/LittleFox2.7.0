(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-199659ca"],{"90e7":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return l}));var s=a("b775");function i(t){return Object(s["a"])({url:"/setting/getSetting",method:"post",data:t})}function n(t){return Object(s["a"])({url:"/setting/setSetting",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/setting/getSkinList",method:"post",data:t})}},f739:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"20px"}},[a("el-form",{ref:"form",staticStyle:{width:"700px"},attrs:{rules:t.formRules,"label-width":"100px"}},[a("el-steps",{attrs:{active:t.activeStep,"align-center":"",simple:"","process-status":"wait"}},[a("el-step",{attrs:{title:t._f("lang")("设置参数"),icon:"el-icon-edit"}}),a("el-step",{attrs:{title:t._f("lang")("上传代码"),icon:"el-icon-upload"}}),a("el-step",{attrs:{title:t._f("lang")("上传结果"),icon:"el-icon-info"}})],1),1===t.activeStep?a("div",[a("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{label:t._f("lang")("上传密钥"),prop:"upload_secret"}},[a("el-input",{attrs:{type:"textarea",rows:10,placeholder:t._f("lang")("小程序代码上传密钥"),size:"small"},model:{value:t.upload_secret,callback:function(e){t.upload_secret=e},expression:"upload_secret"}}),a("p",{staticStyle:{color:"#888"}},[t._v(t._s(t._f("lang")("请将IP白名单关闭，或将"))),a("span",{staticStyle:{color:"#666","text-decoration":"underline",margin:"0 3px"}},[t._v("182.43.24.188")]),t._v(t._s(t._f("lang")("加入IP白名单")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("接口域名"),prop:"host"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:t._f("lang")("本站域名，不带https://"),size:"small"},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}})],1),a("el-form-item",{staticStyle:{margin:"50px 0"},attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-upload",size:"small"},on:{click:t.uploadCode}},[t._v(t._s(t._f("lang")("开始上传代码")))]),a("p",{staticStyle:{color:"#888"}},[t._v(t._s(t._f("lang")("点击上传按钮后，请耐心等待，需要半分钟左右。")))])],1)],1):t._e(),3===t.activeStep?a("div",[a("div",{staticStyle:{"text-align":"center",padding:"100px 0 100px 0"}},[a("p",{staticClass:"text-green",staticStyle:{"font-size":"48px",margin:"20px 0"}},[a("i",{staticClass:"el-icon-success"})]),a("p",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t._f("lang")("上传成功")))]),t.upload_time?a("p",{staticStyle:{"font-size":"14px",color:"#888"}},[t._v(t._s(t._f("lang")("最后上传时间"))+"："+t._s(t.upload_time))]):t._e(),a("p",{staticStyle:{"text-align":"left"}},[1===t.has_update?a("el-alert",{staticStyle:{width:"320px",margin:"0 auto"},attrs:{type:"warning","show-icon":"",closable:!1,title:t.$lang("发现更新（")+t.update_time+t.$lang("），请重新上传代码")}}):t._e(),0===t.has_update?a("el-alert",{staticStyle:{width:"160px",margin:"0 auto"},attrs:{type:"success","show-icon":"",title:t._f("lang")("已是最新版")}}):t._e()],1),a("p",[a("el-button",{staticStyle:{"margin-top":"50px"},attrs:{type:"primary",plain:"",size:"small"},on:{click:t.toEdit}},[t._v(t._s(t._f("lang")("返回重新上传")))])],1)])]):t._e()],1)],1)},i=[],n=a("90e7"),l=a("b775");function o(t){return Object(l["a"])({url:"/wxapp/uploadCode",method:"post",data:t})}function p(t){return Object(l["a"])({url:"/wxapp/checkUpdate",method:"post",data:t})}var c={data:function(){return{wxapp_name:"wxapp",host:"",upload_secret:"",upload_time:"",has_update:-1,update_time:"",activeStep:1,formRules:{upload_secret:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(n["a"])({name:this.wxapp_name+"_upload"}).then((function(e){t.has_update=-1,t.update_time="",t.upload_secret=e.data.upload_secret,e.data.host?t.host=e.data.host:t.host=window.location.host,t.upload_time=e.data.upload_time,t.upload_time&&(t.activeStep=3,setTimeout((function(){t.checkUpdate()}),1e3))}))},uploadCode:function(){var t=this;this.upload_secret?o({wxapp_name:this.wxapp_name,upload_secret:this.upload_secret,host:this.host}).then((function(e){t.getSetting(),t.$message.success(e.message)})):this.$message.success(this.$lang("请填写上传密钥"))},checkUpdate:function(){var t=this;p({wxapp_name:this.wxapp_name}).then((function(e){t.has_update=e.data.has_update,t.has_update&&(t.update_time=e.data.update_time)}))},toEdit:function(){this.activeStep=1}}},r=c,u=a("76b2"),d=Object(u["a"])(r,s,i,!1,null,null,null);e["default"]=d.exports}}]);