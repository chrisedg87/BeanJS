'use strict';

angular.module(AppConfig.applicationModuleName, AppConfig.applicationVendorDependencies);

angular.module(AppConfig.applicationModuleName).config(['$httpProvider', 
	function($httpProvider){
		// Stop the annoying IE cache bug
		if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

	}
]);

// bundling dependencies
//window.angular.module('myApp.controllers', ['myApp.controllers.servers','myApp.controllers.profiles','myApp.controllers.logs','myApp.controllers.header']);
//window.angular.module('myApp.services', ['myApp.services.profile','myApp.services.server','myApp.services.log','myApp.services.global','myApp.services.menu']);
