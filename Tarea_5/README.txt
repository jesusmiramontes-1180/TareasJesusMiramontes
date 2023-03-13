Sobre la Tarea 5: CRUD Tareas

Este proyecto corre sobre localhost:3000, pero no cuenta con ningún archivo
HTML o Handlebars para mostrar al usuario final, pues unicamente cuenta
con documentación Swagger, desde la cual se pueden utilizar las 5 rutas
que se detallan más adelante.
Se tiene una conexión con MongoDB a una base de datos llamada "Tareas"
y a sun collección llamada "tareas". Si se utiliza el URL que se encuentra
en el comentario del canvas, basta con añadirlo al .env que se espcifica más
adelante para una conexión sin problemas.

PREREQUISITOS:
Antes de poder iniciar localhost es necesario usar npm install para
las librerias:
-dotenv para asegurar el URL que conecta con MongoDB
-express para manejar el backend
-mongoose para conectar a MongoDB y crear el esquema
-swagger para documentar las rutas

URL
Además de esto, se debe crear un archivo .env donde se debera colocar la
URL que conecta a MongoDB bajo el nombre: MONGO_URL para
que el resto de archivos trabaje sin problemas.

TECNOLOGIAS:
Al ser un trabajo que unicamente muestra rutas y respuestas,
solo se requiere express para el backend en archivos .js, además de usar
swagger para mostrar la documentación de cada ruta.


ESQUEMA:
La tarea se maneja mediante un esquema principal que es:
titulo: string,
descripcion: string,
estado: string (Con posibles valores "Abierta", "Cerrada" y "Terminada"),
fecha: date (se maneja como un formato en string "<YYYY-mm-ddTHH:MM:ss>", por ejemplo "2021-01-15T06:31:15Z")

COMANDOS:
Solo existe el comando
npm start
para iniciar el servidor.

RUTAS:
/swagger
Esta ruta es la única que se debe utilizar desde el navegador, pues aquí se carga toda la documentación.

GET /tareas
Retorna una lista de todas las tareas dentro de la base, mostrando los datos especificados en el esquema
además de _id, que es el id por defecto que se usa en MongoDB y es el que se utiliza para las rutas
que usan id: buscar, modificar y borrar.
Si hay tareas, retorna un status 200, pero si no puede encontrar algo, retorna status 400.

GET /tareas/:id
Retorna solo la tarea del id que se coloca en la ruta si se encuentra con un status 200.
Si no existe una tarea con el id, lo dice en la respuesta con un status 400.

POST /tareas
Crea una nueva tarea en la base; si se logró crear, retorna esta tarea con status 200,
si no, responde que hubo un error con status 400.
Esta ruta utiliza un body con los campos del esquema mencionado anteriormente
para generar el documento en MongoDB.

PUT /tareas/:id
Busca el id de una tarea: si lo encuentra, recibe un body con los campos a modificar.
Si la tarea se pudo modificar, retorna la tarea con los nuevos valores en un status 200.
Si no, se retorna el error con status 400.

DELETE /tareas/:id
Busca el id de la tarea; si existe, guarda sus datos y la elimina, retornando los valores de la tarea
y un status 200. Si no se encontró la tarea o no se pudo borrar, retorna error con status 400.
