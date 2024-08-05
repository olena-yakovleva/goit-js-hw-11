import{S as p,i}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="45288911-2aee760e8debc477a1c950329",d="https://pixabay.com/api/";async function m(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const r=await fetch(`${d}?${o.toString()}`);if(!r.ok)throw new Error(r.statusText);return await r.json()}catch(r){throw console.error("Error fetching images:",r),r}}const c=document.querySelector(".gallery");function h(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:l,downloads:u})=>`
    <li>
      <a href="${n}">
        <img src="${r}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes:<br /><spann>${t}</spann></p>
        <p>Views:<br /><spann>${a}</spann></p>
        <p>Comments:<br /><spann>${l}</spann></p>
        <p>Downloads:<br /><spann>${u}</spann></p>
      </div>
    </li>
  `).join("");c.innerHTML=o,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".search-form");b.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements.query,r=o.value.trim();if(!r){i.error({message:"Please enter a search query!",position:"topRight"});return}y(),g(),m(r).then(n=>{n.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(n.hits)}).catch(n=>{i.error({title:"Error",message:n.message})}).finally(()=>{L(),o.value=""})});
//# sourceMappingURL=commonHelpers.js.map
