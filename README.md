­ƒÜÇ Campuslands CLI Node.js Project

Este proyecto es una aplicaci├│n de interfaz de l├¡nea de comandos (CLI) hecha totalmente con Node.js puro y m├│dulos ECMAScript (ESM), dise├▒ada espec├¡ficamente para llevar el control y registro de los campers de una manera s├║per pr├íctica y sencilla directamente desde nuestra terminal.

­ƒôü 2. ├ürbol de Estructuraci├│n de Carpetas

As├¡ es como tenemos organizada la estructura de archivos en nuestro proyecto:

­ƒôü campuslands-cli-node/
Ôö£ÔöÇÔöÇ ­ƒôü data/
Ôöé   ÔööÔöÇÔöÇ ­ƒôä campers.json
Ôö£ÔöÇÔöÇ ­ƒôü src/
Ôöé   Ôö£ÔöÇÔöÇ ­ƒôä campers.js
Ôöé   Ôö£ÔöÇÔöÇ ­ƒôä index.js
Ôöé   ÔööÔöÇÔöÇ ­ƒôä insteractivo.js
Ôö£ÔöÇÔöÇ ­ƒôä .gitignore
ÔööÔöÇÔöÇ ­ƒôä package.json



## ­ƒöì 3. ┬┐Qu├® contiene cada archivo y carpeta?

Para que no nos perdamos y sepamos exactamente para qu├® sirve cada cosa, aqu├¡ te explico a detalle qu├® hay dentro de nuestros archivos principales:

­ƒùé´©Å Carpeta data/

Es la encargada de almacenar de forma persistente toda la informaci├│n en formato JSON.

campers.json: Es el archivo donde se guardan todos los registros de los campers en formato de texto plano estructurado. Si no existe, la aplicaci├│n lo crea solita la primera vez que guardamos un registro.

­ƒÆ╗ **Carpeta src/**

Aqu├¡ vive todo el c├│digo fuente de nuestra aplicaci├│n de Node.js.

campers.js (La l├│gica de negocio y persistencia):
Este archivo es el coraz├│n pesado de la app. Contiene todas las funciones as├¡ncronas para interactuar con el sistema de archivos (node:fs/promises).

leerCampers(): Lee el archivo JSON y nos devuelve la lista de campers. Si no existe el archivo, maneja el error ENOENT devolviendo un arreglo vac├¡o sin romper la app.

guardarCampers(): Se encarga de escribir y actualizar la informaci├│n en el JSON, asegur├índose primero de que la carpeta data/ exista.

agregarCamper(): Valida que mandemos nombre y stack, calcula el ID de forma segura y a├▒ade el nuevo registro con su fecha de creaci├│n.

listarCampers(): Retorna todos los campers guardados.

buscarCamperPorNombre(): Filtra y busca campers de acuerdo al t├®rmino que le pasemos, sin importar si escribimos en may├║sculas o min├║sculas.

index.js (El manejador de comandos CLI):
Este es el punto de entrada principal cuando ejecutamos comandos directos desde la terminal (por ejemplo: node src/index.js listar).

Utiliza process.argv para capturar los argumentos que le mandamos al ejecutar el script.

Tiene un switch (comando) que eval├║a qu├® queremos hacer (listar, agregar, etc.) y ejecuta la funci├│n correspondiente de campers.js, imprimiendo el resultado en tablas bonitas en la consola o manejando los errores si algo sale mal.

interactivo.js (La interfaz de usuario amigable):
Este archivo nos permite tener una experiencia m├ís din├ímica paso a paso usando la terminal.

Importa createInterface desde node:readline/promises para hacernos preguntas directamente en la consola (┬┐Nombre del camper?, ┬┐Stack tecnol├│gico?).

Espera nuestras respuestas usando await rl.question(...), valida y manda a llamar a agregarCamper para guardarlo de una vez en nuestro archivo JSON de manera interactiva.

­ƒæ¿ÔÇì­ƒÆ╗ Autor

`Estiben Ixen`
