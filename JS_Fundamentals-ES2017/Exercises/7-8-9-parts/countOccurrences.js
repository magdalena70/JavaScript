function solve(substr, text){
    let position = 0;
    let count = 0;
    let index = text.indexOf(substr, position);
    while (index > -1){
        count++;
        position = index + 1;       
        index = text.indexOf(substr,position);
    }

    console.log(count);
}

solve('ma','Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');
solve('the', 'The quick brown fox jumps over the lay dog.');
solve('haha', 'hahaha'); // Overlapping strings are allowed.