webpackJsonp([1],{"3VqY":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("3EgV"),n=a.n(r),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-toolbar",{staticClass:"deep-orange"},[e("v-toolbar-title",[e("b",[this._v("CALENDAR")])])],1),this._v(" "),e("v-content",[e("v-container",[e("router-view")],1)],1),this._v(" "),e("v-footer",{staticClass:"deep-orange pa-3",attrs:{absolute:!0}},[e("v-spacer"),this._v("\n      2018 - aalvarado\n    ")],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},o,!1,function(t){a("uxkO")},null,null).exports,l=a("/ocq"),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var d=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){a("rTc0")},"data-v-882a5e0a",null).exports,c=a("d7EF"),m=a.n(c),h={name:"CalendarMonth",props:{dayName:String,startDay:Number,lastDay:Number,monthName:String,year:String,holidays:Array},data:function(){return{daysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],totalDays:0,weeksNumber:0,startDateCounter:0,fromDay:0}},mounted:function(){this.start=this.daysOfWeek.indexOf(this.dayName),this.totalDays=new Array(this.lastDay-this.startDay+1).fill(this.startDay).map(function(t,e){return t+e});var t=new Array(this.start).fill("-1").map(function(t,e){return t-e});this.totalDays=t.concat(this.totalDays);var e=7-this.totalDays.length%7,a=new Array(7===e?0:e).fill(-20).map(function(t,e){return t-e});this.totalDays=this.totalDays.concat(a)},methods:{isHoliday:function(t){return-1!==t&&void 0!==this.holidays.find(function(e){return e.day===t})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"month"},[a("div",t._l(t.daysOfWeek,function(e){return a("div",{key:e+Math.random(),staticClass:"day"},[t._v("\n      "+t._s(e.charAt(0))+"\n    ")])})),t._v(" "),a("div",{staticClass:"month-name"},[t._v("\n    "+t._s(t.monthName)+" - "+t._s(t.year)+"\n  ")]),t._v(" "),a("div",t._l(t.totalDays,function(e,s){return a("div",{key:e+Math.random(),staticClass:"day",class:{active:e<0,weekend:e>0&&(s%7==0||s%7==6),weekday:e>0&&s%7!=0&&s%7!=6,holiday:t.isHoliday(e)}},[t._v("\n      "+t._s(e<0?" ":e)+"\n    ")])})),t._v(" "),a("div",t._l(t.holidays,function(e){return a("span",{key:e.day+Math.random(),staticClass:"holiday-list"},[t._v(t._s(e.day)+" - "+t._s(e.name)),a("br")])}))])},staticRenderFns:[]};var v=a("VU/8")(h,y,!1,function(t){a("3VqY")},"data-v-3e5c7200",null).exports,f=a("PJh5"),j=a.n(f),p=a("mtWM"),g=a.n(p),b={name:"Calendar",components:{month:v},data:function(){return{errors:{startingDate:[],countryCode:[],daysNumber:[]},infoMessage:"",startingDate:null,menu:!1,countryCode:null,daysNumber:null,months:[],monthsNames:["January","February","March","April","May","June","July","August","September","October","November","December"],codes:[]}},mounted:function(){var t=this;g.a.get("https://restcountries.eu/rest/v2/all?fields=alpha2Code").then(function(e){t.codes=e.data.map(function(t){return t.alpha2Code})}).catch(function(t){console.error(t),alert("Error fetching data")})},methods:{isValid:function(){this.errors={startingDate:[],countryCode:[],daysNumber:[]};var t=!0;return/\d{4}-\d{1,2}-\d{1,2}/.test(this.startingDate)||(this.errors.startingDate="Starting date must have the format yyyy-mm-dd",t=!1),(!/\d{1,5}/.test(this.daysNumber)||this.daysNumber<=0)&&(this.errors.daysNumber="The number of days must be greater than 0",t=!1),/[A-Z]{2}/.test(this.countryCode)||(this.errors.countryCode="The country code must be selected and it always should have 2 characters",t=!1),t},makeHolidaysByMonth:function(t){var e=this,a={January:[],February:[],March:[],April:[],May:[],June:[],July:[],August:[],September:[],October:[],November:[],December:[]};return t.forEach(function(t){var s=t.date.split("-"),r=m()(s,3),n=r[1],o=r[2],i=e.monthsNames[+n-1];a[i].push({day:+o,name:t.name})}),a},drawCalendar:function(){var t=this;if(this.isValid()){this.months.splice(0,this.months.length);var e=j()().year()-1;g.a.get("https://holidayapi.com/v1/holidays?key=d08155cc-f5e5-4243-a95c-4287c34d471b&country="+this.countryCode+"&year="+e+"&public=true").then(function(e){"200"!==e.data.status&&(t.infoMessage="Country code not found in holiday API, plz try another one (CLUE: US)");var a=t.makeHolidaysByMonth(e.data.holidays);t.$nextTick(function(){var e=t.daysNumber-1,s=j()(t.startingDate,"YYYY-MM-DD");0===e&&t.months.push({dayName:s.format("dddd"),startDay:+s.format("D"),lastDay:+s.format("D"),monthName:s.format("MMMM"),year:s.format("YYYY"),holidays:a[s.format("MMMM")].filter(function(t){return t.day>=+s.format("D")&&t.day<=+s.format("D")})});for(var r=function(){var r=s,n=s.clone();n.endOf("month");var o=n.diff(r,"days")+1;e-o<0?((n=s.clone()).add(e,"days"),e=0):e-=o,t.months.push({dayName:r.format("dddd"),startDay:+r.format("D"),lastDay:+n.format("D"),monthName:r.format("MMMM"),year:r.format("YYYY"),holidays:a[s.format("MMMM")].filter(function(t){return t.day>=+s.format("D")&&t.day<=+n.format("D")})}),n.add(1,"days"),s=n};e>0;)r()})}).catch(function(t){console.error(t),alert("Error fetching holiday data")})}}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-md":""}},[a("p",[t._v("The API used is now free only for the last year data, so... that's how it is working. Any date you pick, the year will be converted to last year. Also, seems like some country codes are not supported...")]),t._v(" "),a("p",[t._v("Chose a date, a number of days, a country and the page will generate all holidays from the date you choose up to the number of days you typed.")]),t._v(" "),t.errors.length?a("p",[a("b",[t._v("Please fix the following error(s):")]),t._v(" "),a("ul",t._l(t.errors,function(e){return a("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg2:"",xl2:""}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.startingDate,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.startingDate=e}},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Starting date","prepend-icon":"event","error-messages":t.errors.startingDate,readonly:""},slot:"activator",model:{value:t.startingDate,callback:function(e){t.startingDate=e},expression:"startingDate"}}),t._v(" "),a("v-date-picker",{on:{input:function(e){t.$refs.menu.save(t.startingDate)}},model:{value:t.startingDate,callback:function(e){t.startingDate=e},expression:"startingDate"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg2:"",xl2:""}},[a("v-text-field",{attrs:{id:"days",name:"days",label:"Number of days",mask:"###",min:"1",max:"365","error-messages":t.errors.daysNumber},model:{value:t.daysNumber,callback:function(e){t.daysNumber=e},expression:"daysNumber"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg2:"",xl2:""}},[a("v-select",{attrs:{items:t.codes,id:"ccode",name:"ccode",label:"Country code",mask:"AA",type:"String",autocomplete:"","error-messages":t.errors.countryCode},model:{value:t.countryCode,callback:function(e){t.countryCode=e},expression:"countryCode"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md3:"",lg3:"",xl3:""}},[a("v-btn",{on:{click:function(e){t.drawCalendar()}}},[t._v("\n          Generate calendar!!!\n        ")])],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"month-container",attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:"","align-center":"","justify-center":""}},t._l(t.months,function(t){return a("month",{key:t.monthName,attrs:{"day-name":t.dayName,"start-day":t.startDay,"last-day":t.lastDay,"month-name":t.monthName,year:t.year,holidays:t.holidays}})}))],1)],1)],1)},staticRenderFns:[]};var k=a("VU/8")(b,_,!1,function(t){a("cfQY")},"data-v-2e990367",null).exports;s.a.use(l.a);var D=new l.a({routes:[{path:"/helloWorld",name:"HelloWorld",component:d},{path:"/",name:"Calendar",component:k}]});a("7zck");s.a.config.productionTip=!1,s.a.use(n.a),new s.a({el:"#app",router:D,components:{App:i},template:"<App/>"})},cfQY:function(t,e){},rTc0:function(t,e){},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return a(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="uslO"},uxkO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12d85cfba3241605ecb6.js.map