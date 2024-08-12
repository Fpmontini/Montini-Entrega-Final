

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
        e.preventDefault(); //evita que el formulario se envie automaticamente y recargue la página
        let nombre = document.getElementById("nombre").value
        let edad = document.getElementById("edad").value
        let altura = document.getElementById("altura").value
        let peso = document.getElementById("peso").value
        let genero = document.getElementById("genero").value
        let actividad = document.getElementById("nivelactividad").value
        let objetivo = document.getElementById("objetivo").value

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
        if (genero === 'hombre') {
            tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
        } else if (genero === 'mujer') {
         tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
        } 
        tmb = Math.round(tmb);


        // calcular tdee (gasto energetico diario)
        let tdee;
        if (actividad === 'sedentario'){
            tdee = tmb * factorActividad[0];
        } else if (actividad === 'ligero'){
            tdee = tmb * factorActividad[1];
        } else if (actividad === 'moderado'){
            tdee = tmb * factorActividad[2];
        } else if (actividad === 'activo') {
            tdee = tmb * factorActividad[3];
        } else if (actividad === 'muy activo'){
            tdee = tmb * factorActividad[4];
        }
        
        let ajusteObjetivo;
        if (objetivo === 'mantener peso'){
            ajusteObjetivo = tdee * factorObjetivo[0];
        } else if (objetivo === 'disminuir peso'){
            ajusteObjetivo = tdee * factorObjetivo[1];
        } else if (objetivo === 'aumentar peso'){
            ajusteObjetivo = tdee * factorObjetivo[2];
        }
       

        // resultado

        let resultado;
        if (objetivo === "conocer tdee"){
            resultado = tdee;
            }else if (objetivo === "conocer tmb"){
            resultado = tmb;
            } else if (objetivo === "mantener peso"){
                resultado = ajusteObjetivo;
            } else if (objetivo === "disminuir peso"){
                resultado = ajusteObjetivo;
            } else if (objetivo === "aumentar peso"){
                resultado = ajusteObjetivo;
            }
            
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

             //LOCAL STORAGE

        localStorage.setItem('usuarios', JSON.stringify(usuarios))
}
    
       
        