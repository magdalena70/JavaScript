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
		.when('/home', {
			templateUrl: 'templates/userHomePage.html',
			controller: 'SocialNetworkController'
		})
		.when('/users/' + localStorage['username'], {
			templateUrl: 'templates/userProfile.html',
			controller: 'SocialNetworkController'
		})
		.when('/profile', {
			templateUrl: 'templates/editProfile.html',
			controller: 'SocialNetworkController'
		})
		.when('/profile/password', {
			templateUrl: 'templates/changePassword.html',
			controller: 'SocialNetworkController'
		})
		.when('/friendsRequests', {
			templateUrl: 'templates/friendsRequests.html',
			controller: 'SocialNetworkController'
		})
		.when('/sendFriendRequest', {
			templateUrl: 'templates/sendFriendRequest.html',
			controller: 'SocialNetworkController'
		})
		.when('/addPost', {
			templateUrl: 'templates/addPostForm.html',
			controller: 'SocialNetworkController'
		})
		.otherwise({redirectTo: '/'})
	});