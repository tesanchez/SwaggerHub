'use strict';


/**
 * Allows users to get employees
 *
 * uUID String UUID number of employee
 * first_name String Users first name (optional)
 * last_name String Users last namea (optional)
 * returns inline_response_200
 **/
exports.usersGET = function(uUID,first_name,last_name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "join_date" : "1511884800",
  "last_name" : "Stevens",
  "UUID" : "3110-78-8832",
  "first_name" : "James",
  "email" : "j_stevens@sb.com",
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

