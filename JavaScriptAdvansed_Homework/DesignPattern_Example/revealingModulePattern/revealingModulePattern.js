var calculator = (function () {
    // hidden functions
    var result = [];
    function pushResult(action) {
        result.push(action);
    }
    
    function add(x, y) {
        pushResult(x + ' + ' + y + ' = ' + (x + y));
        return x + y;
    }
    
    function multiply(x, y) {
        pushResult(x + ' * ' + y + ' = ' + (x * y));
        return x * y;
    }
    
    function devide(x, y) {
        pushResult(x + ' / ' + y + ' = ' + (x / y));
        return x / y;
    }
    
    function subtract(x, y) {
        pushResult(x + ' - ' + y + ' = ' + (x - y));
        return x - y;
    }

    function printResult() {
        return result;
    }
    
    // use reference
    return {
        add: add,
        multiply: multiply,
        devide: devide,
        subtract: subtract,
        printResult: printResult
    }
}());

console.log(calculator.devide(46, 10));
console.log(calculator.multiply(46, 10));
console.log(calculator.add(46, 10));
console.log(calculator.subtract(46, 10));
console.log(calculator.printResult());