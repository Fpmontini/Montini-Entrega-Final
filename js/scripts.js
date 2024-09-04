

                                        // CALCULADORA de CONSUMOS DE CALORIAS SEGUN OBJETIVOS



//variables 
const usuarios = []
let factorActividad = {};
let factorObjetivo = {};

// acceder a data.json
fetch('./db/data.json')
    .then(response => response.json())
    .then(data => {
        factorActividad = data.factorActividad;
        factorObjetivo = data.factorObjetivo;
        console.log(factorActividad); // Verifica los valores
        console.log(factorObjetivo); // Verifica los valores
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

const calculadora = document.getElementById("calc")
const DatosRegistrados = document.getElementById("registro")



// evento

calculadora.addEventListener('submit', calcularCalorias)
    function calcularCalorias(e){
        e.preventDefault(); //evita el envio del formulario
        let nombre = document.getElementById("nombre").value
        let edad = parseFloat(document.getElementById("edad").value)
        let altura = parseFloat(document.getElementById("altura").value)
        let peso = parseFloat(document.getElementById("peso").value)
        let genero = document.getElementById("genero").value
        let actividad = document.getElementById("nivelactividad").value
        let objetivo = document.getElementById("objetivo").value

        let validar = true;

try {
    if (edad <= 0) {
        throw new Error('La edad debe ser mayor a 0.');
    }
    if (altura <= 0) {
        throw new Error('La altura debe ser mayor a 0.');
    }
    if (peso <= 0) {
        throw new Error('El peso debe ser mayor a 0.');
    }
} catch (error) {
    (Swal.fire({
        title: "ERROR",
        text: error.message,
        icon: "error"
      }));
    validar = false;
} finally {
    if (!validar) {
        return;
    }
}
    

        //enviar datos
        document.getElementById("dato-objetivo").innerText = ` ${objetivo}`;
        
       
        //calcular calorias

        // calcular TMB (Tasa Metabólica Basal) Dependiendo del género

        let tmb;

        switch (genero) {
        case 'hombre':
            tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
            break;
        case 'mujer':
                tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
                break;
        default:         
        } 
        tmb = Math.round(tmb);


        // Calcular TDEE (gasto energético diario)
let tdee;
switch (actividad) {
    case 'sedentario':
        tdee = tmb * (factorActividad["sedentario"]);
        break;
    case 'ligero':
        tdee = tmb * (factorActividad["ligero"]);
        break;
    case 'moderado':
        tdee = tmb * (factorActividad["moderado"]);
        break;
    case 'activo':
        tdee = tmb * (factorActividad["activo"]);
        break;
    case 'muyActivo':  
        tdee = tmb * (factorActividad["muyActivo"]);
        break;
    default:
        tdee = tmb;
}

let ajusteObjetivo;

switch (objetivo) {
    case 'mantener peso':
        ajusteObjetivo = tdee * (factorObjetivo["mantenerPeso"]);
        break;
    case 'disminuir peso':
        ajusteObjetivo = tdee * (factorObjetivo["disminuirPeso"]);
        break;
    case 'aumentar peso':
        ajusteObjetivo = tdee * (factorObjetivo["aumentarPeso"]);
        break;
    default:
        ajusteObjetivo = tdee;
}

        // resultado

        let resultado;
        switch (objetivo) {
            case "conocer tdee":
                resultado = tdee;
                break;
            case "conocer tmb":
                resultado = tmb;
                break;
            case "mantener peso":
                resultado = ajusteObjetivo;
                break;
            case "disminuir peso":
                resultado = ajusteObjetivo;
                break;
            case "aumentar peso":
                resultado = ajusteObjetivo;
                break;
            default:
                resultado = tmb; // Valor por defecto si no coincide ningún caso
        }
        console.log(resultado)
            resultado = Math.round(resultado) // redondeo
            document.getElementById("resultado").innerText = ` ${resultado}`+ ' calórias diarias'
            
            
            // Objeto usuario
            const usuario = {
                id: new Date().getTime(),
                nombre: nombre,
                edad: edad,
                altura: altura,
                peso: peso,
                genero: genero,
                actividad: actividad,
                objetivo: objetivo,
                resultado: resultado + ' calorías diarias',
                timestamp: new Date().toLocaleString()
            };
            usuarios.push(usuario);
            console.log(usuarios);

           // Deshabilitar formulario
            const inputs = calculadora.querySelectorAll('input, select');
            inputs.forEach(input => {
            input.disabled = true;
            });

            //funcion orden - calcular promedio edad usuarios
            function calcularPromedioEdad() { 
                // reduce para sumar todas las edades
                const sumaEdades = usuarios.reduce((suma, usuario) => suma + parseInt(usuario.edad), 0);
                // Calcula el promedio
                return sumaEdades / usuarios.length;
        }

             //funcion orden superior - calcular promedio de peso 
             function calcularPromedioPeso() { 
                // reduce para sumar todos los pesos
                const sumaPesos = usuarios.reduce((suma, usuario) => suma + parseInt(usuario.peso), 0);
                // Calcula el promedio
                return sumaPesos / usuarios.length;
        }
    


            //funcion orden superior - filter

            const filterBajarPeso = usuarios.filter(usuario => usuario.objetivo === "disminuir peso")
            console.log(filterBajarPeso)
            const promedioEdad = calcularPromedioEdad()
            console.log(' la edad promedio de los usuarios es de '+ promedioEdad + 'años')
            const promedioPeso = calcularPromedioPeso()
            console.log(' el peso promedio de los usuarios es de '+ promedioPeso + ' kilos') 
            
            // LOCAL STORAGE 

            const dataUsuarios = JSON.parse(localStorage.getItem("dataUsuarios")) || [];
            dataUsuarios.push(usuario);
            localStorage.setItem("dataUsuarios", JSON.stringify(dataUsuarios));
}      

// Habilitar el formulario "Volver a calcular"
document.getElementById('nuevocalculo').addEventListener('click', function() {
    // resetea formulario
    const form = document.getElementById('calc');
    form.reset();

    // borrar resultados
    document.getElementById('dato-objetivo').innerText = '';
    document.getElementById('resultado').innerText = '';
});
        