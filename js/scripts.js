//EDAD

function verificarEdad() {
    // Obtener el valor ingresado en el campo de edad
    var edad = parseInt(document.getElementById("edad").value);

    // Verificar la edad y mostrar la respuesta correspondiente
    var mensaje = "";
    if (edad > 18) {
        mensaje = "Puedes entrar a la discoteca.";
    } else if (edad < 18) {
        mensaje = "Lo siento, no puedes entrar. Debes ser mayor de 18 años.";
    } else {
        mensaje = "Tienes justo 18 años, ¡bienvenido!";
    }

    // Mostrar el mensaje en el elemento con id "respuesta"
    document.getElementById("respuesta").innerText = mensaje;
}

//COLOR

function responderColor() {
    // Obtener el valor del color escrito en el campo de texto
    var color = document.getElementById("color").value.trim().toLowerCase(); // .trim() elimina espacios y .toLowerCase() asegura que sea en minúsculas

    // Declarar el mensaje que se mostrará
    var mensaje = "";

    // Verificar el color escrito y asignar el mensaje correspondiente
    switch (color) {
        case "azul":
            mensaje = "El azul es como el mar, siempre que el cielo sea azul (y sea de día).";
            break;
        case "verde":
            mensaje = "El verde es como la naturaleza, lleno de vida y frescura.";
            break;
        case "rojo":
            mensaje = "El rojo es como el fuego, apasionado y lleno de energía.";
            break;
        case "amarillo":
            mensaje = "El amarillo es como el sol, brillante y alegre.";
            break;
        case "violeta":
            mensaje = "El violeta es como un atardecer en el campo, tranquilo y profundo.";
            break;
        default:
            mensaje = "No has elegido un color válido. Por favor escribe uno de los siguientes colores: azul, verde, rojo, amarillo o violeta.";
            break;
    }

    // Mostrar el mensaje en el elemento con id "respuesta2"
    document.getElementById("respuesta2").innerText = mensaje;
}

//LAMPARA

// var enunciado = "¿Está enchufada la lámpara? (S/N)";
// document.getElementById("enunciado").innerText = enunciado;
// function diagnosticolampara(){

// var respuesta1 = document.getElementById("lampara")



// if (respuesta1 == "S" || respuesta1 == "s") {
//     document.getElementById("enunciado").innerHTML = "¿Está la bombilla fundida? (S/N)";

//     if (respuesta1 == "S" || respuesta1 == "s") {
//         document.getElementById("diagnostico").innerHTML = "cambia la bombilla";
//     } else if (pregunta2 == "N" || pregunta2 == "n") {
//         document.getElementById("diagnostico").innerHTML = "tira la lámpara";
//     } else {
//         document.getElementById("diagnostico").innerHTML = "Respuesta incorrecta";
//     }
// } else if (pregunta == "N" || pregunta == "n") {
//     document.getElementById("diagnostico").innerHTML = "Enchufa la lámpara";
// } 
// else {
//     document.getElementById("diagnostico").innerHTML = "Respuesta incorrecta";
// }
// }

let preguntaEstado = 1;  // Para llevar el control de las preguntas

        function diagnosticolampara() {
            let respuesta1 = document.getElementById("lampara").value.trim();  // Obtener la respuesta
            let enunciadoElement = document.getElementById("enunciado");
            let diagnosticoElement = document.getElementById("diagnostico");


            if (preguntaEstado === 1) {
                if (respuesta1 === "S" || respuesta1 === "s") {
                    enunciadoElement.innerHTML = "¿Está la bombilla fundida? (S/N)";
                    preguntaEstado = 2;  // Cambia al estado de la segunda pregunta
                } else if (respuesta1 === "N" || respuesta1 === "n") {
                    diagnosticoElement.innerHTML = "Enchufa la lámpara";
                } else {
                    diagnosticoElement.innerHTML = "Respuesta incorrecta";
                }
            } else if (preguntaEstado === 2) {
                if (respuesta1 === "S" || respuesta1 === "s") {
                    diagnosticoElement.innerHTML = "Cambia la bombilla";
                    preguntaEstado = 3;  // Cambio a estado final después de la respuesta correcta
                } else if (respuesta1 === "N" || respuesta1 === "n") {
                    diagnosticoElement.innerHTML = "Compra una nueva lámpara";
                    preguntaEstado = 3;  // Cambio a estado final después de la respuesta correcta
                } else {
                    diagnosticoElement.innerHTML = "Respuesta incorrecta";
                }
            }
        }