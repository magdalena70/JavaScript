function findBiggestRow(input) {
    if (input != undefined && input.length > 2) {
        var check = input[2].match(/\-?[\d+\.\d+]+/g);
        //console.log(check);
        if (check != null) {
            var maxRow = [];
            var maxIndex;
            var maxSum = -Infinity;
            var i;
            for (i = 2; i < input.length - 1; i++) {
                var values = input[i].match(/\-?[\d+\.\d+]+/g);
                var sum = 0;
                //console.log(values);
                if (values == null) {
                    continue;
                } else { 
                    for (var y = 0; y < values.length; y++) {
                        sum += (Number(values[y]));
                        //console.log(sum);
                        if (maxSum < sum) {
                            var minSum = maxSum;
                            maxSum = sum;
                            if (minSum > maxSum) {
                                maxSum = minSum;
                            }
                            maxIndex = y;
                            maxRow[y] = input[i].match(/\-?[\d+\.\d+]+/g);
                        }
               
                    }
                }
            }
            var result = [];
            for (i = 0; i < maxRow[maxIndex].length; i++) {
                result.push(maxRow[maxIndex][i]);
            }
            console.log(maxSum + ' = ' + result.join(' + '));
        } else {
            console.log('no data');
        }
    } else {
        console.log('no data');
    }
}

findBiggestRow([ 
    '<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
    '<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
    '<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
    '</table>' 
        ]);

/*  You are given a HTML table of 4 columns: Town, Store1, Store2 and Store3. 
It consists of sequence of text lines: the "<table>" tag, the header row, several data rows, and "</table>" tag 
(see the examples below). The Store1, Store2, and Store3 columns hold either numbers or "-" (which means "no data"). 
Your task is to write a JavaScript function which parses the table data rows and finds the row with a maximal sum 
of its values.
Input
The input is passed to the first JavaScript function found in your code as array of strings holding the table lines. 
The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print at the console a single line, holding the data row values with a maximal sum in format: 
"sum = value1 + values2 + …". Print the values exactly as they were found in the input (no rounding, no reformatting).
 If all rows contain no data, print "no data". If two rows have the same maximal sum, print the first of them.
 Example
 Input
<table>
<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>
<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>
<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>
<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>
<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>
</table>
Output
65.3 = 11.2 + 18.00 + 36.10  */