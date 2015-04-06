$(document).ready(function(){
	'use strict'
	
	$('#wrapper').css('width', '70%').css('margin', 'auto');
	$('h1').css('text-align', 'center');
	$('section > *').css('margin', '5px');
	$('section').css('border', 'dashed 3px gray');
	$('#generate').on('click', generateTable);
	function generateTable(){
		if($('#input').val()){
			var json,
				jQueryObj,
				key,
				value,
				table,
				tableHead,
				row,
				coll;
				
			json = $('#input').val();
			jQueryObj = jQuery.parseJSON(json);
			table = $('<table border="2" collspan="2" rowspan="2" bgColor="black">')
				.css('width', '550')
				.css('color', 'white')
				.css('margin-bottom', '10px');
			row = $('<tr>').css('border-color', 'white');
			table.append(row);
			
			// make <thead>
			for(var i in jQueryObj[0]){
				tableHead = $('<th>')
					.text(i)
					.css('padding', '5px')
					.css('font-size', '23px')
					.css('font-variant', ' small-caps');				
				row.append(tableHead);
			}
			
			// make <tbody>
			for (key in jQueryObj) {
				row = $('<tr>').css('border-color', 'white');
				table.append(row);
				for (value in jQueryObj[key]) {
					if(jQueryObj[key].hasOwnProperty(value)) {
						coll = $('<td>').css('padding', '5px');
						coll.text(jQueryObj[key][value]);
						row.append(coll);
					}
				}
			}
			
			$('#table').append(table);
			$('#input').val('');
		}
	}
});

