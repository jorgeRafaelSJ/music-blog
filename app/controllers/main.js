"use strict";

angular
	.module('app')
	.controller('Main', 
		[ '$rootScope', '$scope', 'Post', 
		function($rootScope, $scope, Post) {
			
			$rootScope.api = (() => {
				return 'http://localhost:3000';
			})()

			$scope.submitPost = (post) => {
				console.log(post);
			}

	}]);