'use strict';
var logger  = require('winston'),
   port    = 8080;
//require('cf-deployment-tracker-client').track();
var server = require('./app');
server.listen(port, function () {
  logger.info('Listening at:', port);
});
