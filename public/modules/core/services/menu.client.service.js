'use strict';

angular.module('core').service('Menus', [

	function() {

		// Define the menus object
		this.menus = [];

		// Add menu item object
		this.addMenuItem = function(name, url, position) {
			var item = {
				name: name,
				url: url,
				position: position || 0
			};
			this.menus.push(item);
		};

		this.getMenuItems = function(){
			return this.menus;
		};
	}
]);