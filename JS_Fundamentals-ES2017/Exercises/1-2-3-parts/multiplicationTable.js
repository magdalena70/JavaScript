function solve(n){
    console.log('<table border="1">');      
    let th ='<tr><th>x</th>';
    for (var i = 1; i <= n; i++) {
        th += `<th>${i}</th>`;
    }
    th += `</tr>`;
    console.log(th);

    for (var y = 1; y <= n; y++) {       
            let str = `<th>${y}</th>`;
            let x = y;            
        for (var count = 0; count < n; count++) {
            str += `<td>${x}</td>`;   
            x += y;                   
        }
        
        console.log(` <tr>${str}</tr>`);
    }
    console.log('</table>');
}

solve(3);