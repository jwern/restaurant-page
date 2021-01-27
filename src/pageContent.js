let homepageContent = {
  headerImage: "images/header_image.jpg",
  headerPosition: "initial",
  pageTitle: "The Breakfast Bar",
  pageContent: "Welcome!  We have waffles, juice, eggs - you know, breakfast things.",
  pageID: "nav-home",
  navbarName: "Home",
  initialLoad: true,
};

let menupageContent = {
  headerImage: "images/waffle_plate.jpg",
  headerPosition: "center",
  pageTitle: "Our Menu",
  pageContent: "Here's where we'll show off the menu.",
  pageID: "nav-menu",
  navbarName: "Menu",
}

let contactpageContent = {
  headerImage: "images/contact_us_image.jpg",
  headerPosition: "center",
  pageTitle: "Contact Us",
  pageContent: "Here's how you can contact us.",
  pageID: "nav-contact",
  navbarName: "Contact",
}

// Decide the order of the pages and list in the order in the content object
let content = { homepageContent, menupageContent, contactpageContent };

export { content };