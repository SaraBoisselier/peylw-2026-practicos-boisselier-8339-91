1|  if (edad.value != "" && Number(edad.value) < 18) {   
            resumenEdad.innerText = edad.value + " (Menor de edad)";
            resumenEdad.style.backgroundColor = "#ffcccc";
        } else {
            resumenEdad.innerText = edad.value;
            resumenEdad.style.backgroundColor = "";     
        }

La condición if convierte el valor ingresado a número y lo compara con 18, si es menor, se muestra una advertencia con fondo rojo. Si es igual o mayor a 18, muestra solamente la edad.

2| Input permite actualizar la información mientras el usuario escribe, sin necesidad de salir del campo. 
Change se ejecuta cuando se confirma un cambio de valor, por lo general pasa cuando el usuario termina de editar y sale del campo. 
Input -> lo usé para los datos escritos en tiempo real.
Change -> Para detectar cambios en las opciones seleccionadas.

3| Con condiciones if, que comprueban si los elementos existen antes de trabajar con ellos.