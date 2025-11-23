const secciones = document.querySelectorAll('section');

secciones.forEach((section, index) => {
    section.setAttribute('data-index', index);
});
console.log("Atributo data-index agregado a cada <section>.");