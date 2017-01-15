'use strict';

var path     = require('path'),
    callsite = require('callsite');

module.exports = function(depth) {
  depth = depth || 1;
  var stack = callsite(),
      callerFile = stack[depth].getFileName(),
      dir = path.dirname(callerFile);

  return dir;
};
