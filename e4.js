const parrafos = document.querySelectorAll('p'); 
const nuevoTexto = "Texto actualizado dinámicamente";
parrafos.forEach(parrafo => {
    parrafo.textContent = nuevoTexto;
});

console.log("Contenido de párrafos actualizado");