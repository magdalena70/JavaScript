'use strict'

app.factory('userService', function userService($http, baseUrl) {
	
    var serviceUrl = baseUrl + '/users';
	
    function login(loginData, success, error){
        $http({
			method: 'POST',
			url: serviceUrl + '/login',
			headers: {},
			data: {
				"username": loginData.username,
				"password": loginData.userPassword
			}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }
	
	function register(userRegisterData, success, error) {
        $http({
			method: 'POST',
			url: serviceUrl + '/register',
			headers: {},
			data: {
				"username": userRegisterData.username,
				"password": userRegisterData.userPassword,
				"confirmPassword": userRegisterData.confirmUserPassword,
				"name": userRegisterData.name,
				"email": userRegisterData.email,
				"gender": userRegisterData.gender
				}
			}).success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            }).error(function (data, status, headers, config) {
				error(data, status, headers(), config);
			});
    }
	
	function getUserFullData(success, error){
		$http({
			method: 'GET',
			url: serviceUrl + '/' + localStorage['userName'],
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	function isLoggedIn() {
        return localStorage['accessToken'];
    }
	
	function getUserName() {
		return localStorage['userName'];
	}	
	
	function logout(success, error){
        $http({
			method: 'POST',
			url: serviceUrl + '/logout',
			headers:{ 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }

	return {
		login: login,
		register: register,
		getUserFullData: getUserFullData,
		getUserName: getUserName,
		isLoggedIn: isLoggedIn,
		logout: logout
	};
})