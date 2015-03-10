function solve(input){
    var numbers = input[0].match(/[\d]+/g);
    //console.log(numbers);
    var convertNum = [];
    var i;
    for (i = 0; i < numbers.length; i++) {
        convertNum.push(Number(numbers[i]).toString(16).toUpperCase());
    }
    for (i = 0; i < convertNum.length; i++) {
        if (convertNum[i].length < 4) {
            var len = 4 - convertNum[i].length;
            convertNum[i] = Array(len + 1).join('0') + convertNum[i];
        }
    }
    for (var i in convertNum) {
        convertNum[i] = '0x'+ convertNum[i];
    }
    console.log(convertNum.join('-'));
}

solve(['5tffwj(//*7837xzc2---34rlxXP%$”.']);

/* "The numbers, Mason, what do they mean?"
We’ve just received a ton of unreadable signals from the International Space Station. 
We've lost all contact with the team up there, and all we got are these messages. Aliens? Might be. 
Can you please clear up the messages for us, so we can pass them to the decryption team?
Your job is to clear the text from any unnecessary symbols (only the numbers are needed) and 
convert the remaining number sequences to hex format. If a hex value has less than 4 characters, 
you need to add leading zeros. Finally, you need to place a "0x" prefix before each hex value and 
concatenate them all with dashes '-'. 
For example, we have the following message: "5tffwj(//*7837xzc2---34rlxXP%$". 
After trimming the unnecessary data (non-numeric characters), we've got the numbers 5, 7837, 2 and 34 left.
We convert them to hex: 5, 1E9D, 2, 22; add leading zeros where needed: 0005, 1E9D, 0002, 0022, 
place 0x before each one and concatenate them with dashes: 0x0005-0x1E9D-0x0002-0x0022. 
(Note: hex values MUST be uppercase)
Example
Input
5tffwj(//*7837xzc2---34rlxXP%$”.
Output
0x0005-0x1E9D-0x0002-0x0022  */