const lista = document.getElementById('listaMover');

if (lista && lista.children.length > 1) {
    const ultimoLi = lista.lastElementChild; 
    const primerLi = lista.firstElementChild; 
    lista.insertBefore(ultimoLi, primerLi);
}

console.log("Último <li> movido al principio de la lista.");