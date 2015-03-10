function sortTableByPrice(input){
    //The count of input numbers is in the range [0…1 000]
    if (input.length != 0) {
        console.log('<table>\n<tr><th>Price</th><th>Trend</th></tr>');
        console.log('<tr><td>' + Number(parseFloat(input[0])).toFixed(2) + '</td><td><img src="fixed.png"/></td></tr>');
        var trend = '';
        var number;
        var i;
        for (i = 1; i <= input.length - 1; i++) {
            number = Number(parseFloat(input[i])).toFixed(2);
            if (number == Number(parseFloat(input[i - 1]).toFixed(2))) {
                trend = '"fixed.png"';
                console.log('<tr><td>' + number + '</td><td><img src=' + trend + '/></td></tr>');
            } else if (number > Number(parseFloat(input[i - 1]).toFixed(2))) {
                trend = '"up.png"';
                console.log('<tr><td>' + number + '</td><td><img src=' + trend + '/></td></tr>');
            } else {
                trend = '"down.png"';
                console.log('<tr><td>' + number + '</td><td><img src=' + trend + '/></td></tr>');
            }
        }
        console.log('</table>');
    }
}

sortTableByPrice(['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225']);

/* You are given a list of prices. Your task is to print them in a HTML table: 
 the first column holds a price; the second column holds a trend. 
 The trend is either fixed (no change) or moving up or moving down. 
 Fixed is the trend of the first price and when the previous price is the same 
 as the current price (after rounding). Moving up is when the current price is greater 
 than the previous price (after rounding). Moving down is when the current price is less 
 than the previous price (after rounding). All numbers are rounded to 2 digits after the decimal point. 
 See the examples below for better understanding.
 Input
 The input is passed to the first JavaScript function found in your code as array of strings 
 holding the input numbers. The input data will always be valid and in the format described. 
 There is no need to check it explicitly.
 Example:
 Input               Output
  50                 <table>
  60                 <tr><th>Price</th><th>Trend</th></tr>
                     <tr><td>50.00</td><td><img src="fixed.png"/></td></tr>
                     <tr><td>60.00</td><td><img src="up.png"/></td></tr>
                     </table>  */