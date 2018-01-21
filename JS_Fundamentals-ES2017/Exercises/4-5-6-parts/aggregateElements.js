function solve(arr){
    let sumAll = arr.reduce((a, b) => a + b, 0);
    let sumInverse = arr.reduce((a, b) => a + 1/b, 0);
    let concat = arr.reduce((a, b) => a + b, "");    
    
    console.log(sumAll);
    console.log(sumInverse);
    console.log(concat);    
}

solve([2, 4, 8, 16]);