function PrintResult(inputNumber){
    
    function isRakiyaNum(number) {
        var pattern = /(\d{2})\d*\1/g;
        if ((number.toString()).match(pattern)) {
            return true;
        } else {
            return false;
        }
    }

    var start = Number(inputNumber[0]);
    var end = Number(inputNumber[1]);
    console.log('<ul>');
    for (var i = start; i <= end; i++) {
        if (isRakiyaNum(i) == true) {
            console.log('<li><span class=\'rakiya\'>'+ i +'</span><a href="view.php?id='+ i +'>View</a></li>');
        } else {
            console.log('<li><span class=\'num\'>'+ i +'</span></li>');
        }
    }
    console.log('</ul>');
}

PrintResult([1, 8]);
PrintResult([11210, 11215]);

/* A "double rakiya number" is an integer that contains a sequence of 2 digits twice (without overlapping). 
For example "23156312" is a "double rakiya number" because it contains "31" twice. Other examples of 
"double rakiya numbers" are: 1212, 3333, 203103, 5210217, 21212121, and 55555. 
Examples of non-"double rakiya numbers" are: 333, 5, 111222, 1234567131, and 12213114.
Write a JavaScript function that takes as input two numbers (start and end) and prints at the console a HTML list 
holding all numbers in the range [start…end], along with a link to view details about all "double-rakiya numbers" 
in that range. Please use the format from the below examples.
Input
The input is passed to the first JavaScript function found in your code as array of two strings: 
the numbers start and end. The input data will always be valid and in the format described. 
There is no need to check it explicitly.
Output
Print at the console the above described HTML list in the same format like the examples below. 
Don't add additional spaces. Whitespace and character casing are important, so please use the same 
as in the below examples.
 INPUT      OUTPUT
 5           <ul>
                <li><span class='num'>5</span></li>
                <li><span class='num'>6</span></li>
                <li><span class='num'>7</span></li>
                <li><span class='num'>8</span></li>
 8           </ul>
	
11210        <ul>
                <li><span class='num'>11210</span></li>
                <li><span class='rakiya'>11211</span><a href="view.php?id=11211">View</a></li>
                <li><span class='rakiya'>11212</span><a href="view.php?id=11212">View</a></li>
                <li><span class='num'>11213</span></li>
                <li><span class='num'>11214</span></li>
                <li><span class='num'>11215</span></li>
11215        </ul>                                              */