(function(e){function t(t){for(var a,i,c=t[0],s=t[1],l=t[2],d=0,m=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5ce0":function(e,t,n){var a=n("7037").default;n("b64b"),n("d3b7"),n("25f0"),n("ac1f"),n("5319"),window.Urls=function(){"use strict";var e={urls:[["admin:app_list",[["admin/%(app_label)s/",["app_label"]]]],["admin:auth_group_add",[["admin/auth/group/add/",[]]]],["admin:auth_group_change",[["admin/auth/group/%(object_id)s/change/",["object_id"]]]],["admin:auth_group_changelist",[["admin/auth/group/",[]]]],["admin:auth_group_delete",[["admin/auth/group/%(object_id)s/delete/",["object_id"]]]],["admin:auth_group_history",[["admin/auth/group/%(object_id)s/history/",["object_id"]]]],["admin:auth_user_add",[["admin/auth/user/add/",[]]]],["admin:auth_user_change",[["admin/auth/user/%(object_id)s/change/",["object_id"]]]],["admin:auth_user_changelist",[["admin/auth/user/",[]]]],["admin:auth_user_delete",[["admin/auth/user/%(object_id)s/delete/",["object_id"]]]],["admin:auth_user_history",[["admin/auth/user/%(object_id)s/history/",["object_id"]]]],["admin:auth_user_password_change",[["admin/auth/user/%(id)s/password/",["id"]]]],["admin:autocomplete",[["admin/autocomplete/",[]]]],["admin:core_person_add",[["admin/core/person/add/",[]]]],["admin:core_person_change",[["admin/core/person/%(object_id)s/change/",["object_id"]]]],["admin:core_person_changelist",[["admin/core/person/",[]]]],["admin:core_person_delete",[["admin/core/person/%(object_id)s/delete/",["object_id"]]]],["admin:core_person_history",[["admin/core/person/%(object_id)s/history/",["object_id"]]]],["admin:index",[["admin/",[]]]],["admin:jsi18n",[["admin/jsi18n/",[]]]],["admin:login",[["admin/login/",[]]]],["admin:logout",[["admin/logout/",[]]]],["admin:password_change",[["admin/password_change/",[]]]],["admin:password_change_done",[["admin/password_change/done/",[]]]],["admin:sites_site_add",[["admin/sites/site/add/",[]]]],["admin:sites_site_change",[["admin/sites/site/%(object_id)s/change/",["object_id"]]]],["admin:sites_site_changelist",[["admin/sites/site/",[]]]],["admin:sites_site_delete",[["admin/sites/site/%(object_id)s/delete/",["object_id"]]]],["admin:sites_site_history",[["admin/sites/site/%(object_id)s/history/",["object_id"]]]],["admin:token_blacklist_blacklistedtoken_add",[["admin/token_blacklist/blacklistedtoken/add/",[]]]],["admin:token_blacklist_blacklistedtoken_change",[["admin/token_blacklist/blacklistedtoken/%(object_id)s/change/",["object_id"]]]],["admin:token_blacklist_blacklistedtoken_changelist",[["admin/token_blacklist/blacklistedtoken/",[]]]],["admin:token_blacklist_blacklistedtoken_delete",[["admin/token_blacklist/blacklistedtoken/%(object_id)s/delete/",["object_id"]]]],["admin:token_blacklist_blacklistedtoken_history",[["admin/token_blacklist/blacklistedtoken/%(object_id)s/history/",["object_id"]]]],["admin:token_blacklist_outstandingtoken_add",[["admin/token_blacklist/outstandingtoken/add/",[]]]],["admin:token_blacklist_outstandingtoken_change",[["admin/token_blacklist/outstandingtoken/%(object_id)s/change/",["object_id"]]]],["admin:token_blacklist_outstandingtoken_changelist",[["admin/token_blacklist/outstandingtoken/",[]]]],["admin:token_blacklist_outstandingtoken_delete",[["admin/token_blacklist/outstandingtoken/%(object_id)s/delete/",["object_id"]]]],["admin:token_blacklist_outstandingtoken_history",[["admin/token_blacklist/outstandingtoken/%(object_id)s/history/",["object_id"]]]],["admin:tracker_activeexercise_add",[["admin/tracker/activeexercise/add/",[]]]],["admin:tracker_activeexercise_change",[["admin/tracker/activeexercise/%(object_id)s/change/",["object_id"]]]],["admin:tracker_activeexercise_changelist",[["admin/tracker/activeexercise/",[]]]],["admin:tracker_activeexercise_delete",[["admin/tracker/activeexercise/%(object_id)s/delete/",["object_id"]]]],["admin:tracker_activeexercise_history",[["admin/tracker/activeexercise/%(object_id)s/history/",["object_id"]]]],["admin:tracker_exercise_add",[["admin/tracker/exercise/add/",[]]]],["admin:tracker_exercise_change",[["admin/tracker/exercise/%(object_id)s/change/",["object_id"]]]],["admin:tracker_exercise_changelist",[["admin/tracker/exercise/",[]]]],["admin:tracker_exercise_delete",[["admin/tracker/exercise/%(object_id)s/delete/",["object_id"]]]],["admin:tracker_exercise_history",[["admin/tracker/exercise/%(object_id)s/history/",["object_id"]]]],["admin:tracker_overloadtype_add",[["admin/tracker/overloadtype/add/",[]]]],["admin:tracker_overloadtype_change",[["admin/tracker/overloadtype/%(object_id)s/change/",["object_id"]]]],["admin:tracker_overloadtype_changelist",[["admin/tracker/overloadtype/",[]]]],["admin:tracker_overloadtype_delete",[["admin/tracker/overloadtype/%(object_id)s/delete/",["object_id"]]]],["admin:tracker_overloadtype_history",[["admin/tracker/overloadtype/%(object_id)s/history/",["object_id"]]]],["admin:tracker_plan_add",[["admin/tracker/plan/add/",[]]]],["admin:tracker_plan_change",[["admin/tracker/plan/%(object_id)s/change/",["object_id"]]]],["admin:tracker_plan_changelist",[["admin/tracker/plan/",[]]]],["admin:tracker_plan_delete",[["admin/tracker/plan/%(object_id)s/delete/",["object_id"]]]],["admin:tracker_plan_history",[["admin/tracker/plan/%(object_id)s/history/",["object_id"]]]],["admin:tracker_training_add",[["admin/tracker/training/add/",[]]]],["admin:tracker_training_change",[["admin/tracker/training/%(object_id)s/change/",["object_id"]]]],["admin:tracker_training_changelist",[["admin/tracker/training/",[]]]],["admin:tracker_training_delete",[["admin/tracker/training/%(object_id)s/delete/",["object_id"]]]],["admin:tracker_training_history",[["admin/tracker/training/%(object_id)s/history/",["object_id"]]]],["admin:view_on_site",[["admin/r/%(content_type_id)s/%(object_id)s/",["content_type_id","object_id"]]]],["core_api:login",[["api/core/login",[]]]],["core_api:logout",[["api/core/logout",[]]]],["core_api:sing_in",[["api/core/sign-in",[]]]],["index",[["%(resource)s",["resource"]],["",[]]]],["schema-swagger-ui",[["api/list",[]]]],["tracker_api:plan_create",[["api/tracker/plan/create",[]]]],["tracker_api:plan_delete",[["api/tracker/plan/delete/%(plan_id)s",["plan_id"]]]],["tracker_api:plan_detail",[["api/tracker/plan/detail/%(plan_id)s",["plan_id"]]]],["tracker_api:plan_list",[["api/tracker/plan/list",[]]]],["tracker_api:training_create",[["api/tracker/training/create/%(plan_id)s",["plan_id"]]]]],prefix:"/"};function t(e){var t,n,r,o,i,c,s=e.urls,l=e.prefix,u={},d={},m=function(e){return function(){var t,n,r,o,i,c,s,u,m,p;if(t=arguments,s=d[e],1==arguments.length&&"object"==a(arguments[0])){var _=Object.keys(arguments[0]);for(m={},i=0;i<_.length;i++)m[_[i]]=1;u=function(e){var t;if(e[1].length!=_.length)return!1;for(t=0;t<e[1].length&&e[1][t]in m;t++);return t==e[1].length},p=function(e){return t[0]}}else u=function(e){return e[1].length==t.length},p=function(e){for(var n={},a=0;a<e.length;a++)n[e[a]]=t[a];return n};for(i=0;i<s.length&&!u(s[i]);i++);if(i==s.length)return null;for(r in c=s[i],n=c[0],o=p(c[1]),o){var b=o[r];b=void 0===b||null===b?"":b.toString(),n=n.replace("%("+r+")s",b)}return l+n}};for(o=0,i=s.length;o<i;o++)c=s[o],t=c[0],n=c[1],d[t]=n,r=m(t),u[t.replace(/[-_]+(.)/g,(function(e,t){return t.toUpperCase()}))]=r,u[t.replace(/-/g,"_")]=r,u[t]=r;return u}return e?t(e):t}()},"6eba":function(e,t,n){e.exports=n.p+"img/menu-2.dfbba4ff.svg"},"6f32":function(e,t,n){var a={"./add.svg":"76a4","./close.svg":"8b1b","./menu-2.svg":"6eba","./menu.svg":"d17f","./plus.svg":"eb38"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="6f32"},"72f8":function(e,t,n){},"76a4":function(e,t,n){e.exports=n.p+"img/add.a1c73b63.svg"},"8b1b":function(e,t,n){e.exports=n.p+"img/close.e089fc54.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,o,i){var c=Object(a["u"])("Navbar"),s=Object(a["u"])("NavButton"),l=Object(a["u"])("router-view");return Object(a["p"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(c),Object(a["g"])(s,{class:"nav_button__container",onClick:Object(a["C"])(e.toggleNav,["prevent"])},null,8,["onClick"]),Object(a["g"])(l)],64)}function o(e,t,n,r,o,i){var c=Object(a["u"])("Icon");return Object(a["p"])(),Object(a["e"])(c,{"icon-type":e.navIcon},null,8,["icon-type"])}function i(e,t,n,r,o,i){return Object(a["p"])(),Object(a["e"])("img",{src:e.iconRoute,alt:"icon"},null,8,["src"])}var c=Object(a["h"])({name:"vue-icon",props:{iconType:{type:String,required:!0}},computed:{iconRoute:function(){return n("6f32")("./".concat(this.iconType,".svg"))}}});c.render=i;var s,l=c,u=n("5502"),d={accessToken:localStorage.getItem("access_token")||null,username:localStorage.getItem("username")||null,isNavOpen:!1},m=n("ade3"),p={USER_SET:"USER::SET",USER_REMOVE:"USER::REMOVE",NAV_TOGGLE:"NAV::TOGGLE"},_=(s={},Object(m["a"])(s,p.USER_SET,(function(e,t){localStorage.setItem("access_token",t.accessToken),localStorage.setItem("username",t.username),e.accessToken=t.accessToken,e.username=t.username})),Object(m["a"])(s,p.NAV_TOGGLE,(function(e){e.isNavOpen=!e.isNavOpen})),Object(m["a"])(s,p.USER_REMOVE,(function(e){localStorage.removeItem("access_token"),localStorage.removeItem("username"),e.accessToken=null,e.username=null})),s),b=(n("d3b7"),n("7a3e")),g=n.n(b),f={login:"LOGIN",logout:"LOGOUT",signIn:"SIGN_IN"},j={LOGIN:"core_api:login",SIGNIN:"core_api:sing_in"},h=n("6c02"),O={class:"homepage__container"},k=Object(a["g"])("h1",{class:"homepage--title mt-20 mb-20"},"Progressive overload tracker",-1),v={key:0,class:"homepage__plansContainer"};function y(e,t,n,r,o,i){var c=Object(a["u"])("PlanTile"),s=Object(a["u"])("Icon");return Object(a["p"])(),Object(a["e"])("div",O,[k,e.plans.length>0?(Object(a["p"])(),Object(a["e"])("div",v,[(Object(a["p"])(!0),Object(a["e"])(a["a"],null,Object(a["t"])(e.plans,(function(e){return Object(a["p"])(),Object(a["e"])(c,{key:e.id,plan:e},null,8,["plan"])})),128))])):Object(a["f"])("",!0),Object(a["g"])(s,{onClick:t[1]||(t[1]=Object(a["C"])((function(t){return e.$router.push({name:"planCreate"})}),["prevent"])),class:"homepage__plusIcon","icon-type":"plus"})])}var w=n("1da1"),x=(n("159b"),n("96cf"),n("b0c0"),{key:0,class:"planTile__innerItemsContainer"}),I={class:"planTile__title"},E={class:"planTile__trainingSnippet"};function S(e,t,n,r,o,i){return Object(a["p"])(),Object(a["e"])("div",{class:"planTile__container",onClick:t[1]||(t[1]=Object(a["C"])((function(){return e.showDetail&&e.showDetail.apply(e,arguments)}),["prevent"]))},[e.isMenuOpen?Object(a["f"])("",!0):(Object(a["p"])(),Object(a["e"])("div",x,[Object(a["g"])("h3",I,Object(a["w"])(e.plan.name),1),Object(a["g"])("p",E,Object(a["w"])(e.trainingsSnippet),1)]))])}n("a15b");var T=Object(a["h"])({name:"vue-plan-tile",data:function(){return{isMenuOpen:!1}},props:{plan:{type:Object,required:!0}},computed:{trainingsSnippet:function(){var e=new Array;return this.plan.trainings.forEach((function(t){e.push(t.name)})),e.join()}},methods:{showDetail:function(){}}});T.render=S;var P=T,N=n("5530"),R=n("bc3a"),C=n.n(R),F=C.a.create({headers:{"Content-Type":"application/json;charset=UTF-8"}});F.interceptors.response.use(void 0,(function(e){return e.config&&e.response&&401===e.response.status&&Re.push({name:"login"}),Promise.reject(e)}));var L=function(){return{Authorization:"Bearer "+Le.state.accessToken}},U={PLAN_LIST:"tracker_api:plan_list"},G=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.get(g()(U.PLAN_LIST),{headers:Object(N["a"])({},L())});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=Object(a["h"])({name:"vue-homepage",data:function(){return{plans:new Array}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadPlans();case 2:case"end":return t.stop()}}),t)})))()},methods:{loadPlans:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:G().then((function(t){t.data.forEach((function(t){return e.plans.push(t)}))}));case 1:case"end":return t.stop()}}),t)})))()}},components:{PlanTile:P,Icon:l}});A.render=y;var D=A,V={class:"loginPage__container"},B=Object(a["g"])("h1",{class:"loginPage__title mt-20"},"Login",-1);function M(e,t,n,r,o,i){var c=Object(a["u"])("LoginForm");return Object(a["p"])(),Object(a["e"])("div",V,[B,Object(a["g"])(c)])}var $={class:"form-group mt-20 form__group"},q=Object(a["g"])("label",{for:"loginForm__EmailInput",class:"form__text"},"Email",-1),J={class:"form-group mt-20 form__group"},z=Object(a["g"])("label",{for:"loginForm__PasswordInput",class:"form__text"},"Password",-1),H=Object(a["g"])("button",{type:"submit",class:"form__button mt-20"},"Login",-1),K={key:0,class:"form__error"};function Q(e,t,n,r,o,i){return Object(a["p"])(),Object(a["e"])("form",{onSubmit:t[3]||(t[3]=Object(a["C"])((function(){return e.sendData&&e.sendData.apply(e,arguments)}),["prevent"])),class:"form__container"},[Object(a["g"])("div",$,[q,Object(a["B"])(Object(a["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.username=t}),type:"text",class:"form-control form__input",id:"loginForm__EmailInput",placeholder:"Email"},null,512),[[a["y"],e.username]])]),Object(a["g"])("div",J,[z,Object(a["B"])(Object(a["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),type:"password",class:"form-control form__input",id:"loginForm__PasswordInput",placeholder:"Password"},null,512),[[a["y"],e.password]])]),H,e.error?(Object(a["p"])(),Object(a["e"])("h3",K,"Invalid parameters! TODO styling")):Object(a["f"])("",!0)],32)}var W=Object(a["h"])({name:"vue-loginForm",data:function(){return{username:"",password:"",error:!1}},methods:{sendData:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch(f.login,{username:e.username,password:e.password});case 1:case"end":return t.stop()}}),t)})))()}}});W.render=Q;var X=W,Y=Object(a["h"])({name:"vue-login",components:{LoginForm:X}});Y.render=M;var Z=Y,ee={class:"loginPage__container"},te=Object(a["g"])("h1",{class:"loginPage__title mt-20"},"Sign in",-1);function ne(e,t,n,r,o,i){var c=Object(a["u"])("SignInForm");return Object(a["p"])(),Object(a["e"])("div",ee,[te,Object(a["g"])(c)])}var ae={class:"form-group mt-20 form__group"},re=Object(a["g"])("label",{for:"signInForm__EmailInput",class:"form__text"},"Email",-1),oe={class:"form-group mt-20 form__group"},ie=Object(a["g"])("label",{for:"signInForm__FullnameInput",class:"form__text"},"Fullname",-1),ce={class:"form-group mt-20 form__group"},se=Object(a["g"])("label",{for:"signInForm__PasswordInput",class:"form__text"},"Password",-1),le={class:"form-group mt-20 form__group"},ue=Object(a["g"])("label",{for:"signInForm__ConfirmInput",class:"form__text"},"Password again",-1),de=Object(a["g"])("button",{type:"submit",class:"form__button mt-20"},"Sign in",-1);function me(e,t,n,r,o,i){return Object(a["p"])(),Object(a["e"])("form",{onSubmit:t[5]||(t[5]=Object(a["C"])((function(){return e.sendData&&e.sendData.apply(e,arguments)}),["prevent"])),class:"form__container"},[Object(a["g"])("div",ae,[re,Object(a["B"])(Object(a["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.username=t}),type:"text",class:"form-control form__input",id:"signInForm__EmailInput",placeholder:"Email"},null,512),[[a["y"],e.username]])]),Object(a["g"])("div",oe,[ie,Object(a["B"])(Object(a["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.fullname=t}),type:"text",class:"form-control form__input",id:"signInForm__FullnameInput",placeholder:"Fullname"},null,512),[[a["y"],e.fullname]])]),Object(a["g"])("div",ce,[se,Object(a["B"])(Object(a["g"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.password=t}),type:"password",class:"form-control form__input",id:"signInForm__PasswordInput",placeholder:"Password"},null,512),[[a["y"],e.password]])]),Object(a["g"])("div",le,[ue,Object(a["B"])(Object(a["g"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.confirm=t}),type:"password",class:"form-control form__input",id:"signInForm__ConfirmInput",placeholder:"Password again"},null,512),[[a["y"],e.confirm]])]),de],32)}var pe=Object(a["h"])({name:"vue-signInForm",data:function(){return{username:"",fullname:"",password:"",confirm:""}},methods:{sendData:function(){this.$store.dispatch(f.signIn,{username:this.username,fullname:this.fullname,password:this.password,confirm:this.confirm}).catch((function(){console.log("chytám to")}))}}});pe.render=me;var _e=pe,be=Object(a["h"])({name:"vue-sign_in",components:{SignInForm:_e}});be.render=ne;var ge=be;function fe(e,t,n,r,o,i){var c=Object(a["u"])("PlanCreateForm");return Object(a["p"])(),Object(a["e"])(c)}var je={class:"form-group mt-20 form__group"},he=Object(a["g"])("label",{for:"loginForm__EmailInput",class:"form__text"},"Plan name",-1),Oe=Object(a["g"])("button",{type:"submit",class:"form__button mt-20"},"Create",-1),ke={key:0,class:"form__error"};function ve(e,t,n,r,o,i){return Object(a["p"])(),Object(a["e"])("form",{onSubmit:t[2]||(t[2]=Object(a["C"])((function(){return e.sendData&&e.sendData.apply(e,arguments)}),["prevent"])),class:"form__container"},[Object(a["g"])("div",je,[he,Object(a["B"])(Object(a["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),type:"text",class:"form-control form__input",id:"loginForm__EmailInput",placeholder:"Plan name"},null,512),[[a["y"],e.name]])]),Oe,e.error?(Object(a["p"])(),Object(a["e"])("h3",ke,"Invalid parameters! TODO styling")):Object(a["f"])("",!0)],32)}var ye={PLANCREATE:"tracker_api:plan_create"},we=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.post(g()(ye.PLANCREATE),JSON.stringify(t),{headers:Object(N["a"])({},L())});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=Object(a["h"])({name:"plan-create-form",data:function(){return{name:"",error:!1}},methods:{sendData:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:we({name:e.name}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})))()}}});xe.render=ve;var Ie=xe,Ee=Object(a["h"])({name:"vue-plan-create",components:{PlanCreateForm:Ie}});Ee.render=fe;var Se,Te=Ee,Pe=[{path:"/",name:"homepage",component:D,meta:{loginRequired:!0}},{path:"/plan/create",name:"planCreate",component:Te,meta:{loginRequired:!0}},{path:"/login",name:"login",component:Z,meta:{anonymousRequired:!0}},{path:"/sign-in",name:"sign-in",component:ge,meta:{anonymousRequired:!0}}],Ne=Object(h["a"])({history:Object(h["b"])(),routes:Pe}),Re=Ne,Ce=(Se={},Object(m["a"])(Se,f.login,(function(e,t){return new Promise((function(n,a){F.post(g()(j.LOGIN),JSON.stringify(t)).then((function(a){e.commit(p.USER_SET,{accessToken:a.data.access,username:t.username}),Re.push({name:"homepage"}),n("resolved")})).catch((function(e){return a(e)}))}))})),Object(m["a"])(Se,f.logout,(function(e){e.commit(p.USER_REMOVE)})),Object(m["a"])(Se,f.signIn,(function(e,t){return new Promise((function(n,a){F.post(g()(j.SIGNIN),JSON.stringify(t)).then((function(a){console.log(a),e.dispatch(f.login,{username:t.username,password:t.password}),n("resolved")})).catch((function(e){return a(e)}))}))})),Se),Fe={getAccessToken:function(e){return e.accessToken},isLoggedIn:function(e){return null!=e.accessToken}},Le=Object(u["a"])({state:d,mutations:_,actions:Ce,getters:Fe}),Ue=Object(a["h"])({name:"nav-button",computed:{navIcon:function(){return Le.state.isNavOpen?"close":"menu-2"}},components:{Icon:l}});Ue.render=o;var Ge=Ue,Ae={key:0,class:"navBar__container"},De={class:"navBar__list"},Ve={style:{color:"wheat",position:"absolute",bottom:"15px",right:"15px"}};function Be(e,t,n,r,o,i){var c=this;return Object(a["p"])(),Object(a["e"])(a["b"],{name:"navBar__transition"},{default:Object(a["A"])((function(){return[c.$store.state.isNavOpen?(Object(a["p"])(),Object(a["e"])("div",Ae,[Object(a["g"])("ul",De,[(Object(a["p"])(!0),Object(a["e"])(a["a"],null,Object(a["t"])(e.navList,(function(t){return Object(a["p"])(),Object(a["e"])("li",{key:t.name},[Object(a["g"])("h1",{onClick:Object(a["C"])((function(n){return e.handleLinkClick(t.urlName)}),["prevent"])},Object(a["w"])(t.name),9,["onClick"])])})),128)),Object(a["g"])("li",null,[Object(a["g"])("h1",{onClick:t[1]||(t[1]=Object(a["C"])((function(){return e.logout&&e.logout.apply(e,arguments)}),["prevent"]))},"Logout")])]),Object(a["g"])("h2",Ve,"user:"+Object(a["w"])(e.$store.state.username),1)])):Object(a["f"])("",!0)]})),_:1})}var Me=Object(a["h"])({name:"navbar",data:function(){return{navList:[{name:"Home",urlName:"homepage"}]}},methods:{handleLinkClick:function(e){this.$router.push({name:e}),this.$store.commit(p.NAV_TOGGLE)},logout:function(){this.$store.dispatch(f.logout),this.$router.go()}}});Me.render=Be;var $e=Me,qe=Object(a["h"])({name:"root",methods:{toggleNav:function(){this.$store.commit(p.NAV_TOGGLE)}},components:{NavButton:Ge,Navbar:$e}});qe.render=r;var Je=qe;n("f9e3"),n("5ce0"),n("72f8");Re.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.loginRequired}))?Le.getters.isLoggedIn?n():n({name:"login"}):e.matched.some((function(e){return e.meta.anonymousRequired}))&&Le.getters.isLoggedIn?n({name:"homepage"}):n()})),Object(a["d"])(Je).use(Le).use(Re).mount("#app")},d17f:function(e,t,n){e.exports=n.p+"img/menu.9d68540d.svg"},eb38:function(e,t,n){e.exports=n.p+"img/plus.ff2f4a13.svg"}});
//# sourceMappingURL=app.a04e91ea.js.map