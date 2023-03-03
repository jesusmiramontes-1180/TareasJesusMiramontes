const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    router.use('/dist/css', express.static(path.join(__dirname, './../../dist/css')));
    router.use(express.static('views'));
    res.render('home');
})


module.exports = router;