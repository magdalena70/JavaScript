'use strict'

app.controller('SocialNetworkController', function($scope, $location, $route, userService){
	var clearData = function clearData(){
		$scope.loginData = '';
		$scope.userRegisterData = '';
	}
	
	function clearLocalStorage(){
		return localStorage.clear();
	}

	$scope.login = function(){
        userService.login($scope.loginData,
            function(data, status, headers, config) {
				$scope.data = data;
                alert("Successful Login!");
                localStorage['accessToken'] = data.access_token;
				localStorage['userName'] = data.userName;
                clearData();
                $location.path('/user/home');
            },
            function (error, status, headers, config) {
                alert(status + ': ' + error.message)
        });
    }
	
	$scope.register = function(){
		userService.register($scope.userRegisterData,
			function (data, status, headers, config) {
				$scope.data = data;
				alert(data.userName);
				localStorage['accessToken'] = data.access_token;
				localStorage['username'] = data.userName;
				localStorage['name'] = data.name;
				localStorage['email'] = data.email;
				localStorage['gender'] = data.gender;
				clearData();
				$location.path('/user/home');
			}, 
			function (error, status, headers, config) {
				alert(status + ': ' + error.message);
		});
	}
	
	$scope.logout = function(){
		userService.logout(
			function () {
				alert('GoodBye');
				clearLocalStorage();
				$route.reload();
				$location.path('/');
			}, 
			function (error, status) {
				alert(status + ': ' + error.message);
		});
	}
	
});