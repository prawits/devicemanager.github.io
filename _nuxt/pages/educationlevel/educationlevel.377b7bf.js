(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{394:function(e,t,n){var content=n(749);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("516a9e48",content,!0,{sourceMap:!1})},748:function(e,t,n){"use strict";var o=n(394);n.n(o).a},749:function(e,t,n){(t=n(15)(!1)).push([e.i,"table.cell-height[data-v-33dac0b3]{height:50px}",""]),e.exports=t},779:function(e,t,n){"use strict";n.r(t);n(83);var o=n(29),c=n(203),d={data:function(){return{dialog:!1,headers:[{text:"Education ID",align:"start",sortable:"false",value:"educationLevelId",class:"black white--text"},{text:"Education Name",value:"educationLevelName",class:"black white--text"},{text:"Actions",value:"actions",sortable:!1,class:"black white--text"}],educationLevelList:[],editedIndex:-1,editedItem:{},defaultItem:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.new().then((function(t){e.editedItem=t}));case 2:return t.sent,t.next=5,c.a.api().get("/api/EducationLevels").then((function(t){e.educationLevelList=t.entities.educationlevel}));case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.educationLevelList.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.educationLevelList.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.educationLevelList.splice(t,1),c.a.api().delete("/api/api/EducationLevels/'"+e.educationLevelId+"' ").then((function(e){console.log(e)}))},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){if(this.editedIndex>-1){Object.assign(this.educationLevelList[this.editedIndex],this.editedItem),console.log("editItem1",this.editedItem.deviceId);var e=this.editedItem.deviceId;c.a.api().put("/api/EducationLevels/"+e,this.editedItem).then((function(e){console.log("editItem1 response",e)}))}else this.educationLevelList.push(this.editedItem),c.a.api().post("/api/api/EducationLevels",this.editedItem).then((function(e){console.log(e)}));this.close()}}},l=(n(748),n(56)),r=n(74),v=n.n(r),m=n(170),f=n(369),h=n(364),I=n(401),x=n(355),L=n(356),_=n(773),k=n(772),w=n(400),V=n(148),y=n(359),C=n(360),E=n(347),N=n(42),T=n(104),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{attrs:{headers:e.headers,items:e.educationLevelList},scopedSlots:e._u([{key:"item.educationLevelName",fn:function(t){var o=t.item;return[n("v-chip",{attrs:{color:"green"},on:{click:function(t){return e.editItem(o)}}},[e._v(e._s(o.educationLevelName))])]}},{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white black--text"}},[n("v-toolbar-title",[e._v("EducationLevel")]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"40%"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,c=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",c,!1),o),[e._v("Add New EducationLevel")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",{staticClass:"blue white--text"},[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"educationLevelId",required:""},model:{value:e.editedItem.educationLevelId,callback:function(t){e.$set(e.editedItem,"educationLevelId",t)},expression:"editedItem.educationLevelId"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"educationLevelName",required:""},model:{value:e.editedItem.educationLevelName,callback:function(t){e.$set(e.editedItem,"educationLevelName",t)},expression:"editedItem.educationLevelName"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"error",dark:"",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"primary",dark:"",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("mdi-pencil")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})}),[],!1,null,"33dac0b3",null);t.default=component.exports;v()(component,{VBtn:m.a,VCard:f.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VChip:I.a,VCol:x.a,VContainer:L.a,VDataTable:_.a,VDialog:k.a,VDivider:w.a,VIcon:V.a,VRow:y.a,VSpacer:C.a,VTextField:E.a,VToolbar:N.a,VToolbarTitle:T.b})}}]);