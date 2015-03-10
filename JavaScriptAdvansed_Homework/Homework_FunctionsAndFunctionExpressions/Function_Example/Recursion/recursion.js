'use strict'
// function declaration
function factorial(n){
    console.log("n = ", n);
    // bottom
    if (n == 0) {
        return 1;
    }
    
    // function calls itself - direct recursion
    return factorial(n - 1) * n;
}

console.log("factorial(5) = " + factorial(5));

var variableFact = factorial;
console.log("variableFact(5) = " + variableFact(5));

var f = variableFact;
variableFact = 5; // change function to integer 
console.log("f(" + variableFact + ") = " + f(variableFact));

//function expression
var expressionFact = function (n){
    if (n == 0) {
        return 1;
    }
    
    return expressionFact(n - 1) * n;
}

console.log("expressionFact(5) = " + expressionFact(5));
