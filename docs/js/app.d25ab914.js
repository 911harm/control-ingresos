(function(e){function t(t){for(var o,a,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);v&&v(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,a=1;a<r.length;a++){var i=r[a];0!==n[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},a={app:0},n={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9aa0ad66"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"2f8d250e"}[e]+".css",n=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===n))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===o||u===n)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var o=t&&t.target&&t.target.src||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],v.parentNode.removeChild(v),r(s)},v.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){a[e]=0})));var o=n[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(v);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,r[1](d)}n[e]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/control-ingresos/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var v=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"47d6":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var o=r("9c0c"),a=r.n(o);a.a},"9c0c":function(e,t,r){},ca2b:function(e,t,r){"use strict";var o=r("47d6"),a=r.n(o);a.a},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/registro"}},[e._v("Registro")])],1),r("router-view")],1)},n=[],s=(r("5c0b"),r("2877")),i={},c=Object(s["a"])(i,a,n,!1,null,null,null),l=c.exports,u=r("9483");Object(u["a"])("".concat("/control-ingresos/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var d=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Nav"),r("Header"),r("bodymain"),r("Footer")],1)},p=[],f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"my-5 text-center bg-dark text-white"},[e._v(" Organizacion y porcentajes a administrar ")])])}],m={},g=Object(s["a"])(m,f,h,!1,null,null,null),b=g.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"navigation"},[o("nav",{staticClass:"navbar navbar-dark bg-dark text-center"},[o("a",{staticClass:"navbar-brand mx-auto",attrs:{href:"#"}},[o("img",{staticClass:"d-inline-block align-top",attrs:{src:r("cf05"),width:"30",height:"30",alt:"",loading:"lazy"}}),e._v(" Control de ingresos ")])])])}],w={},C=Object(s["a"])(w,_,y,!1,null,null,null),x=C.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container bg-dark c-body"},[r("h2",{staticClass:"text-white font-italic"},[e._v("Control de Ingresos")]),r("div",{staticClass:"row px-5"},[r("div",{staticClass:"bg-success col-12 col-md-5 my-3 text-white rounded-lg"},[r("form",[e._m(0),r("div",{staticClass:"form-group"},[r("label",[e._v("Ingresos Extras-Pasivos")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.other.positivo,expression:"other.positivo"}],staticClass:"form-control",attrs:{type:"number",placeholder:"200.000 $"},domProps:{value:e.other.positivo},on:{input:function(t){t.target.composing||e.$set(e.other,"positivo",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Día de control")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"form-control",attrs:{id:"day"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.day=t.target.multiple?r:r[0]}}},e._l(e.Days,(function(t,o){return r("option",{key:o,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._m(1)])]),r("div",{staticClass:"separador col-12 col-md-2"}),r("div",{staticClass:"bg-danger col-12 col-md-5 my-3 text-white rounded-lg"},[r("form",[r("div",{staticClass:"form-group"},[r("label",[e._v("Deberes este día")]),r("div",{},[15===e.day?r("div",e._l(e.deberes15,(function(t,o){return r("div",{key:o},[r("label",[e._v(e._s(o))]),r("br")])})),0):e._e(),30===e.day?r("div",e._l(e.deberes31,(function(t,o){return r("div",{key:o},[r("label",[e._v(e._s(o))]),r("br")])})),0):e._e(),r("hr"),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.other.state,expression:"other.state"}],attrs:{type:"checkbox",id:"other",value:"true"},domProps:{checked:Array.isArray(e.other.state)?e._i(e.other.state,"true")>-1:e.other.state},on:{change:function(t){var r=e.other.state,o=t.target,a=!!o.checked;if(Array.isArray(r)){var n="true",s=e._i(r,n);o.checked?s<0&&e.$set(e.other,"state",r.concat([n])):s>-1&&e.$set(e.other,"state",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.other,"state",a)}}}),e._v("Agregar")]),r("br"),e.other.state?r("div",[r("label",[e._v("Gasto Adicional")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.other.title,expression:"other.title"}],attrs:{type:"text",name:"gasto-adicional-title",id:"gasto-adicional-title",placeholder:"Motivo"},domProps:{value:e.other.title},on:{input:function(t){t.target.composing||e.$set(e.other,"title",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.other.price,expression:"other.price"}],attrs:{type:"number",name:"gasto-adicional",id:"gastoadicional",placeholder:"$"},domProps:{value:e.other.price},on:{input:function(t){t.target.composing||e.$set(e.other,"price",t.target.value)}}})]):e._e()])]),r("hr"),r("div",[r("h5",[e._v("Resumen del Día")]),r("table",{staticClass:"table table-striped"},[r("tbody",[r("tr",[r("th",{attrs:{scope:"row"}},[e._v("Para Deberes")]),r("td",[e._v(e._s(e.sumaDeberes))])]),r("tr",[r("th",{attrs:{scope:"row"}},[e._v("Para Ahorrar")]),r("td",[e._v(e._s(e.sumaAhorro))])]),r("tr",[r("th",{attrs:{scope:"row"}},[e._v("Para Inverciones")]),r("td",[e._v(e._s(e.sumaInversion))])])])])])])]),r("a",{staticClass:"btn btn-success mb-3 btn-block text-white",attrs:{href:"#"},on:{click:e.registrar}},[e._v("Registrar")])])])},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",[e._v('Ingresos Activos ""Fijos""')]),r("input",{staticClass:"form-control",attrs:{type:"number",placeholder:"500,000 $"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group pb-3"},[r("label",[e._v("Comentario")]),r("textarea",{staticClass:"form-control",attrs:{id:"commentary",rows:"2"}})])}],E={name:"bodymain",data:function(){return{registro:[],Days:[5,10,15,20,25,30],day:"",deberes:{base:4e5,total:""},other:{state:"",title:"",price:"",positivo:""},deberes15:{Comida:130,Arriendo:250,Internet:70},deberes31:{Comida:130,Banco:20}}},methods:{registrar:function(){if(this.other.positivo&&this.day){var e={day:this.day,ingresoT:this.other.positivo,deberes:this.other.price,ahorro:this.sumaAhorro};this.registro.push(e);var t=JSON.stringify(this.registro);localStorage.setItem("registro",t),console.log("registrado el dia")}else alert("Ingresos y Dia de registro!")}},computed:{sumaInversion:function(){return this.other.positivo?.2*parseInt(this.other.positivo):"20% (acumula)"},sumaAhorro:function(){return this.other.positivo?.2*parseInt(this.other.positivo):"20%"},sumaDeberes:function(){return this.other.positivo?.6*parseInt(this.other.positivo):"Maximo 60%"}}},j=E,O=(r("ca2b"),Object(s["a"])(j,k,A,!1,null,"bc6068f4",null)),$=O.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"bg-dark text-white my-4 pt-1"},[r("p",{staticClass:"text-center w-100 font-weight-bold"},[e._v("All Right Reserved to "),r("strong",[e._v("911harm")]),e._v("©2020")])])}],I={},S=Object(s["a"])(I,P,N,!1,null,null,null),D=S.exports,T={name:"Home",components:{Header:b,Nav:x,Bodymain:$,Footer:D}},B=T,F=Object(s["a"])(B,v,p,!1,null,null,null),H=F.exports;o["a"].use(d["a"]);var M=[{path:"/",name:"Home",component:H},{path:"/registro",name:"Registro",component:function(){return r.e("about").then(r.bind(null,"c5fa"))}}],R=new d["a"]({mode:"history",base:"/control-ingresos/",routes:M}),L=R,q=r("2f62");o["a"].use(q["a"]);var J=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:L,store:J,render:function(e){return e(l)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d25ab914.js.map