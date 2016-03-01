'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('./errors.server.controller'),
	User = require('../models/user.server.model');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require('./users/users.authentication.server.controller'),
	require('./users/users.authorization.server.controller'),
	require('./users/users.password.server.controller'),
	require('./users/users.profile.server.controller')
);

module.exports.list = function(req, res) { 
	User.
	forge().
	fetchAll().
	then(function(users){
		res.jsonp(users);
	}).
	catch(function(error){
		res.jsonp(error);
	});
};

/*
module.exports.updateUser = function(req, res) { 
	User.findById('54f5d4f75ee1fd2c201b99b3').exec(function(err, user) {
		console.log(user);
	});
	res.jsonp('complete');
};
*/