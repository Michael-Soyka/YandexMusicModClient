(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8337],{36957:function(e,t,a){"use strict";a.r(t),a.d(t,{AlbumNotFoundPage:function(){return r}});var s=a(8759),i=a(33423),l=a(99616),o=a(2365),n=a(5674);let r=(0,i.Pi)(()=>{let{album:e}=(0,n.oR)();return(0,l.useEffect)(()=>()=>{e.reset()},[e]),(0,s.jsx)(o.T,{})})},56890:function(e,t,a){"use strict";a.r(t),a.d(t,{AlbumPage:function(){return M}});var s,i,l=a(8759),o=a(33423),n=a(11769),r=a(99616),d=a(65244),m=a(27287),u=a(70579),c=a(96911),b=a(13236),v=a(7042),x=a(5674),h=a(44285),A=a(35338),g=a(2814),p=a(454),_=a(57413),C=a(48616),f=a(1918),j=a(48157),k=a(95539),N=a(21774),L=a(44752),I=a.n(L);let E=(0,o.Pi)(e=>{var t;let{albumHeaderRef:a,refCallback:s}=e,i=(0,r.useRef)(null),o=(0,x.x5)({pageId:x.Rh.ALBUM,blockId:x.aU.ALBUM}),n=(0,r.useRef)(0),{notify:m}=(0,x.d$)(),{album:u,experiments:b,sonataState:v}=(0,x.oR)(),{formatMessage:L}=(0,d.Z)(),[E,R]=(0,r.useState)(!1);(0,r.useEffect)(()=>()=>{n.current=0},[u]),(0,r.useEffect)(()=>{(u.otherArtistAlbums.loadingState===x.Gu.REJECT||u.latestGenreAlbums.loadingState===x.Gu.REJECT)&&n&&!(n.current>0)&&(m((0,l.jsx)(h.Q,{error:L({id:"album-errors.error-during-loading-similar-albums"})}),{containerId:x.W$.ERROR}),n.current++)},[u.isNotFound,u.latestGenreAlbums.loadingState,u.otherArtistAlbums.loadingState,L,m]),(0,r.useEffect)(()=>{u.isLoaded&&u.hasOtherAlbumVersions&&R(!0)},[u.hasOtherAlbumVersions,u.isLoaded]);let T=(0,r.useCallback)(()=>{let e=i.current;null==e||e.scrollIntoView({behavior:"smooth"})},[]),B=(0,r.useMemo)(()=>u.isLoading||!u.meta||u.isRejected?(0,l.jsx)(j.KC,{className:I().header}):(0,l.jsx)(j.hx,{album:u.meta,className:I().header,ref:a,onVersionClick:E?T:void 0}),[u.isLoading,u.isRejected,u.meta,a,T,E]),P=(0,r.useMemo)(()=>({Header:()=>B,Footer:()=>(0,l.jsxs)("div",{className:I().footerContainer,children:[(0,l.jsxs)("div",{className:I().carouselBlocks,children:[u.hasOtherAlbumVersions&&(0,l.jsx)(c.wk,{isShimmerVisible:u.isLoading,isShimmerActive:!0,className:I().carouselContainer,headerClassName:(0,A.W)(I().carouselBlock,I().carouselBlockHeader),containerClassName:I().carouselBlock,title:L({id:"entity-names.other-album-versions"}),albums:u.otherAlbumVersions,...(0,p.BA)(p.Br.album.OTHER_VERSIONS_CAROUSEL),headingRef:i}),u.hasLatestGenreAlbums&&(0,l.jsx)(c.wk,{isShimmerVisible:u.isLatestGenreAlbumsLoading,isShimmerActive:!0,className:I().carouselContainer,headerClassName:(0,A.W)(I().carouselBlock,I().carouselBlockHeader),containerClassName:I().carouselBlock,title:L({id:"entity-names.new-albums-in-genre"}),albums:u.latestGenreAlbums.items,...(0,p.BA)(p.Br.album.GENRE_ALBUMS_CAROUSEL)}),u.hasOtherArtistAlbums&&(0,l.jsx)(c.wk,{isShimmerVisible:u.isOtherArtistAlbumsLoading,isShimmerActive:!0,className:I().carouselContainer,headerClassName:(0,A.W)(I().carouselBlock,I().carouselBlockHeader),containerClassName:I().carouselBlock,title:L({id:"entity-names.other-albums-of-artist"}),albums:u.otherArtistAlbums.items,...(0,p.BA)(p.Br.album.OTHER_ARTIST_ALBUMS_CAROUSEL)})]}),(0,l.jsx)(h.$_,{className:I().footer})]})}),[B,u.hasOtherAlbumVersions,u.isLoading,u.otherAlbumVersions,u.hasLatestGenreAlbums,u.isLatestGenreAlbumsLoading,u.latestGenreAlbums.items,u.hasOtherArtistAlbums,u.isOtherArtistAlbumsLoading,u.otherArtistAlbums.items,L]),S=(0,r.useCallback)(e=>{let t=[];for(let a=e.startIndex;a<=e.endIndex;a++){let e=u.items[a];(null==e?void 0:e.type)===C.Vc.TRACK&&(null==e?void 0:e.loadingState)===x.Gu.IDLE&&t.push(e.id)}t.length&&u.getTracks({trackIds:t})},[u]),y=b.checkExperiment(x.pe.WebNextAlbumDisableTracks,"on"),V=y?0:u.items.length||10;return(0,l.jsx)(h.Wv,{className:(0,A.W)(I().root,I().important),listClassName:I().content,context:{listAriaLabel:L({id:"entity-names.albums-tracks-list"},{albumName:(null===(t=u.meta)||void 0===t?void 0:t.title)||""})},customComponents:P,totalCount:V,itemContentCallback:e=>{var t,a;let s=null==u?void 0:null===(t=u.items)||void 0===t?void 0:t[e];if(!s||!u.meta||u.isRejected)return(0,l.jsx)(h.DX,{isActive:!0,className:I().shimmerItem,variant:x.Lx.ALBUM});if(!(null==s?void 0:s.data))switch(null==s?void 0:s.type){case N.lf.TEXT:return(0,l.jsx)(h.AH,{className:I().shimmerItem});case C.Vc.TRACK:return(0,l.jsx)(h.DX,{isActive:!0,className:I().shimmerItem,variant:x.Lx.ALBUM})}return(null==s?void 0:s.type)===N.lf.TEXT?(0,l.jsx)("div",{className:(0,A.W)(I().shimmerItem,I().textItem),children:(0,l.jsx)(f.Caption,{variant:"span",type:"entity",size:"m",weight:"medium",className:I().text,children:(0,l.jsx)(g.Z,{id:"entity-names.disk-number",values:{number:s.data}})})}):s.data?(0,l.jsx)(k.RJ,{withLightning:s.isBest,track:s.data,position:s.position,albumArtists:null==u?void 0:null===(a=u.meta)||void 0===a?void 0:a.artists,playContextParams:{contextData:{type:_.Ak.Album,meta:u.contextMeta,from:o},queueParams:{index:u.trackIndexInContext.get(String(s.id))},loadContextMeta:!0,entitiesData:v.unloadedEntitiesDataFromModels}}):void 0},onGetDataByRange:S,debounceDurationInMs:300,initialItemCount:V,handleRef:s,withHeader:!0})});var R=a(26265),T=a(6329);(s=i||(i={})).ABOUT="about",s.TRACKS="track-list";let B=[i.ABOUT,i.TRACKS];var P=a(28280),S=a.n(P);let y="activeTab",V=(0,o.Pi)(e=>{var t;let{podcastHeaderRef:a,refCallback:s}=e,o=(0,x.x5)({pageId:x.Rh.PODCAST,blockId:x.aU.PODCAST}),n=(0,r.useRef)(0),m=(0,r.useRef)(null),[u,c]=(0,r.useState)(i.ABOUT),b=(0,x.m5)(),{album:v,experiments:p,sonataState:L}=(0,x.oR)(),E=p.checkExperiment(x.pe.WebNextPodcastPage,"on"),P=(0,R.useTabsState)(0),{formatMessage:V}=(0,d.Z)();(0,r.useEffect)(()=>()=>{n.current=0},[v]),(0,r.useEffect)(()=>{var e,t,a;if(!E)return;(null===(e=window.location)||void 0===e?void 0:e.href)&&(m.current=new URL(window.location.href));let s=null===(t=m.current)||void 0===t?void 0:t.searchParams,l=null==s?void 0:s.get(y);B.includes(l)?(c(l),null===(a=P.onTabChange)||void 0===a||a.call(P,B.indexOf(l))):(null==s||s.set(y,i.ABOUT),b(String(m.current)))},[P,b,E]);let M=(0,r.useMemo)(()=>({about:V({id:"podcast.tab-about"}),"track-list":V({id:"podcast.tab-tracks"},{value:v.items.length})}),[V,v.items.length]),O=(0,r.useMemo)(()=>e=>{var t,a,s;if(!P.onTabChange||e===P.value)return;P.onTabChange(e);let l=null!==(s=B[e])&&void 0!==s?s:i.ABOUT;c(l),null===(a=m.current)||void 0===a||null===(t=a.searchParams)||void 0===t||t.set(y,l),b(String(m.current))},[P,b]),D=(e,t)=>(0,l.jsxs)("div",{className:S().infoBlock,children:[(0,l.jsx)(f.Caption,{variant:"div",type:"entity",size:"m",className:S().infoTitle,children:e}),(0,l.jsx)(f.Caption,{variant:"div",type:"entity",size:"m",children:t})]}),U=(0,r.useMemo)(()=>{var e,t,a,s,i;let o=Number(null===(e=v.labels)||void 0===e?void 0:e.length)>1?V({id:"podcast.publishers-title"}):V({id:"podcast.publisher-title"}),n=null===(t=v.labels)||void 0===t?void 0:t.map(e=>e.name).join(", "),r=V({id:"podcast.age-limit"});return(0,l.jsxs)("div",{className:S().contentAbout,children:[!!(null===(a=v.description)||void 0===a?void 0:a.length)&&(0,l.jsx)(f.Caption,{variant:"div",type:"entity",size:"m",className:I().text,children:(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:v.description}})}),((null===(s=v.labels)||void 0===s?void 0:s.length)||v.isExplicit)&&(0,l.jsxs)("div",{className:I().text,children:[!!(null===(i=v.labels)||void 0===i?void 0:i.length)&&D("".concat(o,":"),String(n)),v.isExplicit&&D("".concat(r,":"),"18+")]})]})},[V,v.isExplicit,v.labels,v.description]),G=(0,r.useMemo)(()=>v.isLoading||!v.meta||v.isRejected?(0,l.jsx)(j.KC,{className:I().header}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.hx,{album:v.meta,className:I().header,ref:a}),E&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.no,{className:S().tabCarousel,...P,onTabChange:O,children:B.map((e,t)=>(0,l.jsx)(h.OK,{className:S().tab,title:M[e],value:t},e))}),u===i.ABOUT&&U]})]}),[v.isLoading,v.isRejected,v.meta,U,E,a,P,M,O,u]);(0,r.useEffect)(()=>{v.isLoaded&&v.loadLastEpisodes()},[v,v.isLoaded,v.loadLastEpisodes]);let H=p.checkExperiment(x.pe.WebNextPodcastPage,"on")&&u===i.ABOUT&&v.lastEpisodes.length>0,W=(0,r.useMemo)(()=>({Header:()=>G,Footer:()=>(0,l.jsxs)("div",{className:I().footerContainer,children:[H&&(0,l.jsx)(T.QG,{className:S().lastEpisodes}),(0,l.jsx)(h.$_,{className:I().footer})]})}),[G,H]),w=(0,r.useCallback)(e=>{let t=[];for(let a=e.startIndex;a<=e.endIndex;a++){let e=v.items[a];(null==e?void 0:e.type)===C.Vc.TRACK&&(null==e?void 0:e.loadingState)===x.Gu.IDLE&&t.push(e.id)}t.length&&v.getTracks({trackIds:t})},[v]),F=p.checkExperiment(x.pe.WebNextAlbumDisableTracks,"on"),X=F||E&&u===i.ABOUT?0:v.items.length||10,K=(0,r.useMemo)(()=>{var e;return E&&u===i.TRACKS?{listAriaLabel:V({id:"podcast.episodes-list"},{albumName:(null===(e=v.meta)||void 0===e?void 0:e.title)||""})}:null},[u,null===(t=v.meta)||void 0===t?void 0:t.title,V,E]);return(0,l.jsx)(h.Wv,{className:(0,A.W)(I().root,I().important),listClassName:(0,A.W)(I().content,S().content),context:K,customComponents:W,totalCount:X,itemContentCallback:e=>{var t;let a=null==v?void 0:null===(t=v.items)||void 0===t?void 0:t[e];if(!a||!v.meta||v.isRejected)return(0,l.jsx)(h.DX,{isActive:!0,className:I().shimmerItem,variant:x.Lx.ALBUM});if(!(null==a?void 0:a.data))switch(null==a?void 0:a.type){case N.lf.TEXT:return(0,l.jsx)(h.AH,{className:I().shimmerItem});case C.Vc.TRACK:return(0,l.jsx)(h.DX,{isActive:!0,className:I().shimmerItem,variant:x.Lx.ALBUM});default:return(0,l.jsx)(h.DX,{isActive:!0,className:S().shimmerItem,variant:x.Lx.PLAYLIST})}return(null==a?void 0:a.type)===N.lf.TEXT?(0,l.jsx)("div",{className:(0,A.W)(I().shimmerItem,I().textItem),children:(0,l.jsx)(f.Caption,{variant:"span",type:"entity",size:"m",className:I().text,children:(0,l.jsx)(g.Z,{id:"entity-names.season-number",values:{number:a.data}})})}):a.data?(0,l.jsx)(k.N6,{track:a.data,playContextParams:{contextData:{type:_.Ak.Album,meta:v.contextMeta,from:o},queueParams:{index:v.trackIndexInContext.get(String(a.id))},loadContextMeta:!1,entitiesData:L.unloadedEntitiesDataFromModels}}):void 0},onGetDataByRange:w,debounceDurationInMs:300,initialItemCount:X,handleRef:s,withHeader:!0})}),M=(0,o.Pi)(e=>{var t,a,s,i;let{albumId:o}=e,A=(0,r.useRef)(0),[g,p]=(0,b.zU)(),{notify:_}=(0,x.d$)(),{album:C,disclaimer:f}=(0,x.oR)(),{formatMessage:j}=(0,d.Z)(),{ref:k,offsetY:N}=(0,m.e)(),L=(0,r.useMemo)(()=>{var e;return(0,x.XG)(null===(e=C.meta)||void 0===e?void 0:e.averageColor)},[null===(t=C.meta)||void 0===t?void 0:t.averageColor]),[R,T]=(0,b.at)(L,N),{href:B}=(0,x.zB)("/album/".concat(C.deprecationTargetAlbumId)),P=(0,c.jV)({album:C.meta,shouldHistoryBack:!0});(0,r.useEffect)(()=>{var e;(null===(e=C.meta)||void 0===e?void 0:e.isUnsafeLegal)&&P()},[null===(a=C.meta)||void 0===a?void 0:a.isUnsafeLegal,P]),(0,r.useEffect)(()=>()=>{C.reset()},[C,o]),o&&C.loadingState===x.Gu.IDLE&&(0,r.use)(C.getData({albumId:Number(o),resumeStream:!1})),C.deprecationTargetAlbumId&&(0,n.redirect)(B);let S=(0,r.useMemo)(()=>()=>{if(!C.isNotFound&&(C.isRejected||!C.meta&&!C.isLoading)){var e;if(!A||A.current>0)return;let t=(null===(e=C.meta)||void 0===e?void 0:e.isPodcast)?j({id:"podcast-errors.error-during-loading-podcast"}):j({id:"album-errors.error-during-loading-album"});_((0,l.jsx)(h.Q,{error:t}),{containerId:x.W$.ERROR}),A.current++}},[C.isRejected,C.isNotFound,C.meta,C.isLoading,_,j]);S(),(0,x.NO)(C.loadingState===x.Gu.RESOLVE),C.isNotFound&&(0,n.notFound)();let y=(0,r.useMemo)(()=>{var e;return(null===(e=C.meta)||void 0===e?void 0:e.isPodcast)?(0,l.jsx)(V,{podcastHeaderRef:k,refCallback:p}):(0,l.jsx)(E,{albumHeaderRef:k,refCallback:p})},[null===(s=C.meta)||void 0===s?void 0:s.isPodcast,k,p]);return(null===(i=C.meta)||void 0===i?void 0:i.isLegalRejected)?f.isRejected?(0,l.jsx)(u.D,{}):(0,l.jsx)(v.em,{disclaimer:f}):(0,l.jsx)(x.Lh,{pageId:x.Rh.ALBUM,children:(0,l.jsxs)(b.I7,{scrollElement:g,children:[(0,l.jsx)(h.h4,{style:T}),(0,l.jsx)("div",{className:I().averageColorBackground,style:R}),y]})})})},6329:function(e,t,a){"use strict";a.d(t,{QG:function(){return s.LastEpisodes},JP:function(){return u}});var s=a(76963),i=a(96555),l=a(48616),o=a(95539),n=a(21774),r=a(5674);let d=i.V5.model("VolumeItemTrack",{type:i.V5.enumeration(Object.values(l.Vc)),id:i.V5.union(i.V5.string,i.V5.number),data:i.V5.maybeNull(o.le),position:i.V5.maybe(i.V5.number),isBest:i.V5.maybe(i.V5.boolean),loadingState:i.V5.enumeration(Object.values(r.Gu))}),m=i.V5.model("VolumeItemText",{type:i.V5.literal(n.lf.TEXT),data:i.V5.maybeNull(i.V5.number)}),u=i.V5.union(m,d)},76963:function(e,t,a){"use strict";a.r(t),a.d(t,{LastEpisodes:function(){return v}});var s=a(8759),i=a(35338),l=a(33423),o=a(99616),n=a(65244),r=a(57413),d=a(95539),m=a(5674),u=a(44285),c=a(63548),b=a.n(c);let v=(0,l.Pi)(e=>{let{className:t}=e,{formatMessage:a}=(0,n.Z)(),{album:l,sonataState:c}=(0,m.oR)(),v=(0,m.x5)({pageId:m.Rh.PODCAST,blockId:m.aU.PODCAST}),x=(0,o.useMemo)(()=>l.lastEpisodes.map((e,t)=>l.isLoaded&&e.data?(0,s.jsx)(d.N6,{track:e.data,playContextParams:{contextData:{type:r.Ak.Album,meta:l.contextMeta,from:v},queueParams:{index:l.trackIndexInContext.get(String(e.id))},loadContextMeta:!1,entitiesData:c.unloadedEntitiesDataFromModels}},e.data.id):(0,s.jsx)(u.DX,{isActive:!0,className:b().shimmerItem,variant:m.Lx.ALBUM},t)),[l.lastEpisodes,l.isLoaded,l.contextMeta,l.trackIndexInContext,v,c.unloadedEntitiesDataFromModels]);return(0,s.jsxs)("div",{className:(0,i.W)(t,b().root),children:[(0,s.jsx)(u.ti,{className:b().blockHeader,title:a({id:"entity-names.podcast-last-episodes"})}),(0,s.jsx)("div",{role:"list","aria-label":a({id:"podcast.last-episodes-list"}),tabIndex:0,children:x})]})})},44752:function(e){e.exports={root:"AlbumPage_root__RMrFx",important:"AlbumPage_important__x2o8I",averageColorBackground:"AlbumPage_averageColorBackground__PmVaF",header:"AlbumPage_header__TDpqp",content:"AlbumPage_content__1JXxB",footerContainer:"AlbumPage_footerContainer__1IxWF",carouselBlocks:"AlbumPage_carouselBlocks__VIvNT",carouselBlock:"AlbumPage_carouselBlock__oWYmS",carouselBlockHeader:"AlbumPage_carouselBlockHeader__Bb3Ts",carouselContainer:"AlbumPage_carouselContainer__9clXz",textItem:"AlbumPage_textItem__1T3qL",text:"AlbumPage_text__rCU1L",shimmerItem:"AlbumPage_shimmerItem___Yecm",footer:"AlbumPage_footer__6_0Ei"}},28280:function(e){e.exports={tabCarousel:"PodcastContent_tabCarousel__cNl0q",tab:"PodcastContent_tab__6Rx8j",contentAbout:"PodcastContent_contentAbout__OFJ8L",infoBlock:"PodcastContent_infoBlock__kDh2i",infoTitle:"PodcastContent_infoTitle__WnMqm",content:"PodcastContent_content__U7mlc",lastEpisodes:"PodcastContent_lastEpisodes__GhmYl"}},63548:function(e){e.exports={root:"LastEpisodes_root__4JPKj",blockHeader:"LastEpisodes_blockHeader__se7bd",shimmerItem:"LastEpisodes_shimmerItem__Iirx5"}}}]);