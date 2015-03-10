function calcCylinderVol(arr){
    //volume = 3.14 * (r * r) * height
    var radius = arr[0];
    var height = arr[1];
    var volume = Math.PI * (radius * radius) * height;

    console.log(volume.toFixed(3));
}

calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);

//Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters:
//radius and the height of a straight circular cylinder.The function calculates the volume of the cylinder.
//Write JS program cylinderVol.js that calculates the volume of a few cylinders.
//The result should be printed on the console.Run the program through Node.js. 

//Example:
//Input	   Output
//[2, 4]   50.265
//[5, 8]   628.319
//[12, 3]  1357.168