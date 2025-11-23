const contenedor = document.getElementById('contenedorParrafos');

if (contenedor) {
    const parrafosNodeList = contenedor.querySelectorAll('p');

    const parrafosArray = Array.from(parrafosNodeList);

    parrafosArray.sort((a, b) => {
        const textoA = a.textContent.toUpperCase();
        const textoB = b.textContent.toUpperCase();
        if (textoA < textoB) return -1;
        if (textoA > textoB) return 1;
        return 0;
    });

    parrafosArray.forEach(parrafo => {
        contenedor.appendChild(parrafo); 
    });
}

console.log("Párrafos reordenados alfabéticamente.");