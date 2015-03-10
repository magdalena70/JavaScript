var evalResult = document.getElementById("eval_result");
evalResult.onclick = calcExpression;

function calcExpression() {
		var inputExpression = document.getElementById("input_expression");
		if(inputExpression.value != ""){
			var result  = eval(inputExpression.value.replace(/[^\-+/*&|=()0-9!]/g, ""));
			document.getElementById("output_result").innerHTML = result;
		}else{
			document.getElementById("output_result").innerHTML = "Empty! Put expression in the text field.";
		}
}

var clear = document.getElementById("clear");
clear.onclick = tryAgain;
function tryAgain () {
    document.getElementById("output_result").innerHTML = "";
	document.getElementById("inputExpression").value = "";
}

/*--->   Write a HTML page (with text field, button, and paragraph).
 Write JS program calcExpression.js that calculates any expression
 put in the text field and prints it in the paragraph.
 Link the JS file to the HTML file. (100% accuracy is not required).
 Hint: Use eval() for calculating the result, but first remove the potentially dangerous characters.
 Example:
 Input - 5+9+158/9*12596-1     Output - 221124.7777777778           <---*/
