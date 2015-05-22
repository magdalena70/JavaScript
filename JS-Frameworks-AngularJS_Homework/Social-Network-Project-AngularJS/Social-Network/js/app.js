'use strict';

var app = angular.module('socialNetworkApp', ['ngResource', 'ngRoute', 'ui.bootstrap']);
	app.constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api');
	
	app.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/startPage.html',
			controller: 'SocialNetworkController'
		})
		.when('/login', {
			templateUrl: 'templates/loginForm.html',
			controller: 'SocialNetworkController'
		})
		.when('/register', {
			templateUrl: 'templates/registerForm.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/home', {
			templateUrl: 'templates/userHomePage.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/' + localStorage['username'], {
			templateUrl: 'templates/userProfile.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/editProfile', {
			templateUrl: 'templates/editProfile.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/changePassword', {
			templateUrl: 'templates/changePassword.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/friendsRequests', {
			templateUrl: 'templates/friendsRequests.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/sendFriendRequest', {
			templateUrl: 'templates/sendFriendRequest.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/addPost', {
			templateUrl: 'templates/addPostForm.html',
			controller: 'SocialNetworkController'
		})
		.when('/user/comments', {
			templateUrl: 'templates/comments.html',
			controller: 'SocialNetworkController'
		})
		.otherwise({redirectTo: '/'})
	});