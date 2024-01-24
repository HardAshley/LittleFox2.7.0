(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-setting-index"],{"113f":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=getApp(),n={data:function(){return{avatar:"",nickname:"",phone:"",openid:""}},onShow:function(t){uni.setNavigationBarTitle({title:this.$lang("设置")}),this.getUserInfo(),this.getAccounts()},methods:{getUserInfo:function(){var t=this;i.globalData.util.request({url:"/user/info"}).then((function(a){t.avatar=a.data.avatar,t.nickname=a.data.nickname}))},getAccounts:function(){var t=this;i.globalData.util.request({url:"/user/getAccounts"}).then((function(a){t.phone=a.data.phone,t.openid=a.data.openid}))},uploadAvatar:function(){var t=this;uni.chooseImage({count:1,success:function(a){uni.showLoading({title:"正在上传"}),i.globalData.util.upload({url:"/upload/image",filePath:a.tempFilePaths[0]}).then((function(a){var e=a.data.path;uni.hideLoading(),t.setData({avatar:e}),t.setAvatar()}))}})},setAvatar:function(){var t=this;i.globalData.util.request({url:"/user/setUserAvatar",data:{avatar:this.avatar}}).then((function(a){i.globalData.util.message("设置成功"),t.getUserInfo()}))},toEditNickname:function(){uni.navigateTo({url:"/pages/user/setting/nickname?nickname="+this.nickname})},toBindPhone:function(){uni.navigateTo({url:"/pages/user/setting/bindphone?phone="+this.phone})},toBindWechat:function(){uni.navigateTo({url:"/pages/user/setting/bindwechat"})},doLogout:function(){i.globalData.util.request({url:"/user/logout"}).then((function(t){uni.reLaunch({url:"/pages/index/index"})}))}}};a.default=n},"12bf":function(t,a,e){"use strict";e.r(a);var i=e("7bd4"),n=e("7d07");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("d70c");var s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"9194eb6e",null,!1,i["a"],void 0);a["default"]=r.exports},"7bd4":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"form"},[e("v-uni-view",{staticClass:"a-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.uploadAvatar.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("头像")))]),e("v-uni-view",{staticClass:"value"},[e("v-uni-image",{staticClass:"avatar",attrs:{src:t.avatar}}),e("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/ic_arrow_r.png"}})],1)],1),e("v-uni-view",{staticClass:"a-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toEditNickname.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("昵称")))]),e("v-uni-view",{staticClass:"value"},[e("v-uni-text",[t._v(t._s(t.nickname||"无昵称"))]),e("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/ic_arrow_r.png"}})],1)],1),e("v-uni-view",{staticClass:"a-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toBindPhone.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("手机账号")))]),e("v-uni-view",{staticClass:"value"},[t.phone?e("v-uni-text",{staticClass:"text-primary"},[t._v(t._s(t.phone.substr(0,3)+"****"+t.phone.substr(7)))]):e("v-uni-text",{staticClass:"text-danger"},[t._v(t._s(t._f("lang")("未绑定")))]),e("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/ic_arrow_r.png"}})],1)],1)],1),e("v-uni-view",{staticClass:"logout"},[e("v-uni-button",{staticClass:"btn-logout text-danger",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.doLogout.apply(void 0,arguments)}}},[t._v(t._s(t._f("lang")("退出登录")))])],1)],1)},n=[]},"7d07":function(t,a,e){"use strict";e.r(a);var i=e("113f"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},8690:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-body[data-v-9194eb6e]{min-height:100%;background-color:#f7f7f8}body.?%PAGE?%[data-v-9194eb6e]{background-color:#f7f7f8}.container[data-v-9194eb6e]{position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;overflow:hidden}.logout[data-v-9194eb6e]{position:absolute;width:100%;height:%?100?%;left:0;bottom:%?60?%;text-align:center;display:flex;justify-content:center;align-items:center}.logout .btn-logout[data-v-9194eb6e]{width:%?240?%;height:%?100?%;line-height:%?100?%;text-align:center;border-radius:%?10?%;font-size:%?32?%}.form[data-v-9194eb6e]{background:#fff}.form .a-item[data-v-9194eb6e]{border-top:%?1?% solid #eee;display:flex;justify-content:space-between;align-items:center;padding:%?20?% %?40?%;height:%?72?%}.form .a-item[data-v-9194eb6e]:active{background:#f7f7f8}.form .a-item .label[data-v-9194eb6e]{width:%?260?%;font-size:%?32?%;color:#999}.form .a-item .value[data-v-9194eb6e]{width:%?400?%;display:flex;justify-content:flex-end;align-items:center;font-size:%?32?%;color:#333}.form .a-item .arrow[data-v-9194eb6e]{width:%?24?%;height:%?24?%;opacity:.8;margin-left:%?20?%}.form .a-item .icon[data-v-9194eb6e]{width:%?40?%;height:%?40?%;margin-right:%?20?%}.form .a-item .avatar[data-v-9194eb6e]{width:%?80?%;height:%?80?%;border-radius:%?20?%;background:#f7f7f8}.text-primary[data-v-9194eb6e]{color:#04babe}.text-danger[data-v-9194eb6e]{color:#f56c6c}",""]),t.exports=a},bc75:function(t,a,e){var i=e("8690");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("01bda6c8",i,!0,{sourceMap:!1,shadowMode:!1})},d70c:function(t,a,e){"use strict";var i=e("bc75"),n=e.n(i);n.a}}]);