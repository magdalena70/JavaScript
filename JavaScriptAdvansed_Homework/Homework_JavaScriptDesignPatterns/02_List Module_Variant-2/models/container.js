var models = models || {};

(function(scope){
'use strict'

	function Container(title){
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
			sectionButton,
			_this;
	
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
				section;
			sectionTitle = document.getElementById('sectionInput').value;
			section = scope.getSection(sectionTitle);
			_this.addSection(section);
			section.addToDom('#sections');
		});
	}
	
	scope.Container = Container;
	scope.getContainer = function getContainer(title){
		return new Container(title);
	}
}(models))