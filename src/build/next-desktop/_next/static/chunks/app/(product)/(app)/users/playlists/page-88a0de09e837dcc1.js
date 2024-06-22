(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3624,4360,7816,9424,1519,3e3],{8123:function(e,t,r){Promise.resolve().then(r.bind(r,76811))},76811:function(e,t,r){"use strict";r.r(t);var n=r(8759),i=r(11769),a=r(30789);t.default=()=>{let e=(0,i.useSearchParams)(),t=e.get("userId"),r=e.get("kind");return t&&r||(0,i.notFound)(),(0,n.jsx)(a.i$,{userId:t,kind:r})}},81546:function(e,t,r){"use strict";r.d(t,{IT:function(){return l.ArtistCard},xG:function(){return s.ArtistContextMenu},o9:function(){return a},Op:function(){return o},v2:function(){return u.useArtistDisclaimer}});var n=r(96555),i=r(81446);let a=n.V5.model("ArtistMeta",{artist:i.Go,lastMonthListeners:n.V5.maybe(n.V5.number)});var l=r(8752),s=r(265);let o=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.reduce((t,r)=>{var n;return t+(null!==(e=null===(n=r.decomposed)||void 0===n?void 0:n.length)&&void 0!==e?e:0)},0);return t.length+r};var u=r(99485)},99485:function(e,t,r){"use strict";r.r(t),r.d(t,{useArtistDisclaimer:function(){return l}});var n=r(99616),i=r(42503),a=r(5674);let l=e=>{let{artist:t,callback:r,shouldHistoryBack:l}=e,{disclaimer:s,modals:{disclaimerModal:o}}=(0,a.oR)(),u=(0,n.useRef)(String((0,i.Z)())),c=(0,n.useRef)(!1),d=(0,a.uK)(),m=d.get(a.ce);return(0,n.useEffect)(()=>{s.isUnsafeDisclaimerConfirmed&&s.id===u.current&&!c.current&&(null==r||r(),c.current=!0)},[r,s.id,s.isUnsafeDisclaimerConfirmed]),(0,n.useCallback)(async e=>{let n=m.get(a.BU.ExEx);if((null==t?void 0:t.isUnsafeLegal)&&(null==n?void 0:n.includes("".concat(a.co.ARTIST,"_").concat(t.id)))){null==r||r();return}if((null==t?void 0:t.isLegalRejected)||(null==t?void 0:t.isUnsafeLegal)){null==e||e.preventDefault(),await s.getArtistDisclaimer({artistId:t.id}),t.isUnsafeLegal&&s.setType(a.Gq.UNSAFE),s.setId(u.current),s.setEntityId(t.id),s.setEntityType(a.co.ARTIST),s.setShouldHistoryBack(!!l),c.current=!1,o.open();return}null==r||r()},[null==t?void 0:t.id,null==t?void 0:t.isLegalRejected,null==t?void 0:t.isUnsafeLegal,r,s,o,m,l])}},8752:function(e,t,r){"use strict";r.r(t),r.d(t,{ArtistCard:function(){return g}});var n=r(8759),i=r(35338),a=r(33423),l=r(99616),s=r(65244),o=r(2814),u=r(82834),c=r(454),d=r(57413),m=r(15527),f=r(14077),v=r(14581),p=r(96437),b=r(1918),_=r(81446),x=r(5674),C=r(44285),k=r(99485),T=r(265),A=r(38755),h=r.n(A);let g=(0,a.Pi)(e=>{let{artist:t,className:r,children:a,contentLinesCount:A}=e,{ref:g,intersectionPropertyId:y}=(0,x.Vf)(),N=(0,x.x5)(),{formatMessage:P}=(0,s.Z)(),[S,B]=(0,l.useState)(!1),[j,L]=(0,l.useState)(!1),[E,D]=(0,l.useState)(!1),{sendLikeSearchFeedback:M,sendNavigateSearchFeedback:I,sendPlaySearchFeedback:R}=(0,x.sA)(),F=(0,x.zx)(),U=(0,_.SB)(t),w=(0,_.BV)(t),{id:O,name:z,coverUri:G,isLiked:V}=t,Z=(0,x.s0)(t.url),{sonataState:{status:q},experiments:W}=(0,x.oR)(),[J,K]=(0,l.useState)(!1),X=(0,l.useMemo)(()=>{let e=P({id:"entity-names.artist-name"},{artistName:z}),t=V?P({id:"entity-names.has-your-like"}):"";return"".concat(e," ").concat(t)},[z,V,P]),{isPlaying:H,togglePlay:Q}=(0,x.qm)({playContextParams:{contextData:{type:d.Ak.Artist,meta:{id:Number(O)},from:N},loadContextMeta:!0},sonataStatus:q}),Y=(0,k.useArtistDisclaimer)({artist:t,callback:Z}),$=(0,k.useArtistDisclaimer)({artist:t,callback:Q}),ee=(0,l.useCallback)(e=>{null==I||I(),F({to:u.qU.ArtistScreen}),Y(e)},[F,I,Y]),et=(0,l.useCallback)(e=>{ee(e)},[ee]),er=(0,l.useCallback)(()=>{S||H||(B(!0),null==R||R()),$()},[H,S,R,$]),en=(0,l.useCallback)(()=>{j||V||(L(!0),null==M||M()),U()},[V,U,j,M]),ei=(0,l.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),ea=(0,l.useCallback)(()=>{D(!E),K(!E)},[E]),el=(0,l.useMemo)(()=>(0,n.jsx)(T.ArtistContextMenu,{artist:t,onOpenChange:ea,open:E,returnFocus:!1,reference:(0,n.jsx)(m.z,{onClick:ei,className:(0,i.W)(h().menuButton,h().control),"aria-label":P({id:"interface-actions.context-menu"}),icon:(0,n.jsx)(v.J,{size:"xxs",variant:"more"}),size:"s",radius:"round",...(0,c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON)})}),[t,P,ei,ea,E]),es=(0,l.useMemo)(()=>{if(W.checkExperiment(x.pe.WebPins,"on"))return(0,n.jsx)(C.RT,{onClick:w,isPinned:t.isPinned,className:(0,i.W)(h().pinButton,h().control),withRipple:!1})},[t.isPinned,W,w]),eo=(0,l.useMemo)(()=>{if(t.isAvailable)return(0,n.jsx)(f.kk,{isVisible:E||J,className:h().controls,radius:"round",playControl:(0,n.jsx)(C.JM,{buttonVariant:"default",withHover:!1,className:(0,i.W)(h().playButton,h().control),iconSize:"xl",variant:"filled",onClick:er,isPlaying:H,disabled:!t.isAvailableForPlaying}),likeControl:(0,n.jsx)(C.dJ,{className:(0,i.W)(h().likeButton,h().control),isLiked:V,onClick:en,variant:"default",size:"s",iconSize:"xxs"}),menuControl:el,pinControl:es})},[t.isAvailable,t.isAvailableForPlaying,el,en,er,E,J,V,H,es]),eu=(0,l.useMemo)(()=>(0,n.jsx)(p.Paper,{className:h().cover,radius:"round",withShadow:!0,...(0,c.BA)(c.bG.artist.ARTIST_CARD),children:(0,n.jsxs)("div",{className:h().coverBlock,onClick:et,children:[(0,n.jsx)(C.BE,{className:h().image,src:G,size:200,fit:"cover",alt:X,withAvatarReplace:!0,isAvailable:t.isAvailable,"aria-hidden":!0}),eo]})}),[et,G,X,t.isAvailable,eo]);return(0,n.jsx)(f.m7,{ref:g,className:(0,i.W)(h().root,r),textPosition:"center","aria-label":X,title:(0,n.jsx)(b.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,n.jsx)(C.rU,{className:h().titleLink,href:t.url,"aria-label":X,onClick:ee,...(0,c.BA)(c.bG.artist.ARTIST_TITLE),children:z})}),srTitle:(0,n.jsx)(C.rU,{href:t.url,onClick:ee,children:X}),"data-intersection-property-id":y,description:(0,n.jsx)(b.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",...(0,c.BA)(c.bG.artist.ARTIST_SUBTITLE),children:(0,n.jsx)(o.Z,{id:"entity-names.singer"})}),contentLinesCount:A,view:eu,...(0,c.BA)(c.bG.artist.ARTIST_ITEM),children:a})})},265:function(e,t,r){"use strict";r.r(t),r.d(t,{ArtistContextMenu:function(){return c}});var n=r(8759),i=r(33423),a=r(99616),l=r(52317),s=r(81446),o=r(5674),u=r(44285);let c=(0,i.Pi)(e=>{var t,r;let{artist:i,lastMonthListeners:c,reference:d,onOpenChange:m,open:f,returnFocus:v}=e,{settings:p,experiments:b}=(0,o.oR)(),_=(0,s.BV)(i),x=(0,s.SB)(i),C="".concat(o.aU.ARTIST,"-").concat(null==i?void 0:i.id),k=p.layout===o.t8.Mobile,T=b.checkExperiment(o.pe.WebPins,"on")&&!k,{href:A}=(0,o.qK)(null!==(t=null==i?void 0:i.url)&&void 0!==t?t:""),{isPlaying:h,togglePlay:g}=(0,o.Qh)({seeds:null!==(r=null==i?void 0:i.seeds)&&void 0!==r?r:[],pageIdForFrom:o.Rh.RADIO,blockIdForFrom:C}),y=(0,a.useCallback)(()=>{h||g()},[h,g]);return(0,o.ZP)(f),(0,n.jsxs)(l.v2,{reference:d,isMobile:k,title:null==i?void 0:i.name,description:c,offsetOptions:10,open:f,onOpenChange:m,returnFocus:v,children:[T&&(0,n.jsx)(u.Zd,{onClick:_,isPinned:null==i?void 0:i.isPinned}),(0,n.jsx)(u.xZ,{onClick:x,isLiked:null==i?void 0:i.isLiked,disabled:!(null==i?void 0:i.isAvailable)}),(0,n.jsx)(u.GQ,{onClick:y,disabled:!(null==i?void 0:i.isAvailable),variant:"artist"}),(0,n.jsx)(u.zq,{disabled:!i,shareLink:A,entityVariant:"artist",entityTitle:null==i?void 0:i.name})]})})},13236:function(e,t,r){"use strict";r.d(t,{I7:function(){return p},b4:function(){return s},at:function(){return _},zU:function(){return b}});var n=r(8759),i=r(99616),a=r.t(i,2),l=r(44285);let s=e=>{let{children:t,title:r,className:a}=e,{setTitleElement:s,setTitle:o}=(0,i.useContext)(l.pI),u=(0,i.useRef)(null);return(0,i.useEffect)(()=>{(null==u?void 0:u.current)&&s(u),r&&o(r)},[u,r,s,o]),(0,i.useEffect)(()=>()=>{o("")},[o]),(0,n.jsx)("div",{ref:u,className:a,children:t})};var o=r(33423),u={810:e=>{e.exports=a}},c={},d={};(()=>{Object.defineProperty(d,"__esModule",{value:!0}),d.useScroll=void 0;let e=function e(t){var r=c[t];if(void 0!==r)return r.exports;var n=c[t]={exports:{}};return u[t](n,n.exports,e),n.exports}(810);d.useScroll=t=>{(0,e.useEffect)(()=>(window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t)}),[t])}})(),d.__esModule;var m=d.useScroll,f=r(5674);let v=e=>{let{element:t,scrollTop:r,isMobile:n}=e,i=.4*t.clientHeight;return r+(n?56:72)>=t.offsetTop+i},p=(0,o.Pi)(e=>{let{children:t,scrollElement:r,outerTitle:a="",headerElement:s,headerThreshold:o}=e,[u,c]=(0,i.useState)(a),[d,p]=(0,i.useState)(null),[b,_]=(0,i.useState)(!1),[x,C]=(0,i.useState)(!1),{settings:k}=(0,f.oR)(),T=k.layout===f.t8.Mobile;(0,i.useLayoutEffect)(()=>{c(a)},[a]);let A=(0,i.useCallback)(()=>{if(!r)return;let e=null!=o?o:10,t=s?Number(s.offsetTop)-e:e;t<0&&(t=0),C(r.scrollTop>t),(null==d?void 0:d.current)&&_(v({element:null==d?void 0:d.current,scrollTop:r.scrollTop,isMobile:T}))},[r,o,s,d,T]);(0,i.useEffect)(()=>{(null==r?void 0:r.scrollTop)===0&&C(!1)},[null==r?void 0:r.scrollTop]),m(A);let h=(0,i.useMemo)(()=>({title:u,setTitle:c,titleElement:d,scrollElement:r,setTitleElement:p,isScrolledTitle:b,isScrolling:x}),[u,b,d,r,x]);return(0,n.jsx)(l.pI.Provider,{value:h,children:t})});r(41197);let b=()=>{let[e,t]=(0,i.useState)(null),r=(0,i.useCallback)(r=>{e!==r&&t(r)},[e]);return[e,r]},_=(e,t)=>{let r=(0,f.uK)();r.get(f.Xt);let n=(0,i.useMemo)(()=>{if(void 0!==t){let r=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:r,"px)"),opacity:1}}return{}},[t,!1,e]),a=(0,i.useMemo)(()=>({"--average-color-background":e}),[e]);return[n,a]}},42769:function(e,t,r){"use strict";r.d(t,{h:function(){return i.h},n:function(){return n.n}});var n=r(22008),i=r(38828)},38755:function(e){e.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",control:"ArtistCard_control___qv5j"}},54064:function(e,t,r){"use strict";r.d(t,{Ji:function(){return f}});var n,i,a,l,s=r(26688),o=r(99616),u=r(65244);(n=a||(a={})).formatDate="FormattedDate",n.formatTime="FormattedTime",n.formatNumber="FormattedNumber",n.formatList="FormattedList",n.formatDisplayName="FormattedDisplayName",(i=l||(l={})).formatDate="FormattedDateParts",i.formatTime="FormattedTimeParts",i.formatNumber="FormattedNumberParts",i.formatList="FormattedListParts";var c=function(e){var t=(0,u.Z)(),r=e.value,n=e.children,i=(0,s.__rest)(e,["value","children"]);return n(t.formatNumberToParts(r,i))};function d(e){var t=function(t){var r=(0,u.Z)(),n=t.value,i=t.children,a=(0,s.__rest)(t,["value","children"]),l="string"==typeof n?new Date(n||0):n;return i("formatDate"===e?r.formatDateToParts(l,a):r.formatTimeToParts(l,a))};return t.displayName=l[e],t}function m(e){var t=function(t){var r=(0,u.Z)(),n=t.value,i=t.children,a=(0,s.__rest)(t,["value","children"]),l=r[e](n,a);if("function"==typeof i)return i(l);var c=r.textComponent||o.Fragment;return o.createElement(c,null,l)};return t.displayName=a[e],t}c.displayName="FormattedNumberParts",c.displayName="FormattedNumberParts";var f=m("formatDate");m("formatTime"),m("formatNumber"),m("formatList"),m("formatDisplayName"),d("formatDate"),d("formatTime")},92318:function(e,t,r){"use strict";r.d(t,{O:function(){return o}});var n,i=r(99616),a={810:e=>{e.exports=n||(n=r.t(i,2))}},l={},s={};(()=>{Object.defineProperty(s,"__esModule",{value:!0}),s.useToggle=void 0;let e=function e(t){var r=l[t];if(void 0!==r)return r.exports;var n=l[t]={exports:{}};return a[t](n,n.exports,e),n.exports}(810);s.useToggle=t=>{let[r,n]=(0,e.useState)(t),i=(0,e.useCallback)(()=>{n(e=>!e)},[]),a=(0,e.useCallback)(()=>{n(!0)},[]),l=(0,e.useCallback)(()=>{n(!1)},[]);return{state:r,toggle:i,toggleTrue:a,toggleFalse:l}}})(),s.__esModule;var o=s.useToggle}},function(e){e.O(0,[2498,7873,5455,8628,2729,2008,6217,2015,9034,6911,210,1476,6410,2931,2687,2436,9227,7454,789,4025,4164,1744],function(){return e(e.s=8123)}),_N_E=e.O()}]);