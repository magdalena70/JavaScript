function matrixExample(input){
    console.log('input= ' + input);
    console.log();
    var matrix = [];
    var maxLength = 0;
    //create the matrix of chars ->
    var i;
    for (i = 0; i < input.length; i++) {
        matrix.push(input[i].split(''));
    }
    console.log('Create matrix -> ');
    for (var i in matrix) {
        console.log('   '+ matrix[i]);
    }
    console.log();
    //add '@' at the end of the rows ->
    var biggerLength = 0;
    for (i = 0; i < input.length; i++) {
        biggerLength = input[i].length + 1;
        while (matrix[i].length < biggerLength) {
            matrix[i].push('@');
        }
    }
    console.log('Add char \'@\' at the end of the rows -> ');
    for (var i in matrix) {
        console.log('   '+ matrix[i]);
    }

    //find maxLength ->
    for (i = 0; i < matrix.length; i++) {
        if (maxLength < matrix[i].length) {
            maxLength = matrix[i].length;
        }
    }
    //console.log(maxLength);

    //fill the shorter rows with '*' at the end ->
    for (i = 0; i < input.length; i++) {
        while(matrix[i].length < maxLength) {
            matrix[i].push('*');
        }
    }
    console.log();
    console.log('Fill the shorter rows with char \' * \' at the end -> ');
    for (var i in matrix) {
        console.log('   '+ matrix[i]);
    }

    //replace char '@' with char '*' ->
    var char = '@';
    for (var row = 0; row < matrix.length; row++) {
        for (var col = row; col < matrix[row].length; col++) {
            if (matrix[row][col] == char) {
                matrix[row][col] = '*';
            }
        }
    }
    console.log();
    console.log('Replace char \'@\' with char \'*\' -> ');
    for (var i in matrix) {
        console.log('   '+ matrix[i]);
    }
    //reverse matrix and remove char \'*\' ->
    console.log();
    console.log('Reverse matrix and remove char \'*\' ->');
    for (var row = matrix.length - 1; row >= 0; row--) {
        for (var col = matrix[row].length;col >= row; col--) {
            if (matrix[row][col] == '*') {
                delete matrix[row][col];
            }
        }
        console.log('   '+ matrix[row].toString());
    }   
}

matrixExample(
    [
       'hello',
        'softuni',
        'js',
        'exam'
    ]
);