function solve(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let coll = 1; coll <= matrix[row].length; coll++) {
            if (matrix[row][coll - 1] === matrix[row + 1][coll - 1] &&
                matrix[row + 1][coll - 1] !== undefined) {
                count++;
            }

            if (matrix[row][coll - 1] === matrix[row][coll] &&
                matrix[row][coll] !== undefined) {
                count++;
            }

            if (matrix[row+1][coll - 1] === matrix[row+1][coll] &&
                matrix[row+1][coll] !== undefined) {
                count++;
            }
        }
    }

    console.log(count);
}

solve([
    ['yes', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo']]);

solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '8']]);