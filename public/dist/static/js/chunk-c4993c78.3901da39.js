(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4993c78"],{3528:function(e,t,r){"use strict";r.d(t,"k",(function(){return n})),r.d(t,"j",(function(){return s})),r.d(t,"a",(function(){return o})),r.d(t,"m",(function(){return l})),r.d(t,"g",(function(){return i})),r.d(t,"f",(function(){return u})),r.d(t,"h",(function(){return c})),r.d(t,"i",(function(){return m})),r.d(t,"b",(function(){return d})),r.d(t,"l",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return y}));var a=r("b775");function n(e){return Object(a["a"])({url:"/system/role/list",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/system/role/"+e,method:"get"})}function o(e){return Object(a["a"])({url:"/system/role",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/system/role",method:"put",data:e})}function i(e){return Object(a["a"])({url:"/system/role/dataScope",method:"put",data:e})}function u(e,t){var r={roleId:e,status:t};return Object(a["a"])({url:"/system/role/changeStatus",method:"put",data:r})}function c(e){return Object(a["a"])({url:"/system/role/"+e,method:"delete"})}function m(e){return Object(a["a"])({url:"/system/role/export",method:"get",params:e})}function d(e){return Object(a["a"])({url:"/system/role/authUser/allocatedList",method:"get",params:e})}function p(e){return Object(a["a"])({url:"/system/role/authUser/unallocatedList",method:"get",params:e})}function h(e){return Object(a["a"])({url:"/system/role/authUser/cancel",method:"put",data:e})}function f(e){return Object(a["a"])({url:"/system/role/authUser/cancelAll",method:"put",params:e})}function y(e){return Object(a["a"])({url:"/system/role/authUser/selectAll",method:"put",params:e})}},7054:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[r("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入用户名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入手机号码",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenumber,callback:function(t){e.$set(e.queryParams,"phonenumber",t)},expression:"queryParams.phonenumber"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:add"],expression:"['system:role:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.openSelectUser}},[e._v("添加用户")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:remove"],expression:"['system:role:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-circle-close",size:"mini",disabled:e.multiple},on:{click:e.cancelAuthUserAll}},[e._v("批量取消授权")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-close",size:"mini"},on:{click:e.handleClose}},[e._v("关闭")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.userList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"用户名称",prop:"userName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"用户昵称",prop:"nickName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"手机",prop:"phonenumber","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.sys_normal_disable,value:t.row.status}})]}}])}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:remove"],expression:"['system:role:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-circle-close"},on:{click:function(r){return e.cancelAuthUser(t.row)}}},[e._v("取消授权")])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("select-user",{ref:"select",attrs:{roleId:e.queryParams.roleId},on:{ok:e.handleQuery}})],1)},n=[],s=(r("d81d"),r("a15b"),r("3528")),o=r("a17e"),l={name:"AuthUser",dicts:["sys_normal_disable"],components:{selectUser:o["default"]},data:function(){return{loading:!0,userIds:[],multiple:!0,showSearch:!0,total:0,userList:[],queryParams:{pageNum:1,pageSize:10,roleId:void 0,userName:void 0,phonenumber:void 0}}},created:function(){var e=this.$route.params&&this.$route.params.roleId;e&&(this.queryParams.roleId=e,this.getList())},methods:{getList:function(){var e=this;this.loading=!0,Object(s["b"])(this.queryParams).then((function(t){e.userList=t.rows,e.total=t.total,e.loading=!1}))},handleClose:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.push({path:"/system/role"})},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.userIds=e.map((function(e){return e.userId})),this.multiple=!e.length},openSelectUser:function(){this.$refs.select.show()},cancelAuthUser:function(e){var t=this,r=this.queryParams.roleId;this.$modal.confirm('确认要取消该用户"'+e.userName+'"角色吗？').then((function(){return Object(s["c"])({userId:e.userId,roleId:r})})).then((function(){t.getList(),t.$modal.msgSuccess("取消授权成功")})).catch((function(){}))},cancelAuthUserAll:function(e){var t=this,r=this.queryParams.roleId,a=this.userIds.join(",");this.$modal.confirm("是否取消选中用户授权数据项？").then((function(){return Object(s["d"])({roleId:r,userIds:a})})).then((function(){t.getList(),t.$modal.msgSuccess("取消授权成功")})).catch((function(){}))}}},i=l,u=r("2877"),c=Object(u["a"])(i,a,n,!1,null,null,null);t["default"]=c.exports},a17e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"选择用户",visible:e.visible,width:"800px",top:"5vh","append-to-body":""},on:{"update:visible":function(t){e.visible=t}}},[r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[r("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[r("el-input",{attrs:{placeholder:"请输入用户名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[r("el-input",{attrs:{placeholder:"请输入手机号码",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenumber,callback:function(t){e.$set(e.queryParams,"phonenumber",t)},expression:"queryParams.phonenumber"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-row",[r("el-table",{ref:"table",attrs:{data:e.userList,height:"260px"},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{label:"用户名称",prop:"userName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"用户昵称",prop:"nickName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"手机",prop:"phonenumber","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.sys_normal_disable,value:t.row.status}})]}}])}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSelectUser}},[e._v("确 定")]),r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")])],1)],1)},n=[],s=(r("a9e3"),r("d81d"),r("a15b"),r("3528")),o={dicts:["sys_normal_disable"],props:{roleId:{type:[Number,String]}},data:function(){return{visible:!1,userIds:[],total:0,userList:[],queryParams:{pageNum:1,pageSize:10,roleId:void 0,userName:void 0,phonenumber:void 0}}},methods:{show:function(){this.queryParams.roleId=this.roleId,this.getList(),this.visible=!0},clickRow:function(e){this.$refs.table.toggleRowSelection(e)},handleSelectionChange:function(e){this.userIds=e.map((function(e){return e.userId}))},getList:function(){var e=this;Object(s["l"])(this.queryParams).then((function(t){e.userList=t.rows,e.total=t.total}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectUser:function(){var e=this,t=this.queryParams.roleId,r=this.userIds.join(",");Object(s["e"])({roleId:t,userIds:r}).then((function(t){e.$modal.msgSuccess(t.msg),200===t.code&&(e.visible=!1,e.$emit("ok"))}))}}},l=o,i=r("2877"),u=Object(i["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports}}]);