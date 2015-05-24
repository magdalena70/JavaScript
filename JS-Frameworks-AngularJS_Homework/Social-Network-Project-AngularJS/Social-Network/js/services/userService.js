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
	
	function logout(success, error){
        $http({
			method: 'POST',
			url: serviceUrl + '/logout',
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }
	
	function getUserFullData(success, error){
		$http({
			method: 'GET',
			url: serviceUrl + '/' + getUserName(),
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	//to do
	function searchUsersByName(inputName,success, error){
		$http({
			method: 'GET',
			url: serviceUrl + '/search?searchTerm=' + inputName.name,
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	function getGender(){
		if(localStorage['gender'] == 0){
			return 'other';
		}
		if(localStorage['gender'] == 1){
			return 'mail';
		}
		if(localStorage['gender'] == 2){
			return 'femail';
		}
	}
	
	function isLoggedIn() {
        return localStorage['accessToken'];
    }
	
	function hasPendingRequest(){
		if(localStorage["hasPendingRequest"] == 'true'){
			return true;
		}
		if(localStorage["hasPendingRequest"] == 'false'){
			return false;
		}
	}
	
	function getUserName() {
		return localStorage['username'];
	}
	
	function getName(){
		return localStorage['name'];
	}

	function getEmail(){
		return localStorage['email'];
	}
	
	function getCoverImageData(){
		if(localStorage['coverImageData'] == 'null'){
			return 'img/banner1.png';
		}else{
			return localStorage['coverImageData'];
		}
	}
	
	function getProfileImageData(){
		if(localStorage['profileImageData'] == 'null'){
			return 'img/user.png';
		}else{
			return localStorage['profileImageData'];
		}
	}

	return {
		login: login,
		register: register,
		getUserFullData: getUserFullData,
		searchUsersByName: searchUsersByName,
		getUserName: getUserName,
		getName: getName,
		getEmail: getEmail,
		getGender: getGender,
		getCoverImageData: getCoverImageData,
		getProfileImageData: getProfileImageData,
		isLoggedIn: isLoggedIn,
		hasPendingRequest: hasPendingRequest,
		logout: logout
	};
})