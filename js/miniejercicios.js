// Punto 1: Resta de dos números
function restaNumeros() {
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));
    const resultadoResta = num1 - num2;

    // Mostrar el resultado de la resta en consola y en pantalla
    console.log("El resultado de la resta es: " + resultadoResta);
    alert("El resultado de la resta es: " + resultadoResta);
}

// Punto 2: Recoger nombre, localidad y hobby, y mostrarlo en una frase
function informacionUsuario() {
    const nombre = prompt("¿Cómo te llamas?");
    const localidad = prompt("¿Dónde vives?");
    const hobby = prompt("¿Cuál es tu hobby?");
    
    const frase = `Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}.`;

    // Mostrar la frase en consola y en pantalla
    console.log(frase);
    alert(frase);
}

// Punto 3: Calcular el área de un círculo
function calcularAreaCirculo() {
    const radio = parseFloat(prompt("Introduce el radio del círculo:"));
    const pi = 3.1416; // El valor de PI con 4 decimales
    const area = pi * Math.pow(radio, 2); // Fórmula para el área del círculo: π * r²

    // Mostrar el resultado en pantalla
    alert(`El área de un círculo con radio ${radio} es: ${area.toFixed(2)}`);
    console.log(`El área de un círculo con radio ${radio} es: ${area.toFixed(2)}`);
}