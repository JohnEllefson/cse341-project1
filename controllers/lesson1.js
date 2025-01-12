// Define the routes for the lesson1 controller
const maryRoute = (req, res) => {
    res.send('Mary Ellefson');
  };
  
  const robRoute = (req, res) => {
    res.send('Rob Ellefson');
  };
  
  const danRoute = (req, res) => {
    res.send('Dan Ellefson');
  };
  
  module.exports = { maryRoute, robRoute, danRoute };