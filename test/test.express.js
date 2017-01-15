'use strict';

var app = require('../app');
var request = require('supertest');
var nock = require('nock');

describe('express', function() {

  it('load home page when GET /', function(done) {
    request(app).get('/').expect(200, done);
  });

});
