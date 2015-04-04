'use strict'
			
$('*').css('font-style', 'italic'); // select all html elements
$('h1').css('text-align', 'center'); // select by tag name of html element 
var section = $('section'); // create variable 
section.css('width', '50%');
section.css('border', 'solid 1px black');
section.css('margin', 'auto');
$('ul').css('list-style-type', 'none');
$('li').text('Hello world!');
$('li').first().attr('id', 'btn');
$('#btn').html('<button onclick="changeListText()">Click me</button>'); // select by id 
$('a[href *= "w3schools"]').css('color', 'black'); //select by operator '*=' 
			
console.log('li parent is: ');
console.log($('li').parent());
console.log('li all parents: ');
console.log($('li').parents());
console.log('ul children: ');
console.log($('ul').children());

function changeListText(){
	section.css('background', 'yellow');
	$('li').hide().text('I am JQuery!');
	$('li').first().html('<button onclick="returnListText()">Change text in list</button>');
	$($('li')[2]).html('<div>I am first child in li</div>'); // select by index and parse to jquery 
	$('li:has(div)').css('background', 'green'); // select by tag name of child
	$('li:even').css('font-size', '22px'); // select by css selector 
	$('li:not(:visible)').show(); // select by not() 
	$('a[href *= "w3schools"]').css('color', 'green'); // select by operator '*=' 
	$('a').parent().css('border', 'solid 1px green');
}
			
function returnListText(){
	section.css('background', 'red');
	$('li').hide().text('Hello World!');
	$('ul>li:last-child').html('<button onclick="changeListText()">Return text in list</button>'); // select by css selector 
	$('li:eq(2)').html('<div>I am a div nested in li</div>'); // select by index 
	$('li:contains(\'I am a div\')').css('background', 'orange'); // select by text of child 
	$('div').css('border', 'solid 1px black');
	$('div').css('width', '60%');
	$('div').css('margin', 'auto');
	$('div').css('background', 'yellow'); 
	$('a[href *= "w3schools"]').css('color', 'red'); // select by operator '*=' 
	$('li').show(); // select all li 
}