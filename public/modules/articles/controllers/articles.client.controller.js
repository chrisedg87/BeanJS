'use strict';

// Articles controller
angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Articles',
	function($scope, $routeParams, $location, Articles) {
		//$scope.authentication = Authentication;

		// Create new Article
		$scope.create = function() {
			// Create new Article object
			var article = new Articles ({
				name: this.name,
				content: this.content
			});

			// Redirect after save
			article.$save(function(response) {
				$location.path('articles/' + response.id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Article
		$scope.remove = function(article) {
			if ( article ) { 
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles [i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		// Update existing Article
		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				console.log('update ok');
				$location.path('articles/' + article.id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Articles
		$scope.find = function() {
			console.log('Article find');
			$scope.articles = Articles.query();
		};

		// Find existing Article
		$scope.findOne = function() {
			$scope.article = Articles.get({ 
				articleId: $routeParams.articleId
			});
		};
	}
]);