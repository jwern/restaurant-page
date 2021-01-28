import { content } from './pageContent.js';
import { buildPage } from './buildPage.js';

function loadClickedPage() {
  let pageIds = {};

  for (let page in content) {
    pageIds[content[page]["pageID"]] = content[page];
    document.getElementById(content[page]["pageID"]).classList.remove('orange');
  }

  let pageContent = document.getElementById('content');
  while (pageContent.lastChild) {
    pageContent.removeChild(pageContent.lastChild);
  }

  buildPage(pageIds[this.id]);
}

export { loadClickedPage };