const contenedor = document.getElementById('contenedorLista');
const nuevaLista = document.createElement('ul'); 
for (let i = 1; i <= 5; i++) {
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = `Elemento ${i}`;
    nuevaLista.appendChild(nuevoLi); 
}
contenedor.appendChild(nuevaLista);
console.log("Nueva lista con 5 items creada e insertada en la sección.");