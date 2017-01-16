'use strict';

module.exports = function (app) {

  // APIs
  app.use('/api',  require('./api'));
  app.use('/auth', require('./auth'));

  // Routes
  app.use('/', require('./routes/homepage'));
  app.use('/about', require('./routes/about'));
  app.use('/check', require('./routes/check'));
  app.use('/contact', require('./routes/contact'));
  app.use('/result', require('./routes/result'));

};
