(function(t){function e(e){for(var a,l,o=e[0],r=e[1],c=e[2],u=0,v=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&v.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);p&&p(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,l=1;l<i.length;l++){var r=i[l];0!==s[r]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},s={app:0},n=[];function l(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d0323ff"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i=s[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=a);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=l(t);var c=new Error;n=function(e){r.onerror=r.onload=null,clearTimeout(u);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,i[1](c)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:r})}),12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var p=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),s=i.n(a);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{dense:"",app:"",color:"green",dark:""}},[i("div",{staticClass:"d-flex align-center"},[i("strong",[t._v("PSPH - Electrolysis Simulator Web App")])])]),i("v-main",[i("div",{staticClass:"watermark"},[i("pre",[t._v("  ")]),i("pre",[t._v(" PSPH2020  PSPH2020  PSPH2020 ")]),i("pre",[t._v(" PSPH2020  PSPH2020  PSPH2020 ")])]),i("v-navigation-drawer",{staticClass:"pa-1 transparent",attrs:{width:"350px",height:"auto",outline:"",absolute:"",floating:"",right:""},model:{value:t.appSettings.visible,callback:function(e){t.$set(t.appSettings,"visible",e)},expression:"appSettings.visible"}},[i("v-card",{staticClass:"ma-2 pa-1"},[i("div",{staticClass:"primary title white--text text-center"},[t._v("App Settings")]),i("v-expansion-panels",{staticClass:"pa-1",attrs:{hover:"",focusable:"",multiple:""}},[i("v-expansion-panel",{staticClass:"pa-1"},[i("v-expansion-panel-header",[t._v(t._s(t.settings.particle.label))]),i("v-expansion-panel-content",[i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("Count")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"4",max:"15","hide-details":"","thumb-size":20},model:{value:t.settings.particle.count,callback:function(e){t.$set(t.settings.particle,"count",e)},expression:"settings.particle.count"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.particle.count))])])],1),i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("Radius")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"4",max:"10","hide-details":"","thumb-size":20},model:{value:t.settings.particle.radius,callback:function(e){t.$set(t.settings.particle,"radius",e)},expression:"settings.particle.radius"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.particle.radius))])])],1),i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("Dispersion")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"2",max:"20","hide-details":"","thumb-size":20},model:{value:t.settings.particle.dispersion,callback:function(e){t.$set(t.settings.particle,"dispersion",e)},expression:"settings.particle.dispersion"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.particle.dispersion))])])],1)],1)],1),i("v-expansion-panel",{staticClass:"pa-1"},[i("v-expansion-panel-header",[t._v(t._s(t.settings.particleSimulation.label))]),i("v-expansion-panel-content",[i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("Speed")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"50",max:"200","hide-details":"","thumb-size":20},model:{value:t.settings.particleSimulation.speed,callback:function(e){t.$set(t.settings.particleSimulation,"speed",e)},expression:"settings.particleSimulation.speed"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.particleSimulation.speed))])])],1),i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("Duration")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"5",max:"10","hide-details":"","thumb-size":20},model:{value:t.settings.particleSimulation.duration,callback:function(e){t.$set(t.settings.particleSimulation,"duration",e)},expression:"settings.particleSimulation.duration"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.particleSimulation.duration))])])],1)],1)],1)],1)],1)],1),i("v-navigation-drawer",{staticClass:"pa-1 transparent",attrs:{width:"350px",height:"auto",outline:"",absolute:"",floating:"",right:""},model:{value:t.inputSettings.visible,callback:function(e){t.$set(t.inputSettings,"visible",e)},expression:"inputSettings.visible"}},[i("v-card",{staticClass:"ma-2 pa-1"},[i("div",{staticClass:"primary title white--text text-center"},[t._v(t._s(t.settings.input.label))]),i("div",{staticClass:"pa-2"},[i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("PM2.5")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"5",max:"10","hide-details":"","thumb-size":20},model:{value:t.settings.input.pm25,callback:function(e){t.$set(t.settings.input,"pm25",e)},expression:"settings.input.pm25"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.input.pm25))])])],1),i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("PM10")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"5",max:"10","hide-details":"","thumb-size":20},model:{value:t.settings.input.pm10,callback:function(e){t.$set(t.settings.input,"pm10",e)},expression:"settings.input.pm10"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.input.pm10))])])],1),i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("Humidity")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"5",max:"10","hide-details":"","thumb-size":20},model:{value:t.settings.input.humidity,callback:function(e){t.$set(t.settings.input,"humidity",e)},expression:"settings.input.humidity"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.input.humidity))])])],1),i("v-row",{staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"3"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("CO2")])],1),i("v-col",[i("v-slider",{staticClass:"mt-2 ml-2",attrs:{dense:"",min:"5",max:"10","hide-details":"","thumb-size":20},model:{value:t.settings.input.co2,callback:function(e){t.$set(t.settings.input,"co2",e)},expression:"settings.input.co2"}})],1),i("v-col",{attrs:{cols:"2"}},[i("div",{staticClass:"mt-3 caption text-center"},[t._v(t._s(t.settings.input.co2))])])],1)],1)])],1),i("v-navigation-drawer",{staticClass:"pa-1 transparent",attrs:{width:"700px",height:"auto",outline:"",absolute:"",floating:"",right:""},model:{value:t.tableSettings.visible,callback:function(e){t.$set(t.tableSettings,"visible",e)},expression:"tableSettings.visible"}},[i("v-card",{staticClass:"ma-2 pa-1"},[i("div",{staticClass:"primary title white--text text-center"},[t._v("Data Table")]),i("v-container",[i("v-responsive",{staticClass:"overflow-y-auto",attrs:{height:"calc(80vh - 20px)"}},[i("v-data-table",{staticClass:"ma-1",attrs:{"fixed-header":"",headers:t.tableSettings.headers,items:t.tableSettings.items,options:t.tableSettings.options,"item-key":"logID",dense:""}})],1)],1)],1)],1),i("div",{attrs:{id:"floating-action-bar"}},[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{top:"30px",left:"30px"},attrs:{color:"blue",dark:"",absolute:"",fab:""},on:{click:function(e){e.stopPropagation(),t.simulationControl=!1,t.appSettings.visible=!t.appSettings.visible,t.fab=!t.fab,t.tableSettings.visible=!1,t.inputSettings.visible=!1}}},"v-btn",s,!1),a),[t.appSettings.visible?i("v-icon",[t._v("mdi-close")]):i("v-icon",[t._v("mdi-application-cog")])],1)]}}])},[t.appSettings.visible?i("span",[t._v("Close")]):i("span",[t._v("App Settings")])]),i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{top:"100px",left:"30px"},attrs:{color:"blue",dark:"",absolute:"",fab:""},on:{click:function(e){e.stopPropagation(),t.simulationControl=!1,t.inputSettings.visible=!t.inputSettings.visible,t.tableSettings.visible=!1,t.fab=!t.fab,t.appSettings.visible=!1}}},"v-btn",s,!1),a),[t.inputSettings.visible?i("v-icon",[t._v("mdi-close")]):i("v-icon",[t._v("mdi-tune")])],1)]}}])},[t.inputSettings.visible?i("span",[t._v("Close")]):i("span",[t._v("Input Settings")])]),i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{top:"170px",left:"30px"},attrs:{color:"blue",dark:"",absolute:"",fab:""},on:{click:function(e){e.stopPropagation(),t.tableSettings.visible=!t.tableSettings.visible,t.appSettings.visible=!1,t.inputSettings.visible=!1}}},"v-btn",s,!1),a),[t.tableSettings.visible?i("v-icon",[t._v("mdi-close")]):i("v-icon",[t._v("mdi-table")])],1)]}}])},[t.tableSettings.visible?i("span",[t._v("Close")]):i("span",[t._v("Data Table")])]),i("v-speed-dial",{staticStyle:{top:"205px",left:"20px"},attrs:{top:!0,bottom:!1,right:!1,left:!0,direction:"bottom","open-on-hover":!1,transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{top:"35px",left:"10px"},attrs:{color:"blue",dark:"",fab:""},on:{click:function(e){t.simulationControl=!1,t.appSettings.visible=!1,t.tableSettings.visible=!1}},model:{value:t.downloadSettings.visible,callback:function(e){t.$set(t.downloadSettings,"visible",e)},expression:"downloadSettings.visible"}},"v-btn",s,!1),a),[t.downloadSettings.visible?i("v-icon",[t._v("mdi-close")]):i("v-icon",[t._v("mdi-download")])],1)]}}])},[i("span",[t._v("Download Data")])])]},proxy:!0}]),model:{value:t.downloadSettings.visible,callback:function(e){t.$set(t.downloadSettings,"visible",e)},expression:"downloadSettings.visible"}},[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{top:"25px",left:"10px"},attrs:{fab:"",dark:"",small:"",color:"green"}},"v-btn",s,!1),a),[i("v-icon",[t._v("mdi-file-delimited-outline")])],1)]}}])},[i("span",[t._v("Download as CSV File")])]),i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{top:"25px",left:"10px"},attrs:{fab:"",dark:"",small:"",color:"indigo"}},"v-btn",s,!1),a),[i("v-icon",[t._v("mdi-file-excel-outline")])],1)]}}])},[i("span",[t._v("Download as Excel File")])])],1)],1),i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticStyle:{bottom:"20px",left:"30px"},attrs:{color:"success",dark:"",absolute:"",fab:""},on:{click:function(e){e.stopPropagation(),t.simulationControl=!t.simulationControl,t.appSettings.visible=!1,t.inputSettings.visible=!1}}},"v-btn",s,!1),a),[t.simulationControl?i("v-icon",[t._v("mdi-stop")]):i("v-icon",[t._v("mdi-play")])],1)]}}])},[t.simulationControl?i("span",[t._v("Stop Simulation")]):i("span",[t._v("Start Simulation")])]),i("v-container",{staticClass:"px-0",attrs:{id:"mainContent"}},[i("SimulatorCanvas",{attrs:{height:650,width:t.appSettings.width,particle:t.settings.particle,runSimulation:t.simulationControl}}),i("v-container",{staticStyle:{position:"absolute",bottom:"0px"},attrs:{fluid:""}},[i("v-row",{staticClass:"mx-1 transparent",attrs:{fluid:""}},t._l(t.simulationParameters,(function(e,a){return i("v-col",{key:a},[i("v-card",{staticClass:"pa-1 transparent"},[i("div",{staticClass:"subheader white--text text-center",staticStyle:{"background-color":"rgba(76, 175, 80, 0.9)"}},[i("strong",[t._v(t._s(e.phase))])]),i("v-container",{staticClass:"pt-4 pb-1"},t._l(e.parameters,(function(e,a){return i("v-row",{key:a,staticStyle:{height:"50px"},attrs:{dense:""}},[i("v-col",{attrs:{cols:"6"}},[i("v-subheader",{staticClass:"pl-0"},[t._v(t._s(e.label))])],1),i("v-col",{attrs:{cols:"6"}},[i("div",{staticClass:"mt-3 caption text-center"},[i("strong",[t._v(t._s(e.val+" "+e.unit))])])])],1)})),1)],1)],1)})),1)],1)],1)],1),i("v-footer",{attrs:{dark:"",padless:""}},[i("v-card",{staticClass:"flex",attrs:{color:"teal",flat:"",tile:""}},[i("v-card-text",{staticClass:"py-0 white--text text-center"},[i("strong",{staticClass:" text-center"},[t._v("PSPH")]),t._v(" "+t._s((new Date).getFullYear())+" "),t._l(t.links,(function(e,a){return i("v-btn",{key:a,staticClass:"mx-2 mt-n1",attrs:{href:e.link,target:e.target,dark:"",icon:""}},[i("v-icon",{attrs:{size:"18px"}},[t._v(t._s(e.icon))])],1)}))],2)],1)],1)],1)},n=[],l=(i("b680"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"transparent",staticStyle:{width:"100%",height:"100%","z-index":"0"},attrs:{id:"container"}},[i("v-stage",{attrs:{config:t.config}},[i("v-layer",[i("v-shape",{staticClass:"offset",attrs:{id:"regulator",config:t.regulator}}),i("v-shape",{staticClass:"offset",attrs:{id:"p3-innerbox",config:t.p3Plates}}),i("v-shape",{staticClass:"offset",attrs:{id:"p3-innerbox",config:t.p3InnerBox}}),i("v-shape",{staticClass:"offset",attrs:{id:"p3-outerbox",config:t.p3OuterBox}}),i("v-shape",{staticClass:"offset",attrs:{id:"wire",config:t.wire}}),i("v-shape",{staticClass:"offset",attrs:{id:"p2-cylinder",config:t.p3Cylinder}}),i("v-shape",{staticClass:"offset",attrs:{id:"p2-cube",config:t.p2Cube}}),i("v-shape",{staticClass:"offset",attrs:{id:"p2-cylinder",config:t.p2Cylinder}}),t._l(t.particles2,(function(t,e){return i("v-circle",{key:"pOneOut"+e,ref:"molecules2",refInFor:!0,attrs:{config:{x:t.x,y:t.y,radius:t.radius,opacity:1,draggable:!0,fill:"#4e4e5e",shadowColor:"#6f6f49",shadowBlur:2}}})})),i("v-shape",{staticClass:"offset",attrs:{id:"p1-cube",config:t.p1Cube}}),t._l(t.particles,(function(t,e){return i("v-circle",{key:"pOneIn"+e,ref:"molecules",refInFor:!0,attrs:{config:{x:t.x,y:t.y,id:e,radius:t.radius,opacity:1,draggable:!0,fill:"#8e8e5e",shadowColor:"#6f6f49",shadowBlur:2}}})}))],2)],1)],1)}),o=[],r=(i("cb29"),i("4160"),i("a9e3"),i("159b"),i("362d")),c=i.n(r),u={props:{width:Number,height:Number,particle:Object,runSimulation:Boolean},data:function(){return{config:{width:this.width,height:this.height,container:"container"},particles:[],particles2:[],wire:{sceneFunc:function(t){var e=658,i=252,a=730,s=218;t.globalAlpha=1,t.beginPath(),t.strokeStyle="red",t.lineWidth=5,t.lineCap="round",t.moveTo(e,i),t.lineTo(e+136,i+52),t.stroke(),t.closePath(),t.beginPath(),t.strokeStyle="black",t.lineWidth=5,t.lineCap="round",t.moveTo(a,s),t.lineTo(a+110,s+64),t.stroke(),t.closePath()},draggable:!1},regulator:{sceneFunc:function(t,e){var i=840,a=380,s=50,n=50,l=50;t.globalAlpha=1,t.beginPath(),t.moveTo(i,a),t.lineTo(i-s,a-.5*s),t.lineTo(i-s,a-l-.5*s),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#838357",t.strokeStyle="#7a7a51",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a-.5*n),t.lineTo(i+n,a-l-.5*n),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#676744",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a-l),t.lineTo(i-s,a-l-.5*s),t.lineTo(i-s+n,a-l-(.5*s+.5*n)),t.lineTo(i+n,a-l-.5*n),t.closePath(),t.fillStyle="#989865",t.strokeStyle="#8e8e5e",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},p3Cylinder:{sceneFunc:function(t,e){var i=t.createLinearGradient(0,0,0,170);i.addColorStop(.5,"#6f6f49"),i.addColorStop(1,"#838357"),t.globalAlpha=.9,t.beginPath(),t.moveTo(660,220),t.quadraticCurveTo(670,80,560,140),t.lineTo(540,110),t.moveTo(540,110),t.quadraticCurveTo(700,35,690,215),t.lineTo(660,220),t.moveTo(690,215),t.quadraticCurveTo(680,230,660,220),t.fillStyle=i,t.strokeStyle="#6f6f49",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},p3InnerBox:{sceneFunc:function(t,e){var i=650,a=340,s=60,n=100,l=80;t.globalAlpha=.4,t.beginPath(),t.moveTo(i,a),t.lineTo(i-s,a-.5*s),t.lineTo(i-s,a-l-.5*s),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#838357",t.strokeStyle="#7a7a51",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a-.5*n),t.lineTo(i+n,a-l-.5*n),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#676744",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a-l),t.lineTo(i-s,a-l-.5*s),t.lineTo(i-s+n,a-l-(.5*s+.5*n)),t.lineTo(i+n,a-l-.5*n),t.closePath(),t.fillStyle="#989865",t.strokeStyle="#8e8e5e",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},p3Plates:{sceneFunc:function(t,e){var i=660,a=335,s=60,n=5,l=80,o=730,r=300;t.globalAlpha=1,t.beginPath(),t.moveTo(i,a),t.lineTo(i-s,a-.5*s),t.lineTo(i-s,a-l-.5*s),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#838357",t.strokeStyle="#7a7a51",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a-.5*n),t.lineTo(i+n,a-l-.5*n),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#676744",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a-l),t.lineTo(i-s,a-l-.5*s),t.lineTo(i-s+n,a-l-(.5*s+.5*n)),t.lineTo(i+n,a-l-.5*n),t.closePath(),t.fillStyle="#989865",t.strokeStyle="#8e8e5e",t.stroke(),t.fill(),t.fillStrokeShape(e),t.beginPath(),t.moveTo(o,r),t.lineTo(o-s,r-.5*s),t.lineTo(o-s,r-l-.5*s),t.lineTo(o,r-1*l),t.closePath(),t.fillStyle="#838357",t.strokeStyle="#7a7a51",t.stroke(),t.fill(),t.beginPath(),t.moveTo(o,r),t.lineTo(o+n,r-.5*n),t.lineTo(o+n,r-l-.5*n),t.lineTo(o,r-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#676744",t.stroke(),t.fill(),t.beginPath(),t.moveTo(o,r-l),t.lineTo(o-s,r-l-.5*s),t.lineTo(o-s+n,r-l-(.5*s+.5*n)),t.lineTo(o+n,r-l-.5*n),t.closePath(),t.fillStyle="#989865",t.strokeStyle="#8e8e5e",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},p3OuterBox:{sceneFunc:function(t,e){var i=650,a=350,s=80,n=120,l=80;t.globalAlpha=.4,t.beginPath(),t.moveTo(i,a),t.lineTo(i-s,a-.5*s),t.lineTo(i-s,a-l-.5*s),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#838357",t.strokeStyle="#7a7a51",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a-.5*n),t.lineTo(i+n,a-l-.5*n),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#676744",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a-l),t.lineTo(i-s,a-l-.5*s),t.lineTo(i-s+n,a-l-(.5*s+.5*n)),t.lineTo(i+n,a-l-.5*n),t.closePath(),t.fillStyle="#989865",t.strokeStyle="#8e8e5e",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},p2Cube:{sceneFunc:function(t,e){var i=500,a=250,s=100,n=60,l=100;t.beginPath(),t.moveTo(i,a),t.lineTo(i-s,a-.5*s),t.lineTo(i-s,a-l-.5*s),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#838357",t.strokeStyle="#7a7a51",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a-.5*n),t.lineTo(i+n,a-l-.5*n),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#676744",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a-l),t.lineTo(i-s,a-l-.5*s),t.lineTo(i-s+n,a-l-(.5*s+.5*n)),t.lineTo(i+n,a-l-.5*n),t.closePath(),t.fillStyle="#989865",t.strokeStyle="#8e8e5e",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},p2Cylinder:{sceneFunc:function(t,e){var i=450,a=-50;t.globalAlpha=.8,t.beginPath(),t.transform(1,.5,0,1,0,0),t.arc(i,a,15,0,2*Math.PI,!1),t.transform(1,0,0,1,0,0),t.rotate(45*Math.PI/180),t.rect(i-182,a-305,30,100),t.fillStyle="#6f6f49",t.strokeStyle="#838357",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},p1Cube:{sceneFunc:function(t,e){var i=380,a=300,s=100,n=40,l=100;t.beginPath(),t.moveTo(i,a),t.lineTo(i-s,a-.5*s),t.lineTo(i-s,a-l-.5*s),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#838357",t.strokeStyle="#7a7a51",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i-10,a-20),t.lineTo(i+10-s,a-10-.5*s),t.lineTo(i+10-s,a+20-l-.5*s),t.lineTo(i-10,a+10-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#838357",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a-.5*n),t.lineTo(i+n,a-l-.5*n),t.lineTo(i,a-1*l),t.closePath(),t.fillStyle="#6f6f49",t.strokeStyle="#676744",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i+40,a-30),t.lineTo(i+10+n,a-15-.5*n),t.lineTo(i+10+n,a-5-l-.5*n),t.lineTo(i+40,a-30-1*l),t.closePath(),t.fillStyle="#676744",t.strokeStyle="#6f6f49",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i,a-l),t.lineTo(i-s,a-l-.5*s),t.lineTo(i-s+n,a-l-(.5*s+.5*n)),t.lineTo(i+n,a-l-.5*n),t.closePath(),t.fillStyle="#989865",t.strokeStyle="#8e8e5e",t.stroke(),t.fill(),t.beginPath(),t.moveTo(i+40,a-l-20),t.lineTo(i+60-s,a-10-l-.5*s),t.lineTo(i+30-s+n,a+5-l-(.5*s+.5*n)),t.lineTo(i+10+n,a-5-l-.5*n),t.closePath(),t.fillStyle="#8e8e5e",t.strokeStyle="#989865",t.stroke(),t.fill(),t.fillStrokeShape(e)},draggable:!1},tweens1:[],tweens2:[]}},watch:{"particle.count":function(t,e){if(t>e)for(var i=t-e,a=0;a<i;a++)this.particles.push({x:Math.random()*this.width/this.particle.dispersion+ +this.particle.xOffset,y:Math.random()*this.height/this.particle.dispersion+ +this.particle.yOffset,radius:this.particle.radius});else for(var s=e-t,n=0;n<s;n++)this.particles.pop()},"particle.radius":function(t){this.particles.forEach((function(e){e.radius=t}))},"particle.dispersion":function(t){var e=this;this.particles.forEach((function(i){e.particle.dispersion=t,i.x=Math.random()*e.width/e.particle.dispersion+e.particle.xOffset,i.y=Math.random()*e.height/e.particle.dispersion+e.particle.yOffset}))},runSimulation:function(t){var e=t?"particles running...":"particles stopped...";console.log(e),this.testRun(t)}},methods:{createTweens1:function(){var t=this;0==!this.tweens1.length&&(this.tweens1.forEach((function(t){t.destroy()})),this.tweens1=[],console.log("tweens destroyed..."));for(var e=0;e<=this.particle.count-1;e++){var i=this.$refs["molecules"][e].getNode();this.tweens1.push(new c.a.Tween({node:i,duration:2,x:Math.random()+360,y:1.5*Math.random()*2+215,opacity:0,easing:c.a.Easings.EaseInOut,onFinish:function(){t.runSimulation?(console.log("running tween2"),t.createTweens2(),t.tweens2.forEach((function(t){t.reset(),t.play()}))):this.reset()}}))}},createTweens2:function(){0==!this.tweens2.length&&(this.tweens2.forEach((function(t){t.destroy()})),this.tweens2=[],console.log("tweens destroyed..."));for(var t=0;t<=this.particle.count-1;t++){var e=this.$refs["molecules2"][t].getNode();this.tweens2.push(new c.a.Tween({node:e,duration:2,x:6*Math.random()*2+450,y:6*Math.random()*2+170,opacity:0,scaleX:.9,scaleY:.9,fill:"#adee2e",shadowColor:"#6f6f49",shadowBlur:2,easing:c.a.Easings.EaseInOut,onFinish:function(){}}))}},testRun:function(t){t?(this.createTweens1(),this.tweens1.forEach((function(t){t.reset(),t.play()}))):this.tweens1.forEach((function(t){t.finish()}))}},created:function(){},mounted:function(){for(var t=0;t<this.particle.count;t++)this.particles.push({x:Math.random()*this.width/8+this.particle.xOffset,y:Math.random()*this.height/8+this.particle.yOffset,radius:this.particle.radius}),this.particles2.push({x:20*Math.random()+380,y:15*Math.random()*2+190,radius:this.particle.radius})}},p=u,v=i("2877"),d=Object(v["a"])(p,l,o,!1,null,null,null),h=d.exports,f={name:"App",components:{SimulatorCanvas:h},data:function(){return{fab:!1,appSettings:{visible:!1,width:window.innerWidth},inputSettings:{visible:!1},tableSettings:{visible:!1,headers:[{text:"Trial No.",align:"center",sortable:!1,value:"logID"},{text:"CO2 content before capture (ppm)",align:"center",sortable:!1,value:"CO2Before"},{text:"Humidity Ratio before Dehumidification",align:"center",sortable:!1,value:"humidityBefore"},{text:"CO2 content after capture (ppm)",align:"center",sortable:!1,value:"CO2After"},{text:"Humidity Ratio after Dehumidification",align:"center",sortable:!1,value:"humidityAfter"},{text:"Power Output (kW)",align:"center",sortable:!1,value:"powerOutput"}],items:[],options:{itemsPerPage:-1}},downloadSettings:{visible:!1},simulationControl:!1,simulationInterval:"",settings:{particle:{label:"Particle/s",count:6,radius:5,xOffset:150,yOffset:250,dispersion:5},particleSimulation:{label:"Particle Simulation",speed:100,duration:10},input:{label:"Input Settings",pm25:5,pm10:6,humidity:7,co2:8}},links:[{icon:"mdi-facebook",target:"_blank",link:"https://web.facebook.com/ProtoSolutionsPH"},{icon:"mdi-twitter",target:"",link:"#"},{icon:"mdi-github",target:"",link:"#"},{icon:"mdi-instagram",target:"",link:"#"}],simulationParameters:[{phase:"PHASE 1",parameters:[{label:"PM2.5",val:0,unit:"PPM"},{label:"PM10",val:0,unit:"PPM"},{label:"Humidity",val:0,unit:"%"},{label:"CO2",val:0,unit:"g"}]},{phase:"PHASE 2",parameters:[{label:"PM2.5",val:0,unit:"PPM"},{label:"PM10",val:0,unit:"PPM"},{label:"Humidity",val:0,unit:"%"},{label:"CO2",val:0,unit:"g"}]},{phase:"PHASE 3",parameters:[{label:"PM2.5",val:0,unit:"PPM"},{label:"PM10",val:0,unit:"PPM"},{label:"Humidity",val:0,unit:"%"},{label:"CO2",val:0,unit:"g"}]},{phase:"OUTPUT",parameters:[{label:"Q (Charge)",val:0,unit:"Ah"}]}]}},methods:{runSimulation:function(){var t=0,e=this,i=this.settings.input.pm25,a=this.settings.input.pm10,s=this.settings.input.humidity,n=this.settings.input.co2;this.simulationInterval=setInterval((function(){e.settings.input.pm25=Math.round(Math.random())*i,e.settings.input.pm10=Math.round(Math.random())*a,e.settings.input.humidity=Math.round(Math.random())*s,e.settings.input.co2=Math.round(Math.random())*n,e.tableSettings.items.push({logID:t,CO2Before:e.simulationParameters[0].parameters[3].val,CO2After:e.simulationParameters[2].parameters[3].val,humidityBefore:e.simulationParameters[0].parameters[2].val,humidityAfter:e.simulationParameters[2].parameters[2].val,powerOutput:e.simulationParameters[3].parameters[0].val}),t++,console.log(t,i)}),1e3)}},watch:{"settings.input.pm25":function(t){var e=.01*(2*Math.round(Math.random())-1),i=t+e*t,a=i+.03*i;this.simulationParameters[0].parameters[0].val=i.toFixed(2),this.simulationParameters[1].parameters[0].val=a.toFixed(2),this.simulationParameters[2].parameters[0].val=a.toFixed(2),this.simulationParameters[3].parameters[0].val=(.1595016*this.simulationParameters[2].parameters[3].val).toFixed(2)},"settings.input.pm10":function(t){var e=.01*(2*Math.round(Math.random())-1),i=t+e*t,a=i+.03*i;this.simulationParameters[0].parameters[1].val=i.toFixed(2),this.simulationParameters[1].parameters[1].val=a.toFixed(2),this.simulationParameters[2].parameters[1].val=a.toFixed(2),this.simulationParameters[3].parameters[0].val=(.1595016*this.simulationParameters[2].parameters[3].val).toFixed(2)},"settings.input.humidity":function(t){var e=.01*(2*Math.round(Math.random())-1),i=t+e*t,a=.03*(2*Math.round(Math.random())-1),s=i+1.3*i+a*i;this.simulationParameters[0].parameters[2].val=i.toFixed(2),this.simulationParameters[1].parameters[2].val=i.toFixed(2),this.simulationParameters[2].parameters[2].val=s.toFixed(2),this.simulationParameters[3].parameters[0].val=(.1595016*this.simulationParameters[2].parameters[3].val).toFixed(2)},"settings.input.co2":function(t){var e=.01*(2*Math.round(Math.random())-1),i=t+e*t,a=.03*(2*Math.round(Math.random())-1),s=i+1.3*i+a*i;this.simulationParameters[0].parameters[3].val=i.toFixed(2),this.simulationParameters[1].parameters[3].val=i.toFixed(2),this.simulationParameters[2].parameters[3].val=s.toFixed(2),this.simulationParameters[3].parameters[0].val=(.1595016*this.simulationParameters[2].parameters[3].val).toFixed(2)},simulationControl:function(t){!0===t?(this.tableSettings.items=[],this.runSimulation()):clearInterval(this.simulationInterval)}},mounted:function(){}},m=f,g=(i("034f"),i("6544")),b=i.n(g),y=i("7496"),S=i("40dc"),x=i("8336"),P=i("b0af"),k=i("99d9"),C=i("62ad"),_=i("a523"),T=i("8fea"),w=i("cd55"),M=i("49e2"),O=i("c865"),F=i("0393"),j=i("553a"),V=i("132d"),E=i("f6c4"),A=i("f774"),H=i("6b53"),I=i("0fd9"),$=i("ba0d"),D=i("c73b"),B=i("e0c7"),z=i("3a2f"),W=Object(v["a"])(m,s,n,!1,null,null,null),N=W.exports;b()(W,{VApp:y["a"],VAppBar:S["a"],VBtn:x["a"],VCard:P["a"],VCardText:k["a"],VCol:C["a"],VContainer:_["a"],VDataTable:T["a"],VExpansionPanel:w["a"],VExpansionPanelContent:M["a"],VExpansionPanelHeader:O["a"],VExpansionPanels:F["a"],VFooter:j["a"],VIcon:V["a"],VMain:E["a"],VNavigationDrawer:A["a"],VResponsive:H["a"],VRow:I["a"],VSlider:$["a"],VSpeedDial:D["a"],VSubheader:B["a"],VTooltip:z["a"]});i("d3b7");var R=i("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},L=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,i){return a("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,i){return a("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,i){return a("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},J=[],Q={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},U=Q,G=i("adda"),X=Object(v["a"])(U,Y,J,!1,null,null,null),K=X.exports;b()(X,{VCol:C["a"],VContainer:_["a"],VImg:G["a"],VRow:I["a"]});var Z={name:"Home",components:{HelloWorld:K}},tt=Z,et=Object(v["a"])(tt,q,L,!1,null,null,null),it=et.exports;a["default"].use(R["a"]);var at=[{path:"/",name:"Home",component:it},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],st=new R["a"]({mode:"history",base:"/",routes:at}),nt=st,lt=i("2f62");a["default"].use(lt["a"]);var ot=new lt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),rt=i("f309");a["default"].use(rt["a"]);var ct=new rt["a"]({}),ut=i("7591"),pt=i.n(ut);a["default"].config.productionTip=!1,a["default"].use(pt.a),new a["default"]({router:nt,store:ot,vuetify:ct,render:function(t){return t(N)}}).$mount("#app")},"85ec":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8347575b.js.map