"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9875],{9875:function(e,t,r){r.d(t,{createDesktopContainer:function(){return v}});var i=r(43459),a=r(9052),n=r(93691),o=r(69764),g=r(13427),u=r(48616),s=r(89788),l=r(68085),p=r(24807),c=r(47270),m=r(63198),x=r(90555);class U extends x.J{get token(){return this.storage.get(m.B.Oauth)||void 0}get hasAuthorizationCredentials(){return!!this.storage.get(m.B.Oauth)}loadPassportLogin(){if(window.desktopEvents){var e;null===(e=window.desktopEvents)||void 0===e||e.invoke(c.B.GET_PASSPORT_LOGIN).then(e=>{this.passportLoginFromElectron=e,this.setDataIsLoaded(),this.check()}).catch(()=>{})}}get passportLogin(){return this.passportLoginFromElectron}constructor(e,t,r){super(e,t,r),(0,p._)(this,"passportLoginFromElectron",void 0),this.loadPassportLogin()}}var w=r(31450);class f{onChangeLanguage(){window.location.reload()}}var L=r(36410),h=r(15),d=r(20155),k=r(58486),E=r(56813),y=r(27615),R=r(75402),S=r(6030);async function v(e){let{tld:t}=e,r=(0,S.n)(await (0,w.i)("production"));return new i.s1().registerMany({[R.P0]:(0,i.ri)(()=>new g.j({maxLogLevel:o.B$.DEBUG,secureFields:d.B,disableLogToConsole:!0})),[R.DR]:(0,i.ri)(()=>{let e=(0,h.c)(g.j);return new e({maxLogLevel:o.B$.DEBUG,secureFields:d.B,disableLogToConsole:!0})}),[R.U5]:(0,i.ri)(()=>r),[R.Hz]:(0,i.ri)(()=>new E.E),[R.V0]:(0,i.ri)(()=>new s.JC),[R.Xt]:(0,i.ri)(()=>new s.tg("client ".concat("desktop"),"cookie")),[R.ce]:(0,i.ri)(()=>new s.JC),[R.Ar]:(0,i.ri)(()=>new s.$V),[R.SL]:(0,i.ri)(e=>{let t=e.get(R.V0),r=e.get(R.P0);return new L.h({isBuildTypeDesktop:!0,config:n.w8[y.J],logger:r,enableLanguageChanging:"on"===t.get(m.B.EnableChangingLanguage),changeLanguageHandler:new f,storage:{get:()=>t.get(m.B.SavedUserLanguage),set(e){t.set(m.B.SavedUserLanguage,e)}}})})}).registerMany({[R.pI]:(0,i.d5)(e=>function(){var t,r,i,n,o;let g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=e.get(R.P0),s=e.get(R.Hz),l=new d.D(u,s),{resources:{musicExternalApi:p}}=e.get(R.U5);return g.timeout=p.defaultTimeout,g.hooks={afterResponse:[...(null==g?void 0:null===(t=g.hooks)||void 0===t?void 0:t.afterResponse)||[]],beforeError:[l.beforeErrorHook,...(null==g?void 0:null===(r=g.hooks)||void 0===r?void 0:r.beforeError)||[]],beforeRequest:[...(null==g?void 0:null===(i=g.hooks)||void 0===i?void 0:i.beforeRequest)||[]],afterTimeout:[l.afterTimeoutHook,...(null==g?void 0:null===(n=g.hooks)||void 0===n?void 0:n.afterTimeout)||[]],beforeRetry:[l.beforeRetryHook,...(null==g?void 0:null===(o=g.hooks)||void 0===o?void 0:o.beforeRetry)||[]]},new a.w(g)}),[R.xi]:(0,i.ri)(e=>new U(e.get(R.V0),e.get(R.U5),e.get(R.SL).getLanguage()))}).registerMany({[R.c5]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.Rc(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.accountResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.Eu]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.Vn(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.usersResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.YR]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n,landing:o}=r.musicExternalApi,g=e.get(R.SL).getLanguage(),s=e.get(R.pI),p=s(),c=e.get(R.xi);return new u.Fr(p,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},...o?{landing:{...o,prefixUrl:(0,k.z)(o.prefixUrl,t)}}:{},retryPolicyConfig:a,timeouts:i.landingResource,params:{common:{oauth:c.token,client:(0,l.$)(),language:g}}})}),[R.cG]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.pi(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.landing3Resource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.qV]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.SZ(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.albumsResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.OT]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.TA(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.libraryResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.g5]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.HZ(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.tracksResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.q2]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.O3(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.topResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.n]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.cn(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.artistsResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.Ci]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.tz(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.slidesResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.w5]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.Ud(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.rotorResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.Rt]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.xW(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.searchResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.zQ]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.Po(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.searchResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.lk]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.Bl(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.playlistResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.SR]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.m3(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.playlistsResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.vl]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.mD(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.pinResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.ZO]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.kF(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.metatagsResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.jb]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.cp(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.tagResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.dk]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.l(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.feedResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.X8]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.IW(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.pinsResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.O_]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.E6(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.musicHistoryResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.EN]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.Y7(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.dynamicPagesResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.sD]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.UN(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.chartResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.Ve]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.Ai(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.lyricViewsResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.o]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.hP(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.nonMusicResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})}),[R.uR]:(0,i.ri)(e=>{let{resources:r}=e.get(R.U5),{timeouts:i,retryPolicyConfig:a,gateway:n}=r.musicExternalApi,o=e.get(R.SL).getLanguage(),g=e.get(R.pI),s=g(),p=e.get(R.xi);return new u.BS(s,{gateway:{...n,prefixUrl:(0,k.z)(n.prefixUrl,t)},retryPolicyConfig:a,timeouts:i.donationResource,params:{common:{oauth:p.token,client:(0,l.$)(),language:o}}})})})}}}]);