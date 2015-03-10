function multiplyMatrices(first, second,number) {
    //input ->
    console.log('firstMatrix ->');
    console.log( first);

    console.log('\n secondMatrix ->');
    console.log(second);
    
    console.log('\nmissingNumber -> ' + number + '\n');
    
    if (first.length < second.length) {
        while (first.length < second.length) {
            first.push([]);
        }
    } else if (second.length < first.length) {
        while (second.length < first.length) {
            second.push([]);
        }
    }
    
    //fill the shorter rows with missing number at the end ->
    var firstLength = 0;
    var secondLength = 0;
    var i;
    for (i = 0; i < first.length; i++) {
        if (first[i].length > firstLength) {
            firstLength = first[i].length; //find maximum row's length of first matrix
        }
    }
    for (i = 0; i < second.length; i++) {
        if (second[i].length > secondLength) {
            secondLength = second[i].length; //find maximum row's length of second matrix
        }
    }
    //console.log(firstLength);
    //console.log(secondLength);
    
    for (i = 0; i < first.length; i++) {
            while ((first[i].length < secondLength) || (first[i].length < firstLength)) {
                first[i].push(number);
            }
        }
        
    for (i = 0; i < second.length; i++) {
            while ((second[i].length < firstLength) || (second[i].length < secondLength)) {
                second[i].push(number);
            }
        }
    
    console.log('\nFill the shorter rows with missing number at the end ->');
    console.log(first);
    console.log();
    console.log(second);

    //create new matrix ->
    var maxLength = first.length;
    if (maxLength < second.length) {
        maxLength = second.length;
    }
    var newMatrix = [];
    //iterating through first matrix rows
    for (var row = 0; row < first.length; row++) {
        newMatrix[row] = [];
        //iterating through second matrix columns
        for (var column = 0; column < second[0].length; column++) {
            var sum = 0;
            sum = Number(first[row][column]) * Number(second[row][column]);
            newMatrix[row][column] = sum;
        }
    }
    console.log('\n newtMatrix[row][col] = firstMatrix[row][col] * secondMatrix[row][col] -> ');
    console.log(newMatrix);
}

var firstMatrix = [
    [1, 2, 3, 4, 5, 6],
    [5, 4, 3, 2]    
];
var secondMatrix = [
    [2, 4, 6, 8, 10],
    [10, 8, 6, 4, 2],
    [1, 5],
    [3, 6, 8, 1]
];
var missingNumber = 2;
multiplyMatrices(firstMatrix, secondMatrix,missingNumber);