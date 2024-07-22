

                                        // CALCULADORA de CONSUMOS DE CALORIAS SEGUN OBJETIVOS



//variables 

let nombre = prompt ('cual es tu nombre?')
let edad = parseInt(prompt ('cual es tu edad?'))
let altura = parseInt(prompt ('cual es tu altura (en cm)?'))
let peso = parseInt(prompt ('cual es tu peso (en Kg)?'))
let genero = prompt ('sos hombre o mujer')

//CONSTANTES

const TDEEsedentario = 1.2
const TDEEligero = 1.375
const TDEEmoderado = 1.55
const TDEEactivo = 1.725
const TDEEmuyActivo = 1.9

const mantenerPeso = 1
const disminuirPeso = 0.8
const aumentarPeso = 1.2

// CONDICIONALES
// calcular TMB (Tasa Metabólica Basal) Dependiendo del género

let tmb;
if (genero === 'hombre') {
    tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
} else if (genero === 'mujer') {
    tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
} else {
alert('El género ingresado no es válido.');
}

console.log('Tu Tasa Metabolica es de ' + tmb )

// switch
let nivelActividad = parseInt(prompt ('cual es tu nivel de actividad ( ingrese 1 si es sedentario, 2 si es ligero, 3 si es moderado, 4 si es activo o 5 si es muy activo?'))

switch (nivelActividad) {
    case 1:
        tdee = tmb * TDEEsedentario; 
        break;
    case 2:
        tdee = tmb * TDEEligero;
        break;
    case 3: 
        tdee = tmb * TDEEmoderado; 
        break;
    case 4:
        tdee = tmb * TDEEactivo;
        break;
    case 5:
        tdee = tmb * TDEEmuyActivo;
        break;
    default:
        alert( ' el parámetro ingresado es inválido')
        break
}

let objetivoBuscado = parseInt(prompt ('cual es tu objetivo? ( ingresa 1 si es mentener, 2 si es disminuir o 3 si es aumentar?'))

switch (objetivoBuscado) {
    case 1:
        ajusteObjetivo = tdee * mantenerPeso 
        break
    case 2:
        ajusteObjetivo = tdee * disminuirPeso
        break
    case 3: 
        ajusteObjetivo = tdee * aumentarPeso 
        break
    default:
        alert(' el parámetro ingresado es inválido')
        break
}



// ARRAYS

const factorActividad = [TDEEsedentario, TDEEligero, TDEEmoderado, TDEEactivo,TDEEmuyActivo ]
console.log(factorActividad)

const objetivo = [mantenerPeso, disminuirPeso, aumentarPeso]

console.log(objetivo)


// Swhich-while - menu 

let continuar = true

while(continuar){
    let menu = parseInt(prompt('Que operación deseas realizar?: Ingresa 1 si queres conocer tu Tasa Metabolica Basal (TMB); Ingresa 2 si quiere conocer su Gasto Calorico (TDEE); Ingresa 3 si queres sabes cuantas calorias debes consumir si quieres mantener, disminuir o aumentar peso, Ingresa otro número para salir'))

    switch (menu) {
        case 1: 
            alert('Tu Tasa Metabolica es de ' + tmb)
            break
        case 2: 
            alert( 'Tu Gasto Calórico es de ' + tdee + ' calorias diarias')
            break
        case 3: 
            alert(nombre+ ', conforme al objetivo señalado es necesario que consumas la cantidad de ' + ajusteObjetivo + ' calorias diarias')
            break
        default:
           alert('Gracias por usar nuestra calculadora')
            break
    }
    let confirmacion = prompt("Desea realizar otra operación? (si/no)")
    if(confirmacion == 'no') {
        continuar = false
        alert('Gracias por usar nuestra calculadora')
    }
}     

 //OBJETO literal

 const usuario = {
    nombre,
    edad,
    altura,
    peso,
    genero,
 }
 console.log(usuario)