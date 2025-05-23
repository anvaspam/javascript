// Función para sumar
function sumar(num1, num2) {
    const resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
    console.log("El resultado de la suma es: " + resultado);
}

// Función para restar
function restar(num1, num2) {
    const resultado = num1 - num2;
    alert("El resultado de la resta es: " + resultado);
    console.log("El resultado de la resta es: " + resultado);
}

// Función principal para elegir la operación
function calcularOperacion() {
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));
    const operacion = prompt("¿Quieres sumar o restar? (escribe '+' para sumar, '-' para restar)");

    if (operacion === '+') {
        sumar(num1, num2);  // Llamada a la función de suma
    } else if (operacion === '-') {
        restar(num1, num2);  // Llamada a la función de resta
    } else {
        alert("Operación no válida.");
    }
}