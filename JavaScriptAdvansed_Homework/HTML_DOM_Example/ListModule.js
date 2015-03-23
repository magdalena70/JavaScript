
var ListModule = (function(){
	Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
	}

	var ListModuleElement = (function(){
		var ListModuleElement = function ListModuleElement(title){
			this.setTitle(title);
		}
		
		ListModuleElement.prototype.getTitle = function(){
			return this._title;
		}
		
		ListModuleElement.prototype.setTitle = function(title){
			if(!title){
				throw new ReferenceError('Title cannot be empty.');
			}
			
			this._title = title;
			return this;
		}
		
		return ListModuleElement;
	}());
	
	var Wrapper = (function(){
		var Wrapper = function Wrapper(title, section){
			ListModuleElement.call(this, title);
			this.setSection(section);
		}
		
		Wrapper.extends(ListModuleElement);
		Wrapper.prototype.getSection = function(){
			return this._section;
		}
		
		Wrapper.prototype.setSection = function(section){
			this._section = section;
			return this;
		}
		
		Wrapper.prototype.addSection = function(section){
			this._section.push(section);
		}
		
		Wrapper.prototype.addToDom = function(){
			var target = document.getElementById('wrapper');
			
			var header = document.createElement('h1');
			header.innerHTML = this.getTitle();
			
			var divElementWrapper = document.createElement('div');
			divElementWrapper.id = 'list';
			divElementWrapper.appendChild(header);
			
			var input = document.createElement('input');
			input.type = 'text';
			input.id = 'newSection';
			input.placeholder = 'Enter Section Title';
			
			var divElementButton = document.createElement('div');
			divElementButton.className = 'buttonDiv';
			divElementButton.innerHTML = '<button onclick="addNewSection()">Add New Section</button>';
			divElementButton.appendChild(input);
			
            target.appendChild(divElementWrapper);
			divElementWrapper.appendChild(divElementButton);
		}
		
		return Wrapper;
	}());
	
	var Section = (function(){
		var count = 0;
		var Section = function Section(title, item, id){
			ListModuleElement.call(this, title);
			this.setItem(item);
			count++;
			this._id = 'newSection' + count;
		}
		
		Section.extends(ListModuleElement);
		Section.prototype.getItem = function(){
			return this._item;
		}
		
		Section.prototype.setItem = function(item){
			this,_item = item;
			return this;
		}
		
		Section.prototype.addToDom = function(){
			var target = document.getElementById('list');
			var divElementSection = document.createElement('div');
			divElementSection.id = this._id;
			divElementSection.className = 'divSection';
			
			var header = document.createElement('h2');
			header.innerHTML = this.getTitle();
			divElementSection.appendChild(header);
			
			var input = document.createElement('input');
			input.type = 'text';
			input.id = 'newItem' + count;
			input.placeholder = 'Add Item';
			
			var divElementButton = document.createElement('div');
			divElementButton.className = 'buttonDiv';
			divElementButton.innerHTML = '<button onclick="addNewItem()">Add New Item</button>';
			
			divElementButton.appendChild(input);
			divElementSection.appendChild(divElementButton);
			target.appendChild(divElementSection);
		}
		
		return Section;
	}());
	
	var Item = (function(){
		var count = 0;
		var Item = function Item(title){
			ListModuleElement.call(this, title);
			count++;
			this._id = 'item' + count;
		}
		
		Item.extends(ListModuleElement);
		
		var countSection = 1;
		Item.prototype.addToDom = function(){
			var targetId = 'newSection' + countSection;
			var target = document.getElementById(targetId);
			var divItem = document.createElement('div');
			
			var input = document.createElement('input');
			input.type = 'checkbox';
			input.id = this._id;
			
			var label = document.createElement('label');
			label.innerHTML = this._title;
			label.htmlFor = this._id;
			
			divItem.appendChild(input);
			divItem.appendChild(label);
			target.appendChild(divItem);
			
			countSection++;
		}
		
		return Item;
	}());
	
	return{
		ListModuleElement: ListModuleElement,
		Wrapper: Wrapper,
		Section: Section,
		Item: Item
	}
}());