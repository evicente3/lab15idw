const parrafos = document.querySelectorAll('p');
if (parrafos.length > 0) {
    const ultimoParrafo = parrafos[parrafos.length - 1];
    ultimoParrafo.remove(); 
}
console.log("Último párrafo eliminado.");