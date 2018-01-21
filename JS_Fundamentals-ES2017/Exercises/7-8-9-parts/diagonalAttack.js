function solveDiagonalMatrix(arr) {
    //create matrix from input arr
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(' ');
    }

    //find diagonals' sum
    let leftSum = 0,
        rightSum = 0,
        leftArr = [],
        rightArr = [],
        right = matrix.length - 1;

    for (let left = 0; left < matrix.length; left++) {
        leftSum += Number(matrix[left][left]);
        leftArr.push(matrix[left][left]);//keep left diagonal's values
        rightSum += Number(matrix[left][right]);
        rightArr.push(matrix[left][right]);//keep right diagonal's values

        right--;
    }

    if (leftSum === rightSum) {
        //create new matrix and fill with leftSum value
        let newMatrix = [];
        for (let row = 0; row < matrix.length; row++) {
            newMatrix[row] = [];
            for (let col = 0; col < matrix[row].length; col++) {
                newMatrix[row][col] = leftSum;
            }
        }

        //add left and right diagonals to newMatrix
        let rightCol = newMatrix.length - 1;
        for (let leftCol = 0; leftCol < newMatrix.length; leftCol++) {
            newMatrix[leftCol][leftCol] = leftArr[leftCol];
            newMatrix[leftCol][rightCol] = rightArr[leftCol];

            rightCol--;
        }

        printMatrix(newMatrix);
    } else {
        printMatrix(matrix);
    }

    function printMatrix(matr) {
        matr.forEach(function (el) {
            console.log(el.join(' '));
        }, this);
    }
}

solveDiagonalMatrix([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

solveDiagonalMatrix([
    '1 1 1',
    '1 1 1',
    '1 1 0']);