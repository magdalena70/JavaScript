function solve(str){
    let key = str.toLowerCase();
    let days = {
        'monday': 1,
        'tuesday': 2,
        'wednesday': 3,
        'thursday': 4,
        'friday': 5,
        'saturday': 6,
        'sunday': 7
    };

    if(days[key]){
        console.log(days[key]);
    }else{
        console.log('error');
    }
}

solve('Friday');