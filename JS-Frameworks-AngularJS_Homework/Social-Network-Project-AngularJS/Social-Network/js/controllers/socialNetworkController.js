app.controller('SocialNetworkController', function($scope, $location, $route, userService, postService, friendService, $log){

	$scope.username = userService.getUserName();
	$scope.id = localStorage["id"];
	$scope.name = userService.getName();
	$scope.email = userService.getEmail();
	$scope.profileImageData = userService.getProfileImageData(); // or null
	$scope.gender = userService.getGender();
	$scope.coverImageData = userService.getCoverImageData(); // or null
	
	$scope.isFriend = localStorage["isFriend"]; // true or false
	$scope.hasPendingRequest = userService.hasPendingRequest(); // true or false
	$scope.isLoggedIn = userService.isLoggedIn();
	
	$scope.postContent = localStorage['postContent'];
	$scope.postDate = localStorage['postDate'];
	$scope.author = localStorage['author'];
	
	function clearLocalStorage(){
		localStorage.clear();
	}
	
	function clearInputData(){
		$scope.loginData = '';
		$scope.userRegisterData = '';
		$scope.postContentData = '';
	}

	$scope.login = function(){
        userService.login($scope.loginData,
            function(data, status, headers, config) {
				$scope.data = data;
                alert('Hello, ' + data.userName + '!');
                localStorage['accessToken'] = data.access_token;
				localStorage['username'] = data.userName;
				clearInputData();
                $location.path('/home');
            },
            function (error, status, headers, config) {
				angular.forEach(error, function(value, key) {
					alert(key + '--> ' + value);					
				});
				clearInputData();
        });
    }
	
	$scope.register = function(){
		userService.register($scope.userRegisterData,
			function (data, status, headers, config) {
				$scope.data = data;
				alert('Hello, ' + data.userName + '!');
				localStorage['accessToken'] = data.access_token;
				localStorage['username'] = data.userName;
				localStorage['email'] = data.email;
				clearInputData();
				$location.path('/home');
			}, 
			function (error, status, headers, config) {
				alert(status + ': ' + error.message)
				angular.forEach(error.modelState, function(value, key) {
					alert(key + '--> ' + value);					
				});
				clearInputData();
		});
	}
	
	$scope.logout = function(){
		userService.logout(
			function (data) {
				$scope.data = data;
				alert(data.message + ' GoodBye!');
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
	
	$scope.getUserFullData = function(){
		userService.getUserFullData(function(data, status, headers, config){
				$location.path('/home');
				$location.path('/users/' + localStorage.username);
				$scope.data = data;
				localStorage['username'] = $scope.username;
				localStorage["userId"] = data.id;
				localStorage["name"] = data.name;
				localStorage["profileImageData"] = data.profileImageData; // or null
				localStorage["gender"] = data.gender;
				localStorage["coverImageData"] = data.coverImageData; // or null
				localStorage["isFriend"] = data.isFriend; // true or false
				localStorage["hasPendingRequest"] = data.hasPendingRequest; // true or false
				$route.reload();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	// posts
	
	$scope.addNewPost = function addNewPost(){
		var postContent = document.getElementById('postInputContent').value;
		postService.addNewPost(postContent,
			function(data, status, headers, config){
				localStorage["postId"] = data.id;
				localStorage['postDate'] = data.date;
				localStorage['author'] = $scope.username;
				$location.path('/users/' + localStorage.username);
				$route.reload();
				clearInputData();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message)
				angular.forEach(error.modelState, function(value, key) {
					alert(key + '--> ' + value);					
				});
				clearInputData();
			});
	}
	
	$scope.getPostById = function getPostById(){
		postService.getPostById(function(data, status, headers, config){
				localStorage["postContent"] = data.postContent;
				$location.path('/users/' + localStorage.username);
				$route.reload();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.deletePostById = function deletePostById(){
		postService.deletePostById(function(data, status, headers, config){
				alert('removed successfully');
				localStorage['postContent'] = '';
				localStorage["postId"] = '';
				localStorage['postDate'] = '';
				localStorage['author'] = '';
				$location.path('/users/' + $scope.username);
				$route.reload();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	//friends
	$scope.getOwnFriends = function getOwnFriends(){
		friendService.getOwnFriends(function(data, status, headers, config){
				//to do
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.requestData = {
		requestId: localStorage['requestId'],
		requestStatus: localStorage['requestStatus'],
		requestFromName: localStorage['requestFromName'],
		requestFromImage: localStorage['requestFromImage'],
		requestFromGender: localStorage['requestStatus'],
		requestFromUsername: localStorage['requestFromUsername']
	};
	
	$scope.getFriendRequests = function getFriendRequests(){
		friendService.getFriendRequests(function(data, status, headers, config){
				$scope.data = data;
				angular.forEach(data, function(value, key){
					var requestData = value;
					alert('You have friend request from: ' + requestData.user.name);
					localStorage['requestId'] = requestData.id;
					localStorage['requestStatus'] = requestData.status;
					localStorage['requestFromName'] = requestData.user.name;
					localStorage['requestFromImage'] = requestData.user.profileImageData;
					localStorage['requestFromGender'] = requestData.user.gender;
					localStorage['requestFromUsername'] = requestData.user.username;
					$route.reload();
				});
			},function(error, status, headers, config){
				angular.forEach(error, function(value, key) {
					alert(key + '--> ' + value);					
				});
			});
	}
	
	$scope.approveFriendRequest = function approveFriendRequest(){
		friendService.approveFriendRequest(function(data, status, headers, config){
				alert('You approved this friend request!');
				console.log(data);
				localStorage['hasPendingRequest'] = 'false';
				if(localStorage['requestStatus']){
					localStorage['requestStatus'] = 'approved';
				}
				$location.path('/users/' + localStorage.username);
				$route.reload();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.rejectFriendRequest = function rejectFriendRequest(){
		friendService.rejectFriendRequest(function(data, status, headers, config){
				alert('You rejected this friend request!');
				$location.path('/users/' + localStorage.username);
				$route.reload();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	//to do
	$scope.sendFriendRequest = function sendFriendRequest(){
		friendService.sendFriendRequest(function(data, status, headers, config){
				alert('You send a friend request!');
				clearInputData();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
//-------------------------------------------------------------------------------------------//	
	// to do
	$scope.searchUsersByName = function(){
		userService.searchUsersByName($scope.inputName, 
			function(data, status, headers, config){
			$scope.allUsersData = data;
		},function(error, status, headers, config){
			alert(status + ': ' + error.message);
		});
	}
	
	// pagination - to do
	$scope.totalItems = 31;
	$scope.currentPage = 1;
	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
	};
	
});