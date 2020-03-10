(function(t){function e(e){for(var s,c,n=e[0],l=e[1],o=e[2],u=0,d=[];u<n.length;u++)c=n[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},r=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a67":function(t,e,a){"use strict";var s=a("827f"),i=a.n(s);i.a},2849:function(t,e,a){"use strict";var s=a("3d10"),i=a.n(s);i.a},"29ce":function(t,e,a){"use strict";var s=a("70c4"),i=a.n(s);i.a},3854:function(t,e,a){},"3d10":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[a("span",[t._v("Keepr")])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("My Dashboard")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn logout-btn",on:{click:t.logout}},[t._v("Logout")]):a("button",{staticClass:"btn login-btn",on:{click:t.login}},[t._v("Login")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),o=a.n(l);o.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var p={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),await this.$auth.getUserData(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout(),this.$store.dispatch("resetBearer"),this.$router.push({name:"home"})}}},u=p,d=(a("6231"),a("2877")),h=Object(d["a"])(u,c,n,!1,null,"726e002e",null),v=h.exports,m=a("335d"),f={name:"App",async beforeCreate(){await Object(m["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},b=f,C=Object(d["a"])(b,i,r,!1,null,null,null),k=C.exports,w=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[t._m(0),t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 w-100 pl-5"},[a("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"ml-5",attrs:{gutter:"15","transition-duration":"0.3s","item-selector":".item"}},t._l(t.publicKeeps,(function(t){return a("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t.id,staticClass:"item mt-3"},[a("Keep",{attrs:{keepData:t}})],1)})),0)])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row home-top-bg align-items-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",[a("h1",[t._v("Keepr")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row pt-4"},[a("div",{staticClass:"col-12 text-center mt-3"},[a("h3",{staticClass:"pb-2 pk-title"},[t._v("PUBLIC KEEPS")]),a("hr",{staticClass:"pb-2"})])])}],K=a("3f9b"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep"},[a("div",{staticClass:"card"},[t.keepData.isPrivate?a("div",{staticClass:"delete-keep text-right w-100"},[a("i",{staticClass:"far fa-times-circle",on:{click:function(e){return t.deleteKeep(t.keepData.id)}}})]):t._e(),a("div",{on:{click:function(e){return t.increasePublicViewCount()}}},[a("router-link",{attrs:{to:{name:"keepdetails",params:{keepId:t.keepData.id}}}},[a("img",{staticClass:"card-img-top",attrs:{src:t.keepData.img}})])],1),a("div",{staticClass:"card-body"},["vaultdetails"==this.$route.name?a("div",{staticClass:"remove-keep cp",on:{click:function(e){return t.removeKeep(t.keepData.id)}}},[a("i",{staticClass:"far fa-minus-square"}),a("div",{staticClass:"info"},[t._v("Remove from Vault")])]):t._e(),t.keepData.isPrivate?a("i",{staticClass:"edit-btn float-left fas fa-edit cp",on:{click:function(e){return t.editKeep(t.keepData)}}}):t._e(),a("h5",{staticClass:"text-center card-title"},[t._v(t._s(t.keepData.name))]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex text-center justify-content-between"},[t._m(0),a("div",{staticClass:"stats cp w-100"},[a("div",{staticClass:"btn-group dropup"},[t._m(1),this.$auth.isAuthenticated?a("div",{staticClass:"dropdown-menu text-center p-0"},[a("div",{staticClass:"dropdown-item p-1"},[a("div",{staticClass:"fb-share-button",attrs:{"data-href":t.keepData.img,"data-layout":"button","data-size":"large"},on:{click:function(e){return t.increaseShareCount()}}},[a("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u="+t.keepData.img+"&src=sdkpreparse"}},[a("i",{staticClass:"fab fa-facebook"})])])]),a("div",{staticClass:"dropdown-item p-1"},[a("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/intent/tweet?url="+t.keepData.img,"data-size":"large"},on:{click:function(e){return t.increaseShareCount()}}},[a("i",{staticClass:"fab fa-twitter-square"})])])]):t._e()])]),a("div",{staticClass:"stats cp w-100",on:{click:function(e){return t.collectKeep(t.keepData.id)}}},[a("i",{staticClass:"fas fa-box-open"})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"stats-container col-12 d-flex text-center justify-content-between"},[a("div",{staticClass:"w-100"},[a("p",[t._v("Views:")]),a("p",[t._v(t._s(t.keepData.views))])]),a("div",{staticClass:"w-100"},[a("p",[t._v("Shares:")]),a("p",[t._v(t._s(t.keepData.shares))])]),a("div",{staticClass:"w-100"},[a("p",[t._v("Keeps:")]),a("p",[t._v(t._s(t.keepData.keeps))])])])])])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stats w-100"},[a("i",{staticClass:"fas fa-eye"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-share-alt"})])}],V=a("3d20"),$=a.n(V);class x{static async inputKeepData(t="Enter Inputs"){try{const{value:e}=await $.a.fire({title:t,html:'<form class="keep-form""><label class="mb-0">Keep Name <span style="color: red">*</span></label><input id="keepName" class="swal2-input" placeholder="Name"><label class="mb-0">Description</label><input id="keepDescription" class="swal2-input" placeholder="Description"><label class="mb-0">Image URL</label><input id="keepImg" class="swal2-input" placeholder="Image URL"><label class="mb-0">Private Keep?</label><div class="switch_box box_1">\n\t\t       <input id="keepIsPrivate" type="checkbox" class="switch_1"></div><p>Public Keeps cannot be deleted once they are posted.</p><span style="color: red">*</span> indicates required field</form>',focusConfirm:!1,preConfirm:()=>{let t=document.getElementById("keepName").value,e=document.getElementById("keepDescription").value,a=document.getElementById("keepImg").value,s=document.getElementById("keepIsPrivate").checked;return t||$.a.showValidationMessage("Please fill out required fields"),[t,e,a,s]}});if(e)return{Name:e[0],Description:e[1],Img:e[2],IsPrivate:e[3]}}catch(e){return e}}static async editKeep(t="Enter Inputs",e){try{const{value:a}=await $.a.fire({title:t,html:'<form class="keep-form""><label class="mb-0">Keep Name <span style="color: red">*</span></label>'+`<input id="keepName" class="swal2-input" placeholder="Name" value="${e.name}">`+'<label class="mb-0">Description</label>'+`<input id="keepDescription" class="swal2-input" placeholder="Description" value="${e.description}">`+'<label class="mb-0">Image URL</label>'+`<input id="keepImg" class="swal2-input" placeholder="Image URL" value="${e.img}">`+'<span style="color: red">*</span> indicates required field</form>',focusConfirm:!1,preConfirm:()=>{let t=document.getElementById("keepName").value,e=document.getElementById("keepDescription").value,a=document.getElementById("keepImg").value;return t||$.a.showValidationMessage("Please fill out required fields"),[t,e,a]}});if(a)return{name:a[0],description:a[1],img:a[2]}}catch(a){return a}}static async inputVaultData(t="Enter Inputs",e){try{const{value:a}=await $.a.fire({title:t,html:'<form class="vault-form""><label class="mb-0">Vault Name <span style="color: red">*</span></label>'+`<input id="vaultName" class="swal2-input" value="${e.name||""}" placeholder="Name">`+'<label class="mb-0">Description</label>'+`<input id="vaultDescription" class="swal2-input" value="${e.description||""}" placeholder="Description">`+'<span style="color: red">*</span> indicates required field</form>',focusConfirm:!1,preConfirm:()=>{let t=document.getElementById("vaultName").value,e=document.getElementById("vaultDescription").value;return t||$.a.showValidationMessage("Please fill out required fields"),[t,e]}});if(a)return{Name:a[0],Description:a[1]}}catch(a){return a}}static async pickVault(t){try{const{value:e}=await $.a.fire({title:"Which Vault would you like your Keep in?",input:"select",inputOptions:{...t},inputPlaceholder:"None",showCancelButton:!0});if(e)return e}catch(e){return e}}static async errorMessage(t="Oops"){try{await $.a.fire({icon:"error",text:t})}catch(e){return!1}}}var D={name:"Keep",props:["keepData","vaultId"],data(){return{}},computed:{vaults(){return this.$store.state.vaults}},methods:{async collectKeep(t){let e=this.getVaultInfo();if(this.$auth.isAuthenticated){let a=await x.pickVault(e),s=parseInt(a);isNaN(s)||(this.$store.dispatch("createVaultKeep",{KeepId:t,VaultId:s}),this.increaseKeepCount())}else x.errorMessage("You must be logged in to keep")},getVaultInfo(){let t=[...this.vaults],e={};return t.map(t=>{e[t.id]=t.name}),e},async editKeep(t){let e=await x.editKeep("Edit Keep",t),a=Object.assign(t,e);this.$store.dispatch("editKeep",a)},async deleteKeep(t){await this.$store.dispatch("deleteKeep",t),"vaultdetails"==this.$route.name&&this.$store.dispatch("getKeepsByVaultId",this.vaultId)},async removeKeep(t){await this.$store.dispatch("removeKeep",{KeepId:t,VaultId:parseInt(this.vaultId)}),this.decreaseKeepCount()},increasePublicViewCount(){this.keepData.views++,this.$store.dispatch("increasePublicViewCount",this.keepData)},increaseViewCount(){this.keepData.views++,this.$store.dispatch("keepCount",this.keepData)},increaseKeepCount(){this.keepData.keeps++,this.increaseViewCount()},decreaseKeepCount(){this.keepData.keeps--,this.$store.dispatch("keepCount",this.keepData)},increaseShareCount(){this.keepData.shares++,this.increasePublicViewCount()}}},E=D,P=(a("6d30"),Object(d["a"])(E,_,I,!1,null,"ff63e2fa",null)),B=P.exports,j={name:"home",mounted(){this.$store.dispatch("getPublicKeeps"),this.$store.dispatch("resetActiveKeep"),Object(m["c"])().then(t=>{this.$store.dispatch("getVaults")})},computed:{publicKeeps(){return this.$store.state.publicKeeps}},methods:{logout(){this.$store.dispatch("logout")},shuffle(){this.publicKeeps.sort((function(){return Math.random()-.5}))}},components:{Keep:B}},N=j,O=(a("29ce"),Object(d["a"])(N,g,y,!1,null,"2c2ffe84",null)),A=O.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard container-fluid"},[t._m(0),a("div",{staticClass:"row justify-content-around pb-3 pt-5"},[t._m(1),a("div",{staticClass:"col-6 text-right mt-1 mb-3"},[a("button",{staticClass:"btn create-keep-btn",on:{click:t.createKeep}},[t._v("Create Keep")])]),a("div",{staticClass:"col-6 text-left mt-1 mb-3"},[a("button",{staticClass:"btn create-vault-btn",on:{click:t.createVault}},[t._v("Create Vault")])])]),a("div",{staticClass:"row justify-content-around pt-1 pb-3"},t._l(t.vaults,(function(e){return a("div",{key:e.id,staticClass:"col-12 col-sm-6 col-md-4 pt-1 pb-3 mb-3"},[a("div",{staticClass:"bg-image"},[a("div",{staticClass:"card"},[a("div",{staticClass:"delete-vault text-right w-100"},[a("i",{staticClass:"far fa-times-circle",on:{click:function(a){return t.deleteVault(e.id)}}})]),a("div",{staticClass:"card-body text-center"},[a("h5",{staticClass:"card-title text-white"},[t._v(t._s(e.name))]),a("h6",{staticClass:"card-subtitle mb-2 text-white"},[t._v(t._s(e.description))])]),a("router-link",{staticClass:"vault-link",attrs:{to:{name:"vaultdetails",params:{vaultId:e.id}}}})],1)])])})),0),a("hr"),t._m(2),a("div",{staticClass:"col-12 w-100 pl-5"},[a("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"ml-5",attrs:{gutter:"15","transition-duration":"0.3s","item-selector":".item"}},t._l(t.userKeeps,(function(t){return a("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t.id,staticClass:"item mt-3"},[a("Keep",{attrs:{keepData:t}})],1)})),0)])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row dash-top-bg align-items-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",[a("h1",[t._v("My Collection")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 text-center mt-5"},[a("h1",[t._v("My Keeps")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row pt-5"},[a("div",{staticClass:"col-12 text-center pb-2"},[a("h1",[t._v("My Created Keeps")])])])}],S={name:"Dashboard",mounted(){Object(m["c"])().then(t=>{this.$store.dispatch("getVaults"),this.$store.dispatch("getKeepsByUserId")}),this.$store.dispatch("resetActiveKeep"),this.$store.dispatch("resetActiveVault")},computed:{vaults(){return this.$store.state.vaults},userKeeps(){return this.$store.state.userKeeps}},methods:{async createKeep(){let t=this.getVaultInfo(),e=0,a=await x.inputKeepData("Enter Keep Info");if(a){if(1==a.IsPrivate){let a=await x.pickVault(t);e=parseInt(a)}this.$store.dispatch("createKeep",{keepData:a,vaultId:e})}},getVaultInfo(){let t=[...this.vaults],e={};return t.map(t=>{e[t.id]=t.name}),e},async createVault(){let t=await x.inputVaultData("Enter Vault Info",{});t&&this.$store.dispatch("createVault",t)},deleteVault(t){this.$store.dispatch("deleteVault",t)}},components:{Keep:B}},q=S,L=(a("0a67"),Object(d["a"])(q,U,M,!1,null,"37a68afa",null)),T=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-details container-fluid"},[a("div",{staticClass:"row pt-5 text-center"},[a("div",{staticClass:"col-12 mt-5"},[a("h1",[t._v(t._s(t.vault.name))])]),a("div",{staticClass:"col-12"},[a("h3",[t._v(t._s(t.vault.description))])])]),a("div",{staticClass:"row"},t._l(t.vaultKeeps,(function(e){return a("div",{key:e.id,staticClass:"col-6 col-md-3 pt-1 pb-1 mt-3 mb-5"},[a("Keep",{attrs:{keepData:e,vaultId:t.vaultId}})],1)})),0)])},z=[],F={name:"VaultDetails",props:["vaultId"],mounted(){Object(m["c"])().then(t=>{this.$store.dispatch("getVaultById",this.vaultId),this.$store.dispatch("getKeepsByVaultId",this.vaultId)})},data(){return{}},computed:{vault(){return this.$store.state.activeVault},vaultKeeps(){return this.$store.state.vaultKeeps}},methods:{},components:{Keep:B}},J=F,W=(a("2849"),Object(d["a"])(J,R,z,!1,null,"7ce36b20",null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep-details container-fluid"},[a("div",{staticClass:"row text-center pb-5"},[a("div",{staticClass:"col-12 pt-5 pb-2 mt-5"},[a("h1",[t._v(t._s(t.keep.name))])]),a("div",{staticClass:"col-12 pt-2 pb-5"},[a("img",{staticClass:"keep-img",attrs:{src:t.keep.img}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h3",[t._v(t._s(t.keep.description))])])]),a("hr"),a("div",{staticClass:"row pt-2"},[a("div",{staticClass:"col-12 d-flex text-center justify-content-between mt-2"},[t._m(0),a("div",{staticClass:"cp w-100"},[a("div",{staticClass:"btn-group dropup"},[t._m(1),a("div",{staticClass:"dropdown-menu text-center p-0"},[a("div",{staticClass:"dropdown-item p-1"},[a("div",{staticClass:"fb-share-button",attrs:{"data-href":t.keep.img,"data-layout":"button","data-size":"large"},on:{click:function(e){return t.increaseShareCount()}}},[a("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u="+t.keep.img+"&src=sdkpreparse"}},[a("i",{staticClass:"fab fa-facebook"}),a("span",{staticClass:"social-name"},[t._v("Facebook")])])])]),a("div",{staticClass:"dropdown-item p-1"},[a("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/intent/tweet?url="+t.keep.img,"data-size":"large"},on:{click:function(e){return t.increaseShareCount()}}},[a("i",{staticClass:"fab fa-twitter-square"}),a("span",{staticClass:"social-name"},[t._v("Twitter")])])])])])]),a("div",{staticClass:"cp w-100",on:{click:function(e){return t.collectKeep(t.keep.id)}}},[a("i",{staticClass:"fas fa-box-open stats-icon"})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"stats-container col-12 d-flex text-center justify-content-between"},[a("div",{staticClass:"w-100"},[a("p",[t._v("Views:")]),a("p",[t._v(t._s(t.keep.views))])]),a("div",{staticClass:"w-100"},[a("p",[t._v("Shares:")]),a("p",[t._v(t._s(t.keep.shares))])]),a("div",{staticClass:"w-100"},[a("p",[t._v("Keeps:")]),a("p",[t._v(t._s(t.keep.keeps))])])])])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("i",{staticClass:"fas fa-eye stats-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-share-alt stats-icon"})])}],G={name:"KeepDetails",async mounted(){await Object(m["c"])().then(t=>{this.$store.dispatch("getKeepById",this.keepId),this.$store.dispatch("getVaults")}).catch(t=>{this.$store.dispatch("getPublicKeepById",this.keepId)})},props:["keepId"],data(){return{}},computed:{keep(){return this.$store.state.activeKeep},vaults(){return this.$store.state.vaults}},methods:{async collectKeep(t){if(this.$auth.isAuthenticated){await this.$store.dispatch("getVaults");let e=this.getVaultInfo(),a=await x.pickVault(e),s=parseInt(a);isNaN(s)||(this.$store.dispatch("createVaultKeep",{KeepId:t,VaultId:s}),this.increaseKeepCount())}else x.errorMessage("You must be logged in to keep")},getVaultInfo(){let t={};return this.vaults.map(e=>{t[e.id]=e.name}),t},increaseViewCount(){this.keep.views++,this.$store.dispatch("keepCount",this.keep)},increaseKeepCount(){this.keep.keeps++,this.increaseViewCount()},increaseShareCount(){this.keep.shares++,this.$store.dispatch("keepCount",this.keep)}}},Q=G,Z=(a("7435"),Object(d["a"])(Q,Y,H,!1,null,"32fba73a",null)),tt=Z.exports;s["a"].use(w["a"]);var et=new w["a"]({routes:[{path:"/",name:"home",component:A},{path:"/dashboard",name:"dashboard",component:T,beforeEnter:m["b"]},{path:"/vaultdetails/:vaultId",name:"vaultdetails",component:X,beforeEnter:m["b"],props:!0},{path:"/keepdetails/:keepId",name:"keepdetails",component:tt,props:!0}]}),at=a("2f62");s["a"].use(at["a"]);let st=location.host.includes("localhost")?"https://localhost:5001/":"/",it=o.a.create({baseURL:st+"api/",timeout:5e3,withCredentials:!0});var rt=new at["a"].Store({state:{publicKeeps:[],userKeeps:[],activeKeep:{},vaultKeeps:[],vaults:[],activeVault:{}},mutations:{setPublicKeeps(t,e){t.publicKeeps=e},setUserKeeps(t,e){t.userKeeps=e},addToUserKeeps(t,e){t.userKeeps.push(e)},setActiveKeep(t,e){t.activeKeep=e},setVaultKeeps(t,e){t.vaultKeeps=e},resetVaultKeeps(t){t.vaultKeeps=[]},setVaults(t,e){t.vaults=e},addVault(t,e){t.vaults.push(e)},setActiveVault(t,e){t.activeVault=e},resetActiveKeep(t){t.activeKeep={}},resetActiveVault(t){t.activeVault={}}},actions:{setBearer({},t){it.defaults.headers.authorization=t},resetBearer(){it.defaults.headers.authorization=""},async getPublicKeeps({commit:t,dispatch:e}){let a=await it.get("keeps");t("setPublicKeeps",a.data)},async createKeep({commit:t,dispatch:e},a){let s=await it.post("keeps/",a.keepData);isNaN(a.vaultId)||e("createVaultKeep",{KeepId:s.data.id,VaultId:a.vaultId}),s.data.isPrivate&&t("addToUserKeeps",s.data)},async getPublicKeepById({commit:t,dispatch:e},a){let s=await it.get("keeps/"+a+"/publickeep",a);t("setActiveKeep",s.data)},async getKeepById({commit:t,dispatch:e},a){let s=await it.get("keeps/"+a);t("setActiveKeep",s.data)},async getKeepsByUserId({commit:t,dispatch:e}){let a=await it.get("keeps/userkeeps");t("setUserKeeps",a.data)},async getKeepsByVaultId({commit:t,dispatch:e},a){t("resetVaultKeeps");let s=await it.get("vaults/"+a+"/keeps");t("setVaultKeeps",s.data)},async editKeep({commit:t,dispatch:e},a){let s=await it.put("keeps/"+a.id,a);console.log(s.data)},async removeKeep({commit:t,dispatch:e},a){await it.put("vaultkeeps/removekeep",a);e("getKeepsByVaultId",a.VaultId)},async deleteKeep({commit:t,dispatch:e},a){await it.delete("keeps/"+a);e("getKeepsByUserId")},resetActiveKeep({commit:t}){t("resetActiveKeep")},async getVaults({commit:t,dispatch:e}){let a=await it.get("vaults");t("setVaults",a.data)},async createVault({commit:t,dispatch:e},a){let s=await it.post("vaults",a);t("addVault",s.data)},async getVaultById({commit:t,dispatch:e},a){let s=await it.get("vaults/"+a);t("setActiveVault",s.data)},async resetActiveVault({commit:t}){t("resetActiveVault")},async deleteVault({commit:t,dispatch:e},a){await it.delete("vaults/"+a);e("getVaults")},async createVaultKeep({commit:t,dispatch:e},a){await it.post("vaultkeeps",{KeepId:a.KeepId,VaultId:a.VaultId})},async keepCount({commit:t,dispatch:e},a){await it.put("keeps/"+a.id,a);e("getKeepById",a.id)},async increasePublicViewCount({commit:t,dispatch:e},a){let s=await it.put("keeps/"+a.id+"/publicview",a);t("setActiveKeep",s.data)}}});const ct="gsotelo.auth0.com",nt="https://gsotelo-api.com",lt="0aqymzn9n0Bd9FSnrppXjoo3TIDMLX4C";s["a"].use(K["a"]),s["a"].use(m["a"],{domain:ct,clientId:lt,audience:nt,onRedirectCallback:t=>{et.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:et,store:rt,render:function(t){return t(k)}}).$mount("#app")},6231:function(t,e,a){"use strict";var s=a("3854"),i=a.n(s);i.a},"6d30":function(t,e,a){"use strict";var s=a("c17b"),i=a.n(s);i.a},"70c4":function(t,e,a){},7435:function(t,e,a){"use strict";var s=a("c470"),i=a.n(s);i.a},"827f":function(t,e,a){},c17b:function(t,e,a){},c470:function(t,e,a){}});