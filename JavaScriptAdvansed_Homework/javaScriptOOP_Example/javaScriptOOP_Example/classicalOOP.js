// empty constructor
function Person(){ };
var gosho = new Person();
gosho.name = "Gosho"; // create property name
gosho.age = 22;
console.log(gosho.name + " is " + gosho.age + " old.");
console.log(gosho);

// constructor classical OOP
function Student(name, age) {
    this._name = name; // private
    this._age = age;    
}
// attaching method to prototype -> no hidden data, but better performance
Student.prototype.
        sayInfo = function studentSayInfo() {
    console.log("My name is " + this._name + ". I am " + this._age + " old.");
};
Student.prototype.
        sayGoodBye = function studentSayGoodBy() {
    console.log("Good Bye!");
};
    


var pesho = new Student("Pesho", 24);
console.log(pesho);
pesho.sayInfo();
pesho.sayGoodBye();
// pesho2 is the same as pesho
var pesho2 = newObject(Student, "Pesho2", 22);
console.log(pesho2);
pesho2.sayInfo();
pesho2.sayGoodBye();


function newObject(func){
    var args = Array.prototype.slice.call(arguments, 1);
    var object = Object.create(func.prototype);
    var result = func.apply(object, args);

    return (typeof result === 'object' && result) || object;
}