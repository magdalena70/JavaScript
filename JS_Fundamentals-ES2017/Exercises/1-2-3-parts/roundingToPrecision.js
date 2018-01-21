function solve(arr){
    let num = arr[0],
    precision = arr[1] > 15 ? 15 : arr[1],
    result = num.toFixed(precision),
    resultStr = result.toString();

    if(resultStr[resultStr.length-1] === '0'){
        while(resultStr[resultStr.length-1] === '0'){
        resultStr = resultStr.slice(0, resultStr.length-1)
        }
    }
    console.log(resultStr);
}

solve([3.1415926535897932384626433832795, 2]);
solve([10.5, 3]);