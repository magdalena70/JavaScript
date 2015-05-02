var app = app || {};

app.ajaxRequester = (function(){
	function AjaxRequester(){
			this.get = makeGetRequest; // return promise
			this.post = makePostRequest; // return promise
			this.put = makePutRequest; // return promise
			this.delete = makeDeleteRequest; // return promise
	}
	
	var makeRequest = function(url, method, data, headers){
		// use promise
		var defer = Q.defer();
		$.ajax({
			method: method,
			headers: headers,
			url: url,
			contentType: 'application/json',
            data: JSON.stringify(data) || undefined,
			success: function(data){
				defer.resolve(data);
			},
			error: function(error){
				defer.reject(error);
			}
		});
		return defer.promise;
	}
	
	var makeGetRequest = function(url, headers){
		return makeRequest(url, "GET", null, headers);
	}
	
	var makePostRequest = function(url, data, headers){
		return makeRequest(url, "POST", data, headers);
	}
	
	var makePutRequest = function(url, data, headers){
		return makeRequest(url, "PUT", data, headers);
	}
	
	var makeDeleteRequest = function(url, headers){
		return makeRequest(url, "DELETE", null, headers);
	}
	
	return {
		get: function(){
			return new AjaxRequester();
		}
	};
}());