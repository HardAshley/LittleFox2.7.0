(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8736e11e"],{"011c":function(e,t,u){"use strict";u("16f8")},"16f8":function(e,t,u){},"41da":function(e,t,u){},"5c76":function(e,t,u){"use strict";u.r(t);var n=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},a=[],s=u("978a"),r={components:{sidebar:s["a"]},data:function(){return{moduleName:"通知公告",submenus:[{title:"公告管理",routeName:"ModuleNoticeIndex",routeQuery:{}}]}},methods:{}},i=r,o=(u("011c"),u("1805")),l=Object(o["a"])(i,n,a,!1,null,"e99f96aa",null);t["default"]=l.exports},6785:function(e,t,u){"use strict";u("41da")},"978a":function(e,t,u){"use strict";var n=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e._f("lang")(e.moduleName)))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,n){return u("li",{key:n,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(e._f("lang")(t.title)))])})),0)])},a=[],s=u("52db"),r=(u("c6d2"),u("97ce"),u("582c"),u("772a"),u("6db4")),i={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},o=i,l=(u("6785"),u("1805")),c=Object(l["a"])(o,n,a,!1,null,"557dbbda",null);t["a"]=c.exports}}]);