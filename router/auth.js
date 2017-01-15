'use strict';

var express = require('express'),
    passport = require('passport'),
    logger = require('winston'),
    TwitterHelper = require('../helpers/twitter-helper'),
    getProfileFromTweets = require('../helpers/personality-insights').profile_from_tweets;

var router = express.Router();

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/#error',
    successRedirect: '/?source=myself'
  }));

module.exports = router;
