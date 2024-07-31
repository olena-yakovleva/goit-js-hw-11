import{S as f,i as a}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="44905147-344bca269584bf85e56b0c1f2",m="https://pixabay.com/api/";function d(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${o.toString()}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r})}const c=document.querySelector(".gallery");function h(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:l,downloads:u})=>`
    <li>
      <a href="${n}">
        <img src="${r}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes:<br /><spann>${t}</spann></p>
        <p>Views:<br /><spann>${i}</spann></p>
        <p>Comments:<br /><spann>${l}</spann></p>
        <p>Downloads:<br /><spann>${u}</spann></p>
      </div>
    </li>
  `).join("");c.innerHTML=o,new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".search-form");b.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements.query,r=o.value.trim();if(!r){a.error({message:"Please enter a search query!",position:"topRight"});return}y(),g(),d(r).then(n=>{n.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(n.hits)}).catch(n=>{a.error({title:"Error",message:n.message})}).finally(()=>{L(),o.value=""})});
//# sourceMappingURL=commonHelpers.js.map
