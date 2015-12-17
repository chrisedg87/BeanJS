'use strict';

angular.module('core').controller('HeaderController', ['$rootScope','$location','$scope','Menus','$timeout',
    function($rootScope,$location,$scope,Menus,$timeout) {

        $scope.menu = Menus.getMenu('topbar');
    	 
        $scope.isActive = function(path){
        	var linkPath = path.toLowerCase();
            if(linkPath === $location.path()){
                return 'active';
            }
        };

    }]);