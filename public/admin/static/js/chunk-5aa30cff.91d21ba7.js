(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aa30cff"],{"0c66":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:t._f("lang")("参数配置"),name:"wxapp"}},[a("el-alert",{staticStyle:{width:"600px",margin:"10px 0 20px 20px"},attrs:{type:"warning",size:"small",title:"：",closable:!1}},[a("template",{slot:"title"},[a("div",[a("strong",[t._v(t._s(t._f("lang")("注意事项"))+"：")])]),a("div",[t._v(t._s(t._f("lang")("1、小程序类目选择：工具 -> 办公")))]),a("div",[t._v(t._s(t._f("lang")("2、小程序后台request合法域名、uploadFile合法域名、downloadFile合法域名，均为"))+"：https://"+t._s(t.host)+" ，"+t._s(t._f("lang")("必须设置")))])])],2),t.form?a("el-form",{ref:"form_wxapp",staticStyle:{width:"600px"},attrs:{model:t.form,rules:t.formRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:t._f("lang")("小程序名称"),prop:"title"}},[a("el-input",{attrs:{placeholder:t._f("lang")("小程序名称"),size:"small"},model:{value:t.form["title"],callback:function(e){t.$set(t.form,"title",e)},expression:"form['title']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("小程序appid"),prop:"appid"}},[a("el-input",{attrs:{placeholder:t._f("lang")("小程序appid"),size:"small"},model:{value:t.form["appid"],callback:function(e){t.$set(t.form,"appid",e)},expression:"form['appid']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("小程序appsecret"),prop:"appsecret"}},[a("el-input",{attrs:{placeholder:t._f("lang")("小程序appsecret"),size:"small"},model:{value:t.form["appsecret"],callback:function(e){t.$set(t.form,"appsecret",e)},expression:"form['appsecret']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("小程序首页标题"),prop:"page_title"}},[a("el-input",{attrs:{placeholder:t._f("lang")("小程序首页标题"),size:"small"},model:{value:t.form["page_title"],callback:function(e){t.$set(t.form,"page_title",e)},expression:"form['page_title']"}}),a("p",{staticStyle:{margin:"0",color:"#999"}},[t._v(t._s(t._f("lang")("默认：AI创作助手")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("小程序欢迎语"),prop:"share_title"}},[a("el-input",{attrs:{placeholder:t._f("lang")("小程序欢迎语"),size:"small"},model:{value:t.form["welcome"],callback:function(e){t.$set(t.form,"welcome",e)},expression:"form['welcome']"}}),a("p",{staticStyle:{margin:"0",color:"#999"}},[t._v(t._s(t._f("lang")("默认：你好，我是AI创作助手！你现在可以向我提问了！")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("分享标题"),prop:"share_title"}},[a("el-input",{attrs:{placeholder:t._f("lang")("默认小程序名称"),size:"small"},model:{value:t.form["share_title"],callback:function(e){t.$set(t.form,"share_title",e)},expression:"form['share_title']"}})],1),a("el-form-item",{attrs:{label:t._f("lang")("分享图片"),prop:"share_image"}},[a("el-input",{attrs:{placeholder:t._f("lang")("输入图片地址或上传图片"),size:"small"},model:{value:t.form["share_image"],callback:function(e){t.$set(t.form,"share_image",e)},expression:"form['share_image']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"share_image"},"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[t.form["share_image"]?a("img",{staticClass:"avatar",staticStyle:{height:"80px",width:"auto"},attrs:{src:t.form["share_image"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"80px",height:"80px","line-height":"80px"}})]),a("span",[t._v(t._s(t._f("lang")("建议300x300像素，正方形图片")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("IOS支付"),prop:"is_ios_pay"}},[a("el-radio-group",{model:{value:t.form["is_ios_pay"],callback:function(e){t.$set(t.form,"is_ios_pay",e)},expression:"form['is_ios_pay']"}},[a("el-radio",{staticStyle:{"margin-right":"20px"},attrs:{label:1,size:"mini"}},[t._v(t._s(t._f("lang")("启用")))]),a("el-radio",{attrs:{label:0,size:"mini"}},[t._v(t._s(t._f("lang")("关闭")))])],1),a("p",[t._v(t._s(t._f("lang")("微信IOS端不允许有虚拟商品支付")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("小程序审核模式"),prop:"is_check"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["is_check"],callback:function(e){t.$set(t.form,"is_check",e)},expression:"form['is_check']"}}),a("p",[t._v(t._s(t._f("lang")("打开以后小程序端仅显示可以过审的功能")))])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(e){return t.doSubmit("form_wxapp")}}},[t._v(t._s(t._f("lang")("保 存")))])],1)],1):t._e()],1),a("el-tab-pane",{attrs:{label:t._f("lang")("小程序首页"),name:"wxapp_index"}},[t.form?a("el-form",{ref:"form_wxapp_index",staticStyle:{width:"600px"},attrs:{model:t.form,rules:t.formRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:t._f("lang")("首页类型"),prop:"type"}},[a("el-radio",{attrs:{label:"chat"},model:{value:t.form["type"],callback:function(e){t.$set(t.form,"type",e)},expression:"form['type']"}},[t._v(t._s(t._f("lang")("聊天")))]),a("el-radio",{attrs:{label:"diy"},model:{value:t.form["type"],callback:function(e){t.$set(t.form,"type",e)},expression:"form['type']"}},[t._v(t._s(t._f("lang")("自定义内容")))])],1),a("el-form-item",{staticClass:"describe",attrs:{label:t._f("lang")("自定义内容"),prop:"content"}},[a("fox-editor",{ref:"foxEditor",attrs:{content:t.form.content}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(e){return t.doSubmit("form_wxapp_index")}}},[t._v(t._s(t._f("lang")("保 存")))])],1)],1):t._e()],1)],1)],1)},l=[],n=(a("f17d"),a("90e7")),s=a("91b6"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fox-editor",style:"width:"+t.width+"px;"},[a("div",{staticClass:"editor-tools"},[a("div",{staticStyle:{display:"flex","align-items":"center","line-height":"14px"}},[a("a",{staticClass:"item",attrs:{title:t._f("lang")("插入一段文字")},on:{click:t.addText}},[t._v("+ "+t._s(t._f("lang")("文字")))]),a("el-upload",{staticStyle:{display:"inline"},attrs:{action:"","before-upload":t.uploadCheck,"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[a("a",{staticClass:"item",attrs:{title:t._f("lang")("插入一张图片")}},[t._v("+ "+t._s(t._f("lang")("图片")))])])],1),null!==t.activeIndex?a("div",{staticStyle:{display:"flex","align-items":"center","line-height":"14px"}},["text"===t.form[t.activeIndex].type?a("a",{staticClass:"item",class:{active:"bold"===t.form[t.activeIndex].style.fontWeight},attrs:{title:t._f("lang")("文字加粗")},on:{click:function(e){return t.setTextStyle("fontWeight")}}},[a("svg-icon",{attrs:{"icon-class":"ic_text_bold"}})],1):t._e(),"text"===t.form[t.activeIndex].type?a("a",{staticClass:"item",class:{active:"center"===t.form[t.activeIndex].style.textAlign},attrs:{title:t._f("lang")("文字居中")},on:{click:function(e){return t.setTextStyle("textAlign")}}},[a("svg-icon",{attrs:{"icon-class":"ic_text_center"}})],1):t._e(),"text"===t.form[t.activeIndex].type?a("el-color-picker",{staticClass:"item",staticStyle:{padding:"0"},attrs:{size:"mini",value:t.form[t.activeIndex].style.color||"#333333",title:t._f("lang")("文字颜色")},on:{change:t.setTextColor}}):t._e(),"text"===t.form[t.activeIndex].type?a("el-select",{staticStyle:{width:"68px","margin-right":"5px"},attrs:{value:t.form[t.activeIndex].style.fontSize||14,placeholder:t._f("lang")("字号"),size:"mini",title:t._f("lang")("文字大小")},on:{change:t.setTextFontSize}},t._l(t.fontSizeArr,(function(t){return a("el-option",{key:t,attrs:{label:t+"px",value:t}})})),1):t._e(),a("a",{staticClass:"item",attrs:{title:t._f("lang")("删除选中")},on:{click:t.removeItem}},[a("i",{staticClass:"el-icon-delete"})]),a("a",{staticClass:"item",attrs:{title:t._f("lang")("上移")},on:{click:t.moveTop}},[t._v("↑")]),a("a",{staticClass:"item",staticStyle:{"margin-right":"0"},attrs:{title:t._f("lang")("下移")},on:{click:t.moveBottom}},[t._v("↓")])],1):t._e()]),a("div",{staticClass:"editor-content",style:"height:"+t.height+"px;"},t._l(t.form,(function(e,i){return a("div",{key:i,staticClass:"editor-block",class:{active:t.activeIndex===i},on:{click:function(e){return t.itemSelect(i)}}},["text"===e.type?a("div",{staticClass:"block-text"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form[i].content,expression:"form[index].content"}],style:t.formatStyle(e.style),attrs:{id:"textarea"+i},domProps:{value:t.form[i].content},on:{input:[function(e){e.target.composing||t.$set(t.form[i],"content",e.target.value)},function(e){return t.setTextHeight(i)}]}}),t._v(" "),a("div",{staticStyle:{clear:"both"}})]):t._e(),"image"===e.type?a("div",{staticClass:"block-image"},[a("img",{attrs:{src:e.content}}),a("div",{staticStyle:{clear:"both"}})]):t._e()])})),0)])},r=[],c=(a("51c1"),a("390d"),a("233b"),a("c565"),a("a7fa"),a("d3da"),{name:"FoxEditor",props:{content:{type:String,default:""},width:{type:Number,default:500},height:{type:Number,default:300}},data:function(){return{form:[],activeIndex:null,fontSizeArr:[12,13,14,15,16,18,20,24,28,32]}},watch:{content:{handler:function(t){var e=this;this.content?this.form=JSON.parse(this.content):this.form=[],this.$nextTick((function(){e.setAllTextHeiht()}))},immediate:!0,deep:!0}},created:function(){},methods:{formatStyle:function(t){var e="";return t&&(t.color&&(e+="color:"+t.color+";"),t.fontWeight&&(e+="font-weight:"+t.fontWeight+";"),t.fontSize&&(e+="font-size:"+t.fontSize+"px;"),t.textAlign&&(e+="textAlign:"+t.textAlign+";")),e},addText:function(){var t=this.activeIndex?this.activeIndex:0,e=this.form;e.splice(t+1,0,{type:"text",content:"",style:{}}),this.form=e,t=null===this.activeIndex?0:t+1,this.itemSelect(t),this.$forceUpdate()},uploadCheck:function(t){if("jpg"!==t.name.substr(-3)&&"png"!==t.name.substr(-3)&&"gif"!==t.name.substr(-3))return this.$message({showClose:!0,message:"请上传后缀为.png / .jpg / .gif的图片",type:"warning"}),!1},uploadImage:function(t){var e=this,a=this.activeIndex?this.activeIndex:0,i=new FormData;i.append("file",t.file),Object(s["a"])(i).then((function(t){e.form.splice(a+1,0,{type:"image",content:t.data.path}),e.itemSelect(null===e.activeIndex?0:a+1),e.$forceUpdate()}))},removeItem:function(){var t=this,e=this.activeIndex?this.activeIndex:0;this.$confirm("确认删除选中的内容吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){var a=t.form;a.splice(e,1),t.form=a,t.activeIndex=null,t.$forceUpdate()}))},moveTop:function(){var t=this;if(null!==this.activeIndex&&0!==this.activeIndex){var e=this.activeIndex,a=this.form,i=a[e-1];a[e-1]=a[e],a[e]=i,this.form=a,this.activeIndex=e-1,this.$forceUpdate(),this.$nextTick((function(){t.setAllTextHeiht()}))}},moveBottom:function(){var t=this,e=this.form;if(null!==this.activeIndex&&this.activeIndex!==e.length-1){var a=this.activeIndex,i=e[a+1];e[a+1]=e[a],e[a]=i,this.form=e,this.activeIndex=a+1,this.$forceUpdate(),this.$nextTick((function(){t.setAllTextHeiht()}))}},itemSelect:function(t){this.activeIndex=t},setTextStyle:function(t,e){var a=this,i=this.activeIndex;if(null!==i){var l=this.form[i].style;"fontWeight"===t&&(l.fontWeight="bold"===l.fontWeight?"normal":"bold"),"textAlign"===t&&(l.textAlign="center"===l.textAlign?"left":"center"),"color"===t&&(l.color=e),"fontSize"===t&&(l.fontSize=e,setTimeout((function(){a.setTextHeight(i)}),10)),this.form[i].style=l,this.$forceUpdate()}},setTextColor:function(t){this.setTextStyle("color",t)},setTextFontSize:function(t){this.setTextStyle("fontSize",t)},setAllTextHeiht:function(){var t=this;this.form.forEach((function(e,a){"text"===e.type&&t.setTextHeight(a)}))},setTextHeight:function(t){var e=document.getElementById("textarea"+t);e.style.height=0,e.style.height=e.scrollHeight+"px"},getContent:function(){return this.form.length>0?JSON.stringify(this.form):""}}}),f=c,m=(a("2f91"),a("9a2f"),a("76b2")),p=Object(m["a"])(f,o,r,!1,null,"5556c8da",null),u=p.exports,d={components:{FoxEditor:u},data:function(){return{tabName:"wxapp",form:{},host:"",formRules:{title:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],qrcode:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],appid:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],appsecret:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},mounted:function(){this.host=window.location.host,this.getSetting()},methods:{getSetting:function(){var t=this;Object(n["a"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting()},doSubmit:function(t){var e=this;this.$refs[t].validate((function(t){var a=Object.assign({},e.form);"wxapp_index"===e.tabName&&(a.content=e.$refs.foxEditor.getContent()),t?Object(n["c"])({name:e.tabName,data:JSON.stringify(a)}).then((function(t){e.getSetting(),e.$message.success(t.message)})):e.$message.error(e.$lang("请填写必填项"))}))},uploadImage:function(t){var e=this,a=new FormData;a.append("file",t.file),t.data&&a.append("data",JSON.stringify(t.data)),Object(s["a"])(a).then((function(a){"share_image"===t.data.type&&e.$set(e.form,"share_image",a.data.path),e.$message.success(e.$lang("上传成功"))}))}}},h=d,g=Object(m["a"])(h,i,l,!1,null,null,null);e["default"]=g.exports},"2f91":function(t,e,a){"use strict";a("c402")},"90e7":function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return s}));var i=a("b775");function l(t){return Object(i["a"])({url:"/setting/getSetting",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/setting/setSetting",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/setting/getSkinList",method:"post",data:t})}},"91b6":function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return n}));var i=a("b775");function l(t){return Object(i["a"])({url:"/upload/image",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/upload/pem",method:"post",data:t})}},"9a2f":function(t,e,a){"use strict";a("b954")},b954:function(t,e,a){},c402:function(t,e,a){}}]);