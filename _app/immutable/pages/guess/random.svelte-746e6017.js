import{S as p,i as _,s as d,l as h,m as $,p as g,h as l,b,t as m,d as k,f as c,x as C,y,z as R,C as S,g as w,n as P}from"../../chunks/index-3edbca9c.js";import{P as i}from"../../chunks/PokemonApiService-f35c2ef0.js";import{b as q}from"../../chunks/navigation-e4734af4.js";import{b as u}from"../../chunks/paths-b9644fda.js";import{C as v}from"../../chunks/CardGuess-0e435f22.js";import"../../chunks/_commonjsHelpers-cea7ac1a.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/Modal.svelte_svelte_type_style_lang-27e94e64.js";import"../../chunks/Flipable-58b21b00.js";function f(s){let r,o;return r=new v({props:{card:s[0]}}),{c(){C(r.$$.fragment)},l(t){y(r.$$.fragment,t)},m(t,a){R(r,t,a),o=!0},p(t,a){const e={};a&1&&(e.card=t[0]),r.$set(e)},i(t){o||(c(r.$$.fragment,t),o=!0)},o(t){m(r.$$.fragment,t),o=!1},d(t){S(r,t)}}}function z(s){let r,o=s[0],t,a=f(s);return{c(){r=h("div"),a.c()},l(e){r=$(e,"DIV",{});var n=g(r);a.l(n),n.forEach(l)},m(e,n){b(e,r,n),a.m(r,null),t=!0},p(e,[n]){n&1&&d(o,o=e[0])?(w(),m(a,1,1,P),k(),a=f(e),a.c(),c(a,1),a.m(r,null)):a.p(e,n)},i(e){t||(c(a),t=!0)},o(e){m(a),t=!1},d(e){e&&l(r),a.d(e)}}}async function F({params:s,fetch:r,stuff:o}){let t=await i.getRandomCard();return{status:200,props:{card:t}}}function A(s,r,o){let{card:t}=r;q(e=>{e.from!=null&&e.to!=null&&e.from.pathname===e.to.pathname&&(e.to.pathname===`${u}/guess/random`||e.to.pathname===`/${u}/guess/random`)&&(e.cancel(),a())});function a(){i.getRandomCard().then(e=>{o(0,t=e)})}return s.$$set=e=>{"card"in e&&o(0,t=e.card)},[t]}class H extends p{constructor(r){super(),_(this,r,A,z,d,{card:0})}}export{H as default,F as load};