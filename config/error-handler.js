'use strict';


var logger = require('winston');


var error  = function (status_code, message) {
  var e = new Error(message);
  e.code = status_code;
  e.message = message;
  return e;
};

function friendlyError(req, err) {
  var errorMapping = {
    '400' : 'error-400-minimum',
    '401' : 'error-401-credentials',
    '500' : 'error-500-enoughtweets'
  };

  var message = req.__ ? req.__(errorMapping[err.code]) : err.message ;

  return { code : err.code, error: message };
}


module.exports = function (app) {

  // catch 404 and forward to error handler
  app.use(function(_, __, next) { return next(error(404, 'error-404-notfound')); } );

  // error handler
  app.use(function (err, req, res, next) {
    var error = {
        code: err.code || 500,
        error: friendlyError(req,err) || err.error || err.message
      };

    if (error.code != 404)
      logger.error(err, 'url:', req.url, 'Error:', error);

    if (err.code === 'EBADCSRFTOKEN') {
      error = {
          code: 403,
          error: 'http://goo.gl/mGOksD'
        };
    }

    res.status(error.code)
      .json(error);
  });

};
