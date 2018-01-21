function solve(matrix) {
    let arrFromBiggestElems = [];
    for (let row = 0; row < matrix.length; row++) {
        arrFromBiggestElems.push(getBiggestElem(matrix[row]));
    }

    console.log(getBiggestElem(arrFromBiggestElems));

    function getBiggestElem(arr) {
        return arr.sort((a, b) => a < b, 0)[0];
    }
}

solve([[20, 50, 10], [8, 33, 145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);