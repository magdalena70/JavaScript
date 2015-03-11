// IIFE
var school = (function () {
    var students = [];

    function addStudent(name, grade){
        students.push(name, grade);
    }

    function getStudents() {
        return students;
    }
    
    // module
    return {
        aS: addStudent,
        gS: getStudents
    };
})();

school.aS("Ivan Ivanov", 6);
school.aS("Petar Petrov", 5);
school.aS("Vasil Vasilev", 3);
console.log(school.gS());