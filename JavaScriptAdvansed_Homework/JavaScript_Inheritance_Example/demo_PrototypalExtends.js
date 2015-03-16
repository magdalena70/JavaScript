Object.prototype.extends = function(properties){
	function F(){};
	F.prototype = Object.create(this);
	for(var property in properties){
		F.prototype[property] = properties[property];
	}
	
	F.prototype._super = this;
	return new F();
}

var person = {
	init: function(name){
		if(name == ''){
			throw new Error('Name cannot be empty.');
		}
		this._name = name;
	},
	introduce: function(){
		return this._name;
	}
}

var student = person.extends({
	init: function(name, age){
		this._super.init(name); // this of parent
		if(age == undefined){
			throw new Error('Age cannot be empty.');
		}
		
		if(typeof(age) != 'number'){
			throw new Error('Age must be a number.');
		}
		
		if(age < 1 || age > 100){
			throw new Error('Age must be in range [1...100].');
		}
		this._age = age;
		
		return this;
	},
	introduce: function(){
		return this._super.introduce() + ' age: ' + this._age;
	}
});

var maria = Object.create(student).init('Maria', 22);
console.log(maria.introduce());
//var emptyNameStudent = Object.create(student).init('' , 24);
//console.log(emptyNameStudent);
//var emptyAgeStudent = Object.create(student).init('Peter');
//console.log(emptyAgeStudent);
//var invalidAgeStudent = Object.create(student).init('Georgi', 101);
//console.log(invalidAgeStudent);
var ageAsStrStudent = Object.create(student).init('Georgi', 'str');
console.log(ageAsStrStudent);