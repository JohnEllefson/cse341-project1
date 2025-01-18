const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  let userId;
  try {
    userId = new ObjectId(req.params.id); // Convert the id to ObjectId
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' }); // Handle invalid ObjectId
    return;
  }

  const result = await mongodb
    .getDb()
    .collection('contacts')
    .find({ _id: userId });

  result.toArray().then((lists) => {
    if (lists.length === 0) {
      res.status(404).json({ message: 'Contact not found' });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]); // Return the first matched document
    }
  });
};

module.exports = { getAll, getSingle };