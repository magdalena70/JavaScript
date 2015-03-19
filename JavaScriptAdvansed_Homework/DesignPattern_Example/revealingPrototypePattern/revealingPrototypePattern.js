
// constructor
var Calculator = function (name){
    this._name = name;
}

// hidden functions
Calculator.prototype = (function () {
    var result = [];
    function pushResult(action) {
        result.push(action);
    }

    var add, multiply, devide, subtract, printResult;

    add = function (x, y){
        pushResult(x + ' + ' + y + ' = ' + (x + y));
        return x + y;
    }

    multiply = function (x, y) {
        pushResult(x + ' * ' + y + ' = ' + (x * y));
        return x * y;
    }

    devide = function (x, y) {
        pushResult(x + ' / ' + y + ' = ' + (x / y));
        return x / y;
    }
    
    subtract = function (x, y) {
        pushResult(x + ' - ' + y + ' = ' + (x - y));
        return x - y;
    }

    printResult = function () {
        return result;
    }

    return {
        add: add,
        multiply: multiply,
        devide: devide,
        subtract: subtract,
        printResult: printResult
    }
}());

var calculator = new Calculator('My calculator');
console.log(calculator.add(87, 976));
console.log(calculator.printResult());