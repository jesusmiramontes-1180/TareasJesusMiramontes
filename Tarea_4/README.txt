Sobre la Tarea de News App:

Este proyecto utiliza diversas tecnologías para integrar News API
con un servicio simple que muestra el contenido dentro de esta 
utilizando una consulta sencilla.
Todo corre sobre localhost:3000 tras usar nmp start en la terminal.

PREREQUISITOS
Es necesario ejecutar los siguientes comandos en la terminal de la carpeta Tarea_4
para correr el localhost:3000
npm init
npm install express
npm install express-handlebars
npm install axios
npm install sass (Este último no es necesario, pues ya se compilaron
los estilos en dist/css/styles/general_style.css)


TECNOLOGÍAS PRINCIPALES
-Uso de HTML, CSS Y JS en front end, además de Node js en el backend.
que es donde se ralizan las consultas a la API y se retornan a un.
archivo .handlebars para visualizarse correctamente.

LIBRERIAS
-express para el backend
-sass y express-handlebars para el frontend (css y html respectivamente)
-axios para realizar las consultas a la API.

TERCEROS
-El uso de axios para llamar a la API, puesto que este servicio
no depende de lo que se realizó en esta tarea; solo se realizan consultas
y se muestran resultados.

COMANDOS
-npm run styles: renderizar los css a partir de los scss
-npm start: para arrancar el servidor en localhost

RUTAS
-/ que es la ruta básica de home, donde se permite realizar la busqueda.
-/busqueda donde se maneja lo que se retorna de News API.
Aqui se usa un media query para extraer de la url el termino que
se desea buscar en el servidor. En esta misma ruta también se muestra
un error si es que no se ha encontrado ningún resultado; para probar
este evento se puede buscar "-" en la pagina principal.