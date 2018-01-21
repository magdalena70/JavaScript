function solve(n) {
    if (n) {
        for (var index = 0; index < n; index++) {
            console.log('* '.repeat(n));
        }
    } else {
        for (var index = 0; index < 5; index++) {
            console.log('* '.repeat(5));
        }
    }
}

solve();