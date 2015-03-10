function solve(input) {
    if (input.length != 0) {
        var x = 0;
        var y = 0;
        for (var row = 0; row < input.length; row++) {
            for (var col = 0; col < input[row].length; col++) {
                if (input[row][col] == 'o') {
                    x = row;
                    y = col;
                    //console.log(x + ' ' + y);
                }
                y = movePosition(input[row][col]);
                 
            }
            
            if (input[row][y] == '_') {
                console.log('Landed on the ground like a boss!');
            } else if (input[row][y] == '~') {
                console.log('Drowned in the water like a cat!');
            } else if ((input[row][y] == '/' || input[row][y] == '\\')||
                        (input[row][y] == '|')) {
                console.log('Got smacked on the rock like a dog!');
            }
            
        }
        console.log(row - 1 + ' ' + y);

        function movePosition(jumper){
            
            if (jumper == '>') {
                    y += 1;
            } else if (jumper == '<') {
                    y -= 1;
            }
            return y;
        }
    }
}

solve([
'-------------o-<<--------',
'-------->>>>>------------',
'---------------->-<---<--',
'------<<<<<-------/\--<--',
'--------------<--/-<\----',
'>>--------/\----/<-<-\---',
'---------/<-\--/------\--',
'<-------/----\/--------\-',
'\------/--------------<-\\',
'-\___~/------<-----------'
]);

//87 точки в judge