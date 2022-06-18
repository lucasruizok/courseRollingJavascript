const boton1 = document.querySelector('#boton1');
const pBoton1 = document.getElementById('habilitadoBoton1');
const forma = document.getElementById('forma');
const btnCirculo = document.getElementById('btnCirculo');
const btnCuadrado = document.getElementById('btnCuadrado');
const resForma = document.getElementById('resultadoForma');

function desabilitarBoton(){
    boton1.setAttribute('disable', true);
    boton1.textContent = 'Soy un boton desabilitado';
}
function habilitarBoton(){
    boton1.removeAttribute('disable');
    boton1.textContent = 'Soy un boton habilitado';
}

boton1.addEventListener('mouseover', () =>{
    desabilitarBoton();
    boton1.classList.add('btn-warning');
    boton1.classList.remove('btn-danger');
});
boton1.addEventListener('mouseout', () => {
    habilitarBoton();
    boton1.classList.add('btn-danger');
    boton1.classList.remove('btn-warning');
})

function cuadrado(){
    forma.classList.add('rounded');
    forma.classList.remove('rounded-circle');
    resForma.textContent = 'Es un cuadrado'
}
function circulo(){
    forma.classList.add('rounded-circle');
    forma.classList.remove('rounded');
    resForma.textContent = 'Es un circulo'
}
btnCirculo.addEventListener('click', () => {
    circulo();
    console.log('circulo');
});
btnCuadrado.addEventListener('click', () => {
    cuadrado();
    console.log('cuadrado');
});