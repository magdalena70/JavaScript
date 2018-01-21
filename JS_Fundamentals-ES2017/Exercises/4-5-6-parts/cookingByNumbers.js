function solve(arr) {
    let number = arr[0];

    for (let i = 1; i < arr.length; i++) {
        number = cooking(arr[i], number);
        console.log(number);
    }

    function cooking(action, number) {
        switch (action) {
            case 'chop': return number = number / 2;
            case 'dice': return number = Math.sqrt(number);
            case 'spice': return number = number + 1;
            case 'bake': return number = number * 3;
            case 'fillet': return number = number - ((number * 20) / 100);
            default: return;
        }
    }
}

//solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);