var app = app || {};

(function(){
	var model,
		viewModel;
		
	$('h1').hide();
	$('h1').show(3000);
	$("h1").click(function(){
		$.noty.defaults.killer = true;
        $("#books").animate({
            height: 'toggle'
        });
    });
	$('#showAllBooks').hide();
	$('#showAllBooks').show(5000);
	$('#addBookDiv').hide();
	$('#showAllBooks').on('click', showBooks);
	$('#wrapper').noty({
			text: 'Welcome to our "Books" - REST Service!<br/>View all available books.'
		});
	
	function showBooks(){
		$.noty.defaults.killer = true;
		model = app.models.loadModels("https://api.parse.com/1/classes/");
		viewModel = app.viewModel.loadViewModel(model);
		viewModel.showAllBooks();
		$('#addBookDiv').show(5000);
		$('#showAllBooks').hide(2000);
		noty({
			text: 'Add new book, edit or remove any available.',
		});
	}
	
	// testing function getAllStudents
	/*model.books.getAllBooks(
		function(data){
			console.log(data);
		},
		function(err){
			console.error(err.responseText);
		}
	);*/
}());