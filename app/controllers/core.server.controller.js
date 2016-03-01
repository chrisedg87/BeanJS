'use strict';

exports.index = function(req, res) {
	res.render('layout', {
		user: req.user || null,
		request: req
	});
};