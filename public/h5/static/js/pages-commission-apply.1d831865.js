(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-commission-apply"],{"0ee6":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"login-bg"},[i("v-uni-image",{staticClass:"wave",attrs:{src:"/static/images/wave.png"}})],1),i("v-uni-view",{staticClass:"login-main"},[t.lastApply&&!t.isEdit?i("v-uni-view",{staticClass:"audit-result"},[0==t.lastApply.status?i("v-uni-view",[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/ic_audit.png"}}),i("v-uni-view",{staticClass:"message"},[t._v(t._s(t._f("lang")("申请已提交，正在审核中")))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.lastApply.create_time)+" 提交")])],1):t._e(),1==t.lastApply.status?i("v-uni-view",[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/ic_pass.png"}}),i("v-uni-view",{staticClass:"message"},[t._v(t._s(t._f("lang")("恭喜你，已通过审核")))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.lastApply.create_time)+" 提交")]),i("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toCommission.apply(void 0,arguments)}}},[t._v(t._s(t._f("lang")("进入推广中心")))])],1):t._e(),2==t.lastApply.status?i("v-uni-view",[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/ic_reject.png"}}),i("v-uni-view",{staticClass:"message"},[t._v(t._s(t._f("lang")("审核被驳回，可调整后重新提交")))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.lastApply.create_time)+" 提交")]),i("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toEdit.apply(void 0,arguments)}}},[t._v(t._s(t._f("lang")("返回编辑")))]),i("v-uni-view",{staticClass:"reject"},[t._v("驳回原因："+t._s(t.lastApply.reject_reason?t.lastApply.reject_reason:"无"))])],1):t._e()],1):i("v-uni-view",{staticClass:"login-form"},[i("v-uni-view",{staticClass:"form-item"},[i("v-uni-text",{staticClass:"label"},[t._v(t._s(t._f("lang")("姓名")))]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:t._f("lang")("请输入姓名")},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-text",{staticClass:"label"},[t._v(t._s(t._f("lang")("手机")))]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",maxlength:"11",placeholder:t._f("lang")("请输入手机号")},model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}})],1),i("v-uni-view",{staticClass:"form-item",staticStyle:{display:"flex","align-items":"center","padding-top":"30rpx"}},[i("v-uni-label",{staticClass:"agreement"},[i("v-uni-checkbox-group",{on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.checkboxChange.apply(void 0,arguments)}}},[i("v-uni-checkbox",{staticClass:"check",attrs:{value:!0,checked:t.is_agree,color:"#04BABE"}}),t._v(t._s(t._f("lang")("阅读并同意")))],1)],1),i("v-uni-text",{staticClass:"agreement",staticStyle:{color:"#04babe"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toAgreement.apply(void 0,arguments)}}},[t._v(t._s(t._f("lang")("《用户推广协议》")))])],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-button",{staticClass:"btn-login",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.doSubmit.apply(void 0,arguments)}}},[t._v(t._s(t._f("lang")("立即申请")))])],1)],1)],1)],1)],1)},n=[]},"10b1":function(t,a,i){"use strict";i.r(a);var e=i("0ee6"),n=i("e884");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("345c");var o=i("f0c5"),l=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"13430bdd",null,!1,e["a"],void 0);a["default"]=l.exports},"345c":function(t,a,i){"use strict";var e=i("432b"),n=i.n(e);n.a},"432b":function(t,a,i){var e=i("4a2c");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("51375fea",e,!0,{sourceMap:!1,shadowMode:!1})},"4a2c":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".container[data-v-13430bdd]{position:relative;padding:0}.login-bg[data-v-13430bdd]{width:%?750?%;height:%?240?%;background:#04babe;position:relative}.login-bg .wave[data-v-13430bdd]{width:%?750?%;height:%?38?%;position:absolute;left:0;bottom:0}.login-main[data-v-13430bdd]{padding:%?30?% %?80?%;margin-top:%?100?%}.form-item[data-v-13430bdd]{display:flex;align-items:center;position:relative;margin-bottom:%?40?%}.form-item .input[data-v-13430bdd]{width:100%;border:none;border-bottom:2px solid #04babe;height:%?80?%;line-height:%?80?%;padding:0 %?20?% 0 %?180?%}.form-item .label[data-v-13430bdd]{font-size:%?32?%;line-height:%?40?%;position:absolute;left:%?20?%;top:%?20?%}.form-item .icon[data-v-13430bdd]{width:%?36?%;height:%?36?%;position:absolute;left:%?20?%;top:%?20?%}.form-item .eye[data-v-13430bdd]{width:%?36?%;height:%?36?%;position:absolute;right:%?20?%;top:%?20?%;z-index:10}.form-item .check[data-v-13430bdd]{-webkit-transform:scale(.75);transform:scale(.75);margin-right:%?6?%}.form-item .agreement[data-v-13430bdd]{font-size:%?28?%;color:#666;display:flex;align-items:center}.form-item .agreement uni-text[data-v-13430bdd]{color:#000}.btn-login[data-v-13430bdd]{color:#fff;background:#04babe;border-radius:%?44?%;width:100%;height:%?88?%;line-height:%?88?%;text-align:center;font-size:%?32?%;margin:%?100?% auto 0 auto}.audit-result[data-v-13430bdd]{text-align:center;margin-top:%?88?%}.audit-result .icon[data-v-13430bdd]{width:%?120?%;height:%?120?%}.audit-result .message[data-v-13430bdd]{width:100%;line-height:%?44?%;font-size:%?36?%;color:#666;margin-top:%?60?%}.audit-result .time[data-v-13430bdd]{width:100%;line-height:%?44?%;font-size:%?24?%;color:#999;margin-top:%?20?%}.audit-result .btn[data-v-13430bdd]{width:%?240?%;height:%?60?%;border:1px solid #666;border-radius:%?10?%;line-height:%?60?%;text-align:center;margin:0 auto;margin-top:%?60?%;font-size:%?28?%;color:#666}.audit-result .reject[data-v-13430bdd]{font-size:%?28?%;color:red;margin-top:%?40?%;line-height:%?44?%}",""]),t.exports=a},c435:function(t,a,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("ade3")),s=getApp(),o={data:function(){return{name:"",phone:"",is_agree:!1,pid:0,focus:"",lastApply:null,isEdit:!1}},onLoad:function(t){param.pid&&this.setData({pid:param.pid}),this.getLastApply()},onShow:function(){uni.setNavigationBarTitle({title:this.$lang("申请成为分销商")})},methods:{doSubmit:function(){var t=this,a=this,i=this.name,e=this.phone,n=this.pid,o=this.is_agree;if(i){if(e)return o?void s.globalData.util.request({url:"/commission/apply",data:{name:i,phone:e,pid:n}}).then((function(i){uni.showModal({title:t.$lang("提示"),content:i.message,showCancel:!1,confirmText:t.$lang("确定"),success:function(){a.setData({lastApply:null,isEdit:!1}),a.getLastApply()}})})):(s.globalData.util.message("请阅读并同意《用户推广协议》","error"),void this.setData({is_agree:!0}));s.globalData.util.message("请输入手机号","error")}else s.globalData.util.message("请输入姓名","error")},toAgreement:function(){uni.navigateTo({url:"/pages/article/article?type=commission"})},toCommission:function(){uni.redirectTo({url:"/pages/commission/index"})},toEdit:function(){this.setData({isEdit:!0})},getLastApply:function(){var t=this;s.globalData.util.request({url:"/commission/getLastApply"}).then((function(a){a.data&&t.setData({lastApply:a.data,name:a.data.name,phone:a.data.phone})}))},inputChange:function(t){var a=t.currentTarget.dataset.name,i=t.detail.value;this.setData((0,n.default)({},a,i))},inputFocus:function(t){var a=t.currentTarget.dataset.name;this.setData({focus:a})},inputBlur:function(t){var a=t.currentTarget.dataset.name;this.focus==a&&this.setData({focus:""})},checkboxChange:function(t){var a=t.detail.value;this.setData({is_agree:a.length>0})}}};a.default=o},e884:function(t,a,i){"use strict";i.r(a);var e=i("c435"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a}}]);