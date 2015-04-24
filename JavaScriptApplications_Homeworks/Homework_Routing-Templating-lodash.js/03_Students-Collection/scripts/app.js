(function(){
'use strict'
	var studentsArr = [
						{"gender":"Male","firstName":"Joe","lastName":"Riley","age":22,"country":"Russia"},
						{"gender":"Female","firstName":"Lois","lastName":"Morgan","age":41,"country":"Bulgaria"},
						{"gender":"Male","firstName":"Roy","lastName":"Wood","age":33,"country":"Russia"},
						{"gender":"Female","firstName":"Diana","lastName":"Freeman","age":40,"country":"Argentina"},
						{"gender":"Female","firstName":"Bonnie","lastName":"Hunter","age":23,"country":"Bulgaria"},
						{"gender":"Male","firstName":"Joe","lastName":"Young","age":16,"country":"Bulgaria"},
						{"gender":"Female","firstName":"Kathryn","lastName":"Murray","age":22,"country":"Indonesia"},
						{"gender":"Male","firstName":"Dennis","lastName":"Woods","age":37,"country":"Bulgaria"},
						{"gender":"Male","firstName":"Billy","lastName":"Patterson","age":24,"country":"Bulgaria"},
						{"gender":"Male","firstName":"Willie","lastName":"Gray","age":42,"country":"China"},
						{"gender":"Male","firstName":"Justin","lastName":"Lawson","age":38,"country":"Bulgaria"},
						{"gender":"Male","firstName":"Ryan","lastName":"Foster","age":24,"country":"Indonesia"},
						{"gender":"Male","firstName":"Eugene","lastName":"Morris","age":37,"country":"Bulgaria"},
						{"gender":"Male","firstName":"Eugene","lastName":"Rivera","age":45,"country":"Philippines"},
						{"gender":"Female","firstName":"Kathleen","lastName":"Hunter","age":28,"country":"Bulgaria"}
					];
					
	// Print all students from studentsArr
	_.forEach(studentsArr, function(student) {
		document.getElementById('allStudentsList')
			.innerHTML += '<li>' + student.firstName + ' ' + student.lastName +
			' from ' + student.country + ' is ' + student.age + ' years old, gender: ' + student.gender + '</li>';
	});				
					
	// Get all students with age between 18 and 24
	_.forEach(studentsArr, function(student) {
		if(student.age > 18 && student.age < 24){
			document.getElementById('studentsByAgeList')
				.innerHTML += '<li>' + student.firstName + ' ' + student.lastName + 
					' from ' + student.country + ' is ' + student.age + ' years old.' + '</li>';
		}
	});

	// Get all students whose first name is alphabetically before their last name
	_.forEach(studentsArr, function(n) {
		if(n.firstName < n.lastName){
			document.getElementById('studentsByNameList')
				.innerHTML += '<li>' + n.firstName + ' ' + n.lastName + 
					' from ' + n.country + ' is ' + n.age + ' years old.' + '</li>';
		}
	});

	// Get only the names of all students from Bulgaria 
	var studentsFromBG = _.filter(studentsArr, function(student){
		return student.country == 'Bulgaria';
	});
	_.forEach(studentsFromBG, function(student) {
		document.getElementById('studentsByCountryList')
				.innerHTML += '<li>' + student.firstName + ' ' + student.lastName + 
					' from ' + student.country + '</li>';
	});

	// Get the last five students
	var lastFiveStudents = _.drop(studentsArr, studentsArr.length - 5);
	_.forEach(lastFiveStudents, function(student) {
		document.getElementById('lastFiveStudentsList')
				.innerHTML += '<li>' + student.firstName + ' ' + student.lastName + 
					' from ' + student.country + ' is ' + student.age + ' years old.' + '</li>';
	});

	// Get the first three students who are not from Bulgaria and are male
	var studentsGenderMaleNotFromBG = _.filter(studentsArr, function(student){
		return (student.gender == 'Male' && student.country != 'Bulgaria');
	});
	var firstThreeStudents = _.dropRight(studentsGenderMaleNotFromBG, studentsGenderMaleNotFromBG.length - 3);
	_.forEach(firstThreeStudents, function(student) {
		document.getElementById('firstThreeStudentsNotFromBG-genderMale-List')
				.innerHTML += '<li>' + student.firstName + ' ' + student.lastName + 
					' from ' + student.country + ' is ' + student.age + ' years old,' + 
					' gender: ' + student.gender + '</li>';
	});
}());