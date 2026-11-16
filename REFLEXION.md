1|  La opción seleccionada fue la adivinanza de un número.

2| Lectura del récord:
const claveRecord = "record-boisselier-8339-91";
let record = localStorage.getItem(claveRecord);

Escritura:
if (record == null || Number(record) < 1 || intentos < Number(record)) {
                    record = intentos;
                    localStorage.setItem(claveRecord, record);
                    mostrarRecord();
                }

3| Declaré numeroSecreto dentro de la función iniciarJuego() para que sea una variable local y no pueda consultarse directamente desde la consola como una global. Es para dificultar que el user descubra la respuesta y haga trampa.