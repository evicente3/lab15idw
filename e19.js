const divs = document.querySelectorAll('div');
const conteo = divs.length;

const resultadoParrafo = document.createElement('p');

resultadoParrafo.textContent = `Número total de <div> encontrados: ${conteo}`;

document.body.appendChild(resultadoParrafo);

console.log(`Se encontraron ${conteo} divs y se mostró el resultado.`);