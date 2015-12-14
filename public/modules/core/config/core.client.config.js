'use strict';

angular.module('servers').config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
	$routeProvider
	.otherwise({redirectTo: '/servers'});
}]);
