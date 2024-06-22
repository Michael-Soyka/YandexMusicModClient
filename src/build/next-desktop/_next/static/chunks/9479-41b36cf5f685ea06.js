(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9479],{39479:function(e,r,t){"use strict";t.d(r,{T_:function(){return f},Iw:function(){return H}});var n,a=t(96555),i=t(5674);let o=e=>({loadingState:i.Gu.RESOLVE,uid:e.uid,login:e.login,avatarId:e.avatarId,hasPlus:e.hasPlus,publicId:e.publicId,publicName:e.publicName,isChild:e.isChild}),s=e=>(0,a.pj)({loadingState:i.Gu.RESOLVE,showWizard:!e.wizardIsPassed,userCollectionHue:e.userCollectionHue}),l=a.V5.model("Account",{loadingState:a.V5.enumeration(Object.values(i.Gu)),uid:a.V5.maybe(a.V5.number),hasPlus:a.V5.maybe(a.V5.boolean),login:a.V5.maybe(a.V5.string),avatarId:a.V5.maybe(a.V5.string),isChild:a.V5.maybe(a.V5.boolean),publicId:a.V5.maybe(a.V5.string),publicName:a.V5.maybe(a.V5.string)}),c=a.V5.model("Settings",{loadingState:a.V5.enumeration(Object.values(i.Gu)),showWizard:a.V5.boolean,userCollectionHue:a.V5.maybe(a.V5.number)}),f=a.V5.model("User",{account:l,settings:c,userCollectionHue:a.V5.maybe(a.V5.number)}).views(e=>({get isAuthorized(){return!!e.account.uid},get hasPlus(){return!!e.account.hasPlus},get isChild(){return!!e.account.isChild},get puid(){return e.account.uid},get collectionHue(){return e.userCollectionHue||e.settings.userCollectionHue}})).actions(e=>{let r={getAbout:(0,a.ls)(function*(){let{accountResource:r,modelActionsLogger:t}=(0,a.dU)(e);if(e.account.loadingState!==i.Gu.PENDING)try{e.account.loadingState=i.Gu.PENDING;let t=yield r.about();e.account=o(t),e.account.loadingState=i.Gu.RESOLVE}catch(r){t.error(r),e.account.loadingState=i.Gu.REJECT}}),getSettings:(0,a.ls)(function*(){let{accountResource:r,modelActionsLogger:t}=(0,a.dU)(e);if(e.settings.loadingState!==i.Gu.PENDING)try{e.settings.loadingState=i.Gu.PENDING;let t=yield r.settings();e.settings=s(t)}catch(r){t.error(r),e.settings.loadingState=i.Gu.REJECT}}),setUnauthorized:()=>{e.account.loadingState=i.Gu.RESOLVE},setUserCollectionHue:r=>{e.userCollectionHue=r}};return r});var u=t(8759),d=t(1550),p=t(35338),x=t(33423),m=t(99616),g=t.t(m,2),v=t(65244),y=t(2814),_={5881:(e,r,t)=>{function n(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,a="";if("string"==typeof r||"number"==typeof r)a+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(a&&(a+=" "),a+=n);else for(t in r)r[t]&&(a&&(a+=" "),a+=t)}return a}(e))&&(n&&(n+=" "),n+=r);return n}t.r(r),t.d(r,{clsx:()=>n,default:()=>a});let a=n},5323:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root_size_xxxs:"Rkdd2vKC_3xa1eUdRdHP",root_size_xxs:"l3tE1hAMmBj2aoPPwU08",root_size_xs:"UwnL5AJBMMAp6NwMDdZk",root_size_s:"DzJFnuf7XgdkFh28JAsM",root_size_m:"o_v2ds2BaqtzAsRuCVjw",root_size_l:"YjRa1ZjM_lXFlrfS7jcu",root_size_xl:"Seq0GowcqQmiA9LdLP_g",root_size_xxl:"mfy69_BvBIamD0e22rCQ"}},427:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root:"mdbxU6IWInQTsVjwnapn",text:"Cl_DNqTqaeGRXa9FZpOO",icon:"WMUZ6rmDKcZuPFMkQwf6"}},435:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root_controls_xxs:"tRaaBpDMg9Qu8v6gKjtn",root_entity_xxs:"M9zvtlcpLUVn6DKdcHhj",root_text_xxs:"ln0PYYwDmFnfYxCDJsFU",root_controls_xs:"n5AeWEsJC3_AYXcbK4Lt",root_entity_xs:"__hrMKGmNbw54T54IUyh",root_text_xs:"SehSa7OyRpC2nzYTVb2Q",root_controls_s:"_oBLf5gprWsKjCw4Ce58",root_entity_s:"mxSPe5xpZnie9gpIqacd",root_text_s:"Ai2iRN9elHpk_u5splD6",root_controls_m:"tk7ahHRDYXJMMB879KUA",root_entity_m:"Z_WIr2W8JU4MPQek3hgR",root_text_m:"g3qWNP6xl__7qxNmtrvd",root_controls_l:"grvxapJE3vGArOKDWf6n",root_entity_l:"Esj5A1UeSi4xV4tZ839D",root_text_l:"V3WU123oO65AxsprotU9",root_weight_normal:"ZYV27jeWd30QDXu4GhaH",root_weight_medium:"_3_Mxw7Si7j2g4kWjlpR",root_weight_bold:"Vi7Rd0SZWqD17F0872TB"}},5668:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root_size_xs:"qJJ288377iHlWN_RXeEE",root_size_s:"_sd8Q9d_Ttn0Ufe4ISWS",root_size_m:"Ctk8dbecq31Qh7isOJPQ",root_size_l:"M_Djh6ppIkCO3A2k_BTA",root_size_xl:"dtxlzGQMPAbM2MEndXWX",root_size_xxl:"IUb9XLplTAoZqne9rNUL",root_size_xxxl:"ZYZamUwql_rfFR4RpI2B",root_size_xxxxl:"ZBZyxow5njdq8z5dnRPY",root_weight_bold:"nSU6fV9y80WrZEfafvww",root_weight_black:"KBeGPPK4DinQzAP41Y_N"}},3594:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root:"_MWOVuZRvUQdXKTMcOPx",root_clamp:"LezmJlldtbHWqU7l1950",root_clamp_oneline:"oyQL2RSmoNbNQf3Vc6YI",root_clamp_multiline:"jMyoZB5J9iZbzJmWOrF0"}},6161:(e,r,t)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(810),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,f=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:f,props:i,_owner:s.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},9541:(e,r,t)=>{e.exports=t(6161)},5695:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"add",xlinkHref:"#add"})])})},9800:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"addToPlaylist",xlinkHref:"#addToPlaylist"})])})},2751:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"adult",xlinkHref:"#adult"})])})},383:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"album",xlinkHref:"#album"})])})},758:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"arrowDown",xlinkHref:"#arrowDown"})])})},9466:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"arrowLeft",xlinkHref:"#arrowLeft"})])})},9032:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"arrowRight",xlinkHref:"#arrowRight"})])})},7294:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"artist",xlinkHref:"#artist"})])})},8409:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"attention",xlinkHref:"#attention"})])})},1478:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"bucket",xlinkHref:"#bucket"})])})},849:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"cast",xlinkHref:"#cast"})])})},3781:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chain",xlinkHref:"#chain"})])})},5951:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartDown",xlinkHref:"#chartDown"})])})},7203:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartNew",xlinkHref:"#chartNew"})])})},8688:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartSame",xlinkHref:"#chartSame"})])})},4653:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartUp",xlinkHref:"#chartUp"})])})},2966:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"check",xlinkHref:"#check"})])})},5849:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"close",xlinkHref:"#close"})])})},32:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"collapse",xlinkHref:"#collapse"})])})},5972:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"collections",xlinkHref:"#collections"})])})},6631:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"collections_selected",xlinkHref:"#collections_selected"})])})},2703:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"dislike",xlinkHref:"#dislike"})])})},3514:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"disliked",xlinkHref:"#disliked"})])})},957:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"donation",xlinkHref:"#donation"})])})},7431:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"explicit",xlinkHref:"#explicit"})])})},2900:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"filter",xlinkHref:"#filter"})])})},7299:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"fullscreen",xlinkHref:"#fullscreen"})])})},2272:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"history",xlinkHref:"#history"})])})},533:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"home",xlinkHref:"#home"})])})},8005:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"home_selected",xlinkHref:"#home_selected"})])})},3687:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"info",xlinkHref:"#info"})])})},7261:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"kids",xlinkHref:"#kids"})])})},8837:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"kinopoisk",xlinkHref:"#kinopoisk"})])})},5494:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"lightning",xlinkHref:"#lightning"})])})},6334:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"like",xlinkHref:"#like"})])})},4973:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"likeVariant",xlinkHref:"#likeVariant"})])})},9165:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"liked",xlinkHref:"#liked"})])})},1936:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"likedVariant",xlinkHref:"#likedVariant"})])})},5517:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"link",xlinkHref:"#link"})])})},6685:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"lock",xlinkHref:"#lock"})])})},8274:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"lyrics",xlinkHref:"#lyrics"})])})},6094:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"menuArrow",xlinkHref:"#menuArrow"})])})},3974:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"more",xlinkHref:"#more"})])})},2502:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicLogo",xlinkHref:"#musicLogo"})])})},9923:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicRu",xlinkHref:"#musicRu"})])})},9384:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicRuNew",xlinkHref:"#musicRuNew"})])})},9473:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"next",xlinkHref:"#next"})])})},5985:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"non_music",xlinkHref:"#non_music"})])})},8749:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"note",xlinkHref:"#note"})])})},4947:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pause",xlinkHref:"#pause"})])})},243:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pauseVibe",xlinkHref:"#pauseVibe"})])})},1687:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pause_filled",xlinkHref:"#pause_filled"})])})},2761:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pencil",xlinkHref:"#pencil"})])})},9817:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pin",xlinkHref:"#pin"})])})},6515:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pin_filled",xlinkHref:"#pin_filled"})])})},7471:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"play",xlinkHref:"#play"})])})},6684:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"playVibe",xlinkHref:"#playVibe"})])})},9319:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"play_filled",xlinkHref:"#play_filled"})])})},8602:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"playlist",xlinkHref:"#playlist"})])})},8861:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"plus",xlinkHref:"#plus"})])})},1179:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"plusOutlined",xlinkHref:"#plusOutlined"})])})},6532:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"podcasts",xlinkHref:"#podcasts"})])})},7918:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"previous",xlinkHref:"#previous"})])})},1739:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"queue",xlinkHref:"#queue"})])})},7692:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"repeat",xlinkHref:"#repeat"})])})},7881:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"repeat_one",xlinkHref:"#repeat_one"})])})},2339:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"reset",xlinkHref:"#reset"})])})},7954:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"search",xlinkHref:"#search"})])})},6178:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"search_selected",xlinkHref:"#search_selected"})])})},200:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"settings",xlinkHref:"#settings"})])})},9109:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"share",xlinkHref:"#share"})])})},4521:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"shuffle",xlinkHref:"#shuffle"})])})},3013:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1_25x",xlinkHref:"#speed_1_25x"})])})},1937:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1_5x",xlinkHref:"#speed_1_5x"})])})},4576:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1_75x",xlinkHref:"#speed_1_75x"})])})},7163:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1x",xlinkHref:"#speed_1x"})])})},4717:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_2x",xlinkHref:"#speed_2x"})])})},6539:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"trailer",xlinkHref:"#trailer"})])})},6029:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"unavailable",xlinkHref:"#unavailable"})])})},3314:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"uncollapse",xlinkHref:"#uncollapse"})])})},5312:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"unpin",xlinkHref:"#unpin"})])})},3993:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"users",xlinkHref:"#users"})])})},5730:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"vibe",xlinkHref:"#vibe"})])})},631:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"volume",xlinkHref:"#volume"})])})},4689:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"volumeOff",xlinkHref:"#volumeOff"})])})},1677:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"yandexRu",xlinkHref:"#yandexRu"})])})},4833:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Icon=r.IconComponent=void 0;let a=t(9541),i=t(810),o=t(5881),s=t(8212),l=t(476),c=n(t(5323));r.IconComponent=({"aria-label":e,className:r,focusable:t=!1,variant:n,size:i,forwardRef:f,...u})=>{let d=s.iconsCollection[n];return(0,a.jsx)(d,{className:(0,o.clsx)(c.default.root,r,c.default[`root_size_${i}`]),focusable:t,"aria-label":e,...u,"aria-hidden":!e,ref:f,style:{...u.style||{},padding:l.paddings[n]}})},r.Icon=(0,i.forwardRef)((e,t)=>(0,a.jsx)(r.IconComponent,{forwardRef:t,...e}))},8212:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.iconsCollection=void 0;let a=n(t(5695)),i=n(t(9800)),o=n(t(2751)),s=n(t(383)),l=n(t(758)),c=n(t(9466)),f=n(t(9032)),u=n(t(7294)),d=n(t(8409)),p=n(t(1478)),x=n(t(849)),m=n(t(3781)),g=n(t(5951)),v=n(t(7203)),y=n(t(8688)),_=n(t(4653)),k=n(t(2966)),E=n(t(5849)),b=n(t(32)),w=n(t(6631)),h=n(t(5972)),R=n(t(2703)),j=n(t(3514)),O=n(t(957)),H=n(t(7431)),P=n(t(2900)),C=n(t(7299)),N=n(t(3687)),V=n(t(2272)),S=n(t(8005)),U=n(t(533)),I=n(t(7261)),z=n(t(8837)),M=n(t(5494)),D=n(t(6334)),T=n(t(9165)),L=n(t(1936)),A=n(t(4973)),W=n(t(5517)),G=n(t(6685)),B=n(t(8274)),Z=n(t(6094)),q=n(t(3974)),J=n(t(2502)),Q=n(t(9923)),F=n(t(9384)),X=n(t(9473)),K=n(t(5985)),Y=n(t(8749)),$=n(t(1687)),ee=n(t(4947)),er=n(t(243)),et=n(t(2761)),en=n(t(6515)),ea=n(t(9817)),ei=n(t(9319)),eo=n(t(7471)),es=n(t(8602)),el=n(t(6684)),ec=n(t(8861)),ef=n(t(1179)),eu=n(t(6532)),ed=n(t(7918)),ep=n(t(1739)),ex=n(t(7881)),em=n(t(7692)),eg=n(t(2339)),ev=n(t(7954)),ey=n(t(6178)),e_=n(t(200)),ek=n(t(9109)),eE=n(t(4521)),eb=n(t(7163)),ew=n(t(3013)),eh=n(t(1937)),eR=n(t(4576)),ej=n(t(4717)),eO=n(t(6539)),eH=n(t(6029)),eP=n(t(3314)),eC=n(t(5312)),eN=n(t(3993)),eV=n(t(5730)),eS=n(t(631)),eU=n(t(4689)),eI=n(t(1677));r.iconsCollection={add:a.default,addToPlaylist:i.default,adult:o.default,album:s.default,arrowDown:l.default,arrowLeft:c.default,arrowRight:f.default,artist:u.default,attention:d.default,bucket:p.default,cast:x.default,chain:m.default,chartDown:g.default,chartNew:v.default,chartSame:y.default,chartUp:_.default,check:k.default,close:E.default,collapse:b.default,collections_selected:w.default,collections:h.default,dislike:R.default,disliked:j.default,donation:O.default,explicit:H.default,filter:P.default,fullscreen:C.default,history:V.default,home_selected:S.default,home:U.default,info:N.default,kids:I.default,kinopoisk:z.default,lightning:M.default,like:D.default,liked:T.default,likedVariant:L.default,likeVariant:A.default,link:W.default,lock:G.default,lyrics:B.default,menuArrow:Z.default,more:q.default,musicLogo:J.default,musicRu:Q.default,musicRuNew:F.default,next:X.default,non_music:K.default,note:Y.default,pause_filled:$.default,pause:ee.default,pauseVibe:er.default,pencil:et.default,pin_filled:en.default,pin:ea.default,play_filled:ei.default,play:eo.default,playlist:es.default,playVibe:el.default,plus:ec.default,plusOutlined:ef.default,podcasts:eu.default,previous:ed.default,queue:ep.default,repeat_one:ex.default,repeat:em.default,reset:eg.default,search:ev.default,search_selected:ey.default,settings:e_.default,share:ek.default,shuffle:eE.default,speed_1x:eb.default,speed_1_25x:ew.default,speed_1_5x:eh.default,speed_1_75x:eR.default,speed_2x:ej.default,trailer:eO.default,unavailable:eH.default,uncollapse:eP.default,unpin:eC.default,users:eN.default,vibe:eV.default,volume:eS.default,volumeOff:eU.default,yandexRu:eI.default}},5026:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Icon=void 0;var n=t(4833);Object.defineProperty(r,"Icon",{enumerable:!0,get:function(){return n.Icon}})},476:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.paddings=void 0,r.paddings={add:"var(--ym-icon-padding, 2px)",addToPlaylist:"var(--ym-icon-padding, 2px, 2px, 2px, 2px)",adult:"var(--ym-icon-padding)",album:"var(--ym-icon-padding, 1px)",arrowDown:"var(--ym-icon-padding, 8px 4px 5px)",arrowLeft:"var(--ym-icon-padding, 5px 8px 4px 6px)",arrowRight:"var(--ym-icon-padding, 5px 7px 4px 7px)",artist:"var(--ym-icon-padding, 1px 0)",attention:"var(--ym-icon-padding, 2px)",bucket:"var(--ym-icon-padding, 1px)",cast:"var(--ym-icon-padding, 3px 1px 2px 1px)",chain:"var(--ym-icon-padding, 2px)",chartDown:"var(--ym-icon-padding, 7px 4px 6px 4px)",chartNew:"var(--ym-icon-padding)",chartSame:"var(--ym-icon-padding, 8px 5px 9px 6px)",chartUp:"var(--ym-icon-padding, 6px 4px 6px 5px)",check:"var(--ym-icon-padding, 4px 0 4px 4px)",close:"var(--ym-icon-padding, 6px)",collapse:"var(--ym-icon-padding)",collections_selected:"var(--ym-icon-padding, 5px 4px 5px 5px)",collections:"var(--ym-icon-padding, 5px 4px 5px 5px)",dislike:"var(--ym-icon-padding, 2px 1px 3px 1px)",disliked:"var(--ym-icon-padding, 2px 1px 3px 1px)",donation:"var(--ym-icon-padding, 0px 1px 0px 0px)",explicit:"var(--ym-icon-padding)",filter:"var(--ym-icon-padding, 6px 4px 6px 4px)",fullscreen:"var(--ym-icon-padding, 4px)",history:"var(--ym-icon-padding, 2px)",home_selected:"var(--ym-icon-padding, 4px 5px 5px 4px)",home:"var(--ym-icon-padding, 4px 5px 5px 4px)",info:"var(--ym-icon-padding)",kids:"var(--ym-icon-padding, 6px)",kinopoisk:"var(--ym-icon-padding, 6px 6px 5px 6px)",lightning:"var(--ym-icon-padding, 3px 6px 3px 6px)",like:"var(--ym-icon-padding, 3px 2px 3px 2px)",liked:"var(--ym-icon-padding, 2px 1px 2px 2px)",likedVariant:"var(--ym-icon-padding, 5px 6px 6px 0)",likeVariant:"var(--ym-icon-padding, 5px 6px 6px 0)",link:"var(--ym-icon-padding)",lock:"var(--ym-icon-padding, 2px)",lyrics:"var(--ym-icon-padding, 3px 2px)",menuArrow:"var(--ym-icon-padding, 5px 7px 4px 7px)",more:"var(--ym-icon-padding, 8px 2px 8px 1px)",musicLogo:"var(--ym-icon-padding, 0)",musicRu:"var(--ym-icon-padding)",musicRuNew:"var(--ym-icon-padding, 0)",next:"var(--ym-icon-padding, 4px)",non_music:"var(--ym-icon-padding, 4px 5px 5px 4px)",note:"var(--ym-icon-padding, 4px 7px 2px 5px)",pause_filled:"var(--ym-icon-padding)",pause:"var(--ym-icon-padding, 4px 6px)",pauseVibe:"var(--ym-icon-padding, 2px 4px 4px 8px)",pencil:"var(--ym-icon-padding, 4px)",pin_filled:"var(--ym-icon-padding, 2px 3px)",pin:"var(--ym-icon-padding, 2px 3px)",play_filled:"var(--ym-icon-padding)",play:"var(--ym-icon-padding, 3px 2px 3px 7px)",playlist:"var(--ym-icon-padding, 2px)",playVibe:"var(--ym-icon-padding, 0px 0px 1px 7px)",plus:"var(--ym-icon-padding, 2px 2px 3px 3px)",plusOutlined:"var(--ym-icon-padding, 4px 4px 4px 5px)",podcasts:"var(--ym-icon-padding, 6px)",previous:"var(--ym-icon-padding, 4px)",queue:"var(--ym-icon-padding, 5px 3px)",repeat_one:"var(--ym-icon-padding, 3px 2px 3px 2px)",repeat:"var(--ym-icon-padding, 3px 2px 3px 2px)",reset:"var(--ym-icon-padding, 2px)",search:"var(--ym-icon-padding, 5px)",search_selected:"var(--ym-icon-padding, 5px)",settings:"var(--ym-icon-padding, 2px)",share:"var(--ym-icon-padding, 2px 1px 2px 1px)",shuffle:"var(--ym-icon-padding, 3px 1px 3px 2px)",speed_1x:"var(--ym-icon-padding)",speed_1_25x:"var(--ym-icon-padding)",speed_1_5x:"var(--ym-icon-padding)",speed_1_75x:"var(--ym-icon-padding)",speed_2x:"var(--ym-icon-padding)",trailer:"var(--ym-icon-padding, 2px 1px)",unavailable:"var(--ym-icon-padding, 2px)",uncollapse:"var(--ym-icon-padding)",unpin:"var(--ym-icon-padding, 2px 3px)",users:"var(--ym-icon-padding, 0)",vibe:"var(--ym-icon-padding, 1px 1px 2px 1px)",volume:"var(--ym-icon-padding, 4px 2px 3px 2px)",volumeOff:"var(--ym-icon-padding, 2.8px 2px 1.8px 2px)",yandexRu:"var(--ym-icon-padding)"}},9066:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.PlusBadge=void 0;let a=t(9541),i=t(5881),o=t(9761),s=t(5026),l=n(t(427));r.PlusBadge=({className:e,children:r})=>(0,a.jsxs)("div",{className:(0,i.clsx)(l.default.root,e),children:[(0,a.jsx)(s.Icon,{variant:"plus",size:"xxs",className:l.default.icon}),(0,a.jsx)(o.Caption,{variant:"div",type:"controls",weight:"medium",size:"m",className:l.default.text,children:r})]})},8316:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Caption=r.CaptionComponent=void 0;let a=t(9541),i=t(5881),o=t(810),s=t(3603),l=n(t(435));function c({forwardRef:e,variant:r,type:t="text",size:n="s",className:o,children:c,weight:f="medium",...u}){return(0,a.jsx)(s.Typography,{variant:r,ref:e,className:(0,i.clsx)(l.default.root,l.default[`root_${t}_${n}`],l.default[`root_weight_${f}`],o),...u,children:c})}r.CaptionComponent=c,r.Caption=(0,o.forwardRef)((e,r)=>(0,a.jsx)(c,{forwardRef:r,...e}))},1064:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Heading=r.HeadingComponent=void 0;let a=t(9541),i=t(5881),o=t(810),s=t(3603),l=n(t(5668));r.HeadingComponent=({forwardRef:e,variant:r,weight:t="bold",size:n="s",className:o,children:c,...f})=>(0,a.jsx)(s.Typography,{variant:r,ref:e,className:(0,i.clsx)(l.default.root,l.default[`root_size_${n}`],l.default[`root_weight_${t}`],o),...f,children:c}),r.Heading=(0,o.forwardRef)((e,t)=>(0,a.jsx)(r.HeadingComponent,{forwardRef:t,...e}))},3603:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Typography=r.TypographyComponent=void 0;let a=t(9541),i=t(5881),o=t(810),s=n(t(3594));function l({forwardRef:e,className:r,children:t,variant:n,lineClamp:o,...l}){return(0,a.jsx)(n,{style:{WebkitLineClamp:o},ref:e,title:o&&"string"==typeof t?t:void 0,className:(0,i.clsx)(s.default.root,{[s.default.root_clamp]:o&&o>0,[s.default.root_clamp_oneline]:o&&1===o,[s.default.root_clamp_multiline]:o&&o>1},r),...l,children:t})}r.TypographyComponent=l,r.Typography=(0,o.forwardRef)((e,r)=>(0,a.jsx)(l,{forwardRef:r,...e}))},9761:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Heading=r.Caption=void 0;var n=t(8316);Object.defineProperty(r,"Caption",{enumerable:!0,get:function(){return n.Caption}});var a=t(1064);Object.defineProperty(r,"Heading",{enumerable:!0,get:function(){return a.Heading}})},810:e=>{e.exports=g}},k={};function E(e){var r=k[e];if(void 0!==r)return r.exports;var t=k[e]={exports:{}};return _[e].call(t.exports,t,t.exports,E),t.exports}E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var b={};Object.defineProperty(b,"X",{value:!0}),b.R=void 0,n=E(9066),Object.defineProperty(b,"R",{enumerable:!0,get:function(){return n.PlusBadge}});var w=b.R;b.X;var h=t(1918),R=t(44285),j=t(88919),O=t.n(j);let H=(0,x.Pi)(e=>{let{className:r,variant:t="desktop",withMeta:n,metaClassName:a,usernameClassName:o}=e,{locale:s}=(0,v.Z)(),{user:l,location:c,experiments:f}=(0,i.oR)(),x=(0,i.oz)(),{theme:g,setTheme:_}=(0,i.Fg)(),k=(0,i.uK)(),E=k.get(i.V0),{origin:b}=k.get(i.U5).passportCredentials,j=k.get(i.xi),H=(0,m.useRef)(null),[P,C]=(0,m.useState)(E.get(i.BU.Theme)),N=(0,i.s0)("/settings"),V=JSON.stringify({entrypoint:"web_desktop"}),S=(0,m.useCallback)(e=>{(0,i.kz)(e),E.set(i.BU.Theme,e,{expires:180}),e===i.rL?_(x):_(e),C(E.get(i.BU.Theme))},[x,_,E]);(0,m.useEffect)(()=>{H.current&&(H.current.className=O().iframe)},[H]);let U=(0,m.useCallback)((e,r,t)=>{"settings"===e&&(null==t||t.onClose(),N())},[N]),I=f.checkExperiment(i.pe.WebNextSettingsPage,"on");return(0,u.jsx)("div",{className:(0,p.W)(O().root,r),children:l.isAuthorized?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.User,{className:O().userId,platform:"desktop"===t?"desktop":"touch",userData:{plus:l.hasPlus,avatarId:l.account.avatarId},theme:P||i.Q2.Dark,colorScheme:g,onThemeChange:S,project:"music",queryParams:{"music.showSettings":I?"1":"0","music.chatContext":V,target:"_blank",origin:b},env:"prod",avatarSize:"desktop"===t?34:26,dialogClassName:(0,p.W)(O().dialog,O()["dialog_".concat(t)]),preload:!0,retpath:c.href,lang:s,iframeRef:H,onMenuItemClick:U}),n&&(0,u.jsxs)("div",{className:(0,p.W)(O().meta,a),children:[(0,u.jsx)(h.Caption,{variant:"div",type:"controls",size:"m",weight:"medium",className:(0,p.W)(O().userName,o),lineClamp:1,children:l.account.publicName||l.account.login}),l.hasPlus&&(0,u.jsx)(R.rU,{href:"https://plus.yandex.".concat(c.tld,"/"),target:"_blank",className:O().plusLink,children:(0,u.jsx)(w,{children:(0,u.jsx)(y.Z,{id:"sidebar.plus-badge"})})})]})]}):(0,u.jsx)("a",{href:j.authorizationUrl,className:O().login,children:"Login"})})})},88919:function(e){e.exports={root:"UserProfile_root__vFuOj",userId:"UserProfile_userId__Jb6Ix",login:"UserProfile_login__maucB",dialog:"UserProfile_dialog__kQ8sz",dialog_desktop:"UserProfile_dialog_desktop__0p006",iframe:"UserProfile_iframe__nF7OX",meta:"UserProfile_meta___okny",plusLink:"UserProfile_plusLink__NhVsU",userName:"UserProfile_userName__PTRuJ"}}}]);