import{S as c,i as m,s as i,x as p,y as u,z as d,f,t as l,C as g,Q as _}from"../../chunks/index-2cb11f61.js";import{P as C}from"../../chunks/LoadingIcon-c8510d68.js";import{p as b}from"../../chunks/stores-29074430.js";import{C as $}from"../../chunks/CardGuess-c6615660.js";import"../../chunks/index-854bf481.js";import"../../chunks/Modal.svelte_svelte_type_style_lang-a6861bc3.js";import"../../chunks/paths-b9644fda.js";import"../../chunks/Flippable-6fc86018.js";import"../../chunks/close-icon-2ac8c1d9.js";function h(o){let r,e;return r=new $({props:{card:o[0]}}),{c(){p(r.$$.fragment)},l(t){u(r.$$.fragment,t)},m(t,a){d(r,t,a),e=!0},p(t,[a]){const s={};a&1&&(s.card=t[0]),r.$set(s)},i(t){e||(f(r.$$.fragment,t),e=!0)},o(t){l(r.$$.fragment,t),e=!1},d(t){g(r,t)}}}function x(o,r,e){let t;_(o,b,n=>e(1,t=n));let{card:a=null}=r,s=atob(t.params.b64CardId);return a==null&&C.getCard(s).then(n=>{e(0,a=n)}),o.$$set=n=>{"card"in n&&e(0,a=n.card)},[a]}class B extends c{constructor(r){super(),m(this,r,x,h,i,{card:0})}}export{B as default};
