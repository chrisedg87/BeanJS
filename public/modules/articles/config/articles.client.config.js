'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('Articles', 'articles', 'dropdown');
		//Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles');
		//Menus.addSubMenuItem('topbar', 'articles', 'New Article', 'articles/create');
	}
]);