import{S as xe,i as Je,s as Ve,u as b,l as i,a as P,v,m as c,p as _,h as s,c as A,q as S,b as B,G as t,N as je,V as ze,w as Ge,n as Ue,X as we,K as Ke,e as Ce}from"../../chunks/index-621a1bb0.js";import{P as Me}from"../../chunks/PokemonApiService-1b5e6158.js";import{p as Xe}from"../../chunks/stores-f7a11356.js";import{l as Ye}from"../../chunks/lodash-4138efbc.js";import{g as Qe}from"../../chunks/navigation-e4734af4.js";import{b as We}from"../../chunks/paths-b9644fda.js";import"../../chunks/singletons-eca981c1.js";function Oe(f,a,n){const p=f.slice();return p[7]=a[n][0],p[8]=a[n][1],p}function De(f,a,n){const p=f.slice();return p[11]=a[n],p}function He(f){let a,n,p=f[11].name+"",d,L,E,g=f[11].flavorText+"",h,e,r,u;function N(){return f[6](f[11])}return{c(){a=i("tr"),n=i("td"),d=b(p),L=P(),E=i("td"),h=b(g),e=P(),this.h()},l(k){a=c(k,"TR",{class:!0});var y=_(a);n=c(y,"TD",{class:!0});var C=_(n);d=v(C,p),C.forEach(s),L=A(y),E=c(y,"TD",{class:!0});var I=_(E);h=v(I,g),I.forEach(s),e=A(y),y.forEach(s),this.h()},h(){S(n,"class","svelte-1c4hhqu"),S(E,"class","svelte-1c4hhqu"),S(a,"class","clickable svelte-1c4hhqu")},m(k,y){B(k,a,y),t(a,n),t(n,d),t(a,L),t(a,E),t(E,h),t(a,e),r||(u=je(a,"click",N),r=!0)},p(k,y){f=k},d(k){k&&s(a),r=!1,u()}}}function Re(f){let a,n,p=f[7]+"",d,L,E,g=f[8],h=[];for(let e=0;e<g.length;e+=1)h[e]=He(De(f,g,e));return{c(){a=i("tr"),n=i("th"),d=b(p),L=P();for(let e=0;e<h.length;e+=1)h[e].c();E=Ce(),this.h()},l(e){a=c(e,"TR",{});var r=_(a);n=c(r,"TH",{colspan:!0,class:!0});var u=_(n);d=v(u,p),u.forEach(s),r.forEach(s),L=A(e);for(let N=0;N<h.length;N+=1)h[N].l(e);E=Ce(),this.h()},h(){S(n,"colspan","2"),S(n,"class","svelte-1c4hhqu")},m(e,r){B(e,a,r),t(a,n),t(n,d),B(e,L,r);for(let u=0;u<h.length;u+=1)h[u].m(e,r);B(e,E,r)},p(e,r){if(r&4){g=e[8];let u;for(u=0;u<g.length;u+=1){const N=De(e,g,u);h[u]?h[u].p(N,r):(h[u]=He(N),h[u].c(),h[u].m(E.parentNode,E))}for(;u<h.length;u+=1)h[u].d(1);h.length=g.length}},d(e){e&&s(a),e&&s(L),we(h,e),e&&s(E)}}}function Ze(f){let a=JSON.stringify(f[0].url.searchParams.get("ref"))+"",n,p,d,L,E=f[3]()+"",g,h,e,r,u,N,k,y,C,I,Y,Q,W,O,Z,$,ee,D,te,le,ae,H,se,re,oe,R,ne,ie,ce,F,fe,he,ue,j,pe,_e,K,q,G,U,w,me,be,x,ve,de,J,Ee,Be,V=Object.entries(f[2]),T=[];for(let l=0;l<V.length;l+=1)T[l]=Re(Oe(f,V,l));return{c(){n=b(a),p=b(`


Page `),d=b(f[1]),L=b(" of "),g=b(E),h=b(`.
`),e=i("form"),r=i("div"),u=P(),N=i("label"),k=b("Name: "),y=i("input"),C=P(),I=i("label"),Y=b("Hp: "),Q=i("input"),W=P(),O=i("label"),Z=b("Attack name: "),$=i("input"),ee=P(),D=i("label"),te=b("Set: "),le=i("input"),ae=P(),H=i("label"),se=b("Artist: "),re=i("input"),oe=P(),R=i("label"),ne=b("Types: "),ie=i("input"),ce=P(),F=i("label"),fe=b("Retreat cost: "),he=i("input"),ue=P(),j=i("label"),pe=b("Flavor text: "),_e=i("input"),K=P(),q=i("table"),G=i("thead"),U=i("tr"),w=i("th"),me=b("Name"),be=P(),x=i("th"),ve=b("Flavor text"),de=P(),J=i("tbody");for(let l=0;l<T.length;l+=1)T[l].c();this.h()},l(l){n=v(l,a),p=v(l,`


Page `),d=v(l,f[1]),L=v(l," of "),g=v(l,E),h=v(l,`.
`),e=c(l,"FORM",{});var o=_(e);r=c(o,"DIV",{}),_(r).forEach(s),u=A(o),N=c(o,"LABEL",{});var m=_(N);k=v(m,"Name: "),y=c(m,"INPUT",{placeholder:!0}),m.forEach(s),C=A(o),I=c(o,"LABEL",{});var z=_(I);Y=v(z,"Hp: "),Q=c(z,"INPUT",{}),z.forEach(s),W=A(o),O=c(o,"LABEL",{});var ge=_(O);Z=v(ge,"Attack name: "),$=c(ge,"INPUT",{}),ge.forEach(s),ee=A(o),D=c(o,"LABEL",{});var Te=_(D);te=v(Te,"Set: "),le=c(Te,"INPUT",{}),Te.forEach(s),ae=A(o),H=c(o,"LABEL",{});var Le=_(H);se=v(Le,"Artist: "),re=c(Le,"INPUT",{}),Le.forEach(s),oe=A(o),R=c(o,"LABEL",{});var Ne=_(R);ne=v(Ne,"Types: "),ie=c(Ne,"INPUT",{}),Ne.forEach(s),ce=A(o),F=c(o,"LABEL",{});var Pe=_(F);fe=v(Pe,"Retreat cost: "),he=c(Pe,"INPUT",{}),Pe.forEach(s),ue=A(o),j=c(o,"LABEL",{});var Ae=_(j);pe=v(Ae,"Flavor text: "),_e=c(Ae,"INPUT",{}),Ae.forEach(s),o.forEach(s),K=A(l),q=c(l,"TABLE",{class:!0});var M=_(q);G=c(M,"THEAD",{});var ke=_(G);U=c(ke,"TR",{});var X=_(U);w=c(X,"TH",{class:!0});var Ie=_(w);me=v(Ie,"Name"),Ie.forEach(s),be=A(X),x=c(X,"TH",{class:!0});var qe=_(x);ve=v(qe,"Flavor text"),qe.forEach(s),X.forEach(s),ke.forEach(s),de=A(M),J=c(M,"TBODY",{});var Se=_(J);for(let ye=0;ye<T.length;ye+=1)T[ye].l(Se);Se.forEach(s),M.forEach(s),this.h()},h(){S(y,"placeholder","Pikachu"),S(w,"class","svelte-1c4hhqu"),S(x,"class","svelte-1c4hhqu"),S(q,"class","svelte-1c4hhqu")},m(l,o){B(l,n,o),B(l,p,o),B(l,d,o),B(l,L,o),B(l,g,o),B(l,h,o),B(l,e,o),t(e,r),t(e,u),t(e,N),t(N,k),t(N,y),t(e,C),t(e,I),t(I,Y),t(I,Q),t(e,W),t(e,O),t(O,Z),t(O,$),t(e,ee),t(e,D),t(D,te),t(D,le),t(e,ae),t(e,H),t(H,se),t(H,re),t(e,oe),t(e,R),t(R,ne),t(R,ie),t(e,ce),t(e,F),t(F,fe),t(F,he),t(e,ue),t(e,j),t(j,pe),t(j,_e),B(l,K,o),B(l,q,o),t(q,G),t(G,U),t(U,w),t(w,me),t(U,be),t(U,x),t(x,ve),t(q,de),t(q,J);for(let m=0;m<T.length;m+=1)T[m].m(J,null);Ee||(Be=je(e,"submit",ze(f[5])),Ee=!0)},p(l,[o]){if(o&1&&a!==(a=JSON.stringify(l[0].url.searchParams.get("ref"))+"")&&Ge(n,a),o&4){V=Object.entries(l[2]);let m;for(m=0;m<V.length;m+=1){const z=Oe(l,V,m);T[m]?T[m].p(z,o):(T[m]=Re(z),T[m].c(),T[m].m(J,null))}for(;m<T.length;m+=1)T[m].d(1);T.length=V.length}},i:Ue,o:Ue,d(l){l&&s(n),l&&s(p),l&&s(d),l&&s(L),l&&s(g),l&&s(h),l&&s(e),l&&s(K),l&&s(q),we(T,l),Ee=!1,Be()}}}async function nt({params:f,fetch:a,session:n,stuff:p}){return{status:200,props:{pageContents:await Me.getPage(f.page)}}}const Fe=10;function $e(f,a,n){let p;Ke(f,Xe,r=>n(0,p=r));let{pageContents:d}=a;const L=p.params.page;let E=Ye.exports.groupBy(d.data,r=>`${r.set.series} - ${r.set.name}`);function g(){let r=parseInt(d.totalCount/Fe);return d.totalCount%Fe&&r++,r}const h=()=>console.log(""),e=r=>Qe(We+"/guess/"+btoa(r.id));return f.$$set=r=>{"pageContents"in r&&n(4,d=r.pageContents)},[p,L,E,g,d,h,e]}class it extends xe{constructor(a){super(),Je(this,a,$e,Ze,Ve,{pageContents:4})}}export{it as default,nt as load};