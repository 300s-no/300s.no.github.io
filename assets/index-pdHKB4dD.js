var D=Object.defineProperty;var J=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(J(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function m(){}function F(e){return e()}function S(){return Object.create(null)}function w(e){e.forEach(F)}function R(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function P(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function X(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function O(){return Y(" ")}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Z(e){return Array.from(e.childNodes)}let A;function y(e){A=e}const g=[],M=[];let $=[];const j=[],ee=Promise.resolve();let E=!1;function te(){E||(E=!0,ee.then(H))}function q(e){$.push(e)}const b=new Set;let p=0;function H(){if(p!==0)return;const e=A;do{try{for(;p<g.length;){const t=g[p];p++,y(t),ne(t.$$)}}catch(t){throw g.length=0,p=0,t}for(y(null),g.length=0,p=0;M.length;)M.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];b.has(n)||(b.add(n),n())}$.length=0}while(g.length);for(;j.length;)j.pop()();E=!1,b.clear(),y(e)}function ne(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function re(e){const t=[],n=[];$.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),$=t}const v=new Set;let se;function K(e,t){e&&e.i&&(v.delete(e),e.i(t))}function oe(e,t,n,r){if(e&&e.o){if(v.has(e))return;v.add(e),se.c.push(()=>{v.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function k(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ie(e){e&&e.c()}function U(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),q(()=>{const i=e.$$.on_mount.map(F).filter(R);e.$$.on_destroy?e.$$.on_destroy.push(...i):w(i),e.$$.on_mount=[]}),s.forEach(q)}function V(e,t){const n=e.$$;n.fragment!==null&&(re(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(g.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,r,s,i,o=null,f=[-1]){const u=A;y(e);const c=e.$$={fragment:null,ctx:[],props:i,update:m,not_equal:s,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:S(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};o&&o(c.root);let N=!1;if(c.ctx=n?n(e,t.props||{},(l,I,...C)=>{const L=C.length?C[0]:I;return c.ctx&&s(c.ctx[l],c.ctx[l]=L)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](L),N&&ce(e,l)),I}):[],c.update(),N=!0,w(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const l=Z(t.target);c.fragment&&c.fragment.l(l),l.forEach(d)}else c.fragment&&c.fragment.c();t.intro&&K(e.$$.fragment),U(e,t.target,t.anchor),H()}y(u)}class z{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){V(this,1),this.$destroy=m}$on(t,n){if(!R(n))return m;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);function B(e,t,n){const r=e.slice();return r[1]=t[n],r}function T(e){let t,n,r;return{c(){t=_("div"),t.textContent=`${e[1].question}`,n=O(),r=_("div"),r.textContent=`${e[1].answer} `,a(t,"class","question svelte-8eyhio"),a(r,"class","answer svelte-8eyhio")},m(s,i){h(s,t,i),h(s,n,i),h(s,r,i)},p:m,d(s){s&&(d(t),d(n),d(r))}}}function fe(e){let t,n=k(e[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=T(B(e,n,s));return{c(){t=_("div");for(let s=0;s<r.length;s+=1)r[s].c();a(t,"class","questions svelte-8eyhio")},m(s,i){h(s,t,i);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null)},p(s,[i]){if(i&1){n=k(s[0]);let o;for(o=0;o<n.length;o+=1){const f=B(s,n,o);r[o]?r[o].p(f,i):(r[o]=T(f),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},i:m,o:m,d(s){s&&d(t),X(r,s)}}}function le(e){return[[{question:"Want clears for your car ?",answer:"Message me on the Instagram account listed above. Include info about the car, some photos & where are you from in the message to get more info if/when I could make clears for your car."}]]}class ae extends z{constructor(t){super(),W(this,t,le,fe,G,{})}}function de(e){let t,n,r,s,i,o,f;return o=new ae({}),{c(){t=_("div"),n=O(),r=_("main"),s=_("div"),s.innerHTML='<a id="instagram" href="https://www.instagram.com/sebastiansmash/" target="_blank" class="svelte-1n6kylt"><p class="svelte-1n6kylt">INSTAGRAM</p></a>',i=O(),ie(o.$$.fragment),a(t,"id","background"),a(t,"class","svelte-1n6kylt"),a(s,"id","centerContainer"),a(s,"class","svelte-1n6kylt"),a(r,"class","svelte-1n6kylt")},m(u,c){h(u,t,c),h(u,n,c),h(u,r,c),P(r,s),P(r,i),U(o,r,null),f=!0},p:m,i(u){f||(K(o.$$.fragment,u),f=!0)},o(u){oe(o.$$.fragment,u),f=!1},d(u){u&&(d(t),d(n),d(r)),V(o)}}}class he extends z{constructor(t){super(),W(this,t,null,de,G,{})}}new he({target:document.getElementById("app")});
