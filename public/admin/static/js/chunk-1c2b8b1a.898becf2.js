(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c2b8b1a"],{"11c2":function(t,e,a){"use strict";a("17f0")},"17f0":function(t,e,a){},"3fd5":function(t,e,a){"use strict";a("de86")},"5c82":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.showForm(0)}}},[t._v(t._s(t._f("lang")("新增vip套餐")))])],1),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","row-key":"id","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"weight",label:t._f("lang")("权重"),width:"100"}}),a("el-table-column",{attrs:{prop:"num",label:t._f("lang")("时长"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.num)+" "+t._s(t._f("lang")("个月"))+" ")]}}])}),a("el-table-column",{attrs:{prop:"price",label:t._f("lang")("售价"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.price)+" "+t._s(t._f("lang")("元")))]),e.row.market_price?a("span",{staticStyle:{"text-decoration":"line-through","margin-left":"10px",color:"#999"}},[t._v(t._s(e.row.market_price)+t._s(t._f("lang")("元")))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"sales",label:t._f("lang")("销量"),width:"100"}}),a("el-table-column",{attrs:{prop:"status",label:t._f("lang")("是否上架"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.setStatus(e.row.id,a)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{attrs:{prop:"is_default",label:t._f("lang")("是否默认"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.setDefault(e.row.id,a)}},model:{value:e.row.is_default,callback:function(a){t.$set(e.row,"is_default",a)},expression:"scope.row.is_default"}})]}}])}),a("el-table-column",{attrs:{label:t._f("lang")("操作"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showForm(e.row.id)}}},[t._v(t._s(t._f("lang")("编辑")))]),a("el-button",{attrs:{type:"danger",icon:"el-icon-recycle",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.doDel(e.row.id)}}},[t._v(t._s(t._f("lang")("删除")))])]}}])}),a("el-table-column",{attrs:{prop:"title",label:t._f("lang")("备注")}})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.vip?a("edit",{attrs:{vip:t.vip},on:{close:t.closeForm,submit:t.saveInfo}}):t._e()],1)},s=[],i=a("b775");function n(t){return Object(i["a"])({url:"/vip/getList",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/vip/getInfo",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/vip/saveInfo",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/vip/del",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/vip/setStatus",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/vip/setDefault",method:"post",data:t})}var p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:t._f("lang")(t.vip.id?"编辑":"创建"),width:"660px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"160px"}},[a("el-form-item",{attrs:{label:t._f("lang")("权重"),prop:"weight"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:t._f("lang")("越大越靠前"),size:"small"},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}}),a("span",{staticClass:"tips"},[t._v(t._s(t._f("lang")("越大越靠前")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("时长"),prop:"num"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:t._f("lang")("填入整数"),size:"small"},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}}),a("span",{staticClass:"tips"},[t._v(" "+t._s(t._f("lang")("个月")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("售价"),prop:"price"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:t._f("lang")("实际售价"),size:"small"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}}),a("span",{staticClass:"tips"},[t._v(" "+t._s(t._f("lang")("元")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("市场价（划线价）"),prop:"market_price"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:t._f("lang")("划线价格"),size:"small"},model:{value:t.form.market_price,callback:function(e){t.$set(t.form,"market_price",e)},expression:"form.market_price"}}),a("span",{staticClass:"tips"},[t._v(" "+t._s(t._f("lang")("元")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("本套餐优势"),prop:"hint"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"",size:"small"},model:{value:t.form.hint,callback:function(e){t.$set(t.form,"hint",e)},expression:"form.hint"}}),a("p",{staticStyle:{margin:"0",color:"#999"}},[t._v(t._s(t._f("lang")("不超过10个字，例如：最多人买、性价比最高")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("权益描述"),prop:"desc"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{rows:5,type:"textarea",placeholder:t._f("lang")("一行一条"),size:"small"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}}),a("p",{staticStyle:{margin:"0",color:"#999"}},[t._v(t._s(t._f("lang")("一行一条")))])],1),a("el-form-item",{attrs:{label:t._f("lang")("备注"),prop:"title"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{rows:2,type:"textarea",placeholder:t._f("lang")("备注"),size:"small"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v(t._s(t._f("lang")("取 消")))]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v(t._s(t._f("lang")("提 交")))])],1)],1)],1):t._e()},m=[],d={props:{vip:{type:Object,default:null}},data:function(){return{form:null,formRules:{price:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}],num:[{required:!0,message:this.$lang("此项必填"),trigger:"blur"}]}}},created:function(){this.form=this.vip,this.form.weight||this.$set(this.form,"weight",100)},methods:{closeForm:function(){this.$emit("close")},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){e?t.$emit("submit",t.form):t.$message.error(t.$lang("请填写必填项"))}))}}},g=d,h=(a("11c2"),a("1805")),_=Object(h["a"])(g,p,m,!1,null,"50434361",null),v=_.exports,b={components:{edit:v},data:function(){return{type:"qiche",dataList:[],pagesize:10,page:1,dataTotal:0,vip:null}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;n({type:this.type,page:this.page}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},showForm:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e?o({id:e}).then((function(e){t.vip=e.data})):this.vip={}},closeForm:function(){this.vip=null},saveInfo:function(t){var e=this;r(t).then((function(t){e.getList(),e.$message.success(t.message),e.closeForm()}))},doDel:function(t){var e=this;this.$confirm("删除后不可恢复，确认删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){c({id:t}).then((function(t){e.getList(),e.$message.success(t.message)}))}))},setStatus:function(t,e){var a=this;u({id:t,status:e}).then((function(t){a.getList(),a.$message.success(t.message)}))},setDefault:function(t,e){var a=this;f({id:t,is_default:e}).then((function(t){a.getList(),a.$message.success(t.message)}))}}},w=b,y=(a("3fd5"),Object(h["a"])(w,l,s,!1,null,"89c0783c",null));e["default"]=y.exports},de86:function(t,e,a){}}]);