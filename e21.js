const contenedor = document.getElementById('contenedor');
const parrafosCreados = [];
for (let i = 1; i <= 3; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo ${i} generado dinámicamente.`;
    contenedor.appendChild(p);
    parrafosCreados.push(p);
}
if (parrafosCreados.length >= 2) {
    const segundoParrafo = parrafosCreados[1];
    segundoParrafo.remove(); 
}

console.log("3 párrafos creados. El segundo ha sido eliminado.");