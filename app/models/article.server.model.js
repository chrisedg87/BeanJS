'use strict';

var bookshelf = require('../config/db').bookshelf,
	checkit = require('checkit'),
	util = require('util');

var Article = bookshelf.Model.extend({
	tableName: 'articles',

	user: function() {
		return this.belongsTo('User');
	},

	initialize: function() {
		this.on('saving', this.validateSave);
	},

	validateSave: function() {
		//return checkit(this.rules).run(this.attributes);
		return true;
	},

});

module.exports = bookshelf.model('Article', Article);
