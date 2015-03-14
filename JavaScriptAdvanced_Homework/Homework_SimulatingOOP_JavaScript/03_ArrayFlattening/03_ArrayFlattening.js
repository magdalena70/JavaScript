Array.prototype.flatten = function (){
    var _this = this;
    var newArray = [];
    createNewArray(_this);

    function createNewArray(inputArray){
        var i;
        var arrayLength = inputArray.length;
        for (i = 0; i < arrayLength; i++) {
            if (inputArray[i] instanceof Array) {
                createNewArray(inputArray[i]);
            } else {
                newArray.push(inputArray[i]);
            }
        }
    }

    return newArray;
}

var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());