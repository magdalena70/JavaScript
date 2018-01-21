function solve(a, b, operatorStr){
    let result;
    switch (operatorStr) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;        
        case '/': result = a / b; break;
        case '%': result = a % b; break;        
        default: return;
    }

    console.log(result);
}

solve(2, 0, '/');
solve(2, 4, '%..');