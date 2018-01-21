function solve(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        let x = arr[i],
            y = arr[i + 1],
            z = arr[i + 2];
        checkIfInside(x, y, z);
    }

    function checkIfInside(x, y, z) {
        let xMin = 10, xMax = 50,
            yMin = 20, yMax = 80,
            zMin = 15, zMax = 50;
        if ((x >= xMin && x <= xMax) &&
            (y >= yMin && y <= yMax) &&
            (z >= zMin && z <= zMax)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
}

solve([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);