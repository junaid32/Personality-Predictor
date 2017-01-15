'use strict';


var cookieSession = require('cookie-session');
var appInfo = require('./app-info');
var hours = require('../utilities/milliseconds-from').hours;
var extend = require('underscore').extend;

module.exports = function (options) {
  return cookieSession(extend({
    name   : 'express.session',
    keys   : [ 'user' ],
    resave : true,
    saveUninitialized: true,
    overwrite: true,

    domain    : appInfo.domain,
    path      : '/',
    secure    : appInfo.secure,
    httpOnly  : appInfo.secure,
    signed    : false,
    maxAge    : hours(1),
    expires   : new Date(Date.now() + hours(1))

  }, options));
};
