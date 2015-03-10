function sortTable(input){
    var match; 
    var regex = /<td>([\d\.]*)<\/td>/;
    var table = [];
    var i;
    for (i = 2; i < input.length - 1; i++) {
        match = regex.exec(input[i]);
       // console.log(match[1]);// -> match[0] is the whole expression, match[1] is the result sought
        table.push({
                        price: Number(match[1]),
                         row: input[i]
                     });
    }
    //console.log(table);//table is an object

    table.sort(function (a, b) {
        if (a.price == b.price) {
            return a.row.localeCompare(b.row);
        } else {
            return a.price - b.price;
        }
    });

    console.log(input[0] + '\n' + input[1]);
    for (i = 0; i < table.length; i++) {
        console.log(table[i].row);
    }
    console.log(input[input.length - 1]);
}

var inputTable = [
    '<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'</table>'
];
sortTable(inputTable);

/* You are given a HTML table with 3 columns: product, price and votes. 
 Write a JavaScript function to sort the table rows by price (as number, increasingly).
 Example
 Input
<table>
<tr><th>Product</th><th>Price</th><th>Votes</th></tr>
<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>
<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>
<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>
<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>
<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>
<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>
</table>
 
 Output
<table>
<tr><th>Product</th><th>Price</th><th>Votes</th></tr>
<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>
<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>
<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>
<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>
<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>
<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>
</table>  */