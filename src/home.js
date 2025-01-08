import bakeryImageFile from "./assets/bakery.jpg";

export function createHome() {
    const content = document.querySelector("div#content");
    const header = document.createElement("h1");
    const introParagraph = document.createElement("p"); 
    const bakeryImage = document.createElement("img"); 

    header.textContent = "Welcome to Cafe Sherry"; 
    introParagraph.textContent = "This is filler placeholder information that should tell you, the reader, a little bit about my hypothetical bakery"; 
    bakeryImage.src = bakeryImageFile; 
    bakeryImage.alt = "Placeholder image of a bakery storefront";

    content.appendChild(header);
    content.appendChild(introParagraph); 
    content.appendChild(bakeryImage); 
};