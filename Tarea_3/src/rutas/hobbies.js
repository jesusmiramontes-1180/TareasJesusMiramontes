const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/hobbies',  function(req, res){
    router.use('/dist/css', express.static(path.join(__dirname, './../../dist/css')));
    router.use(express.static('views'));

    console.log("Pagina de Hobbies");
    //res.sendFile(path.join( __dirname + './../../views/hobbies.html'));
    res.render('hobbies')
})

module.exports = router;