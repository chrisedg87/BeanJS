'use strict';

module.exports = function(app) {
	var articles = require('../../app/controllers/articles.server.controller');

	app.route('/articles')
		.get(articles.list)
		.post(articles.create);

	app.route('/articles/:articleId')
		.get(articles.read)
		.put(articles.update)
		.delete(articles.delete);

	app.param('articleId', articles.articleByID);
};
