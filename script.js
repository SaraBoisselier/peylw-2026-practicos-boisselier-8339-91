console.log("Script cargado exitosamente");

const formulario = document.querySelector("form");

if (formulario != null) {
    function actualizarCampo(idCampo, idCelda) {
        const campo = document.getElementById(idCampo);
        const celda = document.getElementById(idCelda);
        
        campo.addEventListener("input", function() {
            celda.innerText = campo.value;
        });
    }

    actualizarCampo("nombre", "resumen-nombre");
    actualizarCampo("apellido", "resumen-apellido");
    actualizarCampo("email", "resumen-email");
    actualizarCampo("telefono", "resumen-telefono");
    actualizarCampo("direccion", "resumen-direccion");
    actualizarCampo("cp", "resumen-cp");

    const provincia = document.getElementById("provincia");
    const resumenProvincia = document.getElementById("resumen-provincia");

    function actualizarProvincia() {
        resumenProvincia.innerText = provincia.value;
    }

    provincia.addEventListener("input", actualizarProvincia);
    provincia.addEventListener("change", actualizarProvincia);

    const edad = document.getElementById("edad");
    const resumenEdad = document.getElementById("resumen-edad");

    edad.addEventListener("input", function() {
       
        if (edad.value != "" && Number(edad.value) < 18) {   
            resumenEdad.innerText = edad.value + " (Menor de edad)";
            resumenEdad.style.backgroundColor = "#ffcccc";
        } else {
            resumenEdad.innerText = edad.value;
            resumenEdad.style.backgroundColor = "";     
        }

    });

    const metodos = document.querySelectorAll('input[name="metodo-contacto"]');
    const resumenMetodo = document.getElementById("resumen-metodo-contacto");

    function actualizarMetodo() {
        for (let i = 0; i < metodos.length; i++) {
            if (metodos[i].checked) {
                resumenMetodo.innerText = metodos[i].value;
            }
        }
    }
    
    for (let i = 0; i < metodos.length; i++) {
        metodos[i].addEventListener("change", actualizarMetodo);
    }

    const suscripciones = document.querySelectorAll('input[name="suscripciones"]');
    const resumenSuscripciones = document.getElementById("resumen-suscripciones");

    function actualizarSuscripciones() {
        let texto = "";

        for (let i = 0; i < suscripciones.length; i++) {
            if (suscripciones[i].checked) {
                if (texto !== "") {
                    texto = texto + ", ";
                }

                texto = texto + suscripciones[i].value;
            
            }
        }

        resumenSuscripciones.innerText = texto;
    }

    for (let i = 0; i < suscripciones.length; i++) {
        suscripciones[i].addEventListener("change", actualizarSuscripciones);
    }

    actualizarMetodo();
    actualizarSuscripciones();
}

const botonLeerMas = document.getElementById("btn-leer-mas-boisselier-8339-91");
const biografia = document.querySelector(".biografia");

if (botonLeerMas != null && biografia != null) {
    botonLeerMas.addEventListener("click", function() {
        if(biografia.style.display == "block") {
            biografia.style.display = "none";
            botonLeerMas.innerText = "Leer más";
        } else {
            biografia.style.display = "block";
            botonLeerMas.innerText = "Leer menos";
        }
    });
}