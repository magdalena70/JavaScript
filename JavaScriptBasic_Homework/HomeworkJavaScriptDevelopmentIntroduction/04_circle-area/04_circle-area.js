function calcCircleArea(r){
	//area = 3.14 * (r * r)
	var area = Math.PI * (r * r);
	document.write("<p> r = "+r+"; area = "+area+"</p>");
}
	
calcCircleArea(7);
calcCircleArea(1.5);
calcCircleArea(20);
	

//Write a JavaScript function calcCircleArea(r) that takes as a parameter
// the radius of a rectangle and calculates and returns its area.
// Put the function in a file named circle-area.js.
// Write a HTML page circle-area.html that includes the script circle-area.js
// and calculates and prints in the page body the area of circles of size r=7, r=1.5 and r=20.

//Examples:
// Input     Output
//  7	     153.93804002589985
//  1.5	     7.0685834705770345
//  20	     1256.6370614359173 