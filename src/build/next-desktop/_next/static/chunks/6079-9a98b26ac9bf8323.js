(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6079],{26079:function(e,t,a){"use strict";a.d(t,{qU:function(){return eQ},R2:function(){return s},iV:function(){return Z}});var i,r,s,n,l=a(96555),o=a(5674),d=a(48616);let u=e=>({type:d._O.ACTION,data:{title:e.data.title,imageUrl:e.data.imageUrl,action:{deeplink:e.data.action.deeplink,weblink:e.data.action.weblink}}}),c=e=>(0,l.pj)({title:e.title,subtitle:e.subtitle,cover:e.cover,coverType:e.coverType}),m=e=>({type:e.type,data:{value:e.data.value,unit:e.data.unit,unitOverride:e.data.unitOverride,valueSuffix:e.data.valueSuffix,description:e.data.description,isOrderVisible:e.data.isOrderVisible,items:(0,l.pj)(e.data.items.map(c))}}),v=e=>({type:e.type,data:{description:e.data.description,isOrderVisible:e.data.isOrderVisible,items:(0,l.pj)(e.data.items.map(c))}}),_=e=>({type:e.type,data:{description:e.data.description,items:(0,l.pj)(e.data.items.map(c))}}),V=e=>({uri:null==e?void 0:e.uri,color:null==e?void 0:e.color,videoUrl:null==e?void 0:e.videoUrl}),S=e=>({type:e.type,data:{title:e.data.title,subtitle:e.data.subtitle,description:e.data.description,cover:V(e.data.cover),coverType:e.data.coverType,smallRoundCover:e.data.smallRoundCover?V(e.data.smallRoundCover):void 0}}),p=e=>({value:e.value,unit:e.unit,unitOverride:e.unitOverride,valueSuffix:e.valueSuffix}),x=e=>({type:e.type,data:{header:e.data.header,footer:e.data.footer,stats:(0,l.pj)(e.data.stats.map(p))}}),b=e=>({type:e.type,data:{title:e.data.title,subtitle:e.data.subtitle}}),g=e=>{var t,a,i,r,s;let n,l;if((null===(t=e.button)||void 0===t?void 0:t.type)&&e.button.type===d._O.ACTION&&(n=u(e.button)),null===(a=e.content)||void 0===a?void 0:a.type)switch(null===(i=e.content)||void 0===i?void 0:i.type){case d.yC.CHART:l=v(e.content);break;case d.yC.CHART_FAVORITES:l=m(e.content);break;case d.yC.QUIZ:l=_(e.content);break;case d.yC.SINGLE_ENTITY:l=S(e.content);break;case d.yC.STATS:l=x(e.content);break;case d.yC.TEXT:l=b(e.content)}return{id:e.id,background:{bgImageUrl:null!==(r=e.background.bgImageUrl)&&void 0!==r?r:"",videoUrl:null!==(s=e.background.videoUrl)&&void 0!==s?s:"",muted:!e.background.withSound},button:n,content:l}},y=l.V5.model("SlideButtonActionData",{deeplink:l.V5.maybe(l.V5.maybeNull(l.V5.string)),weblink:l.V5.maybe(l.V5.maybeNull(l.V5.string))}),C=l.V5.model("SlideButtonActionData",{title:l.V5.string,imageUrl:l.V5.maybe(l.V5.string),action:y}),h=l.V5.model("SlideButtonAction",{type:l.V5.literal(d._O.ACTION),data:C}),I=l.V5.model("SlideButtonShareData",{title:l.V5.string,titleColor:l.V5.maybe(l.V5.string),bgColor:l.V5.maybe(l.V5.string)}),f=l.V5.model("SlideButtonShare",{type:l.V5.literal(d._O.SHARE),data:I}),j=l.V5.model("SlideButtonWaveDataColors",{average:l.V5.string,waveText:l.V5.string}),N=l.V5.model("SlideButtonWaveData",{title:l.V5.string,station:l.V5.string,seeds:l.V5.array(l.V5.string),imageUrl:l.V5.maybe(l.V5.string),animationUrl:l.V5.maybe(l.V5.string),colors:l.V5.maybe(j)}),T=l.V5.model("SlideButtonWave",{type:l.V5.literal(d._O.WAVE),data:N}),E=l.V5.model("SlideContentCover",{uri:l.V5.maybe(l.V5.string),color:l.V5.maybe(l.V5.string),videoUrl:l.V5.maybe(l.V5.string)}),O=l.V5.model("SlideContentItem",{title:l.V5.string,subtitle:l.V5.maybe(l.V5.string),cover:l.V5.maybe(E),coverType:l.V5.enumeration(Object.values(d.PI))}),A=l.V5.model("SlideContentChartFavoritesData",{value:l.V5.maybe(l.V5.number),unit:l.V5.maybe(l.V5.enumeration(Object.values(d.H7))),unitOverride:l.V5.maybe(l.V5.string),valueSuffix:l.V5.maybe(l.V5.string),description:l.V5.maybe(l.V5.string),isOrderVisible:l.V5.boolean,items:l.V5.array(O)}),R=l.V5.model("SlideContentChartFavorites",{type:l.V5.literal(d.yC.CHART_FAVORITES),data:l.V5.maybe(A)}),k=l.V5.model("SlideContentChartData",{description:l.V5.maybe(l.V5.string),isOrderVisible:l.V5.boolean,items:l.V5.array(O)}),w=l.V5.model("SlideContentChart",{type:l.V5.literal(d.yC.CHART),data:l.V5.maybe(k)}),U=l.V5.model("SlideContentQuizData",{description:l.V5.maybe(l.V5.string),items:l.V5.array(O)}),L=l.V5.model("SlideContentQuiz",{type:l.V5.literal(d.yC.QUIZ),data:l.V5.maybe(U)}),H=l.V5.model("SlideContentSingleEntityData",{title:l.V5.maybe(l.V5.string),subtitle:l.V5.maybe(l.V5.string),description:l.V5.maybe(l.V5.string),cover:E,coverType:l.V5.enumeration(Object.values(d.PI)),smallRoundCover:l.V5.maybe(E)}),z=l.V5.model("SlideContentSingleEntity",{type:l.V5.literal(d.yC.SINGLE_ENTITY),data:l.V5.maybe(H)}),B=l.V5.model("SlideContentStat",{value:l.V5.maybe(l.V5.number),unit:l.V5.maybe(l.V5.enumeration(Object.values(d.H7))),unitOverride:l.V5.maybe(l.V5.string),valueSuffix:l.V5.maybe(l.V5.string)}),G=l.V5.model("SlideContentStatsData",{header:l.V5.maybe(l.V5.string),footer:l.V5.maybe(l.V5.string),stats:l.V5.array(B)}),D=l.V5.model("SlideContentStats",{type:l.V5.literal(d.yC.STATS),data:l.V5.maybe(G)}),P=l.V5.model("SlideContentTextData",{title:l.V5.maybe(l.V5.string),subtitle:l.V5.maybe(l.V5.string)}),F=l.V5.model("SlideContentText",{type:l.V5.literal(d.yC.TEXT),data:l.V5.maybe(P)}),W=l.V5.model("SlideBackground",{bgImageUrl:l.V5.string,videoUrl:l.V5.string,muted:l.V5.boolean}),Q=l.V5.model("Slide",{id:l.V5.string,background:W,button:l.V5.maybe(l.V5.union(h,T,f)),content:l.V5.maybe(l.V5.union(w,R,L,z,F,D))});(i=s||(s={})).USER="user",i.ARTIST="artist";let Z=l.V5.model("Slides",{userSlidesLoadingState:l.V5.enumeration(Object.values(o.Gu)),artistSlidesLoadingState:l.V5.enumeration(Object.values(o.Gu)),consumer:l.V5.maybe(l.V5.enumeration(Object.values(s))),artistId:l.V5.maybe(l.V5.string),activeSlide:l.V5.optional(l.V5.number,0),userItems:l.V5.array(Q),artistItems:l.V5.array(Q)}).actions(e=>{let t={getUserSlides:(0,l.ls)(function*(){let{slidesResource:t,modelActionsLogger:a}=(0,l.dU)(e);if(e.userSlidesLoadingState!==o.Gu.PENDING)try{e.userSlidesLoadingState=o.Gu.PENDING;let a=yield t.getUserSlides();e.userSlidesLoadingState!==o.Gu.IDLE&&(e.userSlidesLoadingState=o.Gu.RESOLVE),a.slides&&(e.consumer=s.USER,e.userItems=(0,l.pj)(a.slides.map(g))),e.userSlidesLoadingState=o.Gu.RESOLVE}catch(t){a.error(t),e.userSlidesLoadingState!==o.Gu.IDLE&&(e.userSlidesLoadingState=o.Gu.REJECT,e.userItems=(0,l.pj)([]))}}),getArtistSlides:(0,l.ls)(function*(t){let{slidesResource:a,modelActionsLogger:i}=(0,l.dU)(e);if(e.artistSlidesLoadingState!==o.Gu.PENDING){e.artistId=t.artistId;try{e.artistSlidesLoadingState=o.Gu.PENDING;let i=yield a.getArtistSlides(t);e.artistSlidesLoadingState!==o.Gu.IDLE&&(e.artistSlidesLoadingState=o.Gu.RESOLVE),i.slides&&(e.consumer=s.ARTIST,e.artistItems=(0,l.pj)(i.slides.map(g))),e.artistSlidesLoadingState=o.Gu.RESOLVE}catch(t){i.error(t),e.userSlidesLoadingState!==o.Gu.IDLE&&(e.artistSlidesLoadingState=o.Gu.REJECT,e.artistItems=(0,l.pj)([]))}}}),setActiveSlide(t){e.activeSlide=t},resetUser(){e.userSlidesLoadingState=o.Gu.IDLE,e.userItems=(0,l.pj)([])},resetArtist(){e.artistSlidesLoadingState=o.Gu.IDLE,e.artistItems=(0,l.pj)([])}};return t});var q=a(8759),J=a(13410),M=a(35338),Y=a(99616),K=a(92318),X=a(25291),$=a(81025),ee=a.n($);let et=(0,Y.memo)(e=>{let{className:t,children:a,background:i,isActive:r}=e,{isVisible:s}=(0,o.NN)(),n=(0,Y.useRef)(null),{state:l,toggleTrue:d,toggleFalse:u}=(0,K.O)(!1);return(0,Y.useEffect)(()=>{!r&&l&&u()},[r,l,u]),(0,Y.useEffect)(()=>{var e,t,a;r&&!s?((null===(e=n.current)||void 0===e?void 0:e.readyState)!==4&&d(),null===(t=n.current)||void 0===t||t.play().then(d).catch(d)):n.current&&(n.current.currentTime=0,null===(a=n.current)||void 0===a||a.pause())},[i.muted,r,d,s]),(0,q.jsxs)("div",{className:(0,M.W)(ee().root,t),children:[(0,q.jsx)("video",{className:ee().media,ref:n,src:i.videoUrl,poster:(0,X.zp)(i.bgImageUrl,800,!0),playsInline:!0,muted:i.muted}),(0,q.jsx)("div",{className:ee().fade}),!!a&&l&&a]})});var ea=a(14581),ei=a(96437),er=a(1918),es=a(44285),en=a(54629),el=a.n(en);let eo=e=>{let{data:t,className:a}=e,i=t.action.weblink||"";return(0,q.jsxs)(es.rU,{href:i,className:(0,M.W)(el().root,a),children:[(0,q.jsx)(ei.Paper,{radius:"xs",className:el().cover,children:(0,q.jsx)(es.BE,{src:t.imageUrl,withAvatarReplace:!0,fit:"contain",className:el().image,size:100})}),(0,q.jsx)(er.Caption,{variant:"span",type:"controls",size:"l",weight:"medium",className:el().text,lineClamp:1,children:t.title}),(0,q.jsx)(ea.J,{variant:"arrowRight",size:"xs",className:el().icon})]})},ed=e=>{let{button:t,className:a}=e;switch(t.type){case d._O.ACTION:if(t.data.action.weblink)return(0,q.jsx)(eo,{data:t.data,className:a});return null;case d._O.SHARE:case d._O.WAVE:return null}};var eu=a(23827),ec=a.n(eu),em=a(33423),ev=a(65244),e_=a(50727),eV=a(13509),eS=a.n(eV);(r=n||(n={})).TRACKS="tracks",r.ARTISTS="artists",r.QUIZ="quiz";let ep=(0,em.Pi)(e=>{var t;let{data:a,index:i,variant:r,isOrderVisible:s,isFavorite:l=!1}=e,o=(0,e_.oc)(),{formatNumber:u}=(0,ev.Z)(),c=(0,Y.useMemo)(()=>{let e=r===n.ARTISTS?"".concat(-8*i,"px"):0;return{"--slide-final-translate":e,"--slide-clip-delay":"".concat(i+1.6,"s"),animationDelay:"".concat(i,"s")}},[i,r]),m=(0,Y.useCallback)(()=>{r===n.QUIZ&&o.slideNext()},[o,r]),v=(0,Y.useMemo)(()=>a.subtitle&&Number.parseInt(a.subtitle,10)?u(Number.parseInt(a.subtitle,10)):a.subtitle,[a.subtitle,u]);return(0,q.jsxs)("li",{className:(0,M.W)(eS().root,eS()["root_variant_".concat(r)]),style:c,onClick:m,tabIndex:0,children:[s&&(0,q.jsx)(er.Heading,{variant:"h3",size:"xl",weight:"black",className:eS().order,children:i+1}),(0,q.jsx)(ei.Paper,{radius:a.coverType===d.PI.CIRCLE?"round":"xs",className:(0,M.W)(eS().cover,eS()["cover_variant_".concat(r)]),children:(0,q.jsx)(es.BE,{src:null===(t=a.cover)||void 0===t?void 0:t.uri,withAvatarReplace:!0,fit:"contain",className:eS().image,size:100})}),(0,q.jsxs)("div",{className:eS().meta,children:[a.title&&(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",lineClamp:1,className:(0,M.W)(eS().title,{[eS().title_favorite]:l}),children:a.title}),a.subtitle&&(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",lineClamp:1,className:(0,M.W)(eS().subtitle,{[eS().subtitle_favorite]:l}),children:v})]}),r===n.QUIZ&&(0,q.jsx)(ea.J,{variant:"arrowRight",size:"xs",className:eS().icon})]})}),ex=e=>{let{items:t,isOrderVisible:a,variant:i,isFavorite:r}=e,s=(0,Y.useMemo)(()=>{if(i===n.QUIZ)return i;let e=t.every(e=>e.coverType===d.PI.CIRCLE);return e?n.ARTISTS:n.TRACKS},[t,i]);return(0,q.jsx)("ol",{className:(0,M.W)(ec().root,ec()["root_variant_".concat(s)]),tabIndex:-1,children:t.map((e,t)=>(0,q.jsx)(ep,{data:e,index:t,variant:s,isOrderVisible:a,isFavorite:r},e.title))})};var eb=a(33610),eg=a.n(eb);let ey=e=>{let{data:t}=e;return(0,q.jsxs)("div",{className:eg().root,children:[t.description&&(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",className:eg().text,children:t.description}),(0,q.jsx)(ex,{items:t.items,isOrderVisible:t.isOrderVisible})]})};var eC=a(5271),eh=a(28036),eI=a(60343),ef=a.n(eI);let ej=e=>{let{data:t,index:a}=e,i=(0,Y.useRef)(null),{formatMessage:r,formatNumber:s}=(0,ev.Z)(),{state:n,toggleFalse:l}=(0,K.O)(!0),o=(0,Y.useMemo)(()=>{switch(t.unit){case d.H7.TEXT:if(t.unitOverride)return t.unitOverride;break;case d.H7.MINUTES:return r({id:"slides-stats.minutes"},{value:t.value});case d.H7.HOURS:return r({id:"slides-stats.hours"},{value:t.value});case d.H7.MINUTES_WITH_MUSIC:return r({id:"slides-stats.minutes-with-music"},{value:t.value});case d.H7.LIKES:return r({id:"slides-stats.likes"},{value:t.value});case d.H7.BOOKS:return r({id:"slides-stats.books"},{value:t.value});case d.H7.MINUTES_WITH_BOOKS:return r({id:"slides-stats.minutes-with-books"},{value:t.value});case d.H7.TRACKS:return r({id:"slides-stats.tracks"},{value:t.value});case d.H7.LISTENERS:return r({id:"slides-stats.listeners"},{value:t.value});case d.H7.LISTENINGS:return r({id:"slides-stats.listenings"},{value:t.value});case d.H7.NEW_TRACKS:return r({id:"slides-stats.new-tracks"},{value:t.value});case d.H7.SUPERFANS:return r({id:"slides-stats.superfans"},{value:t.value})}return""},[t.unit,t.unitOverride,t.value,r]),u=(0,Y.useCallback)(e=>e>=1e4?s(e):String(e),[s]);(0,Y.useEffect)(()=>{if(i.current){let e=new eC.I(i.current,Number(t.value),{startVal:1,formattingFn:u});e.error||(e.start(),l())}},[t.value,u,l]);let c=(0,Y.useMemo)(()=>{if(a)return{opacity:1-.2*a}},[a]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(eh.y,{children:[t.value," ",t.valueSuffix," ",o]}),(0,q.jsxs)("div",{className:ef().root,style:c,"aria-hidden":!0,children:[(0,q.jsxs)("div",{className:ef().valueContainer,children:[n&&(0,q.jsx)(er.Heading,{variant:"h3",size:"xxxxl",className:ef().value,children:"1"}),(0,q.jsx)(er.Heading,{variant:"h3",size:"xxxxl",tabIndex:-1,ref:i,"aria-hidden":!0,className:ef().value}),t.valueSuffix&&(0,q.jsx)(er.Heading,{variant:"h3",size:"xxxxl",className:ef().value,children:t.valueSuffix})]}),(0,q.jsx)(er.Heading,{variant:"h3",size:"xl",weight:"black",className:ef().unit,lineClamp:3,children:o})]})]})};var eN=a(89790),eT=a.n(eN);let eE=e=>{let{data:t}=e,a=(0,Y.useMemo)(()=>({value:t.value,valueSuffix:t.valueSuffix,unit:t.unit,unitOverride:t.unitOverride}),[t.unit,t.unitOverride,t.value,t.valueSuffix]);return(0,q.jsxs)("div",{className:eT().root,children:[(0,q.jsx)(ej,{data:a}),(0,q.jsx)(ex,{items:t.items,isOrderVisible:t.isOrderVisible,isFavorite:!0})]})};var eO=a(35895),eA=a.n(eO);let eR=e=>{let{data:t}=e;return(0,q.jsxs)("div",{className:eA().root,children:[t.description&&(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",className:eA().text,children:t.description}),(0,q.jsx)(ex,{items:t.items,variant:n.QUIZ,isOrderVisible:!1})]})};var ek=a(82063),ew=a.n(ek);let eU=e=>{var t,a;let{data:i}=e;return(0,q.jsxs)("div",{className:ew().root,children:[i.description&&(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",className:ew().description,children:i.description}),(0,q.jsx)(ei.Paper,{radius:i.coverType===d.PI.CIRCLE?"round":"m",className:ew().cover,children:(0,q.jsx)(es.BE,{src:i.cover.uri,withAvatarReplace:!0,fit:"contain",className:ew().image,size:300})}),(0,q.jsxs)("div",{className:(0,M.W)(ew().meta,{[ew().meta_withCover]:!!(null===(t=i.smallRoundCover)||void 0===t?void 0:t.uri)}),children:[(null===(a=i.smallRoundCover)||void 0===a?void 0:a.uri)&&(0,q.jsx)(ei.Paper,{radius:"round",className:ew().smallRoundCover,children:(0,q.jsx)(es.BE,{src:i.smallRoundCover.uri,withAvatarReplace:!0,fit:"contain",size:100,className:ew().image})}),i.subtitle&&(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",className:ew().subtitle,lineClamp:2,children:i.subtitle}),i.title&&(0,q.jsx)(er.Heading,{variant:"h3",size:"xl",weight:"bold",className:ew().title,lineClamp:3,children:i.title})]})]})};var eL=a(94441),eH=a.n(eL);let ez=e=>{let{data:t}=e;return(0,q.jsxs)("div",{className:eH().root,children:[(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",className:eH().text,children:t.header}),t.stats.map((e,t)=>(0,q.jsx)(ej,{data:e,index:t},e.value)),(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",className:eH().text,children:t.footer})]})};var eB=a(84065),eG=a.n(eB);let eD=e=>{let{data:t}=e;return(0,q.jsxs)("div",{className:eG().root,children:[(0,q.jsx)(er.Heading,{variant:"h2",size:"xl",weight:"black",className:(0,M.W)(eG().title,eG().text),children:t.title}),(0,q.jsx)(er.Caption,{variant:"span",type:"text",size:"l",weight:"medium",className:(0,M.W)(eG().subtitle,eG().text),children:t.subtitle})]})},eP=e=>{let{content:t}=e;if(t.data)switch(t.type){case d.yC.TEXT:return(0,q.jsx)(eD,{data:t.data});case d.yC.STATS:return(0,q.jsx)(ez,{data:t.data});case d.yC.CHART:return(0,q.jsx)(ey,{data:t.data});case d.yC.CHART_FAVORITES:return(0,q.jsx)(eE,{data:t.data});case d.yC.SINGLE_ENTITY:return(0,q.jsx)(eU,{data:t.data});case d.yC.QUIZ:return(0,q.jsx)(eR,{data:t.data})}return null};var eF=a(79178),eW=a.n(eF);let eQ=e=>{let{slide:t,isActive:a}=e;return(0,q.jsx)("div",{className:eW().root,children:(0,q.jsxs)(et,{isActive:a,background:t.background,children:[(0,q.jsx)("div",{className:eW().logo,children:(0,q.jsx)(J.T,{alignIcon:"center",lang:"ru"})}),t.content&&(0,q.jsx)("div",{className:eW().content,children:(0,q.jsx)(eP,{content:t.content})}),t.button&&(0,q.jsx)(ed,{button:t.button,className:eW().button})]})})}},81025:function(e){e.exports={root:"Background_root__s7ccu",fade:"Background_fade__Sn4SL",media:"Background_media__8DaeZ"}},54629:function(e){e.exports={root:"ActionButton_root__ltmGg",cover:"ActionButton_cover__4AmUi",image:"ActionButton_image__PAxtV",text:"ActionButton_text__fTdsF",icon:"ActionButton_icon__QbOGp"}},79178:function(e){e.exports={content:"SlideCard_content__7Y6aU",root:"SlideCard_root__RSnvj",fade:"SlideCard_fade__2HpC6",logo:"SlideCard_logo__ocv3o",button:"SlideCard_button__EYX_G"}},23827:function(e){e.exports={root:"ChartBlock_root__GQF6w",root_variant_quiz:"ChartBlock_root_variant_quiz__pxYeh",root_variant_tracks:"ChartBlock_root_variant_tracks__phfEV"}},13509:function(e){e.exports={root:"ChartItem_root__nAl8B",animation:"ChartItem_animation__P8XVq",root_variant_quiz:"ChartItem_root_variant_quiz__FdI_P",cover:"ChartItem_cover__jybex",order:"ChartItem_order__rTmAw",image:"ChartItem_image__enYFm",meta:"ChartItem_meta__apT_y",title:"ChartItem_title__SJHDw",title_favorite:"ChartItem_title_favorite__EinDd",subtitle:"ChartItem_subtitle__32RGJ",subtitle_favorite:"ChartItem_subtitle_favorite__PiJiF",icon:"ChartItem_icon__YY0I6"}},33610:function(e){e.exports={root:"ChartContent_root__MFONP",text:"ChartContent_text__cB18f"}},89790:function(e){e.exports={root:"ChartFavoriteContent_root__ksE_w"}},35895:function(e){e.exports={root:"QuizContent_root__qAqok",text:"QuizContent_text__OzWcS"}},82063:function(e){e.exports={root:"SingleEntityContent_root__N2vvp",description:"SingleEntityContent_description__3pg2A",cover:"SingleEntityContent_cover__zeDqH",meta:"SingleEntityContent_meta__XxJqA",meta_withCover:"SingleEntityContent_meta_withCover__Bp0Tx",smallRoundCover:"SingleEntityContent_smallRoundCover__jicWf",image:"SingleEntityContent_image__P6nK2",subtitle:"SingleEntityContent_subtitle__KuJyA",title:"SingleEntityContent_title__OPb6I"}},60343:function(e){e.exports={root:"StatItem_root__L7Uw0",valueContainer:"StatItem_valueContainer__HlYQZ",value:"StatItem_value__IkJBB",unit:"StatItem_unit__cO46p"}},94441:function(e){e.exports={root:"StatsContent_root__yJVzS",text:"StatsContent_text__l2xi_"}},84065:function(e){e.exports={root:"TextContent_root__A4Qmc",title:"TextContent_title__UyEls",subtitle:"TextContent_subtitle__Xe_FH",text:"TextContent_text__xsfVD"}}}]);