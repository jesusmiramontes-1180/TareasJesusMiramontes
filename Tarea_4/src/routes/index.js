const express = require('express');
const router = express.Router();

const routeHome = require('./home');
const routeSearch = require('./search');

router.use('',routeHome);
router.use('',routeSearch);


module.exports = router;