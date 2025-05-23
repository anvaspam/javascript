let invitados = ["Roberto", "Lucía", "Carlos", "Andrea"];

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaInvitados");
    lista.innerHTML = "";
    invitados.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre.toUpperCase(); // En mayúsculas
        lista.appendChild(item);
});
}

// Acciones paso a paso
function agregarJuaniYAlex() {
    invitados.push("Juani", "Alex");
    actualizarLista();
}

function agregarMarta() {
    invitados.splice(2, 0, "Marta"); // Marta se cuela como tercera
    actualizarLista();
}

function eliminarRoberto() {
    invitados = invitados.filter(nombre => nombre.toLowerCase() !== "roberto");
    actualizarLista();
}

function agregarVecinos() {
    const vecinos = ["Laura", "Pablo", "Sofía", "Tomás"];
    invitados = invitados.concat(vecinos);
    actualizarLista();
}

// Función de búsqueda
function buscarInvitado() {
    const nombre = document.getElementById("busqueda").value.trim().toLowerCase();
    const resultado = document.getElementById("resultadoBusqueda");

    if (!nombre) {
        resultado.textContent = "⚠️ Escribe un nombre para buscar.";
        return;
}

    const encontrado = invitados.some(inv => inv.toLowerCase() === nombre);
    resultado.textContent = encontrado
        ? `✅ ${nombre.toUpperCase()} está invitado/a.`
        : `❌ ${nombre.toUpperCase()} NO está en la lista.`;
}

// Cargar lista inicial al abrir
actualizarLista();
