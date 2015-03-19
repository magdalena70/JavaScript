function Engin(name) {
    this._name = name;
}

function Calculator(name) {
    Engin.call(this, name);
}

Calculator.prototype = Object.create(Engin.prototype);
Calculator.prototype.constructor = Calculator;

Calculator.prototype = {
    add: function (x, y) {
        return x + y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    devide: function (x, y) {
        return x / y;
    },
    subtract: function (x, y) {
        return x - y;
    }
}

var calculator = new Calculator('My calculator');
console.log(calculator);
console.log(calculator.add(34, 759));