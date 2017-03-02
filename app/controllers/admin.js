"use strict";

angular
	.module('app')
	.controller('Admin', 
		[ '$rootScope', '$scope', 'Post', 
		function($rootScope, $scope, Post) {

			$scope.submitPost = (post) => {
				console.log(post);
				console.log($rootScope.api);
				$scope.post = {};
			}

	}]);