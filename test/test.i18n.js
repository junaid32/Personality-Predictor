'use strict';

var app = require('../app');
var request = require('supertest');
var nock = require('nock');

describe('i18n-en', function() {
  it('English localized page should contain specific text when GET /', function(done) {
	request(app)
		.get('/')
		.set('Accept-language', 'en')
		.expect(200)
		.expect(function containsString(res) {
    		if (res.text.indexOf('Try the service') == -1) 
    			throw new Error("Invalid translation string");
    	})
		.end(done);
  });
});

/*describe('i18n-es', function() {
  it('Spanish localized page should contain specific text when GET /', function(done) {
	request(app)
		.get('/')
		.set('Accept-language', 'es')
		.expect(200)
		.expect(function containsString(res) {
    		if (res.text.indexOf('Pruebe el servicio') == -1)
    			throw new Error("Invalid translation string");
    	})
		.end(done);
  });
});

describe('i18n-ja', function() {
  it('Japanese localized page should contain specific text when GET /', function(done) {
	request(app)
		.get('/')
		.set('Accept-language', 'ja')
		.expect(200)
		.expect(function containsString(res) {
    		if (res.text.indexOf('実際に試してみましょう！') == -1)
    			throw new Error("Invalid translation string");
    	})
		.end(done);
  });
});*/