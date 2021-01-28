import { content } from './pageContent.js';
import { buildPage } from './buildPage.js';
import { loadClickedPage } from './navbar.js';

function initialPageLoad() {
  let pageTabs = createTabs();
  document.body.prepend(pageTabs);

  for (let page in content) {
    if (content[page]["initialLoad"]) {
      var homepage = content[page]; 
    }
  }
  
  buildPage(homepage || content[Object.keys(content)[0]]);
}

function createTabs() {
  let tabsDiv = document.createElement('nav');
  tabsDiv.classList.add('nav-links');

  let navLinks = document.createElement('ul');
  navLinks.id = "navigation";

  let navChildren = [];
  for (let page in content) {
    navChildren.push(createListItem(content[page]));
  }
 
  for (let child of navChildren) {
    child.addEventListener('click', loadClickedPage);
    navLinks.appendChild(child);
  };

  tabsDiv.appendChild(navLinks);

  return tabsDiv;
}

function createListItem(page) {
  let listItem = document.createElement('li');
  let listAnchor = document.createElement('a');
  
  listAnchor.href = `#${page["navbarName"]}`;
  listItem.id = `${page["pageID"]}`;
  listAnchor.innerText = `${page["navbarName"]}`;

  listItem.appendChild(listAnchor);
  return listItem;
}

export { initialPageLoad };