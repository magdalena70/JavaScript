function solveMatrice(matrice) {
    let rowSum = 0, colSum = 0, isMagic;

    for (let row = 0; row < matrice.length; row++) {
        rowSum = matrice[row].reduce((a, b) => a + b);

        for (let col = 0; col < matrice[row].length; col++) {
            if (matrice[col]) {
                colSum += matrice[col][row];

                if (matrice.length > 1) {
                    colSum = matrice[col].reduce((a, b) => a + b);
                }
            }
        }

        if (rowSum === colSum) {
            isMagic = true;
        } else {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

//solveMatrice([[0, 0, 0]]);
//solveMatrice([[4, 5, 6]]);
solveMatrice([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);