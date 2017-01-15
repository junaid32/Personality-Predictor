
'use strict';


var getProfile = require('../../../helpers/personality-insights').profile;


function getTextProfile(req, res, next) {
  getProfile(req.body)
    .then(res.json.bind(res))
    .catch(next);
}


module.exports = function(router){
  router.post('/profile/text', getTextProfile);
};
