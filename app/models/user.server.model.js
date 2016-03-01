'use strict';

var bookshelf = require('../config/db').bookshelf,
	checkit = require('checkit'),
	util = require('util'),
	crypto = require('crypto');

var User = bookshelf.Model.extend({
	tableName: 'users',

	initialize: function() {
		this.on('saving', this.validateSave);
		this.on('saving', function(){
			this.attributes.displayName = this.attributes.firstName + ' ' + this.attributes.lastName;
			this.attributes.salt = crypto.randomBytes(16).toString('base64');
			this.attributes.password = this.hashPassword(this.attributes.password);
		});
	},

	validateSave: function() {
		//return checkit(this.rules).run(this.attributes);
		return true;
	},

});

User.prototype.authenticate = function(password) {
	return this.attributes.password === this.hashPassword(password);
};

User.prototype.hashPassword = function(password) {
	if (this.attributes.salt && password) {
		return crypto.pbkdf2Sync(password, this.attributes.salt, 10000, 64).toString('base64');
	} else {
		return password;
	}
};

module.exports = bookshelf.model('User', User);
