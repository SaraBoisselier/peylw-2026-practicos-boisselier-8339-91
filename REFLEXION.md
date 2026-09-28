1| <label for="cp">Código Postal:</label>
<input type="text" id="cp" name="cp"
       pattern="^[A-Z]\d{4}[A-Z]{3}$"
       title="Ingresá un código postal con el formato R8500AAF">
    
2| <label> sirve para identificar qué dato hay que ingresar en un campo del formulario. Se relaciona mediante el atributo "for", que debe tener el mismo valor que el id del <input>.

3| Cuando los botones radio comparten el mismo atributo "name", pertenecen al mismo grupo, por lo tanto, al seleccionar una opción, otra permanece desmarcada. En cambio, si tienen diferentes atributos, se consideran grupos distintos y pueden quedar ambos seleccionados.