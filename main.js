(()=>{"use strict";let e={homepageContent:{headerImage:"images/header_image.jpg",headerPosition:"initial",pageTitle:"The Breakfast Bar",pageContent:"Welcome!  We have waffles, juice, eggs - you know, breakfast things.",pageID:"nav-home",navbarName:"Home",initialLoad:!0},menupageContent:{headerImage:"images/waffle_plate.jpg",headerPosition:"center",pageTitle:"Our Menu",pageContent:"Here's where we'll show off the menu.",pageID:"nav-menu",navbarName:"Menu"},contactpageContent:{headerImage:"images/contact_us_image.jpg",headerPosition:"center",pageTitle:"Contact Us",pageContent:"Here's how you can contact us.",pageID:"nav-contact",navbarName:"Contact"}};function t(e){document.getElementById(e.pageID).classList.add("orange");let t=document.getElementById("content"),n=document.createElement("div");n.id="header-image",n.style.backgroundImage=`url(${e.headerImage})`,n.style.backgroundPosition=e.headerPosition;let a=document.createElement("h1");a.id="page-title",a.innerText=e.pageTitle;let o=document.createElement("p");o.id="page-intro",o.innerText=e.pageContent;let i=[n,a,o];for(let e of i)t.appendChild(e)}function n(){let n={};for(let t in e)n[e[t].pageID]=e[t],document.getElementById(e[t].pageID).classList.remove("orange");let a=document.getElementById("content");for(;a.lastChild;)a.removeChild(a.lastChild);t(n[this.id])}function a(e){let t=document.createElement("li"),n=document.createElement("a");return n.href=`#${e.navbarName}`,t.id=`${e.pageID}`,n.innerText=`${e.navbarName}`,t.appendChild(n),t}!function(){let o=function(){let t=document.createElement("nav");t.classList.add("nav-links");let o=document.createElement("ul");o.id="navigation";let i=[];for(let t in e)i.push(a(e[t]));for(let e of i)e.addEventListener("click",n),o.appendChild(e);return t.appendChild(o),t}();document.body.prepend(o);for(let t in e)if(e[t].initialLoad)var i=e[t];t(i||e[Object.keys(e)[0]])}()})();