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
	
	function clearLocalStorage(){
		localStorage.clear();
	}

	$scope.login = function(){
        userService.login($scope.loginData,
            function(data, status, headers, config) {
				$scope.data = data;
                alert('Hello, ' + data.userName + '!');
                localStorage['accessToken'] = data.access_token;
				localStorage['username'] = data.userName;
                $location.path('/home');
            },
            function (error, status, headers, config) {
                alert(status + ': ' + error.message);
        });
    }
	
	$scope.register = function(){
		userService.register($scope.userRegisterData,
			function (data, status, headers, config) {
				$scope.data = data;
				alert('Hello' + data.userName + '!');
				localStorage['accessToken'] = data.access_token;
				localStorage['username'] = data.userName;
				localStorage['email'] = data.email;
				$location.path('/home');
			}, 
			function (error, status, headers, config) {
				alert(status + ': ' + error.message);
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
				alert('Welcome in profile page!');
				$scope.data = data;
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
		postService.addNewPost($scope.newPostData, 
			function(data, status, headers, config){
				$scope.data = data;
				localStorage["postId"] = data.id;
				localStorage['postDate'] = data.date;
				$route.reload();
				$location.path('/users/' + $scope.username);
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.getPostById = function getPostById(){
		postService.getPostById(function(data, status, headers, config){
				$scope.data = data;
				localStorage["postContent"] = data.postContent;
				$route.reload();
				$location.path('/users/' + $scope.username);
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.deletePostById = function deletePostById(){
		postService.deletePostById(function(data, status, headers, config){
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
	
	$scope.getFriendRequests = function getFriendRequests(){
		friendService.getFriendRequests(function(data, status, headers, config){
				//to do
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.approveFriendRequest = function approveFriendRequest(){
		friendService.approveFriendRequest(function(data, status, headers, config){
				alert('You approved this friend request!');
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.rejectFriendRequest = function rejectFriendRequest(){
		friendService.rejectFriendRequest(function(data, status, headers, config){
				alert('You rejected this friend request!');
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.sendFriendRequest = function sendFriendRequest(){
		friendService.sendFriendRequest(function(data, status, headers, config){
				alert('You send a friend request!');
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