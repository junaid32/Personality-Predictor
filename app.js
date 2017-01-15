'use strict';
var express = require('express'),
    app     = express();7
//var jsonfile=require('jsonfile');
// Bootstrap application settings
require('./config/express')(app);
// Add routes to app
require('./router')(app);

// error-handler settings
require('./config/error-handler')(app);

module.exports = app;
