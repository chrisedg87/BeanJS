'use strict';

module.exports = {
	app: {
		title: 'Node MySQL Framework',
		description: 'Node MySQL Framework'
	},
    ssl: false,
    port: 3000,
    assets: {
    	lib: {
	    	css: [
				'public/lib/bootstrap/dist/css/bootstrap.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-route/angular-route.min.js',
				'public/lib/bootstrap/dist/js/bootstrap.js.min',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
				'public/lib/ng-file-upload/ng-file-upload-shim.js',
				'public/lib/ng-file-upload/ng-file-upload.js'
			]
    	},
    	css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/app.js',
			'public/modules/*/*.js',
			'public/modules/*/config/*.js',
			'public/modules/*/services/*.js',
			'public/modules/*/controllers/*.js',
			'public/modules/*/directives/*.js',
			'public/modules/*/filters/*.js',
			'public/modules/*/*[!tests]*/*.js'
		]
    }
};