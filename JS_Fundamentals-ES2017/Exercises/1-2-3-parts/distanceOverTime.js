//Two objects start from point A and travel in the same direction
// at constant speeds V1 and V2 for a period T. 
//Write a JS function that calculates the distance between the two objects
// at the end of the period.
//The input comes as array of numbers. The first two elements are
// the speeds to the two objects in km/h and the third element is
// the time in seconds.
//The output should be printed to the console. 
//Calculate the distance in meters.

function solve(arr){
    let speed1 = arr[0], //km/h
        speed2 = arr[1], //km/h
        time = arr[2] / 3600, //seconds in hour
        dist1 = speed1 * time, // S = V * T
        dist2 = speed2 * time,
        result = Math.abs(dist1 - dist2); //distance between the two objects

    console.log(result * 1000); //result in meters
}

solve([5, -5, 40]);