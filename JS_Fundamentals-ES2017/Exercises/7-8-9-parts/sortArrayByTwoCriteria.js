function solve(arr) {
    let result = arr.sort(function (a, b) {
        if (a.length != b.length) {
            return a.length > b.length;
        } else {
            return a.toLowerCase() > b.toLowerCase();
        }
    });

    result.forEach(function(el) {
        console.log(el);
    }, this);
}

//solve(['alpha', 'beta', 'gamma']);
//solve(['Isacc','Theodor','Jack','Harrison','George'])