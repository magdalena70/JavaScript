function solve(str){
    if(str === str.split('').reverse().join('')){
        console.log('true')
    }else{
        console.log('false');
    }
}

solve('haha');
solve('racecar');