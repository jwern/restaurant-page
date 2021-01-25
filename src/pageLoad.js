function initialPageLoad() {
  let pageContent = document.getElementById('content');

  let pageTabs = createTabs();

  let headerImage = document.createElement('img');
  headerImage.src = "images/header_image.jpg";
  headerImage.id = "header-image";

  let pageTitle = document.createElement('h1');
  pageTitle.id = "page-title";
  pageTitle.innerText = "Breakfast Bar";

  let pageText = document.createElement('p');
  pageText.id = "page-intro";
  pageText.innerText = "Welcome!  We have waffles, juice, eggs - you know, breakfast things.";

  let children = [
    pageTabs,
    headerImage, 
    pageTitle, 
    pageText
  ];

  for (let child of children) {
    pageContent.appendChild(child);
  };
}

function createTabs() {
  let tabsDiv = document.createElement('div');
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
    navLinks.appendChild(child);
  };

  tabsDiv.appendChild(navLinks);

  return tabsDiv;
}

function createListItem(text) {
  let listItem = document.createElement('li');
  let listAnchor = document.createElement('a');
  
  listAnchor.href = `#${text}`;
  listAnchor.innerText = text;

  listItem.appendChild(listAnchor);
  return listItem;
}

export { initialPageLoad };