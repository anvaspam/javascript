// Función para calcular el peso ideal
function calcularPesoIdeal() {
    // Obtener los valores de altura y peso desde los inputs
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Verificar si los valores ingresados son válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, ingresa valores válidos para la altura y el peso.");
        return;
    }

    // Calculamos el IMC
    const imc = peso / (altura * altura); // Fórmula para el IMC: peso / altura²

    // Determinamos el mensaje en base al IMC
    let mensaje = `Para la altura de ${altura} m y el peso de ${peso} kg, tu IMC es ${imc.toFixed(2)}.`;

    if (imc < 18.5) {
        mensaje += " Estás por debajo del peso recomendado.";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje += " Estás en un peso saludable.";
    } else {
        mensaje += " Estás por encima del peso recomendado.";
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = mensaje;
}

// Función para rellenar el ticket
function rellenarTicket() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const fila = document.getElementById("fila").value;
    const asiento = document.getElementById("asiento").value;

    // Llenar los campos del ticket
    document.getElementById("ticketNombre").innerText = `Nombre: ${nombre}`;
    document.getElementById("ticketFecha").innerText = `Fecha: ${fecha}`;
    document.getElementById("ticketButaca").innerText = `Butaca: Fila ${fila} - Asiento ${asiento}`;
}