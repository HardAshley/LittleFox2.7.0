(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55d9b948"],{"7e21":function(e,t,u){"use strict";u("c1e3")},"7fa1":function(e,t,u){},"978a":function(e,t,u){"use strict";var r=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e._f("lang")(e.moduleName)))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,r){return u("li",{key:r,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(e._f("lang")(t.title)))])})),0)])},o=[],a=u("e089"),i=(u("51c1"),u("c565"),u("cac0"),u("0f4e"),u("6db4")),n={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},l=n,s=(u("7e21"),u("76b2")),d=Object(s["a"])(l,r,o,!1,null,"557dbbda",null);t["a"]=d.exports},b48e:function(e,t,u){"use strict";u.r(t);var r=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},o=[],a=u("978a"),i={components:{sidebar:a["a"]},data:function(){return{moduleName:"Key池管理",submenus:[{title:"百度文心",routeName:"ModuleKeysWenxin",routeQuery:{}},{title:"讯飞星火",routeName:"ModuleKeysXunfei",routeQuery:{}},{title:"通义千问",routeName:"ModuleKeysTongyi",routeQuery:{}},{title:"腾讯混元",routeName:"ModuleKeysHunyuan",routeQuery:{}},{title:"智谱AI",routeName:"ModuleKeysZhipu",routeQuery:{}},{title:"GPT-3.5",routeName:"ModuleKeysOpenai3",routeQuery:{}},{title:"GPT-4",routeName:"ModuleKeysOpenai4",routeQuery:{}},{title:"微软Azure",routeName:"ModuleKeysAzure",routeQuery:{}},{title:"Claude2",routeName:"ModuleKeysClaude2",routeQuery:{}},{title:"灵犀AI",routeName:"ModuleKeysLxai",routeQuery:{}},{title:"MiniMax",routeName:"ModuleKeysMinimax",routeQuery:{}},{title:"Api2d",routeName:"ModuleKeysApi2d",routeQuery:{}},{title:"意间绘画",routeName:"ModuleKeysYijian",routeQuery:{}}]}},methods:{}},n=i,l=(u("e7ef"),u("76b2")),s=Object(l["a"])(n,r,o,!1,null,"b1274ae0",null);t["default"]=s.exports},c1e3:function(e,t,u){},e7ef:function(e,t,u){"use strict";u("7fa1")}}]);