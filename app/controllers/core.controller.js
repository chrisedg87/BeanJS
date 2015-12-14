'use strict';

var serveStatic = require('serve-static');

exports.index = function(req, res) {
	res.render('layout');
};
