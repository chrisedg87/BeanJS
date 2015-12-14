'use strict';

var express = require('express'),
	path = require('path'),
	swig = require('swig'),
	config = require('./config'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	multipart = require('connect-multiparty'),
	helmet = require('helmet');

module.exports = function(db){
	// Initialise express
	var app =  express();

	//Set the local app variables
	app.locals.title = config.app.title;
	app.locals.description = config.app.description;
	//app.locals.cssFiles = config.assets.css;
	//app.locals.jsFiles = config.assets.js;

	app.locals.jsFiles = config.getJavaScriptAssets();
	app.locals.cssFiles = config.getCSSAssets();
	
	app.set('showStackError', true);

	app.engine('server.view.html', swig.renderFile);

	app.set('view engine', 'server.view.html');
	app.set('views', './app/views');

	// Environment dependent middleware
	if (process.env.NODE_ENV === 'development') {
		// Enable logger (morgan)
		app.use(morgan('dev'));

		// Disable views cache
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.locals.cache = 'memory';
	}
	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	// Use helmet to secure Express headers
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.use(helmet.ienoopen());

	// Disable the browser cache for IE
	//app.use(helmet.nocache());

	app.use(express.static('public'));

	app.use(multipart({
		uploadDir: config.uploadtmp
	}));

	// Globbing routing files
	config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
		require(path.resolve(routePath))(app);
	});

	app.use(function(err, req, res, next) {
		// If the error object doesn't exists
		if (!err) return next();

		// Log it
		console.error(err.stack);

		// Error page
		
	});

	return app;

};