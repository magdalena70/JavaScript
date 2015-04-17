var app = app || {};

app.models = (function(){

	function Models(baseUrl){
			this.baseUrl = baseUrl;
			this.students = new Students(baseUrl);
		}
	
	var Requester = (function(){
		function makeRequest(method, url, data, success, error){
			$.ajax({
				method: method,
				headers: {
					"X-Parse-Application-Id": "36J2YHMq4QujRwVUGTwDtls1wWUN7wJpYKl9b5Ql",
					"X-Parse-REST-API-Key": "fLroLNrq5aw4ocq2gkEgPvVbDSf4D2Bnm2omkZkz"
				},
				url: url,
				contentType: "application/json",
				data: JSON.stringify(data),
				success: success,
				error: error
			})
		}
	
		function getRequest(url, success, error){
			makeRequest("GET", url, null, success, error);
		}
		
		function postRequest(url, data, success, error){
			makeRequest("POST", url, data, success, error);
		}
		
		function deleteRequest(url, success, error){
			makeRequest("DELETE", url, null, success, error);
		}
		
		return {
			getRequest: getRequest,
			postRequest: postRequest,
			deleteRequest: deleteRequest
		}		
	}());

	var Students = (function(){
	
		function Students(baseUrl){
			this.serviceUrl = baseUrl + "Student/";
		}
		
		Students.prototype.getAllStudents = function getAllStudents(success, error){
			return Requester.getRequest(this.serviceUrl, success, error);
		}
		
		Students.prototype.postStudent = function postStudent(student, success, error){
			return Requester.postRequest(this.serviceUrl, student, success, error);
		}
		
		Students.prototype.removeStudent = function removeStudent(id, success, error){
			return Requester.deleteRequest(this.serviceUrl + id, success, error);
		}
		
		return Students;
	}());
	
	return {
		loadModels: function(baseUrl){
			return new Models(baseUrl);
		}
	}
}());