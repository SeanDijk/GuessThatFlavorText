import{S as je,i as we,s as xe,u as b,l as i,a as P,v,m as c,p as m,h as r,c as A,q as I,b as y,G as t,O as De,W as Je,w as ze,n as Ie,X as Fe,K as Ge,e as Se}from"../../chunks/index-3edbca9c.js";import{P as Ke}from"../../chunks/PokemonApiService-f35c2ef0.js";import{p as Me}from"../../chunks/stores-f64f1bbd.js";import{l as We}from"../../chunks/lodash-c2e80555.js";import{g as Xe}from"../../chunks/navigation-e4734af4.js";import{b as Ye}from"../../chunks/paths-b9644fda.js";import"../../chunks/_commonjsHelpers-cea7ac1a.js";import"../../chunks/singletons-eca981c1.js";function Ue(f,a,n){const p=f.slice();return p[7]=a[n][0],p[8]=a[n][1],p}function Ce(f,a,n){const p=f.slice();return p[11]=a[n],p}function Oe(f){let a,n,p=f[11].name+"",d,L,E,g=f[11].flavorText+"",u,e,s,h;function B(){return f[6](f[11])}return{c(){a=i("tr"),n=i("td"),d=b(p),L=P(),E=i("td"),u=b(g),e=P(),this.h()},l(k){a=c(k,"TR",{class:!0});var N=m(a);n=c(N,"TD",{class:!0});var U=m(n);d=v(U,p),U.forEach(r),L=A(N),E=c(N,"TD",{class:!0});var C=m(E);u=v(C,g),C.forEach(r),e=A(N),N.forEach(r),this.h()},h(){I(n,"class","svelte-1c4hhqu"),I(E,"class","svelte-1c4hhqu"),I(a,"class","clickable svelte-1c4hhqu")},m(k,N){y(k,a,N),t(a,n),t(n,d),t(a,L),t(a,E),t(E,u),t(a,e),s||(h=De(a,"click",B),s=!0)},p(k,N){f=k},d(k){k&&r(a),s=!1,h()}}}function He(f){let a,n,p=f[7]+"",d,L,E,g=f[8],u=[];for(let e=0;e<g.length;e+=1)u[e]=Oe(Ce(f,g,e));return{c(){a=i("tr"),n=i("th"),d=b(p),L=P();for(let e=0;e<u.length;e+=1)u[e].c();E=Se(),this.h()},l(e){a=c(e,"TR",{});var s=m(a);n=c(s,"TH",{colspan:!0,class:!0});var h=m(n);d=v(h,p),h.forEach(r),s.forEach(r),L=A(e);for(let B=0;B<u.length;B+=1)u[B].l(e);E=Se(),this.h()},h(){I(n,"colspan","2"),I(n,"class","svelte-1c4hhqu")},m(e,s){y(e,a,s),t(a,n),t(n,d),y(e,L,s);for(let h=0;h<u.length;h+=1)u[h].m(e,s);y(e,E,s)},p(e,s){if(s&4){g=e[8];let h;for(h=0;h<g.length;h+=1){const B=Ce(e,g,h);u[h]?u[h].p(B,s):(u[h]=Oe(B),u[h].c(),u[h].m(E.parentNode,E))}for(;h<u.length;h+=1)u[h].d(1);u.length=g.length}},d(e){e&&r(a),e&&r(L),Fe(u,e),e&&r(E)}}}function Qe(f){let a=JSON.stringify(f[0].url.searchParams.get("ref"))+"",n,p,d,L,E=f[3]()+"",g,u,e,s,h,B,k,N,U,C,Y,O,Q,V,Z,H,$,ee,te,R,le,ae,se,D,re,oe,ne,F,ie,ce,fe,j,ue,he,M,q,K,S,w,pe,_e,x,me,be,J,ve,Ae,z=Object.entries(f[2]),T=[];for(let l=0;l<z.length;l+=1)T[l]=He(Ue(f,z,l));return{c(){n=b(a),p=b(`


Page `),d=b(f[1]),L=b(" of "),g=b(E),u=b(`.
`),e=i("form"),s=i("label"),h=b("Name: "),B=i("input"),k=P(),N=i("label"),U=b("Hp: "),C=i("input"),Y=P(),O=i("label"),Q=b("Attack name: "),V=i("input"),Z=P(),H=i("label"),$=b("Set: "),ee=i("input"),te=P(),R=i("label"),le=b("Artist: "),ae=i("input"),se=P(),D=i("label"),re=b("Types: "),oe=i("input"),ne=P(),F=i("label"),ie=b("Retreat cost: "),ce=i("input"),fe=P(),j=i("label"),ue=b("Flavor text: "),he=i("input"),M=P(),q=i("table"),K=i("thead"),S=i("tr"),w=i("th"),pe=b("Name"),_e=P(),x=i("th"),me=b("Flavor text"),be=P(),J=i("tbody");for(let l=0;l<T.length;l+=1)T[l].c();this.h()},l(l){n=v(l,a),p=v(l,`


Page `),d=v(l,f[1]),L=v(l," of "),g=v(l,E),u=v(l,`.
`),e=c(l,"FORM",{});var o=m(e);s=c(o,"LABEL",{});var _=m(s);h=v(_,"Name: "),B=c(_,"INPUT",{}),_.forEach(r),k=A(o),N=c(o,"LABEL",{});var G=m(N);U=v(G,"Hp: "),C=c(G,"INPUT",{}),G.forEach(r),Y=A(o),O=c(o,"LABEL",{});var de=m(O);Q=v(de,"Attack name: "),V=c(de,"INPUT",{}),de.forEach(r),Z=A(o),H=c(o,"LABEL",{});var Ee=m(H);$=v(Ee,"Set: "),ee=c(Ee,"INPUT",{}),Ee.forEach(r),te=A(o),R=c(o,"LABEL",{});var ge=m(R);le=v(ge,"Artist: "),ae=c(ge,"INPUT",{}),ge.forEach(r),se=A(o),D=c(o,"LABEL",{});var Te=m(D);re=v(Te,"Types: "),oe=c(Te,"INPUT",{}),Te.forEach(r),ne=A(o),F=c(o,"LABEL",{});var Le=m(F);ie=v(Le,"Retreat cost: "),ce=c(Le,"INPUT",{}),Le.forEach(r),fe=A(o),j=c(o,"LABEL",{});var Ne=m(j);ue=v(Ne,"Flavor text: "),he=c(Ne,"INPUT",{}),Ne.forEach(r),o.forEach(r),M=A(l),q=c(l,"TABLE",{class:!0});var W=m(q);K=c(W,"THEAD",{});var ye=m(K);S=c(ye,"TR",{});var X=m(S);w=c(X,"TH",{class:!0});var Be=m(w);pe=v(Be,"Name"),Be.forEach(r),_e=A(X),x=c(X,"TH",{class:!0});var ke=m(x);me=v(ke,"Flavor text"),ke.forEach(r),X.forEach(r),ye.forEach(r),be=A(W),J=c(W,"TBODY",{});var qe=m(J);for(let Pe=0;Pe<T.length;Pe+=1)T[Pe].l(qe);qe.forEach(r),W.forEach(r),this.h()},h(){I(w,"class","svelte-1c4hhqu"),I(x,"class","svelte-1c4hhqu"),I(q,"class","svelte-1c4hhqu")},m(l,o){y(l,n,o),y(l,p,o),y(l,d,o),y(l,L,o),y(l,g,o),y(l,u,o),y(l,e,o),t(e,s),t(s,h),t(s,B),t(e,k),t(e,N),t(N,U),t(N,C),t(e,Y),t(e,O),t(O,Q),t(O,V),t(e,Z),t(e,H),t(H,$),t(H,ee),t(e,te),t(e,R),t(R,le),t(R,ae),t(e,se),t(e,D),t(D,re),t(D,oe),t(e,ne),t(e,F),t(F,ie),t(F,ce),t(e,fe),t(e,j),t(j,ue),t(j,he),y(l,M,o),y(l,q,o),t(q,K),t(K,S),t(S,w),t(w,pe),t(S,_e),t(S,x),t(x,me),t(q,be),t(q,J);for(let _=0;_<T.length;_+=1)T[_].m(J,null);ve||(Ae=De(e,"submit",Je(f[5])),ve=!0)},p(l,[o]){if(o&1&&a!==(a=JSON.stringify(l[0].url.searchParams.get("ref"))+"")&&ze(n,a),o&4){z=Object.entries(l[2]);let _;for(_=0;_<z.length;_+=1){const G=Ue(l,z,_);T[_]?T[_].p(G,o):(T[_]=He(G),T[_].c(),T[_].m(J,null))}for(;_<T.length;_+=1)T[_].d(1);T.length=z.length}},i:Ie,o:Ie,d(l){l&&r(n),l&&r(p),l&&r(d),l&&r(L),l&&r(g),l&&r(u),l&&r(e),l&&r(M),l&&r(q),Fe(T,l),ve=!1,Ae()}}}const ot=!1;async function nt({params:f,fetch:a,session:n,stuff:p}){return{status:200,props:{pageContents:await Ke.getPage(f.page)}}}const Re=10;function Ve(f,a,n){let p;Ge(f,Me,s=>n(0,p=s));let{pageContents:d}=a;const L=p.params.page;let E=We.exports.groupBy(d.data,s=>`${s.set.series} - ${s.set.name}`);function g(){let s=parseInt(d.totalCount/Re);return d.totalCount%Re&&s++,s}const u=()=>console.log(""),e=s=>Xe(Ye+"/guess/"+btoa(s.id));return f.$$set=s=>{"pageContents"in s&&n(4,d=s.pageContents)},[p,L,E,g,d,u,e]}class it extends je{constructor(a){super(),we(this,a,Ve,Qe,xe,{pageContents:4})}}export{it as default,nt as load,ot as prerender};