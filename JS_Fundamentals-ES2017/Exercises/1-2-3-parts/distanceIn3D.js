function solve(arr){
    let x1 = arr[0],
        y1 = arr[1],
        z1 = arr[2],
        x2 = arr[3],
        y2 = arr[4],
        z2 = arr[5],
        distance = Math.sqrt(
            Math.pow((x2-x1), 2) + 
            Math.pow((y2-y1), 2) + 
            Math.pow((z2-z1), 2));

    console.log(distance);
}

solve([1, 1, 0, 5, 4, 0]);
solve([3.5, 0, 1, 0, 2, -1]);