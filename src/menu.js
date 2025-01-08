export function createMenu() {
    const content = document.querySelector("div#content"); 
    const div = document.createElement("div"); 
    const header= document.createElement("h1"); 
    const paragraph = document.createElement("p"); 

    header.textContent = "Menu"; 
    paragraph.textContent = "This is the menu"; 

    div.appendChild(header); 
    div.appendChild(paragraph); 

    content.appendChild(div); 
};

 