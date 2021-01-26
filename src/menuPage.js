function loadMenuPage() {
  let pageContent = document.getElementById('content');

  let headerImage = document.createElement('img');
  headerImage.src = "images/header_image.jpg";
  headerImage.id = "header-image";

  let pageTitle = document.createElement('h1');
  pageTitle.id = "page-title";
  pageTitle.innerText = "Our Menu";

  let pageText = document.createElement('p');
  pageText.id = "page-intro";
  pageText.innerText = "Here's where we'll show off the menu.";

  let children = [
    headerImage, 
    pageTitle, 
    pageText
  ];

  for (let child of children) {
    pageContent.appendChild(child);
  };
}

export { loadMenuPage };