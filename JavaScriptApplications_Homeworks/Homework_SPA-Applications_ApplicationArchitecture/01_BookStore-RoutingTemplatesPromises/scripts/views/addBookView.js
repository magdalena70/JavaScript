var app = app || {};

app.addBookView = (function(){
	function render(controller, selector, data){
		$.get('templates/addBook.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).html(output);
        })
		// if cuccess
		.then(
			function(){
				// clear input fields value
				$('#title').val('');
				$('#author').val('');
				$('#isbn').val('');
			}
		);
	}
	
	return {
		render: function(selector, data) {
            render(selector, data);
        }
	};
}());