(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9011],{2720:function(e,t,a){Promise.resolve().then(a.bind(a,46221))},46221:function(e,t,a){"use strict";a.r(t);var n=a(8759),l=a(11769),r=a(30651);t.default=()=>{let e=(0,l.useSearchParams)(),t=e.get("metatagId");return t||(0,l.notFound)(),(0,n.jsx)(r.a0,{metatagId:t})}},81546:function(e,t,a){"use strict";a.d(t,{IT:function(){return i.ArtistCard},xG:function(){return s.ArtistContextMenu},o9:function(){return r},Op:function(){return o},v2:function(){return u.useArtistDisclaimer}});var n=a(96555),l=a(81446);let r=n.V5.model("ArtistMeta",{artist:l.Go,lastMonthListeners:n.V5.maybe(n.V5.number)});var i=a(8752),s=a(265);let o=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=t.reduce((t,a)=>{var n;return t+(null!==(e=null===(n=a.decomposed)||void 0===n?void 0:n.length)&&void 0!==e?e:0)},0);return t.length+a};var u=a(99485)},99485:function(e,t,a){"use strict";a.r(t),a.d(t,{useArtistDisclaimer:function(){return i}});var n=a(99616),l=a(42503),r=a(5674);let i=e=>{let{artist:t,callback:a,shouldHistoryBack:i}=e,{disclaimer:s,modals:{disclaimerModal:o}}=(0,r.oR)(),u=(0,n.useRef)(String((0,l.Z)())),d=(0,n.useRef)(!1),c=(0,r.uK)(),g=c.get(r.ce);return(0,n.useEffect)(()=>{s.isUnsafeDisclaimerConfirmed&&s.id===u.current&&!d.current&&(null==a||a(),d.current=!0)},[a,s.id,s.isUnsafeDisclaimerConfirmed]),(0,n.useCallback)(async e=>{let n=g.get(r.BU.ExEx);if((null==t?void 0:t.isUnsafeLegal)&&(null==n?void 0:n.includes("".concat(r.co.ARTIST,"_").concat(t.id)))){null==a||a();return}if((null==t?void 0:t.isLegalRejected)||(null==t?void 0:t.isUnsafeLegal)){null==e||e.preventDefault(),await s.getArtistDisclaimer({artistId:t.id}),t.isUnsafeLegal&&s.setType(r.Gq.UNSAFE),s.setId(u.current),s.setEntityId(t.id),s.setEntityType(r.co.ARTIST),s.setShouldHistoryBack(!!i),d.current=!1,o.open();return}null==a||a()},[null==t?void 0:t.id,null==t?void 0:t.isLegalRejected,null==t?void 0:t.isUnsafeLegal,a,s,o,g,i])}},8752:function(e,t,a){"use strict";a.r(t),a.d(t,{ArtistCard:function(){return G}});var n=a(8759),l=a(35338),r=a(33423),i=a(99616),s=a(65244),o=a(2814),u=a(82834),d=a(454),c=a(57413),g=a(15527),m=a(14077),p=a(14581),f=a(96437),v=a(1918),N=a(81446),S=a(5674),C=a(44285),b=a(99485),y=a(265),E=a(38755),_=a.n(E);let G=(0,r.Pi)(e=>{let{artist:t,className:a,children:r,contentLinesCount:E}=e,{ref:G,intersectionPropertyId:h}=(0,S.Vf)(),P=(0,S.x5)(),{formatMessage:T}=(0,s.Z)(),[x,V]=(0,i.useState)(!1),[A,R]=(0,i.useState)(!1),[D,k]=(0,i.useState)(!1),{sendLikeSearchFeedback:j,sendNavigateSearchFeedback:I,sendPlaySearchFeedback:L}=(0,S.sA)(),O=(0,S.zx)(),B=(0,N.SB)(t),F=(0,N.BV)(t),{id:U,name:q,coverUri:w,isLiked:M}=t,z=(0,S.s0)(t.url),{sonataState:{status:J},experiments:W}=(0,S.oR)(),[Z,Q]=(0,i.useState)(!1),H=(0,i.useMemo)(()=>{let e=T({id:"entity-names.artist-name"},{artistName:q}),t=M?T({id:"entity-names.has-your-like"}):"";return"".concat(e," ").concat(t)},[q,M,T]),{isPlaying:K,togglePlay:X}=(0,S.qm)({playContextParams:{contextData:{type:c.Ak.Artist,meta:{id:Number(U)},from:P},loadContextMeta:!0},sonataStatus:J}),Y=(0,b.useArtistDisclaimer)({artist:t,callback:z}),$=(0,b.useArtistDisclaimer)({artist:t,callback:X}),ee=(0,i.useCallback)(e=>{null==I||I(),O({to:u.qU.ArtistScreen}),Y(e)},[O,I,Y]),et=(0,i.useCallback)(e=>{ee(e)},[ee]),ea=(0,i.useCallback)(()=>{x||K||(V(!0),null==L||L()),$()},[K,x,L,$]),en=(0,i.useCallback)(()=>{A||M||(R(!0),null==j||j()),B()},[M,B,A,j]),el=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),er=(0,i.useCallback)(()=>{k(!D),Q(!D)},[D]),ei=(0,i.useMemo)(()=>(0,n.jsx)(y.ArtistContextMenu,{artist:t,onOpenChange:er,open:D,returnFocus:!1,reference:(0,n.jsx)(g.z,{onClick:el,className:(0,l.W)(_().menuButton,_().control),"aria-label":T({id:"interface-actions.context-menu"}),icon:(0,n.jsx)(p.J,{size:"xxs",variant:"more"}),size:"s",radius:"round",...(0,d.BA)(d.bG.artist.ARTIST_CONTEXT_MENU_BUTTON)})}),[t,T,el,er,D]),es=(0,i.useMemo)(()=>{if(W.checkExperiment(S.pe.WebPins,"on"))return(0,n.jsx)(C.RT,{onClick:F,isPinned:t.isPinned,className:(0,l.W)(_().pinButton,_().control),withRipple:!1})},[t.isPinned,W,F]),eo=(0,i.useMemo)(()=>{if(t.isAvailable)return(0,n.jsx)(m.kk,{isVisible:D||Z,className:_().controls,radius:"round",playControl:(0,n.jsx)(C.JM,{buttonVariant:"default",withHover:!1,className:(0,l.W)(_().playButton,_().control),iconSize:"xl",variant:"filled",onClick:ea,isPlaying:K,disabled:!t.isAvailableForPlaying}),likeControl:(0,n.jsx)(C.dJ,{className:(0,l.W)(_().likeButton,_().control),isLiked:M,onClick:en,variant:"default",size:"s",iconSize:"xxs"}),menuControl:ei,pinControl:es})},[t.isAvailable,t.isAvailableForPlaying,ei,en,ea,D,Z,M,K,es]),eu=(0,i.useMemo)(()=>(0,n.jsx)(f.Paper,{className:_().cover,radius:"round",withShadow:!0,...(0,d.BA)(d.bG.artist.ARTIST_CARD),children:(0,n.jsxs)("div",{className:_().coverBlock,onClick:et,children:[(0,n.jsx)(C.BE,{className:_().image,src:w,size:200,fit:"cover",alt:H,withAvatarReplace:!0,isAvailable:t.isAvailable,"aria-hidden":!0}),eo]})}),[et,w,H,t.isAvailable,eo]);return(0,n.jsx)(m.m7,{ref:G,className:(0,l.W)(_().root,a),textPosition:"center","aria-label":H,title:(0,n.jsx)(v.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,n.jsx)(C.rU,{className:_().titleLink,href:t.url,"aria-label":H,onClick:ee,...(0,d.BA)(d.bG.artist.ARTIST_TITLE),children:q})}),srTitle:(0,n.jsx)(C.rU,{href:t.url,onClick:ee,children:H}),"data-intersection-property-id":h,description:(0,n.jsx)(v.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",...(0,d.BA)(d.bG.artist.ARTIST_SUBTITLE),children:(0,n.jsx)(o.Z,{id:"entity-names.singer"})}),contentLinesCount:E,view:eu,...(0,d.BA)(d.bG.artist.ARTIST_ITEM),children:r})})},265:function(e,t,a){"use strict";a.r(t),a.d(t,{ArtistContextMenu:function(){return d}});var n=a(8759),l=a(33423),r=a(99616),i=a(52317),s=a(81446),o=a(5674),u=a(44285);let d=(0,l.Pi)(e=>{var t,a;let{artist:l,lastMonthListeners:d,reference:c,onOpenChange:g,open:m,returnFocus:p}=e,{settings:f,experiments:v}=(0,o.oR)(),N=(0,s.BV)(l),S=(0,s.SB)(l),C="".concat(o.aU.ARTIST,"-").concat(null==l?void 0:l.id),b=f.layout===o.t8.Mobile,y=v.checkExperiment(o.pe.WebPins,"on")&&!b,{href:E}=(0,o.qK)(null!==(t=null==l?void 0:l.url)&&void 0!==t?t:""),{isPlaying:_,togglePlay:G}=(0,o.Qh)({seeds:null!==(a=null==l?void 0:l.seeds)&&void 0!==a?a:[],pageIdForFrom:o.Rh.RADIO,blockIdForFrom:C}),h=(0,r.useCallback)(()=>{_||G()},[_,G]);return(0,o.ZP)(m),(0,n.jsxs)(i.v2,{reference:c,isMobile:b,title:null==l?void 0:l.name,description:d,offsetOptions:10,open:m,onOpenChange:g,returnFocus:p,children:[y&&(0,n.jsx)(u.Zd,{onClick:N,isPinned:null==l?void 0:l.isPinned}),(0,n.jsx)(u.xZ,{onClick:S,isLiked:null==l?void 0:l.isLiked,disabled:!(null==l?void 0:l.isAvailable)}),(0,n.jsx)(u.GQ,{onClick:h,disabled:!(null==l?void 0:l.isAvailable),variant:"artist"}),(0,n.jsx)(u.zq,{disabled:!l,shareLink:E,entityVariant:"artist",entityTitle:null==l?void 0:l.name})]})})},13236:function(e,t,a){"use strict";a.d(t,{I7:function(){return f},b4:function(){return s},at:function(){return N},zU:function(){return v}});var n=a(8759),l=a(99616),r=a.t(l,2),i=a(44285);let s=e=>{let{children:t,title:a,className:r}=e,{setTitleElement:s,setTitle:o}=(0,l.useContext)(i.pI),u=(0,l.useRef)(null);return(0,l.useEffect)(()=>{(null==u?void 0:u.current)&&s(u),a&&o(a)},[u,a,s,o]),(0,l.useEffect)(()=>()=>{o("")},[o]),(0,n.jsx)("div",{ref:u,className:r,children:t})};var o=a(33423),u={810:e=>{e.exports=r}},d={},c={};(()=>{Object.defineProperty(c,"__esModule",{value:!0}),c.useScroll=void 0;let e=function e(t){var a=d[t];if(void 0!==a)return a.exports;var n=d[t]={exports:{}};return u[t](n,n.exports,e),n.exports}(810);c.useScroll=t=>{(0,e.useEffect)(()=>(window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t)}),[t])}})(),c.__esModule;var g=c.useScroll,m=a(5674);let p=e=>{let{element:t,scrollTop:a,isMobile:n}=e,l=.4*t.clientHeight;return a+(n?56:72)>=t.offsetTop+l},f=(0,o.Pi)(e=>{let{children:t,scrollElement:a,outerTitle:r="",headerElement:s,headerThreshold:o}=e,[u,d]=(0,l.useState)(r),[c,f]=(0,l.useState)(null),[v,N]=(0,l.useState)(!1),[S,C]=(0,l.useState)(!1),{settings:b}=(0,m.oR)(),y=b.layout===m.t8.Mobile;(0,l.useLayoutEffect)(()=>{d(r)},[r]);let E=(0,l.useCallback)(()=>{if(!a)return;let e=null!=o?o:10,t=s?Number(s.offsetTop)-e:e;t<0&&(t=0),C(a.scrollTop>t),(null==c?void 0:c.current)&&N(p({element:null==c?void 0:c.current,scrollTop:a.scrollTop,isMobile:y}))},[a,o,s,c,y]);(0,l.useEffect)(()=>{(null==a?void 0:a.scrollTop)===0&&C(!1)},[null==a?void 0:a.scrollTop]),g(E);let _=(0,l.useMemo)(()=>({title:u,setTitle:d,titleElement:c,scrollElement:a,setTitleElement:f,isScrolledTitle:v,isScrolling:S}),[u,v,c,a,S]);return(0,n.jsx)(i.pI.Provider,{value:_,children:t})});a(41197);let v=()=>{let[e,t]=(0,l.useState)(null),a=(0,l.useCallback)(a=>{e!==a&&t(a)},[e]);return[e,a]},N=(e,t)=>{let a=(0,m.uK)();a.get(m.Xt);let n=(0,l.useMemo)(()=>{if(void 0!==t){let a=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:a,"px)"),opacity:1}}return{}},[t,!1,e]),r=(0,l.useMemo)(()=>({"--average-color-background":e}),[e]);return[n,r]}},42769:function(e,t,a){"use strict";a.d(t,{h:function(){return l.h},n:function(){return n.n}});var n=a(22008),l=a(38828)},30651:function(e,t,a){"use strict";a.d(t,{rT:function(){return l.GenreAlbumsPage},eq:function(){return r.GenreArtistsPage},a0:function(){return n.GenrePage},Kx:function(){return C},Fe:function(){return i.GenrePlaylistsPage}});var n=a(72376),l=a(72683),r=a(58936),i=a(85694);a(75244);var s=a(96555),o=a(96431),u=a(96911),d=a(20210),c=a(81446),g=a(5674),m=a(21774),p=a(65704);let f=s.V5.model("GenreAlbumsPage",{loadingState:s.V5.enumeration(Object.values(g.Gu)),pager:s.V5.maybeNull(p.Vn),alreadyRequestedPages:s.V5.map(s.V5.number),pendingPages:s.V5.map(s.V5.number),requests:s.V5.maybeNull(s.V5.number),errorStatusCode:s.V5.maybeNull(s.V5.number),fullTitle:s.V5.maybeNull(s.V5.string),items:s.V5.array(s.V5.maybeNull(u.ug))}).views(e=>({get isNotFound(){var t;let a=e.loadingState===g.Gu.RESOLVE&&(null===(t=e.pager)||void 0===t?void 0:t.total)===0,n=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===g.Gu.REJECT&&n||a},get isSomethingWrong(){return e.loadingState===g.Gu.REJECT&&!this.isNotFound}})).actions(e=>{let t={getData:(0,s.ls)(function*(t){let{metatagId:a,page:n=0,pageSize:l=20}=t,{metatagsResource:r,modelActionsLogger:i}=(0,s.dU)(e);if(!(e.loadingState===g.Gu.PENDING&&e.pendingPages.has("".concat(n))||e.alreadyRequestedPages.has("".concat(n)))){"number"==typeof n&&e.alreadyRequestedPages.set("".concat(n),n);try{var u;e.loadingState=g.Gu.PENDING,e.pendingPages.set("".concat(n),n);let t=yield r.getMetatagAlbums({id:a,offset:n,limit:l});e.fullTitle=t.title.fullTitle;let i={page:n,perPage:l,total:t.pager.total};0===e.items.length&&(e.items=(0,s.pj)(Array.from({length:i.total},()=>null)));let o=t.albums.map(m.N);(0,g.AG)({items:e.items,mappedRawItems:o,page:n,pageSize:l}),e.pager=i,e.requests=(null!==(u=e.requests)&&void 0!==u?u:0)+1,e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.RESOLVE)}catch(t){i.error(t),t instanceof o.du&&(t.statusCode===o.CN.NOT_FOUND||t.statusCode===o.CN.BAD_REQUEST)&&(e.errorStatusCode=o.CN.NOT_FOUND),e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.REJECT)}finally{e.pendingPages.delete("".concat(n))}}}),reset(){e.loadingState=g.Gu.IDLE,e.pendingPages.clear(),e.pager=null,e.alreadyRequestedPages.clear(),e.errorStatusCode=null,e.items=(0,s.pj)([])}};return t}),v=s.V5.model("GenreArtistsPage",{loadingState:s.V5.enumeration(Object.values(g.Gu)),pager:s.V5.maybeNull(p.Vn),alreadyRequestedPages:s.V5.map(s.V5.number),pendingPages:s.V5.map(s.V5.number),requests:s.V5.maybeNull(s.V5.number),errorStatusCode:s.V5.maybeNull(s.V5.number),fullTitle:s.V5.maybeNull(s.V5.string),items:s.V5.array(s.V5.maybeNull(c.Go))}).views(e=>({get isNotFound(){var t;let a=e.loadingState===g.Gu.RESOLVE&&(null===(t=e.pager)||void 0===t?void 0:t.total)===0,n=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===g.Gu.REJECT&&n||a},get isSomethingWrong(){return e.loadingState===g.Gu.REJECT&&!this.isNotFound}})).actions(e=>{let t={getData:(0,s.ls)(function*(t){let{metatagId:a,page:n=0,pageSize:l=20}=t,{metatagsResource:r,modelActionsLogger:i}=(0,s.dU)(e);if(!(e.loadingState===g.Gu.PENDING&&e.pendingPages.has("".concat(n))||e.alreadyRequestedPages.has("".concat(n)))){"number"==typeof n&&e.alreadyRequestedPages.set("".concat(n),n);try{var u;e.loadingState=g.Gu.PENDING,e.pendingPages.set("".concat(n),n);let t=yield r.getMetatagArtists({id:a,offset:n,limit:l,period:"week"});e.fullTitle=t.title.fullTitle;let i={page:n,perPage:l,total:t.pager.total};0===e.items.length&&(e.items=(0,s.pj)(Array.from({length:i.total},()=>null)));let o=t.artists.map(e=>(0,c.d)(e.artist));(0,g.AG)({items:e.items,mappedRawItems:o,page:n,pageSize:l}),e.pager=i,e.requests=(null!==(u=e.requests)&&void 0!==u?u:0)+1,e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.RESOLVE)}catch(t){i.error(t),t instanceof o.du&&(t.statusCode===o.CN.NOT_FOUND||t.statusCode===o.CN.BAD_REQUEST)&&(e.errorStatusCode=o.CN.NOT_FOUND),e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.REJECT)}finally{e.pendingPages.delete("".concat(n))}}}),reset(){e.loadingState=g.Gu.IDLE,e.pendingPages.clear(),e.pager=null,e.alreadyRequestedPages.clear(),e.errorStatusCode=null,e.items=(0,s.pj)([])}};return t});var N=a(3515);let S=s.V5.model("GenrePlaylistsPage",{loadingState:s.V5.enumeration(Object.values(g.Gu)),pager:s.V5.maybeNull(p.Vn),alreadyRequestedPages:s.V5.map(s.V5.number),pendingPages:s.V5.map(s.V5.number),requests:s.V5.maybeNull(s.V5.number),errorStatusCode:s.V5.maybeNull(s.V5.number),fullTitle:s.V5.maybeNull(s.V5.string),items:s.V5.array(s.V5.maybeNull(N.Cd))}).views(e=>({get isNotFound(){var t;let a=e.loadingState===g.Gu.RESOLVE&&(null===(t=e.pager)||void 0===t?void 0:t.total)===0,n=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===g.Gu.REJECT&&n||a},get isSomethingWrong(){return!this.isNotFound&&e.loadingState===g.Gu.REJECT&&0===e.alreadyRequestedPages.size}})).actions(e=>{let t={getData:(0,s.ls)(function*(t){let{metatagId:a,page:n=0,pageSize:l=20}=t,{metatagsResource:r,modelActionsLogger:i}=(0,s.dU)(e);if(!(e.loadingState===g.Gu.PENDING&&e.pendingPages.has("".concat(n))||e.alreadyRequestedPages.has("".concat(n)))){"number"==typeof n&&e.alreadyRequestedPages.set("".concat(n),n);try{var o;e.loadingState=g.Gu.PENDING,e.pendingPages.set("".concat(n),n);let t=yield r.getMetatagPlaylists({id:a,offset:n,limit:l,withLikesCount:!0});e.fullTitle=t.title.fullTitle;let i={page:n,perPage:l,total:t.pager.total};0===e.items.length&&(e.items=(0,s.pj)(Array.from({length:i.total},()=>null)));let u=t.playlists.map(N.PV);(0,g.AG)({items:e.items,mappedRawItems:u,page:n,pageSize:l}),e.pager=i,e.requests=(null!==(o=e.requests)&&void 0!==o?o:0)+1,e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.RESOLVE)}catch(t){i.error(t),e.alreadyRequestedPages.delete("".concat(n)),e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.REJECT)}finally{e.pendingPages.delete("".concat(n))}}}),reset(){e.loadingState=g.Gu.IDLE,e.pendingPages.clear(),e.pager=null,e.alreadyRequestedPages.clear(),e.errorStatusCode=null,e.items=(0,s.pj)([])}};return t}),C=s.V5.model("GenrePage",{id:s.V5.maybeNull(s.V5.string),errorStatusCode:s.V5.maybeNull(s.V5.number),loadingState:s.V5.enumeration(Object.values(g.Gu)),fullTitle:s.V5.maybeNull(s.V5.string),artists:s.V5.array(c.Go),albums:s.V5.array(u.ug),playlists:s.V5.array(d.d2),albumsSubpage:f,artistsSubpage:v,playlistsSubpage:S}).views(e=>({get isLoading(){return e.loadingState===g.Gu.IDLE||e.loadingState===g.Gu.PENDING},get hasAlbums(){return e.loadingState===g.Gu.IDLE||e.loadingState===g.Gu.PENDING||e.albums.length>0},get hasArtists(){return e.loadingState===g.Gu.IDLE||e.loadingState===g.Gu.PENDING||e.artists.length>0},get hasPlaylists(){return e.loadingState===g.Gu.IDLE||e.loadingState===g.Gu.PENDING||e.playlists.length>0},get isNotFound(){let t=e.loadingState===g.Gu.RESOLVE&&!this.hasAlbums&&!this.hasArtists&&!this.hasPlaylists,a=e.errorStatusCode===o.CN.NOT_FOUND||e.errorStatusCode===o.CN.BAD_REQUEST;return e.loadingState===g.Gu.REJECT&&a||t}})).actions(e=>{let t={getData:(0,s.ls)(function*(t){let{id:a}=t,{metatagsResource:n,modelActionsLogger:l}=(0,s.dU)(e);if(e.loadingState!==g.Gu.PENDING)try{e.loadingState=g.Gu.PENDING;let t=yield n.getMetatagById({id:a});e.id=t.id,e.fullTitle=t.title.fullTitle,e.artists=(0,s.pj)(t.artists.map(c.d)),e.albums=(0,s.pj)(t.albums.map(u.ym)),e.playlists=(0,s.pj)(t.playlists.map(d.Q9)),e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.RESOLVE)}catch(t){l.error(t),t instanceof o.du&&(t.statusCode===o.CN.NOT_FOUND||t.statusCode===o.CN.BAD_REQUEST)&&(e.errorStatusCode=o.CN.NOT_FOUND),e.loadingState!==g.Gu.IDLE&&(e.loadingState=g.Gu.REJECT)}}),reset(){e.loadingState=g.Gu.IDLE,e.fullTitle=null,e.artists=(0,s.pj)([]),e.albums=(0,s.pj)([]),e.playlists=(0,s.pj)([])}};return t})},2365:function(e,t,a){"use strict";a.d(t,{T:function(){return n.NotFound}});var n=a(54529)},54529:function(e,t,a){"use strict";a.r(t),a.d(t,{NotFound:function(){return p}});var n=a(8759),l=a(35338),r=a(33423),i=a(2814),s=a(15527),o=a(14581),u=a(1918),d=a(42769),c=a(5674),g=a(94170),m=a.n(g);let p=(0,r.Pi)(e=>{let{className:t}=e,{contentRef:a}=(0,c.$Y)(),r=(0,c.s0)("/");return(0,c.ZP)(!0),(0,n.jsxs)("div",{className:(0,l.W)(m().root,{[m().root_desktop]:!a},t),children:[(0,n.jsx)(d.n,{withBackwardFallback:"/",className:m().navigation,withForwardControl:!1}),(0,n.jsxs)("div",{className:m().content,children:[(0,n.jsx)(o.J,{className:m().icon,variant:"musicLogo",size:"xxl"}),(0,n.jsx)(u.Heading,{className:(0,l.W)(m().title,m().important),variant:"h3",size:"xs",children:(0,n.jsx)(i.Z,{id:"page-error.page-does-not-exist"})}),(0,n.jsx)(u.Caption,{className:(0,l.W)(m().text,m().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(i.Z,{id:"page-error.page-does-not-exist-description"})}),(0,n.jsx)(s.z,{onClick:r,className:m().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(i.Z,{id:"navigation.page-main"})})})]})]})})},38755:function(e){e.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",control:"ArtistCard_control___qv5j"}},94170:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}}},function(e){e.O(0,[2498,7873,5455,8628,2008,6217,2015,9034,6911,210,1716,2428,4025,4164,1744],function(){return e(e.s=2720)}),_N_E=e.O()}]);