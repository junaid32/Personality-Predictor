'use strict';

var _ = require('underscore'),
    partial = _.partial,
    bind = _.bind,
    isString = _.isString,
    extend = _.extend,
    pi_input = require('personality-insights-input'),
    personality_insights = require('../../../helpers/personality-insights'),
    profileFromTweets = personality_insights.profile_from_tweets,
    TwitterHelper = require('../../../helpers/twitter-helper');

function validateParameters(req, res, next) {
  if (!isString(req.body.userId)) throw new Error({
    code: 400,
    error: 'Missing required parameters: userId'
  });else next();
}

var getProfileFromTwitter = function getProfileFromTwitter(req, res, next) {
  var tweets;
  if (req.body.live_crawling) tweets = TwitterHelper.getCrawler(req.user.credentials).getTweets(req.body.userId, { limit: 250, min_tweets: 0 });else tweets = TwitterHelper.getLocalTweets(req.body.userId);

  tweets.then(profileFromTweets(req.body)).then(bind(res.json, res)).catch(next);
};

module.exports = function (router) {
  router.post('/profile/twitter', validateParameters);
  router.post('/profile/twitter', getProfileFromTwitter);
};
