'use strict';

var app = angular.module('socialNetworkApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/startPage.html',
			controller: 'SocialNetworkController'
		});
		$routeProvider.when('/login', {
			test: 'Login',
			templateUrl: 'templates/loginForm.html',
			controller: 'SocialNetworkController'
		});
		$routeProvider.when('/register', {
			test: 'Register',
			templateUrl: 'templates/registerForm.html',
			controller: 'SocialNetworkController'
		});
	});