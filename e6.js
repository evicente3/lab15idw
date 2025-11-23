const itemsLista = document.querySelectorAll('li');
itemsLista.forEach(item => {
    item.classList.add('resaltado'); 
    item.classList.remove('oculto');
});

console.log("Clases de los elementos <li> actualizadas.");