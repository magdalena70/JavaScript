function solve(str) {
    let regex = /\((.+?)\)/g;
    let matches = str.match(regex);
    if (matches) {
        console.log(matches.join(', ').replace(/[\(\)]/gi, ''));
    }
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');