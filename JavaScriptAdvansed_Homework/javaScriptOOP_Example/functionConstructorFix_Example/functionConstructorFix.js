// constructor fix by John Resig
function StudentFix(name, age){
    // if call Student without new -> call it with new
    if (!(this instanceof arguments.callee)) { // arguments.callee === StudentFix
        return new arguments.callee(name, age); // create new instance -> new Studentfix(name, age)
    }

    this._name = name;
    this._age = age;
}

var studentFix = StudentFix("Maria Petrova", 25);
console.log(studentFix);

// constructor
function Student(name, age) {
    this._name = name; 
    this._age = age;
}

var student = Student("Maria Petrova", 25);
console.log(student); // return undefined
var student = new Student("Maria Petrova", 25); // have to use new
console.log(student);