// Función para sumar, devuelve el resultado
function sumar2(num1, num2) {
    return num1 + num2;
}

// Función para restar, devuelve el resultado
function restar2(num1, num2) {
    return num1 - num2;
}

// Función principal para elegir la operación
function calcularOperacion2() {
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));
    const operacion = prompt("¿Quieres sumar o restar? (escribe '+' para sumar, '-' para restar)");

    let resultado;
    if (operacion === '+') {
        resultado = sumar2(num1, num2);  // Llamada a la función de suma
    } else if (operacion === '-') {
        resultado = restar2(num1, num2);  // Llamada a la función de resta
    } else {
        alert("Operación no válida.");
        return;
    }

    alert("El resultado de la operación es: " + resultado);
    console.log("El resultado de la operación es: " + resultado);
}