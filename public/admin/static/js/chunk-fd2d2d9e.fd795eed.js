(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd2d2d9e"],{"4a06":function(e,t,a){},"54fd":function(e,t,a){"use strict";a("9d5b")},"61bc":function(e,t,a){"use strict";a("4a06")},"90e7":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a("b775");function i(e){return Object(n["a"])({url:"/setting/getSetting",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/setting/setSetting",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/setting/getSkinList",method:"post",data:e})}},"9d5b":function(e,t,a){},f809:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:e._f("lang")("文本翻译接口"),name:"translate"}},[e.form?a("el-form",{ref:"drawForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:e._f("lang")("翻译开关"),prop:"is_open"}},[a("el-radio-group",{model:{value:e.form["is_open"],callback:function(t){e.$set(e.form,"is_open",t)},expression:"form['is_open']"}},[a("el-radio",{staticStyle:{"margin-right":"20px"},attrs:{label:1,size:"mini"}},[e._v(e._s(e._f("lang")("开启")))]),a("el-radio",{attrs:{label:0,size:"mini"}},[e._v(e._s(e._f("lang")("关闭")))])],1)],1),1===e.form.is_open?a("div",[a("el-form-item",{attrs:{label:e._f("lang")("接口通道"),prop:"channel"}},[a("el-radio-group",{model:{value:e.form["channel"],callback:function(t){e.$set(e.form,"channel",t)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"baidu",size:"mini"}},[e._v("百度翻译")])],1)],1),"baidu"===e.form["channel"]?a("div",[a("el-form-item",{attrs:{label:"ApiKey",prop:"apikey"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:e._f("lang")("填入百度应用的API Key"),size:"small"},model:{value:e.form.apikey,callback:function(t){e.$set(e.form,"apikey",t)},expression:"form.apikey"}})],1),a("el-form-item",{attrs:{label:"SecretKey",prop:"secretkey"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:e._f("lang")("填入百度应用的Secret Key"),size:"small"},model:{value:e.form.secretkey,callback:function(t){e.$set(e.form,"secretkey",t)},expression:"form.secretkey"}}),a("p",{staticStyle:{"margin-top":"10px"}},[a("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/translate_baidu",target:"_blank"}},[e._v(e._s(e._f("lang")("百度翻译控制台"))+" "),a("i",{staticClass:"el-icon-link"})])])],1)],1):e._e()],1):e._e(),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.doSubmit("drawForm")}}},[e._v(e._s(e._f("lang")("保 存")))])],1)],1):e._e()],1)],1)],1)},i=[],r=(a("f17d"),a("90e7")),l={data:function(){return{tabName:"translate",form:null,balance:null,lxaiBalance:null,formRules:{is_open:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],channel:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],apikey:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],secretkey:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var e=this;Object(r["a"])({name:this.tabName}).then((function(t){0!==t.data.is_open&&(t.data.is_open=1),e.form=t.data}))},switchTab:function(){this.getSetting()},doSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e?Object(r["c"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message.success(e.message)})):t.$message.error(t.$lang("请填写必填项"))}))}}},s=l,o=(a("54fd"),a("61bc"),a("76b2")),c=Object(o["a"])(s,n,i,!1,null,"0cf63a16",null);t["default"]=c.exports}}]);