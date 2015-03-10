function hideOddRows() {
    var row = document.getElementsByTagName('tr');

    for (var i = 0; i < row.length; i += 2) {
            row[i].style.display = 'none';
    }
}

document.getElementById('btnHideOddRows').addEventListener('click', hideOddRows);