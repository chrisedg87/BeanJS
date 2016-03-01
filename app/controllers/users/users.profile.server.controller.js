'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('../errors.server.controller'),
	passport = require('passport'),
	User = require('../../models/user.server.model');

exports.me = function(req, res) {
	res.json(req.user || null);
};