function solve(n) {
    let lineCounter = n;
    if (n % 2 === 0) {
        lineCounter = n - 1;
    }

    let plus = '+',
        minus = '-'.repeat(n - 2),
        vertical = '|',
        space = ' '.repeat(n - 2),
        strA = `${plus}${minus}${plus}${minus}${plus}`,
        strB = `${vertical}${space}${vertical}${space}${vertical}`;

    if (n <= 4) {
        for (var i = 0; i < lineCounter; i++) {
            console.log(strA);
        }
    } else {
        for (var y = 0; y < 2; y++) {
            console.log(strA);
            for (var x = 0; x < lineCounter / 2 - 2; x++) {
                console.log(strB);
            }
        }

        console.log(strA);
    }
}

solve(5);
solve(7);