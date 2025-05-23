// Imprimir los números entre 20 y 50 en orden descendente
for (let i = 50; i >= 20; i--) {
    console.log(i);
}


// Pedir al usuario dos números
let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

// Imprimir los números pares entre num1 y num2
for (let i = num1; i <= num2; i++) {
if (i % 2 === 0) {
    console.log(i);
}
}

// Pedir al usuario los precios de 5 productos
let total = 0;
for (let i = 1; i <= 5; i++) {
let precio = parseFloat(prompt("Introduce el precio del producto " + i + ":"));
  total += precio; // Acumulamos el precio total
}

// Verificar si el total es 100 euros o más para aplicar descuento
if (total >= 100) {
    let descuento = total * 0.15;
    let precioConDescuento = total - descuento;
    console.log("Precio original: " + total + "€");
    console.log("Descuento: 15%");
    console.log("Precio final con descuento: " + precioConDescuento.toFixed(2) + "€");
} else {
    console.log("Precio total: " + total.toFixed(2) + "€");
}
