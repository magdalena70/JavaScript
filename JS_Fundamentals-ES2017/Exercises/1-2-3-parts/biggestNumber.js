function solve(arr){
    let biggest = arr.sort(function(a, b){
        return a < b;
    })

    console.log(biggest[0]);
}

solve([5, -2, 7]);
solve([43, 43.2, 43.1]);