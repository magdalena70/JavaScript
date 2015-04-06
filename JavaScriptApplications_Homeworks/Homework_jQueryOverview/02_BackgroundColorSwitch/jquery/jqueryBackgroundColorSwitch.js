$(document).ready(function(){
	'use strict'
	
	$('button').on('click', addColor);
	function addColor(){
		var newText,
			className,
			backgroundColor,
			newList;
		
		newText = $('#listText').val();
		className = $('#className').val();
		backgroundColor = $('#color').val();
		if(newText){
			if(className){
				newList = $('<li>')
					.text(newText)
					.attr('class', className)
					.css('background', backgroundColor);
			}else{
				newList = $('<li>')
					.text(newText);
			}
			$('ul').append(newList);
		}else{
			alert('List cannot be empty! Enter some text.');
		}
		
		$('input').val('');	
	}
	
	$('*')
		.css('margin', '5px');
	$('#wrapper')
		.css('width', '70%')
		.css('margin', 'auto')
		.css('text-align', 'center');
	$('section')
		.css('width', '90%');
	$('article')
		.css('width', '45%')
		.css('float', 'left')
		.css('border', 'dashed 2px gray')
		.css('text-align', 'left');
});