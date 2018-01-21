function solve(arr){
    let [rows, cols, x, y] = arr,
        matrix = [],
        star = 1,
        counter = 1,
        currRow = x,
        currCol = y;
        isValidPosition = true;

    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }  
    }

    matrix[x][y] = star;

    while(isValidPosition){                         
        let startRow = Math.max(0, currRow - counter),
            endRow = Math.min(matrix.length - 1, currRow + counter),
            startCol = Math.max(0, currCol - counter),
            endCol = Math.min(matrix[0].length - 1, currCol + counter); 

            star++;        
            isValidPosition = false;                      
            
        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if(matrix[row][col] === 0){
                    isValidPosition = true;
                    matrix[row][col] = star;
                }
            }
        }
      
        counter++;
    }

    //print result
    matrix.forEach(function (el) {
        console.log(el.join(' '));
    }, this);
}

//solve([4, 4, 0, 0]);
solve([3, 3, 2, 2]);
solve([5, 5, 2, 2]);