"use strict";

angular
	.module('app')
	.controller('Main', [ '$rootScope', function($rootScope) {
			
		$rootScope.api = (() => {
			return 'http://localhost:3000';
		})()
	}]);