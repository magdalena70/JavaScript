$(function(){
	var Application_ID = "GboTAnbezDS8Xwj8fZXlH0Uyrbxb197nFjV92Sg7";
	var REST_API_Key = "kGp7reS2t0yLxXEJ3ZcrszOmp4yB8AS1SqbfokF8";
	
	$('#loadCountries').on('click', loadCountries);
	$('#loadAllTowns').on('click', loadAllTowns);
	$('#hideAllTowns').on('click', function(){
		$('#town').empty();
	});
	$('#hideAll').on('click', function(){
		$('#country').empty();
		$('#town').empty();
	})
	
	function loadCountries(){
		$.ajax({
			method: "GET",
			headers: {
				"X-Parse-Application-ID": Application_ID,
				"X-Parse-REST-API-Key": REST_API_Key
			},
			url: "https://api.parse.com/1/classes/Country"
		}).success(function(data){
				appendInputFields()
				
				for (var c in data.results) {
					var country = data.results[c];
					var countryId = country.objectId;
					var countryItem = $('<li>');
					var countryLink = $('<a href="#">')
						.data('country', country)
						.data('countryId', countryId)
						.click(loadCurrentCountryTowns)
						.text(country.countryName)
						.appendTo(countryItem);
					var addTownButton = $('<button class="addNewTown" >')
						.text('Add New Town')
						.data('countryId', countryId)
						.click(addNewTown)
						.appendTo(countryItem);						
					var removeCountryButton = $('<button class="removeCountry" >')
						.text('Remove this country')
						.data('countryId', countryId)
						.click(removeCountry)
						.appendTo(countryItem);	
					var editCountryButton = $('<button class="editCountry" >')
						.text('Edit this country name')
						.data('countryId', countryId)
						.data('countryName', country.countryName)
						.click(editCountry)
						.appendTo(countryItem);	
					$(".countries").append(countryItem);
				}
				
		})error(printError)
	}
	
	function appendInputFields(){
		$('#country').empty();
				$('#country').append('<h2>Countries:</h2>')
					.append('<p>Enter any country name and add new Country/ or edit the name of an existing Country below:</p>')
					.append('<label for="newCountryName">New Country Name: </label>')
					.append('<input type="text" id="newCountryName" placeholder=" New country name"/>')
					.append('<button id="addNewCountry">Add New Country</button>')
					.append('<p>Enter a Town and add it to any Country below:</p>')
					.append('<label for="newTownName">New Town Name: </label>')
					.append('<input type="text" id="newTownName" placeholder=" New town name"/>')
					.append('<p>Click on a Country and see the town(s) in it:</p>')
					.append('<ul class="countries"></ul>');
				$('#addNewCountry').on('click', addNewCountry);
	}
	
	function addNewCountry(){
		var newCountryName = $('#newCountryName').val();
		if(newCountryName != ''){
			$.ajax({
				method: "POST",
				headers: {
					"X-Parse-Application-Id": Application_ID,
					"X-Parse-REST-API-Key": REST_API_Key
				},
				data: JSON.stringify({
					"countryName": newCountryName
				}),
				contentType: "application/json",
				url: "https://api.parse.com/1/classes/Country"
			}).success(function(data){
					loadCountries();
					$('#newCountryName').val('');
			})error(printError)
		}else{
			$('#newCountryName').css('background', 'red');
		}
	}
	
	function loadCurrentCountryTowns(){
        var country = $(this).data('country');
		var countryId = $(this).data('countryId');
		var resultTowns = $('<div class="resultTowns">');
		$.ajax({
			method: "GET",
			headers: {
				"X-Parse-Application-ID": Application_ID,
				"X-Parse-REST-API-Key": REST_API_Key
			},
			url: 'https://api.parse.com/1/classes/Town?where={"townOfCountry":{ "__type":"Pointer","className":"Country","objectId":"'+countryId+'"}}'
		}).success(function(data){
				$('#country').empty();
				resultTowns
					.appendTo($('#country'))
					.append('<h3>Town(s) in '+country.countryName+':</h3>')
					.append('<ul class="towns"></ul>');
					$('.towns').empty();
				for(var t in data.results){
					var town = data.results[t];
					var townItem = $('<li>')
						.data('town', town)
						.text(town.townName)
						.appendTo($(".towns"));
				}	
				
		})error(printError)
	}
	
	function removeCountry(){
        var countryId = $(this).data('countryId');
        $.ajax({
            method: "DELETE",
            headers: {
                "X-Parse-Application-Id": Application_ID,
                "X-Parse-REST-API-Key": REST_API_Key
            },
            url: "https://api.parse.com/1/classes/Country/" + countryId
        }).success(function(data){
				loadCountries();
		})error(printError)
    }
	
	function editCountry(){
        var countryId = $(this).data('countryId');
		var country = $(this).data('country');
        var editCountryName = $('#newCountryName').val();
		if(editCountryName != ''){
			$.ajax({
				method: "PUT",
				headers: {
					"X-Parse-Application-Id": Application_ID,
					"X-Parse-REST-API-Key": REST_API_Key
				},
				data: JSON.stringify({
					"countryName": editCountryName
				}),
				contentType: "application/json",
				url: "https://api.parse.com/1/classes/Country/" + countryId
			}).success(function(data){
					loadCountries();
					$('#newCountryName').val('');
			})error(printError)
		}else{
			$('#newCountryName').css('background', 'red');
		}
    }
	
	function addNewTown(){
        var newTownName = $('#newTownName').val();
		if(newTownName != ''){
			var countryId = $(this).data('countryId');
			$.ajax({
				method: "POST",
				headers: {
					"X-Parse-Application-Id": Application_ID,
					"X-Parse-REST-API-Key": REST_API_Key
				},
				data: JSON.stringify(
					{
						"townName": newTownName,
						"townOfCountry":
						{
							"__type": "Pointer",
							"className": "Country",
							"objectId": countryId
						}
					}
				),
				contentType: "application/json",
				url: "https://api.parse.com/1/classes/Town"
			}).success(function(data){
				loadAllTowns();
				$('#newTownName').val('');
			})error(printError)
		}else{
			$('#newTownName').css('background', 'red');
		}
    }
	
	function loadAllTowns(){
		var resultAllTowns = $('<div class="resultAllTowns">');
		$.ajax({
			method: "GET",
			headers: {
				"X-Parse-Application-ID": Application_ID,
				"X-Parse-REST-API-Key": REST_API_Key
			},
			url: "https://api.parse.com/1/classes/Town"
		}).success(function(data){
				$('#town').empty();
				resultAllTowns
					.appendTo($('#town'))
					.append('<h3>All town(s):</h3>')
					.append('<ul class="allTowns"></ul>');
					$('.allTowns').empty();
				for(var t in data.results){
					var town = data.results[t];
					var townItem = $('<li>')
						.data('town', town)
						.text(town.townName)
						.appendTo($(".allTowns"));
					var removeTownButton = $('<button class="removeTown" >')
						.text('Remove this town')
						.data('townId', town.objectId)
						.click(removeTown)
						.appendTo(townItem);						
					var editTownButton = $('<button class="editTown" >')
						.text('Edit this town name')
						.data('townId', town.objectId)
						.data('townName', town.townName)
						.click(editTown)
						.appendTo(townItem);
					$(".allTowns").append(townItem);
				}
				
		})error(printError)
	}
	
	function removeTown(){
        var townId = $(this).data('townId');
        $.ajax({
            method: "DELETE",
            headers: {
                "X-Parse-Application-Id": Application_ID,
                "X-Parse-REST-API-Key": REST_API_Key
            },
            url: "https://api.parse.com/1/classes/Town/" + townId
        }).success(function(data){
			loadAllTowns();
		})error(printError)
    }
	
	function editTown(){
        var townId = $(this).data('townId');
        var oldTownName = $(this).data('townName');
        var newTownName = prompt('Rename country:', oldTownName) || oldTownName;

        $.ajax({
            method: "PUT",
            headers: {
                "X-Parse-Application-Id": Application_ID,
                "X-Parse-REST-API-Key": REST_API_Key
            },
            data: JSON.stringify({
                    "townName": newTownName
            }),
            contentType: "application/json",
            url: "https://api.parse.com/1/classes/Town/" + townId,
        }).success(function(data){
			loadAllTowns();
		}).error(printError)
    }
	
	function printError(err){
		throw new Error(err.responseText);
	}
})