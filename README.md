# README

# Project: JavaScript - Restaurant Page #

This is my student solution to The Odin Project's [restaurant page projct](https://www.theodinproject.com/lessons/restaurant-page).  The goal of this project was to build a simple JavaScript-only webpage for a restaurant featuring three landing pages accessible via a navbar.  The area of practice it focuses on is modules: the brief asked us to extract code for different areas of the site into their own logical modules and then `export` and `import` as needed.

## Project Post-Mortem ##

I found this project significantly easier to build than the other two ([Library App](https://github.com/jwern/library-app) and [Tic-Tac-Toe](https://github.com/jwern/tictactoe)) from this Odin Project path.  After working with factory functions and IIFEs extensively in Tic-Tac-Toe, modules were fairly straightforward to learn and begin implementing.  This project also provided more great practice for working with the DOM in JavaScript, as the brief instructed us to add all DOM elements via JavaScript and not directly to the HTML.  Because this can get lengthy (between creating, adding classes, inserting content, appending, etc.), I appreciated using modules even more to help keep the code as readable as possible.

I am glad I chose to separate the content of each page and then import and utilize that content when the appropriate page is called.  This creates a fairly straightforward process for either updating a page's content (not layout) or adding a new page.  A site maintainer could update existing pages' content by accessing only pageContent.js.

## Challenges ##

This is a fairly small site with pages containing the same layout, so I was able to reuse code and really benefit from the use of modules.  However, even from this short project, I can see that modules do require some forethought -- What will I need to reuse that's worth making into a module?  Where should a function used by multiple modules live?  Is it really worth using a module if I'm importing everything from it elsewhere? -- and organization.  I'm not sure my current structure is ideal, and I'd like to read more code from more experienced programmers to learn from their layouts and process.

This project is also the first time within The Odin Project that I've used webpack and npm (although I've used npm elsewhere before).  Dealing with the occasional error in webpack wasn't too difficult (usually I was running it from a sub-folder instead of the root), but getting it set up initially did take some time, and I did run into the occasional question of "Should this file go in src/ or dist/ ?"

## Screenshots ##

![Desktop view screenshot](TBA)
![Mobile view screenshot](TBA)

## To Do ##

I focused almost exclusively on the JavaScript portion of this project and did not spend much time on the styling or content.  If I were to return to this project, I would create actual (fake) restaurant "content" for each page - email / phone to the contact page, food items or a menu PDF on the menu page, etc.  If the pages were actually finalized with content, it likely would not make sense to use the exact same layout - the menu page might not have the header image on it, for instance - and I would adjust the modules accordingly.

## Technologies ##
