function lastDigitAsText(number){
    var digit = Math.abs(number % 10);
  
    switch (digit) {
        case 1: digit = 'One'; break;
        case 2: digit = 'Two'; break;
        case 3: digit = 'Three'; break;
        case 4: digit = 'Four'; break;
        case 5: digit = 'Five'; break;
        case 6: digit = 'Six'; break;
        case 7: digit = 'Seven'; break;
        case 8: digit = 'Eight'; break;
        case 9: digit = 'Nine'; break;
        case 0: digit = 'Zero'; break;
        default: break;
    }
    console.log(digit);
}

lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);

/* Write a JavaScript function lastDigitAsText(number) that returns the last digit of given integer
 as an English word. Write a JS program lastDigitOfNumber.js that invokes your function with the sample
 input data below and prints the output at the console. 
 Examples:
Input	        Output
6	            Six
-55	            Five
133	            Three
14567	        Seven           */