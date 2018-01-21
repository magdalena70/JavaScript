function solve(str) {
    let toUpperWords = str
        .split(/\W+/)
        .filter((value) => { return String(value).trim() })
        .join(', ')
        .toUpperCase();
    console.log(toUpperWords);
}

solve('Hi, how -- are # you?');
solve('hello');