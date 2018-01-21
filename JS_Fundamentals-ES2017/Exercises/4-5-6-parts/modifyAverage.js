function solve(number) {
    let avg = getDigitsAvg(number);
    if (avg <= 5) {
        while (avg <= 5) {
            number = Number(number.toString() + '9');
            avg = getDigitsAvg(number);
        }
    }

    console.log(number);

    function getDigitsAvg(number) {
        let arrDigits = number.toString().split('');
        let sum = arrDigits.reduce((a, b) => Number(a) + Number(b), 0);
        let avg = sum / arrDigits.length;
        return avg;
    }
}

solve(101);
solve(5835);