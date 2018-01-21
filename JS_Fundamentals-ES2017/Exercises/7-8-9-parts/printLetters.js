function solve(str) {
    let lettersArr = str.split('')
        .forEach((letter, index) => {
            console.log(`str[${index}] -> ${letter}`);
        }, this);
}

solve('Hello, World!');