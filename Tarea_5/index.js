const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

//Para la documentación en localhost:3000/swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConf = require("./swagger.config");
const swaggerUI = require("swagger-ui-express");

const rutas = require("./src/rutas/index");

const app = express();

const port = process.env.PORT || 3000;
const MongoUrl = process.env.MONGO_URL;

app.use('', rutas);

const SwaggerDocs = swaggerJsDoc(swaggerConf);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(SwaggerDocs));

mongoose.connect(MongoUrl)
.then(() => {
    console.log("Connected into Data Base");
    app.listen(port, function(){
        console.log("Corriendo en Puerto " + port);
        console.log("Base: " + MongoUrl);
    });
})
.catch(err => {
    console.log("Failed to load Data Base: " + err);
});