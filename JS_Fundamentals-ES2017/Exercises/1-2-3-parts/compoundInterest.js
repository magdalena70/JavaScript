function solve(arr){
    let principalSum = arr[0],
        interestRate = arr[1] / 100, // in percent
        compoundingPeriod = arr[2], // in monts
        frequency = (12 / compoundingPeriod),
        totalTimespan = arr[3], // in years
        result = principalSum * Math.pow(
            (1 + (interestRate / frequency)), (frequency * totalTimespan));

    console.log(result.toFixed(2));
}

solve([1500, 4.3, 3, 6]);
solve([100000, 5, 12, 25]);