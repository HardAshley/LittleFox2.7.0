(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cosplay-chat~pages-draw-chat~pages-index-index~pages-write-chat~pages-write-index"],{"048e":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i=r(n("5346")),a=r(n("c45c")),o=r(n("dda5")),u={name:"uv-badge",mixins:[i.default,a.default,o.default],computed:{boxStyle:function(){return{}},badgeStyle:function(){var t={};if(this.color&&(t.color=this.color),this.bgColor&&!this.inverted&&(t.backgroundColor=this.bgColor),this.absolute&&(t.position="absolute",this.offset.length)){var e=this.offset[0],n=this.offset[1]||e;t.top=this.$uv.addUnit(e),t.right=this.$uv.addUnit(n)}return t},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}},propsType:function(){return this.type||"error"}}};e.default=u},"0ccb":function(t,e,n){var r=n("e330"),i=n("50c4"),a=n("577e"),o=n("1148"),u=n("1d80"),c=r(o),s=r("".slice),l=Math.ceil,f=function(t){return function(e,n,r){var o,f,d=a(u(e)),v=i(n),p=d.length,h=void 0===r?" ":a(r);return v<=p||""==h?d:(o=v-p,f=c(h,l(o/h.length)),f.length>o&&(f=s(f,0,o)),t?d+f:f+d)}};t.exports={start:f(!1),end:f(!0)}},1148:function(t,e,n){"use strict";var r=n("5926"),i=n("577e"),a=n("1d80"),o=RangeError;t.exports=function(t){var e=i(a(this)),n="",u=r(t);if(u<0||u==1/0)throw o("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(e+=e))1&u&&(n+=e);return n}},"1c59":function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"45fb":function(t,e,n){"use strict";var r;n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n?r||(r=!0,"function"===typeof t&&t(),setTimeout((function(){r=!1}),e)):r||(r=!0,setTimeout((function(){r=!1,"function"===typeof t&&t()}),e))};e.default=i},"4d90":function(t,e,n){"use strict";var r=n("23e7"),i=n("0ccb").start,a=n("9a0c");r({target:"String",proto:!0,forced:a},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4ec9":function(t,e,n){n("6f48")},"4f96":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,r.default)(t)||(0,i.default)(t)||(0,a.default)(t)||(0,o.default)()};var r=u(n("0d21")),i=u(n("db90")),a=u(n("06c5")),o=u(n("3d8c"));function u(t){return t&&t.__esModule?t:{default:t}}},"4fadc":function(t,e,n){var r=n("23e7"),i=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return i(t)}})},5346:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={}},6062:function(t,e,n){n("1c59")},"64bc":function(t,e,n){"use strict";var r=n("826d"),i=n.n(r);i.a},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("6964"),o=n("0366"),u=n("19aa"),c=n("7234"),s=n("2266"),l=n("c6d2"),f=n("4754"),d=n("2626"),v=n("83ab"),p=n("f183").fastKey,h=n("69f3"),g=h.set,b=h.getterFor;t.exports={getConstructor:function(t,e,n,l){var f=t((function(t,r){u(t,d),g(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),v||(t.size=0),c(r)||s(r,t[l],{that:t,AS_ENTRIES:n})})),d=f.prototype,h=b(e),m=function(t,e,n){var r,i,a=h(t),o=y(t,e);return o?o.value=n:(a.last=o={index:i=p(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),v?a.size++:t.size++,"F"!==i&&(a.index[i]=o)),t},y=function(t,e){var n,r=h(t),i=p(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return a(d,{clear:function(){var t=h(this),e=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,v?t.size=0:this.size=0},delete:function(t){var e=h(this),n=y(this,t);if(n){var r=n.next,i=n.previous;delete e.index[n.index],n.removed=!0,i&&(i.next=r),r&&(r.previous=i),e.first==n&&(e.first=r),e.last==n&&(e.last=i),v?e.size--:this.size--}return!!n},forEach:function(t){var e,n=h(this),r=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),a(d,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),v&&r(d,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=b(e),a=b(r);l(t,e,(function(t,e){g(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?f("keys"==e?n.key:"values"==e?n.value:[n.key,n.value],!1):(t.target=void 0,f(void 0,!0))}),n?"entries":"values",!n,!0),d(e)}}},"6f48":function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"6fc5":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.amount=function(t){return/^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(t)},e.array=function(t){if("function"===typeof Array.isArray)return Array.isArray(t);return"[object Array]"===Object.prototype.toString.call(t)},e.carNo=function(t){if(7===t.length)return/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/.test(t);if(8===t.length)return/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/.test(t);return!1},e.chinese=function(t){return/^[\u4e00-\u9fa5]+$/gi.test(t)},e.code=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return new RegExp("^\\d{".concat(e,"}$")).test(t)},e.contains=function(t,e){return t.indexOf(e)>=0},e.date=function(t){if(!t)return!1;a(t)&&(t=+t);return!/Invalid|NaN/.test(new Date(t).toString())},e.dateISO=function(t){return/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},e.digits=function(t){return/^\d+$/.test(t)},e.email=function(t){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)},e.empty=function(t){switch((0,i.default)(t)){case"undefined":return!0;case"string":if(0==t.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,"").length)return!0;break;case"boolean":if(!t)return!0;break;case"number":if(0===t||isNaN(t))return!0;break;case"object":if(null===t||0===t.length)return!0;for(var e in t)return!1;return!0}return!1},e.enOrNum=function(t){return/^[0-9a-zA-Z]*$/g.test(t)},e.func=u,e.idCard=function(t){return/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(t)},e.image=function(t){var e=t.split("?")[0];return/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(e)},e.jsonString=function(t){if("string"===typeof t)try{var e=JSON.parse(t);return!("object"!==(0,i.default)(e)||!e)}catch(n){return!1}return!1},e.landline=function(t){return/^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(t)},e.letter=function(t){return/^[a-zA-Z]*$/.test(t)},e.mobile=function(t){return/^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(t)},e.number=a,e.object=o,e.promise=function(t){return o(t)&&u(t.then)&&u(t.catch)},e.range=function(t,e){return t>=e[0]&&t<=e[1]},e.rangeLength=function(t,e){return t.length>=e[0]&&t.length<=e[1]},e.regExp=function(t){return t&&"[object RegExp]"===Object.prototype.toString.call(t)},e.string=function(t){return"string"===typeof t},e.url=function(t){return/^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(t)},e.video=function(t){return/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(t)};var i=r(n("53ca"));function a(t){return/^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(t)}function o(t){return"[object Object]"===Object.prototype.toString.call(t)}function u(t){return"function"===typeof t}n("ac1f"),n("00b4"),n("d401"),n("d3b7"),n("25f0"),n("c975"),n("5319"),n("4d63"),n("c607"),n("2c3e")},"7e99":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={uvBadge:n("ee46").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uv-tabs",style:[t.$uv.addStyle(t.customStyle)]},[n("v-uni-view",{staticClass:"uv-tabs__wrapper"},[t._t("left"),n("v-uni-view",{staticClass:"uv-tabs__wrapper__scroll-view-wrapper"},[n("v-uni-scroll-view",{ref:"uv-tabs__wrapper__scroll-view",staticClass:"uv-tabs__wrapper__scroll-view",attrs:{"scroll-x":t.scrollable,"scroll-left":t.scrollLeft,"scroll-with-animation":!0,"show-scrollbar":!1}},[n("v-uni-view",{ref:"uv-tabs__wrapper__nav",staticClass:"uv-tabs__wrapper__nav",style:{flex:t.scrollable?"":1}},[t._l(t.list,(function(e,r){return n("v-uni-view",{key:r,ref:"uv-tabs__wrapper__nav__item-"+r,refInFor:!0,staticClass:"uv-tabs__wrapper__nav__item",class:["uv-tabs__wrapper__nav__item-"+r,e.disabled&&"uv-tabs__wrapper__nav__item--disabled"],style:[{flex:t.scrollable?"":1},t.$uv.addStyle(t.itemStyle)],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickHandler(e,r)}}},[n("v-uni-text",{staticClass:"uv-tabs__wrapper__nav__item__text",class:[e.disabled&&"uv-tabs__wrapper__nav__item__text--disabled"],style:[t.textStyle(r)]},[t._v(t._s(e[t.keyName]))]),n("uv-badge",{attrs:{show:!(!e.badge||!(e.badge.show||e.badge.isDot||e.badge.value)),isDot:e.badge&&e.badge.isDot||t.propsBadge.isDot,value:e.badge&&e.badge.value||t.propsBadge.value,max:e.badge&&e.badge.max||t.propsBadge.max,type:e.badge&&e.badge.type||t.propsBadge.type,showZero:e.badge&&e.badge.showZero||t.propsBadge.showZero,bgColor:e.badge&&e.badge.bgColor||t.propsBadge.bgColor,color:e.badge&&e.badge.color||t.propsBadge.color,shape:e.badge&&e.badge.shape||t.propsBadge.shape,numberType:e.badge&&e.badge.numberType||t.propsBadge.numberType,inverted:e.badge&&e.badge.inverted||t.propsBadge.inverted,customStyle:"margin-left: 4px;"}})],1)})),n("v-uni-view",{ref:"uv-tabs__wrapper__nav__line",staticClass:"uv-tabs__wrapper__nav__line",style:[{width:t.$uv.addUnit(t.lineWidth),transform:"translate("+t.lineOffsetLeft+"px)",transitionDuration:(t.firstTime?0:t.duration)+"ms",height:t.firstTime?0:t.$uv.addUnit(t.lineHeight),background:t.lineColor,backgroundSize:t.lineBgSize}]})],2)],1)],1),t._t("right")],2)],1)},a=[]},"826d":function(t,e,n){var r=n("a25b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("63885de0",r,!0,{sourceMap:!1,shadowMode:!1})},"8a2b":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i,a,o=r(n("5530")),u={props:(0,o.default)({duration:{type:Number,default:300},list:{type:Array,default:function(){return[]}},lineColor:{type:String,default:"#3c9cff"},activeStyle:{type:[String,Object],default:function(){return{color:"#303133"}}},inactiveStyle:{type:[String,Object],default:function(){return{color:"#606266"}}},lineWidth:{type:[String,Number],default:20},lineHeight:{type:[String,Number],default:3},lineBgSize:{type:String,default:"cover"},itemStyle:{type:[String,Object],default:function(){return{height:"44px"}}},scrollable:{type:Boolean,default:!0},current:{type:[Number,String],default:0},keyName:{type:String,default:"name"}},null===(i=uni.$uv)||void 0===i||null===(a=i.props)||void 0===a?void 0:a.tabs)};e.default=u},"9a0c":function(t,e,n){var r=n("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},a25b:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6f5b1fc6], uni-scroll-view[data-v-6f5b1fc6], uni-swiper-item[data-v-6f5b1fc6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-tabs__wrapper[data-v-6f5b1fc6]{display:flex;flex-direction:row;align-items:center}.uv-tabs__wrapper__scroll-view-wrapper[data-v-6f5b1fc6]{flex:1;overflow:auto hidden}.uv-tabs__wrapper__scroll-view[data-v-6f5b1fc6]{display:flex;flex-direction:row;flex:1}.uv-tabs__wrapper__nav[data-v-6f5b1fc6]{display:flex;flex-direction:row;position:relative}.uv-tabs__wrapper__nav__item[data-v-6f5b1fc6]{padding:0 11px;display:flex;flex-direction:row;align-items:center;justify-content:center}.uv-tabs__wrapper__nav__item--disabled[data-v-6f5b1fc6]{cursor:not-allowed}.uv-tabs__wrapper__nav__item__text[data-v-6f5b1fc6]{font-size:15px;color:#606266}.uv-tabs__wrapper__nav__item__text--disabled[data-v-6f5b1fc6]{color:#c8c9cc!important}.uv-tabs__wrapper__nav__line[data-v-6f5b1fc6]{height:3px;background:#3c9cff;width:30px;position:absolute;bottom:2px;border-radius:100px;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s}',""]),t.exports=e},aff5:function(t,e,n){var r=n("23e7");r({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},b178:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4"),n("d3b7");var i=r(n("c7eb")),a=r(n("1da1")),o=r(n("d4ec")),u=r(n("bee2")),c=n("dde9"),s=function(){function t(){(0,o.default)(this,t),this.config={type:"navigateTo",url:"",delta:1,params:{},animationType:"pop-in",animationDuration:300,intercept:!1,events:{}},this.route=this.route.bind(this)}return(0,u.default)(t,[{key:"addRootPath",value:function(t){return"/"===t[0]?t:"/".concat(t)}},{key:"mixinParam",value:function(t,e){t=t&&this.addRootPath(t);var n="";return/.*\/.*\?.*=.*/.test(t)?(n=(0,c.queryParams)(e,!1),t+"&".concat(n)):(n=(0,c.queryParams)(e),t+n)}},{key:"route",value:function(){var t=(0,a.default)((0,i.default)().mark((function t(){var e,n,r,a,o=arguments;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]?o[0]:{},n=o.length>1&&void 0!==o[1]?o[1]:{},r={},"string"===typeof e?(r.url=this.mixinParam(e,n),r.type="navigateTo"):(r=(0,c.deepMerge)(this.config,e),r.url=this.mixinParam(e.url,e.params)),r.url!==(0,c.page)()){t.next=6;break}return t.abrupt("return");case 6:if(n.intercept&&(r.intercept=n.intercept),r.params=n,r=(0,c.deepMerge)(this.config,r),"function"!==typeof r.intercept){t.next=16;break}return t.next=12,new Promise((function(t,e){r.intercept(r,t)}));case 12:a=t.sent,a&&this.openPage(r),t.next=17;break;case 16:this.openPage(r);case 17:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"openPage",value:function(t){var e=t.url,n=(t.type,t.delta),r=t.animationType,i=t.animationDuration,a=t.events;"navigateTo"!=t.type&&"to"!=t.type||uni.navigateTo({url:e,animationType:r,animationDuration:i,events:a}),"redirectTo"!=t.type&&"redirect"!=t.type||uni.redirectTo({url:e}),"switchTab"!=t.type&&"tab"!=t.type||uni.switchTab({url:e}),"reLaunch"!=t.type&&"launch"!=t.type||uni.reLaunch({url:e}),"navigateBack"!=t.type&&"back"!=t.type||uni.navigateBack({delta:n})}}]),t}(),l=(new s).route;e.default=l},b560:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=null;var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null!==r&&clearTimeout(r),n){var i=!r;r=setTimeout((function(){r=null}),e),i&&"function"===typeof t&&t()}else r=setTimeout((function(){"function"===typeof t&&t()}),e)};e.default=i},b5d5:function(t,e,n){"use strict";n.r(e);var r=n("048e"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},c371:function(t,e,n){var r=n("e50b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("6a359024",r,!0,{sourceMap:!1,shadowMode:!1})},c45c:function(t,e,n){"use strict";n("7a82");var r=n("dbce").default,i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d81d"),n("b64b"),n("d3b7"),n("ac1f"),n("c975"),n("14d9"),n("a434");var a=i(n("5530")),o=r(n("dde9")),u=r(n("6fc5")),c=i(n("b178")),s=i(n("b560")),l=i(n("45fb")),f={props:{customStyle:{type:[Object,String],default:function(){return{}}},customClass:{type:String,default:""},url:{type:String,default:""},linkType:{type:String,default:"navigateTo"}},data:function(){return{}},onLoad:function(){this.$uv.getRect=this.$uvGetRect},created:function(){this.$uv.getRect=this.$uvGetRect},computed:{$uv:function(){var t,e,n;return(0,a.default)((0,a.default)({},o),{},{test:u,route:c.default,debounce:s.default,throttle:l.default,unit:null===(t=uni)||void 0===t||null===(e=t.$uv)||void 0===e||null===(n=e.config)||void 0===n?void 0:n.unit})},bem:function(){return function(t,e,n){var r=this,i="uv-".concat(t,"--"),a={};return e&&e.map((function(t){a[i+r[t]]=!0})),n&&n.map((function(t){r[t]?a[i+t]=r[t]:delete a[i+t]})),Object.keys(a)}}},methods:{openPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"url",e=this[t];e&&uni[this.linkType]({url:e})},$uvGetRect:function(t,e){var n=this;return new Promise((function(r){uni.createSelectorQuery().in(n)[e?"selectAll":"select"](t).boundingClientRect((function(t){e&&Array.isArray(t)&&t.length&&r(t),!e&&t&&r(t)})).exec()}))},getParentData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.parent||(this.parent={}),this.parent=this.$uv.$parent.call(this,e),this.parent.children&&-1===this.parent.children.indexOf(this)&&this.parent.children.push(this),this.parent&&this.parentData&&Object.keys(this.parentData).map((function(e){t.parentData[e]=t.parent[e]}))},preventEvent:function(t){t&&"function"===typeof t.stopPropagation&&t.stopPropagation()},noop:function(t){this.preventEvent(t)}},onReachBottom:function(){uni.$emit("uvOnReachBottom")},beforeDestroy:function(){var t=this;if(this.parent&&u.array(this.parent.children)){var e=this.parent.children;e.map((function(n,r){n===t&&e.splice(r,1)}))}},unmounted:function(){var t=this;if(this.parent&&u.array(this.parent.children)){var e=this.parent.children;e.map((function(n,r){n===t&&e.splice(r,1)}))}}};e.default=f},d274:function(t,e,n){"use strict";var r=n("c371"),i=n.n(r);i.a},d380:function(t,e,n){"use strict";(function(t){n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.divide=p,e.enableBoundaryChecking=g,e.minus=v,e.plus=d,e.round=h,e.times=f;var i=r(n("4f96"));n("acd8"),n("a9e3"),n("ac1f"),n("1276"),n("d401"),n("d3b7"),n("25f0"),n("c975"),n("5319"),n("aff5"),n("e6e1"),n("fb6a"),n("159b");var a=!0;function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return+parseFloat(Number(t).toPrecision(e))}function u(t){var e=t.toString().split(/[eE]/),n=(e[0].split(".")[1]||"").length-+(e[1]||0);return n>0?n:0}function c(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var e=u(t);return e>0?o(Number(t)*Math.pow(10,e)):Number(t)}function s(e){a&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&t("warn","".concat(e," 超出了精度限制，结果可能不正确")," at uni_modules/uv-ui-tools/libs/function/digit.js:45")}function l(t,e){var n=(0,i.default)(t),r=n[0],a=n[1],o=n.slice(2),u=e(r,a);return o.forEach((function(t){u=e(u,t)})),u}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e.length>2)return l(e,f);var r=e[0],i=e[1],a=c(r),o=c(i),d=u(r)+u(i),v=a*o;return s(v),v/Math.pow(10,d)}function d(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e.length>2)return l(e,d);var r=e[0],i=e[1],a=Math.pow(10,Math.max(u(r),u(i)));return(f(r,a)+f(i,a))/a}function v(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e.length>2)return l(e,v);var r=e[0],i=e[1],a=Math.pow(10,Math.max(u(r),u(i)));return(f(r,a)-f(i,a))/a}function p(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e.length>2)return l(e,p);var r=e[0],i=e[1],a=c(r),d=c(i);return s(a),s(d),f(a/d,o(Math.pow(10,u(i)-u(r))))}function h(t,e){var n=Math.pow(10,e),r=p(Math.round(Math.abs(f(t,n))),n);return t<0&&0!==r&&(r=f(r,-1)),r}function g(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];a=t}var b={times:f,plus:d,minus:v,divide:p,round:h,enableBoundaryChecking:g};e.default=b}).call(this,n("0de9")["log"])},d479:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("13d5"),n("d3b7"),n("fb6a"),n("ac1f"),n("00b4"),n("99af"),n("3ca3"),n("ddb0"),n("d81d");var i=r(n("3835")),a=r(n("5530")),o=r(n("c7eb")),u=r(n("1da1")),c=r(n("5346")),s=r(n("c45c")),l=r(n("dda5")),f=r(n("8a2b")),d={name:"uv-tabs",emits:["click","change"],mixins:[c.default,s.default,f.default],data:function(){return{firstTime:!0,scrollLeft:0,scrollViewWidth:0,lineOffsetLeft:0,tabsRect:{left:0},innerCurrent:0,moving:!1}},watch:{current:{immediate:!0,handler:function(t,e){var n=this;t!==this.innerCurrent&&(this.innerCurrent=t,this.$nextTick((function(){n.resize()})))}},list:function(){var t=this;this.$nextTick((function(){t.resize()}))}},computed:{textStyle:function(){var t=this;return function(e){var n={},r=e==t.innerCurrent?t.$uv.addStyle(t.activeStyle):t.$uv.addStyle(t.inactiveStyle);return t.list[e].disabled&&(n.color="#c8c9cc"),t.$uv.deepMerge(r,n)}},propsBadge:function(){return l.default}},mounted:function(){var t=this;return(0,u.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.init();case 1:case"end":return e.stop()}}),e)})))()},methods:{setLineLeft:function(){var t=this,e=this.list[this.innerCurrent];if(e){var n=this.list.slice(0,this.innerCurrent).reduce((function(t,e){return t+e.rect.width}),0),r=this.$uv.getPx(this.lineWidth);this.$uv.test.number(this.lineWidth)&&this.$uv.unit&&(r=this.$uv.getPx("".concat(this.lineWidth).concat(this.$uv.unit))),this.lineOffsetLeft=n+(e.rect.width-r)/2,this.firstTime&&setTimeout((function(){t.firstTime=!1}),20)}},animation:function(t){},clickHandler:function(t,e){var n=this;this.$emit("click",(0,a.default)((0,a.default)({},t),{},{index:e})),t.disabled||(this.innerCurrent!=e&&this.$emit("change",(0,a.default)((0,a.default)({},t),{},{index:e})),this.innerCurrent=e,this.$nextTick((function(){n.resize()})))},init:function(){var t=this;this.$uv.sleep().then((function(){t.resize()}))},setScrollLeft:function(){var t=this.list[this.innerCurrent],e=this.list.slice(0,this.innerCurrent).reduce((function(t,e){return t+e.rect.width}),0),n=this.$uv.sys().windowWidth,r=e-(this.tabsRect.width-t.rect.width)/2-(n-this.tabsRect.right)/2+this.tabsRect.left/2;r=Math.min(r,this.scrollViewWidth-this.tabsRect.width),this.scrollLeft=Math.max(0,r)},resize:function(){var t=this;0!==this.list.length&&Promise.all([this.getTabsRect(),this.getAllItemRect()]).then((function(e){var n=(0,i.default)(e,2),r=n[0],a=n[1],o=void 0===a?[]:a;t.tabsRect=r,t.scrollViewWidth=0,o.map((function(e,n){t.scrollViewWidth+=e.width,t.list[n].rect=e})),t.setLineLeft(),t.setScrollLeft()}))},getTabsRect:function(){var t=this;return new Promise((function(e){t.queryRect("uv-tabs__wrapper__scroll-view").then((function(t){return e(t)}))}))},getAllItemRect:function(){var t=this;return new Promise((function(e){var n=t.list.map((function(e,n){return t.queryRect("uv-tabs__wrapper__nav__item-".concat(n),!0)}));Promise.all(n).then((function(t){return e(t)}))}))},queryRect:function(t,e){var n=this;return new Promise((function(e){n.$uvGetRect(".".concat(t)).then((function(t){e(t)}))}))}}};e.default=d},dda5:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i,a,o=r(n("5530")),u={props:(0,o.default)({isDot:{type:Boolean,default:!1},value:{type:[Number,String],default:""},show:{type:Boolean,default:!0},max:{type:[Number,String],default:999},type:{type:[String,void 0,null],default:"error"},showZero:{type:Boolean,default:!1},bgColor:{type:[String,null],default:null},color:{type:[String,null],default:null},shape:{type:[String,void 0,null],default:"circle"},numberType:{type:[String,void 0,null],default:"overflow"},offset:{type:Array,default:function(){return[]}},inverted:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1}},null===(i=uni.$uv)||void 0===i||null===(a=i.props)||void 0===a?void 0:a.badge)};e.default=u},dde9:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.$parent=c,e.addStyle=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"object";if((0,o.empty)(t)||"object"===(0,a.default)(t)&&"object"===e||"string"===e&&"string"===typeof t)return t;if("object"===e){t=f(t);for(var n=t.split(";"),r={},i=0;i<n.length;i++)if(n[i]){var u=n[i].split(":");r[f(u[0])]=f(u[1])}return r}var c="";for(var s in t){var l=s.replace(/([A-Z])/g,"-$1").toLowerCase();c+="".concat(l,":").concat(t[s],";")}return f(c)},e.addUnit=function(){var t,e,n,r,i,a,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null!==(t=uni)&&void 0!==t&&null!==(e=t.$uv)&&void 0!==e&&null!==(n=e.config)&&void 0!==n&&n.unit?null===(r=uni)||void 0===r||null===(i=r.$uv)||void 0===i||null===(a=i.config)||void 0===a?void 0:a.unit:"px";return u=String(u),(0,o.number)(u)?"".concat(u).concat(c):u},e.deepClone=s,e.deepMerge=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=s(e),"object"!==(0,a.default)(e)||null===e||"object"!==(0,a.default)(n)||null===n)return e;var r=Array.isArray(e)?e.slice():Object.assign({},e);for(var i in n)if(n.hasOwnProperty(i)){var o=n[i],u=r[i];o instanceof Date?r[i]=new Date(o):o instanceof RegExp?r[i]=new RegExp(o):o instanceof Map?r[i]=new Map(o):o instanceof Set?r[i]=new Set(o):"object"===(0,a.default)(o)&&null!==o?r[i]=t(u,o):r[i]=o}return r},e.error=function(t){0},e.formValidate=function(t,e){var n=c.call(t,"uv-form-item"),r=c.call(t,"uv-form");n&&r&&r.validateField(n.prop,(function(){}),e)},e.getDuration=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=parseInt(t);if(e)return/s$/.test(t)?t:"".concat(t,t>30?"ms":"s");return/ms$/.test(t)?n:/s$/.test(t)?n>30?n:1e3*n:n},e.getHistoryPage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=getCurrentPages(),n=e.length;return e[n-1+t]},e.getProperty=function(t,e){if(!t)return;if("string"!==typeof e||""===e)return"";if(-1!==e.indexOf(".")){for(var n=e.split("."),r=t[n[0]]||{},i=1;i<n.length;i++)r&&(r=r[n[i]]);return r}return t[e]},e.getPx=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,o.number)(t))return e?"".concat(t,"px"):Number(t);if(/(rpx|upx)$/.test(t))return e?"".concat(uni.upx2px(parseInt(t)),"px"):Number(uni.upx2px(parseInt(t)));return e?"".concat(parseInt(t),"px"):parseInt(t)},e.guid=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(n=n||r.length,t)for(var a=0;a<t;a++)i[a]=r[0|Math.random()*n];else{var o;i[8]=i[13]=i[18]=i[23]="-",i[14]="4";for(var u=0;u<36;u++)i[u]||(o=0|16*Math.random(),i[u]=r[19==u?3&o|8:o])}if(e)return i.shift(),"u".concat(i.join(""));return i.join("")},e.os=function(){return uni.getSystemInfoSync().platform.toLowerCase()},e.padZero=function(t){return"00".concat(t).slice(-2)},e.page=function(){var t,e=getCurrentPages(),n=null===(t=e[e.length-1])||void 0===t?void 0:t.route;return"/".concat(n||"")},e.pages=function(){var t=getCurrentPages();return t},e.priceFormat=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";t="".concat(t).replace(/[^0-9+-Ee.]/g,"");var i=isFinite(+t)?+t:0,a=isFinite(+e)?Math.abs(e):0,o="undefined"===typeof r?",":r,c="undefined"===typeof n?".":n,s="";s=(a?(0,u.round)(i,a)+"":"".concat(Math.round(i))).split(".");var l=/(-?\d+)(\d{3})/;while(l.test(s[0]))s[0]=s[0].replace(l,"$1".concat(o,"$2"));(s[1]||"").length<a&&(s[1]=s[1]||"",s[1]+=new Array(a-s[1].length+1).join("0"));return s.join(c)},e.queryParams=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"brackets",r=e?"?":"",i=[];-1==["indices","brackets","repeat","comma"].indexOf(n)&&(n="brackets");var a=function(e){var r=t[e];if(["",void 0,null].indexOf(r)>=0)return"continue";if(r.constructor===Array)switch(n){case"indices":for(var a=0;a<r.length;a++)i.push("".concat(e,"[").concat(a,"]=").concat(r[a]));break;case"brackets":r.forEach((function(t){i.push("".concat(e,"[]=").concat(t))}));break;case"repeat":r.forEach((function(t){i.push("".concat(e,"=").concat(t))}));break;case"comma":var o="";r.forEach((function(t){o+=(o?",":"")+t})),i.push("".concat(e,"=").concat(o));break;default:r.forEach((function(t){i.push("".concat(e,"[]=").concat(t))}))}else i.push("".concat(e,"=").concat(r))};for(var o in t)a(o);return i.length?r+i.join("&"):""},e.random=function(t,e){if(t>=0&&e>0&&e>=t){var n=e-t+1;return Math.floor(Math.random()*n+t)}return 0},e.randomArray=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.sort((function(){return Math.random()-.5}))},e.range=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.max(t,Math.min(e,Number(n)))},e.setConfig=function(t){var e=t.props,n=void 0===e?{}:e,r=t.config,i=void 0===r?{}:r,a=t.color,o=void 0===a?{}:a,u=t.zIndex,c=void 0===u?{}:u,s=uni.$uv.deepMerge;uni.$uv.config=s(uni.$uv.config,i),uni.$uv.props=s(uni.$uv.props,n),uni.$uv.color=s(uni.$uv.color,o),uni.$uv.zIndex=s(uni.$uv.zIndex,c)},e.setProperty=function(t,e,n){if(!t)return;if("string"!==typeof e||""===e);else if(-1!==e.indexOf(".")){var r=e.split(".");(function t(e,n,r){if(1!==n.length)while(n.length>1){var i=n[0];e[i]&&"object"===(0,a.default)(e[i])||(e[i]={});n.shift();t(e[i],n,r)}else e[n[0]]=r})(t,r,n)}else t[e]=n},e.sleep=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return new Promise((function(e){setTimeout((function(){e()}),t)}))},e.sys=function(){return uni.getSystemInfoSync()},e.timeFormat=l,e.timeFrom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd";null==t&&(t=Number(new Date));t=parseInt(t),10==t.toString().length&&(t*=1e3);var n=(new Date).getTime()-t;n=parseInt(n/1e3);var r="";switch(!0){case n<300:r="刚刚";break;case n>=300&&n<3600:r="".concat(parseInt(n/60),"分钟前");break;case n>=3600&&n<86400:r="".concat(parseInt(n/3600),"小时前");break;case n>=86400&&n<2592e3:r="".concat(parseInt(n/86400),"天前");break;default:r=!1===e?n>=2592e3&&n<31536e3?"".concat(parseInt(n/2592e3),"个月前"):"".concat(parseInt(n/31536e3),"年前"):l(t,e)}return r},e.toast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;uni.showToast({title:String(t),icon:"none",duration:e})},e.trim=f,e.type2icon=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];-1==["primary","info","error","warning","success"].indexOf(t)&&(t="success");var n="";switch(t){case"primary":n="info-circle";break;case"info":n="info-circle";break;case"error":n="close-circle";break;case"warning":n="error-circle";break;case"success":n="checkmark-circle";break;default:n="checkmark-circle"}e&&(n+="-fill");return n};var i=r(n("3835")),a=r(n("53ca"));n("a9e3"),n("ac1f"),n("00b4"),n("e25e"),n("d3b7"),n("5319"),n("99af"),n("3ca3"),n("10d1"),n("ddb0"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("4ec9"),n("a630"),n("6062"),n("d81d"),n("3410"),n("4fadc"),n("fb6a"),n("4e82"),n("4d90"),n("d9e2"),n("d401"),n("498a"),n("caad"),n("2532"),n("c975"),n("14d9"),n("159b");var o=n("6fc5"),u=n("d380");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this.$parent;while(e){if(!e.$options||e.$options.name===t)return e;e=e.$parent}return!1}function s(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null===t||"object"!==(0,a.default)(t))return t;if(n.has(t))return n.get(t);if(t instanceof Date)e=new Date(t.getTime());else if(t instanceof RegExp)e=new RegExp(t);else if(t instanceof Map)e=new Map(Array.from(t,(function(t){var e=(0,i.default)(t,2),r=e[0],a=e[1];return[r,s(a,n)]})));else if(t instanceof Set)e=new Set(Array.from(t,(function(t){return s(t,n)})));else if(Array.isArray(t))e=t.map((function(t){return s(t,n)}));else if("[object Object]"===Object.prototype.toString.call(t)){e=Object.create(Object.getPrototypeOf(t)),n.set(t,e);for(var r=0,o=Object.entries(t);r<o.length;r++){var u=(0,i.default)(o[r],2),c=u[0],l=u[1];e[c]=s(l,n)}}else e=Object.assign({},t);return n.set(t,e),e}function l(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd";t=e?/^\d{10}$/.test(null===e||void 0===e?void 0:e.toString().trim())?new Date(1e3*e):"string"===typeof e&&/^\d+$/.test(e.trim())?new Date(Number(e)):"string"===typeof e&&e.includes("-")&&!e.includes("T")?new Date(e.replace(/-/g,"/")):new Date(e):new Date;var r={y:t.getFullYear().toString(),m:(t.getMonth()+1).toString().padStart(2,"0"),d:t.getDate().toString().padStart(2,"0"),h:t.getHours().toString().padStart(2,"0"),M:t.getMinutes().toString().padStart(2,"0"),s:t.getSeconds().toString().padStart(2,"0")};for(var a in r){var o=new RegExp("".concat(a,"+")).exec(n)||[],u=(0,i.default)(o,1),c=u[0];if(c){var s="y"===a&&2===c.length?2:0;n=n.replace(c,r[a].slice(s))}}return n}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";return t=String(t),"both"==e?t.replace(/^\s+|\s+$/g,""):"left"==e?t.replace(/^\s*/,""):"right"==e?t.replace(/(\s*$)/g,""):"all"==e?t.replace(/\s+/g,""):t}String.prototype.padStart||(String.prototype.padStart=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("[object String]"!==Object.prototype.toString.call(e))throw new TypeError("fillString must be String");var n=this;if(n.length>=t)return String(n);var r=t-n.length,i=Math.ceil(r/e.length);while(i>>=1)e+=e,1===i&&(e+=e);return e.slice(0,r)+n})},e10e:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show&&(0!==Number(t.value)||t.showZero||t.isDot)?n("v-uni-text",{staticClass:"uv-badge",class:[t.isDot?"uv-badge--dot":"uv-badge--not-dot",t.inverted&&"uv-badge--inverted","horn"===t.shape&&"uv-badge--horn","uv-badge--"+t.propsType+(t.inverted?"--inverted":"")],style:[t.$uv.addStyle(t.customStyle),t.badgeStyle]},[t._v(t._s(t.isDot?"":t.showValue))]):t._e()},i=[]},e50b:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-84c0c8a4], uni-scroll-view[data-v-84c0c8a4], uni-swiper-item[data-v-84c0c8a4]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-badge[data-v-84c0c8a4]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;display:flex;flex-direction:row;line-height:11px;text-align:center;font-size:11px;color:#fff}.uv-badge--dot[data-v-84c0c8a4]{height:8px;width:8px}.uv-badge--inverted[data-v-84c0c8a4]{font-size:13px}.uv-badge--not-dot[data-v-84c0c8a4]{padding:2px 5px}.uv-badge--horn[data-v-84c0c8a4]{border-bottom-left-radius:0}.uv-badge--primary[data-v-84c0c8a4]{background-color:#3c9cff}.uv-badge--primary--inverted[data-v-84c0c8a4]{color:#3c9cff}.uv-badge--error[data-v-84c0c8a4]{background-color:#f56c6c}.uv-badge--error--inverted[data-v-84c0c8a4]{color:#f56c6c}.uv-badge--success[data-v-84c0c8a4]{background-color:#5ac725}.uv-badge--success--inverted[data-v-84c0c8a4]{color:#5ac725}.uv-badge--info[data-v-84c0c8a4]{background-color:#909399}.uv-badge--info--inverted[data-v-84c0c8a4]{color:#909399}.uv-badge--warning[data-v-84c0c8a4]{background-color:#f9ae3d}.uv-badge--warning--inverted[data-v-84c0c8a4]{color:#f9ae3d}',""]),t.exports=e},e6e1:function(t,e,n){var r=n("23e7");r({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991})},ee46:function(t,e,n){"use strict";n.r(e);var r=n("e10e"),i=n("b5d5");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("d274");var o=n("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"84c0c8a4",null,!1,r["a"],void 0);e["default"]=u.exports},f1fe:function(t,e,n){"use strict";n.r(e);var r=n("d479"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},fc75:function(t,e,n){"use strict";n.r(e);var r=n("7e99"),i=n("f1fe");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("64bc");var o=n("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"6f5b1fc6",null,!1,r["a"],void 0);e["default"]=u.exports}}]);