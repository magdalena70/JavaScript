// use IIFE to make private
var Person = (function () {
    var constant = "student";

    function CreatePerson(name){
        // constructor fix
        if (!(this instanceof arguments.callee)) {
            // arguments.callee === StudentFix
            return new arguments.callee(name);
        }
        this._name = name;
        this._type = constant;
        
    }

    //public method
    CreatePerson.prototype.sayHello = function personSayHello(){
        return "Hello! I am " + this._name + " And I am " + constant;
    }

    return CreatePerson;
}());

var person = Person('Maria');
console.log(person);
console.log(person.sayHello());
var noNamePerson = Person();
console.log(noNamePerson);