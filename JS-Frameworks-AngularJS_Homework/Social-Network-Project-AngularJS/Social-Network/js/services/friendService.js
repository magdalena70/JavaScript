app.factory('friendService', function friendService($http, baseUrl) {

	var serviceUrl = baseUrl + '/me/';
	
	function getFriendRequests(success, error){
		$http({
			method: 'GET',
			url: serviceUrl + 'requests',
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
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
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
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
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
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
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	//to do
	function sendFriendRequest(newFriendName,success, error){
		$http({
			method: 'POST',
			url: serviceUrl + 'requests/someName',// newFriendName
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}
	
	function getRequestFromGender(){
		if(localStorage['requestFromGender'] == 0 || localStorage['requestFromGender'] == '0'){
			return 'other';
		}
		if(localStorage['requestFromGender'] == 1){
			return 'mail';
		}
		if(localStorage['requestFromGender'] == 2){
			return 'femail';
		}
	}
	
	return{
		getFriendRequests: getFriendRequests,
		getOwnFriends: getOwnFriends,
		approveFriendRequest: approveFriendRequest,
		rejectFriendRequest: rejectFriendRequest,
		sendFriendRequest: sendFriendRequest,
		getRequestFromGender: getRequestFromGender
	};

});