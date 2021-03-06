'use strict';

//Articles service used to communicate Articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('articles/:articleId', { articleId: '@id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);