function imprimirNumeros() {
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = '<h3>Ejercicio 1:</h3>';
    for (let i = 50; i >= 20; i--) {
        resultados.innerHTML += i + '<br>';
    }
}

  // Ejercicio 2: Imprimir los números pares entre dos números introducidos por el usuario
function imprimirPares() {
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = '<h3>Ejercicio 2:</h3>';
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
        resultados.innerHTML += i + '<br>';
        }
    }
}

  // Ejercicio 3: Carrito de la compra con descuento
function carritoCompra() {
    let total = 0;
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = '<h3>Ejercicio 3:</h3>';
    
    for (let i = 1; i <= 5; i++) {
        let precio = parseFloat(prompt("Introduce el precio del producto " + i + ":"));
        total += precio;
    }

    if (total >= 100) {
        let descuento = total * 0.15;
        let precioConDescuento = total - descuento;
        resultados.innerHTML += `Precio original: €${total.toFixed(2)}<br>`;
        resultados.innerHTML += `Descuento del 15%: €${descuento.toFixed(2)}<br>`;
        resultados.innerHTML += `Precio final con descuento: €${precioConDescuento.toFixed(2)}<br>`;
    } else {
        resultados.innerHTML += `Precio total: €${total.toFixed(2)}<br>`;
    }
}