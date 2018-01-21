function solve(arr){
    let movieTitle = arr[0].toLowerCase(),
        dayOfWeek = arr[1].toLowerCase(),
        result = 'error';
    if (movieTitle === 'the godfather') {
        switch (dayOfWeek) {
            case 'monday': result = 12; break;
            case 'tuesday': result = 10; break;
            case 'wednesday': result = 15; break;
            case 'thursday': result = 12.50; break;
            case 'friday': result = 15; break;
            case 'saturday': result = 25; break;
            case 'sunday': result = 30; break;
            default: result = 'error'; break;
        }
    } else if(movieTitle === 'schindler\'s list'){
        switch (dayOfWeek) {
            case 'monday': result = 8.50; break;
            case 'tuesday': result = 8.50; break;
            case 'wednesday': result = 8.50; break;
            case 'thursday': result = 8.50; break;
            case 'friday': result = 8.50; break;
            case 'saturday': result = 15; break;
            case 'sunday': result = 15; break;
            default: result = 'error'; break;
        }
    } else if(movieTitle === 'casablanca'){
        switch (dayOfWeek) {
            case 'monday': result = 8; break;
            case 'tuesday': result = 8; break;
            case 'wednesday': result = 8; break;
            case 'thursday': result = 8; break;
            case 'friday': result = 8; break;
            case 'saturday': result = 10; break;
            case 'sunday': result = 10; break;
            default: result = 'error'; break;
        }
    } else if(movieTitle === 'the wizard of oz'){
        switch (dayOfWeek) {
            case 'monday': result = 10; break;
            case 'tuesday': result = 10; break;
            case 'wednesday': result = 10; break;
            case 'thursday': result = 10; break;
            case 'friday': result = 10; break;
            case 'saturday': result = 15; break;
            case 'sunday': result = 15; break;
            default: result = 'error'; break;
        }
    } else {
        result = 'error';
    }

    console.log(result);
}

solve(['The Wizard of Oz', 'Wednesday']);