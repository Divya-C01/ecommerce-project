// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import the route
const arithmeticRoute = require('./routes/arithmeticRoute');

// (1) Define a root route for "/"
app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

// (2) Use the arithmetic route with a prefix
app.use('/test', arithmeticRoute);

// (3) Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});