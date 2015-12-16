'use strict';

// Setting up route
angular.module('core').config(['$routeProvider', '$httpProvider',
	function($routeProvider, $httpProvider) {
		// Redirect to home view when route not found

		// Home state routing
		$routeProvider.
		when('/', {
			controller: 'HomeController',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);