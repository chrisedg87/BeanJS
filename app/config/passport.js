'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	User = require('../models/user.server.model'),
	path = require('path'),
	config = require('./config'),
	User = require('../models/user.server.model');
	
/**
 * Module init function.
 */
module.exports = function() {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id, done) {
		User.
		forge({id: id}).
		fetch().
		then(function(user){
			done(null,user);
		}).
		catch(function(error){
			done(error,null);
		});
	});

	// Initialize strategies

	config.getGlobbedFiles('./app/config/strategies/**/*.js').forEach(function(routePath) {
		require(path.resolve(routePath))();
	});
};