(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4051360d"],{"406e":function(t,a,e){},"90e7":function(t,a,e){"use strict";e.d(a,"c",(function(){return i})),e.d(a,"e",(function(){return l})),e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return o})),e.d(a,"d",(function(){return s}));var n=e("b775");function i(t){return Object(n["a"])({url:"/setting/getSetting",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/setting/setSetting",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/setting/getBalance",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/setting/getLxaiBalance",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/setting/getSkinList",method:"post",data:t})}},ab28:function(t,a,e){},b782:function(t,a,e){"use strict";e("406e")},bfeb:function(t,a,e){"use strict";e("ab28")},c666:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[e("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(a){t.tabName=a},expression:"tabName"}},[e("el-tab-pane",{attrs:{label:t._f("lang")("AI绘画 - 参数配置"),name:"draw"}},[e("el-alert",{staticStyle:{width:"500px","margin-top":"20px"},attrs:{type:"warning",title:t._f("lang")("Key统一在key池配置")}}),t.form?e("el-form",{ref:"drawForm",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[e("el-form-item",{attrs:{label:t._f("lang")("功能开关"),prop:"platform"}},[e("el-radio-group",{model:{value:t.form["is_open"],callback:function(a){t.$set(t.form,"is_open",a)},expression:"form['is_open']"}},[e("el-radio",{staticStyle:{"margin-right":"20px"},attrs:{label:1,size:"mini"}},[t._v(t._s(t._f("lang")("开启")))]),e("el-radio",{attrs:{label:0,size:"mini"}},[t._v(t._s(t._f("lang")("关闭")))])],1)],1),1===t.form.is_open?e("div",[e("el-form-item",{attrs:{label:t._f("lang")("绘画接口类型"),prop:"platform"}},[e("el-radio-group",{model:{value:t.form["platform"],callback:function(a){t.$set(t.form,"platform",a)},expression:"form['platform']"}},[e("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"mj",size:"mini"}},[t._v("Midjourney")]),e("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"other",size:"mini"}},[t._v(t._s(t._f("lang")("其他绘画接口")))])],1)],1),e("el-form-item",{attrs:{label:t._f("lang")("接口通道"),prop:"channel"}},["openai"===t.form["platform"]?e("el-radio-group",{model:{value:t.form["channel"],callback:function(a){t.$set(t.form,"channel",a)},expression:"form['channel']"}},[e("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"openai",size:"mini"}},[t._v(t._s(t._f("lang")("OpenAI官方接口")))]),e("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"api2d",size:"mini"}},[t._v("Api2d")])],1):t._e(),"mj"===t.form["platform"]?e("el-radio-group",{model:{value:t.form["channel"],callback:function(a){t.$set(t.form,"channel",a)},expression:"form['channel']"}},[e("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"lxai",size:"mini"}},[t._v(t._s(t._f("lang")("灵犀AI")))])],1):t._e(),"sd"===t.form["platform"]?e("el-radio-group",{model:{value:t.form["channel"],callback:function(a){t.$set(t.form,"channel",a)},expression:"form['channel']"}},[e("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"lxai",size:"mini"}},[t._v(t._s(t._f("lang")("灵犀AI")))])],1):t._e(),"other"===t.form["platform"]?e("el-radio-group",{model:{value:t.form["channel"],callback:function(a){t.$set(t.form,"channel",a)},expression:"form['channel']"}},[e("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"yijian",size:"mini"}},[t._v(t._s(t._f("lang")("意间AI")))])],1):t._e(),"openai"===t.form["platform"]&&"openai"===t.form["channel"]?e("p",[t._v(t._s(t._f("lang")("可以使用普通的openai key，请根据您当地的法规酌情使用")))]):t._e(),"openai"===t.form["platform"]&&"api2d"===t.form["channel"]?e("p",[t._v(t._s(t._f("lang")("这是一个提供openai接口的第三方平台，消耗90P / 张，"))),e("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/api2d",target:"_blank"}},[t._v(t._s(t._f("lang")("注册地址")))])]):t._e(),"mj"===t.form["platform"]&&"lxai"===t.form["channel"]?e("p",[t._v(" "+t._s(t._f("lang")("注：MJ接口服务免费，但需要购买灵犀key和MJ账号"))),e("br"),t._v(" "+t._s(t._f("lang")("1、购买灵犀key，填到key池。"))),e("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/lxai",target:"_blank"}},[t._v(t._s(t._f("lang")("灵犀key下单地址")))]),e("br"),t._v(" "+t._s(t._f("lang")("2、自备MJ账号，并绑定到灵犀AI。"))),e("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/lxmj",target:"_blank"}},[t._v(t._s(t._f("lang")("MJ绑定教程")))])]):t._e(),"mj"===t.form["platform"]&&"replicate"===t.form["channel"]?e("p",[t._v(t._s(t._f("lang")("由Replicate提供的Midjourney接口，"))),e("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/replicate",target:"_blank"}},[t._v(t._s(t._f("lang")("注册地址")))])]):t._e(),"other"===t.form["platform"]&&"yijian"===t.form["channel"]?e("p",[t._v(t._s(t._f("lang")("由意间AI提供的绘画接口，￥0.05 / 张，"))),e("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/yijian",target:"_blank"}},[t._v(t._s(t._f("lang")("注册 & 充值地址")))])]):t._e()],1)],1):t._e(),e("el-form-item",{attrs:{label:""}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(a){return t.doSubmit("drawForm")}}},[t._v(t._s(t._f("lang")("保 存")))])],1)],1):t._e()],1)],1)],1)},i=[],l=(e("f17d"),e("90e7")),r={data:function(){return{tabName:"draw",form:null,balance:null,lxaiBalance:null,formRules:{platform:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],channel:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(l["c"])({name:this.tabName}).then((function(a){0!==a.data.is_open&&(a.data.is_open=1),t.form=a.data}))},switchTab:function(){this.getSetting()},doSubmit:function(t){var a=this;this.$refs[t].validate((function(t){t?Object(l["e"])({name:a.tabName,data:JSON.stringify(a.form)}).then((function(t){a.getSetting(),a.$message.success(t.message)})):a.$message.error(a.$lang("请填写必填项"))}))},getBalance:function(){var t=this;Object(l["a"])({apikey:this.form.apikey}).then((function(a){t.balance=a.data}))},getLxaiBalance:function(){var t=this;Object(l["b"])({apikey:this.form.lxai_key}).then((function(a){t.lxaiBalance=a.data}))}}},o=r,s=(e("b782"),e("bfeb"),e("76b2")),c=Object(s["a"])(o,n,i,!1,null,"2efb6b05",null);a["default"]=c.exports}}]);