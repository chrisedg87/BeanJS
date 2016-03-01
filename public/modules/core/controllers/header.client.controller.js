'use strict';

angular.module('core').controller('HeaderController', ['$rootScope','$location','$scope','Menus','$timeout','Authentication',
    function($rootScope,$location,$scope,Menus,$timeout,Authentication) {

        $scope.menu = Menus.getMenu('topbar');
        $scope.authentication = Authentication;

        console.log($scope.menu);
    	 
        $scope.isActive = function(path){
        	var linkPath = path.toLowerCase();
            if(linkPath === $location.path()){
                return 'active';
            }
        };

    }]);