
define(['container','Section'], function(Container, Section){
	var Item = (function(scope){

		function Item(content){	
			if(!content){
				throw new Error('Content cannot be empty.');
			}
		
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
			return Item;
	}(Container));
	return Item;
});