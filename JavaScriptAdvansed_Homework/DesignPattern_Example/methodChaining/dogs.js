var Dog = (function () {
    function Dog(){
        this._name = 'Big Dog';
        this._color = 'gray';
        this._constructor = 'dog';
    }

    Dog.prototype.setName = function (name){
        this._name = name;
        return this; // required
    }

    Dog.prototype.setColor = function (color) {
        this._color = color;
        return this; // required
    }
    
    Dog.prototype.setAge = function (age) {
        this._age = age;
        return this; // required
    }

    Dog.prototype.toString = function () {
        var result = '';
        result += 'I am a ' + this._color + ' ' + this._constructor + '.My name is ' + this._name + '.';
        if (this._age) {
            result +=  this._age > 1? 'I am ' + this._age + ' years old.': 'I am ' + this._age + ' year old.';
        }

        return result;
    }

    return Dog;
}());

var dog = new Dog()
.setAge(3);
console.log(dog.toString());

var sharo = new Dog()
.setName('Sharo')
.setColor('black')
.setAge(1);
console.log(sharo.toString());

var dogy = {
    init: function (){
        this._name = 'Dogy';
        this._color = 'gray';
        this._constructor = 'puppy';
        return this; // required
    },
    setName: function (name){
        this._name = name;
        return this; // required
    },
    setColor: function (color){
        this._color = color;
        return this; // required
    },
    setAge: function (age) {
    this._age = age;
    return this; // required
    },
    toString: function () {
        var result = '';
        result += 'I am a ' + this._color + ' ' + this._constructor + '.My name is ' + this._name + '.';
        if (this._age) {
            result += this._age > 1? 'I am ' + this._age + ' years old.': 'I am ' + this._age + ' year old.';
        }
        return result;
    }

};
var dogyDog = Object.create(dogy).init(); // default values
console.log(dogyDog.toString());

var pufy = Object.create(dogy).init()
.setName('Pufy')
.setColor('white')
.setAge(1);
console.log(pufy.toString());