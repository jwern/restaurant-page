import { homepageContent } from './pageContent.js';

function loadHomePage() {
  let pageContent = document.getElementById('content');

  let headerContainer = document.createElement('div');
  headerContainer.id = "header-image";
  headerContainer.style.backgroundImage = `url(${homepageContent["headerImage"]})`;
  // let headerImage = document.createElement('img');
  // headerImage.src = homepageContent["headerImage"];
  // headerContainer.appendChild(headerImage);

  let pageTitle = document.createElement('h1');
  pageTitle.id = "page-title";
  pageTitle.innerText = homepageContent["pageTitle"];

  let pageText = document.createElement('p');
  pageText.id = "page-intro";
  pageText.innerText = homepageContent["pageContent"];

  let children = [
    headerContainer, 
    pageTitle, 
    pageText
  ];

  for (let child of children) {
    pageContent.appendChild(child);
  };
}

export { loadHomePage };