(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-commission-withdraw-list"],{"72b1":function(t,e,a){"use strict";a.r(e);var i=a("d0b2"),n=a("79f8");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("f73f");var s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"3a807fe9",null,!1,i["a"],void 0);e["default"]=r.exports},"79f8":function(t,e,a){"use strict";a.r(e);var i=a("c78c"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"8ed9":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-3a807fe9]{background-color:#f7f7f8;height:100%}body.?%PAGE?%[data-v-3a807fe9]{background-color:#f7f7f8}.container[data-v-3a807fe9]{width:100%;min-height:100%;overflow-x:hidden;position:relative}.default[data-v-3a807fe9]{color:#233445;border-bottom:%?6?% solid #fff}.no-order[data-v-3a807fe9]{width:100%;display:none;position:absolute;bottom:0;top:%?88?%;left:0;right:0;text-align:center;padding-top:%?203?%;display:block}.no-order-img[data-v-3a807fe9]{width:%?100?%;height:%?100?%;margin-bottom:%?30?%}.no-order .text[data-v-3a807fe9]{font-size:%?30?%;color:#999;text-align:center;margin-bottom:%?30?%}.wrap[data-v-3a807fe9]{height:auto;width:100%;padding-bottom:%?50?%}.box-order[data-v-3a807fe9]{background:#fff;margin:%?30?% %?20?% %?0?% %?20?%;border-radius:%?10?%;padding-bottom:%?30?%}.user[data-v-3a807fe9]{font-size:%?28?%;font-weight:500;color:#333;line-height:%?32?%;display:flex;justify-content:flex-end;align-items:center}.user uni-image[data-v-3a807fe9]{width:%?48?%;height:%?48?%;border-radius:50%;margin-right:%?10?%}.user .fee[data-v-3a807fe9]{font-size:%?24?%;color:#ff3456}.order-header[data-v-3a807fe9]{height:%?90?%;padding:0 %?24?%;line-height:%?90?%;display:flex;justify-content:space-between\r\n    /* border-bottom: 1rpx solid #f4f4f4; */}.order-header .status[data-v-3a807fe9]{display:flex;justify-content:flex-end;align-items:center}.order-header .status .pay-status[data-v-3a807fe9]{padding:%?8?% %?20?%;height:%?28?%;font-size:%?28?%;font-weight:500;color:red;line-height:%?32?%}.order-header .status .order-status[data-v-3a807fe9]{color:#ff3456;font-size:%?28?%}.order-info[data-v-3a807fe9]{padding:%?20?% %?30?%;border-radius:%?10?%;background-color:#fafafa;margin:0 %?30?%;font-size:%?28?%;color:#666}.order-info .row[data-v-3a807fe9]{display:flex;justify-content:space-between;width:100%;padding:%?8?% 0}.order-info .row .label[data-v-3a807fe9]{min-width:%?160?%}.order-info .row .goods-price[data-v-3a807fe9]{color:#ff5151;font-size:%?30?%}.order-info .row .goods-num[data-v-3a807fe9]{font-size:%?28?%;color:#666;height:%?48?%;line-height:%?48?%}.order-info .row .content .user[data-v-3a807fe9]{font-size:%?24?%}.order-info .row .content .user uni-image[data-v-3a807fe9]{width:%?36?%;height:%?36?%}.no-more-order[data-v-3a807fe9]{text-align:center;font-size:%?28?%;margin:%?20?% 0 %?30?% 0;color:#999}.text-red[data-v-3a807fe9]{color:#e54d42}.text-orange[data-v-3a807fe9]{color:#ff8000}.text-green[data-v-3a807fe9]{color:#39b54a}.text-blue[data-v-3a807fe9]{color:#0081ff}",""]),t.exports=e},"92fc":function(t,e,a){var i=a("8ed9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("01695a9e",i,!0,{sourceMap:!1,shadowMode:!1})},c78c:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var i=getApp(),n={data:function(){return{list:[],noMore:0,page:1}},onLoad:function(t){this.getList()},onShow:function(){uni.setNavigationBarTitle({title:this.$lang("提现记录")})},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){this.setData({page:1,list:[]}),this.getList(),setTimeout((function(){uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}),500)},methods:{getList:function(){var t=this,e=this.page;i.globalData.util.request({url:"/commission/withdrawList",data:{page:e}}).then((function(a){a.data.length>0?t.setData({list:t.list.concat(a.data),noMore:0,page:e+1}):t.setData({noMore:1})}))}}};e.default=n},d0b2:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[t.list.length<=0?a("v-uni-view",{staticClass:"no-order"},[a("v-uni-image",{staticClass:"no-order-img",attrs:{src:"/static/images/commission/no-order.png"}}),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t._f("lang")("没有记录")))])],1):a("v-uni-view",{staticClass:"wrap"},[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"box-order"},[a("v-uni-view",{staticClass:"order-header"},[a("v-uni-view",{staticClass:"user"},[a("v-uni-text",[t._v(t._s(e.create_time))])],1),a("v-uni-view",{staticClass:"status"},[a("v-uni-view",{staticClass:"pay-status"},[0==e.status?a("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(t._f("lang")("审核中")))]):t._e(),1==e.status?a("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t._f("lang")("已完成")))]):t._e(),2==e.status?a("v-uni-text",{staticClass:"text-red"},[t._v(t._s(t._f("lang")("被驳回")))]):t._e()],1)],1)],1),a("v-uni-view",{staticClass:"order-info"},[a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("提现方式：")))]),a("v-uni-view",{staticClass:"content"},[t._v(t._s(e.bank_name))])],1),a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("户名：")))]),a("v-uni-view",{staticClass:"content"},[t._v(t._s(e.account_name))])],1),"微信零钱"!=e.bank_name?a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("账号：")))]),a("v-uni-view",{staticClass:"content"},[t._v(t._s(e.account_number))])],1):t._e(),a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("提现金额：")))]),a("v-uni-view",{staticClass:"content"},[t._v("￥"+t._s(e.money))])],1),2==e.status&&e.reject_reason?a("v-uni-view",{staticClass:"row text-red"},[a("v-uni-view",{staticClass:"label"},[t._v(t._s(t._f("lang")("驳回原因：")))]),a("v-uni-view",{staticClass:"content"},[t._v(t._s(e.reject_reason))])],1):t._e()],1)],1)})),t.noMore?a("v-uni-view",{staticClass:"no-more-order"},[t._v(t._s(t._f("lang")("没有更多了~")))]):t._e()],2)],1)},n=[]},f73f:function(t,e,a){"use strict";var i=a("92fc"),n=a.n(i);n.a}}]);