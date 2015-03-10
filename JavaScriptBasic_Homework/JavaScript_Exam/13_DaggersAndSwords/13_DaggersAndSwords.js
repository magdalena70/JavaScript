function solve(input){
    if (input.length != 0) {
        console.log('<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>');
        console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>');
        var i;
        for (i = 0; i < input.length; i++) {
            var bladeLength = Math.floor(Number(input[i]));
            if (bladeLength > 10) {
                var typeOfBlade = '';
                if (bladeLength > 40) {
                    typeOfBlade = 'sword';
                } else {
                    typeOfBlade = 'dagger';
                }
                var typeOfApplication = '';
                var finger = bladeLength % 5;
                switch (finger) {
                    case 0: typeOfApplication = '*rap-poker'; break;
                    case 1: typeOfApplication = 'blade'; break;
                    case 2: typeOfApplication = 'quite a blade'; break;
                    case 3: typeOfApplication = 'pants-scraper'; break;
                    case 4: typeOfApplication = 'frog-butcher'; break;
                    default:
                        typeOfApplication = 'ERROR';
                }
                console.log('<tr><td>' + bladeLength + '</td><td>' + typeOfBlade + '</td><td>' + typeOfApplication + '</td></tr>');
            }
        }
        console.log('</tbody>\n</table>');
    }
}

solve([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);