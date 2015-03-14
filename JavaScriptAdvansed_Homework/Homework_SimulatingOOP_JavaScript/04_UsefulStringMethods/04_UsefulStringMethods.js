String.prototype.startsWith = function (substring){

    if (typeof (substring) == 'string') {
        var thisLength = this.length;
        var subLength = substring.length;

        if (subLength > thisLength) {
            return false;
        }
        
        var i;
        for (i = 0; i < subLength; i++) {
            if (this[i] != substring[i]) {
                return false;
            }
        }

        return true;

    } else {
        return 'Incorrect input.Substring must be a String';
    }
}

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This")); // true
console.log(example.startsWith("this")); // false
console.log(example.startsWith("other")); // false
console.log(example.startsWith(5)); // Substring is not a String

String.prototype.endsWith = function (substring){
    if (typeof (substring) == 'string') {
        var thisLength = this.length;
        var subLength = substring.length;
        
        if (subLength > thisLength) {
            return false;
        }
        
        var reversedThis = this.split("").reverse().join("");
        var reversedSub = substring.split("").reverse().join("");
        var i;
        for (i = 0; i < subLength; i++) {
            if (reversedThis[i] != reversedSub[i]) {
                return false;
            }
        }
        
        return true;

    } else {
        return 'Incorrect input.Substring must be a String';
    }
}

console.log(example.endsWith("poses.")); // true
console.log(example.endsWith("example")); // false
console.log(example.startsWith("something else")); // false
console.log(example.endsWith());

String.prototype.left = function (count){
    if (typeof (count) == 'number') {
        return this.substr(0, count);
    } else {
        return 'Incorrect input.Count must be a number';
    }
}

console.log(example.left(9));
console.log(example.left(90));
console.log(example.left());

String.prototype.right = function (count){
    
    var thisLength = this.length;
    var startIndex = this.length - count;
    if (typeof (count) == 'number') {
        if (thisLength > count) {
            return this.substr(startIndex, thisLength);
        } else {
            return this.toString();
        }
    } else {
        return 'Incorrect input.Count must be a number';
    }
}

console.log(example.right(9));
console.log(example.right(90));
// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2)); // de

String.prototype.padLeft = function (count, character){
    if (typeof (count) == 'number') {
        var thisLength = this.length;
        var result = '';
        var i;
        if (character == undefined) {
            for (i = thisLength; i < count; i++) {
                result += ' ';
            }
            
            result += this;
        } else {
            if (typeof (character) == 'string') {
                for (var i = thisLength; i < count; i++) {
                    result += character;
                }
                
                result += this;
            } else {
                return 'Incorrect character';
            }			
        }
        
        return result;
    } else {
        return 'Incorrect count.Count must be a number.';
    }
}

var hello = "hello";
console.log(hello.padLeft(5)); // hello
console.log(hello.padLeft(10)); //      hello
console.log(hello.padLeft(5, ".")); // hello
console.log(hello.padLeft(10, ".")); // .....hello
console.log(hello.padLeft(2, "."));// hello

String.prototype.padRight = function (count, character) {
    if (typeof (count) == 'number') {
        var result = this;
        var thisLength = this.length
        var i;
        if (character == undefined) {
            for (i = thisLength; i < count; i++) {
                result += " ";
            }
        } else {
            if (typeof (character) == 'string') {
                for (i = thisLength; i < count; i++) {
                    result += character;
                }
            } else {
                return 'Incorrect character.';
            }
        }
        
        return result.toString();
    } else {
        return 'incorrect count.Count must be a number.';
    }
	
}

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

String.prototype.repeat = function (count) {
    if (typeof (count) == 'number') {
        var result = '';
        var i;
        for (i = 0; i < count; i++) {
            result += this;
        }
        
        return result;
    } else {
        return 'Incorrect count.Count must be a number.';
    }
}

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));