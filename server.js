'use strict';

// Import the required modules
require('dotenv').config(); // This must load before other modules
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

// Mount the body-parser middleware to parse the incoming request body
app.use(bodyParser.json());

// All incoming requests will have the response headers set to allow all origins
app.use('/', (_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// All incoming requests are passed through the routes/index.js file
app.use('/', require('./routes'));

// Start the server
const server = app.listen(port, async (_req, _res) => {
  try {
    await mongodb.connectMongoose();
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
});

// Graceful shutdown on Nodemon restarts
process.once('SIGUSR2', () => {
  console.log('Nodemon restart detected. Closing server...');
  server.close(() => {
    console.log('Server closed. Restarting...');
    process.kill(process.pid, 'SIGUSR2'); // Send SIGUSR2 to restart the process
  });
});

// Handle Ctrl+C or termination signals
process.on('SIGINT', () => {
  console.log('Process terminated. Closing server...');
  server.close(() => {
    console.log('Server closed.');
  });
});

// Handle termination signals
process.on('SIGTERM', () => {
  console.log('Process terminated by external signal. Closing server...');
  server.close(() => {
    console.log('Server closed.');
  });
});
