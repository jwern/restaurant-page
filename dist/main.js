(()=>{"use strict";function e(e){let t=document.createElement("li"),n=document.createElement("a");return n.href=`#${e}`,n.innerText=e,t.appendChild(n),t}!function(){let t=document.getElementById("content"),n=function(){let t=document.createElement("div");t.classList.add("nav-links");let n=document.createElement("ul");n.id="navigation";let a=e("Home"),i=e("Menu"),l=[a,e("Contact"),i];for(let e of l)n.appendChild(e);return t.appendChild(n),t}(),a=document.createElement("img");a.src="images/header_image.jpg",a.id="header-image";let i=document.createElement("h1");i.id="page-title",i.innerText="Breakfast Bar";let l=document.createElement("p");l.id="page-intro",l.innerText="Welcome!  We have waffles, juice, eggs - you know, breakfast things.";let d=[n,a,i,l];for(let e of d)t.appendChild(e)}()})();