#!/usr/bin/env node
'use strict';

var init = require('./app/config/init')(),
	config = require('./app/config/config.js'),
	bookshelf = require('bookshelf'),
	chalk = require('chalk');

if(!process.env.NODE_ENV) {
	console.log(chalk.red('No environment found - '));
}

var app = require('./app/config/express')();

// Bootstrap passport config
require('./app/config/passport')();

// List on the correct port
app.listen(config.port);

// This is exposes the app for the unit tests
module.exports = app;

// Logging Initialise
console.log(chalk.green('App listening on port '+config.port));
