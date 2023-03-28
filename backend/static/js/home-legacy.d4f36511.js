(function(){"use strict";var t={9531:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var n=o(144),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("MainMenu"),o("v-main",[o("HelloWorld")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("Copyright © 2022 by shkim")])])],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",[o("v-list-item",{staticClass:"px-2"},[o("v-icon",{attrs:{large:"",center:""}},[t._v("mdi-account")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-h6"},[t._v(" 사용자 이름 ")]),o("v-list-item-subtitle",[t._v("사용자@example.com")])],1)],1)],1),o("v-divider"),o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-folder")])],1),o("v-list-item-title",[t._v("내 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-multiple")])],1),o("v-list-item-title",[t._v("공유한 일기장")])],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-star")])],1),o("v-list-item-title",[t._v("찜한 일기장")])],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Vue.js - Django Web Programming")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("일기 게시글 리스트")]),o("v-btn",{attrs:{text:"",href:"/text_editor/"}},[t._v("텍스트 에디터(데모)")]),o("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("관리자 페이지")]),o("v-spacer"),o("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-account")]),t._v(t._s(t.me.username)+" "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",["Anonymous"===t.me.username?[o("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[o("v-list-item-title",[t._v("Login")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("register")}}},[o("v-list-item-title",[t._v("Register")])],1)]:[o("v-list-item",{on:{click:t.logout}},[o("v-list-item-title",[t._v("Logout")])],1),o("v-list-item",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[o("v-list-item-title",[t._v("Password change")])],1)]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Login form")])],1),o("v-card-text",[o("v-form",{ref:"loginForm",attrs:{id:"login-form"}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("Login")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Register form")])],1),o("v-card-text",[o("v-form",{ref:"registerForm",attrs:{id:"register-form"}},[o("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),o("v-text-field",{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"Password again",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("Register")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[o("v-toolbar-title",[t._v("Password change form")])],1),o("v-card-text",[o("v-form",{ref:"pwdchgForm",attrs:{id:"pwdchg-form"}},[o("v-text-field",{attrs:{label:"Old password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),o("v-text-field",{attrs:{label:"New password again",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("pwdchg")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("pwdchg")}}},[t._v("Password change")])],1)],1)],1)],1)},s=[],l=o(9669),c=o.n(l),d=new n.Z,g=d;c().defaults.xsrfCookieName="csrftoken",c().defaults.xsrfHeaderName="X-CSRFToken";var u={data:function(){return{drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"}}},watch:{me:function(t,e){console.log("watch.me()...",t,e),g.$emit("me_change",t)}},created:function(){console.log("created()..."),this.getUserInfo()},methods:{dialogOpen:function(t){console.log("dialogOpen()...",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"pwdchg"===t&&(this.dialog.pwdchg=!0)},cancel:function(t){console.log("cancel()...",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},save:function(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},login:function(){var t=this;console.log("login()...");var e=new FormData(document.getElementById("login-form"));c().post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login NOK")}))},register:function(){console.log("register()...");var t=new FormData(document.getElementById("register-form"));c().post("/api/register/",t).then((function(t){console.log("REGISTER POST RES",t),alert("user ".concat(t.data.username," created OK"))})).catch((function(t){console.log("REGISTER POST ERR.RESPONSE",t.response),alert("register NOK")}))},logout:function(){var t=this;console.log("logout()..."),c().get("/api/logout/").then((function(e){console.log("LOGOUT GET RES",e),alert("user ".concat(t.me.username," logout OK")),t.me={username:"Anonymous"}})).catch((function(t){console.log("LOGOUT GET ERR.RESPONSE",t.response),alert("logout NOK")}))},pwdchg:function(){var t=this;console.log("pwdchg()...");var e=new FormData(document.getElementById("pwdchg-form"));c().post("/api/pwdchg/",e).then((function(e){console.log("PWDCHG POST RES",e),alert("user ".concat(t.me.username," password change OK"))})).catch((function(t){console.log("PWDCHG POST ERR.RESPONSE",t.response),alert("password change NOK")}))},getUserInfo:function(){var t=this;console.log("getUserInfo()..."),c().get("/api/me/").then((function(e){console.log("GETUSERINFO GET RES",e),t.me=e.data})).catch((function(t){console.log("GETUSERINFO GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))}}},v=u,f=o(1001),p=o(3453),m=o.n(p),h=o(8320),w=o(5206),b=o(680),x=o(3237),_=o(7118),y=o(4497),O=o(1418),k=o(6232),E=o(6428),V=o(6816),Z=o(7620),C=o(2059),S=o(459),R=o(6768),T=o(3347),P=o(9762),I=o(5978),F=o(6656),N=o(7921),G=(0,f.Z)(v,a,s,!1,null,null,null),M=G.exports;m()(G,{VAppBar:h.Z,VAppBarNavIcon:w.Z,VBtn:b.Z,VCard:x.Z,VCardActions:_.h7,VCardText:_.ZB,VDialog:y.Z,VDivider:O.Z,VForm:k.Z,VIcon:E.Z,VList:V.Z,VListItem:Z.Z,VListItemContent:C.km,VListItemIcon:S.Z,VListItemSubtitle:C.oZ,VListItemTitle:C.V9,VMenu:R.Z,VNavigationDrawer:T.Z,VSpacer:P.Z,VTextField:I.Z,VToolbar:F.Z,VToolbarTitle:N.qW});var j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-4 text-center"},[o("br"),o("div",[o("v-row",[o("link",{attrs:{href:"../하루자국.png",rel:"shortcut icon",type:"image/x-icon"}}),o("h1",{staticClass:"text-center",attrs:{id:"HomeText"}},[t._v("하루 자국")])])],1),o("br"),o("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[t._l(t.items,(function(e,n){return o("v-col",{key:n,attrs:{cols:"6"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[o("v-card",{class:{"on-hover":r},attrs:{elevation:r?12:2}},[o("v-img",{attrs:{src:e.img,height:"225px"}},[o("v-card-title",{staticClass:"text-h6 white--text"},[o("v-row",{staticClass:"fill-height flex-column",attrs:{justify:"space-between"}},[o("p",{staticClass:"mt-4 subheading text-left"},[t._v(" "+t._s(e.title)+" ")]),o("div",[o("p",{staticClass:"ma-10 text-body-1 font-weight-bold font-italic text-center"},[t._v(" "+t._s(e.text)+" ")]),o("p",{staticClass:"text-caption font-weight-medium font-italic text-bottom",attrs:{id:"tag"}},[t._v(" "+t._s(e.tag)+" ")])])])],1)],1)],1)]}}],null,!0)})],1)}))],2)],1)},H=[],D={data:function(){return{items:[{title:"2023.03.21",text:"대학 축제에 나훈아가 와서 공연했어! 대박 존잼!!!!",tag:"# 축제 # 나훈아 # 공연.",img:"https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80"},{title:"2023.03.20",text:"티켓이 생겨서 처음으로 밴드 보러 갔어. 일렉기타 완전 좋았어. 행복해",tag:"# 밴드, # 행복 # 일렉기타",img:"https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},{title:"2023.03.19",text:"와 하늘이 너무 예뻐 마치 꿈나라 같아.",tag:"# 하늘 # 예뻐 # 꿈나라",img:"https://images.unsplash.com/photo-1542320868-f4d80389e1c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80"},{title:"2023.03.18",text:"여자친구랑 고양이 카페에서 고양이랑 뒹굴뒹굴 하루종일 놀았다. 고양이 최고",tag:"# 고양이 # 카페 # 여자친구",img:"https://th.bing.com/th/id/OIP.emqIME5C3-k5aQZMAV8w2AHaFj?w=228&h=180&c=7&r=0&o=5&pid=1.7"}],transparent:"rgba(255, 255, 255, 0)"}}},L=D,$=o(2102),B=o(9846),A=o(5189),U=o(7047),W=o(2877),K=(0,f.Z)(L,j,H,!1,null,null,null),q=K.exports;m()(K,{VCard:x.Z,VCardTitle:_.EB,VCol:$.Z,VContainer:B.Z,VHover:A.Z,VImg:U.Z,VRow:W.Z});var Q={components:{MainMenu:M,HelloWorld:q},data:function(){return{}}},Y=Q,J=o(7524),X=o(899),z=o(7877),tt=(0,f.Z)(Y,r,i,!1,null,null,null),et=tt.exports;m()(tt,{VApp:J.Z,VFooter:X.Z,VMain:z.Z});var ot=o(9132);n.Z.use(ot.Z);var nt=new ot.Z({});n.Z.config.productionTip=!1,new n.Z({vuetify:nt,render:function(t){return t(et)}}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,i){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],i=t[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,r,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.j=177}(),function(){var t={177:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var d=l(o)}for(e&&e(n);c<a.length;c++)i=a[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9531)}));n=o.O(n)})();
//# sourceMappingURL=home-legacy.d4f36511.js.map