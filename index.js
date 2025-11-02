import{a as l,S as u,i}from"./assets/vendor-BgmC94F3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="53054234-db08f1651f6ed2d5abc76426b",f="https://pixabay.com/api/",p=l.create({baseURL:f,timeout:1e4});function m(t){return p.get("",{params:{key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(o=>o.data)}const y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const o=document.querySelector(".gallery"),s=t.map(n=>`
      <li class="gallery-item">
        <a href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${n.likes}</p>
          <p><b>Views</b> ${n.views}</p>
          <p><b>Comments</b> ${n.comments}</p>
          <p><b>Downloads</b> ${n.downloads}</p>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",s),y.refresh()}function h(){const t=document.querySelector(".gallery");t.innerHTML=""}function b(){const t=document.querySelector(".loader");t&&t.classList.add("visible")}function L(){const t=document.querySelector(".loader");t&&t.classList.remove("visible")}const c=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');c.addEventListener("submit",S);async function S(t){t.preventDefault();const o=w.value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}h(),b();try{const s=await m(o);if(s.hits.length===0){i.info({message:"No images found for your request.",position:"topRight"});return}g(s.hits)}catch(s){i.error({message:"Something went wrong! Try again later.",position:"topRight"}),console.error(s)}finally{L(),c.reset()}}
//# sourceMappingURL=index.js.map
