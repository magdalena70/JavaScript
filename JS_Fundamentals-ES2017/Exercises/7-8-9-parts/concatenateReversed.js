function solve(strArr) {
    let result = '';
    let reversed = strArr.reverse()
        .forEach((element) => {
            result += element.split('')
                .reverse()
                .join('');
        }, this);

    console.log(result);
}

solve(['I', 'am', 'student']);