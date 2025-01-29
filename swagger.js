'use strict';

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Contacts API',
    description:
      'This API manages a database of contacts. It allows you to perform CRUD operations on all contacts.'
  },
  host: 'cse341-project1-psa4.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
