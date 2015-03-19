var calculator = (function (){
    // private members
    var result = [];
    function pushResult(action){
        result.push(action);
    }
    
    // public members
    return {
        add: function (x, y) {
            pushResult(x + ' + ' + y + ' = ' + (x + y));
            return x + y;
        },
        multiply: function (x, y) {
            pushResult(x + ' * ' + y + ' = ' + (x * y));
            return x * y;
        },
        devide: function (x, y) {
            pushResult(x + ' / ' + y + ' = ' + (x / y));
            return x / y;
        },
        subtract: function (x, y) {
            pushResult(x + ' - ' + y + ' = ' + (x - y));
            return x - y;
        },
        printResult: function (){
            return result;
        }
    }
}())

console.log(calculator.devide(46, 10));
console.log(calculator.multiply(46, 10));
console.log(calculator.add(46, 10));
console.log(calculator.subtract(46, 10));
console.log(calculator.printResult());