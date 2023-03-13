const express = require('express');
const app = express();
const path = require('path');

module.exports = function(app){
    app.get("*", function(req, res){ //Ruta de error
        console.log("Se esta buscando una pagina que no existe");
    
        res.status(404).sendFile(path.join( __dirname + '/views/error.html'));
    });
}
