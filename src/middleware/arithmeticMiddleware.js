// src/middleware/arithmeticMiddleware.js
function arithmeticMiddleware(req, res, next) {
    req.calculatedValue = 4 * 7;
    next();
  }
  
  module.exports = arithmeticMiddleware;
