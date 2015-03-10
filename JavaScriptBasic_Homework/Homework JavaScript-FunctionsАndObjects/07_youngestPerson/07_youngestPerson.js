function findYoungestPerson(ínputPersons){
    var minAge = Number.MAX_VALUE;
    var youngestPerson;

    for (var i = 0; i < inputPersons.length; i++) {
        if (inputPersons[i].age < minAge) {
            youngestPerson = inputPersons[i];
            minAge = inputPersons[i].age;
        }
    }
    console.log('The youngest person is '+ youngestPerson.firstname + ' ' + youngestPerson.lastname);
}

var inputPersons = [
    { firstname : 'George', lastname: 'Kolev', age: 32 }, 
    { firstname : 'Bay', lastname: 'Ivan', age: 81 },
    { firstname : 'Baba', lastname: 'Ginka', age: 40 }]
findYoungestPerson(inputPersons);

/* Write a JavaScript function findYoungestPerson(persons) that accepts as parameter an array of persons,
 finds the youngest person and returns his full name. Write a JS program youngestPerson.js to execute your
 function for the below examples and print the result at the console.
Input	                                                        Output
var persons = [
  { firstname : 'George', lastname: 'Kolev', age: 32}, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Baba', lastname: 'Ginka', age: 40}]
findYoungestPerson(persons);	                                The youngest person is George Kolev   */