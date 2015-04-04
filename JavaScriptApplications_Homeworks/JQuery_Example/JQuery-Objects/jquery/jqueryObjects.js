$(document).ready(function(){
	'use strict'
	
	$('#wrapper').hide();
	$('#wrapper').fadeIn(3000);
	$('#add').on('click', addNew);
	function addNew(){
		var newValue = $('input').val();
		var newList = $('<li>').text(newValue);
		$('ul').append(newList);
		$('input').val('');
	}
	
	var btnRF = $('<button></button>')
		.text('Remove the first one')
		.addClass('removeBtn')
		.on('click', removeFirst)
		.appendTo('#wrapper');
	function removeFirst(){
		$('ul').children().first().remove();
	}
	
	var btnRl = $('<button></button>')
		.text('Remove the last one')
		.addClass('removeBtn')
		.on('click', removeLast)
		.appendTo('#wrapper');
	function removeLast(){
		$('ul').children().last().remove();
	}
	
	$('*').css('margin', '10px');
});
