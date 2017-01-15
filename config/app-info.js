'use strict';

var urlUtils = require('../utilities/url'),
    env = require('cfenv').getAppEnv(),
    LOCAL_ENV_PORT = 3000;

var URL = env.isLocal ? env.url.replace(/:[0-9]+/, ':' + LOCAL_ENV_PORT) : env.url;

var DOMAIN = urlUtils.domain(URL);

module.exports = {
  app_name    : env.name,
  environment : process.env.NODE_ENV,
  port        : env.isLocal ? LOCAL_ENV_PORT : env.port,
  url         : URL,
  domain      : DOMAIN,
  secure      : process.env.VCAP_APPLICATION ? true : false
};
