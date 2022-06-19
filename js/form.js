const formUsuario = document.getElementById('formularioRegistro');
const formU = formUsuario.elements; //aqui nos dara lugar a usar por los names de los inputs.
const vistaUsuario = document.getElementById('vistaUsuarioHTML');

function registrarUsuario(e){
    e.preventDefault();
    let regUsuario = {
        nombre: formU.nombre.value,
        apellido: formU.apellido.value,
        usuario: formU.usuario.value,
        email: formU.email.value,
        contraseña: formU.contraseña.value,
        confContra: formU.contraseña2.value,
        edad: formU.edad.value,
        genero: formU.genero.value
    }
    if(regUsuario.contraseña == regUsuario.confContra){
        console.log('registro correcto');
        mostrarRegistro(regUsuario);
    } else{
        console.log('No se pudo registrar');
    }
}

function mostrarRegistro(usuario){
    vistaUsuario.innerHTML = `  <h2>Su registro se realizo con exito</h2>
                                <p>Nombre:  ${usuario.nombre}</p>
                                <p> Apellido:  ${usuario.apellido}</p>
                                <p> Usuario:  ${usuario.usuario}</p>
                                <p> Email:  ${usuario.email}</p>
                                <p> Contraseña:  ${usuario.contraseña}</p>
                                <p> Genero:  ${usuario.genero}</p>
                                <p>Edad:  ${usuario.edad}</p>`
}
