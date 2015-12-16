'use strict';

var bookshelf = require('../config/db').bookshelf,
	checkit = require('checkit'),
	util = require('util');

var Article = bookshelf.Model.extend({
	tableName: 'articles',

	initialize: function() {
		this.on('saving', this.validateSave);
	},

	validateSave: function() {
		//return checkit(this.rules).run(this.attributes);
		return true;
	},

});

module.exports = Article;
