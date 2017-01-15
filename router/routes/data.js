'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('data', {
        ct: req._csrfToken,
        twitterUser: {},
        ga: process.env.GOOGLE_ANALYTICS
    });
});

module.exports = router;
