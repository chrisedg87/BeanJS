'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	User = require('../../models/user.server.model'),
	config = require('../../config/config.js');

/**
 * User middleware
 */

exports.userById = function(req, res, next, id) {
	User.
	forge({id: id}).
	fetch().
	then(function(user){
		req.user = user;
		next();
	}).
	catch(function(error){
		return res.status(500).send(error);
	});
};

/**
 * Require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	if (!req.isAuthenticated()) {
		return res.status(401).send({
			message: 'User is not logged in'
		});
	} else {
		next();
	}
	
};

/**
 * User authorizations routing middleware
 */
exports.hasAuthorization = function(roles) {
	var _this = this;

	return function(req, res, next) {
		_this.requiresLogin(req, res, function() {
			if (_.intersection(req.user.roles, roles).length) {
				return next();
			} else {
				return res.status(403).send({
					message: 'User is not authorized'
				});
			}
		});
	};
};