var app = app || {};

app.models = (function(){

	function Models(baseUrl){
			this.baseUrl = baseUrl;
			this.books = new Books(baseUrl);
		}
	
	var Requester = (function(){
		function makeRequest(method, url, data, success, error){
			$.ajax({
				method: method,
				headers: {
					"X-Parse-Application-Id": "QJLRO7Y5wTmODz1ycz69dOoZoXZvzAV7NSfsOdcy",
					"X-Parse-REST-API-Key": "J3xLuhuv9ioEFHZnVoB2VegmNX3vvu9eKfjCYuA9"
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
		
		function putRequest(url, data, success, error){
			makeRequest("PUT", url, data, success, error);
		}
		
		function deleteRequest(url, success, error){
			makeRequest("DELETE", url, null, success, error);
		}
		
		return {
			getRequest: getRequest,
			postRequest: postRequest,
			putRequest: putRequest,
			deleteRequest: deleteRequest
		}		
	}());

	var Books = (function(){
	
		function Books(baseUrl){
			this.serviceUrl = baseUrl + "Book/";
		}
		
		Books.prototype.getAllBooks = function getAllBooks(success, error){
			return Requester.getRequest(this.serviceUrl, success, error);
		}
		
		Books.prototype.postBook = function postBook(book, success, error){
			return Requester.postRequest(this.serviceUrl, book, success, error);
		}
		
		Books.prototype.updateBook = function updateBook(id, book, success, error){
			return Requester.putRequest(this.serviceUrl + id, book, success, error );
		}
		
		Books.prototype.removeBook = function removeBook(id, success, error){
			return Requester.deleteRequest(this.serviceUrl + id, success, error);
		}
		
		return Books;
	}());
	
	return {
		loadModels: function(baseUrl){
			return new Models(baseUrl);
		}
	}
}());