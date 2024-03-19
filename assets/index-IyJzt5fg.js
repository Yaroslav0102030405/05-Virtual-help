(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const V=document.querySelector(".hero__image");window.addEventListener("load",Z,{once:!0});function Z(e){V.classList.add("left-animation")}const F=document.querySelector(".arrow");window.addEventListener("scroll",ee);function ee(){window.scrollY>300?F.classList.add("active"):F.classList.remove("active")}const te=document.querySelector(".js-open-modal"),ne=document.querySelector(".js-close-modal"),k=document.querySelector(".js-menu-backdrop"),oe=document.querySelector(".header__right");te.addEventListener("click",re);ne.addEventListener("click",I);k.addEventListener("click",ie);oe.addEventListener("click",ae);function re(){document.body.classList.add("is-hidden"),k.classList.toggle("is-open")}function I(){document.body.classList.remove("is-hidden"),k.classList.toggle("is-open")}function ie(e){e.currentTarget===e.target&&I()}function ae(e){e.target.nodeName==="A"&&I()}const q={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};q.openModalBtn.addEventListener("click",ce);q.closeModalBtn.addEventListener("click",M);q.backdrop.addEventListener("click",se);function ce(){window.addEventListener("keydown",R),document.body.classList.add("show-modal"),document.body.classList.add("is-hidden")}function M(){window.removeEventListener("keydown",R),document.body.classList.remove("show-modal"),document.body.classList.remove("is-hidden")}function se(e){e.currentTarget===e.target&&M()}function R(e){e.code==="Escape"&&M()}var p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var G="Expected a function",N=NaN,de="[object Symbol]",ue=/^\s+|\s+$/g,me=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,ge=/^0o[0-7]+$/i,ye=parseInt,ve=typeof p=="object"&&p&&p.Object===Object&&p,pe=typeof self=="object"&&self&&self.Object===Object&&self,Ee=ve||pe||Function("return this")(),be=Object.prototype,Le=be.toString,Se=Math.max,he=Math.min,T=function(){return Ee.Date.now()};function _e(e,t,n){var r,o,a,s,c,u,m=0,A=!1,f=!1,S=!0;if(typeof e!="function")throw new TypeError(G);t=$(t)||0,b(n)&&(A=!!n.leading,f="maxWait"in n,a=f?Se($(n.maxWait)||0,t):a,S="trailing"in n?!!n.trailing:S);function h(i){var d=r,g=o;return r=o=void 0,m=i,s=e.apply(g,d),s}function J(i){return m=i,c=setTimeout(v,t),A?h(i):s}function U(i){var d=i-u,g=i-m,D=t-d;return f?he(D,a-g):D}function B(i){var d=i-u,g=i-m;return u===void 0||d>=t||d<0||f&&g>=a}function v(){var i=T();if(B(i))return C(i);c=setTimeout(v,U(i))}function C(i){return c=void 0,S&&r?h(i):(r=o=void 0,s)}function X(){c!==void 0&&clearTimeout(c),m=0,r=u=o=c=void 0}function Q(){return c===void 0?s:C(T())}function _(){var i=T(),d=B(i);if(r=arguments,o=this,u=i,d){if(c===void 0)return J(u);if(f)return c=setTimeout(v,t),h(u)}return c===void 0&&(c=setTimeout(v,t)),s}return _.cancel=X,_.flush=Q,_}function Te(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(G);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),_e(e,t,{leading:r,maxWait:t,trailing:o})}function b(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ke(e){return!!e&&typeof e=="object"}function Ie(e){return typeof e=="symbol"||ke(e)&&Le.call(e)==de}function $(e){if(typeof e=="number")return e;if(Ie(e))return N;if(b(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=b(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ue,"");var n=fe.test(e);return n||ge.test(e)?ye(e.slice(2),n?2:8):me.test(e)?N:+e}var qe=Te;const L=le(qe),H="feedback-msg-name",j="feedback-msg-tal",w="feedback-msg-email",O="feedback-msg-data",l={form:document.querySelector(".form-2"),inputName:document.querySelector(".js__input-name"),inputTel:document.querySelector(".js__input-tel"),inputEmail:document.querySelector(".js__input-email"),inputData:document.querySelector(".js__input-date")};l.form.addEventListener("submit",Me);l.inputName.addEventListener("input",L(je,1e3));l.inputTel.addEventListener("input",L(we,1e3));l.inputEmail.addEventListener("input",L(Oe,1e3));l.inputData.addEventListener("input",L(xe,1e3));Ae();function Me(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(H),localStorage.removeItem(j),localStorage.removeItem(w),localStorage.removeItem(O)}function je(e){e.target.value,localStorage.setItem(STORAGE_KEY,message)}function we(e){const t=e.target.value;localStorage.setItem(j,t)}function Oe(e){const t=e.target.value;localStorage.setItem(w,t)}function xe(e){const t=e.target.value;localStorage.setItem(O,t)}function Ae(){const e=localStorage.getItem(H),t=localStorage.getItem(j),n=localStorage.getItem(w),r=localStorage.getItem(O);(e||t||n||r)&&(l.inputName.value=e,l.inputTel.value=t,l.inputEmail.value=n,l.inputData.value=r)}const Be=document.querySelector(".js-form-data");Be.addEventListener("submit",Ce);function Ce(e){e.preventDefault(),new FormData(e.currentTarget).forEach((n,r)=>{console.log("onFormSubmit -> name",n)})}const K=document.querySelector(".js-hover");K.addEventListener("mouseenter",De);K.addEventListener("mouseleave",Fe);function De(e){e.currentTarget.classList.add("hover--active")}function Fe(e){e.currentTarget.classList.remove("hover--active")}let Ne=new Date("April 28 2024 00:00:00");function E(e){return String(e).padStart(2,0)}function Y(){let t=Ne-new Date,n=E(Math.floor(t/1e3/60/60/24)),r=E(Math.floor(t/1e3/60/60)%24),o=E(Math.floor(t/1e3/60)%60),a=E(Math.floor(t/1e3)%60);t<0?(document.getElementById("timer").innerText="Акція закінчена",document.getElementById("timer2").style="display: none"):(document.getElementById("d").innerText=n,document.getElementById("h").innerText=r,document.getElementById("m").innerText=o,document.getElementById("s").innerText=a)}Y();setInterval(Y,1e3);const P=document.querySelectorAll(".accordion__title"),$e=document.querySelectorAll(".accordion__content");P.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?(t.classList.remove("active"),e.classList.remove("active"),t.style.maxHeight=0):($e.forEach(n=>{n.classList.remove("active"),n.style.maxHeight=0}),P.forEach(n=>n.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));document.querySelector('[data-tab="tab-1"]').classList.add("active");document.querySelector("#tab-1").classList.add("active");document.querySelector("#tab-1").style.maxHeight=document.querySelector("#tab-1").scrollHeight+"px";const Pe=document.querySelectorAll(".gallery__card"),Re=document.querySelectorAll(".gallery__image"),x=document.querySelector(".slider"),Ge=document.querySelector(".slider__container"),He=document.querySelector(".slider__btn-left"),Ke=document.querySelector(".slider__btn-right"),Ye=document.querySelector(".slider__btn-close");let W=0,y=null;const z=()=>{y&&y.remove(),x.classList.add("hidden"),document.body.classList.remove("is-hidden")};He.addEventListener("click",()=>changePicture("left"));Ke.addEventListener("click",()=>changePicture("right"));Ye.addEventListener("click",()=>z());x.addEventListener("click",ze);Pe.forEach((e,t)=>{e.addEventListener("click",()=>{W=t,We()})});const We=()=>{y=Re[W].cloneNode(),y.style.widht="100%",Ge.append(y),x.classList.remove("hidden"),document.body.classList.add("is-hidden")};function ze(e){e.currentTarget===e.target&&z()}
