import { homepageContent, menupageContent, contactpageContent } from './pageContent.js';
import { buildPage } from './buildPage.js';

function loadClickedPage() {
  let pageIds = {
    "nav-menu": menupageContent,
    "nav-home": homepageContent,
    "nav-contact": contactpageContent,
  }

  let pageContent = document.getElementById('content');
  while (pageContent.lastChild) {
    pageContent.removeChild(pageContent.lastChild);
  }
  
  buildPage(pageIds[this.id]);
}

export { loadClickedPage };