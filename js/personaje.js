// Función que se ejecuta cuando la página se ha cargado completamente
function miFuncion() {
    console.log("La página se ha cargado completamente");
    // Puedes agregar más acciones que quieras ejecutar al cargar la página.
}

// Usamos el evento 'load' de window para ejecutar miFuncion cuando la página esté completamente cargada
window.addEventListener("load", miFuncion);

// Función para mostrar la ventana emergente
function mostrarVentana() {
    document.getElementById("ventanaEmergente").style.display = "flex"; // Muestra la ventana
    setTimeout(cerrarVentana, 6000); // Cierra la ventana después de 3 segundos
}

// Función para cerrar la ventana emergente
function cerrarVentana() {
    document.getElementById("ventanaEmergente").style.display = "none"; // Oculta la ventana
}
