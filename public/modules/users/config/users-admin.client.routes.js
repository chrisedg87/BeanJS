'use strict';

// Setting up route
angular.module('users.admin.routes').config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'modules/users/views/admin/list-users.client.view.html',
        controller: 'UserListController'
      })
      .when('/users/:userId', {
        templateUrl: 'modules/users/views/admin/view-user.client.view.html',
        controller: 'UserController'
        /*
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        }
        */
      })
      .when('/users/:userId/edit', {
        templateUrl: 'modules/users/views/admin/edit-user.client.view.html',
        controller: 'UserController'
        /*
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        }
        */
      });
  }
]);
