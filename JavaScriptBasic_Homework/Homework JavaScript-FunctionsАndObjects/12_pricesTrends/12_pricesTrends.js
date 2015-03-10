function printTablePricesTrends(numStrArr){

    console.log('<table>\n<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>%s</td><td><img src="fixed.png"/></td></tr>', parseFloat(numStrArr[0]).toFixed(2));

    for (var i = 1; i < numStrArr.length; i++) {
        var previousPrice = parseFloat(numStrArr[i-1]).toFixed(2);
        var currentPrice = parseFloat(numStrArr[i]).toFixed(2);
        
        if (currentPrice == previousPrice) {
            var trend = '"fixed.png"';
        } else if (currentPrice > previousPrice) {
            trend = '"up.png"';
        } else {
            trend = '"down.png"';
        }
        console.log('<tr><td>%s</td><td><img src=%s/></td></tr>', currentPrice, trend);
    }
    console.log('</table>');
}

printTablePricesTrends(['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225']);
printTablePricesTrends(['50','60']);

/* You are given a list of prices. Your task is to print them in a HTML table: the first column holds a price;
 the second column holds a trend. The trend is either fixed (no change) or moving up or moving down.
 Fixed is the trend of the first price and when the previous price is the same as the current price (after rounding).
 Moving up is when the current price is greater than the previous price (after rounding).
 Moving down is when the current price is less than the previous price (after rounding).
 All numbers are rounded to 2 digits after the decimal point. See the examples below for better understanding.
Input
The input is passed to the first JavaScript function found in your code as array of strings holding the input numbers. The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print at the console the prices / trends HTML table following the examples below. 
The table has a fixed header defining 2 columns: Price and Trend. The prices column should hold the price,
rounded to 2 decimal places. The trend is calculated after rounding (with 2 decimal places) and 
can be "fixed", "up" or "down". Whitespace and character casing are important, so please use the same as
in the below examples.
Examples
Input	             Output
50	                <table>
60                  <tr><th>Price</th><th>Trend</th></tr>
                    <tr><td>50.00</td><td><img src="fixed.png"/></td></tr>
                    <tr><td>60.00</td><td><img src="up.png"/></td></tr>
                    </table>                                                
 * 
 Input	            Output
36.333              <table>
36.5                <tr><th>Price</th><th>Trend</th></tr>
37.019              <tr><td>36.33</td><td><img src="fixed.png"/></td></tr>
35.4                <tr><td>36.50</td><td><img src="up.png"/></td></tr>
35                  <tr><td>37.02</td><td><img src="up.png"/></td></tr>
35.001              <tr><td>35.40</td><td><img src="down.png"/></td></tr>
36.225	            <tr><td>35.00</td><td><img src="down.png"/></td></tr>
                    <tr><td>35.00</td><td><img src="fixed.png"/></td></tr>
                    <tr><td>36.23</td><td><img src="up.png"/></td></tr>
                    </table>                                                    */
            
            
            
            
            
            