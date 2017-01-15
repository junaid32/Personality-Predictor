'use strict';

var express = require('express');

var router = express.Router();

// Extending router with api methods
require('./profile/text')(router);
require('./profile/twitter')(router);

module.exports = router;
