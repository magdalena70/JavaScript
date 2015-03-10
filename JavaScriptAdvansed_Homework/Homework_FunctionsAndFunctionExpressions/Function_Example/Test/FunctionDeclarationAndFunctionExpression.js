function solveGlabalScope() {
    
    testNestedFunctions([75, 34, 9, 10, 0, 10]);
    //testNestedFunctions([150.35, 67, 1.3, 78]);
    //console.log("", testNestedFunctions);
    //console.log(testNestedFunctions.toString());
    
    function testNestedFunctions(input) {
        
        var output = input[0];
        var i;
        var length = input.length;
        for (i = 0; i < length; i += 1) {
            output = Math.max(output, input[i]);
        }
        
        // function declaration - callback
        (function () {
            console.log("I'm CallBack Function and return parent's arguments:\n", arguments);
        })(input);
        
        console.log("max value: " + output.toFixed(2));
        
        // function declaration
        function orderByAscending(a, b) {
            return a - b;
        }
        
        // function declaration
        function orderByDecsending(a, b) {
            return b - a;
        }
        
        console.log("Ordered By Ascending: " + 
        input.sort(orderByAscending));
        
        // function expression
        var orderedBack_FuncAsExpression = function (a, b) { return a + b; };
        console.log("Function as expression orderedBack: " + 
        input.sort(orderedBack_FuncAsExpression)); // returns its value
        console.log("Function as expression orderedBack again: " + 
        input.sort(orderedBack_FuncAsExpression)); // expression changes its value
        
        console.log("Ordered By Decsending: " + 
        input.sort(orderByDecsending));
        
        // variable accepts the return value of the function
        var orderedBack_FuncAsVariable = input.sort(function (a, b) { return a + b; });
        console.log("Variable orderedBack: " + 
        orderedBack_FuncAsVariable); // returns its value
        console.log("Variable orderedBack again: " + 
        orderedBack_FuncAsVariable); // variable does not change its value
        console.log("Variable orderedBack once again: " + 
        orderedBack_FuncAsVariable); // variable does not change its value
        
        console.log("Function as expression orderedBack again: " + 
        input.sort(orderedBack_FuncAsExpression)); // expression changes its value
        console.log("Function as expression orderedBack once again: " + 
        input.sort(orderedBack_FuncAsExpression)); // expression changes its value

    }
    
    
    // --------function declaration---------
    //  - functions with the same names are overwritten
    if (true) {
        function createFunction() {
            console.log("I am If-Func created by declaration.");
        } // create function
    }
    else {
        function createFunction() {
            console.log("I am Else-Func created by declaration.");
        } // overwritten function
    }
    
    createFunction(); // implemented last function
    
    // --------function expression---------
    //  - function with the same names are not overwritten
    if (true) {
        var createFunction = function () {
            console.log("I am If-Func created by expression.");
        }// create function
    }
    else {
        var createFunction = function () {
            console.log("I am Else-Func created by expression.");
        }
    }
    
    createFunction(); // implemented first function
}

solveGlabalScope();

