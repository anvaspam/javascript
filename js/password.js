        // Guardamos la contraseña correcta
        const passwordCorrecta = "1234";  // Cambia esto por la contraseña que desees
        let intentos = 0;
        const maxIntentos = 3;


        // Función que se ejecuta cuando el usuario intenta acceder
        function pedirContraseña() {
            let password = prompt("Introduce la contraseña:");

            if (password === passwordCorrecta) {
                // Si la contraseña es correcta, abre la página deseada
                window.open("ejercicios.html","_self"); //"_self" abrir en la misma pagina
            } else {
                // Si la contraseña es incorrecta, cuenta los intentos
                intentos++;
                if (intentos >= maxIntentos) {
                    alert("Has alcanzado el número máximo de intentos. El programa se cerrará.");
                    window.close();  // Cierra la ventana del navegador
                } else {
                    alert("Contraseña incorrecta. Te quedan " + (maxIntentos - intentos) + " intentos.");
                    pedirContraseña();  // Vuelve a pedir la contraseña
                }
            }
        }

        // Llamar a la función al cargar la página
        window.onload = pedirContraseña;