import{S,i as T,s as B,F as O,l as k,a as H,m as v,p as b,h,c as J,q as g,R as u,b as R,G as F,O as z,H as j,I as w,J as D,f as E,t as V}from"./index-3edbca9c.js";const P="/GuessThatFlavorText/_app/immutable/assets/pokemon_card_back-2800398f.png";const A=a=>({}),q=a=>({}),K=a=>({}),G=a=>({});function L(a){let n,s,c,_,f,i,r,d;const m=a[5].front,t=O(m,a,a[4],G),y=a[5].back,l=O(y,a,a[4],q);return{c(){n=k("div"),s=k("div"),c=k("div"),t&&t.c(),_=H(),f=k("div"),l&&l.c(),this.h()},l(e){n=v(e,"DIV",{class:!0});var o=b(n);s=v(o,"DIV",{class:!0});var p=b(s);c=v(p,"DIV",{class:!0});var C=b(c);t&&t.l(C),C.forEach(h),_=J(p),f=v(p,"DIV",{class:!0});var I=b(f);l&&l.l(I),I.forEach(h),p.forEach(h),o.forEach(h),this.h()},h(){g(c,"class","front svelte-k5yrj8"),g(f,"class","back svelte-k5yrj8"),g(s,"class","container-inner svelte-k5yrj8"),u(s,"animate",a[2]),u(s,"flipped-front",a[0]),u(s,"flipped-back",!a[0]),g(n,"class","container svelte-k5yrj8")},m(e,o){R(e,n,o),F(n,s),F(s,c),t&&t.m(c,null),F(s,_),F(s,f),l&&l.m(f,null),i=!0,r||(d=z(s,"click",a[6]),r=!0)},p(e,[o]){t&&t.p&&(!i||o&16)&&j(t,m,e,e[4],i?D(m,e[4],o,K):w(e[4]),G),l&&l.p&&(!i||o&16)&&j(l,y,e,e[4],i?D(y,e[4],o,A):w(e[4]),q),o&4&&u(s,"animate",e[2]),o&1&&u(s,"flipped-front",e[0]),o&1&&u(s,"flipped-back",!e[0])},i(e){i||(E(t,e),E(l,e),i=!0)},o(e){V(t,e),V(l,e),i=!1},d(e){e&&h(n),t&&t.d(e),l&&l.d(e),r=!1,d()}}}function M(a,n,s){let{$$slots:c={},$$scope:_}=n,{showFront:f=!0}=n,{flipOnClick:i=!0}=n,{animate:r=!1}=n;console.log(r);function d(){s(0,f=!f)}const m=()=>{i&&d()};return a.$$set=t=>{"showFront"in t&&s(0,f=t.showFront),"flipOnClick"in t&&s(1,i=t.flipOnClick),"animate"in t&&s(2,r=t.animate),"$$scope"in t&&s(4,_=t.$$scope)},[f,i,r,d,_,c,m]}class Q extends S{constructor(n){super(),T(this,n,M,L,B,{showFront:0,flipOnClick:1,animate:2,flip:3})}get flip(){return this.$$.ctx[3]}}export{Q as F,P as c};
