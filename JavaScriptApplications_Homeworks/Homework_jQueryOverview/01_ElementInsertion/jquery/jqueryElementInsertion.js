$(document).ready(function(){
	'use strict'
	
	$('#wrapper').hide();
	$('#wrapper').fadeIn(3000);
	$('#addAfter').on('click', addNewAfter);
	function addNewAfter(){
		var newValue = $('input').val();
		if(newValue){
			var newList = $('<li>').text(newValue);
			newList.css('color', 'green');
			$('ul').append(newList);
		}
		
		$('input').val('');
	}
	
	$('#addBefore').on('click', addNewBefore);
	function addNewBefore(){
		var newValue = $('input').val();
		if(newValue){
			var newList = $('<li>').text(newValue);
			newList.css('color', 'red');
			$('ul').prepend(newList);
		}
		
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