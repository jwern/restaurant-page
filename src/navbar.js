import { content } from './pageContent.js';
import { buildPage } from './buildPage.js';

function loadClickedPage() {
  let pageIds = {};

  for (let page in content) {
    pageIds[content[page]["pageID"]] = content[page];
  }
    // "nav-menu": content.menupageContent,
    // "nav-home": content.homepageContent,
    // "nav-contact": content.contactpageContent,

  let pageContent = document.getElementById('content');
  while (pageContent.lastChild) {
    pageContent.removeChild(pageContent.lastChild);
  }

  buildPage(pageIds[this.id]);
}

export { loadClickedPage };