function matrixRotation(inputArr) {
    var degreeMatch = inputArr[0].match(/\d+/);
    var degree = Number(degreeMatch[0]);
    var matrix = [];
    //the maximum length of the matrix is equal to the length of the longest element of the entered array->
    var rowMaxLength = 0;
    var i;
    for (i = 1; i < inputArr.length; i++) {
        if (inputArr[i].length > rowMaxLength) {
            rowMaxLength = inputArr[i].length; //find maximum length
        }
    }
    //load matrix ->
    for (i = 1; i < inputArr.length; i++) {
        var row = inputArr[i] + Array(rowMaxLength - inputArr[i].length + 1).join(' ');
        matrix.push(row.split(''));
    }
    //console.log(matrix);

    //rotate matrix - 90 degree n-times ->
    for (var count = 0; count < (degree / 90); count++) {
        matrix = rotateMatrix90(matrix);
    }
    //print result ->
    for (var i in matrix) {
        console.log(matrix[i].join(''));
    }
    

    //rotate matrix once - (90 degree) ->
    function rotateMatrix90(matrix){
        var newMatrix = [];
        var newRow, row;
        var newCol, col;
        for (col = 0; col < matrix[0].length; col++) {
            newRow = col;
            newMatrix[newRow] = [];
            for (row = matrix.length - 1; row >= 0; row--) {
                newCol = matrix.length - 1 - row;
                newMatrix[newRow].push(matrix[row][col]);
            }
        }
        return newMatrix;
    }
}

matrixRotation(
    [
        'Rotate(720)',
        'hello',
        'softuni',
        'exam'
    ]
);

/* You are given a sequence of text lines. Assume these text lines form a matrix of characters 
(pad the missing positions with spaces to build a rectangular matrix). 
Write a program to rotate the matrix by 90, 180, 270, 360, … degrees. 
Print the result at the console as sequence of strings. Examples:
Input --> Rotate(90), Rotate(180), Rotate(270)
Example:
Input	        Output
Rotate(90)
hello           esh
softuni         xoe
exam	        afl                                 
                mtl
                uo
                n 
                i 
*/