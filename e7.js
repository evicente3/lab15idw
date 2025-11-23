const lista = document.getElementById('listaPrincipal'); 
if (lista) {
    for (const hijo of lista.children) {
        if (hijo.nodeName === 'LI') {
            console.log(hijo.textContent); 
        }
    }
}