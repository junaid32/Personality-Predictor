'use strict';

module.exports = function (app) {

  // APIs
  app.use('/api',  require('./api'));
  app.use('/auth', require('./auth'));

  // Routes
  app.use('/', require('./routes/homepage'));
  app.use('/front', require('./routes/front'));
  app.use('/check', require('./routes/check'));
  app.use('/data', require('./routes/data'));
  app.use('/sunburst', require('./routes/sunburst'));
  app.use('/terms-of-use', require('./routes/terms-of-use'));
  app.use('/result', require('./routes/result'));

};
