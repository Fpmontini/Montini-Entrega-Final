# Proyecto final - CALCULADORA DE CALORIAS

La Aplicación es una calculadora que indica la cantidad de calorías necesarias debe ingerir el usuario dependidendo del objetivo a conseguir (mantener, disminuir o aumentar de peso).

Para ello se solicita al usuario que ingrese los datos y se utilizan fórmulas matemáticas para realizar el cálculo

## Herramientas utilizadas

En esta versión se eliminaron los prompt, alerts y console.log. Los datos se cargan mediante un formulario y la función se ejecuta con el evento eventListener al hacer click en el botón calcular.

Se agregaron 2 html "Mis Registros" y "Amigos". En la primera se pueden recuperar registros (hasta 6) pudiendo borrar alguno de ellos o todos. NO se incluyo la edicion de los datos en este apartado ya que seria multiplicar codigo innecesariamente ya que repetiria la funcion del scrips.js para realizar el nuevo calculo. Se probo, agregando mediante innerHTML, que se creen campos editables al apretar el boton editar y que una vez cambiados se vuelva a hacer el calculo, pero estaria repitiendo el codigo del archivo scripts.js y quitaria sentido a la calculadora en si, si directamente puedo modificar desde "mis registros". En "amigos" se cargan a traves del archivo friends.json distintos usuarios  con la posibilidad de eliminar y editar individualmente cada uno. Se habia utilizado la API Json Place Holder pero se cambio para evitar problemas de conexion.

Se utilizo la libreria "Sweet Alert" para mensajes de error y confirmacion.

Para el calculo se utilizó un archivo JSON para simular la adquisición de datos necesarios (factor actividad y factor objetivo) desde un servidor y se trajeron a JS mediante "fetch"

Hay un total de 3 html y 3 archivos JS



