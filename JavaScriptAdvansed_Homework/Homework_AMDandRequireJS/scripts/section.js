define(['container', 'section', 'item'], function(Container, Section, Item){

/*define('container', function(Container){*/
	var Section = (function(scope){
		function Section(title){
			if(!title){
				throw new Error('Title cannot be empty.');
			}
			
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
			currentSection;
			
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
			
			currentSection = this;
			itemButton.addEventListener('click', function(ev){
				var content,
					item,
					p,
					parent
					ul;
				
				errorMsg = this.parentElement.getElementsByClassName('itemInput')[0];
				content = this.parentElement.getElementsByClassName('itemInput')[0].value;
				if(!content){
					errorMsg.placeholder = 'Content cannot be empty.';
					errorMsg.style.backgroundColor = 'red';
				}else{
					errorMsg.placeholder = 'Item\'s title...';
					errorMsg.style.backgroundColor = 'white';
					item = new Item(content);
					currentSection.addItem(item);
					ul = this.parentElement.getElementsByClassName('ul')[0];
					item.addToDom(ul);
				}
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
			return Section;
	}(Container));
	return Section;
});
/*});*/