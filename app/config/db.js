'use strict';

var config = require('./config'),
	knex = require('knex')(config.db),
	bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;