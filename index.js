import{a as p,S as d,i as n}from"./assets/vendor-DuKcLXOA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="56343212-41744bdbe6b5267ac6c037485",y="https://pixabay.com/api/";async function g(i){const{data:r}=await p.get(y,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}});return r}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,scrollZoom:!1});function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="info">
            <p><b>Likes</b><br>${t}</p>
            <p><b>Views</b><br>${a}</p>
            <p><b>Comments</b><br>${u}</p>
            <p><b>Downloads</b><br>${m}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function v(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",q);async function q(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight",timeout:3e3});return}L(),v();try{const o=await g(r);if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}b(o.hits)}catch(o){n.error({message:"Something went wrong. Try again later.",position:"topRight",timeout:5e3}),console.error(o)}finally{w()}}
//# sourceMappingURL=index.js.map
