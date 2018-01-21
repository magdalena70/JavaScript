function solve(inch){
    let foot = inch / 12,
    resultFoot = foot.toString().split('.'),
    resultInch = 0;
    if(resultFoot[1]){
        resultInch = Number('0.'+resultFoot[1]) * 12;
    }
    console.log(resultFoot[0] + '\'-' + Math.round(resultInch) + '"');
}

solve(11);
solve(36);
solve(55);