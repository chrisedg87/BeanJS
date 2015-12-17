'use strict';

/**
 * Module dependencies.
 */
var errorHandler = require('./errors.server.controller'),
	Article = require('../models/article.server.model'),
	_ = require('lodash');

/**
 * Create a Article
 */
exports.create = function(req, res) {
	console.log(req.body);
	var article = new Article(req.body);
	article.user = req.user;

	article.save().then(function(article){
		res.jsonp(article);
	}).catch(function(error){
		res.jsonp(error);
	});
	
};

/**
 * Show the current Article
 */
exports.read = function(req, res) {
	res.jsonp(req.article);
};

/**
 * Update a Article
 */
exports.update = function(req, res) {
	var article = req.article ;
	console.log(article);
	article = _.extend(article , req.body);
	console.log(article);

	article.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(article);
		}
	});
};

/**
 * Delete an Article
 */
exports.delete = function(req, res) {
	var article = req.article ;

	article.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(article);
		}
	});
};

/**
 * List of Articles
 */
exports.list = function(req, res) { 
	Article.forge().fetchAll().then(function(articles){
		res.jsonp(articles);
	}).catch(function(error){
		res.jsonp(error);
	});
};

/**
 * Article middleware
 */
exports.articleByID = function(req, res, next, id) { 
	Article.findById(id).populate('user', 'displayName').exec(function(err, article) {
		if (err) return next(err);
		if (! article) return next(new Error('Failed to load Article ' + id));
		req.article = article ;
		next();
	});
};

/**
 * Article authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.article.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
