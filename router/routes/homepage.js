'use strict';

var express = require('express'),
    url = require('url');
var router = express.Router();
var twitterUser = function twitterUser(req) {
  return req.user && req.user.profile ? { handle: req.user.profile.username, image: req.user.profile.photos[0] ? req.user.profile.photos[0].value.replace('_normal', '_400x400') : undefined } : {};
};

var query = function query(req) {
  return url.parse(req.url, true).query;
};

var selfAnalysis = function selfAnalysis(req) {
  return query(req).source == 'myself';
};

router.get('/', function (req, res) {
  var t = selfAnalysis(req) ? twitterUser(req) : {};
  res.render('index', {
    ct: req._csrfToken,
    twitterUser: t,
    ga: process.env.GOOGLE_ANALYTICS
  });
});

module.exports = router;
