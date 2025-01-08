import { createHome } from "./home.js"; 
import { createMenu } from "./menu.js"; 
import { createAbout } from "./about.js"; 

const content = document.querySelector("div#content"); 
const homeButton = document.querySelector("button.home"); 
const menuButton = document.querySelector("button.menu"); 
const aboutButton = document.querySelector("button.about"); 

function clearContent() {
    content.textContent = "";
}

createHome(); 

homeButton.addEventListener("click", () => {
    clearContent(); 
    createHome(); 
});

menuButton.addEventListener("click", () => {
    clearContent(); 
    createMenu();
});

aboutButton.addEventListener("click", () => {
    clearContent(); 
    createAbout();
});