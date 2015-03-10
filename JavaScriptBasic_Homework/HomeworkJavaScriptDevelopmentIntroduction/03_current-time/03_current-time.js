var currentDate = new Date();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
console.log(hours + ":" + minutes);

//Write a JavaScript program current-time.js that prints on the console the current time
//in format hours:minutes. The hours should be printed without leading zeroes.
//The minutes should be printed as two - digit number with aleading zero when needed.
//Execute your program through Node.js.

//Example:
//   Input	    Output
//(no input)	21:03
//(no input)	 9:57
//(no input)	16:30
//(no input)	 6:00
//(no input)	23:59