function solve(arr) {
    if (arr.length > 0) {
        let biggest = arr[0];
        console.log(biggest);

        for (let i = 1; i <= arr.length; i++) {
            let currElem = arr[i];

            if (currElem > biggest) {
                console.log(currElem);
                biggest = currElem;
            }
        }
    }
}

//solve([1, 2, 3, 4]);
//solve([20, 3, 2, 15, 6, 1]);
//solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);