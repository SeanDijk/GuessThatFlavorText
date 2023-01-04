import{S as pe,i as Se,s as ve,l as p,r as I,a as w,m as S,n as b,u as A,h as g,c as C,p as T,N as ae,b as R,F as f,Z as re,G as U,v as be,E as ce,Y as ke,R as Ee,_ as ye,M as Q,f as D,t as M,d as Ie,$ as Te,o as Oe,e as ue,g as Ae,a0 as Be,w as Ne,x as Pe,y as we,a1 as Ce,B as De}from"../chunks/index-f8c949a3.js";import{P as Ge}from"../chunks/PokemonApiService-8b675361.js";import{p as He}from"../chunks/lodash-2cb91f17.js";import{r as fe}from"../chunks/stores-90196818.js";import"../chunks/index-66cf2f4f.js";function he(s,e,l){const r=s.slice();return r[12]=e[l],r}function de(s){let e,l=s[12].name+"",r,i;return{c(){e=p("option"),r=I(l),this.h()},l(h){e=S(h,"OPTION",{});var t=b(e);r=A(t,l),t.forEach(g),this.h()},h(){e.__value=i=s[12].id,e.value=e.__value},m(h,t){R(h,e,t),f(e,r)},p(h,t){t&4&&l!==(l=h[12].name+"")&&be(r,l),t&4&&i!==(i=h[12].id)&&(e.__value=i,e.value=e.__value)},d(h){h&&g(e)}}}function Le(s){let e,l,r,i,h,t,c,n,v,y,_=s[2],d=[];for(let o=0;o<_.length;o+=1)d[o]=de(he(s,_,o));return{c(){e=p("div"),l=p("div"),r=p("label"),i=I(s[1]),h=w(),t=p("input"),c=w(),n=p("select");for(let o=0;o<d.length;o+=1)d[o].c();this.h()},l(o){e=S(o,"DIV",{class:!0});var u=b(e);l=S(u,"DIV",{});var a=b(l);r=S(a,"LABEL",{for:!0});var k=b(r);i=A(k,s[1]),k.forEach(g),h=C(a),t=S(a,"INPUT",{type:!0,id:!0}),a.forEach(g),c=C(u),n=S(u,"SELECT",{name:!0,id:!0,class:!0});var G=b(n);for(let N=0;N<d.length;N+=1)d[N].l(G);G.forEach(g),u.forEach(g),this.h()},h(){T(r,"for",s[1]),T(t,"type","checkbox"),T(t,"id",s[1]),(s[5]===void 0||s[6]===void 0)&&ae(()=>s[9].call(t)),T(n,"name","enabledSets"),T(n,"id","sets"),n.multiple=!0,T(n,"class","set-list svelte-1sl2pr5"),s[0]===void 0&&ae(()=>s[10].call(n)),T(e,"class","column svelte-1sl2pr5")},m(o,u){R(o,e,u),f(e,l),f(l,r),f(r,i),f(l,h),f(l,t),t.checked=s[5],t.indeterminate=s[6],f(e,c),f(e,n);for(let a=0;a<d.length;a+=1)d[a].m(n,null);re(n,s[0]),s[11](n),v||(y=[U(t,"change",s[9]),U(t,"change",s[3]),U(n,"change",s[10])],v=!0)},p(o,[u]){if(u&2&&be(i,o[1]),u&2&&T(r,"for",o[1]),u&2&&T(t,"id",o[1]),u&32&&(t.checked=o[5]),u&64&&(t.indeterminate=o[6]),u&4){_=o[2];let a;for(a=0;a<_.length;a+=1){const k=he(o,_,a);d[a]?d[a].p(k,u):(d[a]=de(k),d[a].c(),d[a].m(n,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=_.length}u&1&&re(n,o[0])},i:ce,o:ce,d(o){o&&g(e),ke(d,o),s[11](null),v=!1,Ee(y)}}}function Ue(s,e,l){let r,i,{series:h=""}=e,{sets:t=[]}=e,{selectedSets:c=[]}=e,n;function v(){let a=[];for(const k of n.options)k.selected=!0,a.push(k.value);l(0,c=a)}function y(){for(const a of n.options)a.selected=!1;l(0,c=[])}function _(){r?y():v()}function d(){r=this.checked,i=this.indeterminate,l(5,r),l(0,c),l(2,t),l(6,i),l(0,c),l(2,t)}function o(){c=ye(this),l(0,c)}function u(a){Q[a?"unshift":"push"](()=>{n=a,l(4,n),l(2,t)})}return s.$$set=a=>{"series"in a&&l(1,h=a.series),"sets"in a&&l(2,t=a.sets),"selectedSets"in a&&l(0,c=a.selectedSets)},s.$$.update=()=>{s.$$.dirty&5&&l(5,r=c.length===t.length),s.$$.dirty&5&&l(6,i=c.length>0&&c.length<t.length)},[c,h,t,_,n,r,i,v,y,d,o,u]}class Me extends pe{constructor(e){super(),Se(this,e,Ue,Le,ve,{series:1,sets:2,selectedSets:0,selectAll:7,unselectAll:8,toggle:3})}get selectAll(){return this.$$.ctx[7]}get unselectAll(){return this.$$.ctx[8]}get toggle(){return this.$$.ctx[3]}}function _e(s,e,l){const r=s.slice();return r[10]=e[l][0],r[11]=e[l][1],r[12]=e,r[13]=l,r}function ge(s){let e,l,r=Object.entries(s[1]),i=[];for(let t=0;t<r.length;t+=1)i[t]=me(_e(s,r,t));const h=t=>M(i[t],1,1,()=>{i[t]=null});return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=ue()},l(t){for(let c=0;c<i.length;c+=1)i[c].l(t);e=ue()},m(t,c){for(let n=0;n<i.length;n+=1)i[n].m(t,c);R(t,e,c),l=!0},p(t,c){if(c&7){r=Object.entries(t[1]);let n;for(n=0;n<r.length;n+=1){const v=_e(t,r,n);i[n]?(i[n].p(v,c),D(i[n],1)):(i[n]=me(v),i[n].c(),D(i[n],1),i[n].m(e.parentNode,e))}for(Ae(),n=r.length;n<i.length;n+=1)h(n);Ie()}},i(t){if(!l){for(let c=0;c<r.length;c+=1)D(i[c]);l=!0}},o(t){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)M(i[c]);l=!1},d(t){ke(i,t),t&&g(e)}}}function me(s){let e,l,r,i=s[13],h,t;function c(_){s[5](_,s[10])}const n=()=>s[6](l,i),v=()=>s[6](null,i);let y={series:s[10],sets:s[11]};return s[0][s[10]]!==void 0&&(y.selectedSets=s[0][s[10]]),l=new Me({props:y}),Q.push(()=>Be(l,"selectedSets",c)),n(),{c(){e=p("div"),Ne(l.$$.fragment),h=w(),this.h()},l(_){e=S(_,"DIV",{class:!0});var d=b(e);Pe(l.$$.fragment,d),h=C(d),d.forEach(g),this.h()},h(){T(e,"class","set svelte-n1266p")},m(_,d){R(_,e,d),we(l,e,null),f(e,h),t=!0},p(_,d){s=_,i!==s[13]&&(v(),i=s[13],n());const o={};d&2&&(o.series=s[10]),d&2&&(o.sets=s[11]),!r&&d&3&&(r=!0,o.selectedSets=s[0][s[10]],Ce(()=>r=!1)),l.$set(o)},i(_){t||(D(l.$$.fragment,_),t=!0)},o(_){M(l.$$.fragment,_),t=!1},d(_){_&&g(e),v(),De(l)}}}function Re(s){let e,l,r,i,h,t,c,n,v,y,_,d,o,u,a,k,G,N,j,q,F,J,H,Y,W,L,Z,z,P,V,K,X,m=s[1]&&ge(s);return{c(){e=p("div"),l=p("h1"),r=I("Settings"),i=w(),h=p("h2"),t=I("Guessing"),c=I(`
  Changes the various aspects of guessing cards.
  `),n=p("h3"),v=I("Lifelines"),y=I(`
  This feature is still being added
  `),_=p("h3"),d=I("Random Parameters"),o=I(`
  Changes the parameters which are used to get a random card.
  `),u=p("details"),a=p("summary"),k=I("Sets"),G=I(`
    If nothing is selected, all the sets are used. Some sets, like `),N=p("i"),j=I("Gym Heroes"),q=I(` are missing, since they do not contain
    a single Pok\xE9mon with a flavor text.`),F=p("br"),J=w(),H=p("button"),Y=I("Select all"),W=w(),L=p("button"),Z=I("Unselect all"),z=w(),P=p("div"),m&&m.c(),this.h()},l(B){e=S(B,"DIV",{class:!0});var E=b(e);l=S(E,"H1",{});var $=b(l);r=A($,"Settings"),$.forEach(g),i=C(E),h=S(E,"H2",{});var x=b(h);t=A(x,"Guessing"),x.forEach(g),c=A(E,`
  Changes the various aspects of guessing cards.
  `),n=S(E,"H3",{});var ee=b(n);v=A(ee,"Lifelines"),ee.forEach(g),y=A(E,`
  This feature is still being added
  `),_=S(E,"H3",{});var te=b(_);d=A(te,"Random Parameters"),te.forEach(g),o=A(E,`
  Changes the parameters which are used to get a random card.
  `),u=S(E,"DETAILS",{});var O=b(u);a=S(O,"SUMMARY",{class:!0});var se=b(a);k=A(se,"Sets"),se.forEach(g),G=A(O,`
    If nothing is selected, all the sets are used. Some sets, like `),N=S(O,"I",{});var le=b(N);j=A(le,"Gym Heroes"),le.forEach(g),q=A(O,` are missing, since they do not contain
    a single Pok\xE9mon with a flavor text.`),F=S(O,"BR",{}),J=C(O),H=S(O,"BUTTON",{});var ne=b(H);Y=A(ne,"Select all"),ne.forEach(g),W=C(O),L=S(O,"BUTTON",{});var ie=b(L);Z=A(ie,"Unselect all"),ie.forEach(g),z=C(O),P=S(O,"DIV",{class:!0});var oe=b(P);m&&m.l(oe),oe.forEach(g),O.forEach(g),E.forEach(g),this.h()},h(){T(a,"class","svelte-n1266p"),T(P,"class","sets svelte-n1266p"),T(e,"class","container svelte-n1266p")},m(B,E){R(B,e,E),f(e,l),f(l,r),f(e,i),f(e,h),f(h,t),f(e,c),f(e,n),f(n,v),f(e,y),f(e,_),f(_,d),f(e,o),f(e,u),f(u,a),f(a,k),f(u,G),f(u,N),f(N,j),f(u,q),f(u,F),f(u,J),f(u,H),f(H,Y),f(u,W),f(u,L),f(L,Z),f(u,z),f(u,P),m&&m.m(P,null),V=!0,K||(X=[U(H,"click",s[4]),U(L,"click",s[3])],K=!0)},p(B,[E]){B[1]?m?(m.p(B,E),E&2&&D(m,1)):(m=ge(B),m.c(),D(m,1),m.m(P,null)):m&&(Ae(),M(m,1,1,()=>{m=null}),Ie())},i(B){V||(D(m),V=!0)},o(B){M(m),V=!1},d(B){B&&g(e),m&&m.d(),K=!1,Ee(X)}}}function Ve(s,e,l){const{groupBy:r}=He;let i,h={};const t=JSON.parse(Te(fe.enabledSets));let c=[];function n(o,u){let a=u.map(k=>k.id);l(0,h[o]=t.filter(k=>a.includes(k)),h)}function v(){for(const o of c)o.unselectAll()}function y(){for(const o of c)o.selectAll()}Oe(()=>{console.log("test3"),Ge.getAllSetsWithFlavorTexts().then(o=>{l(1,i=r(o,u=>u.series));for(const[u,a]of Object.entries(i))n(u,a)})});function _(o,u){s.$$.not_equal(h[u],o)&&(h[u]=o,l(0,h))}function d(o,u){Q[o?"unshift":"push"](()=>{c[u]=o,l(2,c)})}return s.$$.update=()=>{s.$$.dirty&1&&fe.enabledSets.set(JSON.stringify(Object.values(h).flatMap(o=>o)))},[h,i,c,v,y,_,d]}class We extends pe{constructor(e){super(),Se(this,e,Ve,Re,ve,{})}}export{We as default};
