'use strict';


var
  passport = require('passport'),
  twitter_credentials = require('../credentials').twitter,
  app_info = require('./app-info'),
  pick = require('underscore').pick,
  TwitterStrategy = require('passport-twitter').Strategy,
  TwitterHelper = require('../helpers/twitter-helper'),
  logger = require('winston'),
  twitter_app = twitter_credentials.application,
  more_credentials = twitter_credentials.credentials;


var strategy_options = {
      consumerKey: process.env.TWITTER_CONSUMER_KEY || twitter_app.consumer_key,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET || twitter_app.consumer_secret,
      callbackURL: app_info.url + '/auth/twitter/callback'
    };

var strategy = new TwitterStrategy(
    strategy_options,
    function (token, tokenSecret, profile, done) {
      var user_credential = {
         consumer_key: process.env.TWITTER_CONSUMER_KEY || twitter_app.consumer_key,
         consumer_secret: process.env.TWITTER_CONSUMER_SECRET || twitter_app.consumer_secret,
         access_token_key:   token,
         access_token_secret: tokenSecret,
      };

      return done(null, {
          credentials: [user_credential].concat(more_credentials),
          profile: pick(profile, 'id', 'username', 'photos')
        });
    }
  );


module.exports = function (app) {
  passport.use(strategy);
  passport.serializeUser(function(user, next) { return next(null, user); });
  passport.deserializeUser(function(obj, next) { return next(null, obj); });
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
}
