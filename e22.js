const section = document.getElementById('targetSection');

if (section) {
    const nuevoH2 = document.createElement('h2');
    nuevoH2.textContent = "Título nuevo";
    section.prepend(nuevoH2); 
    
    const descripcionP = document.createElement('p');
    descripcionP.textContent = "Descripción generada";
    nuevoH2.after(descripcionP);

    const lista = document.createElement('ul');
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        lista.appendChild(li);
    }
    section.appendChild(lista); 
    const h2Original = section.querySelector('h2');
    if (h2Original && h2Original.textContent === "Título Original Existente") {
         h2Original.remove(); 
    }
}
console.log("Section manipulada (creación de h2, p, ul) y h2 original eliminado.");