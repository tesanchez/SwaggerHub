'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.usersGET = function usersGET (req, res, next) {
  var uUID = req.swagger.params['UUID'].value;
  var first_name = req.swagger.params['first_name'].value;
  var last_name = req.swagger.params['last_name'].value;
  Default.usersGET(uUID,first_name,last_name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
