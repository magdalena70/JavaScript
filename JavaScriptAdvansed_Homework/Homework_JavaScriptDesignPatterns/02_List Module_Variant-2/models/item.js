var models = models || {};

(function(scope){
'use strict'

	function Item(content){
		this._content = content;
		this.status = false;
	}
	
	Item.prototype.changeStatus = function changeStatus(){
		this.status = !this.status;
	}
	
	Item.prototype.addToDom = function addToDom(ul){
		var item;
		
		item = document.createElement('li');
		item.innerHTML = '<input type="checkbox" class="checkbox" >';
		item.innerHTML += '<label>' + this._content + '</label>';
		ul.appendChild(item);
	}
	
	scope.Item = Item;
	scope.getItem = function getItem(content){
		return new Item(content);
	}
}(models));