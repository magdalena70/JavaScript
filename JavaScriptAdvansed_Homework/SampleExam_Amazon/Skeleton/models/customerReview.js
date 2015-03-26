var models = models || {};

(function(scope){
	function customerReview(customer, content, rating, createdOn){
		this.customer = customer;
		this.content = content;
		this.rating = rating;
		this.createdOn = createdOn;
	}
	
	scope.getCustomerReview = function getCustomerReview(customer, content, rating, createdOn){
		return new customerReview(customer, content, rating, createdOn);
	}
}(models));