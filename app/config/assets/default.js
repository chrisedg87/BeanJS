'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css'
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'public/modules/*/client/css/*.css'
    ],
    less: [
      'public/modules/*/client/less/*.less'
    ],
    sass: [
      'public/modules/*/client/scss/*.scss'
    ],
    js: [
      'public/modules/core/client/app/config.js',
      'public/modules/core/client/app/init.js',
      'public/modules/*/client/*.js',
      'public/modules/*/client/**/*.js'
    ],
    views: ['public/modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'app/**/*.js', 'public/modules/*/server/**/*.js'],
    models: 'public/modules/*/server/models/**/*.js',
    routes: ['public/modules/!(core)/server/routes/**/*.js', 'public/modules/core/server/routes/**/*.js'],
    sockets: 'public/modules/*/server/sockets/**/*.js',
    config: 'public/modules/*/server/config/*.js',
    policies: 'public/modules/*/server/policies/*.js',
    views: 'public/modules/*/server/views/*.html'
  }
};

