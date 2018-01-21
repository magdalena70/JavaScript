function solve(arr){
    let day = arr[0],
        month = arr[1],
        year = arr[2],
        date = new Date(year, month, day),
        previousMonth = date.getMonth()-1,
        lastDay = new Date(year, previousMonth, 0);

    console.log(lastDay.getDate());
}

solve([17, 3, 2002]); // 28 febr. is last day of month
solve([13, 12, 2004]); // 30 november