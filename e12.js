const parrafoViejo = document.getElementById('parrafoReemplazar'); 
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = "Párrafo reemplazado";

if (parrafoViejo && parrafoViejo.parentNode) {
    parrafoViejo.replaceWith(nuevoDiv);
}
console.log("Párrafo reemplazado por un div.");