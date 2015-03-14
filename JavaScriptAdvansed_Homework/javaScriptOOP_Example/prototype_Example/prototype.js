String.prototype.repeat = function repeatString(count) {
    var result = '';
    var i;
    for (i = 0; i < count; i++) {
        result += this;
    }

    return result;
};

var str = "StringRepeat ";
console.log(str.repeat(3));
console.log("Repeat ".repeat(3));

var num = 5;
var repeatNum = String.prototype.repeat.call(num, 5);
console.log(repeatNum + ' -> ' + typeof repeatNum);

//---------------------------//

Array.prototype.shuffle = function ShuffleArray(){
    var temp;
    var index;
    var counter = this.length;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = this[counter];
        this[counter] = this[index];
        this[index] = temp;
    }

    return this;
}

var arr = [1, 2, 3, 5, 6, 7];
console.log(arr.shuffle());