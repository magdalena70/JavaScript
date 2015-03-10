function buildTable(arr) {
    var start = Number(arr[0]);
    var end = Number(arr[1]);
    var head = "<table>";
    var header = "<tr><th>Num</th><th>Square</th><th>Fib</th></tr>"
    function calcFib(num) {
        if (num <= 3) {
            return ("yes");
        }
        var fibNum;
        var a = 2;
        var b = 3;
        for (var i = 0; i < 1000000; i++) {
            fibNum = a + b;
            a = b;
            b = fibNum;
            if (num == fibNum) {
                return ("yes");
            }// else {
                //return("no");
            //}
        }
        return ("no");
    }
    console.log(head);
    console.log(header);
    for (var i = start; i <= end; i++) {
        console.log("<tr><td>" + i + "</td><td>" + (i * i) + "</td><td>" + calcFib(i) + "</td></tr>")
    }
    console.log("</table>");
}

buildTable([2, 6]);
buildTable([55, 56]);


//Write a JavaScript function that takes as input an array of two numbers (start and end)
//and prints at the console a HTML table of 3 columns.The first column should hold a number num,
//changing from start to end.The second column should hold num * num.The third column should hold "yes"
//if numisFibonaccinumber or "no" otherwise.The table should have header cells titled "Num", "Square" and "Fib".
//Input
//The input data comes as array of two numbers: start and end.The input data will always be valid and in
//the format described.There is no need to check it explicitly.
//Output
//Print at the console the above described table in the same format like the examples below.Don 't add
//additional spaces.Whitespace and character casing are important, so please use the same as in the below examples.
//Constraints
//The input is passed to the first JavaScript function found in your code as array of 2 elements.
//The numbers start and end are positive integers in the range [1…1 000 000] and start ≤ end.
//Allowed working time for your program: 0.2 seconds.
//Allowed memory: 16 MB.

//Example:
//Input	                        Output
//2
//6	                            <table>
//                              <tr><th>Num</th><th>Square</th><th>Fib</th></tr>
//                              <tr><td>2</td><td>4</td><td>yes</td></tr>
//                              <tr><td>3</td><td>9</td><td>yes</td></tr>
//                              <tr><td>4</td><td>16</td><td>no</td></tr>
//                              <tr><td>5</td><td>25</td><td>yes</td></tr>
//                              <tr><td>6</td><td>36</td><td>no</td></tr>
//                              </table>

//Input                         Output
//55
//56	                        <table>
//                              <tr><th>Num</th><th>Square</th><th>Fib</th></tr>
//                              <tr><td>55</td><td>3025</td><td>yes</td></tr>
//                              <tr><td>56</td><td>3136</td><td>no</td></tr>
//                              </table>