app.factory('friendService', function friendService($http, baseUrl) {

	var serviceUrl = baseUrl + '/me/';
	var headers = { 'Authorization': 'Bearer ' + localStorage['accessToken']};
	
	function getFriendRequests(success, error){
		$http({
			method: 'GET',
			url: serviceUrl + 'requests',
			headers: headers,
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	function getOwnFriends(success, error){
		$http({
			method: 'GET',
			url: serviceUrl + 'friends',
			headers: headers,
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	function approveFriendRequest(success, error){
		$http({
			method: 'PUT',
			url: serviceUrl + 'requests/' + localStorage['requestId'] + '?status=approved',
			headers: headers,
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	function rejectFriendRequest(success, error){
		$http({
			method: 'PUT',
			url: serviceUrl + 'requests/' + localStorage['requestId'] + '?status=rejected',
			headers: headers,
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	function sendFriendRequest(newFriendName,success, error){
		$http({
			method: 'POST',
			url: serviceUrl + 'requests/John',// newFriendName
			headers: headers,
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	return{
		getFriendRequests: getFriendRequests,
		getOwnFriends: getOwnFriends,
		approveFriendRequest: approveFriendRequest,
		rejectFriendRequest: rejectFriendRequest,
		sendFriendRequest: sendFriendRequest
	};

});