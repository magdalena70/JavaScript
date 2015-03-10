function calculatingTip(input){
    if (input.length != 0) {
        var bill = Number(input[0]);
        var mood = input[1];
        var tip = -Infinity;
        if (mood == 'happy') {
            tip = (bill * 10) / 100; 
        } else if (mood == 'married') {
            tip = (bill * 0.05) / 100;
        } else if (mood == 'drunk') {
            tip = ((bill * 15) / 100);
        } else {
            tip = (bill * 5) / 100;
        }
        console.log(tip.toFixed(2));
    }
}

calculatingTip([
    120.44,
    'happy'
]);

/* Don Vlado likes to eat at expensive restaurants. In such restaurants it is accepted that a customer 
 should tip (leave extra change when paying his bill). However, don Vlado happens to be very stingy 
 and wants to spare every penny he can when tipping at his favorite restaurant. 
 Help him by calculating his exact tip!
Don Vlado's tip very much depends on his mood:
-When happy, don Vlado tips for 10% of the bill
-When married, don Vlado tips for 0.05% of the bill
-When drunk, don Vlado tips for (15% of the bill)n, where n is the first digit of the tip. 
 (e.g. if the bill is 200, 30 is 15% of the bill. 3 is the first digit of 30, 
 so Don Vlado leaves the tip (30)3 = 30 * 30 * 30 = 27000)
-In every other scenario, don Vlado is simply grumpy and tips for only 5% of the bill
Input
The input data will be received as an array. It contains two arguments – the first one is don Vlado’s bill. 
The second one is don Vlado’s mood.
The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
The output consists of only one line – don Vlado’s tip, rounded to 2 places after the decimal point. 
Use the toFixed() function.
Example
Input	    Output
120.44      12.04
happy	  
*/