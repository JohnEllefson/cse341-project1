const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

// Mount the body-parser middleware to parse the incoming request body
app.use(bodyParser.json());

// All incoming requests will have the response headers set to allow all origins
app.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// All incoming requests are passed through the routes/index.js file
app.use('/', require('./routes'));

app.listen(port, async (req, res) => {
  try {
      const db = await mongodb.connectToDatabase();
      console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
  }
});