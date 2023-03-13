const express = require('express');
const router = express.Router();
const path = require('path');



router.get('/fotos', function(req, res){
    router.use('/dist/css', express.static(path.join(__dirname, './../../dist/css')));
    router.use(express.static('views'));

    console.log("Pagina de fotos");
    //res.sendFile(path.join( __dirname + './../../views/fotos.html'));
    res.render('fotos');
})

module.exports = router;