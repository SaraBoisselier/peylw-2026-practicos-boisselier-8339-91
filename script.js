console.log("Script cargado exitosamente");

const formulario = document.querySelector("form:has(#nombre)");

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

const formularioJuego = document.getElementById("form-juego");

if (formularioJuego != null) {

    const numeroJuego = document.getElementById("numero-juego");
    const intentosJuego = document.getElementById("intentos-juego");
    const puntosJuego = document.getElementById("puntos-juego");
    const recordJuego = document.getElementById("record-juego");
    const mensajeJuego = document.getElementById("mensaje-juego");

    const botonAdivinar = document.getElementById("btn-adivinar-boisselier-8339-91");
    const botonReiniciar = document.getElementById("btn-reiniciar-boisselier-8339-91");

    const claveRecord = "record-boisselier-8339-91";

    let intentos = 0;
    let puntos = 0;
    let record = localStorage.getItem(claveRecord);

    function mostrarRecord() {
        if (record == null || Number(record) < 1) {
            recordJuego.innerText = "Sin récord todavía";
        } else {
            recordJuego.innerText = record + " intentos";
        }
    }

    function iniciarJuego() {
        let numeroSecreto = Math.floor(Math.random() * 100) + 1;

        intentos = 0;
        puntos = 0;

        intentosJuego.innerText = intentos;
        puntosJuego.innerText = puntos;
        mensajeJuego.innerText = "¡Adiviná el número entre 1 y 100!";

        numeroJuego.value = "";
        numeroJuego.disabled = false;
        botonAdivinar.disabled = false;

        formularioJuego.onsubmit = function(evento) {
            evento.preventDefault();

            const numero = Number(numeroJuego.value);

            if (numeroJuego.value == "" ||
                !Number.isInteger(numero) ||
                numero < 1 || numero > 100) {
                
                mensajeJuego.innerText = "Ingresá un número entre 1 y 100.";
                return;
            }
            
            intentos++;
            intentosJuego.innerText = intentos;

            if (numero != numeroSecreto) {

                const diferencia = Math.abs(numero - numeroSecreto);
                let pista = "";

                if (diferencia <= 5) {
                    pista = "¡Estás muy cerca!";
                } else if (diferencia <= 15) {
                    pista = "¡Estás cerca!";
                } else if ( diferencia <= 30) {
                    pista = "Estás un poquito lejos.";
                } else {
                    pista = "Estás muy lejos.";
                }

                if (numero > numeroSecreto) {
                    mensajeJuego.innerText = pista + " Probá un número menor.";
                } else {
                    mensajeJuego.innerText = pista + " Probá un número mayor.";
                }

            } else {
                puntos = Math.max(10, 110 - intentos * 10);
                puntosJuego.innerText = puntos;

                mensajeJuego.innerText = "¡Ganaste! Adivinaste en " + intentos + " intentos.";

                numeroJuego.disabled = true;
                botonAdivinar.disabled = true;

                if (record == null || Number(record) < 1 || intentos < Number(record)) {
                    record = intentos;
                    localStorage.setItem(claveRecord, record);
                    mostrarRecord();
                }
            }

            numeroJuego.value = "";
        };
    }

    botonReiniciar.addEventListener("click", iniciarJuego);

    mostrarRecord();
    iniciarJuego();
}