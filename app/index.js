'use strict';

angular.module('app', ['ui.router'])
	
	.config([    
		'$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    	
    function(
    	$stateProvider,
    	$urlRouterProvider,
    	$locationProvider,
    	$httpProvider){

    	$stateProvider
    	  .state('home', {
    	    url: "/",
    	    templateUrl: '../views/home.html',
    	    controller: 'Home',
    	    controllerAs: 'vm'
    	  })
          .state('admin', {
            url: "/admin",
            templateUrl: '../views/admin.html',
            controller: "admin",
            controllerAs: 'vm'
          });

    	$urlRouterProvider.otherwise('/');

    	$locationProvider.html5Mode({
    	  enabled: true,
    	  requireBase: false
    	});
    }])