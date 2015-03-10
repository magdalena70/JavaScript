function findNthDigit(numArr){
    var numN = numArr[0];
    var number = numArr[1].toString().replace(/[.]/g, '');
    //console.log('number=' + number);--> check number
    var digit;   
    if (numN > number.length) {
        console.log('The number doesn’t have 6 digits');
        return;
    } else{
        var index = number.length - numN;
        digit = number[index];
    }
   
    console.log(Math.abs(digit));
    
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);

/* Write a JavaScript function findNthDigit(arr) that accepts as a parameter an array of two numbers
 num and n and returns the n-th digit of given decimal number num counted from right to left.
 Return undefined when the number does not have n-th digit. Write a JS program nthDigitOfNumber.js
 that invokes your function with the sample input data below and prints the output at the console. 
Examples:
Input	                    Output
[1, 6]	                    6
[2, -55]	                5
[6, 923456]	                9
[3, 1451.78]	            1
[6, 888.88]	                The number doesn’t have 6 digits         */