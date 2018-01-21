function solve(arr){
    arr.forEach(function(x) {
        let binary = Math.log2(x); 
        console.log(binary);               
    }, this);
}

solve([1, 3, 5, 4, 7]);