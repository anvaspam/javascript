const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const nombres = [
  ["Kitty", "Toby", "Didi"],            // mascotas
  ["Pedro", "Jose", "Roberto"],         // personas
  ["Carla", "Rosa", "Julieta"]          // personas
];

// Acceder a números
document.getElementById("num26").textContent = medidas[2][2][1];     // 26
document.getElementById("num134").textContent = medidas[0][1];       // 134
document.getElementById("num92").textContent = medidas[2][3];        // 92

// Acceder a nombres
document.getElementById("nombreRosa").textContent = nombres[2][1];         // Rosa
document.getElementById("nombreRoberto").textContent = nombres[1][2];      // Roberto

// Nombres de mascotas
const mascotas = nombres[0];

// a) En una línea
document.getElementById("mascotasLinea").textContent = mascotas.join(", ");

// b) En diferentes líneas (en <ul>)
const lista = document.getElementById("mascotasLista");
mascotas.forEach(nombre => {
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
});
