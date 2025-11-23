const nuevoH3 = document.createElement('h3');
nuevoH3.textContent = "Título 3 Insertado Antes del Primer Párrafo";
const primerParrafo = document.querySelector('p');
const padre = primerParrafo.parentNode;
padre.insertBefore(nuevoH3, primerParrafo);
console.log("Nuevo <h3> insertado antes del primer párrafo.");