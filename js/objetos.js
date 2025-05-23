// Ejercicio 1
const ordenador1 = {
    marca: "HP",
    procesador: "i7",
    ram: "16Gb",
    hd: "1Tb",
    precio: 1500,
    extras: ["cámara HD", "microfono stereo", "disco de acceso rápido"],
    maletin: true
};

function mostrarOrdenador() {
    const div = document.getElementById("infoOrdenador");
    let html = `<p>Mi ordenador es un ${ordenador1.marca}, con procesador ${ordenador1.procesador} y ${ordenador1.ram} de RAM.</p>`;
    html += "<ul>";
    for (let prop in ordenador1) {
        html += `<li>${prop}: ${Array.isArray(ordenador1[prop]) ? ordenador1[prop].join(", ") : ordenador1[prop]}</li>`;
    }
    html += "</ul>";
    html += `<p>Tercer extra: ${ordenador1.extras[2]}</p>`;
    div.innerHTML = html;
}

  // Ejercicio 2
function crudGalletas() {
    const galletas = {
        marca: "Artiach",
        nombre: "Chiquilín",
        descripción: "galletas de mantequilla",
        precio: 2.75,
        hayExistencias: true
    };

    let antes = JSON.stringify(galletas, null, 2);

    galletas.oferta = false;
    galletas.descripción = "galletas de mantequilla clásicas";
    delete galletas.precio;

    let después = JSON.stringify(galletas, null, 2);

    const div = document.getElementById("infoGalletas");
    div.innerHTML = `
        <h4>Antes:</h4>
        <pre>${antes}</pre>
        <h4>Después:</h4>
        <pre>${después}</pre>
        <p><strong>Valores:</strong> ${Object.values(galletas).join(" | ")}</p>
        <p><strong>Propiedades:</strong> ${Object.keys(galletas).join(" | ")}</p>
    `;
}

  // Ejercicio 3
const concesionario = [
    { marca: "Toyota", modelo: "Corolla", potencia: "140 CV", precio: 20000 },
    { marca: "Ford", modelo: "Focus", potencia: "130 CV", precio: 18500 },
    { marca: "BMW", modelo: "Serie 3", potencia: "190 CV", precio: 35000 }
];

function mostrarCoches() {
    const propiedad = document.getElementById("propiedad").value;
    const div = document.getElementById("infoCoches");
    let html = `<ul>`;
    concesionario.forEach(coche => {
        html += `<li>${propiedad}: ${coche[propiedad]}</li>`;
    });
    html += `</ul>`;
    div.innerHTML = html;
}
