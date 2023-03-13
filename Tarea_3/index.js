const express = require("express");
const rutas = require('./src/rutas/index')
const rutaerror = require("./rutas");
const {engine} = require('express-handlebars');

const app = express();

const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('', rutas);
rutaerror(app);

app.listen(port, function(){
    console.log("Corriendo en Puerto " + port);
});