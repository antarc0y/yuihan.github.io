import{S as Oe,i as Fe,s as qe,k as U,a as C,q as L,e as le,N as Ie,l as W,h as m,c as O,m as M,r as N,n as g,C as D,D as k,b as S,E as ee,O as He,F as ae,P as Q,G as Be,H as Ve,Q as Ge,p as X,R as Re,u as te,T as Me,U as se}from"../chunks/index.110a4be7.js";import{p as Je}from"../chunks/parse.bee59afc.js";import{j as Ke,k as Qe,r as Xe}from"../chunks/singletons.aee4ddcd.js";var re="mz3PUW_p",ne=["#FFC700","#FF0000","#2E3191","#41BBC7"],oe=3500,ie=.5,ce=150,ue="mix",fe=12,de="",he=!0,_e=800,me=1600;function Ye(t,e={}){let{colors:l=ne,duration:a=oe,force:n=ie,particleCount:o=ce,particleShape:r=ue,particleSize:s=fe,particleClass:f=de,destroyAfterDone:h=he,stageHeight:d=_e,stageWidth:v=me}=e;(function(A){if(document.querySelector("style[data-neoconfetti]"))return;const T=Y("style");T.dataset.neoconfetti="",T.textContent=A,Z(document.head,T)})('@keyframes mz3PUW_ya{to{translate:0 var(--sh)}}@keyframes mz3PUW_xa{to{translate:var(--xlp)0}}@keyframes mz3PUW_r{50%{rotate:var(--hr)180deg}to{rotate:var(--r)360deg}}.mz3PUW_c{z-index:1200;width:0;height:0;position:relative;overflow:visible}.mz3PUW_p{animation:xa var(--dc)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:mz3PUW_xa}.mz3PUW_p>div{animation:ya var(--dc)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--w);height:var(--h);animation-name:mz3PUW_ya;position:absolute;top:0;left:0}.mz3PUW_p>div:before{content:"";background-color:var(--bgc);animation:r var(--rd)infinite linear;border-radius:var(--br);width:100%;height:100%;animation-name:mz3PUW_r;display:block}'),t.classList.add("mz3PUW_c"),t.style.setProperty("--sh",d+"px");let i=[],u=[];const _=()=>G(F()*(tt-1)),p=(A,T)=>r!=="rectangles"&&(A==="circles"||lt(T));function z(A,T){const j=_(),w=p(r,j),c=(E,q)=>A.style.setProperty(E,q+"");c("--xlp",x(K(ge(T,90)-180),0,180,-v/2,v/2)+"px"),c("--dc",a-G(1e3*F())+"ms");const y=F()<xe?B(F()*$e,2):0;c("--x1",y),c("--x2",-1*y),c("--x3",y),c("--x4",B(K(x(K(ge(T,90)-180),0,180,-1,1)),4)),c("--y1",B(F()*be,4)),c("--y2",B(F()*n*(Le()?1:-1),4)),c("--y3",be),c("--y4",B(et(x(K(T-180),0,180,n,-n),0),4)),c("--w",(w?s:G(4*F())+s/2)+"px"),c("--h",(w?s:G(2*F())+s)+"px");const H=j.toString(2).padStart(3,"0").split("");c("--hr",H.map(E=>+E/2+"").join(" ")),c("--r",H.join(" ")),c("--rd",B(F()*(Ze-pe)+pe)+"ms"),c("--br",w?"50%":0)}let P;function b(){t.innerHTML="",clearTimeout(P),i=ve(o,l),u=function(A,T=[],j){const w=[];for(const{color:c}of T){const y=Y("div");y.className=`${re} ${j}`,y.style.setProperty("--bgc",c);const H=Y("div");Z(y,H),Z(A,y),w.push(y)}return w}(t,i,f);for(const[A,T]of ye(u))z(T,i[+A].degree);P=setTimeout(()=>{h&&(t.innerHTML="")},a)}return b(),{update(A){const T=A.particleCount??ce,j=A.particleShape??ue,w=A.particleSize??fe,c=A.particleClass??de,y=A.colors??ne,H=A.stageHeight??_e,E=A.duration??oe,q=A.force??ie,R=A.stageWidth??me,V=A.destroyAfterDone??he;i=ve(T,y);let I=!1;if(T===o){u=Array.from(t.querySelectorAll(`.${re}`));for(const[De,{color:Ce}]of ye(i)){const J=u[+De];JSON.stringify(l)!==JSON.stringify(y)&&J.style.setProperty("--bgc",Ce),j!==r&&J.style.setProperty("--br",p(j,_())?"50%":"0"),c!==f&&(f&&J.classList.remove(f),c&&J.classList.add(c))}}else I=!0;h&&!V&&clearTimeout(P),t.style.setProperty("--sh",H+"px"),a=E,l=y,n=q,o=T,r=j,s=w,f=c,h=V,d=H,v=R,I&&b()},destroy(){t.innerHTML="",clearTimeout(P)}}}var pe=200,Ze=800,xe=.1,$e=.3,be=.5,K=Math.abs,F=Math.random,G=Math.round,et=Math.max,Y=t=>document.createElement(t),Z=(t,e)=>t.appendChild(e),ve=(t,e)=>Array.from({length:t},(l,a)=>({color:e[a%e.length],degree:360*a/t})),B=(t,e=2)=>G((t+Number.EPSILON)*10**e)/10**e,x=(t,e,l,a,n)=>(t-e)*(n-a)/(l-e)+a,ge=(t,e)=>t+e>360?t+e-360:t+e,Le=()=>F()>.5,ye=Object.entries,tt=6,lt=t=>t!==1&&Le();const at=Ke("invalidate_all");function st(t){return Qe.apply_action(t)}function rt(t){const e=JSON.parse(t);return e.data&&(e.data=Je(e.data)),e}function ke(t){return HTMLElement.prototype.cloneNode.call(t)}function nt(t,e=()=>{}){const l=async({action:n,result:o,reset:r=!0,invalidateAll:s=!0})=>{o.type==="success"&&(r&&HTMLFormElement.prototype.reset.call(t),s&&await at()),(location.origin+location.pathname===n.origin+n.pathname||o.type==="redirect"||o.type==="error")&&st(o)};async function a(n){var _,p,z,P;if(((_=n.submitter)!=null&&_.hasAttribute("formmethod")?n.submitter.formMethod:ke(t).method)!=="post")return;n.preventDefault();const r=new URL((p=n.submitter)!=null&&p.hasAttribute("formaction")?n.submitter.formAction:ke(t).action),s=new FormData(t),f=(z=n.submitter)==null?void 0:z.getAttribute("name");f&&s.append(f,((P=n.submitter)==null?void 0:P.getAttribute("value"))??"");const h=new AbortController;let d=!1;const i=await e({action:r,cancel:()=>d=!0,controller:h,get data(){return s},formData:s,get form(){return t},formElement:t,submitter:n.submitter})??l;if(d)return;let u;try{const b=await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:s,signal:h.signal});u=rt(await b.text()),u.type==="error"&&(u.status=b.status)}catch(b){if((b==null?void 0:b.name)==="AbortError")return;u={type:"error",error:b}}i({action:r,get data(){return s},formData:s,get form(){return t},formElement:t,update:b=>l({action:r,result:u,reset:b==null?void 0:b.reset,invalidateAll:b==null?void 0:b.invalidateAll}),result:u})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",a)}}}const Ne="(prefers-reduced-motion: reduce)",ot=()=>window.matchMedia(Ne).matches,it=Xe(ot(),t=>{{const e=a=>{t(a.matches)},l=window.matchMedia(Ne);return l.addEventListener("change",e),()=>{l.removeEventListener("change",e)}}});const{document:$,window:ct}=Ge;function we(t,e,l){const a=t.slice();return a[9]=e[l],a}function Ee(t,e,l){const a=t.slice();return a[12]=e[l],a}function Pe(t,e,l){const a=t.slice();a[15]=e[l],a[9]=l;const n=a[9]===a[3];return a[16]=n,a}function Ae(t,e,l){var d,v;const a=t.slice();a[15]=e[l],a[25]=l;const n=(d=a[0].answers[a[9]])==null?void 0:d[a[25]];a[18]=n;const o=((v=a[0].guesses[a[9]])==null?void 0:v[a[25]])??"";a[19]=o;const r=a[16]&&a[25]===a[0].guesses[a[9]].length;a[20]=r;const s=a[18]==="x";a[21]=s;const f=a[18]==="c";a[22]=f;const h=a[18]==="_";return a[23]=h,a}function ut(t){let e;return{c(){e=L("empty")},l(l){e=N(l,"empty")},m(l,a){S(l,e,a)},d(l){l&&m(e)}}}function ft(t){let e;return{c(){e=L("(absent)")},l(l){e=N(l,"(absent)")},m(l,a){S(l,e,a)},d(l){l&&m(e)}}}function dt(t){let e;return{c(){e=L("(present)")},l(l){e=N(l,"(present)")},m(l,a){S(l,e,a)},d(l){l&&m(e)}}}function ht(t){let e;return{c(){e=L("(correct)")},l(l){e=N(l,"(correct)")},m(l,a){S(l,e,a)},d(l){l&&m(e)}}}function Te(t){let e,l=t[19]+"",a,n,o,r,s,f,h;function d(u,_){return u[21]?ht:u[22]?dt:u[23]?ft:ut}let v=d(t),i=v(t);return{c(){e=U("div"),a=L(l),n=C(),o=U("span"),i.c(),r=C(),s=U("input"),this.h()},l(u){e=W(u,"DIV",{class:!0});var _=M(e);a=N(_,l),n=O(_),o=W(_,"SPAN",{class:!0});var p=M(o);i.l(p),p.forEach(m),r=O(_),s=W(_,"INPUT",{name:!0,type:!0}),_.forEach(m),this.h()},h(){g(o,"class","visually-hidden"),g(s,"name","guess"),s.disabled=f=!t[16],g(s,"type","hidden"),s.value=h=t[19],g(e,"class","letter svelte-1pg2j5l"),D(e,"exact",t[21]),D(e,"close",t[22]),D(e,"missing",t[23]),D(e,"selected",t[20])},m(u,_){S(u,e,_),k(e,a),k(e,n),k(e,o),i.m(o,null),k(e,r),k(e,s)},p(u,_){_&1&&l!==(l=u[19]+"")&&te(a,l),v!==(v=d(u))&&(i.d(1),i=v(u),i&&(i.c(),i.m(o,null))),_&8&&f!==(f=!u[16])&&(s.disabled=f),_&1&&h!==(h=u[19])&&(s.value=h),_&1&&D(e,"exact",u[21]),_&1&&D(e,"close",u[22]),_&1&&D(e,"missing",u[23]),_&9&&D(e,"selected",u[20])},d(u){u&&m(e),i.d()}}}function Se(t){let e,l,a=t[9]+1+"",n,o,r,s,f=Array(5),h=[];for(let d=0;d<f.length;d+=1)h[d]=Te(Ae(t,f,d));return{c(){e=U("h2"),l=L("Row "),n=L(a),o=C(),r=U("div");for(let d=0;d<h.length;d+=1)h[d].c();s=C(),this.h()},l(d){e=W(d,"H2",{class:!0});var v=M(e);l=N(v,"Row "),n=N(v,a),v.forEach(m),o=O(d),r=W(d,"DIV",{class:!0});var i=M(r);for(let u=0;u<h.length;u+=1)h[u].l(i);s=O(i),i.forEach(m),this.h()},h(){g(e,"class","visually-hidden"),g(r,"class","row svelte-1pg2j5l"),D(r,"current",t[16])},m(d,v){S(d,e,v),k(e,l),k(e,n),S(d,o,v),S(d,r,v);for(let i=0;i<h.length;i+=1)h[i]&&h[i].m(r,null);k(r,s)},p(d,v){if(v&9){f=Array(5);let i;for(i=0;i<f.length;i+=1){const u=Ae(d,f,i);h[i]?h[i].p(u,v):(h[i]=Te(u),h[i].c(),h[i].m(r,s))}for(;i<h.length;i+=1)h[i].d(1);h.length=f.length}v&8&&D(r,"current",d[16])},d(d){d&&m(e),d&&m(o),d&&m(r),Q(h,d)}}}function _t(t){let e,l,a,n,o,r,s,f,h,d,v=["qwertyuiop","asdfghjkl","zxcvbnm"],i=[];for(let u=0;u<3;u+=1)i[u]=je(we(t,v,u));return{c(){e=U("div"),l=U("button"),a=L("enter"),o=C(),r=U("button"),s=L("back"),f=C();for(let u=0;u<3;u+=1)i[u].c();this.h()},l(u){e=W(u,"DIV",{class:!0});var _=M(e);l=W(_,"BUTTON",{"data-key":!0,class:!0});var p=M(l);a=N(p,"enter"),p.forEach(m),o=O(_),r=W(_,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0});var z=M(r);s=N(z,"back"),z.forEach(m),f=O(_);for(let P=0;P<3;P+=1)i[P].l(_);_.forEach(m),this.h()},h(){g(l,"data-key","enter"),l.disabled=n=!t[6],g(l,"class","svelte-1pg2j5l"),D(l,"selected",t[6]),g(r,"data-key","backspace"),g(r,"formaction","?/update"),g(r,"name","key"),r.value="backspace",g(r,"class","svelte-1pg2j5l"),g(e,"class","keyboard svelte-1pg2j5l")},m(u,_){S(u,e,_),k(e,l),k(l,a),k(e,o),k(e,r),k(r,s),k(e,f);for(let p=0;p<3;p+=1)i[p]&&i[p].m(e,null);h||(d=ee(r,"click",Me(t[8])),h=!0)},p(u,_){if(_&64&&n!==(n=!u[6])&&(l.disabled=n),_&64&&D(l,"selected",u[6]),_&301){v=["qwertyuiop","asdfghjkl","zxcvbnm"];let p;for(p=0;p<3;p+=1){const z=we(u,v,p);i[p]?i[p].p(z,_):(i[p]=je(z),i[p].c(),i[p].m(e,null))}for(;p<3;p+=1)i[p].d(1)}},d(u){u&&m(e),Q(i,u),h=!1,d()}}}function mt(t){let e,l,a=t[4]?"you won :)":"game over :(",n,o,r=!t[4]&&t[0].answer&&Ue(t);return{c(){r&&r.c(),e=C(),l=U("button"),n=L(a),o=L(" play again?"),this.h()},l(s){r&&r.l(s),e=O(s),l=W(s,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var f=M(l);n=N(f,a),o=N(f," play again?"),f.forEach(m),this.h()},h(){g(l,"data-key","enter"),g(l,"class","restart selected svelte-1pg2j5l"),g(l,"formaction","?/restart")},m(s,f){r&&r.m(s,f),S(s,e,f),S(s,l,f),k(l,n),k(l,o)},p(s,f){!s[4]&&s[0].answer?r?r.p(s,f):(r=Ue(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),f&16&&a!==(a=s[4]?"you won :)":"game over :(")&&te(n,a)},d(s){r&&r.d(s),s&&m(e),s&&m(l)}}}function ze(t){let e,l,a,n,o,r,s;return{c(){e=U("button"),l=L(t[12]),this.h()},l(f){e=W(f,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var h=M(e);l=N(h,t[12]),h.forEach(m),this.h()},h(){g(e,"data-key",t[12]),g(e,"class",a=se(t[2][t[12]])+" svelte-1pg2j5l"),e.disabled=n=t[0].guesses[t[3]].length===5,g(e,"formaction","?/update"),g(e,"name","key"),e.value=t[12],g(e,"aria-label",o=t[12]+" "+(t[5][t[12]]||""))},m(f,h){S(f,e,h),k(e,l),r||(s=ee(e,"click",Me(t[8])),r=!0)},p(f,h){h&4&&a!==(a=se(f[2][f[12]])+" svelte-1pg2j5l")&&g(e,"class",a),h&9&&n!==(n=f[0].guesses[f[3]].length===5)&&(e.disabled=n),h&32&&o!==(o=f[12]+" "+(f[5][f[12]]||""))&&g(e,"aria-label",o)},d(f){f&&m(e),r=!1,s()}}}function je(t){let e,l,a=t[9],n=[];for(let o=0;o<a.length;o+=1)n[o]=ze(Ee(t,a,o));return{c(){e=U("div");for(let o=0;o<n.length;o+=1)n[o].c();l=C(),this.h()},l(o){e=W(o,"DIV",{class:!0});var r=M(e);for(let s=0;s<n.length;s+=1)n[s].l(r);l=O(r),r.forEach(m),this.h()},h(){g(e,"class","row svelte-1pg2j5l")},m(o,r){S(o,e,r);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(e,null);k(e,l)},p(o,r){if(r&301){a=o[9];let s;for(s=0;s<a.length;s+=1){const f=Ee(o,a,s);n[s]?n[s].p(f,r):(n[s]=ze(f),n[s].c(),n[s].m(e,l))}for(;s<n.length;s+=1)n[s].d(1);n.length=a.length}},d(o){o&&m(e),Q(n,o)}}}function Ue(t){let e,l,a=t[0].answer+"",n,o;return{c(){e=U("p"),l=L('the answer was "'),n=L(a),o=L('"')},l(r){e=W(r,"P",{});var s=M(e);l=N(s,'the answer was "'),n=N(s,a),o=N(s,'"'),s.forEach(m)},m(r,s){S(r,e,s),k(e,l),k(e,n),k(e,o)},p(r,s){s&1&&a!==(a=r[0].answer+"")&&te(n,a)},d(r){r&&m(e)}}}function We(t){let e,l,a,n;return{c(){e=U("div"),this.h()},l(o){e=W(o,"DIV",{style:!0}),M(e).forEach(m),this.h()},h(){X(e,"position","absolute"),X(e,"left","50%"),X(e,"top","30%")},m(o,r){S(o,e,r),a||(n=He(l=Ye.call(null,e,{particleCount:t[7]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),a=!0)},p(o,r){l&&Re(l.update)&&r&128&&l.update.call(null,{particleCount:o[7]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(o){o&&m(e),a=!1,n()}}}function pt(t){let e,l,a,n,o,r,s,f,h,d,v,i,u,_,p,z,P=Array(6),b=[];for(let c=0;c<P.length;c+=1)b[c]=Se(Pe(t,P,c));function A(c,y){return c[4]||c[0].answers.length>=6?mt:_t}let T=A(t),j=T(t),w=t[4]&&We(t);return{c(){e=U("meta"),l=C(),a=U("h1"),n=L("Sverdle"),o=C(),r=U("form"),s=U("a"),f=L("How to play"),h=C(),d=U("div");for(let c=0;c<b.length;c+=1)b[c].c();v=C(),i=U("div"),j.c(),u=C(),w&&w.c(),_=le(),this.h()},l(c){const y=Ie("svelte-18lvto8",$.head);e=W(y,"META",{name:!0,content:!0}),y.forEach(m),l=O(c),a=W(c,"H1",{class:!0});var H=M(a);n=N(H,"Sverdle"),H.forEach(m),o=O(c),r=W(c,"FORM",{method:!0,action:!0,class:!0});var E=M(r);s=W(E,"A",{class:!0,href:!0});var q=M(s);f=N(q,"How to play"),q.forEach(m),h=O(E),d=W(E,"DIV",{class:!0});var R=M(d);for(let I=0;I<b.length;I+=1)b[I].l(R);R.forEach(m),v=O(E),i=W(E,"DIV",{class:!0});var V=M(i);j.l(V),V.forEach(m),E.forEach(m),u=O(c),w&&w.l(c),_=le(),this.h()},h(){var c;$.title="Sverdle",g(e,"name","description"),g(e,"content","A Wordle clone written in SvelteKit"),g(a,"class","visually-hidden"),g(s,"class","how-to-play svelte-1pg2j5l"),g(s,"href","/sverdle/how-to-play"),g(d,"class","grid svelte-1pg2j5l"),D(d,"playing",!t[4]),D(d,"bad-guess",(c=t[1])==null?void 0:c.badGuess),g(i,"class","controls svelte-1pg2j5l"),g(r,"method","POST"),g(r,"action","?/enter"),g(r,"class","svelte-1pg2j5l")},m(c,y){k($.head,e),S(c,l,y),S(c,a,y),k(a,n),S(c,o,y),S(c,r,y),k(r,s),k(s,f),k(r,h),k(r,d);for(let H=0;H<b.length;H+=1)b[H]&&b[H].m(d,null);k(r,v),k(r,i),j.m(i,null),S(c,u,y),w&&w.m(c,y),S(c,_,y),p||(z=[ee(ct,"keydown",bt),He(nt.call(null,r,vt))],p=!0)},p(c,[y]){var H;if(y&9){P=Array(6);let E;for(E=0;E<P.length;E+=1){const q=Pe(c,P,E);b[E]?b[E].p(q,y):(b[E]=Se(q),b[E].c(),b[E].m(d,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=P.length}y&16&&D(d,"playing",!c[4]),y&2&&D(d,"bad-guess",(H=c[1])==null?void 0:H.badGuess),T===(T=A(c))&&j?j.p(c,y):(j.d(1),j=T(c),j&&(j.c(),j.m(i,null))),c[4]?w?w.p(c,y):(w=We(c),w.c(),w.m(_.parentNode,_)):w&&(w.d(1),w=null)},i:ae,o:ae,d(c){m(e),c&&m(l),c&&m(a),c&&m(o),c&&m(r),Q(b,c),j.d(),c&&m(u),w&&w.d(c),c&&m(_),p=!1,Be(z)}}}function bt(t){var e;t.metaKey||(e=document.querySelector(`[data-key="${t.key}" i]`))==null||e.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}const vt=()=>({update:t})=>{t({reset:!1})};function gt(t,e,l){let a,n,o,r;Ve(t,it,i=>l(7,r=i));let{data:s}=e,{form:f}=e,h,d;function v(i){const u=s.guesses[n],_=i.target.getAttribute("data-key");_==="backspace"?(l(0,s.guesses[n]=u.slice(0,-1),s),f!=null&&f.badGuess&&l(1,f.badGuess=!1,f)):u.length<5&&l(0,s.guesses[n]+=_,s)}return t.$$set=i=>{"data"in i&&l(0,s=i.data),"form"in i&&l(1,f=i.form)},t.$$.update=()=>{var i;t.$$.dirty&1&&l(4,a=s.answers.at(-1)==="xxxxx"),t.$$.dirty&17&&l(3,n=a?-1:s.answers.length),t.$$.dirty&13&&(l(2,h={}),l(5,d={}),s.answers.forEach((u,_)=>{const p=s.guesses[_];for(let z=0;z<5;z+=1){const P=p[z];u[z]==="x"?(l(2,h[P]="exact",h),l(5,d[P]="correct",d)):h[P]||(l(2,h[P]=u[z]==="c"?"close":"missing",h),l(5,d[P]=u[z]==="c"?"present":"absent",d))}})),t.$$.dirty&9&&l(6,o=((i=s.guesses[n])==null?void 0:i.length)===5)},[s,f,h,n,a,d,o,r,v]}class Et extends Oe{constructor(e){super(),Fe(this,e,gt,pt,qe,{data:0,form:1})}}export{Et as component};
