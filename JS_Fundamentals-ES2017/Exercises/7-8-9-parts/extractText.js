function solve(str) {
    let substr = '',
        count = 0,
        result = [];

    for (let element of str) {
        if (element === '(') {
            count++;
        }

        if (count > 0 && element !== ')') {
            substr += element;
        }

        if (element === ')') {
            count = 0;
            result.push(substr.replace(substr[0], ''));
            substr = '';
        }

    }

    console.log(result.filter((a) => a).join(', '));
}

solve('Rakiya )Bulgarian brandy) is )self-made liquor alcoholic drink)');