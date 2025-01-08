export function createAbout() {
    const content = document.querySelector("div#content"); 
    const div = document.createElement("div"); 
    const header = document.createElement("h1"); 
    const paragraph = document.createElement("p"); 
    
    header.textContent = "About"; 
    paragraph.textContent = "This is filler content for the About section"; 

    div.appendChild(header); 
    div.appendChild(paragraph); 

    content.appendChild(div); 
};