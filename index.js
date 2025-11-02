import{a as l,S as u,i}from"./assets/vendor-BgmC94F3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="53054234-db08f1651f6ed2d5abc76426b",f="https://pixabay.com/api/",p=l.create({baseURL:f,timeout:1e4});function m(t){return p.get("",{params:{key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(o=>o.data)}function y(t){const o=document.querySelector(".gallery"),n=t.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e.likes}</p>
          <p><b>Views</b> ${e.views}</p>
          <p><b>Comments</b> ${e.comments}</p>
          <p><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",n),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){const t=document.querySelector(".loader");t&&t.classList.add("visible")}function b(){const t=document.querySelector(".loader");t&&t.classList.remove("visible")}const c=document.querySelector(".form"),L=document.querySelector('input[name="search-text"]');c.addEventListener("submit",w);async function w(t){t.preventDefault();const o=L.value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}g(),h();try{const n=await m(o);if(n.hits.length===0){i.info({message:"No images found for your request.",position:"topRight"});return}y(n.hits)}catch(n){i.error({message:"Something went wrong! Try again later.",position:"topRight"}),console.error(n)}finally{b(),c.reset()}}
//# sourceMappingURL=index.js.map
