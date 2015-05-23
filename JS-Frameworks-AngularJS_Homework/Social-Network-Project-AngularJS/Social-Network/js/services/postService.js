app.factory('postService', function postService($http, baseUrl) {

	var serviceUrl = baseUrl + '/posts';
	
	function addNewPost(postContentData, success, error){
        $http({
			method: 'POST',
			url: serviceUrl,
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
			data: {
				"postContent": 'tintiri mintiri..',//postContentData.postContent,
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
			url: serviceUrl + '/' + localStorage['postId'],
			headers: { 'Authorization': 'Bearer ' + localStorage['accessToken']},
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