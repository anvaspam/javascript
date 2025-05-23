function sumadelosnumeros(){
    let input = document.getElementById("number1").value;
    let input2 = document.getElementById("number2").value;
    
    let suma = parseInt(input) + parseInt(input2);
    
    document.getElementById("resultadosuma").innerText = suma;

}

function adivinarNumero(){
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;  // Cambiar 10 por 20 para rango 1-20
        let numeroUsuario;
        
        // Bucle do...while para adivinar el número
        do {
            // Preguntamos al usuario qué número cree que es
            numeroUsuario = parseInt(prompt("¿Qué número es? (del 1 al 10)"));

            // Comprobamos si la respuesta es correcta
            if (numeroUsuario !== numeroAleatorio) {
                alert("¡Intenta de nuevo!");
            }
        } while (numeroUsuario !== numeroAleatorio);  // Continuamos hasta que el número sea correcto

        // Cuando acierta, mostramos el mensaje
        alert("¡Felicidades, has acertado!");

    }




    function lanzarDado() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Función para lanzar los dados de los dos jugadores
    function jugar() {
        // Lanzamiento del dado para PLAYER1
        const dadoPlayer1 = lanzarDado();
        document.getElementById("resultadoPlayer1").innerHTML ="Jugador 1: " + dadoPlayer1;

        // Lanzamiento del dado para PLAYER2
        const dadoPlayer2 = lanzarDado();
        document.getElementById("resultadoPlayer2").innerHTML = "Jugador 2: " + dadoPlayer2;

        // Determinar el ganador
        let mensajeResultado;
        if (dadoPlayer1 > dadoPlayer2) {
            mensajeResultado = "¡Jugador 1 gana!";
        } else if (dadoPlayer1 < dadoPlayer2) {
            mensajeResultado = "¡Jugador 2 gana!";
        } else {
            mensajeResultado = "¡Empate!";
        }

        // Mostrar el resultado
        document.getElementById("resultadoFinal").innerHTML = mensajeResultado;
    }