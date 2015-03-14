var PersonPrototype = {
    constructor: function (name){
        this.name = name;
    },
    sayName: function () {
    console.log(this.name);
    }
};

var personPrototype = Object.create(PersonPrototype);
personPrototype.constructor('Maria');
personPrototype.sayName();