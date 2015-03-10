function changeButtonValue() {
    var button = document.getElementById('button');
    var buttonValue = document.getElementById('button').innerHTML;

    if (buttonValue == 'Like') {
        button.innerHTML = 'Unlike';
    } else {
        button.innerHTML = 'Like';
    }
}