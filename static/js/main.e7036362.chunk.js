(this.webpackJsonpcodica_test_weather=this.webpackJsonpcodica_test_weather||[]).push([[0],{123:function(e,t,r){"use strict";r.r(t);var a,c,n,i=r(0),o=r.n(i),s=r(27),u=r.n(s),l=r(15),d=r(69),b=r(9),j=r(13),p=r(26),h=r(70),O=r.n(h),f=r(5),m=r(22),y={cityId:Object(b.b)("product/productId"),addCityRequest:Object(b.b)("city/addRequest"),addCitySuccess:Object(b.b)("city/addSuccess"),addCityError:Object(b.b)("city/addError"),deleteCity:Object(b.b)("city/delete"),updateCityRequest:Object(b.b)("city/updateRequest"),updateCitySuccess:Object(b.b)("city/updateSuccess"),updateCityError:Object(b.b)("city/updateError"),getHourlyWeatherRequest:Object(b.b)("city/getRequest"),getHourlyWeatherSuccess:Object(b.b)("city/getSuccess"),getHourlyWeatherError:Object(b.b)("city/getError"),errorOff:Object(b.b)("error/off")},g=Object(b.c)([],(a={},Object(f.a)(a,y.addCitySuccess,(function(e,t){return[].concat(Object(m.a)(e),[t.payload])})),Object(f.a)(a,y.deleteCity,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(f.a)(a,y.updateCitySuccess,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),a)),x=Object(b.c)("",Object(f.a)({},y.cityId,(function(e,t){return t.payload}))),v=Object(b.c)([],Object(f.a)({},y.getHourlyWeatherSuccess,(function(e,t){return t.payload.hourly}))),C=Object(b.c)(!1,(c={},Object(f.a)(c,y.addCityRequest,(function(){return!0})),Object(f.a)(c,y.addCitySuccess,(function(){return!1})),Object(f.a)(c,y.addCityError,(function(){return!1})),Object(f.a)(c,y.updateCityRequest,(function(){return!0})),Object(f.a)(c,y.updateCitySuccess,(function(){return!1})),Object(f.a)(c,y.updateCityError,(function(){return!1})),Object(f.a)(c,y.getHourlyWeatherRequest,(function(){return!0})),Object(f.a)(c,y.getHourlyWeatherSuccess,(function(){return!1})),Object(f.a)(c,y.getHourlyWeatherError,(function(){return!1})),c)),w=Object(b.c)({error:!1},(n={},Object(f.a)(n,y.addCityError,(function(e,t){return{error:!0,message:t.payload.message}})),Object(f.a)(n,y.addCitySuccess,(function(){return{error:!1}})),Object(f.a)(n,y.updateCityError,(function(e,t){return{error:!0,message:t.payload.message}})),Object(f.a)(n,y.updateCitySuccess,(function(){return{error:!1}})),Object(f.a)(n,y.getHourlyWeatherError,(function(e,t){return{error:!0,message:t.payload.message}})),Object(f.a)(n,y.getHourlyWeatherSuccess,(function(){return{error:!1}})),Object(f.a)(n,y.errorOff,(function(e,t){return t.payload})),n)),S=Object(j.c)({cities:g,cityId:x,hourlyWeatherCity:v,loading:C,error:w}),W={key:"root",storage:O.a},k=Object(p.g)(W,Object(j.c)({cities:S})),H=Object(b.a)({reducer:k,middleware:Object(b.d)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})}),_=Object(p.h)(H),N=(r(97),r(36)),E=r(10),D=r(157),R=(r(98),r(20)),I=r.n(R),L=r(30),q=r(44),T=r.n(q),M="122a2fa1f27a8aa65f79180c2a64b5f2";function B(){return(B=Object(L.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/weather?q=".concat(t,"&APPID=").concat(M));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function F(){return(F=Object(L.a)(I.a.mark((function e(t,r,a){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/onecall?lat=".concat(t,"&lon=").concat(r,"&exclude=").concat(a,"&appid=").concat(M));case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}T.a.defaults.baseURL="https://api.openweathermap.org/data/2.5";var U={getWeather:function(e){return B.apply(this,arguments)},getHourlyWeather:function(e,t,r){return F.apply(this,arguments)}},A=function(e,t){return function(){var r=Object(L.a)(I.a.mark((function r(a){var c,n;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(y.addCityRequest()),r.prev=1,r.next=4,U.getWeather(e);case 4:c=r.sent,n=t.find((function(e){return e.id===c.id})),a(n?y.addCityError({message:"This city has already been declared"}):y.addCitySuccess(c)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),a(y.addCityError(r.t0));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(L.a)(I.a.mark((function t(r){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(y.updateCityRequest()),t.prev=1,t.next=4,U.getWeather(e);case 4:a=t.sent,r(y.updateCitySuccess(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r(y.updateCityError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e,t,r){return function(){var a=Object(L.a)(I.a.mark((function a(c){var n;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(y.getHourlyWeatherRequest()),a.prev=1,a.next=4,U.getHourlyWeather(e,t,r);case 4:n=a.sent,c(y.getHourlyWeatherSuccess(n)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),c(y.getHourlyWeatherError(a.t0));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},z=r(150),J=r(151),Y=r(152),Z=r(155),K=r(154),Q=r(153),V=r(156),X=r(125),$=r(2),ee=Object(z.a)({root:{maxWidth:345,marginBottom:"20px"},media:{height:140,backgroundColor:"rgba(100, 180, 250, 0.9)"}});function te(e){var t=e.cityData,r=Object(l.b)(),a=Object(E.g)(),c=t.name,n=t.main,i=t.weather,o=t.id,s=t.dt,u=n.temp,d=n.feels_like,b=n.pressure,j=n.humidity,p=i.map((function(e){return e.icon})),h=new Date(1e3*s).toLocaleTimeString(),O=ee();return Object($.jsx)($.Fragment,{children:Object($.jsxs)(J.a,{className:O.root,children:[Object($.jsxs)(Y.a,{onClick:function(e){var t=e.currentTarget.id;r(y.cityId(t)),a.push("/cityDetails/".concat(c,"/").concat(t))},id:o,children:[Object($.jsx)(Q.a,{className:O.media,image:"http://openweathermap.org/img/wn/".concat(p[0],"@2x.png"),title:"Contemplative Reptile"}),Object($.jsxs)(K.a,{children:[Object($.jsx)(X.a,{gutterBottom:!0,variant:"h5",component:"h2",children:c}),Object($.jsxs)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:["temperature: ",Math.floor(u-273)]}),Object($.jsxs)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:["feels_like: ",Math.floor(d-273)]}),Object($.jsxs)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:["pressure: ","".concat(Math.floor(7.464*b/10)," \u043c\u043c.\u0440\u0442.\u0441\u0442")]}),Object($.jsxs)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:["Humidity: ",j," %"]}),Object($.jsxs)(X.a,{variant:"body2",color:"textSecondary",component:"p",children:["last update ",h]})]})]}),Object($.jsxs)(Z.a,{children:[Object($.jsx)(V.a,{size:"small",color:"primary",onClick:function(){r(G(c))},children:"Update"}),Object($.jsx)(V.a,{size:"small",color:"primary",onClick:function(e){var t=e.target.parentElement.id;r(y.deleteCity(+t))},id:o,children:"delete"})]})]})})}var re=r(74),ae=r.n(re);function ce(){var e=Object(l.c)((function(e){return e.cities.cities}));return Object($.jsx)($.Fragment,{children:Object($.jsx)("ul",{className:ae.a.list,children:e.map((function(e){return Object($.jsx)(te,{cityData:e},e.id)}))})})}var ne=r(158),ie=r(163),oe=r(159),se=r(76),ue=r.n(se),le=r(75),de=r.n(le),be=r(31),je=r.n(be),pe=Object(z.a)((function(e){return{root:{textAlign:"center",position:"relative",backgroundImage:"linear-gradient( 180deg, rgb(63, 81, 181)  0%, rgba(126, 142, 235, 0.9) 100%)",color:"white"},main:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"50px",paddingRight:"50px",marginBottom:"20px"},title:{},buttonBack:{position:"absolute",left:"10px"},buttonUpdate:{position:"absolute",right:"10px"}}}));function he(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cities.cities})),r=Object(l.c)((function(e){return e.cities.cityId})),a=Object(l.c)((function(e){return e.cities.hourlyWeatherCity})).slice(0,25),c=Object(l.c)((function(e){return e.cities.loading})),n=t.find((function(e){return e.id===+r})),i=n.main,s=n.name,u=n.sys,d=n.weather,b=n.wind,j=n.dt,p=n.coord,h=n.clouds,O=i.temp,f=i.pressure,m=i.humidity;o.a.useEffect((function(){e(P(p.lat,p.lon,"minutely,daily"))}),[p,e]);var y=d.map((function(e){return e.icon})),g=new Date(1e3*j).toLocaleTimeString(),x=new Date(1e3*u.sunrise).toLocaleTimeString(),v=new Date(1e3*u.sunset).toLocaleTimeString(),C=pe();return Object($.jsxs)(D.a,{className:C.root,children:[Object($.jsxs)(N.b,{to:"/",className:C.buttonBack,children:[" ",Object($.jsx)(ne.a,{style:{color:"rgb(243, 227, 227)"},children:Object($.jsx)(de.a,{})})]}),Object($.jsx)(ne.a,{style:{color:"rgb(243, 227, 227)"},className:C.buttonUpdate,onClick:function(){e(G(s))},children:Object($.jsx)(ue.a,{})}),Object($.jsxs)(ie.a,{className:C.main,children:[Object($.jsxs)(ie.a,{className:C.title,children:[Object($.jsx)(X.a,{variant:"h4",noWrap:!0,children:s}),Object($.jsxs)(X.a,{variant:"h6",children:["(longitude: ",p.lon,"\xb0, latitude: ",p.lat,"\xb0)"]}),Object($.jsxs)(X.a,{variant:"h6",noWrap:!0,children:["last update ",g]}),Object($.jsxs)(X.a,{variant:"h6",noWrap:!0,children:["sunrise: ",x]}),Object($.jsxs)(X.a,{variant:"h6",noWrap:!0,children:["sunset: ",v]})]}),Object($.jsxs)(ie.a,{className:C.mainData,children:[Object($.jsxs)(X.a,{variant:"h4",noWrap:!0,children:[Math.floor(O-273)," C\xb0"]}),Object($.jsx)(X.a,{variant:"h4",children:"".concat(Math.floor(7.464*f/10)," mm.Hg")}),Object($.jsxs)(X.a,{variant:"h4",noWrap:!0,children:[m," %"]})]}),Object($.jsxs)(ie.a,{className:C.clouds,children:[Object($.jsxs)(X.a,{variant:"h6",noWrap:!0,children:["Clouds ",h.all," %"]}),Object($.jsx)(X.a,{variant:"h6",children:Object($.jsx)("div",{children:Object($.jsx)("img",{className:je.a.iconWeather,src:"http://openweathermap.org/img/wn/".concat(y[0],"@2x.png"),alt:y[0]})})}),Object($.jsxs)(X.a,{variant:"h6",noWrap:!0,children:["wind speed: ",b.speed," m/s"]})]})]}),c?Object($.jsx)(oe.a,{color:"secondary"}):Object($.jsx)("div",{className:je.a.hourlyTemp,children:Object($.jsx)("ul",{className:je.a.listHourTemp,children:a.map((function(e,t){var r=new Date(1e3*e.dt).getHours();r<10&&(r="0".concat(r));var a=(e.temp-273)/10*100,c=Math.floor(130*a/100);return Object($.jsxs)("li",{className:je.a.itemHourTemp,children:[Object($.jsx)("p",{className:je.a.temp,style:{marginTop:"".concat(40-Math.floor(e.temp-273),"px"),backgroundColor:"rgb(".concat(125+c,", ").concat(125,", ").concat(255-c,")")},children:Math.floor(e.temp-273)}),Object($.jsxs)("p",{className:je.a.time,children:[r,":00"]})]},e.dt)}))})})]})}var Oe=r(43),fe=r(160),me=r(161),ye=r(165),ge=r(164),xe=r(16),ve=r(77),Ce=r.n(ve),we=r.p+"static/media/lobster-v23-latin-regular.484e338f.woff2",Se={fontFamily:"Lobster",fontStyle:"normal",fontDisplay:"swap",fontWeight:400,src:"\n    local('Lobster'),    \n    url(".concat(we,") format('woff2')\n  ")},We=Object(z.a)((function(e){var t;return{"@font-face":[Se],root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={textAlign:"center",flexGrow:1,display:"none"},Object(f.a)(t,e.breakpoints.up("xs"),{display:"block"}),Object(f.a)(t,"fontFamily","Lobster"),t),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(xe.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(xe.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function ke(){var e=We(),t=(new Date).toLocaleDateString(),r=Object(l.c)((function(e){return e.cities.cities})),a=Object(l.c)((function(e){return e.cities.loading})),c=Object(l.c)((function(e){return e.cities.error})),n=o.a.useState(""),i=Object(Oe.a)(n,2),s=i[0],u=i[1],d=Object(l.b)();return Object($.jsx)("div",{className:e.root,children:Object($.jsx)(fe.a,{position:"static",children:Object($.jsxs)(me.a,{children:[Object($.jsx)(ne.a,{edge:"start",className:e.menuButton,color:"inherit",children:t}),Object($.jsx)(X.a,{className:e.title,variant:"h4",noWrap:!0,children:a?Object($.jsx)(oe.a,{color:"secondary"}):"Weather in city"}),c.error?Object($.jsx)(ge.a,{severity:"error",onClose:function(){d(y.errorOff({error:!1}))},children:c.message}):Object($.jsxs)("form",{className:e.search,onSubmit:function(e){e.preventDefault(),d(A(s,r)),u("")},children:[Object($.jsx)("div",{className:e.searchIcon,type:"submit",children:Object($.jsx)(Ce.a,{})}),Object($.jsx)(ye.a,{value:s,onChange:function(e){return u(e.target.value)},placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var He=r(162);function _e(){return Object($.jsxs)(X.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object($.jsx)(He.a,{color:"inherit",href:"https://github.com/SergiiPodlishchuk/codica_test_weather",target:"_blank",children:"My repository"})," ",(new Date).getFullYear(),"."]})}var Ne=Object(z.a)((function(e){return{footer:{backgroundImage:"linear-gradient( 180deg, rgba(126, 142, 235, 0.9) 0%, rgba(24, 56, 201, 0.9) 100%)",padding:e.spacing(6)}}}));function Ee(e){var t=Ne();return Object($.jsxs)("footer",{className:t.footer,children:[Object($.jsx)(X.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Made by home"}),Object($.jsx)(_e,{})]})}var De=function(){return Object($.jsx)(D.a,{maxWidth:"lg",children:Object($.jsxs)(N.a,{children:[Object($.jsx)(ke,{}),Object($.jsx)(i.Suspense,{fallback:Object($.jsx)("div",{children:"Hi"}),children:Object($.jsxs)(E.d,{children:[Object($.jsx)(E.b,{path:"/",exact:!0,component:ce}),Object($.jsx)(E.b,{path:"/cityDetails/:cityId",component:he}),Object($.jsx)(E.a,{to:"/"})]})}),Object($.jsx)(Ee,{})]})})};u.a.render(Object($.jsx)(l.a,{store:H,children:Object($.jsx)(d.a,{loading:null,persistor:_,children:Object($.jsx)(De,{})})}),document.getElementById("root"))},31:function(e,t,r){e.exports={listHourTemp:"CityWeatherDeails_listHourTemp__3CG7L",itemHourTemp:"CityWeatherDeails_itemHourTemp__2yqvZ",temp:"CityWeatherDeails_temp__237HS",time:"CityWeatherDeails_time__cNeBr"}},74:function(e,t,r){e.exports={list:"ListCards_list__3UluG"}},97:function(e,t,r){},98:function(e,t,r){}},[[123,1,2]]]);
//# sourceMappingURL=main.e7036362.chunk.js.map