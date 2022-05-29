const paisesLatam = [
    'Argentina', 'Brasil', 'Bolivia', 'Chile', 'Uruguay'
]
for (let i=0; i < paisesLatam.length ; i++){
    const paisActual = paisesLatam[i];
    console.log(`El pais actual ${i+1} es ${paisActual}`);
}

const paisesConMundial = [
        'Francia',
        'Alemania',
        'España',
        'Italia',
        'Brasil',
        'Francia',
        'Brasil',
        'Alemania',
        'Argentina',
        'Italia',
        'Argentina',
        'Alemania',
        'Brasil',
        'Inglaterra',
        'Brasil',
        'Brasil',
        'Alemania',
        'Uruguay',
        'Italia',
        'Italia',
        'Uruguay',
];


let franciaCampeon = 0;
let brasilCampeon = 0;
let italiaCampeon = 0;

for(let i=0; i < paisesConMundial.length; i++ ){
    const pais = paisesConMundial[i];
    if(pais == 'Francia'){
        franciaCampeon++;
    } else if (pais == 'Brasil'){
        brasilCampeon++;
    } else if (pais == 'Italia'){
        italiaCampeon++;
    }
}
console.log(`Francia salio ${franciaCampeon} veces campeon
Brasil salio ${brasilCampeon} veces campeon
Italia salio ${italiaCampeon} veces campeon`);



const paisesMundialObject = [
    {
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
]