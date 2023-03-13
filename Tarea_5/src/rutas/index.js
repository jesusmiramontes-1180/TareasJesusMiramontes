const express = require('express');
const router = express.Router();

const rutasTareas = require('./tareas')

router.use('',rutasTareas);

module.exports = router;