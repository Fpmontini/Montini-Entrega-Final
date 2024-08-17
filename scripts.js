

                                        // CALCULADORA de CONSUMOS DE CALORIAS SEGUN OBJETIVOS



//variables 
const usuarios = []
const factorActividad = [sedentario = 1.2, ligero = 1.375, moderado = 1.55, activo = 1.725, muyActivo = 1.9]
const factorObjetivo = [mantenerPeso = 1, disminuirPeso = 0.8, aumentarPeso = 1.2 ]

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

         // Validacion datos numericos
         let validar = true
         switch (true) {
            case (edad <= 0):
                alert('La edad debe ser mayor a 0.');
                validar = false; 
                break;
            case (altura <= 0):
                alert('La altura debe ser mayor a 0.');
                validar = false; 
                break;
            case (peso <= 0):
                alert('El peso debe ser mayor a 0.');
                validar = false; 
                break;
        }
        if (!validar) {
            return;
        }

        //enviar datos 
        document.getElementById("dato-nombre").innerText = ` ${nombre}`;
        document.getElementById("dato-edad").innerText = ` ${edad}`;
        document.getElementById("dato-altura").innerText = ` ${altura} cm`;
        document.getElementById("dato-peso").innerText = ` ${peso} kg`;
        document.getElementById("dato-genero").innerText = ` ${genero}`;
        document.getElementById("dato-actividad").innerText = ` ${actividad}`;
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


        // calcular tdee (gasto energetico diario)
        let tdee;
        switch (actividad) {
            case 'sedentario':
                tdee = tmb * factorActividad[0];
                break;
            case 'ligero':
                tdee = tmb * factorActividad[1];
                break;
            case 'moderado':
                tdee = tmb * factorActividad[2];
                break;
            case 'activo':
                tdee = tmb * factorActividad[3];
                break;
            case 'muy activo':
                tdee = tmb * factorActividad[4];
                break;
            default:
                tdee = tmb; 
        }
        
        let ajusteObjetivo;

        switch (objetivo) {
            case 'mantener peso':
                ajusteObjetivo = tdee * factorObjetivo[0];
                break;
            case 'disminuir peso':
                ajusteObjetivo = tdee * factorObjetivo[1];
                break;
            case 'aumentar peso':
                ajusteObjetivo = tdee * factorObjetivo[2];
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
                nombre: nombre,
                edad: edad,
                altura: altura,
                peso: peso,
                genero: genero,
                actividad: actividad,
                objetivo: objetivo,
                resultado: resultado + ' calorías diarias',
            };
            usuarios.push(usuario);
            console.log(usuarios);

            calculadora.reset() // reseteo para cargar nuevo usuario

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
    
            //funcion orden superior - forEach

            const dataUsuario = usuarios.forEach(usuario => {
                console.log(`El usuario ${usuario.nombre} tiene ${usuario.edad}  años y tiene como objetivo  ${usuario.objetivo}`)
                
            });

            //funcion orden superior - filter

            const filterBajarPeso = usuarios.filter(usuario => usuario.objetivo === "disminuir peso")
            console.log(filterBajarPeso)
            const promedioEdad = calcularPromedioEdad()
            console.log(' la edad promedio de los usuarios es de '+ promedioEdad + 'años')
            const promedioPeso = calcularPromedioPeso()
            console.log(' el peso promedio de los usuarios es de '+ promedioPeso + ' kilos') 
            
            // LOCAL STORAGE 

        localStorage.setItem("dataUsuarios", JSON.stringify(usuarios));

}      


        // Evento recuperar datos

const botonRecuperar = document.getElementById("recuperarDatos");
botonRecuperar.addEventListener("click", function() {
    const dataUsuarios = JSON.parse(localStorage.getItem("dataUsuarios"));

    switch (true) {
        case dataUsuarios && dataUsuarios.length > 0:
            const ultimoUsuario = dataUsuarios[dataUsuarios.length - 1]; // último usuario cargado

            document.getElementById("dato-nombre").innerText = ` ${ultimoUsuario.nombre}`;
            document.getElementById("dato-edad").innerText = ` ${ultimoUsuario.edad}`;
            document.getElementById("dato-altura").innerText = ` ${ultimoUsuario.altura} cm`;
            document.getElementById("dato-peso").innerText = ` ${ultimoUsuario.peso} kg`;
            document.getElementById("dato-genero").innerText = ` ${ultimoUsuario.genero}`;
            document.getElementById("dato-actividad").innerText = ` ${ultimoUsuario.actividad}`;
            document.getElementById("dato-objetivo").innerText = ` ${ultimoUsuario.objetivo}`;
            document.getElementById("resultado").innerText = ` ${ultimoUsuario.resultado}`;
            break;
        
        default:
            alert("No hay datos guardados");
            break;
    }
});

    // EVENTO ELIMINAR TODO REGISTRO

    const botonEliminar = document.getElementById("eliminardatos");

    botonEliminar.addEventListener("click", function() {
    localStorage.clear(); 
    alert("Tu registro ha sido eliminado.");
    
    document.getElementById("dato-nombre").innerText = "";
    document.getElementById("dato-edad").innerText = "";
    document.getElementById("dato-altura").innerText = "";
    document.getElementById("dato-peso").innerText = "";
    document.getElementById("dato-genero").innerText = "";
    document.getElementById("dato-actividad").innerText = "";
    document.getElementById("dato-objetivo").innerText = "";
    document.getElementById("resultado").innerText = "";
});

    