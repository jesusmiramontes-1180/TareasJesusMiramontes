const express = require("express");
const routes = require('./src/routes/index');
const {engine} = require('express-handlebars');
const path = require('path');


const app = express();

const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/dist/css/styles', express.static(path.join(__dirname, '/dist/css/styles')))
app.use('', routes);


app.listen(port, function(){
    console.log("News App on port: " + port);
});

function alerta(){
    console.log("Boton puchado");
}