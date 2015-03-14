var Person = function (firstName, lastName) {
    
    if (!(this instanceof arguments.callee))
    {
        return new arguments.callee(name, age);
    }

    this.firstName = arguments[0];
    this.lastName = arguments[1];   
}

Object.defineProperty(Person.prototype, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (fullName) {
        var names = fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
        return this.firstName + " " + this.lastName;
    }
});

var person = new Person("Peter", "Jackson");

// Getting values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

// Changing values
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);