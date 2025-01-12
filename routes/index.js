// Import the necessary modules
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

// Define routes
routes.get('/', lesson1Controller.maryRoute);
routes.get('/rob', lesson1Controller.robRoute);
routes.get('/dan', lesson1Controller.danRoute);

module.exports = routes;