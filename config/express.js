'use strict';

// Module dependencies
var express  = require('express'),
  bodyParser = require('body-parser'),
  session    = require('./session'),
  cookieParser = require('cookie-parser'),
  logger     = require('winston'),
  morgan     = require('morgan'),
  i18n       = require('i18n'),
  appInfo = require('./app-info');

module.exports = function (app) {

  app.set('view engine', 'ejs');
  require('ejs').delimiter = '$';
  app.enable('trust proxy');
  app.use(morgan('dev'));

  // Configure Express
  app.use(bodyParser.urlencoded({ extended: true, limit: '15mb' }));
  app.use(bodyParser.json({ limit: '15mb' }));
  app.use(express.static(__dirname + '/../public'));


  var secret = Math.random().toString(36).substring(7);

  app.use(cookieParser(secret));
  app.use(session({ secret: secret, signed: false }));

  require('./i18n')(app);

  // When running in Bluemix add rate-limitation
  // and some other features around security
  if (appInfo.secure)
    require('./security')(app);

  require('./passport')(app);


};
