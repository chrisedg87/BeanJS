'use strict';

var config = require('./config'),
	knex = require('knex')(config.db),
	bookshelf = require('bookshelf')(knex);

// Use the registry plugin for model relationship loading
bookshelf.plugin('registry');

module.exports.bookshelf = bookshelf;