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
	var article = new Article(req.body);
	article.attributes.user_id = req.user.id;

	article.save().then(function(article){
		res.jsonp(article);
	}).catch(function(err){
		console.error(err);
		return res.status(400).send({
			message: errorHandler.getErrorMessage(err)
		});	
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
	var data = req.article.attributes;
	data = _.extend(data , req.body);

	//var article = new Article({id: data.id, title: data.title, content: data.content});
	var article = new Article(data);
	article.
	save().
	then(function(model){
		res.jsonp(model);
	}).
	catch(function(err){
		return res.status(400).send({
			message: errorHandler.getErrorMessage(err)
		});	
	});

};

/**
 * Delete an Article
 */
exports.delete = function(req, res) {
	var data = req.article.attributes;

	var article = new Article(data);
	article.
	destroy().
	then(function(model){
		res.json(model);
	}).
	catch(function(err){
		return res.status(400).send({
			message: errorHandler.getErrorMessage(err)
		});	
	});
};

/**
 * List of Articles
 */
exports.list = function(req, res) { 
	Article.
	forge().
	fetchAll({withRelated: ['user']}).
	then(function(articles){
		res.jsonp(articles);
	}).
	catch(function(error){
		res.jsonp(error);
	});
};

/**
 * Article middleware
 */
exports.articleByID = function(req, res, next, id) { 
	Article.
	forge({id: id}).
	fetch({withRelated: ['user']}).
	then(function(article){
		req.article = article;
		next();
	}).
	catch(function(error){
		return res.status(500).send(error);
	});

};