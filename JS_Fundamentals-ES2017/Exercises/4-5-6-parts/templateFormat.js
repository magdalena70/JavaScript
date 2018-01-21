function solve(arr) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for (let i = 0; i < arr.length; i += 2) {
        let question = arr[i]
            answer = arr[i + 1];
        
        console.log('  <question>');
        console.log('    ' + question);
        console.log('  </question>');        
        console.log('  <answer>');
        console.log('    ' + answer);
        console.log('  </answer>');                
    }

    console.log('</quiz>');
}

solve(
    [
        "Dry ice is a frozen form of which gas?",
        "Carbon Dioxide",
        "What is the brightest star in the night sky?",
        "Sirius"
    ]);