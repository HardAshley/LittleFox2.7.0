(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1e9e03a"],{"3d65":function(t,e,a){"use strict";a("9d0e")},"52f7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:t._f("lang")("PC版设置"),name:"web"}},[t.form?a("el-form",{ref:"webForm",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:t._f("lang")("PC版站点开关"),prop:"is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["is_open"],callback:function(e){t.$set(t.form,"is_open",e)},expression:"form['is_open']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("自动合并小程序用户"),prop:"bind_wxapp_user"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["bind_wxapp_user"],callback:function(e){t.$set(t.form,"bind_wxapp_user",e)},expression:"form['bind_wxapp_user']"}})],1),t.pcurl?a("el-form-item",{attrs:{label:t._f("lang")("PC站点链接")}},[a("a",{staticStyle:{color:"#409EFF"},attrs:{href:t.pcurl,target:"_blank"}},[t._v(t._s(t.pcurl))])]):t._e(),a("el-form-item",{attrs:{label:t._f("lang")("页面标题"),prop:"page_title"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{size:"small"},model:{value:t.form["page_title"],callback:function(e){t.$set(t.form,"page_title",e)},expression:"form['page_title']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("底部声明"),prop:"copyright"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:t._f("lang")("请输入内容"),size:"small"},model:{value:t.form["copyright"],callback:function(e){t.$set(t.form,"copyright",e)},expression:"form['copyright']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("登录方式"),prop:"login_way"}},[t._v(" "+t._s(t._f("lang")("扫码关注公众号"))+" ")]),1===t.site_id?a("div",[a("el-form-item",{attrs:{label:t._f("lang")("SEO关键词"),prop:"keywords"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{size:"small",placeholder:t._f("lang")("每个词用英文逗号,隔开")},model:{value:t.form["keywords"],callback:function(e){t.$set(t.form,"keywords",e)},expression:"form['keywords']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("SEO描述"),prop:"description"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:t._f("lang")("请输入内容"),size:"small"},model:{value:t.form["description"],callback:function(e){t.$set(t.form,"description",e)},expression:"form['description']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("JS统计代码"),prop:"tongji"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:t._f("lang")("请输入js统计代码"),size:"small"},model:{value:t.form["tongji"],callback:function(e){t.$set(t.form,"tongji",e)},expression:"form['tongji']"}})],1)],1):t._e(),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(e){return t.doSubmit("webForm")}}},[t._v(t._s(t._f("lang")("保 存")))])],1)],1):t._e()],1),a("el-tab-pane",{attrs:{label:t._f("lang")("风格选择"),name:"skin"}},[a("div",{staticClass:"skin-list"},[t._l(t.skinList,(function(e){return a("div",{staticClass:"item",class:{active:t.form.skin===e.name},on:{click:function(a){return t.pickSkin(e.name)}}},[a("img",{attrs:{src:e.thumb}}),a("div",{staticClass:"title"},[t._v(t._s(e.title))])])})),a("div",{staticStyle:{clear:"both"}})],2),a("div",{staticStyle:{display:"flex","align-items":"center","padding-left":"20px","margin-bottom":"40px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(e){return t.doSubmit("webForm")}}},[t._v(t._s(t._f("lang")("确 定")))]),a("a",{staticClass:"text-primary",staticStyle:{"margin-left":"50px","font-size":"13px"},attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/skin",target:"_blank"}},[a("i",{staticClass:"el-icon-link"}),t._v(" 自定义皮肤制作教程 ")])],1)])],1)],1)},r=[],n=(a("6506"),a("5290"),a("e3e9"),a("90e7")),s=a("c24f"),l={data:function(){return{tabName:"web",form:null,pcurl:"",skinList:[],formRules:{title:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],appid:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],appsecret:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],token:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],aes_key:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],page_title:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],share_title:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],share_desc:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],share_image:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},computed:{site_id:function(){return this.$store.getters.site_id}},mounted:function(){this.getSetting(),this.getWebSiteUrl()},methods:{getSetting:function(){var t=this;Object(n["c"])({name:"web"}).then((function(e){t.form=e.data,t.form.skin||(t.form.skin="default")}))},getSkinList:function(){var t=this;Object(n["d"])({platform:"web"}).then((function(e){t.skinList=e.data}))},getWebSiteUrl:function(){var t=this;Object(s["i"])().then((function(e){t.pcurl=e.data.pcurl}))},switchTab:function(){"web"===this.tabName?this.getSetting():this.getSkinList()},doSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t?Object(n["e"])({name:"web",data:JSON.stringify(e.form)}).then((function(t){e.getSetting(),e.$message.success(t.message)})):e.$message.error(e.$lang("请填写必填项"))}))},uploadImage:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=this,a=new FormData;a.append("file",t.file),t.data&&a.append("data",JSON.stringify(t.data)),uploadImage(a).then((function(a){"share_image"===t.data.type&&e.$set(e.form,"share_image",a.data.path),e.$message.success(e.$lang("上传成功"))}))})),pickSkin:function(t){this.form.skin=t,this.$forceUpdate()}}},o=l,c=(a("702a"),a("3d65"),a("1805")),u=Object(c["a"])(o,i,r,!1,null,"302fc8d4",null);e["default"]=u.exports},"702a":function(t,e,a){"use strict";a("749e")},"749e":function(t,e,a){},"90e7":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"d",(function(){return o}));var i=a("b775");function r(t){return Object(i["a"])({url:"/setting/getSetting",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/setting/setSetting",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/setting/getBalance",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/setting/getLxaiBalance",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/setting/getSkinList",method:"post",data:t})}},"9d0e":function(t,e,a){}}]);