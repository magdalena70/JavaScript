app.factory('postService', function postService($http, baseUrl) {

	var serviceUrl = baseUrl + '/posts';
	
	function addNewPost(newPostData, success, error){
        $http({
			method: 'POST',
			url: serviceUrl,
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {
				"postContent": 'test post content',
				"username": getUserName()
			}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }
	
	function getPostById(success, error){
        $http({
			method: 'GET',
			url: serviceUrl + '/' + localStorage['postId'],
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }
	
	function deletePostById(success, error){
        $http({
			method: 'DELETE',
			url: serviceUrl + '/' + getPostId(),
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }
	
	function getUserName() {
		return localStorage['username'];
	}
	
	function getPostId() {
		return localStorage['postId'];
	}
	
	return {
		addNewPost: addNewPost,
		getPostById: getPostById,
		deletePostById: deletePostById,
		getUserName: getUserName,
		getPostId: getPostId
	};
});