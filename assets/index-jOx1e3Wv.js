(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const r='@charset "UTF-8";/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.visually-hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}:root{scroll-behavior:smooth}.container{max-width:1200px;padding-left:15px;padding-right:15px;margin:0 auto}@media screen and (min-width: 380px){.container{width:360px}}@media screen and (min-width: 768px){.container{width:768px}}@media screen and (min-width: 1200px){.container{width:1170px}}h1,h2,h3,h4,h5,h6,p{margin-top:0;padding:0}a{display:block;text-decoration:none;font-style:normal;cursor:url(data:image/png;base64,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),auto}ul{padding:0;margin:0;list-style:none}img{display:block;max-width:100%;height:auto}.arrow{position:fixed;right:50px;bottom:50px;cursor:url(data:image/png;base64,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),auto}.arrow span{display:block;width:1.5vw;height:1.5vw;border-top:5px solid #ff6666;border-left:5px solid #458ff6;transform:rotate(45deg);margin:-10px;animation:animate 2s infinite}@media screen and (max-width: 768px){.arrow span{width:4.5vw;height:4.5vw}}@media screen and (min-width: 768px) and (max-width: 1200px){.arrow span{width:2.5vw;height:2.5vw}}.arrow span:nth-child(2){animation-delay:-.2s}.arrow span:nth-child(3){animation-delay:-.4s}@keyframes animate{0%{opacity:0;transform:rotate(45deg) translate(-20%,-20%)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(-20%,-20%)}}.header{padding-top:20px;padding-bottom:20px}.header__wapper{display:flex;align-items:center;justify-content:space-between}.header__left{display:flex}.header__right{display:flex;gap:50px}.header__link{color:#1f1534;font-size:18px;font-weight:400}@media screen and (max-width: 768px){.header__link{color:#fff;font-size:30px}}.header__link:hover,.header__link:focus{color:#458ff6}@media screen and (max-width: 768px){.header__link:hover,.header__link:focus{color:#f66}}.header__logan{color:#462e6a;font-family:Mulish;font-size:24px;font-style:normal;font-weight:700;line-height:normal}.menu-button{display:inline-flex;margin:0;padding:0;border:none;background-color:transparent}@media screen and (min-width: 768px){.menu-button{display:none}}.menu-button .icon-close{display:none}.menu-button.is-open .icon-close{display:block}.menu-button.is-open .icon-open{display:none}.header{position:relative}@media screen and (max-width: 767px){.menu-container{display:none;position:absolute;top:100%;left:0;width:100%;height:100px;background-color:#458ff6;text-align:center;font-size:20px;padding-top:60px;padding-bottom:250px}}.menu-container.is-open{display:block;opacity:1;visibility:visible;transform:translateY(0)}@media screen and (max-width: 768px){.header__right{flex-direction:column;gap:50px 0}}.hero{padding-top:100px;padding-bottom:100px}@media screen and (max-width: 768px){.hero{padding-top:50px;padding-bottom:50px}}.hero__wapper{display:flex}@media screen and (max-width: 768px){.hero__wapper{flex-wrap:wrap}}.hero__right{display:flex;align-items:flex-start}.hero__title{padding-top:20px;margin-bottom:80px;max-width:621px;color:#462e6a;font-size:48px;font-weight:700;line-height:1.16}@media screen and (max-width: 768px){.hero__title{font-size:26px;margin-bottom:45px}}.sec-text{margin-left:10px;color:#f66}.hero__text{margin-bottom:80px;max-width:525px;color:#458ff6;font-size:19px;font-weight:500;line-height:1.42;letter-spacing:.38px}@media screen and (max-width: 768px){.hero__text{margin-bottom:45px;max-width:323px}}@media screen and (min-width: 768px) and (max-width: 1200px){.hero__image{width:350px}}@media screen and (min-width: 1200px){.hero__image{max-width:557px}}.hero__button{padding:20px 30px;color:#fff;font-size:19px;font-weight:700;font-family:inherit;border:none;border-radius:55px;background-color:#458ff6;cursor:url(data:image/png;base64,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),auto}@media screen and (max-width: 768px){.hero__button{margin-bottom:45px}}.hero__button:hover,.hero__button:focus{border:1px solid #458ff6;color:#458ff6;background-color:#fff}.service{padding-top:100px;padding-bottom:100px;text-align:center;background:#f3fbff}@media screen and (max-width: 768px){.service{padding-top:50px;padding-bottom:50px}}.service__title{display:inline-block;margin-bottom:36px;color:#462e6a;font-size:45px;font-weight:700;line-height:1.24}@media screen and (max-width: 768px){.service__title{font-size:30px}}.service__text{display:inline-block;margin-left:auto;margin-right:auto;margin-bottom:100px;color:#1f1534;text-align:center;font-feature-settings:"clig" off,"liga" off;font-size:19px;font-weight:500;line-height:1.42;letter-spacing:.38px}@media screen and (max-width: 768px){.service__text{letter-spacing:0;max-width:310px}}.service__list{display:flex;flex-wrap:wrap;justify-content:center;gap:26px}.service__item{padding:47px 60px;border-radius:20px;background:#fff;box-shadow:10px 40px 50px #e5e9f666}@media screen and (max-width: 768px){.service__item{padding:37px 40px}}.service__item svg{width:90px;height:90px;margin-bottom:22px}.service__item h3{margin-bottom:1px;color:#000;font-size:24px;font-weight:700;line-height:2.33}@media screen and (max-width: 768px){.service__item h3{font-size:18px}}.service__item-extratex{margin-bottom:0;text-align:left;max-width:251px;color:#7d7987;font-size:16px;font-weight:300;line-height:1.75}@media screen and (max-width: 768px){.service__item-extratex{font-size:12px}}.section__link{display:inline-block;margin-top:70px;padding:20px 30px;color:#458ff6;background:#f3fbff;font-size:19px;font-weight:700;font-family:inherit;border:none;border-radius:55px;border:1.4px solid #458ff6;cursor:url(data:image/png;base64,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),auto}.section__link:hover{background-color:#fff}.apps{padding-top:155px;padding-bottom:155px}@media screen and (max-width: 1200px){.apps{padding-top:75px;padding-bottom:75px}}.apps-wapper{display:flex;align-items:center;justify-content:space-between;padding-bottom:150px}@media screen and (max-width: 768px){.apps-wapper{flex-direction:column;padding-bottom:70px}}.apps-top-left img{max-width:617px}@media screen and (max-width: 768px){.apps-top-left img{max-width:209px}}.apps-top-right h2{margin-bottom:59px;color:#462e6a;font-size:36px;line-height:1.55}@media screen and (max-width: 768px){.apps-top-right h2{font-size:29px}}@media screen and (min-width: 768px) and (max-width: 1200px){.apps-top-right h2{font-size:28px}}.apps-top-right p{margin-bottom:36px;color:#1f1534;font-size:18px;line-height:1.66}@media screen and (max-width: 1200px){.apps-top-right p{font-size:16px;max-width:338px}}.apps-top-right a{margin-top:0}@media screen and (max-width: 768px){.apps-top-left img{max-width:279px}}@media screen and (min-width: 768px) and (max-width: 1200px){.apps-top-left img{max-width:500px}}@media screen and (min-width: 1200px){.apps-top-left img{max-width:617px}}.apps-wapper2{display:flex;align-items:center;justify-content:space-between}@media screen and (max-width: 768px){.apps-wapper2{flex-direction:column}}.apps-botton-left h2{margin-bottom:50px;max-width:594px;color:#462e6a;font-size:36px;font-weight:700;line-height:1.33}@media screen and (max-width: 768px){.apps-botton-left h2{font-size:29px}}@media screen and (min-width: 768px) and (max-width: 1200px){.apps-botton-left h2{font-size:20px}}.apps-botton-left p{margin-bottom:40px;max-width:381px;color:#1f1534;font-size:18px;font-weight:300;line-height:1.66}@media screen and (max-width: 768px){.apps-botton-left p{max-width:338px}}@media screen and (max-width: 1200px){.apps-botton-left p{font-size:16px}}.apps-botton-left a{margin-top:0}@media screen and (min-width: 768px) and (max-width: 1200px){.apps-botton-right img{max-width:500px}}@media screen and (min-width: 1200px){.apps-botton-right img{max-width:657px}}.contacts{padding-top:200px;padding-bottom:200px;background:#f3fbff}@media screen and (max-width: 1200px){.contacts{padding-top:100px;padding-bottom:100px}}.contacts-wapper{display:flex;align-items:center;justify-content:space-between;padding-bottom:200px}@media screen and (max-width: 768px){.contacts-wapper{padding-bottom:100px;flex-direction:column}}@media screen and (max-width: 768px){.contacts-left img{margin-bottom:50px;max-width:325px}}@media screen and (min-width: 768px) and (max-width: 1200px){.contacts-left img{max-width:448px}}@media screen and (min-width: 1200px){.contacts-left img{max-width:576px}}.contacts-right h2{margin-bottom:30px;max-width:352.8px;color:#462e6a;font-size:36px;font-weight:700;line-height:1.33}@media screen and (max-width: 768px){.contacts-right h2{font-size:29px}}.contacts-right p{margin-bottom:76px;max-width:375px;color:#1f1534;font-size:19px;font-weight:300;line-height:1.66}@media screen and (max-width: 768px){.contacts-right p{max-width:323px}}.contacts-right a{margin-top:0}.form{padding-top:80px;padding-bottom:80px;text-align:center;max-width:1200px;border-radius:24px;background:linear-gradient(208deg,#6888c8 9.05%,#5a98f2 76.74%)}.form-center,.form-wapper{display:block;margin-left:auto;margin-right:auto}fieldset{padding:0;border:none}legend{margin-bottom:39px;margin-left:auto;margin-right:auto;max-width:398px;color:#fff;font-size:36px;font-weight:700;line-height:1.33}@media screen and (max-width: 768px){legend{font-size:30px}}.form-label{margin-bottom:41px;display:block;color:#fff;font-size:24px;font-weight:700;line-height:1.58;cursor:url(data:image/png;base64,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),auto}.form-label:last-child{margin-bottom:57px}.form-label input{display:block;margin:0 auto}input{width:508px;padding:0;background-color:inherit;border-top:none;border-right:none;border-left:none;border-bottom:2px solid #fff;color:#fff;outline:none}@media screen and (max-width: 768px){input{width:260px}}.form-btn{padding:0 230px;color:#fff;font-family:inherit;text-align:center;font-size:18px;font-weight:700;line-height:3.33;border:1px solid #fff;border-radius:24px;background:linear-gradient(208deg,#6888c8 9.05%,#5a98f2 76.74%);cursor:url(data:image/png;base64,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),auto}@media screen and (max-width: 768px){.form-btn{padding:0 108px}}.form-btn:hover,.form-btn:focus{background:#f66}.footer{padding-top:100px;padding-bottom:100px;background:linear-gradient(183deg,#6888c8 -8.57%,#5a98f2 82.96%);box-shadow:0 4px 4px #00000040}.footer-wapper{display:flex;flex-wrap:wrap;gap:260px}@media screen and (max-width: 768px){.footer-wapper{gap:50px}}.footer__link{margin-bottom:20px;color:#fff;font-size:24px;font-weight:700}.footer__text{margin-bottom:30px;max-width:363px;color:#fff;font-feature-settings:"clig" off,"liga" off;font-size:18px;font-weight:500;line-height:1.5;letter-spacing:.18px}@media screen and (max-width: 768px){.footer__text{max-width:335px}}.footer__text2{margin-bottom:0;color:#fff;font-size:16px;font-weight:300;line-height:1.75}.footer-right a{margin-bottom:16px;color:#fff;font-size:20px;font-weight:700}.footer-right ul{color:#fff;font-size:18px;font-weight:300;line-height:2.11}body{padding:0;margin:0;font-family:Mulish,sans-serif;color:#1f1534;cursor:url(data:image/png;base64,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),auto}.no-scroll{overflow:hidden}',p=document.querySelector(".sec-text"),x=()=>{setTimeout(()=>{p.textContent="Saviour for you"},0),setTimeout(()=>{p.textContent="our contact +1(437)992-7217"},1e3),setTimeout(()=>{p.textContent="the fastest help"},2e3)};x();setInterval(x,6e3);(()=>{const i=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]");i.addEventListener("click",()=>{const n=i.getAttribute("aria-expanded")==="true"||!1;i.classList.toggle("is-open"),i.setAttribute("aria-expanded",!n),o.classList.toggle("is-open")})})();console.log(r);const s=document.createElement("style");s.innerHTML=r;document.querySelector("head").append(s);
