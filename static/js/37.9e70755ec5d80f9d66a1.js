webpackJsonp([37],{IVEE:function(e,s,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.app-container[data-v-af53985a] .permission-alert {\n  width: 320px;\n  margin-top: 30px;\n  background-color: #f0f9eb;\n  color: #67c23a;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: block;\n}\n.app-container[data-v-af53985a] .permission-tag {\n  background-color: #ecf5ff;\n}\n",""])},TkK3:function(e,s,a){var i=a("IVEE");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("3ee06d5c",i,!0)},dy4A:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("je39"),n={name:"directivePermission",components:{SwitchRoles:a("v5cR").default},directives:{permission:i.a},data:function(){return{key:1}},methods:{handleRolesChange:function(){this.key++}}},t={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"app-container"},[a("switch-roles",{on:{change:e.handleRolesChange}}),e._v(" "),a("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[a("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n      Only "),a("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see this\n    ")],1),e._v(" "),a("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n      Only "),a("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1),e._v(" "),a("span",{directives:[{name:"permission",rawName:"v-permission",value:[],expression:"[]"}],staticClass:"permission-alert"},[e._v("\n      Both "),a("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and "),a("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1)])],1)},staticRenderFns:[]};var r=a("VU/8")(n,t,!1,function(e){a("TkK3")},"data-v-af53985a",null);s.default=r.exports}});