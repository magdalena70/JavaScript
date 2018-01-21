function solve(arr){
    let smallestTwoElem = arr.sort((a, b) => a - b);
    smallestTwoElem.length = 2;
    console.log(smallestTwoElem.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);