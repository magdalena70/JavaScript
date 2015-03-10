function findLargestBySumOfDigits(inputArr) {
    if ( arguments.length < 1) {
        console.log('undefined');//-->check if 0 arguments are passed
        return;
    }

    var maxSum = 0;
    var sum = 0;
    for (var i = 0; i < inputArr.length; i++) {
        if (parseInt(inputArr[i]) !== inputArr[i]) {
            console.log('undefined');// --> check if some of the arguments is not an integer number
            return;
        }
        
        var number = Math.abs(inputArr[i]).toString();

        for (var j = 0; j < number.length; j++) {
            sum += Number(number[j]);
        }
        if (sum >= maxSum) {
            maxSum = sum;
            var maxNum = Math.abs(inputArr[i]);
            sum = 0;
        }
    }
    console.log(maxNum);
    
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(['hello']);// --> check if some of the arguments is not an integer number
findLargestBySumOfDigits([5, 3.3]);// --> check if some of the arguments is not an integer number
findLargestBySumOfDigits();//-->check if 0 arguments are passed
findLargestBySumOfDigits([]);//-->check if array is empty

/* Write a JavaScript function findLargestBySumOfDigits(arr) that accepts as a parameter an array of numbers
 or/and strings and returns the element with the largest sum of its digits. The function should take a variable
 number of arguments. It should return undefined when 0 arguments are passed or when some of the arguments
 is not an integer number. Write a JS program largestSumOfDigits.js that invokes your function with the sample
 input data below and prints its output at the console. 
Examples:
Input	                        Output
[5, 10, 15, 111]	            15
[33, 44, -99, 0, 20]	        -99
['hello']	                    undefined
[5, 3.3]	                    undefined       */