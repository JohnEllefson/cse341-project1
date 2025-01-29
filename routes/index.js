'use strict';

const express = require('express');
const router = express.Router();

// Mount the Swagger routes to serve the API documentation
router.use('/', require('./swagger'));

// Mount a sub-router to handle all routes under /contacts
router.use('/contacts', require('./contacts'));

module.exports = router;
