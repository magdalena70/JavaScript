var world = world || {};

(function (world) {
    function Person(name, age) {
        this._name = name;
        this._age = age;
        this._constructor = 'Person';
    }

    Person.prototype.sayHello = function () {
        return 'Hello! I am ' + this._name + ', ' + this._age + ' old. I am a ' + this._constructor + '.';
    }

    world.Person = Person;
}(world));

var person = new world.Person('Ivan', 34);
console.log(person);
console.log(person.sayHello());
