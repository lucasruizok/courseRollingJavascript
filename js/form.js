const usuario = {
    nombre:'',
    apellido: '',
    dni:'',
}
const vistaUsuario = document.getElementById('vistaUsuarioHTML');

function cargarFormulario(e){
    e.preventDefault();
    console.log(e);
    usuario.nombre = e.target.elements.nombre.value;
    usuario.apellido = e.target.elements.apellido.value;
    usuario.dni = e.target.elements.dni.valueAsNumber;
    console.log(usuario.nombre);
    console.log(usuario.apellido);
    console.log(usuario.dni);
    mostrarResFormulario(usuario);
}

function mostrarResFormulario(usuario){
    vistaUsuario.innerHTML = `  <h2>Su registro se realizo con exito</h2>
                                <p>Nombre:  ${usuario.nombre}</p>
                                <p> Apellido:  ${usuario.apellido}</p>
                                <p>DNI:  ${usuario.dni}</p>`
}
