const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/juegos',  function(req, res){
    router.use('/dist/css', express.static(path.join(__dirname, './../../dist/css')));
    router.use(express.static('views'));

    console.log("Ranking de Juegos");
    //res.sendFile(path.join( __dirname + './../../views/juegos.html'));
    res.render('juegos');
})

module.exports = router;