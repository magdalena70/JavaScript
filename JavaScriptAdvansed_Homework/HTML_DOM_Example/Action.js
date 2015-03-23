'using strict'
function myFunction(){
	var body = document.body;
	var wrapper = document.createElement('div');
	wrapper.id = 'wrapper';
	body.appendChild(wrapper);
	var content = new ListModule.Wrapper('List');
	content.addToDom();
}

function addNewSection(){
    var title = document.getElementById("newSection").value;
	var errorMessage = document.getElementById("newSection");
	if(!title){
		errorMessage.placeholder = 'Title cannot be empty.';
		errorMessage.className = 'error';
	}else{
		errorMessage.placeholder = 'Enter Section Title.';
		errorMessage.className = 'title';
		var newSection = new ListModule.Section(title);
		newSection.addToDom();
	}
}

var count = 1;
function addNewItem(){
	var title = document.getElementById("newItem" + count).value;
	var errorMessage = document.getElementById("newItem" + count);
	if(!title){
		errorMessage.placeholder = 'Title cannot be empty.';
		errorMessage.className = 'error';
	}else{
		errorMessage.placeholder = 'Add Item.';
		errorMessage.className = 'title';
		var newItem = new ListModule.Item(title);
		newItem.addToDom();
		count++;
	}
}
