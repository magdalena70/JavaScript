function solve(input){
    if (input.length != 0) {
        var i;
        for (i = 0; i < input.length; i++) {
            var line = input[i].split(' ');
            //console.log(line);
            var carModel = line[0];
            var fuelType = line[1];
            var consumption = 0;
            if (fuelType == 'gas') {
                consumption = 1.2 * 10 / 100;
            }else if (fuelType == 'petrol') {
                consumption = 1 * 10  / 100;
            } else {
                consumption = 0.8 * 10 / 100;
            }

            var luggage = parseFloat(line[3]);
            var extraCons = luggage * 0.01;
           

            var routeNum = Number(line[2]);
            var totalRoad;
            var snowRoad;
            if (routeNum == 1) {
                totalRoad = 110;
                snowRoad = 10;
            } else if (routeNum == 2) {
                totalRoad = 96;
                snowRoad = 30;
            }
            var snowFuel = consumption * 30 / 100;
            var totalCons = consumption * totalRoad + extraCons + (snowRoad * snowFuel);
            console.log(carModel + ' ' + fuelType + ' ' + routeNum + ' ' + Math.round(totalCons));
        }
    }
}

solve([
    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'
]);

//57 точки в judge