const contenedor = document.getElementById('contenedorEstructura');
const nuevaLista = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const nuevoLi = document.createElement('li'); 
    nuevoLi.textContent = `Item ${i}: `; 
    const nuevoSpan = document.createElement('span'); 
    nuevoSpan.textContent = "Nivel interno"; 
   
    nuevoLi.appendChild(nuevoSpan);
    
 
    nuevaLista.appendChild(nuevoLi);
}

contenedor.appendChild(nuevaLista);

console.log("Estructura anidada <ul> > <li> > <span> creada.");