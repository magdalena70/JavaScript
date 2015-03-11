function add(first) {
    var addNext = function (second) {
        return add(first + second);
    };
    
    addNext.valueOf = addNext.toString  = function () {
        return first;
    };
    
    return addNext;
}

console.log(+add(1)); // returns 1
console.log(+add(2)(3)); // returns 5
console.log(+add(1)(1)(1)(1)(1)); // returns 5
console.log(+add(1)(0)(-1)(-1)); // returns -1
console.log();
var addTwo = add(2);
console.log(+addTwo); // 2
var addTwo = add(2);
console.log(+addTwo(3)); // 5
console.log(+addTwo(3)(5)); //10