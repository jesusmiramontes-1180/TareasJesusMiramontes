const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', function(req, res){
    router.use('/dist/css', express.static(path.join(__dirname, './../../dist/css')));
    router.use(express.static('views'));

    console.log("Home");
    //res.sendFile(path.join( __dirname + './../../views/index.html'));
    res.render('index');
})

module.exports = router;