function mostrarPrediccion() {

    let signo = document.getElementById("signo").value.trim().toLowerCase();
    let prediccion = document.getElementById("prediccion");
    let imagen = document.getElementById("imagenPrediccion");

    // Limpiar el área de predicción e imagen antes de mostrar un nuevo resultado
    prediccion.innerHTML = "";
    imagen.src = "";
    prediccion.classList.remove("error");
    
    // Ruta a las imágenes locales
    let imagenBasePath = "../img/"; // Carpeta donde guardaste las imágenes

    // Switch para determinar la predicción y la imagen según el signo
    switch (signo) {
        case "aries":
            prediccion.innerHTML = "¡Esta semana es todo energía! Aprovéchala, Aries.";
            imagen.src = imagenBasePath + "aries.png";
            imagen.style.display = "block";
            break;
        case "tauro":
            prediccion.innerHTML = "Tauro, es el momento de relajarte y disfrutar de lo que has trabajado.";
            imagen.src = imagenBasePath + "tauro.png";
            imagen.style.display = "block";
            break;
        case "geminis":
            prediccion.innerHTML = "Géminis, esta semana tu creatividad brillará. ¡Déjala fluir!";
            imagen.src = imagenBasePath + "geminis.png";
            imagen.style.display = "block";
            break;
        case "cancer":
            prediccion.innerHTML = "Cáncer, la familia será tu refugio esta semana. Aprovecha esos momentos.";
            imagen.src = imagenBasePath + "cancer.png";
            imagen.style.display = "block";
            break;
        case "leo":
            prediccion.innerHTML = "¡Todo el mundo te prestará atención, Leo! Esta semana, te toca brillar.";
            imagen.src = imagenBasePath + "leo.png";
            imagen.style.display = "block";
            break;
        case "virgo":
            prediccion.innerHTML = "Virgo, tu mente lógica te ayudará a resolver problemas importantes.";
            imagen.src = imagenBasePath + "virgo.png";
            imagen.style.display = "block";
            break;
        case "libra":
            prediccion.innerHTML = "Libra, busca el equilibrio en tus relaciones. Esta semana es para la armonía.";
            imagen.src = imagenBasePath + "libra.png"; 
            imagen.style.display = "block";
            break;
        case "escorpio":
            prediccion.innerHTML = "Escorpio, la pasión será tu motor. Usa tu energía sabiamente.";
            imagen.src = imagenBasePath + "escorpio.png";
            imagen.style.display = "block";
            break;
        case "sagitario":
            prediccion.innerHTML = "Sagitario, los viajes y nuevas experiencias están a la vuelta de la esquina.";
            imagen.src = imagenBasePath + "sagitario.png";
            imagen.style.display = "block";
            break;
        case "capricornio":
            prediccion.innerHTML = "Capricornio, el trabajo duro te traerá recompensas. ¡Sigue adelante!";
            imagen.src = imagenBasePath + "capricornio.png";
            imagen.style.display = "block";
            break;
        case "acuario":
            prediccion.innerHTML = "Acuario, la innovación será tu aliado esta semana. No temas probar cosas nuevas.";
            imagen.src = imagenBasePath + "acuario.png";
            imagen.style.display = "block";
            break;
        case "piscis":
            prediccion.innerHTML = "Piscis, tus intuiciones estarán muy fuertes. Confía en ellas.";
            imagen.src = imagenBasePath + "piscis.png";
            imagen.style.display = "block";
            break;
        default:
            prediccion.innerHTML = "¡Oh no! No reconozco ese signo del zodiaco. Por favor, verifica que hayas escrito bien.";
            imagen.src = imagenBasePath + "error.png";
            imagen.style.display = "block";
            prediccion.classList.add("error");
            break;
    }
}

