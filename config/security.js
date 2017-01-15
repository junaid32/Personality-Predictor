'use strict';

// security.js
var rateLimit  = require('express-rate-limit'),
    helmet     = require('helmet'),
    request    = require('request');

module.exports = function (app) {
  var limiter = rateLimit({
    windowMs: 30 * 1000, // seconds
    delayMs: 0,
    max: 3,
    message: JSON.stringify({
      error:'Too many requests, please try again in 30 seconds.',
      code: 429
    }),
  });

  app.use('/api/', limiter);
};
