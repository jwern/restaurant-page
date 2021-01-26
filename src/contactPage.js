function loadContactPage() {
  let pageContent = document.getElementById('content');

  let headerImage = document.createElement('img');
  headerImage.src = "images/header_image.jpg";
  headerImage.id = "header-image";

  let pageTitle = document.createElement('h1');
  pageTitle.id = "page-title";
  pageTitle.innerText = "Contact Us";

  let pageText = document.createElement('p');
  pageText.id = "page-intro";
  pageText.innerText = "Here's how you can contact us.";

  let children = [
    headerImage, 
    pageTitle, 
    pageText
  ];

  for (let child of children) {
    pageContent.appendChild(child);
  };
}

export { loadContactPage };