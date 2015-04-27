var app = app || {};

app.allBooksView = (function(){
	function render(controller, selector, data){
		$.get('templates/allBooks.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).html(output);
        })
		.then(
			function(){
				// add eventListener
				$('#addBook').click(function () {
					var title = $('#title').val();
					var author = $('#author').val();
					var isbn = $('#isbn').val();
					controller.addBook('#books', title, author, isbn);
				});
			}
		);
	}
	
	return {
        render: function(controller, selector, data) {
            render(controller, selector, data);
        }
    };
}());