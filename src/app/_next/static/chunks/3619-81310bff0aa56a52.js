(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3619],{5538:function(e,t,o){"use strict";var n,i;o.d(t,{z:function(){return n}}),(i=n||(n={})).CATEGORY="category",i.EDITORIAL="editorial"},74720:function(e,t,o){"use strict";o.d(t,{NonMusicAlbumsPage:function(){return x}});var n=o(65301),i=o(9695),a=o(96233),s=o(99678),l=o(91207),r=o(37184),c=o(55975),d=o(81437),u=o(54709),g=o(21016),_=o(58997),m=o(29778),N=o(5538),h=o(74232),C=o.n(h);let x=(0,a.Pi)(e=>{var t,o;let{id:a,variant:h}=e,{nonMusic:{albums:x},settings:M}=(0,_.oR4)(),{formatMessage:y}=(0,r.Z)(),{contentScrollRef:P,setContentScrollRef:L}=(0,_.$Y6)(),b=(0,_.k67)(),f=M.layout===_.t8m.Mobile;a&&x.loadingState===_.Gui.IDLE&&(h===N.z.EDITORIAL?(0,l.use)(x.getEditorialAlbums({id:a})):(0,l.use)(x.getCategoryAlbums({id:a}))),(x.isNotFound||!a)&&(0,s.notFound)(),(0,_.NOh)(x.loadingState===_.Gui.RESOLVE),(0,l.useEffect)(()=>()=>{x.reset()},[x]);let j=(0,l.useCallback)(e=>{x.getAlbumsByRange(e.startIndex,e.endIndex)},[x]),k=(0,l.useMemo)(()=>({Footer:()=>(0,n.jsx)(m.$_,{className:C().footer})}),[]),p=x.loadingState===_.Gui.PENDING?20:null!==(o=null===(t=x.albums)||void 0===t?void 0:t.length)&&void 0!==o?o:0;return(0,n.jsx)(_.Lh6,{pageId:_.Rhz.NON_MUSIC_ALBUMS,children:(0,n.jsx)(g.I7,{scrollElement:P,outerTitle:x.title,children:(0,n.jsxs)("div",{className:C().root,...(0,c.BA)(c.Br.nonMusic.NON_MUSIC_ALBUMS_PAGE),children:[(0,n.jsx)(m.h4,{variant:"text",withForwardControl:!1,withBackwardControl:b.canBack,children:(0,n.jsx)(d.Heading,{id:"collection-artists-header",variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:x.title})}),(0,n.jsx)(m.Wv,{className:(0,i.W)(C().scrollContainer,C().important),customComponents:k,itemContentCallback:e=>{var t,o;let i=null===(o=x.albums)||void 0===o?void 0:null===(t=o[e])||void 0===t?void 0:t.data,a=y({id:"loading-messages.entity-is-loading"},{entityName:y({id:"entity-names.album"})});return i?(0,n.jsx)(u.rf,{album:i,contentLinesCount:3},i.id):(0,n.jsx)(m.hi,{"aria-label":a},e)},totalCount:p,onGetDataByRange:j,totalRequests:x.requestsCount,listClassName:C().content,itemClassName:C().item,handleRef:L,context:{listAriaLabel:y({id:"mixes.albums-list"},{genreName:x.title||""})},isMobileLayout:f,useWindowScroll:f})]})})})})},21754:function(e,t,o){"use strict";o.d(t,{NonMusicCategoryNotFoundPage:function(){return s}});var n=o(65301),i=o(96233),a=o(32544);let s=(0,i.Pi)(()=>(0,n.jsx)(a.T,{}))},84360:function(e,t,o){"use strict";o.d(t,{NonMusicCategoryPage:function(){return M}});var n=o(65301),i=o(9695),a=o(96233),s=o(99678),l=o(91207),r=o(37908),c=o(46642),d=o(81437),u=o(74763),g=o(36643),_=o(21016),m=o(58997),N=o(29778),h=o(45791),C=o.n(h);let x={[r.c.ALBUM_CHART]:u.m8,[r.c.EDITORIAL_PLAYLISTS]:u.Rn,[r.c.CATEGORY]:u.j$},M=(0,a.Pi)(e=>{let{categoryId:t}=e,{categorySubpage:o}=(0,m.oR4)().nonMusic,{contentScrollRef:a,setContentScrollRef:r}=(0,m.$Y6)(),u=(0,m.RVp)(),h=(0,m.k67)();if((!u||o.isNotFound)&&(0,s.notFound)(),t&&o.loadingState===m.Gui.IDLE&&(0,l.use)(o.getData({categoryId:t})),(0,l.useEffect)(()=>()=>o.reset(),[o]),(0,m.NOh)(o.loadingState===m.Gui.RESOLVE),o.isSomethingWrong)return(0,n.jsx)(g.D,{});let M=(0,l.useMemo)(()=>o.blocks.map((e,t)=>{let a=x[e.type];return(0,n.jsx)(m.Ja5,{blockId:e.id,blockType:e.type,blockIdForFrom:"".concat(m.BEo.DISCOVERY_BLOCK,"-").concat(e.id),blockPosX:1,blockPosY:t+1,objectsCount:e.items.length,children:(0,n.jsx)(a,{headerClassName:(0,i.W)(C().carouselBlockHeader,C().carouselBlock),containerClassName:C().carouselBlock,type:e.landingBlockType,loadingState:o.loadingState,id:e.id,isNotFound:o.isNotFound,hasSentAnalyticsOnLoaded:!1,meta:{title:e.title,description:e.description,viewAllActionLink:e.viewAllActionLink},data:{items:e.items},isNeededToLoad:!1,isLoading:o.isLoading,isLoaded:o.isLoaded,isRejected:o.isRejected,isShimmerVisible:o.isLoading,isShimmerActive:!0,isVisible:!0,objectsCount:e.items.length},e.id)},e.id)}),[o.loadingState,o.isNotFound,o.blocks,o.isLoading,o.isLoaded,o.isRejected]);return(0,n.jsx)(m.Lh6,{pageId:m.Rhz.NON_MUSIC_CATEGORY,children:(0,n.jsxs)(_.I7,{scrollElement:a,outerTitle:o.title,children:[(0,n.jsx)(N.h4,{variant:"text",withForwardControl:!1,withBackwardControl:h.canBack,children:(0,n.jsx)(d.Heading,{variant:"h2",weight:"bold",size:"xl",children:o.title})}),(0,n.jsxs)(c.t,{className:C().root,containerClassName:C().content,ref:r,children:[(0,n.jsx)("div",{className:C().carouselBlocks,children:M}),(0,n.jsx)(N.$_,{className:C().footer})]})]})})})},85392:function(e,t,o){"use strict";o.d(t,{NonMusicCategoryPlaylistsPage:function(){return x}});var n=o(65301),i=o(9695),a=o(96233),s=o(99678),l=o(91207),r=o(37184),c=o(55975),d=o(81437),u=o(36643),g=o(21016),_=o(81706),m=o(58997),N=o(29778),h=o(88865),C=o.n(h);let x=(0,a.Pi)(e=>{var t,o,a;let{categoryId:h}=e,{nonMusic:{categoryPlaylistsSubpage:x},settings:M}=(0,m.oR4)(),y=(0,m.k67)(),{contentScrollRef:P,setContentScrollRef:L}=(0,m.$Y6)(),{formatMessage:b}=(0,r.Z)(),f=M.layout===m.t8m.Mobile,j=(0,l.useCallback)(e=>{x.getPlaylists({page:e,pageSize:20})},[x]);x.loadingState===m.Gui.IDLE&&(0,l.use)(x.getData({categoryId:h,page:0,pageSize:20})),x.isNotFound&&(0,s.notFound)(),(0,l.useEffect)(()=>()=>{x.reset()},[x]);let k=(0,l.useMemo)(()=>({Footer:()=>(0,n.jsx)(N.$_,{className:C().footer})}),[]);if((0,m.NOh)(x.loadingState===m.Gui.RESOLVE),x.isSomethingWrong)return(0,n.jsx)(u.D,{});let p=x.isLoading?20:null!==(o=null==x?void 0:null===(t=x.playlists)||void 0===t?void 0:t.length)&&void 0!==o?o:0;return(0,n.jsx)(m.Lh6,{pageId:m.Rhz.NON_MUSIC_CATEGORY_PLAYLISTS,children:(0,n.jsx)(g.I7,{scrollElement:P,outerTitle:x.title,children:(0,n.jsxs)("div",{className:C().root,...(0,c.BA)(c.Br.nonMusic.NON_MUSIC_CATEGORY_PLAYLISTS),children:[(0,n.jsx)(N.h4,{variant:"text",withForwardControl:!1,withBackwardControl:y.canBack,children:(0,n.jsx)(d.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:x.title})}),(0,n.jsx)(N.Wv,{context:{listAriaLabel:b({id:"mixes.playlists-list"},{genreName:x.title||""})},className:(0,i.W)(C().scrollContainer,C().important),customComponents:k,itemContentCallback:e=>{var t,o;let i=null==x?void 0:null===(o=x.playlists)||void 0===o?void 0:null===(t=o[e])||void 0===t?void 0:t.data,a=b({id:"loading-messages.entity-is-loading"},{entityName:b({id:"entity-names.playlist"})});return i?(0,n.jsx)(_.ZL,{playlist:i,contentLinesCount:3},i.key):(0,n.jsx)(N.hi,{isActive:!0,"aria-label":a})},initialItemCount:p,totalCount:p,onGetDataByPage:j,pageSize:20,totalRequests:null!==(a=x.requests)&&void 0!==a?a:0,listClassName:C().content,itemClassName:C().item,handleRef:L,isMobileLayout:f,useWindowScroll:f})]})})})})},24639:function(e,t,o){"use strict";o.d(t,{NonMusicNotFoundPage:function(){return r}});var n=o(65301),i=o(96233),a=o(91207),s=o(32544),l=o(58997);let r=(0,i.Pi)(()=>{let{nonMusic:e}=(0,l.oR4)();return(0,a.useEffect)(()=>()=>{e.landing.reset()},[e.landing]),(0,n.jsx)(s.T,{})})},70056:function(e,t,o){"use strict";o.d(t,{NonMusicPage:function(){return L}});var n=o(65301),i=o(9695),a=o(96233),s=o(99678),l=o(91207),r=o(37184),c=o(44729),d=o(55975),u=o(62043),g=o(91878),_=o(46642),m=o(81437),N=o(74763),h=o(36643),C=o(21016),x=o(58997),M=o(29778),y=o(54153),P=o.n(y);let L=(0,a.Pi)(()=>{let{nonMusic:e,user:t,experiments:o}=(0,x.oR4)(),{formatMessage:a}=(0,r.Z)(),{contentScrollRef:y,setContentScrollRef:L}=(0,x.$Y6)(),[b,f]=(0,g.z)();(0,x.RVp)()||(0,s.notFound)();let j=o.checkExperiment(x.peG.WebNextLandingSkeletonPodcastsAndBooks,"on"),k=o.checkExperiment(x.peG.WebNextSwitchMainSkeletons,"on");if(e.landing.isNeededToLoad){let o;o=j?k?u.j.NON_MUSIC:u.j.NON_MUSIC_WEB:u.j.WEB_NON_MUSIC,(0,l.use)(e.landing.getSkeleton({id:o,showWizard:t.settings.showWizard},{preloadBlocksCount:2}))}(0,l.useEffect)(()=>()=>e.landing.reset(),[e.landing]),(0,x.NOh)(e.landing.loadingState===x.Gui.RESOLVE);let p=(0,N._B)(e.landing),A=(0,l.useMemo)(()=>j?(0,n.jsx)(c.Z,{id:"entity-names.podcasts-and-books"}):(0,n.jsx)(c.Z,{id:"entity-names.podcasts"}),[j]),v=(0,l.useMemo)(()=>j?a({id:"entity-names.podcasts-and-books"}):a({id:"entity-names.podcasts"}),[a,j]);return(0,n.jsx)(x.Lh6,{pageId:x.Rhz.NON_MUSIC,children:(0,n.jsxs)(C.I7,{scrollElement:y,outerTitle:v,headerElement:b,shouldHideHeader:e.landing.hasUpperBlocks,children:[(0,n.jsx)(M.h4,{variant:"text",showControls:!1,children:(0,n.jsx)("div",{className:P().header,children:(0,n.jsx)(m.Heading,{variant:"h1",weight:"bold",size:"xl",children:A})})}),(0,n.jsxs)(_.t,{className:P().root,containerClassName:P().content,ref:L,...(0,d.BA)(d.Br.nonMusic.NON_MUSIC_PAGE),children:[(0,n.jsx)("div",{className:(0,i.W)(P().landing,{[P().landing_onlyWizard]:p}),children:(0,n.jsx)(N.Od,{landing:e.landing,headerConcealerComponent:(0,n.jsx)("div",{ref:f}),blockHeadingVariant:"h2",errorComponent:(0,n.jsx)(h.D,{className:P().error,withBackwardControl:!1})})}),(0,n.jsx)(M.$_,{className:P().footer})]})]})})})},74232:function(e){e.exports={root:"NonMusicAlbumsPage_root__jlDXa",scrollContainer:"NonMusicAlbumsPage_scrollContainer__XNRsu",important:"NonMusicAlbumsPage_important__Rk8LT",footer:"NonMusicAlbumsPage_footer__LJCIL",item:"NonMusicAlbumsPage_item__YArCS",content:"NonMusicAlbumsPage_content__phVa7"}},45791:function(e){e.exports={root:"NonMusicCategoryPage_root__GYeXL",content:"NonMusicCategoryPage_content__LJFnm",carouselBlocks:"NonMusicCategoryPage_carouselBlocks___BPJ_",carouselBlock:"NonMusicCategoryPage_carouselBlock__t41do",carouselBlockHeader:"NonMusicCategoryPage_carouselBlockHeader__1uIfL",footer:"NonMusicCategoryPage_footer__56hvJ"}},88865:function(e){e.exports={root:"NonMusicCategoryPlaylistsPage_root__NvUH8",scrollContainer:"NonMusicCategoryPlaylistsPage_scrollContainer__uUyGe",important:"NonMusicCategoryPlaylistsPage_important__YBsHf",footer:"NonMusicCategoryPlaylistsPage_footer__TtkEO",item:"NonMusicCategoryPlaylistsPage_item__4YasT",content:"NonMusicCategoryPlaylistsPage_content__GZb1j"}},54153:function(e){e.exports={root:"NonMusicPage_root__IPKkH",content:"NonMusicPage_content__7_TYy",header:"NonMusicPage_header__dijgk",landing:"NonMusicPage_landing__kGKTh",landing_onlyWizard:"NonMusicPage_landing_onlyWizard__P9nN3",footer:"NonMusicPage_footer__juz5v",error:"NonMusicPage_error__oW0V3"}},37908:function(e,t,o){"use strict";var n,i,a,s;o.d(t,{c:function(){return i},f:function(){return n}}),(a=n||(n={})).ALBUM="album",a.PLAYLIST="playlist",a.ALBUM_CHART_ITEM="album-chart-item",a.BOOKMATE_BANNER_ENTITY="bookmate-banner-entity",(s=i||(i={})).ALBUM_CHART="album-chart",s.EDITORIAL_PLAYLISTS="editorial-playlists",s.CATEGORY="category",s.BOOKMATE_BANNER="bookmate-banner"}}]);