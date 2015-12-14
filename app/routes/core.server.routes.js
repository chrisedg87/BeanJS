'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../controllers/core.server.controller');

	// Implement the basic app routes
	app.route('/')
		.get(core.index);
};