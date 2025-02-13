"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6982,6073,9717,3347,156],{66073:function(e,t,n){n.d(t,{config:function(){return c}});var o=n(16763),a=n(25552),r=n(21535);let i=()=>({rumId:"ru.music.frontend.desktop",project:"music.frontend.desktop",service:"frontend-desktop",platform:"desktop"}),s=()=>({project:"music.frontend.desktop",platform:"desktop"}),c=()=>{var e,t;return{client:"YandexMusicWeb/1.0",dev:{panel:window.IS_DEVTOOLS_ENABLED??!1,allowOverwriteExperiments:!0},logger:{uaDisabled:e=!!r.env.SERVER_UNIFIED_AGENT_DISABLED,uaServerAddress:null!==(t=r.env.SERVER_UNIFIED_AGENT_ADDRESS)&&void 0!==t?t:"http://localhost:12344",errorBooster:{...s(),page:"window.location.pathname",version:r.env.APP_VERSION||"",environment:"production",unhandledRejection:!0,uncaughtException:!0,resourceFails:!0}},oauthCredentials:{host:"https://oauth.yandex.".concat(a.M),clientId:"97fe03033fa34407ac9bcf91d5afed5b"},tvm:{tvmtoolAuthToken:r.env.TVMTOOL_LOCAL_AUTHTOKEN,self:"music_test",destinations:["blackbox"],host:"http://localhost:8001",enabled:!1},rumSettings:{...i(),page:"window.location.pathname",heroElement:"body",version:r.env.APP_VERSION||"",environment:"production"},passportCredentials:{host:"https://passport.yandex.".concat(a.M),origin:"music_desktop"},blackbox:{host:"http://blackbox.envoy.localhost:9080",enabled:!1},payment:{environment:"testing"},i18n:{cookieExpirationDays:365},ynisonConnectionConfig:{ynisonHost:"ynison.music.yandex.ru",redirectorPath:"/redirector.YnisonRedirectService/GetRedirectToYnison",hubConnectioPath:"/ynison_state.YnisonStateService/PutYnisonState",reconnectTimeout:2e3,reconnectAttempts:2},player:{configVariablesMainPlayback:{checkForLoadWindowSize:1,loadWindowSize:5,mediaSourceTtlMs:216e5,mediaElementErrorReloadCount:2,windowSize:30,setupQueueWindowSize:80},configVariablesTrailerPlayback:{mediaElementErrorReloadCount:2,windowSize:30,setupQueueWindowSize:80,storePlaysProgressIntervalMs:5e3},hlsErrorRetryLimit:2},downloadDesktop:{url:"https://music.yandex.".concat(a.M,"/download/?autodownload=1")},iframe:{entityBaseUrl:"https://music.yandex.".concat(a.M)},redirects:{KZ:{fromTLD:[o.l.RU],toTLD:o.l.KZ}}}}},39717:function(e,t,n){n.d(t,{c:function(){return o}});let o={statusCodes:{408:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},429:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},500:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},502:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},503:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},504:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},NON_HTTP_ERROR:{retryPolicy:"constant-backoff",attempts:[1e3,1e3]},TIMEOUT:{retryPolicy:"constant-backoff",attempts:[500]}},totalRequestsLimit:3}},56982:function(e,t,n){n.d(t,{config:function(){return f}});var o=n(39720),a=n(4520),r=n(65470),i=n(64955),s=n(25552),c=n(66073),l=n(39717),d=n(13347),u=n(70156),p=n(21535);let f=()=>{let{LOCAL_PROD_BUILD:e}=p.env,t=e?"https://api.music.qa.yandex.net":"http://music-backend-music-api-gateway.envoy.localhost:9080",n="https://api.music.qa.yandex.".concat(s.M);return(0,o.Z)((0,c.config)(),{resources:{musicExternalApi:{gateway:{prefixUrl:(0,u.s)(t)},externalGateway:{prefixUrl:(0,u.s)(n)},retryPolicyConfig:l.c,defaultTimeout:r.ys,timeouts:r.mZ}},player:{overembed:!1,secretKey:(0,i.S)(),externalDomain:"localhost.music.yandex.ru",gateway:{prefixUrl:(0,u.s)(n)}},dev:{panel:!0,allowOverwriteExperiments:!0},passportCredentials:{host:"https://passport.yandex.".concat(s.M),origin:"music"},blackbox:{...(0,a.sw)(e)?{host:"http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox"}:{},enabled:!0},tvm:{enabled:(0,a.sw)(e)},oldWebHost:"music.qa.yandex.".concat(s.M),afisha:{clientId:(0,d.$)(),host:"https://widget.afisha.yandex.ru"},features:{nonMusic:!0},iframe:{entityBaseUrl:"https://music.qa.yandex.".concat(s.M)}})}},13347:function(e,t,n){n.d(t,{$:function(){return s}});var o=n(54270),a=n(95906),r=n(71495);let i={WINDOWS:"0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",MACOS:"05c45ae8-b869-4ec1-848c-4b314fbadc17",LINUX:"d2bcdb71-90ac-493b-b68f-024321954a5d",WEB:"b200fd55-5a52-4fa2-b5db-d163e986a61d"},s=()=>{switch((0,a.y)((0,o.X)())){case r.B.WINDOWS:return i.WINDOWS;case r.B.MACOS:return i.MACOS;case r.B.LINUX:return i.LINUX}return i.WEB}},70156:function(e,t,n){n.d(t,{s:function(){return a}});var o=n(21535);let a=e=>{if(o.env.NEXT_PUBLIC_USE_BFF){var t;let e=null!==(t=o.env.NEXT_PUBLIC_BFF_HOST)&&void 0!==t?t:"";return"".concat(e,"/api")}return e}}}]);
