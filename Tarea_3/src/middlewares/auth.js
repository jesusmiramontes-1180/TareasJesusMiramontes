const path = require('path');

function autenticacion(req, res, next){
    let token  = req.query.token;
    
    console.log("Revisando");
    if(token == '12345'){
        console.log("Usuario listo");
        next();
    }else{
        console.log("No se tienen los permisos necesarios");
        res.status(401).sendFile(path.join( __dirname + './../../views/falta_permisos.html'));
    }   
}

module.exports = autenticacion;