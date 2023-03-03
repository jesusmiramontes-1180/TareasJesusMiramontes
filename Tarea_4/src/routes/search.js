const express = require('express');
const router = express.Router();
const path = require('path');

const axios = require('axios').default;
const key = '69d030402b0d4bf1a23479857c3162dc';

router.get('/busqueda', function(req, res){
    router.use('/dist/css', express.static(path.join(__dirname, './../../dist/css')));
    let query = req.query.searchInput;
    let url = 'https://newsapi.org/v2/everything?' +
    'q=' + query + '&' +
    'apiKey='+ key;

    axios.get(url)
    .then(function(results) {

        if(results.data.articles[0] == undefined){
            res.render('error');
        }else{
            let data = results.data.articles;
        res.render('info', {data: data});
        }
    })
    .catch();
})

module.exports = router;