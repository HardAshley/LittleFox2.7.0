(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5c5aa62"],{"04f0":function(e,t,a){},"0d576":function(e,t,a){"use strict";a.r(t);var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),a("router-view",{attrs:{name:"subRouter"}})],1)},n=[],s=a("978a"),r={components:{sidebar:s["a"]},data:function(){return{moduleName:"AI自由对话",submenus:[{title:"参数配置",routeName:"ModuleChatSetting",routeQuery:{}}]}},methods:{}},i=r,o=(a("6b6a"),a("1805")),l=Object(o["a"])(i,u,n,!1,null,"62f36e2a",null);t["default"]=l.exports},"41da":function(e,t,a){},6785:function(e,t,a){"use strict";a("41da")},"6b6a":function(e,t,a){"use strict";a("04f0")},"978a":function(e,t,a){"use strict";var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[a("div",{staticClass:"module-name"},[e._v(e._s(e._f("lang")(e.moduleName)))]),a("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,u){return a("li",{key:u,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(a){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(e._f("lang")(t.title)))])})),0)])},n=[],s=a("52db"),r=(a("c6d2"),a("97ce"),a("582c"),a("772a"),a("6db4")),i={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},o=i,l=(a("6785"),a("1805")),c=Object(l["a"])(o,u,n,!1,null,"557dbbda",null);t["a"]=c.exports}}]);