function solve(arr){
    let k = arr[0],
        firstPart = arr.slice(1, k + 1),
        lastPart = arr.slice(arr.length - k);
    console.log(firstPart);
    console.log(lastPart);  
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);