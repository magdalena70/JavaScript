Function.prototype.extends = function(parent){
	if(!Object.create){
		Object.create = function(proto){
			function F(){};
			F.prototype = proto;
			return new F();
		};
	};
	
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
}

function Person(name){
	this._name = name;
}

Person.prototype.introduce = function(){
	return 'My name is ' + this._name;
}

function Student(name, age){
	Person.call(this, name);
	this._age = age;
}

Student.extends(Person);

Student.prototype.introduce = function(){
	return Person.prototype.introduce.call(this) + 'I am ' + this._age + ' old.';
}

var pesho = new Person('Peter');
var maria = new Student('Maria', 22);