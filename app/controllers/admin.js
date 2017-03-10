"use strict";

angular
	.module('app')
	.controller('Admin', [ '$rootScope', '$scope', 'Post', 
		function($rootScope, $scope, Post) {

			$scope.submitPost = function(post) {
	
				var newPost = new Post;

				newPost.setAttributes(post);

				console.log(newPost);
				// newPost.save().then((response)=> {
				// 	console.log('YAY',response);
				// })
				$scope.post = {};
			}

	}]);