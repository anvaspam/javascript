function mostrarAnimal() {
    // Obtener el valor del input (el animal escrito por el usuario)
    let animal = document.getElementById("animalInput").value.toLowerCase().trim();

    // Variables para la imagen y el nombre
    let imageSrc = "";
    let animalName = "";

    // Comprobamos el valor ingresado y asignamos la imagen y el nombre correspondientes
    if (animal === "perro") {
        imageSrc = "../img/perro.png";  // Aquí pondrías la URL real de la imagen
        animalName = "Perro";
    } else if (animal === "gato") {
        imageSrc = "../img/gato.png";  // Aquí pondrías la URL real de la imagen
        animalName = "Gato";
    } else if (animal === "canario") {
        imageSrc = "../img/canario.png";  // Aquí pondrías la URL real de la imagen
        animalName = "Canario";
    } else {
        // Si no es ninguno de los animales, mostrar un mensaje
        imageSrc = "";  // No mostramos ninguna imagen si no es un animal válido
        animalName = "Animal no disponible, por favor escribe perro, gato o canario.";
    }

    // Actualizar la imagen y el nombre en el div
    document.getElementById("animalImage").src = imageSrc;
    document.getElementById("animalName").textContent = animalName;
}
