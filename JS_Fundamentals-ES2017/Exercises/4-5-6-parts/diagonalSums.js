function solve(matrix) {
    let sumLeft = 0,
        sumRight = 0;
       
    for (let row = 0; row < matrix.length; row++) {
        if (row % 2 === 0) {
            sumLeft += matrix[row][row];
            sumRight += matrix[row].reverse()[row];
        } else {
            sumLeft += matrix[row][row];
            sumRight += matrix[row].reverse()[row];          
        }
    }

    console.log(sumLeft, sumRight);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);