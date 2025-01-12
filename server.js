// Import the necessary modules
const express = require('express');
const app = express();

// Set the port value
const port = process.env.PORT || 3000;

// Use routes defined in the routes directory
app.use('/', require('./routes'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
