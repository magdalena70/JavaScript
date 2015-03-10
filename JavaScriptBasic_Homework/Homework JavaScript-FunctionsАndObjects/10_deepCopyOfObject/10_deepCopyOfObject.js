function clone(obj){
    var objCopy = JSON.parse(JSON.stringify(obj));
    return objCopy;// a deep copy
}
function compareObjects(obj, objCopy){
    var compare = (obj == objCopy);
    console.log('a == b --> ' + compare);
}

var a = { name: 'Pesho', age: 21 }
var b = clone(a); 
compareObjects(a, b);//a == b --> false

var a = { name: 'Pesho', age: 21 }
var b = a;
compareObjects(a, b);//a == b --> true


/* Write a JavaScript function clone(obj) that accepts as parameter an object of reference type.
  The function should return a deep copy of the object. Write a second function compareObjects(obj, objCopy)
  that compare the two objects by reference (==) and print on the console the output given below.
  Read in Internet about "deep copy" of an object and how to create it. 
Examples:
Input	                                     Output
var a = {name: 'Pesho', age: 21} 
var b = clone(a); // a deep copy 
compareObjects(a, b);  	                      a == b --> false
  
var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
compareObjects(a, b);                         a == b --> true    */