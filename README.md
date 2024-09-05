# Proyecto final - CALCULADORA DE CALORIAS

La Aplicación es una calculadora que indica la cantidad de calorías necesarias debe ingerir el usuario dependidendo del objetivo a conseguir (mantener, disminuir o aumentar de peso).

Para ello se solicita al usuario que ingrese los datos y se utilizan fórmulas matemáticas para realizar el cálculo

## Herramientas utilizadas

En esta versión se eliminaron los prompt, alerts y console.log. Los datos se cargan mediante un formulario y la función se ejecuta con el evento eventListener al hacer click en el botón calcular.

Se agregaron 2 html "Mis Datos" y "Amigos". En la primera se pueden recuperar registros (hasta 3) pudiendo borrar alguno de ellos o todos o editar los datos. En "amigos" se cargan a traves de la API JSON PLACE HOLDER distintos usuarios  con la posibilidad de eliminar individualmente.

Se utilizo la libreria "Sweet Alert" para mensajes de error y confirmacion.

Para el calculo se utilizó un archivo JSON para simular la adquisición de datos necesarios (factor actividad y factor objetico) desde un servidor y se trajeron a JS mediante "fetch"

Hay un total de 3 html y 3 archivos JS



