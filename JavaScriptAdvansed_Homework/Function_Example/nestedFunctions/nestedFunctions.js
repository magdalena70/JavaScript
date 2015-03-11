function orderBy(numbers, caseAscending){
    if (caseAscending == true) {
        console.log("caseAscending");
        return numbers.sort(caseAscending);
    } else {
        console.log("caseDescending");
        return numbers.sort(caseDescending);
    }

    function caseAscending(a, b){
        return a - b;
    }

    function caseDescending(a, b){
        return b - a;
    }
}
console.log(orderBy([2, 6, 76, 2], true));
console.log(orderBy([25, 6, 76, 2, 100], false));


// closures
function outerFunc(x){
    function innerFunc(y){
        return x + y;
    }

    return innerFunc;
}

var func = outerFunc(2)(3);
console.log(func);
console.log(outerFunc("Ivan")("Ivanov"));