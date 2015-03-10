function countTetriminos(input){
    var figures = { "I": 0, "L": 0, "J": 0, "O": 0, "Z": 0, "S": 0, "T": 0 };
    var objKeys = Object.keys(figures);
    //console.log(objKeys);
    var row;
    var col;
    for (row = 0; row < input.length; row++) {
        for (col = 0; col < input[row].length; col++) {
            if (input[row][col] === 'o') {
                for (var k = 0; k < objKeys.length; k++) {
                    findFigures(objKeys[k], row, col);
                }
            }
        }
    }
    console.log(JSON.stringify(figures));

    function findFigures(objKeys, row, col) {
        switch (objKeys) {
            case 'I': if (input[row + 3] === undefined) {
                    return;
                } else if (input[row][col] == input[row + 1][col] &&
                    input[row][col] == input[row + 2][col] &&
                    input[row][col] == input[row + 3][col]) {
                    figures['I']++;
                }                ;
                break;
            case 'L': if (input[row + 2] === undefined || input[row + 2][col + 1] === undefined) {
                    return;
                } else if (input[row][col] == input[row + 1][col] &&
                    input[row][col] == input[row + 2][col] &&
                    input[row][col] == input[row + 2][col + 1]) {
                    figures['L']++;
                }                ;
                break;
            case 'J': if (input[row + 2] === undefined || input[row + 2][col - 1] === undefined) {
                    return;
                } else if (input[row][col] == input[row + 1][col] &&
                    input[row][col] == input[row + 2][col] &&
                    input[row][col] == input[row + 2][col - 1]) {
                    figures['J']++;
                }                ;
                break;
            case 'O': if (input[row + 1] === undefined || input[row + 1][col + 1] === undefined) {
                    return;
                } else if (input[row][col] == input[row][col + 1] &&
                    input[row][col] == input[row + 1][col] &&
                    input[row][col] == input[row + 1][col + 1]) {
                    figures['O']++;
                }                ;
                break;
            case 'Z': if (input[row + 1] === undefined || input[row + 1][col + 2] === undefined) {
                    return;
                } else if (input[row][col] == input[row][col + 1] &&
                    input[row][col] == input[row + 1][col + 1] &&
                    input[row][col] == input[row + 1][col + 2]) {
                    figures['Z']++;
                }                ;
                break;
            case 'S': if (input[row + 1] === undefined || input[row + 1][col - 1] === undefined) {
                    return;
                } else if (input[row][col] === input[row][col + 1] &&
                    input[row][col] == input[row + 1][col] &&
                    input[row][col] == input[row + 1][col - 1]) {
                    figures['S']++;
                }                ;
                break;
            case 'T': if (input[row + 1] === undefined || input[row][col + 2] === undefined) {
                    return;
                } else if (input[row][col] == input[row][col + 1] &&
                    input[row][col] == input[row][col + 2] &&
                    input[row][col] == input[row + 1][col + 1]) {
                    figures['T']++;
                }                ;
                break;
            default: console.log('no'); break;
        }
        return figures;
    }
}

countTetriminos(
    [
        '--o--o-',
        '--oo-oo',
        'ooo-oo-',
        '-ooooo-',
        '---oo--'
    ]
);


