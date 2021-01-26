import { loadHomePage } from './homePage.js'
import { loadClickedPage } from './navbar.js'

function initialPageLoad() {
  let pageContent = document.getElementById('content');

  let pageTabs = createTabs();
  document.body.insertBefore(pageTabs, pageContent);

  loadHomePage();
}

function createTabs() {
  let tabsDiv = document.createElement('nav');
  tabsDiv.classList.add('nav-links');

  let navLinks = document.createElement('ul');
  navLinks.id = "navigation";

  let navHome = createListItem("Home");
  let navMenu = createListItem("Menu");
  let navContact = createListItem("Contact");

  let navChildren = [
    navHome,
    navMenu,
    navContact
  ];

  for (let child of navChildren) {
    child.addEventListener('click', loadClickedPage);
    navLinks.appendChild(child);
  };

  tabsDiv.appendChild(navLinks);

  return tabsDiv;
}

function createListItem(text) {
  let listItem = document.createElement('li');
  let listAnchor = document.createElement('a');
  
  listAnchor.href = `#${text}`;
  listItem.id = `nav-${text.toLowerCase()}`;
  listAnchor.innerText = text;

  listItem.appendChild(listAnchor);
  return listItem;
}

export { initialPageLoad };