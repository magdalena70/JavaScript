app.controller('SocialNetworkController', function($scope, $location, $route, userService, postService, $log){
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
	$scope.posts = [];

	function clearData(){
		$scope.loginData = '';
		$scope.userRegisterData = '';
		$scope.inputName = '';
		$scope.newPostData = '';
	}
	
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
				localStorage['username'] = data.userName;
				localStorage['name'] = data.name;
				localStorage['email'] = data.email;
				//localStorage['gender'] = data.gender;
				clearData();
				$location.path('/user/home');
			}, 
			function (error, status, headers, config) {
				alert(status + ': ' + error.message);
		});
	}
	
	$scope.getUserFullData = function(){
		userService.getUserFullData(function(data, status, headers, config){
				alert('Welcome in profile page!');
				$scope.data = data;
				localStorage["id"] = data.id;
				localStorage["username"] = data.username;
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
	
	$scope.addNewPost = function addNewPost(){
		postService.addNewPost($scope.newPostData, 
			function(data, status, headers, config){
				$scope.data = data;
				localStorage["postId"] = data.id;
				localStorage['postDate'] = data.date;
				$scope.posts.push(data.id);
				//to do
				clearData();
				$location.path('/user/' + userService.getUserName());
				$route.reload();
				getPostById();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.getPostById = function getPostById(){
		postService.getPostById(function(data, status, headers, config){
				$scope.data = data;
				localStorage["postContent"] = data.postContent;
				//to do
				clearData();
				$location.path('/user/' + userService.getUserName());
				$route.reload();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.deletePostById = function deletePostById(){
		postService.deletePostById(function(data, status, headers, config){
				$scope.data = data;
				clearData();
				$location.path('/user/' + userService.getUserName());
				$route.reload();
			},function(error, status, headers, config){
				alert(status + ': ' + error.message);
			});
	}
	
	$scope.searchUsersByName = function(){
		userService.searchUsersByName($scope.inputName, function(data, status, headers, config){
			$scope.allUsersData = data;
			clearData();
		},function(error, status, headers, config){
			alert(status + ': ' + error.message);
		});
	}
	
	$scope.rejectFriendRequest = function (){
		alert('You rejected this friend request! You can accept it later.');
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
	// pagination to do
	$scope.totalItems = 31;
	$scope.currentPage = 1;
	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
	};
	
});