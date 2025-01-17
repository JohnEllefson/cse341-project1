const express = require('express');
const router = express.Router();

// Mount a sub-router to handle all routes under /contacts
router.use('/contacts', require('./contacts'))

module.exports = router;