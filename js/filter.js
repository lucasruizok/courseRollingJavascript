const paisesGanadoresDeMundiales = [{
    name: 'Francia',
    year: 2018
},
{
    name: 'Alemania',
    year: 2014
},
{
    name: 'España',
    year: 2010
},
{
    name: 'Italia',
    year: 2006
},
{
    name: 'Brasil',
    year: 2002
},
{
    name: 'Francia',
    year: 1998
},
{
    name: 'Brasil',
    year: 1994
},
{
    name: 'Alemania',
    year: 1990
},
{
    name: 'Argentina',
    year: 1986
},
{
    name: 'Italia',
    year: 1982
},
{
    name: 'Argentina',
    year: 1978
},
{
    name: 'Alemania',
    year: 1974
},
{
    name: 'Brasil',
    year: 1970
},
{
    name: 'Inglaterra',
    year: 1966
},
{
    name: 'Brasil',
    year: 1962
},
{
    name: 'Brasil',
    year: 1958
},
{
    name: 'Alemania',
    year: 1954
},
{
    name: 'Uruguay',
    year: 1950
},
{
    name: 'Italia',
    year: 1938
},
{
    name: 'Italia',
    year: 1934
},
{
    name: 'Uruguay',
    year: 1930
},
{
    name: 'Inglaterra',
    year: 1966
},
{
    name: 'Guatemala',
    year: 1962
},
{
    name: 'Brasil',
    year: 1958
},
{
    name: 'Alemania',
    year: 1954
},
{
    name: 'Uruguay',
    year: 1950
},
{
    name: 'Italia',
    year: 1938
},
{
    name: 'Italia',
    year: 1934
},
{
    name: 'Uruguay',
    year: 1930
},
];

const listadoPaisesHTML = document.getElementById('listado');

function buscarPais(eventoDeJs){
    const criterioDeBusqueda = eventoDeJs.target.value.toLocaleLowerCase();
    if(criterioDeBusqueda.length > 2){
        const paisesFiltrados = paisesGanadoresDeMundiales.filter(pais => {
            const nombrePais = pais.name.toLocaleLowerCase();
            return nombrePais.includes(criterioDeBusqueda);
            })
        listarPaises(paisesFiltrados);
    }
    else{
        listarPaises(paisesGanadoresDeMundiales);
    }
}
                // le pongo el array como parametro para que tome los valores en otra funcion
function listarPaises(arrayPintar){
                        // asigo vacio el array para que pinte lo nuevo filtrado o completo
    listadoPaisesHTML.innerHTML = ''; 
    arrayPintar.forEach(paisInicial =>{
        listadoPaisesHTML.innerHTML += `<li>
                                            <div class="row mt-2">
                                                <div class="col-2">
                                                    <span class="text-name">${paisInicial.name}</span>
                                                </div>
                                                <div class="col-6">
                                                    <span class="text-year">${paisInicial.year}</span>
                                                </div>
                                            </div>
                                        </li>` ;
    })
}
listarPaises(paisesGanadoresDeMundiales);