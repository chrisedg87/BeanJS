'use strict';

var AppConfig = (function() {

	var applicationModuleName = 'myApp';
	var applicationVendorDependencies = ['ngResource', 'ui.bootstrap', 'ngRoute', 'ngFileUpload'];

	var registerModule = function(name) {
		angular.module(name, []);
		angular.module(applicationModuleName).requires.push(name);
	}

	return {
		applicationModuleName: applicationModuleName,
		applicationVendorDependencies: applicationVendorDependencies,
		registerModule: registerModule
	};

})();
