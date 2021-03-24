function buildPage(page) {
  let navText = document.getElementById(page["pageID"]);
  navText.classList.add('orange');
  
  let pageContent = document.getElementById('content');

  let headerContainer = document.createElement('div');
  headerContainer.id = "header-image";
  headerContainer.style.backgroundImage = `url(${page["headerImage"]})`;
  headerContainer.style.backgroundPosition = page["headerPosition"]

  let pageTitle = document.createElement('h1');
  pageTitle.id = "page-title";
  pageTitle.classList.add('padded-content');
  pageTitle.innerText = page["pageTitle"];

  let pageText = document.createElement('p');
  pageText.id = "page-intro";
  pageText.classList.add('padded-content');
  pageText.innerText = page["pageContent"];

  let children = [
    headerContainer, 
    pageTitle, 
    pageText
  ];

  for (let child of children) {
    pageContent.appendChild(child);
  };
}

export { buildPage };