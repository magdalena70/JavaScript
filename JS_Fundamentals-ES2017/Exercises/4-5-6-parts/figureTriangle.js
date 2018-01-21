function solve(n){
    let star = '*';
    if(n === 1){
        console.log(star);
    }else{
        for (var i = 0; i < n; i++) {
            console.log(star.repeat(i));
        }

        for (var i = n; i > 0; i--) {
            console.log(star.repeat(i));
        }
    }
}

solve(4);