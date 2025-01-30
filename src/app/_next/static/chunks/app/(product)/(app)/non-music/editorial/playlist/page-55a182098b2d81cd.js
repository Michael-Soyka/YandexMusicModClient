(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2517],{76467:function(t,e,a){Promise.resolve().then(a.bind(a,31894))},26928:function(t,e,a){"use strict";a.d(e,{Ji:function(){return m}});var i,n,o,r,l=a(72669),s=a(91207),u=a(37184);(i=o||(o={})).formatDate="FormattedDate",i.formatTime="FormattedTime",i.formatNumber="FormattedNumber",i.formatList="FormattedList",i.formatDisplayName="FormattedDisplayName",(n=r||(r={})).formatDate="FormattedDateParts",n.formatTime="FormattedTimeParts",n.formatNumber="FormattedNumberParts",n.formatList="FormattedListParts";var d=function(t){var e=(0,u.Z)(),a=t.value,i=t.children,n=(0,l.__rest)(t,["value","children"]);return i(e.formatNumberToParts(a,n))};function c(t){var e=function(e){var a=(0,u.Z)(),i=e.value,n=e.children,o=(0,l.__rest)(e,["value","children"]),r="string"==typeof i?new Date(i||0):i;return n("formatDate"===t?a.formatDateToParts(r,o):a.formatTimeToParts(r,o))};return e.displayName=r[t],e}function g(t){var e=function(e){var a=(0,u.Z)(),i=e.value,n=e.children,o=(0,l.__rest)(e,["value","children"]),r=a[t](i,o);if("function"==typeof n)return n(r);var d=a.textComponent||s.Fragment;return s.createElement(d,null,r)};return e.displayName=o[t],e}d.displayName="FormattedNumberParts",d.displayName="FormattedNumberParts";var m=g("formatDate");g("formatTime"),g("formatNumber"),g("formatList"),g("formatDisplayName"),c("formatDate"),c("formatTime")},31894:function(t,e,a){"use strict";a.r(e);var i=a(65301),n=a(99678),o=a(13820);e.default=()=>{let t=(0,n.useSearchParams)().get("categoryId");return t||(0,n.notFound)(),(0,i.jsx)(o.C2,{categoryId:t})}},13820:function(t,e,a){"use strict";a.d(e,{T4:function(){return A.NonMusicAlbumsPage},z4:function(){return i.z},ov:function(){return I.NonMusicCategoryPage},C2:function(){return O.NonMusicCategoryPlaylistsPage},NG:function(){return P}});var i=a(5538),n=a(2685),o=a(49430),r=a(81706),l=a(50684),s=a(58997),u=a(91694);let d=n.V5.model("NonMusicCategoryPlaylistsDataItem",{uid:n.V5.number,kind:n.V5.number,data:n.V5.maybeNull(r.d2)}),c=n.V5.model("NonMusicCategoryPlaylistsPage",{errorStatusCode:n.V5.maybe(n.V5.number),loadingState:n.V5.enumeration(Object.values(s.Gui)),title:n.V5.maybeNull(n.V5.string),pager:n.V5.maybeNull(u.Vn),playlists:n.V5.maybeNull(n.V5.array(d)),alreadyRequestedPages:n.V5.map(n.V5.number),requests:n.V5.maybeNull(n.V5.number)}).views(t=>({get isLoading(){return t.loadingState===s.Gui.IDLE||t.loadingState===s.Gui.PENDING},get isNotFound(){let e=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===s.Gui.REJECT&&e},get isSomethingWrong(){return t.loadingState===s.Gui.REJECT&&!this.isNotFound}})).actions(t=>{let e={getPlaylists:(0,n.ls)(function*(e){var a,i,r;let{page:u=0,pageSize:d=20}=e,{playlistsResource:c,modelActionsLogger:g}=(0,n.dU)(t);if(!(!(null===(a=t.playlists)||void 0===a?void 0:a.length)||t.alreadyRequestedPages.has("".concat(u)))){t.alreadyRequestedPages.set("".concat(u),u);try{let e=u*d,a=t.playlists.slice(e,e+d),o=yield c.getPlaylists({playlistIds:a.map(t=>"".concat(t.uid,":").concat(t.kind)),resumeStream:!1});t.requests=(null!==(r=t.requests)&&void 0!==r?r:0)+1;let s={page:u,perPage:d,total:null===(i=t.playlists)||void 0===i?void 0:i.length},g=o.playlists.map(l.PV),m=u*d,N=0;for(let e=m;e<m+d;e++)g[N]&&t.playlists[e]&&(t.playlists[e].data=(0,n.pj)(g[N])),N++;t.pager=s}catch(e){g.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}}}),getData:(0,n.ls)(function*(a){let{categoryId:i,page:r=0,pageSize:l=20}=a,{nonMusicResource:u,modelActionsLogger:d}=(0,n.dU)(t);if(t.loadingState!==s.Gui.PENDING)try{t.loadingState=s.Gui.PENDING;let a=yield u.getPlaylists({categoryId:i});t.title=a.title,a.entities&&a.entities.length>0&&(t.playlists=(0,n.pj)(a.entities.map(t=>({uid:t.uid,kind:t.kind})))),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE),yield e.getPlaylists({page:r,pageSize:l})}catch(e){d.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}}),reset(){t.loadingState=s.Gui.IDLE,t.alreadyRequestedPages.clear(),t.title=null,t.playlists=(0,n.pj)([]),t.requests=null,t.pager=null}};return e});var g=a(74763),m=a(54709);let N=n.V5.model("NonMusicAlbumsPageItem",{id:n.V5.number,data:n.V5.maybeNull(m.ug)}),p=n.V5.model("NonMusicAlbumsPage",{errorStatusCode:n.V5.maybe(n.V5.number),loadingState:n.V5.enumeration(Object.values(s.Gui)),title:n.V5.maybeNull(n.V5.string),albums:n.V5.maybeNull(n.V5.array(N)),requestsCount:n.V5.maybe(n.V5.number)}).views(t=>({get isLoading(){return t.loadingState===s.Gui.IDLE||t.loadingState===s.Gui.PENDING},get isNotFound(){let e=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===s.Gui.REJECT&&e},get isSomethingWrong(){return t.loadingState===s.Gui.REJECT&&!this.isNotFound}})).actions(t=>({getEditorialAlbums:(0,n.ls)(function*(e){let{id:a}=e,{nonMusicResource:i,modelActionsLogger:r}=(0,n.dU)(t);if(t.loadingState!==s.Gui.PENDING)try{var l;t.loadingState=s.Gui.PENDING;let e=yield i.getEditorialAlbums({id:a});t.title=e.title,(null===(l=e.entities)||void 0===l?void 0:l.length)&&(t.albums=(0,n.pj)(e.entities.map(t=>({id:t})))),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE)}catch(e){r.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}}),getCategoryAlbums:(0,n.ls)(function*(e){let{id:a}=e,{nonMusicResource:i,modelActionsLogger:r}=(0,n.dU)(t);if(t.loadingState!==s.Gui.PENDING)try{var l;t.loadingState=s.Gui.PENDING;let e=yield i.getCategoryAlbums({id:a});t.title=e.title,(null===(l=e.albums)||void 0===l?void 0:l.length)&&(t.albums=(0,n.pj)(e.albums.map(t=>({id:t})))),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE)}catch(e){r.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}}),getAlbumsByRange:(0,n.ls)(function*(e,a){var i,o,r;let{albumResource:l,modelActionsLogger:s}=(0,n.dU)(t);if(!(null===(i=t.albums)||void 0===i?void 0:i.length))return null;e=Math.max(0,e),a=Math.min(a,t.albums.length);let u=[];for(let i=e;i<=a;i++)(null===(o=t.albums[i])||void 0===o?void 0:o.id)&&!(null===(r=t.albums[i])||void 0===r?void 0:r.data)&&u.push(t.albums[i].id);if(!u.length)return null;try{let e=yield l.getAlbums({albumIds:u});null==e||e.forEach(e=>{var a;null===(a=t.albums)||void 0===a||a.forEach((a,i)=>{var n;a.id===e.id&&(null===(n=t.albums)||void 0===n?void 0:n[i])&&(t.albums[i].data=(0,m.ym)(e))})}),t.requestsCount?t.requestsCount=t.requestsCount+1:t.requestsCount=1}catch(t){s.error(t)}return null}),reset(){t.loadingState=s.Gui.IDLE,t.title=null,t.albums=null,t.requestsCount=0}}));var _=a(37908),y=a(51921),S=a(49724);let C=t=>{let e=t.entities.map(t=>({...(0,m.ym)(t.data.album),chart:t.data.chartPosition&&(0,S.W5)(t.data.chartPosition),likesCount:t.data.album.likesCount}));return(0,n.pj)({id:t.id,type:_.c.ALBUM_CHART,landingBlockType:y.g.CHART_ALBUMS,title:t.title,description:t.description,viewAllActionLink:t.viewAllUrl,items:e})},E=t=>{let e=t.entities.map(t=>({...(0,m.ym)(t.data),likesCount:t.data.likesCount}));return(0,n.pj)({id:t.id,type:_.c.CATEGORY,landingBlockType:y.g.NON_MUSIC_EDITORIAL_COMPILATION,title:t.title,description:t.description,viewAllActionLink:t.viewAllUrl,items:e})};var v=a(27980);let b=t=>{let e=t.entities.map(t=>{switch(t.type){case _.f.PLAYLIST:return{type:v.Q.PLAYLIST_ITEM,data:(0,r.VB)({...t.data,artists:[]})};case _.f.ALBUM:return{type:v.Q.ALBUM_ITEM,data:(0,m.ym)(t.data)}}});return(0,n.pj)({id:t.id,type:_.c.EDITORIAL_PLAYLISTS,landingBlockType:y.g.RECENTLY_PLAYED,title:t.title,description:t.description,viewAllActionLink:t.viewAllUrl,items:e})},h=n.V5.model("NonMusicBaseBlock").props({type:n.V5.enumeration(Object.values(_.c.CATEGORY)),landingBlockType:n.V5.enumeration(Object.values(y.g)),id:n.V5.maybe(n.V5.string),title:n.V5.maybe(n.V5.string),description:n.V5.maybe(n.V5.string),viewAllActionLink:n.V5.maybe(n.V5.string)}),f=h.named("NonMusicCategoryBlock").props({type:n.V5.literal(_.c.CATEGORY),landingBlockType:n.V5.literal(y.g.NON_MUSIC_EDITORIAL_COMPILATION),items:n.V5.array(m.ug)}),T=h.named("NonMusicChartAlbumBlock").props({type:n.V5.literal(_.c.ALBUM_CHART),landingBlockType:n.V5.literal(y.g.CHART_ALBUMS),items:n.V5.array(m.ug)}),D=n.V5.union(g.SJ,g.jn),V=h.named("NonMusicEditorialPlaylistsBlock").props({type:n.V5.literal(_.c.EDITORIAL_PLAYLISTS),landingBlockType:n.V5.literal(y.g.RECENTLY_PLAYED),items:n.V5.array(D)}),G=n.V5.union(T,V,f),L=n.V5.model("NonMusicCategoryPage",{errorStatusCode:n.V5.maybeNull(n.V5.number),title:n.V5.maybeNull(n.V5.string),loadingState:n.V5.enumeration(Object.values(s.Gui)),blocks:n.V5.array(G)}).views(t=>({get isLoading(){return t.loadingState===s.Gui.IDLE||t.loadingState===s.Gui.PENDING},get isLoaded(){return t.loadingState===s.Gui.RESOLVE},get isRejected(){return t.loadingState===s.Gui.REJECT},get isNotFound(){let e=t.loadingState===s.Gui.RESOLVE&&0===t.blocks.length,a=t.errorStatusCode===o.CN.NOT_FOUND||t.errorStatusCode===o.CN.BAD_REQUEST;return t.loadingState===s.Gui.REJECT&&a||e},get isSomethingWrong(){return t.loadingState===s.Gui.REJECT&&!this.isNotFound}})).actions(t=>({getData:(0,n.ls)(function*(e){let{categoryId:a}=e,{nonMusicResource:i,modelActionsLogger:r}=(0,n.dU)(t);if(t.loadingState!==s.Gui.PENDING)try{t.loadingState=s.Gui.PENDING;let e=yield i.getCategory({categoryId:a});t.title=e.title;let o=[];e.blocks&&(e.blocks.forEach(t=>{switch(t.type){case _.c.ALBUM_CHART:o.push(C(t));return;case _.c.EDITORIAL_PLAYLISTS:o.push(b(t));return;case _.c.CATEGORY:o.push(E(t));return}}),t.blocks=(0,n.pj)(o)),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.RESOLVE)}catch(e){r.error(e),e instanceof o.du&&(e.statusCode===o.CN.NOT_FOUND||e.statusCode===o.CN.BAD_REQUEST)&&(t.errorStatusCode=o.CN.NOT_FOUND),t.loadingState!==s.Gui.IDLE&&(t.loadingState=s.Gui.REJECT)}}),reset(){t.errorStatusCode=null,t.title=null,t.loadingState=s.Gui.IDLE,t.blocks=(0,n.pj)([])}})),P=n.V5.model("NonMusicPage",{landing:g.d5,albums:p,categorySubpage:L,categoryPlaylistsSubpage:c});var A=a(74720);a(21754);var I=a(84360),O=a(85392);a(24639),a(70056)},32544:function(t,e,a){"use strict";a.d(e,{T:function(){return i.NotFound}});var i=a(40334)},40334:function(t,e,a){"use strict";a.d(e,{NotFound:function(){return N}});var i=a(65301),n=a(9695),o=a(96233),r=a(44729),l=a(78372),s=a(82036),u=a(81437),d=a(58997),c=a(29778),g=a(36625),m=a.n(g);let N=(0,o.Pi)(t=>{let{className:e}=t,{contentRef:a}=(0,d.$Y6)(),o=(0,d.s0h)("/");return(0,d.ZP4)(!0),(0,i.jsxs)("div",{className:(0,n.W)(m().root,{[m().root_desktop]:!a},e),children:[(0,i.jsx)(c.nP,{withBackwardFallback:"/",className:m().navigation,withForwardControl:!1}),(0,i.jsxs)("div",{className:m().content,children:[(0,i.jsx)(s.Icon,{className:m().icon,variant:"musicLogo",size:"xxl"}),(0,i.jsx)(u.Heading,{className:(0,n.W)(m().title,m().important),variant:"h3",size:"xs",children:(0,i.jsx)(r.Z,{id:"page-error.page-does-not-exist"})}),(0,i.jsx)(u.Caption,{className:(0,n.W)(m().text,m().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,i.jsx)(r.Z,{id:"page-error.page-does-not-exist-description"})}),(0,i.jsx)(l.z,{onClick:o,className:m().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,i.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,i.jsx)(r.Z,{id:"navigation.page-main"})})})]})]})})},36643:function(t,e,a){"use strict";a.d(e,{D:function(){return i.SomethingWentWrong}});var i=a(87407)},87407:function(t,e,a){"use strict";a.d(e,{SomethingWentWrong:function(){return p}});var i=a(65301),n=a(9695),o=a(96233),r=a(91207),l=a(44729),s=a(78372),u=a(82036),d=a(81437),c=a(58997),g=a(29778),m=a(60637),N=a.n(m);let p=(0,o.Pi)(t=>{let{className:e,withBackwardControl:a=!0}=t,o=(0,r.useCallback)(()=>{window.location.href="/"},[]),{contentRef:m}=(0,c.$Y6)();return(0,i.jsxs)("div",{className:(0,n.W)(N().root,e),children:[a&&(0,i.jsx)(g.nP,{withBackwardFallback:"/",className:(0,n.W)(N().navigation,{[N().navigation_desktop]:!m}),withForwardControl:!1}),(0,i.jsxs)("div",{className:(0,n.W)(N().content,{[N().content_shrink]:!a}),children:[(0,i.jsx)(u.Icon,{className:N().icon,variant:"attention",size:"xxl"}),(0,i.jsx)(d.Heading,{className:(0,n.W)(N().title,N().important),variant:"h3",size:"xs",children:(0,i.jsx)(l.Z,{id:"error-messages.something-went-wrong"})}),(0,i.jsxs)(d.Caption,{className:(0,n.W)(N().text,N().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,i.jsx)(l.Z,{id:"page-error.try-to-restart-app"})]}),(0,i.jsx)(s.z,{onClick:o,className:N().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,i.jsxs)(d.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,i.jsx)(l.Z,{id:"page-error.restart-app-button"})]})})]})]})})},36625:function(t){t.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},60637:function(t){t.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}},function(t){t.O(0,[3537,6072,1884,9158,9582,9123,5734,7425,85,5453,7873,5493,7311,2845,9778,1694,721,4709,3154,4474,6642,437,4763,3619,3504,2291,1744],function(){return t(t.s=76467)}),_N_E=t.O()}]);