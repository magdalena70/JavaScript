function solve(arr){
    let resultArr = [];
    for (let i = 1; i < arr.length; i+=2) {
        resultArr.push(arr[i] * 2);
    }

    console.log(resultArr.reverse());
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);