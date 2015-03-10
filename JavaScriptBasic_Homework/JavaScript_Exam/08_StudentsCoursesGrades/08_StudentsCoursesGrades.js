function solve(input){
    //parse JSON output ->
    /*console.log(JSON.parse('{"C#": { "avgGrade": 4.61, "avgVisits": 5.5, "students": ["Ivan Petrov", "Maria Ivanova", "Peter Nikolov"] },'+
           ' "Java": { "avgGrade": 5.92, "avgVisits": 8, "students": ["Maria Ivanova", "Peter Nikolov"] },'+
            '"PHP": { "avgGrade": 3.87, "avgVisits": 4, "students": ["Ivan Petrov", "Peter Nikolov"] }}'));*/
    var result = {};
    var i;
    var currentLine;
    for (i = 0; i < input.length; i++) {
        currentLine = input[i].split(/[\s]?\|[\s]?/g);
        //console.log(currentLine);
        var name = currentLine[0].trim();
        var language = currentLine[1].trim();
        var grade = Number(currentLine[2].trim());
        var visit = Number(currentLine[3].trim());
        //console.log(visit);
        if (!result[language]) {
            result[language] = {
                "avgGrade": 0,
                "avgVisits": 0,
                "students": [],
                "count": 0
                };
        }
        result[language]["avgGrade"] += grade;
        result[language]["avgVisits"] += visit;
        if (result[language]["students"].indexOf(name) == -1) {
            result[language]["students"].push(name);
        }
        result[language]["count"]++;//count input
    }
    //console.log(result);
    var sortedKeys = Object.keys(result).sort();
    //console.log(sortedKeys);
    var sortedResult = {}; //create new object with sorted keys ->
    for (i = 0; i < sortedKeys.length; i++) {
        sortedResult[sortedKeys[i]] = result[sortedKeys[i]];
        sortedResult[sortedKeys[i]].students.sort(); //sort students by name
        var multiplier = sortedResult[sortedKeys[i]].count;
        var currentGrade = sortedResult[sortedKeys[i]].avgGrade;
        sortedResult[sortedKeys[i]].avgGrade = Number((currentGrade / multiplier).toFixed(2));
        var currentVisits = sortedResult[sortedKeys[i]].avgVisits;
        sortedResult[sortedKeys[i]].avgVisits = Number((currentVisits / multiplier).toFixed(2));
        delete sortedResult[sortedKeys[i]].count;
    }
    console.log(JSON.stringify(sortedResult));
}

solve([
    'Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov | PHP | 3.00 | 2',
    'Ivan Petrov | C #   | 3.00 | 2',
    'Peter Nikolov | C #   | 5.50 | 8',
    'Maria Ivanova | C #   | 5.83 | 7',
    'Ivan Petrov | C #   | 4.12 | 5',
    'Ivan Petrov | PHP | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9'
]);

/* You are given a list of students score given as text table with the following columns: 
 student name, course, grade, number of visits. A student can have several grades and 
 visits for the same course. Write a JavaScript function to aggregate the results and 
 print then as JSON string as shown in the examples below.
Input
The input is passed to the first JavaScript function found in your code as array of strings 
holding the table lines. The input data will always be valid and in the format described. 
There is no need to check it explicitly.
Example:
Input
Peter Nikolov | PHP  | 5.50 | 8
Maria Ivanova | Java | 5.83 | 7
Ivan Petrov   | PHP  | 3.00 | 2
Ivan Petrov   | C#   | 3.00 | 2
Peter Nikolov | C#   | 5.50 | 8
Maria Ivanova | C#   | 5.83 | 7
Ivan Petrov   | C#   | 4.12 | 5
Ivan Petrov   | PHP  | 3.10 | 2
Peter Nikolov | Java | 6.00 | 9
Output
{"C#":{"avgGrade":4.61,"avgVisits":5.5,"students":["Ivan Petrov","Maria Ivanova","Peter Nikolov"]},
 "Java":{"avgGrade":5.92,"avgVisits":8,"students":["Maria Ivanova","Peter Nikolov"]},
 "PHP":{"avgGrade":3.87,"avgVisits":4,"students":["Ivan Petrov","Peter Nikolov"]}}                    */