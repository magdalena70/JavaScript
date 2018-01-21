function solve(arr) {
    let n = Number(arr.pop());

    if (n < arr.length) {
        for (let i = 0; i < arr.length; i += n) {
            console.log(arr[i]);
        }
    } else {
        console.log(arr[0]);
    }
}

solve([5, 20, 31, 4, 20, 2]);