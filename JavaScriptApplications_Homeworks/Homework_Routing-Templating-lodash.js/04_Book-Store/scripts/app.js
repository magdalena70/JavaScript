var books = [
				{"book":"The Grapes of Wrath","author":"John Steinbeck","price":"54.24","language":"French"},
				{"book":"The Great Gatsby","author":"F. Scott Fitzgerald","price":"39.26","language":"English"},
				{"book":"Nineteen Eighty-Four","author":"George Orwell","price":"15.39","language":"English"},
				{"book":"Ulysses","author":"James Joyce","price":"23.26","language":"German"},
				{"book":"Lolita","author":"Vladimir Nabokov","price":"14.19","language":"German"},
				{"book":"Catch-22","author":"Joseph Heller","price":"47.89","language":"German"},
				{"book":"The Catcher in the Rye","author":"J. D. Salinger","price":"25.16","language":"English"},
				{"book":"Beloved","author":"Toni Morrison","price":"48.61","language":"French"},
				{"book":"Of Mice and Men","author":"John Steinbeck","price":"29.81","language":"Bulgarian"},
				{"book":"Animal Farm","author":"George Orwell","price":"38.42","language":"English"},
				{"book":"Finnegans Wake","author":"James Joyce","price":"29.59","language":"English"},
				{"book":"The Grapes of Wrath","author":"John Steinbeck","price":"42.94","language":"English"}
			];

// all books			
_.each(books, function(b){
	document.getElementById('allBooks')
		.innerHTML += '<li><b>'+ b.book + '</b>, author: <b>' + b.author + 
			'</b>, language: <b>'+ b.language + '</b> - prise: <b>' + b.price + '</b></li>';
});			

// Group all books by language and sort them by author			
var groupBooks = _.groupBy(books, function(b){
	return b.language; 
 });

 var sortedByAuthor = _.sortBy(groupBooks, 'author');
 _.each(sortedByAuthor, function(bookArr){
	_.each(bookArr, function(b){
		document.getElementById('groupBooks')
			.innerHTML += '<li><b>'+ b.book + '</b>, author: <b>' + b.author + 
				'</b>, language: <b>'+ b.language + '</b> - prise: <b>' + b.price + '</b></li>';
	});
	document.getElementById('groupBooks').innerHTML += '<br/>';
});	

// Get the average book price for each author
var groupByAuthor = _.groupBy(books, function(b){
	return b.author;
});

 _.each(groupByAuthor, function(bookArr){
	var sum = 0;
	var count = 0;
	var author = '';
	_.each(bookArr, function(b){
		document.getElementById('averageBookPrice')
			.innerHTML += '<li><b>'+ b.book + '</b>, author: <b>' + b.author + 
				'</b>, language: <b>'+ b.language + '</b> - prise: <b>' + b.price + '</b></li>';
		sum += parseFloat(b.price);
		count += 1;
		author = b.author;
	});
	document.getElementById('averageBookPrice')
		.innerHTML += '<li>Average book price for author '+author+': '+ parseFloat(sum / count) + '</li><br/>';
});
 
// Get all books in English or German, with price below 30.00, and group them by author
 var groupBooksByLang = _.groupBy(books, function(b){
 if(parseFloat(b.price) < 30.00){
	return (b.language == 'English' || b.language == 'German'); 
	}
 });
 
 var EnglishAndGermanBookByAuthor = _.groupBy(groupBooksByLang[true], 'author');
 console.log(EnglishAndGermanBookByAuthor);
 _.each(EnglishAndGermanBookByAuthor, function(bookArr){
	_.each(bookArr, function(b){
	console.log(b.language + ', ' + b.price);
	document.getElementById('EnglishAndGermanBookPrice')
			.innerHTML += '<li><b>'+ b.book + '</b>, author: <b>' + b.author + 
				'</b>, language: <b>'+ b.language + '</b> - prise: <b>' + b.price + '</b></li>';
	});	
	document.getElementById('EnglishAndGermanBookPrice').innerHTML += '<br/>';
 });