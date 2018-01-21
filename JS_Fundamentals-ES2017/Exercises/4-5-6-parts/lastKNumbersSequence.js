function solve(n, k) {
    let sequence = [1];
    
    for (let i = 1; i < k; i++) {
        sequence = createSequence(sequence, sequence);
    }

    for (let y = 0; y < n-k; y++) {
        let previousKElements = sequence.slice(y, y + k);
        sequence = createSequence(previousKElements, sequence);
    }

    sequence.length = n;
    console.log(sequence.join(' '));

    function createSequence(arrPrevKElem, seq){
        let sum = arrPrevKElem.reduce((a, b) => Number(a) + Number(b), 0);
        seq.push(sum);
        return seq;
    }
}

solve(6, 3);