'use strict'
$(document.body).css('text-align', 'center');
$('div').css('width', '70%');
$('div').css('border', 'dashed 1px black');
$('div').children().first().css('color', 'red');
$('li').parent().css('list-style-type', 'none');
$('ul').children().text('I am a child of ul.');
$('ul').parent().css('border', 'solid 1px black');
$('ul').children().last().html('<button id="btn">Click me</button>');
$('button#btn').click(function(){
	$('ul').parent().css('background', 'orange');
	$('#btn').text('Click me twise');
});
$('button#btn').dblclick(function(){
    $(this).remove();
	var div = $('<div>I am a jquery created element</div>');
	div.appendTo('#wrapper');
	div.append('<div>I am a jquery created element too</div>'); // append after div
	div.prepend('<div>I am a jquery created element too</div>'); // prepend before div
	div.children().last().css('background', 'red');
	div.children().first().css('background', 'green');
	$('#wrapper').children().last().css('background', 'yellow');
	$('ul').before($('<div>I am a jquery created element too</div>'));// append element before ul
	$('ul').before().css('border', 'dotted 1px red'); // this is ul
	$('section').children().first().css('border', 'solid 1px green'); // element before ul
	$('section').prev().append('<button id="remove" onclick="removeSection()">Remove section</button>');
});
function removeSection(){
	$('section').remove();
};



