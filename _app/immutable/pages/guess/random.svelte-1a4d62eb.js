import{S as i,i as d,s as p,e as u,b as _,t as m,d as h,f as c,h as k,x as $,y as b,z as y,C as g,g as C,n as S}from"../../chunks/index-621a1bb0.js";import{b as N}from"../../chunks/navigation-e4734af4.js";import{b as l}from"../../chunks/paths-b9644fda.js";import{C as P}from"../../chunks/CardGuess-1c16f4a7.js";import{P as R}from"../../chunks/PokemonApiService-1b5e6158.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/LoadingIcon-a0a29feb.js";import"../../chunks/Modal.svelte_svelte_type_style_lang-7642ac20.js";import"../../chunks/Flippable-c0cd92ac.js";function f(s){let o,a;return o=new P({props:{card:s[0]}}),{c(){$(o.$$.fragment)},l(r){b(o.$$.fragment,r)},m(r,t){y(o,r,t),a=!0},p(r,t){const e={};t&1&&(e.card=r[0]),o.$set(e)},i(r){a||(c(o.$$.fragment,r),a=!0)},o(r){m(o.$$.fragment,r),a=!1},d(r){g(o,r)}}}function q(s){let o=s[0],a,r,t=f(s);return{c(){t.c(),a=u()},l(e){t.l(e),a=u()},m(e,n){t.m(e,n),_(e,a,n),r=!0},p(e,[n]){n&1&&p(o,o=e[0])?(C(),m(t,1,1,S),h(),t=f(e),t.c(),c(t,1),t.m(a.parentNode,a)):t.p(e,n)},i(e){r||(c(t),r=!0)},o(e){m(t),r=!1},d(e){e&&k(a),t.d(e)}}}function w(s,o,a){let{card:r}=o;function t(){R.getRandomCard().then(e=>{a(0,r=e)})}return r==null&&t(),N(e=>{e.from!=null&&e.to!=null&&e.from.pathname===e.to.pathname&&(e.to.pathname===`${l}/guess/random`||e.to.pathname===`/${l}/guess/random`)&&(e.cancel(),t())}),s.$$set=e=>{"card"in e&&a(0,r=e.card)},[r]}class H extends i{constructor(o){super(),d(this,o,w,q,p,{card:0})}}export{H as default};