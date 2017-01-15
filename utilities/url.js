'use strict';
function domain(url) {
  return url.replace(/[a-zA-Z0-9]+:\/\//, '') // Remove protocol
            .replace(/:[0-9]+/, '')           // Remove port
            .replace(/\/$/, '');              // Remove ending '/'
}


module.exports = {
  domain: domain
};
