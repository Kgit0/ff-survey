(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{20:function(e,t,a){},43:function(e){e.exports=JSON.parse('["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"]')},48:function(e,t,a){e.exports=a(86)},53:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(10),r=a.n(o),i=a(29),l=(a(53),a(6)),c=a(7),p=a(12),u=a(11),d=a(13),m=a(17),h=(a(20),a(4)),y=a.n(h),g=a(15),f=a(16),b=a.n(f),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).next=function(){a.setState({loading:!0}),a.props.history.push("/ff-survey/Select",{stations:a.state.stations})},a.get=Object(g.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://192.168.43.94:8000/api/pioneer/6.601838-3.351486",{headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}});case 3:return e.next=5,e.sent.json();case 5:t=e.sent,a.setState({stations:t}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),a.locate=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=5;break}return e.next=3,navigator.geolocation.getCurrentPosition((function(e,t){}));case 3:e.next=6;break;case 5:alert("Please use a different browser or try a different browser");case 6:case"end":return e.stop()}}),e)}))),a.state={stations:[],loading:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement(b.a,{active:this.state.loading,spinner:!0},s.a.createElement("div",{className:"App",style:{display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("div",{className:"main"},s.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},s.a.createElement("h1",{className:""},"Welcome")),s.a.createElement("div",{style:{height:"1px",background:"var(--Color3)"}}),s.a.createElement("h3",null,"Hello,"),s.a.createElement("p",null,"Thanks so much for agreeing to help out with this survey"),s.a.createElement("p",null,"This would also help ensure fellow Nigerians know ",s.a.createElement("b",null,"where")," to look to get the best quality fuel at the lowest prices"),s.a.createElement("p",null,'Thanks once again, please Click "Next" to continue'),s.a.createElement("button",{onClick:this.next},"Next"))))}}]),t}(n.Component),E=a(23),O=a(18),k=a(43),w=a(5),C=(a(39),a(21));function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var S=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},{base_url:"https://fuel-finder-001.herokuapp.com"}),j=Object(O.c)({accessToken:"pk.eyJ1IjoibmFwcHMtbmJpIiwiYSI6ImNqcXpsNHI5ZDBlYmMzeG52NzJ6YWlxcXMifQ.z0APpgMYfKagA9LNS7McYQ"}),P=function(e){var t,a=e.stations,n=e.selected,o=e.selectFunc,r=e.reff;return void 0===a||(t=a.map((function(e,t){var a=t,i=e,l=n.id===e.id,c={key:e.id,onClick:function(e){o(i,a)}};return l&&(c.ref=r),s.a.createElement("li",c,s.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:"5px"},className:l?"selected":""},s.a.createElement("p",{style:{fontSize:20}},e.name),s.a.createElement("p",{style:{fontSize:15,color:"".concat(l?"var(--bgColor1)":"var(--textColor2)"),alignSelf:"flex-end"}},e.address)),s.a.createElement("hr",null))}))),t},D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).next=function(){a.state.stationSel?(a.setState({loading:!0}),a.props.history.push("/ff-survey/Form",{station:a.state.stationSel})):w.b.info("Please select a station first",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},a.select=function(e){a.setState({stationSel:e,location:{lat:e.pos.lat,long:e.pos.long}})},a.getLoc=Object(g.a)(y.a.mark((function e(){var t,n,s,o,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.state,n=a.state.address,e.next=5,fetch("https://nominatim.openstreetmap.org/search?format=json&limit=10&countrycodes=ng&q=".concat(n,",").concat(t),{method:"GET",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}});case 5:return s=e.sent,e.next=8,s.json();case 8:return o=e.sent,e.next=11,o.map((function(e){return{name:e.display_name,pos:{lat:e.lat,long:e.lon}}}));case 11:r=e.sent,a.setState({potPlaces:r,showPotPlaces:"true"}),w.b.info("Please choose your area from the options",{position:"top-center",autoClose:8e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 20:case"end":return e.stop()}}),e,null,[[0,16]])}))),a.getLocGmap=Object(g.a)(y.a.mark((function e(){var t,n,s,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:!0}),t=a.state.state,n=a.state.address,e.next=6,fetch("".concat(S.base_url,"/api/pioneer/address/").concat(n,",%20").concat(t),{method:"GET",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}});case 6:return s=e.sent,e.next=9,s.json();case 9:if(o=e.sent,200!==s.status){e.next=14;break}a.setState({potPlaces:o,showPotPlaces:"true",loading:!1}),e.next=15;break;case 14:throw o;case 15:e.next=22;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0),a.setState({loading:!1}),w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 22:case"end":return e.stop()}}),e,null,[[0,17]])}))),a.get=function(){var e=Object(g.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:!0}),e.next=4,fetch("".concat(S.base_url,"/api/pioneer/stations/").concat(t.lat,"-").concat(t.long),{headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}});case 4:return e.next=6,e.sent.json();case 6:n=e.sent,a.setState({stations:n.map((function(e){return{name:e.name,address:e.address,id:e.id,pos:{lat:e.coord.lat,long:e.coord.long},petrol:e.petrol,days_open:e.days_open,edited:e.edited||!1,openingTime:e.openingTime,closingTime:e.closingTime}})),location:{lat:t.lat,long:t.long},loading:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({loading:!1}),w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),a.handleKeyPress=function(e){"Enter"===e.key&&(a.getLocGmap(),a.setState({loading:!0}))},a.state={windowDimensions:{width:0,height:0},stations:"",stationSel:!1,state:"Lagos",address:"",potPlaces:[],showPotPlaces:!1,location:{lat:6.5886591,long:3.3471763},loading:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(E.a)(a)),a.active=Object(n.createRef)(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.active.current&&this.active.current.scrollIntoView({behavior:"smooth",block:"start"})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions);try{console.log("yay"),console.log(typeof this.props.location.state.location),"undefined"!==typeof this.props.location.state.location?(this.get(this.props.location.state.location),console.log("yay")):(console.log("not undef"),w.b.info("Please enter your area in the search bar",{position:"top-center",autoClose:8e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}catch(e){console.log(e)}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({windowDimensions:{width:window.innerWidth,height:window.innerHeight}})}},{key:"render",value:function(){var e=this,t=s.a.createElement("div",{className:"dropdown"},s.a.createElement("div",{className:"searchbar"},s.a.createElement("select",{style:{padding:"7px",flexGrow:1},onChange:function(t){e.setState({state:t.target.value})},defaultValue:"Lagos"},k.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)}))),s.a.createElement("input",{autoFocus:!0,onChange:function(t){e.setState({address:t.target.value})},style:{flexGrow:2,padding:"7px"},placeholder:"Please enter your address ex.27 road Festac, No 2 Ipodo street",onKeyPress:this.handleKeyPress}),s.a.createElement("div",null,s.a.createElement("button",{style:{borderRadius:0,padding:"5px 5px",fontSize:"15px"},className:"wide",onClick:this.getLocGmap}," Search "))),s.a.createElement("div",{className:"dropdown-content",style:{display:"".concat(this.state.showPotPlaces?"block":"none")}},this.state.potPlaces.length>0?this.state.potPlaces.map((function(t,a){return s.a.createElement("div",{onClick:function(a){e.setState({showPotPlaces:!1}),e.get(t.pos)},key:a,style:{display:"flex",flexDirection:"column",padding:"5px"}},s.a.createElement("p",{style:{fontSize:15}},t.name))})):s.a.createElement("div",{onClick:function(){e.setState({showPotPlaces:!1})},style:{display:"flex",flexDirection:"column",padding:"5px",cursor:"pointer"}},s.a.createElement("p",{style:{fontSize:15}},"No places match that name")))),a=s.a.createElement(j,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"".concat(this.state.windowDimensions.width<600?"40vh":"70vh"),width:"".concat(this.state.windowDimensions.width<600?"100%":"50vw")},center:[this.state.location.long,this.state.location.lat],zoom:[13]},""!==this.state.stations?s.a.createElement(n.Fragment,null,s.a.createElement(O.b,{type:"circle",id:"markerF",paint:{"circle-color":"#ff5200","circle-stroke-width":1,"circle-stroke-color":"#fff","circle-stroke-opacity":1}},this.state.stations.filter((function(e){return!0===!e.edited})).map((function(t,a){return s.a.createElement(O.a,{key:t.id,onClick:function(a){e.select(t)},coordinates:[t.pos.long,t.pos.lat]})}))),s.a.createElement(O.b,{type:"circle",id:"marker",paint:{"circle-color":"#2deb0c","circle-stroke-width":1,"circle-stroke-color":"#fff","circle-stroke-opacity":1}},this.state.stations.filter((function(e){return!0===e.edited})).map((function(t,a){return s.a.createElement(O.a,{key:t.id,onClick:function(a){e.select(t)},coordinates:[t.pos.long,t.pos.lat]})}))),s.a.createElement(O.b,{type:"circle",id:"Smarker",paint:{"circle-color":"rgba(34, 34, 34, 0)","circle-stroke-width":2,"circle-stroke-color":"#0c86eb","circle-stroke-opacity":1}},this.state.stationSel?s.a.createElement(O.a,{coordinates:[this.state.stationSel.pos.long,this.state.stationSel.pos.lat]}):"")):null),o=s.a.createElement("div",{className:"Slist",style:{height:"".concat(this.state.windowDimensions.width<600?"40vh":"70vh")}},s.a.createElement("h2",null,"Nearby filling stations"),s.a.createElement("hr",null),s.a.createElement("ul",null,""!==this.state.stations?s.a.createElement(P,{selectFunc:this.select,selected:this.state.stationSel,stations:this.state.stations,reff:this.active}):s.a.createElement("p",{style:{fontSize:20}},"Please choose a location to show list of available stations")));return s.a.createElement(b.a,{active:this.state.loading,spinner:!0},s.a.createElement("div",{className:"main main2"},this.state.windowDimensions.width<600?s.a.createElement("div",{className:"mobileMapView"},a,t,o):s.a.createElement("div",{className:"pcMapView"},t,s.a.createElement("div",{className:"F-row"},a,o)),s.a.createElement("button",{className:this.state.stationSel?"wide":"wide disabled",onClick:this.next}," Next "),s.a.createElement(w.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})))}}]),t}(n.Component),N=a(44),T=a(32),_=a.n(T),F=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e,t){var n,s=e.target.type,o=e.target.name,r=e.target.value,i=a.state.errs;if("checkbox"===s){var l=a.state.DaysOpen;l[o]=e.target.checked,Object.values(l).includes(!0)?i.DaysOpen=!1:i.DaysOpen=!0,a.setState({DaysOpen:l,errs:i})}"text"!==s&&"number"!==s||(i[o]=""===r||r<1,a.setState((n={},Object(C.a)(n,o,r),Object(C.a)(n,"errs",i),n)))},a.submit=Object(g.a)(y.a.mark((function e(){var t,n,s,o,r,i,l,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.validate(),e.prev=1,a.setState({loading:!0}),!Object.values(a.state.errs).includes(!0)){e.next=9;break}return a.setState({loading:!1}),e.abrupt("return");case 9:return t=a.state.name,n=a.state.address,s=a.state.Opening_time,o=a.state.Closing_time,r=a.state.pumps_T,i=a.state.Fuel_price,l=a.state.DaysOpen,c=JSON.stringify({name:t,address:n,opening:s,closing:o,petrol:{price:i,pumps:r},days_open:l}),e.next=19,fetch("".concat(S.base_url,"/api/pioneer/").concat(a.props.location.state.station.id,"/"),{method:"put",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:c});case 19:return e.next=21,e.sent.json();case 21:"success"===e.sent?(a.setState({loading:!0}),a.props.history.push("/ff-survey/Appreciation",{location:a.props.location.state.station.pos})):(a.setState({loading:!1}),w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 23:e.next=30;break;case 25:e.prev=25,e.t0=e.catch(1),a.setState({loading:!1}),w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[1,25]])}))),a.validate=function(){var e=a.state.name,t=a.state.address,n=a.state.pumps_T,s=a.state.Fuel_price,o=Object.values(a.state.DaysOpen).includes(!0),r=a.state.errs;""===e&&(r.name=!0),""===t&&(r.address=!0),""===n&&(r.pumps_T=!0),""===s&&(r.Fuel_price=!0),o||(r.DaysOpen=!0),a.setState({errs:r})};try{a.state={name:"",address:"",Opening_time:"",Closing_time:"",Fuel_price:"",pumps_T:"",DaysOpen:{Sunday:a.props.location.state.station.days_open.Sunday||!1,Monday:a.props.location.state.station.days_open.Monday||!1,Tuesday:a.props.location.state.station.days_open.Tuesday||!1,Wednesday:a.props.location.state.station.days_open.Wednesday||!1,Thursday:a.props.location.state.station.days_open.Thursday||!1,Friday:a.props.location.state.station.days_open.Friday||!1,Saturday:a.props.location.state.station.days_open.Saturday||!1},errs:{name:!1,address:!1,Opening_time:!1,Closing_time:!1,Fuel_price:!1,pumps_T:!1,DaysOpen:!1},submitable:!1,loading:!1}}catch(n){w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),a.props.history.push("/ff-survey/intro")}return a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){try{var e=this.props.location.state.station;console.log(e);var t=Object(N.a)({},e.days_open);console.log(t);var a=this.state.DaysOpen;a.Sunday=t.Sunday,a.Monday=t.Monday,a.Tuesday=t.Tuesday,a.Wednesday=t.Wednesday,a.Thursday=t.Thursday,a.Friday=t.Friday,a.Saturday=t.Saturday,this.setState({name:e.name,address:e.address,Opening_time:e.openingTime,Closing_time:e.closingTime,Fuel_price:e.petrol.price,pumps_T:e.petrol.pumpsTotal,DaysOpen:a})}catch(n){w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),this.props.history.push("/ff-survey/intro"),console.log(n)}}},{key:"render",value:function(){try{return s.a.createElement(b.a,{active:this.state.loading,spinner:!0},s.a.createElement("form",{className:"main",onSubmit:function(e){return e.preventDefault(),!1}},s.a.createElement("h1",null,"Station Details"),s.a.createElement("hr",null),s.a.createElement("h3",null,"Please help us fill this form"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("label",null,"Name"),s.a.createElement("input",{name:"name",type:"text",defaultValue:this.state.name,onChange:this.onChange,className:this.state.errs.name?"err":""}),s.a.createElement("p",{className:this.state.errs.name?"err":"noErr"},"Please enter the name of the station"),s.a.createElement("br",null),s.a.createElement("label",null,"Address"),s.a.createElement("input",{name:"address",type:"text",defaultValue:this.state.address,onChange:this.onChange,className:this.state.errs.address?"err":""}),s.a.createElement("p",{className:this.state.errs.address?"err":"noErr"},"Please the address of the station"),s.a.createElement("br",null),s.a.createElement("label",null,"Fuel Price"),s.a.createElement("input",{name:"Fuel_price",type:"number",min:"0",defaultValue:this.state.Fuel_price,onChange:this.onChange}),s.a.createElement("p",{className:this.state.errs.Fuel_price?"err":"noErr"},"Please enter the number of pumps in the station"),s.a.createElement("br",null),s.a.createElement("label",null,"Opening time (24 hours)"),s.a.createElement(_.a,{name:"Opening_time",type:"timefield",value:this.state.Opening_time,input:s.a.createElement("input",null),onChange:this.onChange,colon:":",showSeconds:!1}),s.a.createElement("br",null),s.a.createElement("label",null,"Closing time (24 hours)"),s.a.createElement(_.a,{name:"Closing_time",type:"timefield",value:this.state.Closing_time,input:s.a.createElement("input",null),onChange:this.onChange,colon:":",showSeconds:!1}),s.a.createElement("br",null),s.a.createElement("label",null,"Number of pumps"),s.a.createElement("input",{name:"pumps_T",type:"number",min:"0",defaultValue:this.state.pumps_T,onChange:this.onChange}),s.a.createElement("p",{className:this.state.errs.pumps_T?"err":"noErr"},"Please enter the number of pumps in the station"),s.a.createElement("br",null),s.a.createElement("label",null,"Days Open"),s.a.createElement("p",{className:this.state.errs.DaysOpen?"err":"noErr"},"Please select open days"),s.a.createElement("div",{className:"F row j-start"},s.a.createElement("input",{type:"checkbox",name:"Sunday",defaultChecked:this.state.DaysOpen.Sunday,onChange:this.onChange}),s.a.createElement("label",null,"Sunday")),s.a.createElement("div",{className:"F row j-start"},s.a.createElement("input",{type:"checkbox",name:"Monday",defaultChecked:this.state.DaysOpen.Monday,onChange:this.onChange}),s.a.createElement("label",null,"Monday")),s.a.createElement("div",{className:"F row j-start"},s.a.createElement("input",{type:"checkbox",name:"Tuesday",defaultChecked:this.state.DaysOpen.Tuesday,onChange:this.onChange}),s.a.createElement("label",null,"Tuesday")),s.a.createElement("div",{className:"F row j-start"},s.a.createElement("input",{type:"checkbox",name:"Wednesday",defaultChecked:this.state.DaysOpen.Wednesday,onChange:this.onChange}),s.a.createElement("label",null,"Wednesday")),s.a.createElement("div",{className:"F row j-start"},s.a.createElement("input",{type:"checkbox",name:"Thursday",defaultChecked:this.state.DaysOpen.Thursday,onChange:this.onChange}),s.a.createElement("label",null,"Thursday")),s.a.createElement("div",{className:"F row j-start"},s.a.createElement("input",{type:"checkbox",name:"Friday",defaultChecked:this.state.DaysOpen.Friday,onChange:this.onChange}),s.a.createElement("label",null,"Friday")),s.a.createElement("div",{className:"F row j-start"},s.a.createElement("input",{type:"checkbox",name:"Saturday",defaultChecked:this.state.DaysOpen.Saturday,onChange:this.onChange}),s.a.createElement("label",null,"Saturday")),s.a.createElement("button",{onClick:this.submit},"Submit"),s.a.createElement(w.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})))}catch(e){w.b.error("an error occurred",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),this.props.history.push("/ff-survey/intro")}}}]),t}(n.Component),B=a(45),M=a.n(B),H={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).next=function(){a.setState({loading:!0}),a.props.history.push("/ff-survey/Select",{location:a.props.location.state.location})},a.done=function(){a.setState({isOpen:!0})},a.state={loading:!1,isOpen:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){try{console.log(this.props.location.state.location)}catch(e){this.setState({loading:!0}),this.props.history.push("/ff-survey/intro")}}},{key:"render",value:function(){var e=this;return s.a.createElement(b.a,{active:this.state.loading,spinner:!0},s.a.createElement(M.a,{isOpen:this.state.isOpen,style:H,contentLabel:"Example Modal",onRequestClose:function(){e.setState({isOpen:!1})}},s.a.createElement("h1",null,"Thank you for helping out ",s.a.createElement("span",{role:"img","aria-label":"smiley face"},"\ud83d\ude42"))),s.a.createElement("div",{className:"main"},s.a.createElement("h2",null," Thank you"),s.a.createElement("p",null,"Thank you for your help"),s.a.createElement("p",null,"It is highly appreciated"),s.a.createElement("a",{onClick:this.next},s.a.createElement("p",{className:"link"},"Please click here if you would like to add another station.")),s.a.createElement("a",{onClick:this.done}," ",s.a.createElement("p",{className:"link"}," Click here to exit"))))}}]),t}(n.Component);console.log("/ff-survey");var A=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(m.d,null,s.a.createElement(m.a,{from:"/ff-survey/",to:"/ff-survey/Intro",exact:!0}),s.a.createElement(m.b,{path:"/ff-survey/Intro",component:v}),s.a.createElement(m.b,{path:"/ff-survey/Select",component:D}),s.a.createElement(m.b,{path:"/ff-survey/Form",component:F})," ",s.a.createElement(m.b,{path:"/ff-survey/Appreciation",component:W}))}}]),t}(n.Component);r.a.render(s.a.createElement(i.a,null," ",s.a.createElement(A,null)," "),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ca7928a0.chunk.js.map