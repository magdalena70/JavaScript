function solve(arr) {
    let [speed, area] = arr;
    let speedLimit = checkLimit(area);
    
    if (speedLimit && speed > speedLimit) {
        printResult(speed, speedLimit);
    }

    function checkLimit(area) {
        switch (area) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
            default: break;
        }
    }

    function printResult(speed, speedLimit) {
        if (speed <= speedLimit + 20) {
            console.log('speeding');
        }

        if (speed > speedLimit + 20 && speed <= speedLimit + 40) {
            console.log('excessive speeding');
        }

        if (speed > speedLimit + 40) {
            console.log('reckless driving');
        }
    }
}

solve([21, 'residential']);
solve([5, 'city']); // print nothing
solve([120, 'interstate']);
solve([200, 'motorway']);