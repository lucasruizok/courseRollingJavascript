const valorEntradaCine = 1000;
let edad = prompt("Ingrese la edad de la persona que entra al cine");
const valorEntradaAdolecente = valorEntradaCine*0.8;
const valorEntradaDescuento = valorEntradaCine*0.5;
const valorEntradaNiño = 250;
let costoTotalEntradas = 0;

if(edad > 55){
    console.log(`El valor de la entrada es ${valorEntradaDescuento}`);
    costoTotalEntradas = valorEntradaDescuento;
} else if (edad >= 18) {
    console.log(`El valor de la entrada es ${valorEntradaCine}`);
    costoTotalEntradas = valorEntradaCine;
} else if (edad >= 10) {
    console.log(`El valor de la entrada es ${valorEntradaAdolecente}`);
    costoTotalEntradas = valorEntradaAdolecente;
} else {
    console.log(`El valor de la entrada es ${valorEntradaNiño}`);
    costoTotalEntradas = valorEntradaNiño;
}

console.log(``)