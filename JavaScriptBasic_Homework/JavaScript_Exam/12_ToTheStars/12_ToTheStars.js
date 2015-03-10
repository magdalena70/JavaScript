function solve(input){
    if (input.length != 0) {
        var star1 = input[0].split(' ');
        var nameStar1 = star1[0];
        var star1X = Number(star1[1]);
        var star1Y = Number(star1[2]);

        var star2 = input[1].split(' ');
        var nameStar2 = star2[0];
        var star2X = Number(star2[1]);
        var star2Y = Number(star2[2]);

        var star3 = input[2].split(' ');
        var nameStar3 = star3[0];
        var star3X = Number(star3[1]);
        var star3Y = Number(star3[2]);

        var normandyCoordinates = input[3].split(' ');
        var normandyX = Number(normandyCoordinates[0]);
        var normandyY = Number(normandyCoordinates[1]);

        var normandyTurns = Number(input[4]);
        var location = '';
        var i;
        for (i = 0; i <= normandyTurns; i++) {
            if ((normandyX >= (star1X - 1) && normandyX <= (star1X + 1)) &&
               (normandyY >= (star1Y - 1) && normandyY <= (star1Y + 1))) {
                console.log(nameStar1.toLowerCase());
            }else if ( (normandyX >= (star2X - 1) && normandyX <= (star2X + 1)) &&
               (normandyY >= (star2Y - 1) && normandyY <= (star2Y + 1))) {
                console.log(nameStar2.toLowerCase());
            }else if ((normandyX >= (star3X - 1) && normandyX <= (star3X + 1)) &&
               (normandyY >= (star3Y - 1) && normandyY <= (star3Y + 1))) {
                console.log(nameStar3.toLowerCase());
            } else {
                console.log('space');
            }
            normandyY++;
        }
    }
}

solve([
    'Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
     4
]);

/* The navigation field is a 2D grid. You are given the names of 3 star systems, along with their coordinates(sx, sy) 
and the Normandy’s initial coordinates(nx, ny). Assume that a star’s coordinates are in the center of a 2x2 rectangle.
The Normandy always moves in an upwards direction, 1 unit every turn. 
Your task is to inform the Normandy of its current location during its movement.
The Normandy can only be at one location at a time. The possible locations are 
"<star1 name>", "<star2 name>", "<star3 name>" and "space". 
In other words, if the Normandy is in the range of Alpha-Centauri, her location is "alpha-centauri". 
If she's not in the range of any star system, her location is just "space".
Star systems will NOT overlap.
Example
Input
Sirius 3 7
Alpha-Centauri 7 5
Gamma-Cygni 10 10
8 1
6

Output
space 
space
space
alpha-centauri
alpha-centauri
alpha-centauri
space   */