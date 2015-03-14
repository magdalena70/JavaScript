// constructor
function Person(name, age) {
    this._name = name; // private
    this._age = age;
}

// attaching method to prototype
Person.prototype.sayHello = function (){
    return "Hello! I'm " + this._age + " old.";
}

// function scope
var person = new Person("Ivan Petov", 32);
console.log(person);
console.log(person._name + " said " + person.sayHello());

// global scope
var personSayHello = person.sayHello; // safe value of function
console.log(personSayHello()); // this._age is undefined
console.log(personSayHello.call(person)); // this_age is 32
console.log(personSayHello() === personSayHello.call(person)); // return false

//------------------------------//

function someInfoAboutObject(){
    return "I am " + this.name;
}

var objPerson = {
    name: "Vasil",
    info: someInfoAboutObject
};

console.log(objPerson.info()); // return I am Vasil
console.log(someInfoAboutObject.call(objPerson)); // return I am Vasil
console.log(objPerson.info() === someInfoAboutObject.call(objPerson)); // return true

//-----------------------------//
// cashe this -> make a closure
function Student(name){
    var thisOfStudent = this; // create closure holding this
    thisOfStudent._name = name;
    thisOfStudent.getName = function studentName(){
        return thisOfStudent._name;
    }
}

var student = new Student("Georgi");
var getStudentName = student.getName; // safe value of function
console.log(getStudentName()); // return Georgi
console.log(student.getName());