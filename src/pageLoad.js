function initialPageLoad() {
  let pageContent = document.getElementById('content');
  
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
    headerImage, 
    pageTitle, 
    pageText
  ];

  for (let child of children) {
    pageContent.appendChild(child);
  };
}

export { initialPageLoad };