'use strict'

app.controller('SocialNetworkController', function($scope, $location, $route, userService){
	$scope.username = userService.getUserName();
	/*if (!userService.isLoggedIn()) {
        $location.path('/');
    }*/

	function clearData(){
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
                alert('Hello, ' + data.userName + '!');
                localStorage['accessToken'] = data.access_token;
				localStorage['userName'] = data.userName;
                clearData();
                $location.path('/user/home');
            },
            function (error, status, headers, config) {
			noty({text: status + ': ' + error.responseText});
                alert(status + ': ' + error.message);
        });
    }
	
	$scope.register = function(){
		userService.register($scope.userRegisterData,
			function (data, status, headers, config) {
				$scope.data = data;
				alert('Hello' + data.userName + '!');
				localStorage['accessToken'] = data.access_token;
				localStorage['userName'] = data.userName;
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
	
	$scope.getUserFullData = function(){
		userService.getUserFullData(function(data, status, headers, config){
				$scope.data = data;
				localStorage["id"] = data.id;
				localStorage["userName"] = data.userName;
				localStorage["name"] = data.name;
				localStorage["profileImageData"] = data.profileImageData; // or null
				localStorage["gender"] = data.gender;
				localStorage["coverImageData"] = data.coverImageData; // or null
				localStorage["isFriend"] = data.isFriend; // true or false
				localStorage["hasPendingRequest"] = data.hasPendingRequest; // true or false
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.rejectFriendRequest = function (){
		alert('You rejected this friend request! You can accept it later.');
		//$location.path('/user/friendsRequests');
	}
	
	$scope.logout = function(){
		userService.logout(
			function (data) {
				$scope.data = data;
				alert(data.message + ' GoodBye!');
				clearData();
				clearLocalStorage();
				$route.reload();
				$location.path('/');
			}, 
			function (error, status) {
				if(status == 401){
					clearLocalStorage();
				}
				alert(status + ': ' + error.message);
		});
	}
	
});