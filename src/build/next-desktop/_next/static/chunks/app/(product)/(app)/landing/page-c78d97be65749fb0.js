(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{82978:function(t,e,n){Promise.resolve().then(n.bind(n,83598))},83598:function(t,e,n){"use strict";n.r(e);var r=n(8759),o=n(11769),a=n(84784);e.default=()=>{let t=(0,o.useSearchParams)(),e=t.get("skeleton");return e||(0,o.notFound)(),(0,r.jsx)(a.f,{skeleton:e})}},84784:function(t,e,n){"use strict";n.d(e,{f:function(){return r.LandingPage}});var r=n(66895);n(1768)},1768:function(t,e,n){"use strict";n.r(e),n.d(e,{LandingNotFoundPage:function(){return l}});var r=n(8759),o=n(33423),a=n(99616),i=n(2365),s=n(5674);let l=(0,o.Pi)(()=>{let{landing:t}=(0,s.oR)();return(0,a.useEffect)(()=>()=>{t.reset()},[t]),(0,r.jsx)(i.T,{})})},66895:function(t,e,n){"use strict";n.r(e),n.d(e,{LandingPage:function(){return x}});var r=n(8759),o=n(33423),a=n(11769),i=n(99616),s=n(71716),l=n(1918),c=n(67678),d=n(70579),m=n(13236),u=n(42769),_=n(5674),g=n(44285),h=n(97968),f=n.n(h);let x=(0,o.Pi)(t=>{let{skeleton:e}=t,{landing:n,experiments:o}=(0,_.oR)(),h=(0,_.k6)(),[x,p]=(0,m.zU)();return(o.checkExperiment(_.pe.WebNextUniversalLandingPage,"on")||(0,a.notFound)(),n.loadingState===_.Gu.IDLE&&(0,i.use)(n.getSkeleton({id:e,showWizard:!1},{preloadBlocks:3})),(0,i.useEffect)(()=>()=>n.reset(),[n]),(0,_.NO)(n.loadingState===_.Gu.RESOLVE),n.loadingState===_.Gu.REJECT)?(0,r.jsx)(d.D,{}):(0,r.jsx)(_.Lh,{pageId:_.Rh.LANDING,children:(0,r.jsx)(_.Yv,{skeleton:e,children:(0,r.jsx)(m.I7,{scrollElement:x,headerThreshold:134,children:(0,r.jsxs)(s.t,{className:f().root,containerClassName:f().content,ref:p,children:[(0,r.jsxs)("div",{className:f().header,children:[h.canBack&&(0,r.jsx)(u.n,{withForwardControl:!1,withBackwardControl:h.canBack}),(0,r.jsx)(l.Heading,{variant:"h2",weight:"bold",size:"xl",className:f().title,children:n.title})]}),(0,r.jsx)("div",{className:f().landing,children:(0,r.jsx)(c.Od,{landing:n,errorComponent:(0,r.jsx)(d.D,{className:f().error,withBackwardControl:!1})})}),(0,r.jsx)(g.$_,{className:f().footer})]})})})})})},2365:function(t,e,n){"use strict";n.d(e,{T:function(){return r.NotFound}});var r=n(54529)},54529:function(t,e,n){"use strict";n.r(e),n.d(e,{NotFound:function(){return g}});var r=n(8759),o=n(35338),a=n(33423),i=n(2814),s=n(15527),l=n(14581),c=n(1918),d=n(42769),m=n(5674),u=n(94170),_=n.n(u);let g=(0,a.Pi)(t=>{let{className:e}=t,{contentRef:n}=(0,m.$Y)(),a=(0,m.s0)("/");return(0,m.ZP)(!0),(0,r.jsxs)("div",{className:(0,o.W)(_().root,{[_().root_desktop]:!n},e),children:[(0,r.jsx)(d.n,{withBackwardFallback:"/",className:_().navigation,withForwardControl:!1}),(0,r.jsxs)("div",{className:_().content,children:[(0,r.jsx)(l.J,{className:_().icon,variant:"musicLogo",size:"xxl"}),(0,r.jsx)(c.Heading,{className:(0,o.W)(_().title,_().important),variant:"h3",size:"xs",children:(0,r.jsx)(i.Z,{id:"page-error.page-does-not-exist"})}),(0,r.jsx)(c.Caption,{className:(0,o.W)(_().text,_().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,r.jsx)(i.Z,{id:"page-error.page-does-not-exist-description"})}),(0,r.jsx)(s.z,{onClick:a,className:_().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,r.jsx)(c.Caption,{type:"controls",variant:"span",size:"m",children:(0,r.jsx)(i.Z,{id:"navigation.page-main"})})})]})]})})},70579:function(t,e,n){"use strict";n.d(e,{D:function(){return r.SomethingWentWrong}});var r=n(48471)},48471:function(t,e,n){"use strict";n.r(e),n.d(e,{SomethingWentWrong:function(){return h}});var r=n(8759),o=n(35338),a=n(33423),i=n(99616),s=n(2814),l=n(15527),c=n(14581),d=n(1918),m=n(42769),u=n(5674),_=n(29847),g=n.n(_);let h=(0,a.Pi)(t=>{let{className:e,withBackwardControl:n=!0}=t,a=(0,i.useCallback)(()=>{window.location.reload()},[]),{contentRef:_}=(0,u.$Y)();return(0,r.jsxs)("div",{className:(0,o.W)(g().root,e),children:[n&&(0,r.jsx)(m.n,{withBackwardFallback:"/",className:(0,o.W)(g().navigation,{[g().navigation_desktop]:!_}),withForwardControl:!1}),(0,r.jsxs)("div",{className:(0,o.W)(g().content,{[g().content_shrink]:!n}),children:[(0,r.jsx)(c.J,{className:g().icon,variant:"attention",size:"xxl"}),(0,r.jsx)(d.Heading,{className:(0,o.W)(g().title,g().important),variant:"h3",size:"xs",children:(0,r.jsx)(s.Z,{id:"error-messages.something-went-wrong"})}),(0,r.jsxs)(d.Caption,{className:(0,o.W)(g().text,g().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,r.jsx)(s.Z,{id:"page-error.try-to-restart-app"})]}),(0,r.jsx)(l.z,{onClick:a,className:g().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,r.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,r.jsx)(s.Z,{id:"page-error.restart-app-button"})]})})]})]})})},97968:function(t){t.exports={content:"LandingPage_content__ovHlJ",root:"LandingPage_root__B2lPp",header:"LandingPage_header__TiraG",title:"LandingPage_title__gsIx4",footer:"LandingPage_footer__K9y8K",error:"LandingPage_error__mEsH2"}},94170:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},29847:function(t){t.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}},54064:function(t,e,n){"use strict";n.d(e,{Ji:function(){return _}});var r,o,a,i,s=n(26688),l=n(99616),c=n(65244);(r=a||(a={})).formatDate="FormattedDate",r.formatTime="FormattedTime",r.formatNumber="FormattedNumber",r.formatList="FormattedList",r.formatDisplayName="FormattedDisplayName",(o=i||(i={})).formatDate="FormattedDateParts",o.formatTime="FormattedTimeParts",o.formatNumber="FormattedNumberParts",o.formatList="FormattedListParts";var d=function(t){var e=(0,c.Z)(),n=t.value,r=t.children,o=(0,s.__rest)(t,["value","children"]);return r(e.formatNumberToParts(n,o))};function m(t){var e=function(e){var n=(0,c.Z)(),r=e.value,o=e.children,a=(0,s.__rest)(e,["value","children"]),i="string"==typeof r?new Date(r||0):r;return o("formatDate"===t?n.formatDateToParts(i,a):n.formatTimeToParts(i,a))};return e.displayName=i[t],e}function u(t){var e=function(e){var n=(0,c.Z)(),r=e.value,o=e.children,a=(0,s.__rest)(e,["value","children"]),i=n[t](r,a);if("function"==typeof o)return o(i);var d=n.textComponent||l.Fragment;return l.createElement(d,null,i)};return e.displayName=a[t],e}d.displayName="FormattedNumberParts",d.displayName="FormattedNumberParts";var _=u("formatDate");u("formatTime"),u("formatNumber"),u("formatList"),u("formatDisplayName"),m("formatDate"),m("formatTime")}},function(t){t.O(0,[2498,7873,5455,8628,2008,6217,2015,9034,6911,210,1716,1476,6410,286,4948,4025,4164,1744],function(){return t(t.s=82978)}),_N_E=t.O()}]);