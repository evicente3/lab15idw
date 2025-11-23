const divs = document.querySelectorAll('div');
const colores = ['#ffcc00', '#66ccff', '#ff6699', '#99ff99'];
divs.forEach((div, index) => {
    const colorIndex = index % colores.length;
    div.style.backgroundColor = colores[colorIndex]; 
});
console.log("Colores de fondo de los divs modificados.");