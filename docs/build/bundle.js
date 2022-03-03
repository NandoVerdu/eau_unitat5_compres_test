var app=function(){"use strict";function e(){}const n=e=>e;function a(e){return e()}function t(){return Object.create(null)}function o(e){e.forEach(a)}function i(e){return"function"==typeof e}function r(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function s(n,...a){if(null==n)return e;const t=n.subscribe(...a);return t.unsubscribe?()=>t.unsubscribe():t}function c(e){let n;return s(e,(e=>n=e))(),n}function l(e,n,a){e.$$.on_destroy.push(s(n,a))}function u(e,n,a=n){return e.set(a),n}const d="undefined"!=typeof window;let p=d?()=>window.performance.now():()=>Date.now(),m=d?e=>requestAnimationFrame(e):e;const f=new Set;function b(e){f.forEach((n=>{n.c(e)||(f.delete(n),n.f())})),0!==f.size&&m(b)}function g(e){let n;return 0===f.size&&m(b),{promise:new Promise((a=>{f.add(n={c:e,f:a})})),abort(){f.delete(n)}}}function h(e,n){e.appendChild(n)}function v(e,n,a){e.insertBefore(n,a||null)}function y(e){e.parentNode.removeChild(e)}function q(e,n){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(n)}function $(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function w(){return _(" ")}function x(){return _("")}function E(e,n,a,t){return e.addEventListener(n,a,t),()=>e.removeEventListener(n,a,t)}function D(e){return function(n){return n.preventDefault(),e.call(this,n)}}function j(e,n,a){null==a?e.removeAttribute(n):e.getAttribute(n)!==a&&e.setAttribute(n,a)}function k(e){return""===e?null:+e}function z(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function C(e,n){e.value=null==n?"":n}function L(e,n,a,t){e.style.setProperty(n,a,t?"important":"")}const A=new Set;let P,S=0;function M(e,n,a,t,o,i,r,s=0){const c=16.666/t;let l="{\n";for(let e=0;e<=1;e+=c){const t=n+(a-n)*i(e);l+=100*e+`%{${r(t,1-t)}}\n`}const u=l+`100% {${r(a,1-a)}}\n}`,d=`__svelte_${function(e){let n=5381,a=e.length;for(;a--;)n=(n<<5)-n^e.charCodeAt(a);return n>>>0}(u)}_${s}`,p=e.ownerDocument;A.add(p);const m=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild($("style")).sheet),f=p.__svelte_rules||(p.__svelte_rules={});f[d]||(f[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const b=e.style.animation||"";return e.style.animation=`${b?b+", ":""}${d} ${t}ms linear ${o}ms 1 both`,S+=1,d}function F(e,n){const a=(e.style.animation||"").split(", "),t=a.filter(n?e=>e.indexOf(n)<0:e=>-1===e.indexOf("__svelte")),o=a.length-t.length;o&&(e.style.animation=t.join(", "),S-=o,S||m((()=>{S||(A.forEach((e=>{const n=e.__svelte_stylesheet;let a=n.cssRules.length;for(;a--;)n.deleteRule(a);e.__svelte_rules={}})),A.clear())})))}function T(e){P=e}function U(e){(function(){if(!P)throw new Error("Function called outside component initialization");return P})().$$.on_mount.push(e)}const N=[],O=[],I=[],R=[],V=Promise.resolve();let B=!1;function G(e){I.push(e)}let Q=!1;const H=new Set;function J(){if(!Q){Q=!0;do{for(let e=0;e<N.length;e+=1){const n=N[e];T(n),K(n.$$)}for(T(null),N.length=0;O.length;)O.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];H.has(n)||(H.add(n),n())}I.length=0}while(N.length);for(;R.length;)R.pop()();B=!1,Q=!1,H.clear()}}function K(e){if(null!==e.fragment){e.update(),o(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(G)}}let W;function X(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function Y(e,n,a){e.dispatchEvent(function(e,n){const a=document.createEvent("CustomEvent");return a.initCustomEvent(e,!1,!1,n),a}(`${n?"intro":"outro"}${a}`))}const Z=new Set;let ee;function ne(){ee={r:0,c:[],p:ee}}function ae(){ee.r||o(ee.c),ee=ee.p}function te(e,n){e&&e.i&&(Z.delete(e),e.i(n))}function oe(e,n,a,t){if(e&&e.o){if(Z.has(e))return;Z.add(e),ee.c.push((()=>{Z.delete(e),t&&(a&&e.d(1),t())})),e.o(n)}}const ie={duration:0};function re(a,t,o){let r,s,c=t(a,o),l=!1,u=0;function d(){r&&F(a,r)}function m(){const{delay:t=0,duration:o=300,easing:i=n,tick:m=e,css:f}=c||ie;f&&(r=M(a,0,1,o,t,i,f,u++)),m(0,1);const b=p()+t,h=b+o;s&&s.abort(),l=!0,G((()=>Y(a,!0,"start"))),s=g((e=>{if(l){if(e>=h)return m(1,0),Y(a,!0,"end"),d(),l=!1;if(e>=b){const n=i((e-b)/o);m(n,1-n)}}return l}))}let f=!1;return{start(){f||(F(a),i(c)?(c=c(),X().then(m)):m())},invalidate(){f=!1},end(){l&&(d(),l=!1)}}}function se(a,t,r){let s,c=t(a,r),l=!0;const u=ee;function d(){const{delay:t=0,duration:i=300,easing:r=n,tick:d=e,css:m}=c||ie;m&&(s=M(a,1,0,i,t,r,m));const f=p()+t,b=f+i;G((()=>Y(a,!1,"start"))),g((e=>{if(l){if(e>=b)return d(0,1),Y(a,!1,"end"),--u.r||o(u.c),!1;if(e>=f){const n=r((e-f)/i);d(1-n,n)}}return l}))}return u.r+=1,i(c)?X().then((()=>{c=c(),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),l&&(s&&F(a,s),l=!1)}}}function ce(e){e&&e.c()}function le(e,n,t){const{fragment:r,on_mount:s,on_destroy:c,after_update:l}=e.$$;r&&r.m(n,t),G((()=>{const n=s.map(a).filter(i);c?c.push(...n):o(n),e.$$.on_mount=[]})),l.forEach(G)}function ue(e,n){const a=e.$$;null!==a.fragment&&(o(a.on_destroy),a.fragment&&a.fragment.d(n),a.on_destroy=a.fragment=null,a.ctx=[])}function de(e,n){-1===e.$$.dirty[0]&&(N.push(e),B||(B=!0,V.then(J)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function pe(n,a,i,r,s,c,l=[-1]){const u=P;T(n);const d=a.props||{},p=n.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:t(),dirty:l,skip_bound:!1};let m=!1;if(p.ctx=i?i(n,d,((e,a,...t)=>{const o=t.length?t[0]:a;return p.ctx&&s(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),m&&de(n,e)),a})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!r&&r(p.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);p.fragment&&p.fragment.l(e),e.forEach(y)}else p.fragment&&p.fragment.c();a.intro&&te(n.$$.fragment),le(n,a.target,a.anchor),J()}T(u)}class me{$destroy(){ue(this,1),this.$destroy=e}$on(e,n){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const e=a.indexOf(n);-1!==e&&a.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fe=[];function be(e,n){return{subscribe:ge(e,n).subscribe}}function ge(n,a=e){let t;const o=[];function i(e){if(r(n,e)&&(n=e,t)){const e=!fe.length;for(let e=0;e<o.length;e+=1){const a=o[e];a[1](),fe.push(a,n)}if(e){for(let e=0;e<fe.length;e+=2)fe[e][0](fe[e+1]);fe.length=0}}}return{set:i,update:function(e){i(e(n))},subscribe:function(r,s=e){const c=[r,s];return o.push(c),1===o.length&&(t=a(i)||e),r(n),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(t(),t=null)}}}}function he(n,a,t){const r=!Array.isArray(n),c=r?[n]:n,l=a.length<2;return be(t,(n=>{let t=!1;const u=[];let d=0,p=e;const m=()=>{if(d)return;p();const t=a(r?u[0]:u,n);l?n(t):p=i(t)?t:e},f=c.map(((e,n)=>s(e,(e=>{u[n]=e,d&=~(1<<n),t&&m()}),(()=>{d|=1<<n}))));return t=!0,m(),function(){o(f),p()}}))}const ve=e=>Math.floor(Math.random()*e),ye=e=>{if("boolean"==typeof e){if(!0===e)return"True";if(!1===e)return"False"}return e},qe=e=>e>=90?"#008568":e>=80?"#0074C8":e>=70?"#d17216":"#d11616",$e=(e,n)=>{let a=((e,n)=>{let a=[];for(;a.length<e;){let e=ve(n);a.includes(e)||a.push(e)}return a})(n,e.length),t=[];return a.forEach((n=>{let a={};a.question=e[n].q,a.followup=e[n].followup;let o=[...e[n].a];a.correctAnswer=e[n].a[0],a.answers=(e=>{for(let n=e.length-1;n>0;n--){let a=Math.floor(Math.random()*(n+1));[e[n],e[a]]=[e[a],e[n]]}return e})(o),t.push(a)})),t},_e="Tema 7: La distribución",we=[{q:"Cuando decimos que la distribución es una variable del marketing a largo plazo nos referimos a que",a:["Las decisiones que se toman al respecto son difícilmente modificables","Acercar el producto a la clientela conlleva costes adicionales a la fabricación","Los productos acabados se entregan al distribuidor para su acercamiento al consumidor, por lo que quedan en posesión del distribuidor"]},{q:"Cuando decimos que la distribución es una variable del marketing que repercute en el precio nos referimos a que",a:["Acercar el producto a la clientela conlleva costes adicionales a la fabricación","Las decisiones que se toman al respecto son difícilmente modificables","Los productos acabados se entregan al distribuidor para su acercamiento al consumidor, por lo que quedan en posesión del distribuidor"]},{q:"Cuando decimos que la distribución es una variable del marketing que produce una pérdida del control nos referimos a que",a:["Los productos acabados se entregan al distribuidor para su acercamiento al consumidor, por lo que quedan en posesión del distribuidor","Las decisiones que se toman al respecto son difícilmente modificables","Acercar el producto a la clientela conlleva costes adicionales a la fabricación"]},{q:"Se refiere al traslado de los productos desde el punto de fabricación",a:["Transporte","Difusión","Diversificación","Logística"]},{q:"Permite que los productos lleguen hasta diferentes puntos de venta, desde un único punto de fabricación",a:["Difusión","Transporte","Diversificación","Logística"]},{q:"Transformación de lotes de venta mediante división de la producción en cantidades adecuadas para su venta",a:["Diversificación","Transporte","Difusión","Logística"]},{q:"Estudia cómo llevar el producto al público en las mejores condiciones",a:["Logística","Diversificación","Transporte","Difusión"]},{q:"Los servicios, ¿son susceptibles de distribución física?",a:["No","Sí"],followup:" La distribución física hace referencia al conjunto de actividades que conllevan una acción física sobre los productos compuesta por transporte, diversificación y almacenamiento"},{q:"Un canal de distribución es ...",a:["El camino que sigue un producto desde el punto de fabricación hasta su consumo; está formado por el conjunto de personas u organizaciones (intermediarios) que intervienen a lo largo de dicho camino","El proceso que sigue un producto desde el punto de fabricación hasta su consumo; está formado por el conjunto de personas u organizaciones (intermediarios) que intervienen a lo largo de dicho camino","La frecuencia que sigue un producto desde el punto de fabricación hasta su consumo; está formado por el conjunto de personas u organizaciones (intermediarios) que intervienen a lo largo de dicho camino"]},{q:"Según el tipo de producto que se comercializa distinguimos ...",a:["Canales de productos de consumo, industriales y servicios","Canales de productos de consumo, industriales y de capital","Canales de productos de materias primas, suministros y servicios"]},{q:"Un canal de distribución directo ...",a:["No tiene intermediarios; el producto va directamente del fabricante al consumidor final","No tiene intermediarios; el producto va directamente del detallista al consumidor final","El consumidor compra directamente al mayorista"]},{q:"Un canal de distribución indirecto corto ...",a:["Participa un único intermediario, el detallista o minorista","Participa un único intermediario, el mayorista","Participa un único intermediario, el agente"]},{q:"Un canal de distribución indirecto largo ...",a:["Participa al menos dos intermediarios, mayorista y minorista","Participa al menos dos intermediarios, mayorista y agente","Participa al menos dos intermediarios, agente y minorista"]},{q:"Un canal de distribución indirecto muy largo ...",a:["Tiene la estructura Fabricante -> Agente -> Mayorista -> Minorista -> Consumidor final","Las distancias recorridas superan los 500 km","Existen al menos dos mayoristas"]},{q:"El objetivo final de la estrategia de omnicanalidad es mejorar la experiencia del usuario brindándole la misma información a través de todos los canales de distribución. No es ejemplo de omnicanalidad",a:["El cliente tiene múltiples canales de compra (web, aplicación móvil, tienda física, ...) pero no comparten los mismos datos del cliente","El cliente tiene el mismo carro de la compra en la página web y en la aplicación móvil","La empresa ofrece las mismas promociones en todos los canales","La empresa tiene las bases de datos integradas y coherentes: las unidades físicas en la aplicación móvil coinciden en la página web"]},{q:"Es preferible un canal corto si hay pocos compradores",a:["Verdadero","Falso"]},{q:"Para el comercio internacional resulta más rentable un canal largo o muy largo, con operadores especializados",a:["Verdadero","Falso"]},{q:"Las limitaciones legales no afectan a la elección del canal de distribución",a:["Falso","Verdadero"]},{q:"Cuanto más amplia sea la cartera de productos es más recomendable el canal directo",a:["Verdadero","Falso"]},{q:"La distribución indirecta incurre en unos costes fijos mayores que la distribución directa",a:["Falso","Falso"]},{q:"La distribución indirecta incurre en unos costes variables mayores que la distribución directa",a:["Verdadero","Falso"]},{q:"Un inconveniente de la distribución indirecta para el fabricante es que ...",a:["el precio final se ve incrementado, ya que el intermediario/s añaden un margen por su gestión","reduce el número de transacciones con el consumidor final","reduce sus costes, ya que no se ocupa del transporte y del almacenamiento"]},{q:"Adquieren mercancía a fabricantes o a otros mayoristas para revender a otros mayoristas o minoristas",a:["Mayoristas","Minoristas"]},{q:"Venden directamente al consumidor final",a:["Minoristas","Mayoristas"]},{q:"Un comercio independiente es el que ...",a:["realiza su actividad de manera independiente","se unen varios intermediarios pero conservando su independencia con el objetivo de obtener mejores precios comprando un mayor volumen o acceder con menores riesgos a nuevos mercados","varios eslabones del canal de distribución se agrupan y forman una sola entidad de manera que cada eslabón pierde la independencia"]},{q:"Un comercio asociado es el que ...",a:["se unen varios intermediarios pero conservando su independencia con el objetivo de obtener mejores precios comprando un mayor volumen o acceder con menores riesgos a nuevos mercados","realiza su actividad de manera independiente","varios eslabones del canal de distribución se agrupan y forman una sola entidad de manera que cada eslabón pierde la independencia"]},{q:"Un comercio integrado es el que ...",a:["varios eslabones del canal de distribución se agrupan y forman una sola entidad de manera que cada eslabón pierde la independencia","realiza su actividad de manera independiente","se unen varios intermediarios pero conservando su independencia con el objetivo de obtener mejores precios comprando un mayor volumen o acceder con menores riesgos a nuevos mercados"]},{q:"Estrategia de distribución centrada en la cobertura del mercado  con la que se pretende llegar a todo el mercado, colocando el producto en el máximo número de puntos de venta posible",a:["Intensiva","Selectiva","Exclusiva"],followup:"Por ejemplo, productos de consumo habitual como pan, refrescos o yogures"},{q:"Estrategia de distribución centrada en la cobertura del mercado con la que se pretende llegar a un determinado número de segmentos de consumidores; limitada a un número reducido de puntos de venta ",a:["Selectiva","Intensiva","Exclusiva"],followup:"Por ejemplo, productos cosméticos que solo se venden en farmacias"},{q:"Estrategia de distribucion centrada en la cobertura del mercado que se dirige a un segmento concreto",a:["Exclusiva","Intensiva","Selectiva"],followup:"Por ejemplo, Paul and Shark solo se vende en el Corte Inglés"},{q:"Estrategia de distribución basada en la relación fabricante-red de venta en la que la empresa no usa intermediarios, sino que desarrolla sus propios canales de distribución",a:["Distribución por cuenta propia","Distribución por cuenta ajena","Distribución mixta"],followup:"El fabricante realiza más funciones relacionadas con la distribución pero a cambio mantiene el control sobre el producto."},{q:"Estrategia de distribución basada en la relacion fabricante-red de venta en la que la empresa utiliza un canal de distribución con intermediarios (corto, largo o muy largo)",a:["Distribución por cuenta ajena","Distribución por cuenta propia","Distribución mixta"],followup:"Reduce los costes que implica la creación de un canal propio de distribución, como por ejemplo productos de consumo"},{q:"Estrategia de distribución basada en la relación fabricante-red de venta que usa una red propia de distribución allí donde es rentable y una distribución por cuenta ajena donde no resulta rentable hacerlo por cuenta propia",a:["Distribución mixta","Distribución por cuenta propia","Distribución por cuenta ajena"]},{q:"Estrategia de distribución que centra los esfuerzos de comunicación del fabricante sobre el distribuidor y hace presión sobre este, para que se involucre en las ventas",a:["Estrategia push","Estrategia pull"],followup:"Por ejemplo, una oferta 2x1 al distribuidor para que tenga mayor stock y se esfuerce más a la hora de venderlo"},{q:"Estrategia de distribución que centra los esfuerzos de comunicación del fabricante sobre el consumidor final para que tire del producto exigiendo al distribuidor sus marcas preferidas",a:["Estrategia pull","Estrategia push"],followup:"Por ejemplo, mediante campañas publicitarias"},{q:"Estrategia de distribución que relaciona tres niveles diferentes: fabricantes, mayoristas y minoristas consiguiendo una mayor coordinación entre ellos",a:["Estrategia vertical","Estrategia horizontal"]},{q:"Estrategia de distribución en el que dos o más empresas del mismo nivel (fabricante, mayorista, minorista) colaboran persiguiendo una mayor poder de negociación realizando actividades conjuntamente",a:["Estrategia horizontal","Estrategia vertical"]},{q:"¿Qué no es el merchandising?",a:["Promociones y descuentos para los clientes fieles","Es como un vendedor que trabajase las 24 horas del días todos los días del año haciendo una presentación activa de los productos","Un conjunto de métodos y técnicas cuyo objetivo consiste en obtener la mayor rentabilidad posible del punto de venta","Una de las principales funciones del merchandising consiste en encargarse de la disposición y presentación de los productos en la tienda","Incluye actividades como el emplazamiento del punto de venta y elementos externos como la fachada, escaparates, carteles"]},{q:"Disposición en la que se ponen estanterías de distintos tipos, repartidas de forma irregular, para que parezca que se compone de varias tiendas distintas",a:["Disposición libre","Disposición en espiga","Disposición en parrilla","Disposición sesgada"]},{q:"Disposición en la que las estanterías se disponen oblicuamente, obligando al público a hacer el recorrido que desea el comercio, lo que favorece la compra por impulso",a:["Disposición en espiga","Disposición libre","Disposición en parrilla","Disposición sesgada"]},{q:"Disposición en la que las estanterías se colocan en paralelo a la circulación de la clientela",a:["Disposición en parrilla","Disposición libre","Disposición en espiga","Disposición sesgada"],followup:"Guía al cliente hacia puntos concretos y aprovecha el espacio del comercio"},{q:"Disposición que combina la disposición de parrilla y la disposición en espiga",a:["Disposición sesgada","Disposición libre","Disposición en espiga","Disposición en parrilla"]}],xe=be(we.length),Ee=ge(10),De=ge(!1),je=ge(0),ke=ge(!1),ze=be(we),Ce=be(_e),Le=he(De,((e,n)=>{e&&n($e(c(ze),c(Ee)))}),[]),Ae=ge(0),Pe=he([Ae,Le],(([e,n])=>((e,n)=>{let a=0;return"number"==typeof e&&"number"==typeof n&&(a=Math.round(e/n*100)),a})(e,n.length)),0),Se=ge([]),Me=()=>{Ae.set(0),De.set(!1),je.set(0),ke.set(!1),Se.set([])};function Fe(e){const n=e-1;return n*n*n+1}function Te(e,{delay:n=0,duration:a=400,easing:t=Fe,x:o=0,y:i=0,opacity:r=0}){const s=getComputedStyle(e),c=+s.opacity,l="none"===s.transform?"":s.transform,u=c*(1-r);return{delay:n,duration:a,easing:t,css:(e,n)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*o}px, ${(1-e)*i}px);\n\t\t\topacity: ${c-u*n}`}}function Ue(e,n,a){const t=e.slice();return t[10]=n[a],t[12]=a,t}function Ne(e,n,a){const t=e.slice();return t[7]=n[a],t[9]=a,t}function Oe(e){let n,a,t,o,i,r,s,c,l,u,d,p,m=e[7].question+"",f=e[7].answers,b=[];for(let n=0;n<f.length;n+=1)b[n]=Ie(Ue(e,f,n));function g(e,n){return e[2]<e[1].length-1?Ve:Re}let x=g(e),k=x(e);return{c(){n=$("form"),a=$("fieldset"),t=$("legend"),o=_(m),i=w();for(let e=0;e<b.length;e+=1)b[e].c();r=w(),k.c(),s=w(),j(t,"class","svelte-ous5hl"),j(a,"class","svelte-ous5hl")},m(c,l){v(c,n,l),h(n,a),h(a,t),h(t,o),h(a,i);for(let e=0;e<b.length;e+=1)b[e].m(a,null);h(n,r),k.m(n,null),h(n,s),u=!0,d||(p=E(n,"submit",D(e[3])),d=!0)},p(e,t){if((!u||2&t)&&m!==(m=e[7].question+"")&&z(o,m),3&t){let n;for(f=e[7].answers,n=0;n<f.length;n+=1){const o=Ue(e,f,n);b[n]?b[n].p(o,t):(b[n]=Ie(o),b[n].c(),b[n].m(a,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=f.length}x!==(x=g(e))&&(k.d(1),k=x(e),k&&(k.c(),k.m(n,s)))},i(e){u||(G((()=>{l&&l.end(1),c||(c=re(n,Te,{x:200,duration:500,delay:500})),c.start()})),u=!0)},o(e){c&&c.invalidate(),l=se(n,Te,{x:-200,duration:500}),u=!1},d(e){e&&y(n),q(b,e),k.d(),e&&l&&l.end(),d=!1,p()}}}function Ie(e){let n,a,t,o,i,r,s,c,l,u,d,p,m,f=ye(e[10])+"";return{c(){n=$("label"),a=$("input"),r=w(),s=_(f),c=w(),l=$("span"),u=w(),a.required=!0,j(a,"type","radio"),j(a,"id",t="answer"+e[12]),a.__value=o=e[10],a.value=a.__value,j(a,"name",i="question"+e[9]),j(a,"class","svelte-ous5hl"),e[5][0].push(a),j(l,"class","radio svelte-ous5hl"),j(n,"for",d="answer"+e[12]),j(n,"class","svelte-ous5hl")},m(t,o){v(t,n,o),h(n,a),a.checked=a.__value===e[0],h(n,r),h(n,s),h(n,c),h(n,l),h(n,u),p||(m=E(a,"change",e[4]),p=!0)},p(e,n){2&n&&o!==(o=e[10])&&(a.__value=o,a.value=a.__value),1&n&&(a.checked=a.__value===e[0]),2&n&&f!==(f=ye(e[10])+"")&&z(s,f)},d(t){t&&y(n),e[5][0].splice(e[5][0].indexOf(a),1),p=!1,m()}}}function Re(e){let n;return{c(){n=$("button"),n.textContent="Ok",j(n,"type","submit")},m(e,a){v(e,n,a)},d(e){e&&y(n)}}}function Ve(e){let n;return{c(){n=$("button"),n.textContent="Siguiente",j(n,"type","submit")},m(e,a){v(e,n,a)},d(e){e&&y(n)}}}function Be(e){let n,a,t=e[2]===e[9]&&Oe(e);return{c(){t&&t.c(),n=x()},m(e,o){t&&t.m(e,o),v(e,n,o),a=!0},p(e,a){e[2]===e[9]?t?(t.p(e,a),4&a&&te(t,1)):(t=Oe(e),t.c(),te(t,1),t.m(n.parentNode,n)):t&&(ne(),oe(t,1,1,(()=>{t=null})),ae())},i(e){a||(te(t),a=!0)},o(e){oe(t),a=!1},d(e){t&&t.d(e),e&&y(n)}}}function Ge(e){let n,a,t=e[1],o=[];for(let n=0;n<t.length;n+=1)o[n]=Be(Ne(e,t,n));const i=e=>oe(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();n=x()},m(e,t){for(let n=0;n<o.length;n+=1)o[n].m(e,t);v(e,n,t),a=!0},p(e,[a]){if(15&a){let r;for(t=e[1],r=0;r<t.length;r+=1){const i=Ne(e,t,r);o[r]?(o[r].p(i,a),te(o[r],1)):(o[r]=Be(i),o[r].c(),te(o[r],1),o[r].m(n.parentNode,n))}for(ne(),r=t.length;r<o.length;r+=1)i(r);ae()}},i(e){if(!a){for(let e=0;e<t.length;e+=1)te(o[e]);a=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)oe(o[e]);a=!1},d(e){q(o,e),e&&y(n)}}}function Qe(e,n,a){let t,o,i,r;l(e,Le,(e=>a(1,t=e))),l(e,je,(e=>a(2,o=e))),l(e,Se,(e=>a(6,i=e)));return[r,t,o,()=>{t[o].correctAnswer===r?(Ae.update((e=>e+1)),u(Se,i=[...i,{correct:!0,chosenAnswer:r}],i)):u(Se,i=[...i,{correct:!1,chosenAnswer:r}],i),a(0,r=""),o<t.length-1?je.update((e=>e+1)):(De.set(!1),ke.set(!0))},function(){r=this.__value,a(0,r)},[[]]]}class He extends me{constructor(e){super(),pe(this,e,Qe,Ge,r,{})}}function Je(e){let n,a,t,i,r,s,c,l,u,d,p,m,f,b,g,q;return{c(){n=$("div"),a=$("h1"),t=_(e[0]),i=_("!"),r=w(),s=$("form"),c=$("label"),l=_("Cuántas preguntas?\n            "),u=$("input"),d=w(),p=$("button"),p.textContent="Empezar",j(a,"class","svelte-1n5xzdl"),j(u,"type","number"),j(u,"max",e[1]),j(u,"min","1"),u.required=!0,j(u,"class","svelte-1n5xzdl"),j(c,"class","svelte-1n5xzdl"),j(p,"type","submit")},m(o,m){v(o,n,m),h(n,a),h(a,t),h(a,i),h(n,r),h(n,s),h(s,c),h(c,l),h(c,u),C(u,e[2]),h(s,d),h(s,p),b=!0,g||(q=[E(u,"input",e[4]),E(s,"submit",D(e[3]))],g=!0)},p(e,[n]){(!b||1&n)&&z(t,e[0]),(!b||2&n)&&j(u,"max",e[1]),4&n&&k(u.value)!==e[2]&&C(u,e[2])},i(e){b||(G((()=>{f&&f.end(1),m||(m=re(n,Te,{x:200,duration:500,delay:500})),m.start()})),b=!0)},o(e){m&&m.invalidate(),f=se(n,Te,{x:-200,duration:500}),b=!1},d(e){e&&y(n),e&&f&&f.end(),g=!1,o(q)}}}function Ke(e,n,a){let t,o,i;l(e,Ce,(e=>a(0,t=e))),l(e,xe,(e=>a(1,o=e))),l(e,Ee,(e=>a(2,i=e)));return[t,o,i,()=>{De.set(!0)},function(){i=k(this.value),Ee.set(i)}]}class We extends me{constructor(e){super(),pe(this,e,Ke,Je,r,{})}}function Xe(e,n,a){const t=e.slice();return t[4]=n[a],t[6]=a,t}function Ye(e){let n,a=e[2],t=[];for(let n=0;n<a.length;n+=1)t[n]=tn(Xe(e,a,n));return{c(){n=$("ul");for(let e=0;e<t.length;e+=1)t[e].c();j(n,"class","svelte-1beyh99")},m(e,a){v(e,n,a);for(let e=0;e<t.length;e+=1)t[e].m(n,null)},p(e,o){if(6&o){let i;for(a=e[2],i=0;i<a.length;i+=1){const r=Xe(e,a,i);t[i]?t[i].p(r,o):(t[i]=tn(r),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}},d(e){e&&y(n),q(t,e)}}}function Ze(e){let n;return{c(){n=$("span"),n.textContent="0",j(n,"class","icon wrong svelte-1beyh99")},m(e,a){v(e,n,a)},d(e){e&&y(n)}}}function en(e){let n;return{c(){n=$("span"),n.textContent="+1",j(n,"class","icon correct svelte-1beyh99")},m(e,a){v(e,n,a)},d(e){e&&y(n)}}}function nn(e){let n,a,t,o=ye(e[1][e[6]].chosenAnswer)+"";return{c(){n=$("p"),a=_("Tu respuesta:\n                "),t=_(o),j(n,"class","svelte-1beyh99")},m(e,o){v(e,n,o),h(n,a),h(n,t)},p(e,n){2&n&&o!==(o=ye(e[1][e[6]].chosenAnswer)+"")&&z(t,o)},d(e){e&&y(n)}}}function an(e){let n,a,t=e[4].followup+"";return{c(){n=$("p"),a=_(t),j(n,"class","followup svelte-1beyh99")},m(e,t){v(e,n,t),h(n,a)},p(e,n){4&n&&t!==(t=e[4].followup+"")&&z(a,t)},d(e){e&&y(n)}}}function tn(e){let n,a,t,o,i,r,s,c,l,u,d,p,m=e[4].question+"",f=ye(e[4].correctAnswer)+"";function b(e,n){return e[1][e[6]].correct?en:Ze}let g=b(e),q=g(e),x=!e[1][e[6]].correct&&nn(e),E=e[4].followup&&an(e);return{c(){n=$("li"),a=$("div"),q.c(),t=w(),o=$("div"),i=$("p"),r=_(m),s=w(),c=$("p"),l=_(f),u=w(),x&&x.c(),d=w(),E&&E.c(),p=w(),j(a,"class","svelte-1beyh99"),j(i,"class","svelte-1beyh99"),j(c,"class","svelte-1beyh99"),j(o,"class","svelte-1beyh99"),j(n,"class","svelte-1beyh99")},m(e,m){v(e,n,m),h(n,a),q.m(a,null),h(n,t),h(n,o),h(o,i),h(i,r),h(o,s),h(o,c),h(c,l),h(o,u),x&&x.m(o,null),h(o,d),E&&E.m(o,null),h(n,p)},p(e,n){g!==(g=b(e))&&(q.d(1),q=g(e),q&&(q.c(),q.m(a,null))),4&n&&m!==(m=e[4].question+"")&&z(r,m),4&n&&f!==(f=ye(e[4].correctAnswer)+"")&&z(l,f),e[1][e[6]].correct?x&&(x.d(1),x=null):x?x.p(e,n):(x=nn(e),x.c(),x.m(o,d)),e[4].followup?E?E.p(e,n):(E=an(e),E.c(),E.m(o,null)):E&&(E.d(1),E=null)},d(e){e&&y(n),q.d(),x&&x.d(),E&&E.d()}}}function on(e){let n,a,t,o,i,r,s,c,l,u,d,p,m,f,b,g,q,x,D,k=null!=e[1]&&0!=e[1].length&&Ye(e);return{c(){n=$("div"),a=$("h1"),a.textContent="Resultados",t=w(),o=$("div"),i=$("p"),r=_("Puntuación : "),s=_(e[0]),c=_("%"),l=w(),u=$("div"),d=$("div"),p=w(),k&&k.c(),m=w(),f=$("button"),f.textContent="Intenta de nuevo",j(a,"class","svelte-1beyh99"),j(i,"class","final-score svelte-1beyh99"),j(d,"class","score-bar svelte-1beyh99"),L(d,"width",e[0]+"%"),L(d,"background",qe(e[0])),j(u,"class","score-scale svelte-1beyh99"),j(f,"type","button")},m(e,b){v(e,n,b),h(n,a),h(n,t),h(n,o),h(o,i),h(i,r),h(i,s),h(i,c),h(o,l),h(o,u),h(u,d),h(n,p),k&&k.m(n,null),h(n,m),h(n,f),q=!0,x||(D=E(f,"click",Me),x=!0)},p(e,[a]){(!q||1&a)&&z(s,e[0]),(!q||1&a)&&L(d,"width",e[0]+"%"),(!q||1&a)&&L(d,"background",qe(e[0])),null!=e[1]&&0!=e[1].length?k?k.p(e,a):(k=Ye(e),k.c(),k.m(n,m)):k&&(k.d(1),k=null)},i(e){q||(G((()=>{g&&g.end(1),b||(b=re(n,Te,{y:200,duration:500,delay:500})),b.start()})),q=!0)},o(e){b&&b.invalidate(),g=se(n,Te,{y:-200,duration:500}),q=!1},d(e){e&&y(n),k&&k.d(),e&&g&&g.end(),x=!1,D()}}}function rn(e,n,a){let t,o,i;l(e,Pe,(e=>a(3,t=e))),l(e,Se,(e=>a(1,o=e))),l(e,Le,(e=>a(2,i=e)));let r=0;return U((async()=>{a(0,r=t)})),[r,o,i]}class sn extends me{constructor(e){super(),pe(this,e,rn,on,r,{})}}function cn(e){let n,a;return n=new We({}),{c(){ce(n.$$.fragment)},m(e,t){le(n,e,t),a=!0},i(e){a||(te(n.$$.fragment,e),a=!0)},o(e){oe(n.$$.fragment,e),a=!1},d(e){ue(n,e)}}}function ln(e){let n,a;return n=new sn({}),{c(){ce(n.$$.fragment)},m(e,t){le(n,e,t),a=!0},i(e){a||(te(n.$$.fragment,e),a=!0)},o(e){oe(n.$$.fragment,e),a=!1},d(e){ue(n,e)}}}function un(e){let n,a;return n=new He({}),{c(){ce(n.$$.fragment)},m(e,t){le(n,e,t),a=!0},i(e){a||(te(n.$$.fragment,e),a=!0)},o(e){oe(n.$$.fragment,e),a=!1},d(e){ue(n,e)}}}function dn(e){let n,a,t,o;const i=[un,ln,cn],r=[];function s(e,n){return e[0]?0:e[1]?1:2}return a=s(e),t=r[a]=i[a](e),{c(){n=$("main"),t.c(),j(n,"class","svelte-1o1ab46")},m(e,t){v(e,n,t),r[a].m(n,null),o=!0},p(e,[o]){let c=a;a=s(e),a!==c&&(ne(),oe(r[c],1,1,(()=>{r[c]=null})),ae(),t=r[a],t||(t=r[a]=i[a](e),t.c()),te(t,1),t.m(n,null))},i(e){o||(te(t),o=!0)},o(e){oe(t),o=!1},d(e){e&&y(n),r[a].d()}}}function pn(e,n,a){let t,o;return l(e,De,(e=>a(0,t=e))),l(e,ke,(e=>a(1,o=e))),[t,o]}return new class extends me{constructor(e){super(),pe(this,e,pn,dn,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
