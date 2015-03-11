function testContext() {
    console.log(this);
}

console.log("'--------------------");
console.log("From the global scope ->");
testContext();

console.log("'--------------------");
console.log("Inside another function ->");
fromFunction();

function fromFunction() {
    testContext();
}

console.log("'--------------------");
console.log("As an object ->");
var asObj = new testContext();