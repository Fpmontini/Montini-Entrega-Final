

                                        // CALCULADORA de CONSUMOS DE CALORIAS SEGUN OBJETIVOS



//variables 

let nombre = prompt ('Cual es tu nombre?')
let edad = parseInt(prompt ('Cual es tu edad?'))
let altura = parseInt(prompt ('Cual es tu altura (en cm)?'))
let peso = parseInt(prompt ('Cual es tu peso (en Kg)?'))
let genero = prompt ('Eres hombre o mujer')
let continuar = true

// ARRAYS

const factorActividad = [sedentario = 1.2, libero = 1.375, moderado = 1.55, activo = 1.725, muyActivo = 1.9]
console.log(factorActividad)

const factorObjetivo = [mantenerPeso = 1, disminuirPeso = 0.8, aumentarPeso = 1.2 ]
console.log(factorObjetivo)

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

console.log('La Tasa Metabolica de ' + nombre + ' es de ' + tmb )

// switch

function obtenerNivelActividad() {
    let nivelActividad;
    while(continuar){
        nivelActividad = parseInt(prompt ('Cual es tu nivel de actividad ( ingrese 1: si es sedentario, 2: si es ligero, 3: si es moderado, 4: si es activo o 5: si es muy activo?'))
    if (nivelActividad >= 1 && nivelActividad <= 5){
        return nivelActividad;
    } else {
        alert(' El parámetro ingresado es inválido, por favor ingresa un número del 1 al 5')
        }
    }
}

let nivelActividad = obtenerNivelActividad();
    switch (nivelActividad) {
            case 1:
                tdee = tmb * factorActividad[0]
                break;
            case 2:
                tdee = tmb * factorActividad[1] 
                break;
            case 3: 
                tdee = tmb * factorActividad[2] 
                break;
            case 4:
                tdee = tmb * factorActividad[3]
                break
            case 5:
                tdee = tmb * factorActividad[4]
                break
}
console.log('El gasto calórico de ' + nombre + ' es de ' + tdee + ' calorías diarias');

function obtenerObjetivoBuscado() {
    let objetivoBuscado;
    while(continuar){
        objetivoBuscado = parseInt(prompt ('Cual es tu objetivo? ( ingresa 1: si es mentener, 2: si es disminuir o 3: si es aumentar?'))
        if(objetivoBuscado >= 1 && objetivoBuscado <=3){
            return objetivoBuscado
        } else {
            alert('El parámetro ingresado es inválido, por favor ingresa un número del 1 al 3')
        }
    }
}
    let objetivoBuscado=obtenerObjetivoBuscado()
    switch (objetivoBuscado) {
        case 1:
            ajusteObjetivo = tdee * factorObjetivo[0] 
            break
        case 2:
            ajusteObjetivo = tdee * factorObjetivo[1]
            break
        case 3: 
            ajusteObjetivo = tdee * factorObjetivo[2]
            break
    }
console.log( nombre + ' necesita consumir ' + ajusteObjetivo + ' calorias diarias para conseguir el objetivo seleccionado')


// Swhich-while - menu 

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
           alert('Ha decidido cerrar la aplicación')
           break
    }
    let confirmacion = prompt("Desea realizar otra operación? (si/no)")
    if(confirmacion == 'no') {
        continuar = false
        alert('Gracias por usar nuestra calculadora')
    }
}     

 //OBJETO literal

 const datosUsuario = {
    nombre,
    edad,
    altura,
    peso,
    genero,
 }
 console.log(datosUsuario)