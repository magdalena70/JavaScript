
define(['container', 'section'], function(Container, Section){
	var Container =(function(scope){

		function Container(title){
			if(!title){
				throw new Error('Title cannot be empty.');
			}
			
			this._title = title;
			this._sections = [];
		}
		
		Container.prototype.addSection = function addSection(section){
			this._sections.push(section);
		}
		
		Container.prototype.getSections = function getSections(){
			return this._sections;
		}
		
		Container.prototype.addToDom = function addToDom(selector){
			var wrapper,
				container,
				header,
				footer,
				divSections,
				sectionInput,
				sectionButton;
		
			wrapper = document.querySelector(selector);
			
			container = document.createElement('div');
			container.setAttribute('id', 'container');
			
			header = document.createElement('h1');
			header.innerHTML = this._title;
			
			divSections = document.createElement('div');
			divSections.setAttribute('id', 'sections');
			
			footer = document.createElement('footer');
			
			sectionInput = document.createElement('input');
			sectionInput.type = 'text';
			sectionInput.setAttribute('id', 'sectionInput');
			sectionInput.placeholder = 'Section\'s title...';
			
			sectionButton = document.createElement('button');
			sectionButton.setAttribute('id', 'sectionButton');
			sectionButton.innerHTML = 'Add Section';
			
			footer.appendChild(sectionInput);
			footer.appendChild(sectionButton);
			
			container.appendChild(header);
			container.appendChild(divSections);
			// Add sections in divSections
			this._sections.forEach(function(section){
				section.addToDom('#sections');
			});
			
			container.appendChild(footer);
			wrapper.appendChild(container);
			
			_this = this;
			sectionButton.addEventListener('click', function(ev){
				var sectionTitle,
					errorMsg,
					parent,
					section;
				
				errorMsg = document.getElementById('sectionInput');
				sectionTitle = document.getElementById('sectionInput').value;
				if(!sectionTitle){
					errorMsg.placeholder = 'Title cannot be empty.';
					errorMsg.style.backgroundColor = 'red';
				}else{
					errorMsg.placeholder = 'Section\'s title...';
					errorMsg.style.backgroundColor = 'white';
					section = new Section(sectionTitle);
					_this.addSection(section);
					section.addToDom('#sections');
				}
			});
		}
			return Container;
	}(Container))
	return Container;
});
