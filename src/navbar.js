import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage.js';
import { loadContactPage } from './contactPage.js';

function loadClickedPage() {
  let pageIds = {
    "nav-menu": loadMenuPage,
    "nav-home": loadHomePage,
    "nav-contact": loadContactPage,
  }

  let pageContent = document.getElementById('content');
  while (pageContent.lastChild) {
    pageContent.removeChild(pageContent.lastChild);
  }
  
  pageIds[this.id]();
}

export { loadClickedPage };