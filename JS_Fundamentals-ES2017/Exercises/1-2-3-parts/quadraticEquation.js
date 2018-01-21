function solve(a, b, c){
    let discriminant = Math.pow(b, 2) - 4 * a * c,
        x1, 
        x2;
    if(discriminant > 0){
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a); 
        if(x1 < x2){
            console.log(x1);
            console.log(x2);
        } else {
            console.log(x2);
            console.log(x1);
        }   
    }

    if(discriminant === 0){
        x = -b / (2 * a); 
        console.log(x);       
    }

    if(discriminant < 0){
        console.log('No');        
    }
}

solve(6, 11, -35);
solve(1, -12, 36);
solve(5, 2, 1);