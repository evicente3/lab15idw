const primerArticle = document.querySelector('article');
const mainElement = document.querySelector('main');

if (primerArticle && mainElement) {
    const clonArticle = primerArticle.cloneNode(true); 
    
    const h3Clon = clonArticle.querySelector('h3');
    if(h3Clon) h3Clon.textContent = "Artículo Clonado";

    mainElement.appendChild(clonArticle);
}
console.log("Primer <article> clonado y agregado al final de <main>.");