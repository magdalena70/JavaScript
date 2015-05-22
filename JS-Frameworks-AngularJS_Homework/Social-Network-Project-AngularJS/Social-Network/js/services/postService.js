app.factory('postService', function postService($http, baseUrl) {

	var serviceUrl = baseUrl + '/posts';
	var headers = { 'Authorization': 'Bearer ' + localStorage['accessToken']};
	
	function addNewPost(newPostData, success, error){
        $http({
			method: 'POST',
			url: serviceUrl,
			headers: headers,
			data: {
				"postContent": 'Some text...',//newPostData.postContent
				"username": localStorage['username']
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
			headers: headers,
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
			url: serviceUrl + '/' + localStorage['postId'],
			headers: headers,
			data: {}
		}).success(function (data, status, headers, config) {
            success(data, status, headers(), config);
        }).error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
    }
	
	return {
		addNewPost: addNewPost,
		getPostById: getPostById,
		deletePostById: deletePostById
	};
});