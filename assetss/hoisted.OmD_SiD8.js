import{b as Ps,c as Rs,s as _s,g as Ms}from"./setting-utils.3AT7fowt.js";const gt=(t,e)=>{const{o:n,i:o,u:s}=t;let r,c=n;const i=(t,e)=>{const n=c,i=t,l=e||(o?!o(n,i):n!==i);return(l||s)&&(c=i,r=n),[c,l,r]};return[e?t=>i(e(c,r),t):i,t=>[c,!!t,r]]},jn=typeof window<"u"&&typeof document<"u",pt=jn?window:{},pe=Math.max,zs=Math.min,Ke=Math.round,ge=Math.abs,wn=Math.sign,Un=pt.cancelAnimationFrame,qn=pt.requestAnimationFrame,ye=pt.setTimeout,je=pt.clearTimeout,Ce=t=>typeof pt[t]<"u"?pt[t]:void 0,Bs=Ce("MutationObserver"),Sn=Ce("IntersectionObserver"),ve=Ce("ResizeObserver"),Ue=Ce("ScrollTimeline"),Wn=jn&&Node.ELEMENT_NODE,{toString:Fs,hasOwnProperty:Be}=Object.prototype,Ns=/^\[object (.+)\]$/,oe=t=>void 0===t,Oe=t=>null===t,Vs=t=>oe(t)||Oe(t)?`${t}`:Fs.call(t).replace(Ns,"$1").toLowerCase(),At=t=>"number"==typeof t,$e=t=>"string"==typeof t,Xn=t=>"boolean"==typeof t,wt=t=>"function"==typeof t,Ht=t=>Array.isArray(t),ne=t=>"object"==typeof t&&!Ht(t)&&!Oe(t),Ae=t=>{const e=!!t&&t.length,n=At(e)&&e>-1&&e%1==0;return!!(Ht(t)||!wt(t)&&n)&&(!(e>0&&ne(t))||e-1 in t)},be=t=>{if(!t||!ne(t)||"object"!==Vs(t))return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Be.call(t,n),c=s&&Be.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return oe(e)||Be.call(t,e)},we=t=>{const e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===Wn)},He=t=>{const e=Element;return!!t&&(e?t instanceof e:t.nodeType===Wn)};function W(t,e){if(Ae(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&W(Object.keys(t),(n=>e(t[n],n,t)));return t}const Le=(t,e)=>t.indexOf(e)>=0,Lt=(t,e)=>t.concat(e),ot=(t,e,n)=>(!$e(e)&&Ae(e)?Array.prototype.push.apply(t,e):t.push(e),t),_t=t=>Array.from(t||[]),Yn=t=>Ht(t)?t:[t],qe=t=>!!t&&!t.length,xn=t=>_t(new Set(t)),St=(t,e,n)=>{W(t,(t=>t&&t.apply(void 0,e||[]))),!n&&(t.length=0)},Zn="paddingTop",Gn="paddingRight",Jn="paddingLeft",Qn="paddingBottom",ts="marginLeft",es="marginRight",ns="marginBottom",Ks="overflowX",js="overflowY",qt="width",Wt="height",Dt="visible",zt="hidden",Xt="scroll",Us=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},Te=(t,e,n,o)=>{if(t&&e){let o=!0;return W(n,(n=>{t[n]!==e[n]&&(o=!1)})),o}return!1},ss=(t,e)=>Te(t,e,["w","h"]),me=(t,e)=>Te(t,e,["x","y"]),qs=(t,e)=>Te(t,e,["t","r","b","l"]),Pt=()=>{},D=(t,...e)=>t.bind(0,...e),Bt=t=>{let e;const n=t?ye:qn,o=t?je:Un;return[s=>{o(e),e=n(s,wt(t)?t():t)},()=>o(e)]},os=(t,e)=>{let n,o,s,r=Pt;const{_:c,p:i,v:l}=e||{},a=function(e){r(),je(n),n=o=void 0,r=Pt,t.apply(this,e)},d=t=>l&&o?l(o,t):t,u=()=>{r!==Pt&&a(d(s)||s)},p=function(){const t=_t(arguments),e=wt(c)?c():c;if(At(e)&&e>=0){const c=wt(i)?i():i,l=At(c)&&c>=0,p=e>0?ye:qn,y=e>0?je:Un,f=d(t)||t,h=a.bind(0,f);r();const m=p(h,e);r=()=>y(m),l&&!n&&(n=ye(u,c)),o=s=f}else a(t)};return p.S=u,p},cs=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Tt=t=>t?Object.keys(t):[],U=(t,e,n,o,s,r,c)=>{const i=[e,n,o,s,r,c];return("object"!=typeof t||Oe(t))&&!wt(t)&&(t={}),W(i,(e=>{W(e,((n,o)=>{const s=e[o];if(t===s)return!0;const r=Ht(s);if(s&&be(s)){const e=t[o];let n=e;r&&!Ht(e)?n=[]:!r&&!be(e)&&(n={}),t[o]=U(n,s)}else t[o]=r?s.slice():s}))})),t},rs=(t,e)=>W(U({},t),((t,e,n)=>{void 0===t?delete n[e]:t&&be(t)&&(n[e]=rs(t))})),sn=t=>{for(const e in t)return!1;return!0},We=(t,e,n)=>pe(t,zs(e,n)),Ft=t=>_t(new Set((Ht(t)?t:(t||"").split(" ")).filter((t=>t)))),ke=(t,e)=>t&&t.getAttribute(e),En=(t,e)=>t&&t.hasAttribute(e),Ot=(t,e,n)=>{W(Ft(e),(e=>{t&&t.setAttribute(e,String(n||""))}))},xt=(t,e)=>{W(Ft(e),(e=>t&&t.removeAttribute(e)))},Ie=(t,e)=>{const n=Ft(ke(t,e)),o=D(Ot,t,e),s=(t,e)=>{const o=new Set(n);return W(Ft(t),(t=>{o[e](t)})),_t(o).join(" ")};return{m:t=>o(s(t,"delete")),O:t=>o(s(t,"add")),$:t=>{const e=Ft(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},ls=(t,e,n)=>(Ie(t,e).m(n),D(on,t,e,n)),on=(t,e,n)=>(Ie(t,e).O(n),D(ls,t,e,n)),Xe=(t,e,n,o)=>(o?on:ls)(t,e,n),Ws=(t,e,n)=>Ie(t,e).$(n),is=t=>Ie(t,"class"),as=(t,e)=>{is(t).m(e)},cn=(t,e)=>(is(t).O(e),D(as,t,e)),us=(t,e)=>{const n=[],o=e?He(e)&&e:document;return o?ot(n,o.querySelectorAll(t)):n},Xs=(t,e)=>{const n=e?He(e)&&e:document;return n?n.querySelector(t):null},Se=(t,e)=>!!He(t)&&t.matches(e),ds=t=>Se(t,"body"),Ye=t=>t?_t(t.childNodes):[],Yt=t=>t&&t.parentElement,Kt=(t,e)=>He(t)&&t.closest(e),Ze=t=>document.activeElement,Ys=(t,e,n)=>{const o=Kt(t,e),s=t&&Xs(n,o),r=Kt(s,e)===o;return!(!o||!s)&&(o===t||s===t||r&&Kt(Kt(t,n),e)!==o)},Rt=t=>{if(Ae(t))W(_t(t),(t=>Rt(t)));else if(t){const e=Yt(t);e&&e.removeChild(t)}},fs=(t,e,n)=>{if(n&&t){let o,s=e;return Ae(n)?(o=document.createDocumentFragment(),W(n,(t=>{t===s&&(s=t.previousSibling),o.appendChild(t)}))):o=n,e&&(s?s!==e&&(s=s.nextSibling):s=t.firstChild),t.insertBefore(o,s||null),()=>Rt(n)}return Pt},yt=(t,e)=>fs(t,null,e),Cn=(t,e)=>fs(Yt(t),t&&t.nextSibling,e),jt=t=>{const e=document.createElement("div");return Ot(e,"class",t),e},ps=t=>{const e=jt();return e.innerHTML=t.trim(),W(Ye(e),(t=>Rt(t)))},Zs=/^--/,On=(t,e)=>t.getPropertyValue(e)||t[e]||"",rn=t=>{const e=t||0;return isFinite(e)?e:0},de=t=>rn(parseFloat(t||"")),$n=t=>`${(100*rn(t)).toFixed(3)}%`,Ge=t=>`${rn(t)}px`;function se(t,e){t&&e&&W(e,((e,n)=>{try{const o=t.style,s=At(e)?Ge(e):(e||"")+"";Zs.test(n)?o.setProperty(n,s):o[n]=s}catch{}}))}function Nt(t,e,n){const o=$e(e);let s=o?"":{};if(t){const r=pt.getComputedStyle(t,n)||t.style;s=o?On(r,e):_t(e).reduce(((t,e)=>(t[e]=On(r,e),t)),s)}return s}const An=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,i=`${o}bottom${s}`,l=`${o}left${s}`,a=Nt(t,[r,c,i,l]);return{t:de(a[r]),r:de(a[c]),b:de(a[i]),l:de(a[l])}},Fe=(t,e)=>"translate"+(ne(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`),Gs=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),Js={w:0,h:0},De=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:Js,Qs=t=>De("inner",t||pt),te=D(De,"offset"),ms=D(De,"client"),xe=D(De,"scroll"),ln=t=>{const e=parseFloat(Nt(t,qt))||0,n=parseFloat(Nt(t,Wt))||0;return{w:e-Ke(e),h:n-Ke(n)}},ee=t=>t.getBoundingClientRect(),to=t=>!!t&&Gs(t),Je=t=>!(!t||!t[Wt]&&!t[qt]),hs=(t,e)=>{const n=Je(t);return!Je(e)&&n},Hn=(t,e,n,o)=>{W(Ft(e),(e=>{t&&t.removeEventListener(e,n,o)}))},et=(t,e,n,o)=>{var s;const r=null==(s=o&&o.C)||s,c=o&&o.H||!1,i=o&&o.A||!1,l={passive:r,capture:c};return D(St,Ft(e).map((e=>{const o=i?s=>{Hn(t,e,o,c),n&&n(s)}:n;return t&&t.addEventListener(e,o,l),D(Hn,t,e,o,c)})))},an=t=>t.stopPropagation(),Qe=t=>t.preventDefault(),eo=t=>an(t)||Qe(t),$t=(t,e)=>{const{x:n,y:o}=At(e)?{x:e,y:e}:e||{};At(n)&&(t.scrollLeft=n),At(o)&&(t.scrollTop=o)},bt=t=>({x:t.scrollLeft,y:t.scrollTop}),gs=()=>({I:{x:0,y:0},T:{x:0,y:0}}),no=(t,e)=>{const{I:n,T:o}=t,{w:s,h:r}=e,c=(t,e,n)=>{let o=wn(t)*n,s=wn(e)*n;if(o===s){const n=ge(t),r=ge(e);s=n>r?0:s,o=n<r?0:o}return[o+0,s+0]},[i,l]=c(n.x,o.x,s),[a,d]=c(n.y,o.y,r);return{I:{x:i,y:a},T:{x:l,y:d}}},Ln=({I:t,T:e})=>{const n=(t,e)=>0===t&&t<=e;return{x:n(t.x,e.x),y:n(t.y,e.y)}},Tn=({I:t,T:e},n)=>{const o=(t,e,n)=>We(0,1,(t-n)/(t-e)||0);return{x:o(t.x,e.x,n.x),y:o(t.y,e.y,n.y)}},kn=(t,e)=>{W(Yn(e),t)},tn=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);kn((t=>{o&&o[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},o=(t,s)=>{if($e(t)){const o=e.get(t)||new Set;return e.set(t,o),kn((t=>{wt(t)&&o.add(t)}),s),D(n,t,s)}Xn(s)&&s&&n();const r=Tt(t),c=[];return W(r,(e=>{const n=t[e];n&&ot(c,o(e,n))})),D(St,c)};return o(t||{}),[o,n,(t,n)=>{W(_t(e.get(t)),(t=>{n&&!qe(n)?t.apply(0,n):t()}))}]},In=t=>JSON.stringify(t,((t,e)=>{if(wt(e))throw 0;return e})),Dn=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&cs(t,e)?t[e]:void 0),t):void 0,so={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},ys=(t,e)=>{const n={};return W(Lt(Tt(e),Tt(t)),(o=>{const s=t[o],r=e[o];if(ne(s)&&ne(r))U(n[o]={},ys(s,r)),sn(n[o])&&delete n[o];else if(cs(e,o)&&r!==s){let t=!0;if(Ht(s)||Ht(r))try{In(s)===In(r)&&(t=!1)}catch{}t&&(n[o]=r)}})),n},Pn=(t,e,n)=>o=>[Dn(t,o),n||void 0!==Dn(e,o)],Zt="data-overlayscrollbars",he="os-environment",fe=`${he}-scrollbar-hidden`,Ne=`${Zt}-initialize`,Rn="noClipping",_n=`${Zt}-body`,Ut=Zt,oo="host",It=`${Zt}-viewport`,co=Ks,ro=js,lo="arrange",un="measuring",vs="scrollbarHidden",io="scrollbarPressed",ao="noContent",en=`${Zt}-padding`,Mn=`${Zt}-content`,dn="os-size-observer",uo=`${dn}-appear`,fo=`${dn}-listener`,po="os-trinsic-observer",mo="os-theme-none",vt="os-scrollbar",ho=`${vt}-rtl`,go=`${vt}-horizontal`,yo=`${vt}-vertical`,bs=`${vt}-track`,fn=`${vt}-handle`,vo=`${vt}-visible`,bo=`${vt}-cornerless`,zn=`${vt}-interaction`,Bn=`${vt}-unusable`,nn=`${vt}-auto-hide`,Fn=`${nn}-hidden`,Nn=`${vt}-wheel`,wo=`${bs}-interactive`,So=`${fn}-interactive`;let Ve;const xo=()=>{const t=(t,e,n)=>{yt(document.body,t),yt(document.body,t);const o=ms(t),s=te(t),r=ln(e);return n&&Rt(t),{x:s.h-o.h+r.h,y:s.w-o.w+r.w}},e=ps(`<div class="${he}"><div></div><style>${`.${he}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${he} div{width:200%;height:200%;margin:10px 0}.${fe}{scrollbar-width:none!important}.${fe}::-webkit-scrollbar,.${fe}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0],n=e.firstChild,[o,,s]=tn(),[r,c]=gt({o:t(e,n),i:me},D(t,e,n,!0)),[i]=c(),l=(t=>{let e=!1;const n=cn(t,fe);try{e="none"===Nt(t,"scrollbar-width")||"none"===Nt(t,"display","::-webkit-scrollbar")}catch{}return n(),e})(e),a={x:0===i.x,y:0===i.y},d={elements:{host:null,padding:!l,viewport:t=>l&&ds(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},u=U({},so),p=D(U,{},u),y=D(U,{},d),f={D:i,k:a,R:l,M:!!Ue,V:D(o,"r"),L:y,P:t=>U(d,t)&&y(),U:p,N:t=>U(u,t)&&p(),j:U({},d),q:U({},u)};if(xt(e,"style"),Rt(e),et(pt,"resize",(()=>{s("r",[])})),wt(pt.matchMedia)&&!l&&(!a.x||!a.y)){const t=e=>{const n=pt.matchMedia(`(resolution: ${pt.devicePixelRatio}dppx)`);et(n,"change",(()=>{e(),t(e)}),{A:!0})};t((()=>{const[t,e]=r();U(f.D,t),s("r",[e])}))}return f},Et=()=>(Ve||(Ve=xo()),Ve),ws=(t,e)=>wt(e)?e.apply(0,t):e,Eo=(t,e,n,o)=>{const s=oe(o)?n:o;return ws(t,s)||e.apply(0,t)},Ss=(t,e,n,o)=>{const s=oe(o)?n:o,r=ws(t,s);return!!r&&(we(r)?r:e.apply(0,t))},Co=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{k:s,R:r,L:c}=Et(),{nativeScrollbarsOverlaid:i,body:l}=c().cancel,a=n??i,d=oe(o)?l:o,u=(s.x||s.y)&&a,p=t&&(Oe(d)?!r:d);return!!u||!!p},pn=new WeakMap,Oo=(t,e)=>{pn.set(t,e)},$o=t=>{pn.delete(t)},xs=t=>pn.get(t),Ao=(t,e,n)=>{let o=!1;const s=!!n&&new WeakMap,r=r=>{if(s&&n){W(n.map((e=>{const[n,o]=e||[];return[o&&n?(r||us)(n,t):[],o]})),(n=>W(n[0],(r=>{const c=n[1],i=s.get(r)||[];if(t.contains(r)&&c){const t=et(r,c,(n=>{o?(t(),s.delete(r)):e(n)}));s.set(r,ot(i,t))}else St(i),s.delete(r)}))))}};return r(),[()=>{o=!0},r]},Vn=(t,e,n,o)=>{let s=!1;const{F:r,B:c,X:i,Y:l,W:a,J:d}=o||{},u=os((()=>s&&n(!0)),{_:33,p:99}),[p,y]=Ao(t,u,i),f=c||[],h=Lt(r||[],f),m=(s,r)=>{if(!qe(r)){const c=a||Pt,i=d||Pt,u=[],p=[];let h=!1,m=!1;if(W(r,(n=>{const{attributeName:s,target:r,type:a,oldValue:d,addedNodes:y,removedNodes:v}=n,b="attributes"===a,g="childList"===a,w=t===r,x=b&&s,$=x&&ke(r,s||"")||null,D=x&&d!==$,S=Le(f,s)&&D;if(e&&(g||!w)){const e=b&&D,a=e&&l&&Se(r,l),p=(a?!c(r,s,d,$):!b||e)&&!i(n,!!a,t,o);W(y,(t=>ot(u,t))),W(v,(t=>ot(u,t))),m=m||p}!e&&w&&D&&!c(r,s,d,$)&&(ot(p,s),h=h||S)})),y((t=>xn(u).reduce(((e,n)=>(ot(e,us(t,n)),Se(n,t)?ot(e,n):e)),[]))),e)return!s&&m&&n(!1),[!1];if(!qe(p)||h){const t=[xn(p),h];return!s&&n.apply(0,t),t}}},v=new Bs(D(m,!1));return[()=>(v.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:h,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(p(),v.disconnect(),s=!1)}),()=>{if(s)return u.S(),m(!0,v.takeRecords())}]},Es={},Cs={},Ho=t=>{W(t,(t=>W(t,((e,n)=>{Es[n]=t[n]}))))},Os=(t,e,n)=>Tt(t).map((o=>{const{static:s,instance:r}=t[o],[c,i,l]=n||[],a=n?r:s;if(a){const t=n?a(c,i,e):a(e);return(l||Cs)[o]=t}})),ce=t=>Cs[t],Lo="__osOptionsValidationPlugin",To="__osSizeObserverPlugin",ko=(t,e)=>{const{k:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},Ee=t=>0===t.indexOf(Dt),Io=(t,e)=>{const n=(t,e,n,o)=>{const s=t===Dt?zt:t.replace(`${Dt}-`,""),r=Ee(t),c=Ee(n);return e||o?r&&c?Dt:r?e&&o?s:e?Dt:zt:e?s:c&&o?Dt:zt:zt},o={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{K:o,G:{x:o.x===Xt,y:o.y===Xt}}},$s="__osScrollbarsHidingPlugin",Do="__osClickScrollPlugin",As=(t,e,n)=>{const{dt:o}=n||{},s=ce(To),[r]=gt({o:!1,u:!0});return()=>{const n=[],c=ps(`<div class="${dn}"><div class="${fo}"></div></div>`)[0],i=c.firstChild,l=t=>{let n=!1,o=!1;if(t instanceof ResizeObserverEntry){const[e,,s]=r(t.contentRect),c=Je(e);o=hs(e,s),n=!o&&!c}else o=!0===t;n||e({_t:!0,dt:o})};if(ve){const t=new ve((t=>l(t.pop())));t.observe(i),ot(n,(()=>{t.disconnect()}))}else{if(!s)return Pt;{const[t,e]=s(i,l,o);ot(n,Lt([cn(c,uo),et(c,"animationstart",t)],e))}}return D(St,ot(n,yt(t,c)))}},Po=(t,e)=>{let n;const o=jt(po),[s]=gt({o:!1}),r=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;return r&&!n&&e(o)&&[o]}},c=(t,e)=>r(e.pop(),t);return[()=>{const e=[];if(Sn)n=new Sn(D(c,!1),{root:t}),n.observe(o),ot(e,(()=>{n.disconnect()}));else{const t=()=>{const t=te(o);r(t)};ot(e,As(o,t)()),t()}return D(St,ot(e,yt(t,o)))},()=>n&&c(!0,n.takeRecords())]},Ro=(t,e,n,o)=>{let s,r,c,i,l,a;const{R:d}=Et(),u=`[${Ut}]`,p=`[${It}]`,y=["tabindex"],f=["wrap","cols","rows"],h=["id","class","style","open"],{ft:m,vt:v,nt:b,ht:g,gt:w,bt:x,tt:$,wt:D,yt:S}=t,E=t=>"rtl"===Nt(t,"direction"),L={St:!1,et:E(m)},O=Et(),A=ce($s),[H]=gt({i:ss,o:{w:0,h:0}},(()=>{const o=A&&A.Z(t,e,L,O,n).it,s=!$&&D(lo),r=s&&bt(g),c=S(un,!0),i=s&&o&&o()[0],l=xe(w),a=xe(b),d=ln(b);return i&&i(),$t(g,r),c(),{w:a.w+l.w+d.w,h:a.h+l.h+d.h}})),k=x?f:Lt(h,f),T=os(o,{_:()=>s,p:()=>r,v(t,e){const[n]=t,[o]=e;return[Lt(Tt(n),Tt(o)).reduce(((t,e)=>(t[e]=n[e]||o[e],t)),{})]}}),C=t=>{const e=E(m);U(t,{Ot:a!==e}),U(L,{et:e}),a=e},I=t=>{W(t||y,(t=>{if(Le(y,t)){const e=ke(v,t);$e(e)?Ot(b,t,e):xt(b,t)}}))},R=(t,e)=>{const[n,s]=t,r={$t:s};return U(L,{St:n}),!e&&o(r),r},B=({_t:t,dt:e})=>{const n=t&&!e||!d?o:T,s={_t:t||e,dt:e};C(s),n(s)},M=(t,e)=>{const[,n]=H(),s={Ct:n};return C(s),n&&!e&&(t?o:T)(s),s},P=(t,e,n)=>{const o={xt:e};return C(o),e&&!n?T(o):$||I(t),o},{V:_}=O,[N,K]=w?Po(v,R):[],V=!$&&As(v,B,{dt:!0}),[z,F]=Vn(v,!1,P,{B:h,F:Lt(h,y)}),j=$&&ve&&new ve((t=>{const e=t[t.length-1].contentRect;B({_t:!0,dt:hs(e,l)}),l=e}));return[()=>{I(),j&&j.observe(v);const t=V&&V(),e=N&&N(),n=z(),o=_((t=>{const[,e]=H();T({Ht:t,Ct:e})}));return()=>{j&&j.disconnect(),t&&t(),e&&e(),i&&i(),n(),o()}},({Et:t,zt:e,At:n})=>{const o={},[l]=t("update.ignoreMutation"),[a,d]=t("update.attributes"),[y,f]=t("update.elementEvents"),[h,m]=t("update.debounce"),v=e||n;if(f||d){c&&c(),i&&i();const[t,e]=Vn(w||b,!0,M,{F:Lt(k,a||[]),X:y,Y:u,J:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||$)&&Ys(n,u,p)||!!Kt(n,`.${vt}`)||!!(t=>wt(l)&&l(t))(t)}});i=t(),c=e}if(m)if(T.S(),Ht(h)){const t=h[0],e=h[1];s=At(t)&&t,r=At(e)&&e}else At(h)?(s=h,r=!1):(s=!1,r=!1);if(v){const t=F(),e=K&&K(),n=c&&c();t&&U(o,P(t[0],t[1],v)),e&&U(o,R(e[0],v)),n&&U(o,M(n[0],v))}return C(o),o},L]},_o=(t,e,n,o)=>{const{L:s}=Et(),{scrollbars:r}=s(),{slot:c}=r,{ft:i,vt:l,nt:a,It:d,ht:u,Tt:p,tt:y}=e,{scrollbars:f}=d?{}:t,{slot:h}=f||{},m=new Map,v=t=>Ue&&new Ue({source:u,axis:t}),b={x:v("x"),y:v("y")},g=Ss([i,l,a],(()=>y&&p?i:l),c,h),w=(t,e)=>{if(e){const n=t?qt:Wt,{Dt:o,kt:s}=e,r=ee(s)[n],c=ee(o)[n];return We(0,1,r/c||0)}const o=t?"x":"y",{Rt:s,Mt:r}=n,c=r[o],i=s[o];return We(0,1,c/(c+i)||0)},x=t=>U(t,{clear:["left"]}),$=t=>{m.forEach(((e,n)=>{(!t||Le(Yn(t),n))&&(W(e||[],(t=>{t&&t.cancel()})),m.delete(n))}))},S=(t,e,n,o)=>{const s=m.get(t)||[],r=s.find((t=>t&&t.timeline===e));r?r.effect=new KeyframeEffect(t,n,{composite:o}):m.set(t,Lt(s,[t.animate(n,{timeline:e,composite:o})]))},E=(t,e,n)=>{const o=n?cn:as;W(t,(t=>{o(t.Vt,e)}))},L=(t,e)=>{W(t,(t=>{const[n,o]=e(t);se(n,o)}))},O=(t,e)=>{L(t,(t=>{const{kt:n}=t;return[n,{[e?qt:Wt]:$n(w(e))}]}))},A=(t,e)=>{const{Lt:o}=n,s=e?"x":"y",r=b[s],c=Ln(o)[s],i=(t,n)=>Fe($n(((t,e,n)=>{const o=w(n,t);return 1/o*(1-o)*e})(t,c?n:1-n,e)),e);r?W(t,(t=>{const{kt:e}=t;S(e,r,x({transform:[0,1].map((e=>i(t,e)))}))})):L(t,(t=>[t.kt,{transform:i(t,Tn(o,bt(u))[s])}]))},H=t=>y&&!p&&Yt(t)===a,k=[],T=[],C=[],I=(t,e,n)=>{const o=Xn(n),s=!o||!n;(!o||n)&&E(T,t,e),s&&E(C,t,e)},R=t=>{const e=jt(`${vt} ${t?go:yo}`),n=jt(bs),s=jt(fn),r={Vt:e,Dt:n,kt:s};return ot(t?T:C,r),ot(k,[yt(e,n),yt(n,s),D(Rt,e),$,o(r,I,A,t)]),r},B=D(R,!0),M=D(R,!1);return B(),M(),[{Pt:()=>{O(T,!0),O(C)},Ut:()=>{A(T,!0),A(C)},Nt:()=>{if(y){const{Rt:t,Lt:e}=n,o=Ln(e),s=.5;if(b.x&&b.y)W(Lt(C,T),(({Vt:e})=>{if(H(e)){const n=n=>S(e,b[n],x({transform:[0,o[n]?1:-1].map((e=>Fe(Ge(e*(t[n]-s)),"x"===n)))}),"add");n("x"),n("y")}else $(e)}));else{const n=Tn(e,bt(u)),s=e=>{const{Vt:s}=e,r=H(s)&&s,c=(t,e,n)=>{const o=e*t;return Ge(n?o:-o)};return[r,r&&{transform:Fe({x:c(n.x,t.x,o.x),y:c(n.y,t.y,o.y)})}]};L(T,s),L(C,s)}}},jt:I,qt:{M:b.x,Ft:T,Bt:B,Xt:D(L,T)},Yt:{M:b.y,Ft:C,Bt:M,Xt:D(L,C)}},()=>(yt(g,T[0].Vt),yt(g,C[0].Vt),D(St,k))]},Mo=(t,e,n,o)=>(s,r,c,i)=>{const{vt:l,nt:a,tt:d,ht:u,Wt:p,yt:y}=e,{Vt:f,Dt:h,kt:m}=s,[v,b]=Bt(333),[g,w]=Bt(444),[x,$]=Bt(),S=D(c,[s],i),E=t=>{wt(u.scrollBy)&&u.scrollBy({behavior:"smooth",left:t.x,top:t.y})},L=i?qt:Wt;let O=!0;const U=t=>t.propertyName.indexOf(L)>-1;return D(St,[et(m,"pointermove pointerleave",o),et(f,"pointerenter",(()=>{r(zn,!0)})),et(f,"pointerleave pointercancel",(()=>{r(zn,!1)})),!d&&et(f,"mousedown",(()=>{const t=Ze();(En(t,It)||En(t,Ut)||t===document.body)&&ye((()=>{a.focus({preventScroll:!0})}),25)})),et(f,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:o}=t;O&&0===o&&Yt(f)===l&&E({x:e,y:n}),O=!1,r(Nn,!0),v((()=>{O=!0,r(Nn)})),Qe(t)}),{C:!1,H:!0}),et(m,"transitionstart",(t=>{if(U(t)){const t=()=>{S(),x(t)};t()}})),et(m,"transitionend transitioncancel",(t=>{U(t)&&($(),S())})),et(f,"pointerdown",D(et,p,"click",eo,{A:!0,H:!0,C:!1}),{H:!0}),(()=>{const e="pointerup pointercancel lostpointercapture",o="client"+(i?"X":"Y"),s=i?"left":"top",r=i?"w":"h",c=i?"x":"y";return et(h,"pointerdown",(i=>{const l=Kt(i.target,`.${fn}`)===m,a=l?m:h,d=t.scrollbars,{button:f,isPrimary:v,pointerType:b}=i,{pointers:x}=d;if(0===f&&v&&d[l?"dragScroll":"clickScroll"]&&(x||[]).includes(b)){w();const t=!l&&i.shiftKey,d=D(ee,m),f=D(ee,h),v=(t,e)=>(t||d())[s]-(e||f())[s],b=Ke(ee(u)[L])/te(u)[r]||1,x=((t,e)=>o=>{const{Rt:s}=n,i=te(h)[r]-te(m)[r],l=e*o/i*s[c];$t(u,{[c]:t+l})})(bt(u)[c],1/b),$=i[o],S=d(),O=f(),U=S[L],W=v(S,O)+U/2,A=$-O[s],H=l?0:A-W,k=t=>{St(I),a.releasePointerCapture(t.pointerId)},T=()=>y(io,!0),C=T(),I=[()=>{const t=bt(u);C();const e=bt(u),n={x:e.x-t.x,y:e.y-t.y};(ge(n.x)>3||ge(n.y)>3)&&(T(),$t(u,t),E(n),g(C))},et(p,e,k),et(p,"selectstart",(t=>Qe(t)),{C:!1}),et(h,e,k),et(h,"pointermove",(e=>{const n=e[o]-$;(l||t)&&x(H+n)}))];if(a.setPointerCapture(i.pointerId),t)x(H);else if(!l){const t=ce(Do);t&&ot(I,t(x,v,H,U,A))}}}))})(),b,w,$])},zo=(t,e,n,o,s,r)=>{let c,i,l,a,d,u=Pt,p=0;const y=t=>"mouse"===t.pointerType,[f,h]=Bt(),[m,v]=Bt(100),[b,g]=Bt(100),[w,x]=Bt((()=>p)),[$,S]=_o(t,s,o,Mo(e,s,o,(t=>y(t)&&T()))),{vt:E,Jt:L,Tt:O}=s,{jt:U,Pt:W,Ut:A,Nt:H}=$,k=(t,e)=>{if(x(),t)U(Fn);else{const t=D(U,Fn,!0);p>0&&!e?w(t):t()}},T=()=>{(l?!c:!a)&&(k(!0),m((()=>{k(!1)})))},C=t=>{U(nn,t,!0),U(nn,t,!1)},I=t=>{y(t)&&(c=l,l&&k(!0))},R=[x,v,g,h,()=>u(),et(E,"pointerover",I,{A:!0}),et(E,"pointerenter",I),et(E,"pointerleave",(t=>{y(t)&&(c=!1,l&&k(!1))})),et(E,"pointermove",(t=>{y(t)&&i&&T()})),et(L,"scroll",(t=>{f((()=>{A(),T()})),r(t),H()}))];return[()=>D(St,ot(R,S())),({Et:t,At:e,Kt:s,Gt:r})=>{const{Qt:c,Zt:y,tn:f,nn:h}=r||{},{Ot:m,dt:v}=s||{},{et:g}=n,{k:w}=Et(),{K:x,sn:$}=o,[S,E]=t("showNativeOverlaidScrollbars"),[T,I]=t("scrollbars.theme"),[R,B]=t("scrollbars.visibility"),[M,P]=t("scrollbars.autoHide"),[_,N]=t("scrollbars.autoHideSuspend"),[K]=t("scrollbars.autoHideDelay"),[V,z]=t("scrollbars.dragScroll"),[F,j]=t("scrollbars.clickScroll"),[q,X]=t("overflow"),Y=v&&!e,Z=$.x||$.y,J=c||y||h||m||e,G=f||B||X,Q=S&&w.x&&w.y,tt=(t,e,n)=>{const o=t.includes(Xt)&&(R===Dt||"auto"===R&&e===Xt);return U(vo,o,n),o};if(p=K,Y&&(_&&Z?(C(!1),u(),b((()=>{u=et(L,"scroll",D(C,!0),{A:!0})}))):C(!0)),E&&U(mo,Q),I&&(U(d),U(T,!0),d=T),N&&!_&&C(!0),P&&(i="move"===M,l="leave"===M,a="never"===M,k(a,!0)),z&&U(So,V),j&&U(wo,F),G){const t=tt(q.x,x.x,!0),e=tt(q.y,x.y,!1);U(bo,!(t&&e))}J&&(W(),A(),H(),U(Bn,!$.x,!0),U(Bn,!$.y,!1),U(ho,g&&!O))},{},$]},Bo=t=>{const e=Et(),{L:n,R:o}=e,{elements:s}=n(),{host:r,padding:c,viewport:i,content:l}=s,a=we(t),d=a?{}:t,{elements:u}=d,{host:p,padding:y,viewport:f,content:h}=u||{},m=a?t:d.target,v=ds(m),b=Se(m,"textarea"),g=m.ownerDocument,w=g.documentElement,x=()=>g.defaultView||pt,$=t=>{t&&t.focus&&t.focus({preventScroll:!0})},S=D(Eo,[m]),E=D(Ss,[m]),L=D(jt,""),O=D(S,L,i),U=D(E,L,l),W=O(f),A=W===m,H=A&&v,k=!A&&U(h),T=!A&&W===k,C=H?w:W,I=b?S(L,r,p):m,R=H?C:I,B=!A&&E(L,c,y),M=!T&&k,P=[M,C,B,R].map((t=>we(t)&&!Yt(t)&&t)),_=t=>t&&Le(P,t),N=_(C)?m:C,K={ft:m,vt:R,nt:C,en:B,gt:M,ht:H?w:C,Jt:H?g:C,cn:v?w:N,Wt:g,bt:b,Tt:v,It:a,tt:A,rn:x,wt:t=>Ws(C,It,t),yt:(t,e)=>Xe(C,It,t,e)},{ft:V,vt:z,en:F,nt:j,gt:q}=K,X=[()=>{xt(z,[Ut,Ne]),xt(V,Ne),v&&xt(w,[Ne,Ut])}],Y=b&&_(z);let Z=b?V:Ye([q,j,F,z,V].find((t=>t&&!_(t))));const J=H?V:q||j,G=D(St,X);return[K,()=>{const t=x(),e=Ze(),n=t=>{yt(Yt(t),Ye(t)),Rt(t)},s=t=>et(t,"focusin focusout focus blur",an,{H:!0}),r="tabindex",c=ke(j,r),i=s(e);return Ot(z,Ut,A?"":oo),Ot(F,en,""),Ot(j,It,""),Ot(q,Mn,""),A||(Ot(j,r,c||"-1"),v&&Ot(w,_n,"")),Y&&(Cn(V,z),ot(X,(()=>{Cn(z,V),Rt(z)}))),yt(J,Z),yt(z,F),yt(F||z,!A&&j),yt(j,q),ot(X,[i,()=>{const t=Ze(),e=s(t);xt(F,en),xt(q,Mn),xt(j,It),v&&xt(w,_n),c?Ot(j,r,c):xt(j,r),_(q)&&n(q),_(j)&&n(j),_(F)&&n(F),$(t),e()}]),o&&!A&&(on(j,It,vs),ot(X,D(xt,j,It))),$(A||e!==m||t.top!==t?e:j),i(),Z=0,G},G]},Fo=({gt:t})=>({Kt:e,ln:n,At:o})=>{const{$t:s}=e||{},{St:r}=n;t&&(s||o)&&se(t,{[Wt]:r&&"100%"})},No=({vt:t,en:e,nt:n,tt:o},s)=>{const[r,c]=gt({i:qs,o:An()},D(An,t,"padding",""));return({Et:t,Kt:i,ln:l,At:a})=>{let[d,u]=c(a);const{R:p}=Et(),{_t:y,Ct:f,Ot:h}=i||{},{et:m}=l,[v,b]=t("paddingAbsolute");(y||u||a||f)&&([d,u]=r(a));const g=!o&&(b||h||u);if(g){const t=!v||!e&&!p,o=d.r+d.l,r=d.t+d.b,c={[es]:t&&!m?-o:0,[ns]:t?-r:0,[ts]:t&&m?-o:0,top:t?-d.t:0,right:t?m?-d.r:"auto":0,left:t?m?"auto":-d.l:0,[qt]:t&&`calc(100% + ${o}px)`},i={[Zn]:t?d.t:0,[Gn]:t?d.r:0,[Qn]:t?d.b:0,[Jn]:t?d.l:0};se(e||n,c),se(n,i),U(s,{en:d,an:!t,ct:e?i:U({},c,i)})}return{un:g}}},Vo=(t,e)=>{const n=Et(),{vt:o,en:s,nt:r,tt:c,ht:i,Tt:l,yt:a,rn:d}=t,{R:u}=n,p=l&&c,y=D(pe,0),f=["display","direction","flexDirection","writingMode"],h={i:ss,o:{w:0,h:0}},m={i:me,o:{}},[v,b]=gt(h,D(ln,r)),[g,w]=gt(h,D(xe,r)),[x,$]=gt(h),[S]=gt(m),[E,L]=gt(h),[O]=gt(m),[A]=gt({i:(t,e)=>Te(t,e,f),o:{}}),[H,k]=gt({i:(t,e)=>me(t.I,e.I)&&me(t.T,e.T),o:gs()}),T=ce($s),C=(t,e)=>`${e?co:ro}${Us(t)}`;return({Et:c,Kt:l,ln:h,At:m},{un:D})=>{const{_t:I,Ct:R,Ot:B,dt:M,Ht:P}=l||{},_=T&&T.Z(t,e,h,n,c),{lt:N,it:K,ut:V}=_||{},[z,F]=ko(c,n),[j,q]=c("overflow"),X=Ee(j.x),Y=Ee(j.y),Z=I||D||R||B||P||F;let J=b(m),G=w(m),Q=$(m),tt=L(m);if(F&&u&&a(vs,!z),Z){const[t]=K?K():[],[e]=J=v(m),[n]=G=g(m),o=ms(r),s=n,c=o;t&&t();const i=Qs(d()),l={w:y(pe(n.w,s.w)+e.w),h:y(pe(n.h,s.h)+e.h)},a={w:y((p?i.w:c.w+y(o.w-n.w))+e.w),h:y((p?i.h:c.h+y(o.h-n.h))+e.h)};tt=E(a),Q=x(((t,e)=>{const n=pt.devicePixelRatio%1!=0?1:0,o={w:y(t.w-e.w),h:y(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(l,a),m)}const[nt,ot]=tt,[st,rt]=Q,[ct,it]=G,[lt,at]=J,[dt,ut]=S({x:st.w>0,y:st.h>0}),yt=X&&Y&&(dt.x||dt.y)||X&&dt.x&&!dt.y||Y&&dt.y&&!dt.x,ft=D||B||P||at||it||ot||rt||q||F||Z,ht=Io(dt,j),[mt,vt]=O(ht.K),[,gt]=A(U({},to(r)?Nt(r,f):{}),m),wt=B||M||gt||ut||m,[xt,St]=wt?H((()=>{const t=bt(i),e=a(ao,!0),n=et(i,Xt,an,{H:!0});$t(i,{x:0,y:0}),e();const o=bt(i),s=xe(i);$t(i,{x:s.w,y:s.h});const r=bt(i);$t(i,{x:r.x-o.x<1&&-s.w,y:r.y-o.y<1&&-s.h});const c=bt(i);return $t(i,t),n(),{I:o,T:c}})(),m):k();return ft&&((t=>{const{K:e}=t;W(Tt(e),(t=>{const n="x"===t,o=[Dt,zt,Xt].map((t=>C(t,n)));a(o.join(" ")),a(C(e[t],n),!0)}))})(ht),V&&N&&se(r,V(ht,h,N(ht,ct,lt)))),Xe(o,Ut,Rn,yt),Xe(s,en,Rn,yt),U(e,{K:mt,Mt:{x:nt.w,y:nt.h},Rt:{x:st.w,y:st.h},sn:dt,Lt:no(xt,st)}),{tn:vt,Qt:ot,Zt:rt,nn:St||rt}}},Ko=t=>{const[e,n,o]=Bo(t),s={en:{t:0,r:0,b:0,l:0},an:!1,ct:{[es]:0,[ns]:0,[ts]:0,[Zn]:0,[Gn]:0,[Qn]:0,[Jn]:0},Mt:{x:0,y:0},Rt:{x:0,y:0},K:{x:zt,y:zt},sn:{x:!1,y:!1},Lt:gs()},{ft:r,ht:c,tt:i,yt:l}=e,{R:a,k:d}=Et(),u=!a&&(d.x||d.y),p=[Fo(e),No(e,s),Vo(e,s)];return[n,t=>{const e={},n=u,o=l(un,!0),s=n&&bt(c);return W(p,(n=>{U(e,n(t,e)||{})})),$t(c,s),!i&&$t(r,0),o(),e},s,e,o]},jo=(t,e,n,o)=>{const s=Pn(e,{}),[r,c,i,l,a]=Ko(t),[d,u,p]=Ro(l,i,s,(t=>{v({},t)})),[y,f,,h]=zo(t,e,p,i,l,o),m=t=>Tt(t).some((e=>!!t[e])),v=(t,o)=>{const{dn:s,At:r,zt:i,_n:l}=t,a=s||{},d=!!r,y={Et:Pn(e,a,d),dn:a,At:d};if(l)return f(y),!1;const h=o||u(U({},y,{zt:i})),v=c(U({},y,{ln:p,Kt:h}));f(U({},y,{Kt:h,Gt:v}));const b=m(h),g=m(v),w=b||g||!sn(a)||d;return w&&n(t,{Kt:h,Gt:v}),w};return[()=>{const{cn:t,ht:e,yt:n}=l,o=n(un,!0),s=bt(t),c=[d(),r(),y()];return $t(e,s),o(),D(St,c)},v,()=>({fn:p,pn:i}),{vn:l,hn:h},a]},Vt=(t,e,n)=>{const{U:o}=Et(),s=we(t),r=s?t:t.target,c=xs(r);if(e&&!c){let c=!1;const i=[],l={},a=t=>{const e=rs(t),n=ce(Lo);return n?n(e,!0):e},d=U({},o(),a(e)),[u,p,y]=tn(),[f,h,m]=tn(n),v=(t,e)=>{m(t,e),y(t,e)},[b,g,w,x,$]=jo(t,d,(({dn:t,At:e},{Kt:n,Gt:o})=>{const{_t:s,Ot:r,$t:c,Ct:i,xt:l,dt:a}=n,{Qt:d,Zt:u,tn:p,nn:y}=o;v("updated",[E,{updateHints:{sizeChanged:!!s,directionChanged:!!r,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!d,overflowAmountChanged:!!u,overflowStyleChanged:!!p,scrollCoordinatesChanged:!!y,contentMutation:!!i,hostMutation:!!l,appear:!!a},changedOptions:t||{},force:!!e}])}),(t=>v("scroll",[E,t]))),S=t=>{$o(r),St(i),c=!0,v("destroyed",[E,t]),p(),h()},E={options(t,e){if(t){const n=e?o():{},s=ys(d,U(n,a(t)));sn(s)||(U(d,s),g({dn:s}))}return U({},d)},on:f,off:(t,e)=>{t&&e&&h(t,e)},state(){const{fn:t,pn:e}=w(),{et:n}=t,{Mt:o,Rt:s,K:r,sn:i,en:l,an:a,Lt:d}=e;return U({},{overflowEdge:o,overflowAmount:s,overflowStyle:r,hasOverflow:i,scrollCoordinates:{start:d.I,end:d.T},padding:l,paddingAbsolute:a,directionRTL:n,destroyed:c})},elements(){const{ft:t,vt:e,en:n,nt:o,gt:s,ht:r,Jt:c}=x.vn,{qt:i,Yt:l}=x.hn,a=t=>{const{kt:e,Dt:n,Vt:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{Ft:e,Bt:n}=t,o=a(e[0]);return U({},o,{clone:()=>{const t=a(n());return g({_n:!0}),t}})};return U({},{target:t,host:e,padding:n||o,viewport:o,content:s||o,scrollOffsetElement:r,scrollEventElement:c,scrollbarHorizontal:d(i),scrollbarVertical:d(l)})},update:t=>g({At:t,zt:!0}),destroy:D(S,!1),plugin:t=>l[Tt(t)[0]]};return ot(i,[$]),Oo(r,E),Os(Es,Vt,[E,u,l]),Co(x.vn.Tt,!s&&t.cancel)?(S(!0),E):(ot(i,b()),v("initialized",[E]),E.update(!0),E)}return c};function mn(t,e){document.addEventListener("click",(n=>{let o=document.getElementById(t),s=n.target;for(let t of e){let e=document.getElementById(t);if(e==s||e?.contains(s))return}o.classList.add("float-panel-closed")}))}function Uo(){const t=Ps();Rs(t)}function qo(){_s(Ms())}function Wo(){const t=document.getElementById("banner-wrapper");document.documentElement.hasAttribute("isHome")?(t.classList.remove("banner-else"),t.classList.add("banner-home")):(t.classList.remove("banner-home"),t.classList.add("banner-else"))}function Xo(){Vt({target:document.querySelector("body"),cancel:{nativeScrollbarsOverlaid:!0}},{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1",autoHide:"move",autoHideDelay:500,autoHideSuspend:!1}}),document.querySelectorAll("pre").forEach((t=>{Vt(t,{scrollbars:{theme:"scrollbar-base scrollbar-dark px-2",autoHide:"leave",autoHideDelay:500,autoHideSuspend:!1}})}))}function Hs(){Wo(),Uo(),qo(),Xo()}Vt.plugin=t=>{const e=Ht(t),n=e?t:[t],o=n.map((t=>Os(t,Vt)[0]));return Ho(n),e?o:o[0]},Vt.valid=t=>{const e=t&&t.elements,n=wt(e)&&e();return be(n)&&!!xs(n.target)},Vt.env=()=>{const{D:t,k:e,R:n,M:o,j:s,q:r,L:c,P:i,U:l,N:a}=Et();return U({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:o,staticDefaultInitialization:s,staticDefaultOptions:r,getDefaultInitialization:c,setDefaultInitialization:i,getDefaultOptions:l,setDefaultOptions:a})},mn("display-setting",["display-setting","display-settings-switch"]),mn("nav-menu-panel",["nav-menu-panel","nav-menu-switch"]),mn("search-panel",["search-panel","search-bar","search-switch"]),Hs(),document.addEventListener("astro:after-swap",Hs);const Kn=()=>{window.swup.hooks.on("link:click",(()=>{document.documentElement.style.setProperty("--content-delay","0ms")}))};function Yo(){"dark"===localStorage.theme?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}function Ls(){document.getElementById("scheme-switch").addEventListener("click",(function(){Yo()}));let t=document.getElementById("display-settings-switch");t&&t.addEventListener("click",(function(){document.getElementById("display-setting").classList.toggle("float-panel-closed")})),document.getElementById("nav-menu-switch").addEventListener("click",(function(){document.getElementById("nav-menu-panel").classList.toggle("float-panel-closed")}))}window.swup.hooks?Kn():document.addEventListener("swup:enable",Kn),Ls(),document.addEventListener("astro:after-swap",(()=>{Ls()}),{once:!1});class Zo extends HTMLElement{constructor(){if(super(),void 0===this.dataset.isCollapsed||!1===this.dataset.isCollapsed)return;const t=this.dataset.id,e=this.querySelector(".expand-btn"),n=this.querySelector(`#${t}`);e.addEventListener("click",(()=>{n.classList.remove("collapsed"),e.classList.add("hidden")}))}}customElements.define("widget-layout",Zo);