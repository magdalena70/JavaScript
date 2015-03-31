
	require(['container', 'section', 'item'],function(Container, Section, Item){
	'use strict'
		var m_names,
			date,
			curr_date,
			curr_month,
			curr_year,
			currentDate,
			container;

		m_names = new Array("January", "February", "March", 
					"April", "May", "June", "July", "August", "September", 
					"October", "November", "December");
		date = new Date();
		curr_date = date.getDate();
		curr_month = date.getMonth();
		curr_year = date.getFullYear();
		currentDate = '<span>' + curr_date + "-" + m_names[curr_month] + "-" + curr_year + '</span>';
		
		container = new Container('TODO List - ' + currentDate);
		container.addToDom('#wrapper');
		console.log(container);
	});
