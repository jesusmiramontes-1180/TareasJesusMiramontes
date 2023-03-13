const port = process.env.PORT || 3000;

module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title": "Swagger CRUD",
            "description": "Documentación Tarea 5: CRUD Tareas",
            "version": "1.0.0",
            "servers": ["http://localhost:3000"]
        }
    },
    apis: ["index.js",  "src/rutas/*.js"]
}