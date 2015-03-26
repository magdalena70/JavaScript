var models = models || {};

(function(scope){
'use strict'

	function Section(title){
		this._title = title;
		this._items = [];
	}
	
	Section.prototype.addItem = function addItem(item){
		this._items.push(item);
	}
	
	Section.prototype.getItems = function getItems(){
		return this._items;
	}
	var parentSections,
		section,
		sectionHeader,
		ul,
		itemInput,
		itemButton,
		_this;
		
	Section.prototype.addToDom = function addToDom(selector){
		parentSections = document.querySelector(selector);
	
		section = document.createElement('section');
		
		sectionHeader = document.createElement('h2');
		sectionHeader.innerHTML = this._title;
		
		ul = document.createElement('ul');
		ul.setAttribute('class', 'ul');
		
		itemInput = document.createElement('input');
		itemInput.type = 'text';
		itemInput.setAttribute('class', 'itemInput');
		itemInput.placeholder = 'Item\'s title...';
		
		itemButton = document.createElement('button');
		itemButton.setAttribute('class', 'itemButton');
		itemButton.innerHTML = 'Add Item';
		
		section.appendChild(sectionHeader);
		section.appendChild(ul);
		// Add items in ul
		this._items.forEach(function(item){
			item.addToDom(ul);
		});
		
		section.appendChild(itemInput);
		section.appendChild(itemButton);
		
		parentSections.appendChild(section);
		
		_this = this;
		itemButton.addEventListener('click', function(ev){
			var content,
				item,
				ul;
			
			content = this.parentElement.getElementsByClassName('itemInput')[0].value;
			item = scope.getItem(content);
			_this.addItem(item);
			ul = this.parentElement.getElementsByClassName('ul')[0];
			item.addToDom(ul);
		});

		ul.addEventListener('change', function(ev){
			if(ev.target.getAttribute('class') == 'checkbox'){
				if(ev.target.checked){
					ev.target.nextElementSibling.setAttribute('class', 'checked');
				}else{
					ev.target.nextElementSibling.removeAttribute('class');
				}
			}
		});
	}
	
	scope.Section = Section;
	scope.getSection = function getSection(title){
		return new Section(title);
	}
}(models));