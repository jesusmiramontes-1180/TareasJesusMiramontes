const express = require('express');
const router = express.Router();

const rutaHome = require('./home');
const rutaJuegos = require('./juegos');
const rutaFotos = require('./fotos');
const rutaHobbies = require('./hobbies');


router.use('',rutaHome);
router.use('',rutaJuegos);
router.use('',rutaFotos);
router.use('',rutaHobbies);

module.exports = router;