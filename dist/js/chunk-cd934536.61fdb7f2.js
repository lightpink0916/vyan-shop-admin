(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd934536"],{"0856":function(t,e,n){"use strict";var a=n("ead9"),l=n.n(a);l.a},aab4:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"a",function(){return o});var a=n("b775");function l(){return Object(a["a"])({url:"/productCategory/list/",method:"get"})}function o(t){return Object(a["a"])({url:"/productCategory/create",method:"post",data:t})}},adb8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-view",{staticClass:"app-product-category"},[n("app-filter",{scopedSlots:t._u([{key:"left",fn:function(){return[n("el-button",{staticClass:"btn-add",attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:function(e){return t.addProductCate()}}},[t._v("添加")])]},proxy:!0}])}),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productCateTable",staticClass:"app-table",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id||1))]}}])}),n("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id||1))]}}])}),n("el-table-column",{attrs:{label:"分类名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.label))]}}])}),n("el-table-column",{attrs:{label:"级别",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("levelFilter")(e.row.level)))]}}])}),n("el-table-column",{attrs:{label:"商品数量",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productCount))]}}])}),n("el-table-column",{attrs:{label:"数量单位",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productUnit))]}}])}),n("el-table-column",{attrs:{label:"导航栏",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.handleNavStatusChange(e.$index,e.row)}},model:{value:e.row.navStatus,callback:function(n){t.$set(e.row,"navStatus",n)},expression:"scope.row.navStatus"}})]}}])}),n("el-table-column",{attrs:{label:"是否显示",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.handleShowStatusChange(e.$index,e.row)}},model:{value:e.row.showStatus,callback:function(n){t.$set(e.row,"showStatus",n)},expression:"scope.row.showStatus"}})]}}])}),n("el-table-column",{attrs:{label:"排序",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sort||1))]}}])}),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"handle-icon"},[n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("编辑")]),n("i",{staticClass:"el-icon-edit",on:{click:function(n){return t.updateProduct(e.$index,e.row)}}})]),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("删除")]),n("i",{staticClass:"el-icon-delete",on:{click:function(n){return t.handleDelete(e.$index,e.row)}}})])],1)]}}])})],1)],1)],1)},l=[],o=n("aab4"),r={name:"ProductCategory",filters:{levelFilter:function(t){return 0===t?"一级":1===t?"二级":void 0},disableNextLevel:function(t){return 0!==t}},data:function(){return{list:null,total:null,listLoading:!0,listQuery:{pageNum:1,pageSize:5},parentId:0}},created:function(){this.resetParentId(),this.getList()},methods:{resetParentId:function(){null!=this.$route.query.parentId?this.parentId=this.$route.query.parentId:this.parentId=0},addProductCate:function(){this.$router.push("/product/category/add")},getList:function(){var t=this;this.listLoading=!0,Object(o["b"])(this.parentId,this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total}).catch(function(e){t.listLoading=!1})},handleUpdate:function(){},handleDelete:function(){}}},i=r,s=(n("0856"),n("2877")),u=Object(s["a"])(i,a,l,!1,null,"c0a64d66",null);e["default"]=u.exports},ead9:function(t,e,n){}}]);