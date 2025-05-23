let catalogoMusica = ["The Beatles", "Queen", "Pink Floyd", "Led Zeppelin", "The Rolling Stones"];

// Función para actualizar la lista de catálogo en el HTML
function actualizarCatalogo() {
    const catalogoList = document.getElementById('catalogoList');
    catalogoList.innerHTML = ''; // Limpiar la lista
    catalogoMusica.forEach((banda, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${banda}`;
        catalogoList.appendChild(li);
    });
}

// Función para añadir una banda
function añadirBanda() {
    const banda = prompt("Introduce el nombre de la banda:");
    if (banda) {
        catalogoMusica.push(banda);
        actualizarCatalogo();
    }
}

// Función para borrar el primer elemento
function borrarPrimerElemento() {
    catalogoMusica.shift();
    actualizarCatalogo();
}

// Función para borrar el último elemento
function borrarUltimoElemento() {
    catalogoMusica.pop();
    actualizarCatalogo();
}

// Función para cambiar una banda
function cambiarBanda() {
    const indice = parseInt(prompt("Introduce el índice de la banda que quieres cambiar (1, 2, 3, ...):")) - 1;
    if (indice >= 0 && indice < catalogoMusica.length) {
        const nuevoNombre = prompt("Introduce el nuevo nombre de la banda:");
        if (nuevoNombre) {
            catalogoMusica[indice] = nuevoNombre;
            actualizarCatalogo();
        }
    } else {
        alert("Índice no válido.");
    }
}

// Función para buscar una banda
function buscarBanda() {
    const banda = prompt("Introduce el nombre de la banda que quieres buscar:");
    const indice = catalogoMusica.indexOf(banda);
    if (indice !== -1) {
        alert(`La banda ${banda} está en el índice ${indice + 1}.`);
    } else {
        alert("Banda no encontrada.");
    }
}

// Evento para actualizar el catálogo cuando se cargue la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarCatalogo();

    // Asignar funciones a los botones
    document.getElementById('addButton').addEventListener('click', añadirBanda);
    document.getElementById('removeFirstButton').addEventListener('click', borrarPrimerElemento);
    document.getElementById('removeLastButton').addEventListener('click', borrarUltimoElemento);
    document.getElementById('changeButton').addEventListener('click', cambiarBanda);
    document.getElementById('searchButton').addEventListener('click', buscarBanda);
});
