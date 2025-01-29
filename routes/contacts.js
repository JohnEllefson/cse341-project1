'use strict';

// Import the required modules
const express = require('express');
const contactsController = require('../controllers/contacts');

// Create a new router
const router = express.Router();

// Return all contacts
router.get(
  '/',
  contactsController.getAll
  // #swagger.description = 'Return all contacts in the database.'
);

// Return a single contact
router.get(
  '/:id',
  contactsController.getSingle
  // #swagger.description = 'Return a single contact by ID from the database.'
);

// Delete a single contact
router.delete(
  '/:id',
  contactsController.deleteSingle
  // #swagger.description = 'Delete a single contact by ID from the database.'
);

// Create a new contact
router.post(
  '/',
  contactsController.createSingle
  // #swagger.description = 'Create a new contact in the database.'
);

// Update a single contact
router.put(
  '/:id',
  contactsController.updateSingle
  // #swagger.description = 'Update a single contact by ID in the database.'
);

module.exports = router;
