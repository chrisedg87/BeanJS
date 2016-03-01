'use strict';

// Setting up route
angular.module('users').config(['$routeProvider',
  function ($routeProvider) {
    // Users when routing
    $routeProvider
      .when('/settings', {
        abstract: true,
        templateUrl: 'modules/users/views/settings/settings.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .when('/profile', {
        templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
      })
      .when('/password', {
        templateUrl: 'modules/users/views/settings/change-password.client.view.html'
      })
      .when('/accounts', {
        templateUrl: 'modules/users/views/settings/manage-social-accounts.client.view.html'
      })
      .when('/picture', {
        templateUrl: 'modules/users/views/settings/change-profile-picture.client.view.html'
      })
      .when('/authentication', {
        abstract: true,
        templateUrl: 'modules/users/views/authentication/authentication.client.view.html'
      })
      .when('/signup', {
        templateUrl: 'modules/users/views/authentication/signup.client.view.html'
      })
      .when('/signin', {
        templateUrl: 'modules/users/views/authentication/signin.client.view.html'
      })
      .when('/password', {
        abstract: true,
        template: '<ui-view/>'
      })
      .when('/forgot', {
        templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
      })
      .when('/reset', {
        abstract: true,
        template: '<ui-view/>'
      })
      .when('/invalid', {
        templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
      })
      .when('/success', {
        templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
      })
      .when('/:token', {
        templateUrl: 'modules/users/views/password/reset-password.client.view.html'
      });
  }
]);
