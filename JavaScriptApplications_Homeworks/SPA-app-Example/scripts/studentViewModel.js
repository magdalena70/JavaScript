var app = app || {};

app.viewModel = (function(){
	function ViewModel(model){
		this.model = model;
		this.attachEventListener(this);
	}
	
	ViewModel.prototype.showAllStudents = function showAllStudents(){
		var _this = this;
		this.model.students.getAllStudents(
			function(data){
				data.results.forEach(function(student){
					_this.addStudentToDom(student.studentName, student.grade, student.objectId);
				})
				//console.log(data);
			},
			function(err){
				throw new Error(err.responseText);
			}
		);
	}
	
	ViewModel.prototype.addStudent = function addStudent(_thisViewModel){
		var studentName = $('#studentName').val();
		var grade = +$('#grade').val();
		if(studentName && grade){
		_thisViewModel.model.students.postStudent(
			{
				studentName: studentName,
				grade: grade
			},
			function(data){
				_thisViewModel.addStudentToDom(studentName, grade, data.objectId);
				$('#studentName').val('');
				$('#grade').val('');
			},
			function(err){
				throw new Error(err.responseText);
			}
		);
		}else{
			alert('Error - Empty input field!');
			console.log('Error - Empty input field!');
		}
	}
	
	ViewModel.prototype.deleteStudent = function deleteStudent(studentId){
		this.model.students.removeStudent(
			studentId,
			function(data){
				$('#students').find('[studentDiv-Id=' + studentId +']').remove();
			},
			function(err){
				throw new Error(err.responseText);
			});
	}
	
	ViewModel.prototype.attachEventListener = function attachEventListener(a){
		$('#addStudent').click(function(){
			a.addStudent(a);
		});
	}
	
	ViewModel.prototype.addStudentToDom = function addStudentToDom(studentName, grade, studentId){
		var _this = this;
		var studentDiv = $('<div/>')
			.addClass('studentList')
			.attr('studentDiv-Id', studentId)
		var studentName = $('<p/>')
			.text('Name: ' + studentName)
			.appendTo(studentDiv);
		var grade = $('<p/>')
			.text('Grade: ' + grade)
			.appendTo(studentDiv);
		var deleteBtn = $('<button>Delete student</button>')
			.click(function(){
				_this.deleteStudent(studentId);
			})
			.appendTo(studentDiv);
		$('#students').append(studentDiv);
	}
	
	return {
		loadViewModel: function(model){
			return new ViewModel(model);
		}
	}
}());