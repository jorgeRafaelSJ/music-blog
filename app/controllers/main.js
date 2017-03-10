"use strict";

angular
	.module('app')
	.controller('Main', 
		[ '$rootScope', '$scope', 'Post', 
		function($rootScope, $scope, Post) {
			
			$rootScope.api = (function() {
				return 'http://localhost:3000';
			})()
	}]);