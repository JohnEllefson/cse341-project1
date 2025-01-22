'use strict';

// Import the required modules
const Contacts = require('../models/Post');

// Return all contacts
const getAll = async (_req, res) => {
  try {
    const contacts = await Contacts.find();
    if (!contacts) {
      res.status(404).json({ message: 'No contacts found in database' });
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({ message: 'Failed to get contacts', error: error.message });
  }
};

// Return a single contact
const getSingle = async (req, res) => {
  try {
    const contact = await Contacts.findById(req.params.id);
    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: 'Failed to get contact', error: error.message });
  }
};

// Create a new contact
const createSingle = async (req, res) => {
  const contact = new Contacts({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  });

  try {
    await contact.save();
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({ message: 'New contact added', id: contact._id });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create contact', error: error.message });
  }
};

// Delete a single contact
const deleteSingle = async (req, res) => {
  try {
    const contact = await Contacts.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete contact', error: error.message });
  }
};

// Update a single contact
const updateSingle = async (req, res) => {
  try {
    const contact = await Contacts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Failed to update contact', error: error.message });
  }
};

module.exports = { getAll, getSingle, createSingle, deleteSingle, updateSingle };
