var models = models || {};

(function(scope){
	function Item(title, description, price){
		this.title = title;
		this.description = description;
		this.price = price;
		this._customerReviews = [];
	}
	
	Item.prototype.addCustomerReview = function addCustomerReview(CustomerReview){
		this._customerReviews.push(CustomerReview);
	}
	
	Item.prototype.getCustomerReviews = function getCustomerReviews(){
		return this._customerReviews;
	}
	
	scope._Item = Item;
	scope.getItem = function getItem(title, description, price){
		return new Item(title, description, price);
	}
}(models));