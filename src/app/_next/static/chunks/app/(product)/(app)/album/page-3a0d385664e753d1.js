(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3750],{30412:function(e,t,i){Promise.resolve().then(i.bind(i,55567))},26928:function(e,t,i){"use strict";i.d(t,{Ji:function(){return v}});var n,a,r,o,l=i(72669),s=i(91207),u=i(37184);(n=r||(r={})).formatDate="FormattedDate",n.formatTime="FormattedTime",n.formatNumber="FormattedNumber",n.formatList="FormattedList",n.formatDisplayName="FormattedDisplayName",(a=o||(o={})).formatDate="FormattedDateParts",a.formatTime="FormattedTimeParts",a.formatNumber="FormattedNumberParts",a.formatList="FormattedListParts";var d=function(e){var t=(0,u.Z)(),i=e.value,n=e.children,a=(0,l.__rest)(e,["value","children"]);return n(t.formatNumberToParts(i,a))};function m(e){var t=function(t){var i=(0,u.Z)(),n=t.value,a=t.children,r=(0,l.__rest)(t,["value","children"]),o="string"==typeof n?new Date(n||0):n;return a("formatDate"===e?i.formatDateToParts(o,r):i.formatTimeToParts(o,r))};return t.displayName=o[e],t}function c(e){var t=function(t){var i=(0,u.Z)(),n=t.value,a=t.children,r=(0,l.__rest)(t,["value","children"]),o=i[e](n,r);if("function"==typeof a)return a(o);var d=i.textComponent||s.Fragment;return s.createElement(d,null,o)};return t.displayName=r[e],t}d.displayName="FormattedNumberParts",d.displayName="FormattedNumberParts";var v=c("formatDate");c("formatTime"),c("formatNumber"),c("formatList"),c("formatDisplayName"),m("formatDate"),m("formatTime")},63261:function(e,t,i){"use strict";i.d(t,{e:function(){return d}});var n,a=i(80766),r=i(91207),o={6699:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDebouncedToggle=void 0;let n=i(352),a=i(810);t.useDebouncedToggle=e=>{let{delay:t,initialState:i,throttleTimeout:r}=e,o=(0,a.useRef)(null),[l,s]=(0,a.useState)(!!i),u=(0,a.useMemo)(()=>(0,n.throttle)(()=>{s(!i),o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{s(!!i)},t)},r),[t,i,r]),d=(0,a.useCallback)(()=>{s(!!i),o.current&&window.clearTimeout(o.current)},[i]);return(0,a.useEffect)(()=>()=>{o.current&&window.clearTimeout(o.current)},[]),{state:l,handleDebouncedToggle:u,reset:d}}},2767:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useForceUpdateRef=void 0;let n=i(810);t.useForceUpdateRef=()=>{let[e,t]=(0,n.useState)(null);return[e,(0,n.useCallback)(e=>{t(t=>t!==e?e:t)},[])]}},2067:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useScroll=void 0;let n=i(810),a=i(361),r=i(6699);t.useScroll=e=>{let{onScroll:t,listenIsScrolling:i,elementRef:o}=e,{state:l,handleDebouncedToggle:s}=(0,r.useDebouncedToggle)({delay:1e3,throttleTimeout:100}),u=(0,n.useCallback)(()=>{i&&s(),null==t||t()},[i,s,t]);return(0,n.useEffect)(()=>{let e=(0,a.getElementFromRefOrElement)(o);if(null===e)return;let t=null!=e?e:window,i={capture:!0,passive:!0};return t.addEventListener("scroll",u,i),()=>t.removeEventListener("scroll",u,i)},[o,u]),l}},361:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getElementFromRefOrElement=void 0,t.getElementFromRefOrElement=e=>void 0===e?void 0:null===e||e instanceof HTMLElement?e:null===e.current||e.current instanceof HTMLElement?e.current:void 0},352:e=>{e.exports=a},810:e=>{e.exports=n||(n=i.t(r,2))}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var i=l[e]={exports:{}};return o[e](i,i.exports,s),i.exports}var u={};(()=>{Object.defineProperty(u,"__esModule",{value:!0}),u.useElementOffsetY=void 0;let e=s(810),t=s(2067),i=s(2767);u.useElementOffsetY=n=>{let[a,r]=(0,i.useForceUpdateRef)(),[o,l]=(0,e.useState)(),s=(0,e.useCallback)(()=>{let e=null==a?void 0:a.getBoundingClientRect();e&&l(e.y)},[a]);return(0,e.useLayoutEffect)(s),(0,t.useScroll)({onScroll:s,elementRef:n}),{forceUpdateRefCallback:r,offsetY:o}}})(),u.__esModule;var d=u.useElementOffsetY},55567:function(e,t,i){"use strict";i.r(t);var n=i(65301),a=i(99678),r=i(91207),o=i(25515);t.default=()=>{let e=(0,a.useSearchParams)().get("albumId");return e||(0,a.notFound)(),(0,n.jsx)(r.Suspense,{children:(0,n.jsx)(o.Xb,{albumId:e})})}},29742:function(e,t,i){"use strict";i.d(t,{J:function(){return l.DonationButton},Ew:function(){return o},fv:function(){return r}});var n=i(2685),a=i(9096);let r=e=>{let{url:t,artist:i,goal:r}=e;return(0,n.pj)({url:t,goal:r,artist:(0,a.tR)({artist:i})})},o=n.V5.model("Donation",{url:n.V5.string,artist:a.Go,goal:n.V5.maybe(n.V5.string)});var l=i(89429)},89429:function(e,t,i){"use strict";i.d(t,{DonationButton:function(){return A}});var n=i(65301),a=i(9695),r=i(96233),o=i(91207),l=i(37184),s=i(44729),u=i(78372),d=i(92154),m=i(58997),c=i(93422),v=i(43998),b=i(81437),g=i(96158),f=i.n(g);let p=(0,r.Pi)(e=>{let{donation:t}=e,i=(0,m.s0h)(t.url);return(0,n.jsxs)(d.sN,{className:f().root,isBlock:!0,onClick:i,children:[(0,n.jsx)(v.Paper,{radius:"round",className:f().cover,children:(0,n.jsx)(c.Image,{withAvatarReplace:!0,src:t.artist.coverUri,size:100,fit:"contain",className:f().image})}),(0,n.jsx)(b.Caption,{variant:"span",size:"m",weight:"medium",lineClamp:1,children:t.artist.name})]},t.url)});var h=i(51127),E=i.n(h);let A=(0,r.Pi)(e=>{let{donations:t,shouldShowModal:i,className:r}=e,{settings:{isMobile:c}}=(0,m.oR4)(),[v,b]=(0,o.useState)(!1),{formatMessage:g}=(0,l.Z)(),[f]=t,h=(0,m.s0h)(null==f?void 0:f.url),A=(0,o.useCallback)(()=>{i||h()},[h,i]),y=(0,o.useMemo)(()=>(0,n.jsx)(u.z,{size:"s",variant:"default",radius:"xxxl",color:"accent",withRipple:i,className:(0,a.W)(E().root,r),onClick:A,children:(0,n.jsx)(s.Z,{id:"donation.button-text"})}),[r,A,i]);return i?(0,n.jsx)(d.v2,{size:"s",radius:"xxxl",color:"accent",label:g({id:"donation.button-text"}),className:(0,a.W)(E().root,r),onClick:A,onOpenChange:b,open:v,isMobile:c,placement:"bottom",offsetOptions:8,listClassName:E().popover,children:t.map(e=>(0,n.jsx)(p,{donation:e},e.url))}):y})},73054:function(e,t,i){"use strict";i.d(t,{s$:function(){return f},$Z:function(){return N.RepeatButton},P4:function(){return x.ShuffleButton},WP:function(){return S.SonataControls},ps:function(){return y},NI:function(){return G.SonataVideoControls},jN:function(){return v},RN:function(){return a},B5:function(){return m}});var n=i(86348);let a=(e,t)=>({type:n.RX.Unloaded,meta:{id:e,albumId:t}});var r=i(2685),o=i(10420),l=i(48896),s=i(9096),u=i(26382),d=i(58997);let m=e=>{var t,i,a;switch(e.data.type){case o.A.Generative:{let i=e.data.meta,n=(0,d.Usz)(null==i?void 0:i.derivedColors);return(0,r.pj)({id:String(i.id),coverUri:i.imageUrl,title:null!==(t=i.title)&&void 0!==t?t:"",isAvailable:!0,isRemoved:!1,averageColor:n})}case n.RX.Unloaded:return null;default:{let t=e.data.meta,n=null===(i=t.artists)||void 0===i?void 0:i.map(s.d),o=null===(a=t.albums)||void 0===a?void 0:a.map(l.N);return(0,r.pj)({...(0,u.Ni)(t),artists:n,albums:o})}}},c=r.V5.model("UnloadedEntityMeta",{id:r.V5.union(r.V5.number,r.V5.string),albumId:r.V5.maybe(r.V5.union(r.V5.number,r.V5.string))}),v=r.V5.model("UnloadedEntityData",{meta:c,type:r.V5.literal(n.RX.Unloaded)});var b=i(35068),g=i(49724);let f=u.yp.props({artists:r.V5.array(s.Go),albums:r.V5.array(l.KX),chart:r.V5.maybe(g.BH)}).views(e=>({get idWithContext(){return e.albumId?"".concat(e.id,":").concat(e.albumId):e.id},get artistsNames(){var t;return null===(t=e.artists)||void 0===t?void 0:t.map(e=>e.name).join(", ")},get mainArtist(){var i,n;return null!==(n=null===(i=e.artists)||void 0===i?void 0:i[0])&&void 0!==n?n:null},get mainAlbum(){var a,r;return null!==(r=null===(a=e.albums)||void 0===a?void 0:a[0])&&void 0!==r?r:null},get index(){var o,l,s;return null!==(s=null===(l=e.albums[0])||void 0===l?void 0:null===(o=l.trackPosition)||void 0===o?void 0:o.index)&&void 0!==s?s:null},get isPodcast(){var u;return e.isTrackPodcast||(null===(u=this.mainAlbum)||void 0===u?void 0:u.isPodcast)},get isAudiobook(){return e.type===b.V.AUDIOBOOK},get isFairyTale(){return e.type===b.V.FAIRY_TALE},get isNonMusic(){return this.isPodcast||this.isAudiobook||this.isFairyTale},get isAvailableOnlyForPlus(){var d;return!!(null===(d=this.mainAlbum)||void 0===d?void 0:d.isAvailableOnlyForPlus)},get artistName(){var m,c,v,g;if(null===(c=e.artists)||void 0===c?void 0:null===(m=c[0])||void 0===m?void 0:m.various)return;return null===(g=e.artists)||void 0===g?void 0:null===(v=g[0])||void 0===v?void 0:v.name}})).actions(e=>({changeTrackInfo:(0,r.ls)(function*(t,i){let{ugcResource:n,modelActionsLogger:a}=(0,r.dU)(e);if(e.artists.map(e=>e.name).join(", ")===i&&t===e.title)return d.SLo.OK;try{var o;yield n.changeTrack({trackId:e.id,title:t,artist:i}),e.title=t;let a=(null===(o=e.artists[0])||void 0===o?void 0:o.id)||"0";if(e.artists=(0,r.pj)([]),i){let t=s.Go.create({id:a,name:i,isAvailable:!0});e.artists=(0,r.pj)([t])}return d.SLo.OK}catch(e){return a.error(e),d.SLo.ERROR}})}));var p=i(79491),h=i(19489),E=i(42982),A=i(35941);let y=r.V5.model("SonataState",{contextType:r.V5.maybeNull(r.V5.enumeration(Object.values(h.A))),contextId:r.V5.maybeNull(r.V5.string),entityMeta:r.V5.maybeNull(f),status:r.V5.enumeration(Object.values(n.Xz)),canMoveForward:r.V5.boolean,canMoveBackward:r.V5.boolean,canSpeed:r.V5.boolean,repeatMode:r.V5.enumeration(Object.values(A.zq)),canChangeRepeatMode:r.V5.boolean,volume:r.V5.maybe(r.V5.number),speed:r.V5.maybe(r.V5.number),canShuffle:r.V5.boolean,shuffle:r.V5.boolean,currentlyPlayingTrackIndex:r.V5.maybe(r.V5.number),quality:r.V5.enumeration(Object.values(E.n)),playlistFilter:r.V5.maybe(r.V5.string)}).volatile(()=>({unloadedEntitiesData:void 0})).views(e=>({get unloadedEntitiesDataFromModels(){return e.unloadedEntitiesData},get isVibeContext(){return e.contextType===h.A.Vibe},get isGenerativeContext(){return e.contextType===h.A.Generative},get isPaused(){return e.status===n.Xz.PAUSED},get isContextRepeatMode(){return e.repeatMode===A.zq.CONTEXT}})).actions(e=>({setContextId:t=>{e.contextId=String(t)},setContextType:t=>{e.contextType=t},setEntityMeta:t=>{t&&t.data.meta&&(e.entityMeta=m(t))},setUnloadedEntitiesData:t=>{t&&(e.unloadedEntitiesData=(0,p.ZN)(t))},resetUnloadedEntitiesData:()=>{e.unloadedEntitiesData=void 0},setStatus:t=>{e.status=t},setCanMoveForward:t=>{e.canMoveForward=t},setCanMoveBackward:t=>{e.canMoveBackward=t},setVolume:t=>{e.volume=t},setCanSpeed:t=>{e.canSpeed=t},setSpeed:t=>{e.speed=t},setRepeatMode:t=>{e.repeatMode=t},setCanChangeRepeatMode:t=>{e.canChangeRepeatMode=t},setCanShuffle:t=>{e.canShuffle=t},setShuffle:t=>{e.shuffle=t},setCurrentlyPlayingTrackIndex:t=>{e.currentlyPlayingTrackIndex=t},setQuality:t=>{e.quality=t},setPlaylistFilter:t=>{e.playlistFilter=t}}));i(1578),i(92624);var N=i(23116),x=i(93477),S=i(70676),G=i(88722)},25515:function(e,t,i){"use strict";i.d(t,{Xb:function(){return P.AlbumPage},Lf:function(){return O}});var n,a,r,o=i(2685),l=i(49430),s=i(52416),u=i(26157),d=i(19522),m=i(35068);(a||(a={})).RECENT_ALBUMS="recent-albums",(n=r||(r={}))[n.DAY=1]="DAY",n[n.WEEK=7]="WEEK",n[n.MONTH=30]="MONTH";var c=i(14178),v=i(4071),b=i(54709),g=i(29742),f=i(73054),p=i(48896),h=i(58997),E=i(91694);let A=(e,t)=>e.map(e=>"".concat(e,":").concat(t));var y=i(3154);let N=e=>({type:p.lf.TEXT,data:e||null}),x=e=>{var t;return(0,o.pj)({type:(null===(t=e.data)||void 0===t?void 0:t.type)||m.V.TRACK,id:e.id,data:e.data||null,loadingState:e.loadingState,position:e.position,isBest:e.isBest,positionInContext:e.positionInContext,hasEverFinished:e.hasEverFinished})},S=e=>"".concat(e,"-text"),G=e=>String(e),_=(e,t,i,n)=>{e.forEach(e=>{var a;if(null===(a=e.albums)||void 0===a?void 0:a[0]){let a=i.get(G(e.id));null==a||a.forEach(i=>{var a,r,o;let l=t[i];t[i]=x({id:e.id,loadingState:h.Gui.RESOLVE,positionInContext:null==l?void 0:l.positionInContext,data:(0,y.Vt)(e,{hasEverFinished:null==l?void 0:l.hasEverFinished}),position:null===(o=e.albums)||void 0===o?void 0:null===(r=o[0])||void 0===r?void 0:null===(a=r.trackPosition)||void 0===a?void 0:a.index,isBest:null==n?void 0:n.includes(Number(e.id)),hasEverFinished:null==l?void 0:l.hasEverFinished})});let r=i.get(S(e.id));null==r||r.forEach(i=>{var n,a,r;t[i]=N(null===(r=e.albums)||void 0===r?void 0:null===(a=r[0])||void 0===a?void 0:null===(n=a.trackPosition)||void 0===n?void 0:n.volume)})}})},C=(e,t,i)=>{let n=0;e.volumes.forEach(a=>{e.volumes.length>1&&a[0]&&(t.push(N()),i.set(S(a[0].id),[t.length-1])),a.forEach(e=>{t.push(x({id:e.id,loadingState:h.Gui.IDLE,positionInContext:n}));let a=i.get(String(e.id));i.set(G(e.id),a?[...a,t.length-1]:[t.length-1]),n++})})},V=e=>(0,o.pj)({id:e.id,type:e.type,title:e.title,albums:e.albums.map(b.ym)}),T=(e,t,i,n)=>{e.forEach(e=>{let a=i.get(String(e));null==a||a.forEach(i=>{var a,r;t[i]=x({id:e,loadingState:n,positionInContext:null===(a=t[i])||void 0===a?void 0:a.positionInContext,hasEverFinished:null===(r=t[i])||void 0===r?void 0:r.hasEverFinished})})})},I=o.V5.model("AlbumDonations",{loadingState:o.V5.enumeration(Object.values(h.Gui)),items:o.V5.maybeNull(o.V5.array(g.Ew))}),D=o.V5.model("LabelItem",{id:o.V5.number,name:o.V5.string}),k=o.V5.model("RelatedAlbumsPage",{loadingState:o.V5.enumeration(Object.values(h.Gui)),items:o.V5.array(b.ug)}),j=o.V5.model("RelatedContent",{loadingState:o.V5.enumeration(Object.values(h.Gui)),items:o.V5.maybeNull(o.V5.array(v.fd))}),O=o.V5.compose(o.V5.model("AlbumPage",{id:o.V5.maybeNull(o.V5.number),meta:o.V5.maybeNull(b.ug),items:o.V5.array(v.JP),indexItems:o.V5.map(o.V5.array(o.V5.number)),loadingState:o.V5.enumeration(Object.values(h.Gui)),errorStatusCode:o.V5.maybeNull(o.V5.number),deprecationTargetAlbumId:o.V5.maybeNull(o.V5.number),latestGenreAlbums:k,otherArtistAlbums:k,otherAlbumVersions:o.V5.array(b.ug),labels:o.V5.maybeNull(o.V5.array(D)),description:o.V5.maybe(o.V5.string),donations:I,relatedContent:j,allTracksUnfinished:o.V5.boolean}),E.ie,E.Al).views(e=>({get isNonMusicType(){var t;if(null===(t=e.meta)||void 0===t?void 0:t.type)return[s.V.PODCAST,s.V.AUDIOBOOK,s.V.FAIRY_TALE].includes(e.meta.type);return!1},get isOtherArtistAlbumsAvailable(){var i,n,a,r;return!!(!this.isNonMusicType&&(null===(n=e.meta)||void 0===n?void 0:null===(i=n.artists)||void 0===i?void 0:i.length)===1&&!(null===(r=e.meta)||void 0===r?void 0:null===(a=r.artists[0])||void 0===a?void 0:a.various))},get isLatestGenreAlbumsAvailable(){var o;return!!(!this.isNonMusicType&&(null===(o=e.meta)||void 0===o?void 0:o.genre))},get isNotFound(){return e.loadingState===h.Gui.REJECT&&(e.errorStatusCode===l.CN.NOT_FOUND||e.errorStatusCode===l.CN.BAD_REQUEST)},get isCacheNotFound(){return e.loadingState===h.Gui.REJECT&&e.errorStatusCode===c.DW},get isRejected(){return e.loadingState===h.Gui.REJECT},get hasOtherAlbumVersions(){return!!(e.loadingState===h.Gui.IDLE||e.loadingState===h.Gui.PENDING||e.otherAlbumVersions&&e.otherAlbumVersions.length>0)},get hasLatestGenreAlbums(){return!!(e.latestGenreAlbums.loadingState===h.Gui.IDLE||e.latestGenreAlbums.loadingState===h.Gui.PENDING||e.latestGenreAlbums.items&&e.latestGenreAlbums.items.length>0)},get hasOtherArtistAlbums(){return!!(e.otherArtistAlbums.loadingState===h.Gui.IDLE||e.otherArtistAlbums.loadingState===h.Gui.PENDING||e.otherArtistAlbums.items&&e.otherArtistAlbums.items.length>0)},get isLoading(){return e.loadingState===h.Gui.IDLE||e.loadingState===h.Gui.PENDING},get isLoaded(){return e.loadingState===h.Gui.RESOLVE},get isLatestGenreAlbumsLoading(){return e.latestGenreAlbums.loadingState===h.Gui.IDLE||e.latestGenreAlbums.loadingState===h.Gui.PENDING},get isOtherArtistAlbumsLoading(){return e.otherArtistAlbums.loadingState===h.Gui.IDLE||e.otherArtistAlbums.loadingState===h.Gui.PENDING},get isRelatedContentLoading(){return e.relatedContent.loadingState===h.Gui.IDLE||e.relatedContent.loadingState===h.Gui.PENDING},get contextMeta(){var u,d,m,v,b,g,f,E,A,y;return{id:e.meta.id,title:null===(u=e.meta)||void 0===u?void 0:u.title,coverUri:null===(d=e.meta)||void 0===d?void 0:d.coverUri,type:null===(m=e.meta)||void 0===m?void 0:m.type,year:null===(v=e.meta)||void 0===v?void 0:v.year,version:null===(b=e.meta)||void 0===b?void 0:b.version,contentWarning:null===(g=e.meta)||void 0===g?void 0:g.contentWarning,genre:null===(f=e.meta)||void 0===f?void 0:f.genre,likesCount:null===(E=e.meta)||void 0===E?void 0:E.likesCount,averageColor:null===(A=e.meta)||void 0===A?void 0:A.averageColor,available:null===(y=e.meta)||void 0===y?void 0:y.isAvailable}},get tracks(){return e.items.filter(e=>e.type!==p.lf.TEXT)},get lastEpisodes(){return this.tracks.slice(0,5)},get lastEpisodesTrackIds(){return this.lastEpisodes.map(e=>e.id)}})).actions(e=>{let t={afterCreate(){e.getDescriptionTexts()},setAlbumUnfinished:()=>{var i;t.markUnfinished({albumId:e.id||0}),null===(i=e.meta)||void 0===i||i.updateFinished(!1)},setAllTracksUnfinished:t=>{e.allTracksUnfinished=t},checkAllAlbumTrackFinished:()=>{var i,n;e.items.filter(e=>{let{type:t,data:i}=e;return i&&t!==p.lf.TEXT}).every(e=>{var t;let{data:i}=e;return null==i?void 0:null===(t=i.streamProgress)||void 0===t?void 0:t.hasEverFinished})&&((null===(i=e.meta)||void 0===i?void 0:i.listeningFinished)||(t.markFinished({albumId:Number(e.id)}),null===(n=e.meta)||void 0===n||n.updateFinished(!0)))},markTracksFinished:t=>{let{withoutTracks:i=[]}=t;e.items.forEach(e=>{if(e.type===p.lf.TEXT)return;let{data:t}=e;if(!(t&&i.includes(t.id))){if(t){var n;null===(n=t.streamProgress)||void 0===n||n.updateEverFinished(!0)}else e.updateEverFinished(!0)}})},markFinished:(0,o.ls)(function*(t){let{streamsResource:i,modelActionsLogger:n}=(0,o.dU)(e);try{return yield i.markAlbumFinished(t)}catch(e){return n.error(e),u.P.ERROR}}),markUnfinished:(0,o.ls)(function*(t){let{streamsResource:i,modelActionsLogger:n}=(0,o.dU)(e);try{return yield i.markAlbumUnfinished(t)}catch(e){return n.error(e),u.P.ERROR}}),setListeningFinishedStatus:(0,o.ls)(function*(){var i;return(null===(i=e.meta)||void 0===i?void 0:i.listeningFinished)?(t.setAllTracksUnfinished(!0),yield t.markUnfinished({albumId:Number(e.id)})):yield t.markFinished({albumId:Number(e.id)})}),getLatestGenreAlbums:(0,o.ls)(function*(t){let{topResource:i,modelActionsLogger:n}=(0,o.dU)(e);if(e.latestGenreAlbums.loadingState!==h.Gui.PENDING)try{e.latestGenreAlbums.loadingState=h.Gui.PENDING;let n=yield i.getTopByGenre(t);e.latestGenreAlbums.items=(0,o.pj)(n.albums.map(b.ym)),e.latestGenreAlbums.loadingState=h.Gui.RESOLVE}catch(t){n.error(t),e.latestGenreAlbums.loadingState=h.Gui.REJECT}}),getOtherArtistAlbums:(0,o.ls)(function*(t,i){let{artistsResource:n,modelActionsLogger:a}=(0,o.dU)(e);if(e.otherArtistAlbums.loadingState!==h.Gui.PENDING)try{if(!t.artistId){e.otherArtistAlbums.loadingState=h.Gui.REJECT;return}e.otherArtistAlbums.loadingState=h.Gui.PENDING;let a=yield n.getSafeDirectAlbums({...t,artistId:t.artistId});e.otherArtistAlbums.items=(0,o.pj)(a.albums.filter(e=>String(e.id)!==String(i)).map(b.ym)),e.otherArtistAlbums.loadingState=h.Gui.RESOLVE}catch(t){a.error(t),e.otherArtistAlbums.loadingState=h.Gui.REJECT}}),getTracks:(0,o.ls)(function*(t){let{trackIds:i}=t,{tracksResource:n,modelActionsLogger:a}=(0,o.dU)(e);try{var r;if(!(null===(r=e.meta)||void 0===r?void 0:r.id))return;T(i,e.items,e.indexItems,h.Gui.PENDING);let t=yield n.getTracksMeta({trackIds:A(i,e.meta.id),withProgress:!0});_(t,e.items,e.indexItems,e.meta.bestAlbumTracks)}catch(t){a.error(t),T(i,e.items,e.indexItems,h.Gui.REJECT)}}),getDonations:(0,o.ls)(function*(t){let{albumId:i}=t,{experiments:n}=(0,o.yj)(e),{donationResource:a,modelActionsLogger:r}=(0,o.dU)(e);if(n.checkExperiment(h.peG.WebNextAlbumDonateChooserButton,"on")&&e.donations.loadingState!==h.Gui.PENDING)try{e.donations.loadingState=h.Gui.PENDING;let{donations:t}=yield a.getAlbumDonations({albumId:i});t&&(e.donations.items=(0,o.pj)(t.map(g.fv))),e.donations.loadingState=h.Gui.RESOLVE}catch(t){r.error(t),e.donations.loadingState=h.Gui.REJECT}}),getData:(0,o.ls)(function*(i){let{albumId:n,resumeStream:u,preloadedAlbum:c}=i,{albumResource:v,modelActionsLogger:g}=(0,o.dU)(e),{experiments:p,disclaimer:E}=(0,o.yj)(e),A=p.checkExperiment(h.peG.WebNextAlbumDisableVersions,"on"),y=p.checkExperiment(h.peG.WebNextAlbumDisableTracks,"on"),N=p.checkExperiment(h.peG.WebNextAlbumDisableLatestGenreAlbums,"on"),x=p.checkExperiment(h.peG.WebNextAlbumDisableOtherArtistAlbums,"on"),S=p.checkExperiment(h.peG.WebNextAgentPodcast,"on"),G=p.checkExperiment(h.peG.WebNextNewExplicitApiModalFA,"on");if(e.id=n,e.loadingState!==h.Gui.PENDING)try{var _,V,T,I,D,k,j;let i,g;e.loadingState=h.Gui.PENDING;let p=c;if(p||(p=yield v.getAlbumWithTracksIds({albumId:n,resumeStream:u})),(null==p?void 0:p.error)==="not-found"){e.errorStatusCode=l.CN.NOT_FOUND,e.loadingState=h.Gui.REJECT,e.otherArtistAlbums.loadingState=h.Gui.REJECT,e.latestGenreAlbums.loadingState=h.Gui.REJECT;return}if(null===(_=p.deprecation)||void 0===_?void 0:_.targetAlbumId){e.deprecationTargetAlbumId=p.deprecation.targetAlbumId,e.loadingState=h.Gui.RESOLVE;return}let O=(null!==(T=p.disclaimers)&&void 0!==T?T:[]).includes(d.e.MODAL),P=p.type===s.V.PODCAST&&(null!==(I=p.disclaimers)&&void 0!==I?I:[]).includes(d.e.FOREIGN_AGENT),F=null===(V=(0,h.V4d)(null!==(D=p.disclaimers)&&void 0!==D?D:[],d.e.FOREIGN_AGENT))||void 0===V?void 0:V[0];(O||S&&P||G&&F)&&(yield E.getDisclaimerData({entityId:n,entityType:p.type===s.V.PODCAST?h.coP.PODCAST:h.coP.ALBUM,newDisclaimerId:null==F?void 0:F.id}));let{sonataState:R}=(0,o.yj)(e);if(R.setUnloadedEntitiesData(p.volumes.flat().map(e=>(0,f.RN)(e.id))),e.meta=(0,b.ym)(p),e.labels=(0,o.pj)(p.labels),e.contentWarning=(0,o.pj)(p.contentWarning),e.description=(0,o.pj)(p.description),!A&&p.duplicates&&p.duplicates.length>0&&(e.otherAlbumVersions=(0,o.pj)(null===(k=p.duplicates)||void 0===k?void 0:k.map(b.ym))),!y){C(p,e.items,e.indexItems);let i=[];for(let t=0;t<10;t++){let n=e.items[t];(null==n?void 0:n.type)===m.V.TRACK&&i.push(String(n.id))}yield t.getTracks({trackIds:i})}!N&&e.isLatestGenreAlbumsAvailable?i=t.getLatestGenreAlbums({category:a.RECENT_ALBUMS,period:r.WEEK,pageSize:8,genre:p.genre}):e.latestGenreAlbums.loadingState=h.Gui.RESOLVE,!x&&e.isOtherArtistAlbumsAvailable?g=t.getOtherArtistAlbums({artistId:String(null===(j=p.artists[0])||void 0===j?void 0:j.id),limit:8},n):e.otherArtistAlbums.loadingState=h.Gui.RESOLVE,yield Promise.allSettled([i,g]),e.loadingState!==h.Gui.IDLE&&(e.loadingState=h.Gui.RESOLVE)}catch(t){g.error(t),t instanceof l.du&&(e.errorStatusCode=t.statusCode),e.loadingState!==h.Gui.IDLE&&(e.loadingState=h.Gui.REJECT,e.otherArtistAlbums.loadingState=h.Gui.REJECT,e.latestGenreAlbums.loadingState=h.Gui.REJECT)}}),loadLastEpisodes(){t.getTracks({trackIds:e.lastEpisodesTrackIds})},getRelatedContent:(0,o.ls)(function*(){let{albumResource:t,modelActionsLogger:i}=(0,o.dU)(e);if(e.relatedContent.loadingState!==h.Gui.PENDING)try{var n,a;if(!(null===(n=e.meta)||void 0===n?void 0:n.id))return;e.relatedContent.loadingState=h.Gui.PENDING;let i=yield t.getRelatedContent({albumId:e.meta.id});e.relatedContent.items=(0,o.pj)(null===(a=i.blocks)||void 0===a?void 0:a.map(V)),e.relatedContent.loadingState=h.Gui.RESOLVE}catch(t){i.error(t),e.relatedContent.loadingState=h.Gui.REJECT}}),reset(){let{sonataState:t}=(0,o.yj)(e);t.resetUnloadedEntitiesData(),e.id=null,e.errorStatusCode=null,e.deprecationTargetAlbumId=null,e.indexItems.clear(),e.loadingState=h.Gui.IDLE,e.donations.loadingState=h.Gui.IDLE,e.latestGenreAlbums.loadingState=h.Gui.IDLE,e.otherArtistAlbums.loadingState=h.Gui.IDLE,e.description="",e.relatedContent.loadingState=h.Gui.IDLE,e.allTracksUnfinished=!1,e.destroyItems([e.meta,e.items,e.latestGenreAlbums.items,e.otherArtistAlbums.items,e.otherAlbumVersions,e.donations.items,e.labels,e.relatedContent.items])}};return t});i(26386);var P=i(82463)},32544:function(e,t,i){"use strict";i.d(t,{T:function(){return n.NotFound}});var n=i(40334)},40334:function(e,t,i){"use strict";i.d(t,{NotFound:function(){return b}});var n=i(65301),a=i(9695),r=i(96233),o=i(44729),l=i(78372),s=i(82036),u=i(81437),d=i(58997),m=i(29778),c=i(36625),v=i.n(c);let b=(0,r.Pi)(e=>{let{className:t}=e,{contentRef:i}=(0,d.$Y6)(),r=(0,d.s0h)("/");return(0,d.ZP4)(!0),(0,n.jsxs)("div",{className:(0,a.W)(v().root,{[v().root_desktop]:!i},t),children:[(0,n.jsx)(m.nP,{withBackwardFallback:"/",className:v().navigation,withForwardControl:!1}),(0,n.jsxs)("div",{className:v().content,children:[(0,n.jsx)(s.Icon,{className:v().icon,variant:"musicLogo",size:"xxl"}),(0,n.jsx)(u.Heading,{className:(0,a.W)(v().title,v().important),variant:"h3",size:"xs",children:(0,n.jsx)(o.Z,{id:"page-error.page-does-not-exist"})}),(0,n.jsx)(u.Caption,{className:(0,a.W)(v().text,v().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(o.Z,{id:"page-error.page-does-not-exist-description"})}),(0,n.jsx)(l.z,{onClick:r,className:v().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(u.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(o.Z,{id:"navigation.page-main"})})})]})]})})},46912:function(e,t,i){"use strict";i.d(t,{l:function(){return u},B:function(){return p}});var n=i(65301),a=i(82036),r=i(81437),o=i(29778),l=i(2868),s=i.n(l);let u=e=>{let{message:t}=e;return(0,n.jsx)(o.Yj,{cover:(0,n.jsx)(a.Icon,{variant:"unavailable",size:"xs",className:s().icon}),message:(0,n.jsx)(r.Caption,{className:s().message,variant:"div",type:"controls",size:"m",children:t})})};var d=i(96233),m=i(91207),c=i(44729),v=i(78372),b=i(58997),g=i(19744),f=i.n(g);let p=(0,d.Pi)(()=>{let{slam:e}=(0,b.oR4)(),t=(0,b.s0h)("/mymusic/downloads/tracks"),i=(0,b.s0h)("/settings"),o=(0,m.useCallback)(()=>{window.location.href="/"},[]),l=(0,m.useMemo)(()=>e.isOfflineModeEnabled?(0,n.jsx)(c.Z,{id:"offline.offline-mode-enabled"}):(0,n.jsx)(c.Z,{id:"offline.no-internet-connection"}),[e.isOfflineModeEnabled]),s=(0,m.useMemo)(()=>e.isOfflineModeEnabled?(0,n.jsx)(v.z,{onClick:i,className:f().button,color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(r.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(c.Z,{id:"offline.disable-offline-mode"})})}):(0,n.jsx)(v.z,{onClick:o,className:f().button,color:"secondary",size:"l",radius:"xxxl",children:(0,n.jsx)(r.Caption,{type:"controls",variant:"span",size:"m",children:(0,n.jsx)(c.Z,{id:"page-error.restart-app-button"})})}),[o,i,e.isOfflineModeEnabled]);return(0,n.jsx)("div",{className:f().root,children:(0,n.jsxs)("div",{className:f().container,children:[(0,n.jsx)(a.Icon,{className:f().icon,variant:"offline",size:"xxl"}),(0,n.jsx)(r.Heading,{className:f().title,variant:"div",size:"xs",children:l}),(0,n.jsx)(r.Caption,{className:f().text,variant:"span",type:"text",size:"l",weight:"normal",children:(0,n.jsx)(c.Z,{id:"offline.listen-downloaded-content"})}),(0,n.jsxs)("div",{className:f().buttons,children:[s,(0,n.jsx)(v.z,{color:"primary",onClick:t,role:"link",size:"l",radius:"xxxl",className:f().button,children:(0,n.jsx)(c.Z,{id:"interface-actions.go-to-collection"})})]})]})})})},51127:function(e){e.exports={root:"DonationButton_root__SEKMn",popover:"DonationButton_popover__p_W9s"}},96158:function(e){e.exports={root:"DonationMenuItem_root__rsLgl",cover:"DonationMenuItem_cover__tzmM6",image:"DonationMenuItem_image__EgeO1"}},36625:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},2868:function(e){e.exports={icon:"NotificationDownloadError_icon__r2AWx",message:"NotificationDownloadError_message__WwjsI"}},19744:function(e){e.exports={root:"Offline_root__IxjsY",container:"Offline_container__2V5Vo",icon:"Offline_icon__jDmpJ",title:"Offline_title__Y2CtW",text:"Offline_text__Nhult",buttons:"Offline_buttons__ZOFI7",button:"Offline_button__QSA_j"}},3228:function(e,t,i){"use strict";i.d(t,{f:function(){return n},i:function(){return a}});let n=e=>String(e).split(":"),a=(e,t)=>t?[e,t].join(":"):e},10420:function(e,t,i){"use strict";var n,a;i.d(t,{A:function(){return n}}),(a=n||(n={})).Music="music",a.VibeTrack="vibeTrack",a.Generative="generative",a.Unknown="unknown",a.SmartPreview="smartPreview"}},function(e){e.O(0,[3537,6072,1884,1336,9582,9245,7425,7202,85,5453,7873,5493,7311,2845,9034,9778,1694,721,4709,3154,4474,166,1001,6325,3504,2291,1744],function(){return e(e.s=30412)}),_N_E=e.O()}]);