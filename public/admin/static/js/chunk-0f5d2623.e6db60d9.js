(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f5d2623"],{"0e10":function(e,t,u){},1582:function(e,t,u){"use strict";u.r(t);var n=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},a=[],s=u("978a"),r={components:{sidebar:s["a"]},data:function(){return{moduleName:"AI绘画",submenus:[{title:"生成记录",routeName:"ModuleDrawMsg",routeQuery:{}},{title:"参数配置",routeName:"ModuleDrawSetting",routeQuery:{}}]}},methods:{}},i=r,o=(u("4fe7"),u("76b2")),l=Object(o["a"])(i,n,a,!1,null,"68f29ccb",null);t["default"]=l.exports},"4fe7":function(e,t,u){"use strict";u("0e10")},"7e21":function(e,t,u){"use strict";u("c1e3")},"978a":function(e,t,u){"use strict";var n=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e._f("lang")(e.moduleName)))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,n){return u("li",{key:n,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(e._f("lang")(t.title)))])})),0)])},a=[],s=u("e089"),r=(u("51c1"),u("c565"),u("cac0"),u("0f4e"),u("6db4")),i={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},o=i,l=(u("7e21"),u("76b2")),c=Object(l["a"])(o,n,a,!1,null,"557dbbda",null);t["a"]=c.exports},c1e3:function(e,t,u){}}]);