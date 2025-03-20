// src/routes/arithmeticRoute.js
const express = require('express');
const router = express.Router();
const arithmeticMiddleware = require('../middleware/arithmeticMiddleware');

router.get('/arithmetic', arithmeticMiddleware, (req, res) => {
  console.log('Calculated value:', req.calculatedValue);
  res.send(`Calculated value is: ${req.calculatedValue}`);
});

module.exports = router;
