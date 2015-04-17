var app = app || {};

(function(){
	var model = app.models.loadModels("https://api.parse.com/1/classes/");
	var viewModel = app.viewModel.loadViewModel(model);
	viewModel.showAllStudents();
	
	// testing function getAllStudents
	/*model.students.getAllStudents(
		function(data){
			console.log(data);
		},
		function(err){
			console.error(err.responseText);
		}
	);*/
}());