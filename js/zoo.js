function modificarZoo() {
    let zoo = ['León', 'Elefante', 'Cebra', 'Jirafa', 'Tigre'];

    console.log("Array original del zoo:", zoo);

    // Añadir dos animales al final
    zoo.push('Gorila', 'Osos');
    console.log("Después de añadir dos animales:", zoo);

    // Restar uno al final
    zoo.pop();
    console.log("Después de quitar un animal:", zoo);

    // Cambiar el tercero por otro
    zoo[2] = 'Panda';
    console.log("Después de cambiar el tercero:", zoo);

    // Imprimir el total de animales con la propiedad length
    console.log("Total de animales en el zoo:", zoo.length);

    // Recorrer el array con un bucle FOR e imprimir todos los animales
    console.log("Recorriendo el array con un bucle FOR:");
    for (let i = 0; i < zoo.length; i++) {
        console.log(zoo[i]);
    }
}


// ZOO INVERTIDO

let zoo = ["elefante", "jirafa", "león", "cocodrilo", "canguro"];

function mostrarArrayOriginal() {
    // Mostrar el array en su orden original
    document.getElementById("resultado").innerHTML = "Array Original: " + zoo.join(", ");
}

function mostrarArrayInvertido() {
    // Bucle que recorre el array al revés
    let resultadoInvertido = "Array Invertido: ";
    
    for (let i = zoo.length - 1; i >= 0; i--) {
        resultadoInvertido += zoo[i] + (i > 0 ? ", " : "");
    }

    // Mostrar el array invertido en el div
    document.getElementById("resultado").innerHTML = resultadoInvertido;
}


