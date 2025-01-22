'use strict';

// Import the required modules
const express = require('express');
const contactsController = require('../controllers/contacts');

// Create a new router
const router = express.Router();

// Return all contacts
router.get('/', contactsController.getAll);

// Return a single contact
router.get('/:id', contactsController.getSingle);

// Delete a single contact
router.delete('/:id', contactsController.deleteSingle);

// Create a new contact
router.post('/', contactsController.createSingle);

// Update a single contact
router.put('/:id', contactsController.updateSingle);

module.exports = router;
