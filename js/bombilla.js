let pregunta = window.prompt("¿Está enchufada la lámpara? (S/N)");

if (pregunta == "S" || pregunta == "s") {
    let pregunta2 = window.prompt("¿Está la bombilla fundida? (S/N)");
    if (pregunta2 == "S" || pregunta2 == "s") {
        document.getElementById("diagnostico").innerHTML = "cambia la bombilla";
    } else if (pregunta2 == "N" || pregunta2 == "n") {
        document.getElementById("diagnostico").innerHTML = "tira la lámpara";
    } else {
        document.getElementById("diagnostico").innerHTML = "Respuesta incorrecta";
    }
} else if (pregunta == "N" || pregunta == "n") {
    document.getElementById("diagnostico").innerHTML = "Enchufa la lámpara";
} 
else {
    document.getElementById("diagnostico").innerHTML = "Respuesta incorrecta";
}