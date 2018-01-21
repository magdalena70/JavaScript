function solve(arr) {
    let [x1, y1, x2, y2, x3, y3] = arr,
        obj = [
            {'point':1, 'dist': getDistance(x1, y1, x2, y2)},
            {'point':2, 'dist': getDistance(x2, y2, x3, y3)},
            {'point':3, 'dist': getDistance(x1, y1, x3, y3)}
        ].sort((a, b) => a.dist > b.dist),
        firstPoint = obj[0].point < obj[2].point ? obj[0].point : obj[2].point, 
        secondPoint = obj[1].point,
        thirdPoint = obj[2].point > obj[0].point ? obj[2].point : obj[0].point,
        sum = obj[0].dist + obj[1].dist,
        result = `${firstPoint}->${secondPoint}->${thirdPoint}: ${sum}`;
       
    console.log(result);

    function getDistance(x1, y1, x2, y2) {
        return distance = Math.sqrt(
            Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
}

solve([0, 0, 2, 0, 4, 0]);
solve([-1, -2, 3.5, 0, 0, 2]);
solve([5, 1, 1, 1, 5, 4]);
