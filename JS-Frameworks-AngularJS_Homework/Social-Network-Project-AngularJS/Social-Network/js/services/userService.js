'use strict'

app.factory('userService', function userService($http, baseUrl) {
	
    var serviceUrl = baseUrl + '/users';
	
    function login(loginData, success, error){
        $http({
			method: 'POST',
			url: serviceUrl + '/login',
			headers: {},
			data: {
				"userName": loginData.username,
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
				"confirmPassword": userRegisterData.confirmPassword,
				"name": userRegisterData.name,
				"gender": userRegisterData.gender
				}
			}).success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            }).error(function (data, status, headers, config) {
				error(data, status, headers(), config);
			});
    }
	
	function getHeadersAuthorization() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };
	
	function isLoggedIn() {
        return localStorage['accessToken'];
    };
	
	function logout(success, error){
        $http({
			method: 'POST',
			url: serviceUrl + '/logout',
			headers: {Authorization: "Bearer " + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }

	return {
		login: login,
		getHeadersAuthorization: getHeadersAuthorization,
		isLoggedIn: isLoggedIn,
		logout: logout
	};
})