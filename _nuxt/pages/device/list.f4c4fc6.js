(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{393:function(e,t,d){var content=d(747);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(16).default)("669a8588",content,!0,{sourceMap:!1})},743:function(e,t){},746:function(e,t,d){"use strict";var l=d(393);d.n(l).a},747:function(e,t,d){(t=d(15)(!1)).push([e.i,"tbody tr[data-v-873bdf0a]:nth-of-type(2n){background-color:#eceded}tbody tr[data-v-873bdf0a]:nth-of-type(odd){background-color:#fafafa}.v-data-table-header[data-v-873bdf0a]{background-color:#b6b7bb;color:#fff}.v-data-footer[data-v-873bdf0a]{background-color:#fafafa}.theme--light.v-data-table thead tr th[data-v-873bdf0a]{color:#fff}.header-text[data-v-873bdf0a]{font-size:50px}",""]),e.exports=t},775:function(e,t,d){"use strict";d.r(t);d(83);var l=d(29),n=d(201),o=d(717),r=d.n(o)()("http://203.154.88.148:5010/"),c={data:function(){return{dialog:!1,headers:[{text:"Device Number",value:"deviceNumber",class:"black--text white"},{text:"Device Name",value:"deviceName",class:"black--text white"},{text:"Model",value:"model",class:"black--text white"},{text:"IP Address",value:"ipAddress",class:"black--text white"},{text:"Port",value:"ipPort",class:"black--text white"},{text:"IsActive",value:"isActive",class:"black--text white"},{text:"IsConnected",value:"isConnected",class:"black--text white"},{text:"",value:"actions",sortable:!1,class:"black--text white"}],readerTypeNameItem:["UHF","HF"],rules:[function(e){return!!e||"Required"},function(e){return e>=0||"Ant Power should be above 0"},function(e){return e<=30||"Ant Power should not be above 30"}],dataItem:[],editedIndex:-1,editedItem:[],defaultItem:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},created:function(){},mounted:function(){this.initialize(),r.on("message",(function(e){console.log("message: "+e)}))},methods:{initialize:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.new().then((function(t){e.editedItem=t}));case 2:return t.sent,console.log("empAll - before2",e.editedItem),t.next=6,n.a.api().get("/api/devices").then((function(t){e.dataItem=t.entities.device,console.log("this.data",t.entities.device)}));case 6:t.sent;case 7:case"end":return t.stop()}}),t)})))()},method1:function(){this.socket.emit("sendMessage",{hello:"world"},(function(e){console.log("send message",e)}))},handleClick:function(e){this.editItem(e)},editItem:function(e){this.editedIndex=this.dataItem.indexOf(e),this.editedItem=Object.assign({},e),console.log("editItem",this.editItem),this.dialog=!0},deleteItem:function(e){this.dialog=!1;var t=this.dataItem.indexOf(e);confirm("Are you sure you want to delete this device ?")&&this.dataItem.splice(t,1),r.emit("message","reload_reader")},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1,e.readerTypeName=""}))},save:function(){if(this.editedIndex>-1){Object.assign(this.dataItem[this.editedIndex],this.editedItem),console.log("editItem1",this.editedItem.deviceId);var e=this.editedItem.deviceId;n.a.api().put("/api/devices/"+e,this.editedItem).then((function(e){console.log("editItem1 response",e)}))}else{this.dataItem.push(this.editedItem),console.log("editItem2",this.editedItem);this.editedItem.deviceId,n.a.api().post("/api/devices/",this.editedItem).then((function(e){console.log("editItem1 response",e)}))}r.emit("message","reload_reader"),this.close()}}},m=(d(746),d(56)),v=d(74),I=d.n(v),f=d(170),h=d(369),x=d(364),k=d(687),_=d(355),w=d(356),N=d(773),y=d(772),A=d(400),P=d(148),C=d(359),$=d(684),T=d(360),V=d(347),M=d(42),D=d(104),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("client-only",[d("v-data-table",{staticClass:"elevation-1",attrs:{height:"78vh",headers:e.headers,items:e.dataItem,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[d("v-toolbar",{attrs:{flat:"",color:"white black--text"}},[d("v-toolbar-title",[e._v("Device")]),e._v(" "),d("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),d("button",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.getMessage()}}},[e._v("\n            Test Button\n          ")]),e._v(" "),d("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),d("v-spacer"),e._v(" "),d("v-dialog",{attrs:{"max-width":"1000px",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,n=t.attrs;return[d("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),l),[e._v("New Device")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),d("v-card",[d("v-card-title",{staticClass:"blue white--text"},[d("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),d("v-divider"),e._v(" "),d("v-card-text",[d("v-container",[d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-select",{attrs:{"hide-details":"",solo:"",dense:"",items:e.readerTypeNameItem,label:"Select reader type"},model:{value:e.editedItem.deviceType,callback:function(t){e.$set(e.editedItem,"deviceType",t)},expression:"editedItem.deviceType"}})],1)],1),e._v(" "),d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"DeviceId"},model:{value:e.editedItem.deviceId,callback:function(t){e.$set(e.editedItem,"deviceId",t)},expression:"editedItem.deviceId"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"DeviceNumber"},model:{value:e.editedItem.deviceNumber,callback:function(t){e.$set(e.editedItem,"deviceNumber",t)},expression:"editedItem.deviceNumber"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"DeviceName"},model:{value:e.editedItem.deviceName,callback:function(t){e.$set(e.editedItem,"deviceName",t)},expression:"editedItem.deviceName"}})],1)],1),e._v(" "),d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"Brand"},model:{value:e.editedItem.brand,callback:function(t){e.$set(e.editedItem,"brand",t)},expression:"editedItem.brand"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"Model"},model:{value:e.editedItem.model,callback:function(t){e.$set(e.editedItem,"model",t)},expression:"editedItem.model"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"IpAddress"},model:{value:e.editedItem.ipAddress,callback:function(t){e.$set(e.editedItem,"ipAddress",t)},expression:"editedItem.ipAddress"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"IpPort"},model:{value:e.editedItem.ipPort,callback:function(t){e.$set(e.editedItem,"ipPort",t)},expression:"editedItem.ipPort"}})],1)],1),e._v(" "),"UHF"===e.editedItem.deviceType?d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"AntennaNumber"},model:{value:e.editedItem.antennaNumber,callback:function(t){e.$set(e.editedItem,"antennaNumber",t)},expression:"editedItem.antennaNumber"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"AntennaMutiplexerNumber"},model:{value:e.editedItem.antennaMutiplexerNumber,callback:function(t){e.$set(e.editedItem,"antennaMutiplexerNumber",t)},expression:"editedItem.antennaMutiplexerNumber"}})],1)],1):e._e(),e._v(" "),"UHF"===e.editedItem.deviceType?d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{outlined:"",dense:"",rules:e.rules,label:"AntennaNumber1Power"},model:{value:e.editedItem.antennaNumber1Power,callback:function(t){e.$set(e.editedItem,"antennaNumber1Power",t)},expression:"editedItem.antennaNumber1Power"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{outlined:"",dense:"",rules:e.rules,label:"AntennaNumber2Power"},model:{value:e.editedItem.antennaNumber2Power,callback:function(t){e.$set(e.editedItem,"antennaNumber2Power",t)},expression:"editedItem.antennaNumber2Power"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{outlined:"",dense:"",rules:e.rules,label:"AntennaNumber3Power"},model:{value:e.editedItem.antennaNumber3Power,callback:function(t){e.$set(e.editedItem,"antennaNumber3Power",t)},expression:"editedItem.antennaNumber3Power"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{outlined:"",dense:"",rules:e.rules,label:"AntennaNumber4Power"},model:{value:e.editedItem.antennaNumber4Power,callback:function(t){e.$set(e.editedItem,"antennaNumber4Power",t)},expression:"editedItem.antennaNumber4Power"}})],1)],1):e._e(),e._v(" "),d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"SiteId"},model:{value:e.editedItem.siteId,callback:function(t){e.$set(e.editedItem,"siteId",t)},expression:"editedItem.siteId"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"StationId"},model:{value:e.editedItem.stationId,callback:function(t){e.$set(e.editedItem,"stationId",t)},expression:"editedItem.stationId"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-text-field",{attrs:{"hide-details":"",outlined:"",dense:"",label:"LocationId"},model:{value:e.editedItem.locationId,callback:function(t){e.$set(e.editedItem,"locationId",t)},expression:"editedItem.locationId"}})],1)],1),e._v(" "),d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[d("v-checkbox",{attrs:{"hide-details":"",dense:"",label:"IsUseMultipexer"},model:{value:e.editedItem.isUseMultipexer,callback:function(t){e.$set(e.editedItem,"isUseMultipexer",t)},expression:"editedItem.isUseMultipexer"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3","mt-0":""}},[d("v-checkbox",{attrs:{"hide-details":"",dense:"",label:"IsActive"},model:{value:e.editedItem.isActive,callback:function(t){e.$set(e.editedItem,"isActive",t)},expression:"editedItem.isActive"}})],1)],1)],1)],1),e._v(" "),d("v-divider"),e._v(" "),d("v-card-actions",[d("v-spacer"),e._v(" "),d("v-btn",{staticClass:"error",attrs:{dark:"",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),d("v-btn",{staticClass:"primary",attrs:{dark:"",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var l=t.item;return[d("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(l)}}},[e._v("\n          mdi-pencil\n        ")]),e._v(" "),d("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(l)}}},[e._v("\n          mdi-delete\n        ")])]}},{key:"body.append",fn:function(){return[d("v-spacer")]},proxy:!0},{key:"item.isActive",fn:function(t){var l=t.item;return[d("v-icon",{attrs:{if:!l,small:""}},[e._v(e._s(l.isActive?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"))])]}},{key:"item.isConnected",fn:function(t){var l=t.item;return[d("v-icon",{attrs:{small:""}},[e._v(e._s(l.isConnected?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"))])]}}])})],1)}),[],!1,null,"873bdf0a",null);t.default=component.exports;I()(component,{VBtn:f.a,VCard:h.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VCheckbox:k.a,VCol:_.a,VContainer:w.a,VDataTable:N.a,VDialog:y.a,VDivider:A.a,VIcon:P.a,VRow:C.a,VSelect:$.a,VSpacer:T.a,VTextField:V.a,VToolbar:M.a,VToolbarTitle:D.b})}}]);