
var personPrototype = {
	init: function(name, age){
		this._name = name;
		this._age = age;
	},
	introduce: function(){
		return 'Name: ' + this._name + ' Age: ' + this._age;
	}
}

var studentPrototype = Object.create(personPrototype);
studentPrototype.init = function(name, age, grade){
	personPrototype.init.apply(this, [name, age]);
	this._grade = grade;
}

studentPrototype.introduce = function(){
		return personPrototype.introduce.call(this) + ' Grade: ' + this._grade + Object.getPrototypeOf(this).toString();
	}
		
var person = Object.create(personPrototype);
person.init('Maria', 29);
var student = Object.create(studentPrototype);
student.init('Silvia', 24, 4);

console.log(Object.getPrototypeOf(student) === studentPrototype); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)) === personPrototype); // true
console.log(Object.getPrototypeOf(person) === personPrototype); // true

