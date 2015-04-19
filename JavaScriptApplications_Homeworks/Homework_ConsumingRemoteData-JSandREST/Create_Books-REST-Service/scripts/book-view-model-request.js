var app = app || {};

app.viewModel = (function(){
	function ViewModel(model){
		this.model = model;
		this.attachEventListener(this);
	}
	
	ViewModel.prototype.showAllBooks = function showAllBooks(){
		$('#books').show();
		var _this = this;
		this.model.books.getAllBooks(
			function(data){
				data.results.forEach(function(book){
					_this.addBookToDom(book.title, book.author, book.isbn, book.objectId);
				})
				console.log(data);
			},
			function(err){
				throw new Error(err.responseText);
			}
		);
	}
	
	ViewModel.prototype.updateBook = function updateBook(bookId){
		var _this = this;
		var oldBookTitle = $(this).data('title');
		var oldBookAuthor = $(this).data('author');
		var oldBookIsbn = $(this).data('isbn');
        var newBookTitle = prompt('Rename book title:', oldBookTitle) || oldBookTitle;
		var newBookAuthor = prompt('Rename book author:', oldBookAuthor) || oldBookAuthor;
		var newBookIsbn = prompt('Rename book ISBN:', oldBookIsbn) || oldBookIsbn;
		if( newBookTitle || newBookAuthor || newBookIsbn){
			this.model.books.updateBook(
				bookId,
				{
					title: newBookTitle,
					author: newBookAuthor,
					isbn: newBookIsbn
				},
				function(data){
					console.log(data.title);
					$('#books').empty();
					_this.showAllBooks();
					noty({
						text: 'Successful update'
					});
				},
				function(err){
					throw new Error(err.responseText);
				}
			);
			}else{
				noty({
					text: 'No update'
				});
			}
	}
	
	ViewModel.prototype.addBook = function addBook(_thisViewModel){
		var bookTitle = $('#bookTitle').val();
		var bookAuthor = $('#bookAuthor').val();
		var bookIsbn = $('#bookIsbn').val();
		if(bookTitle && bookAuthor && bookIsbn){
			_thisViewModel.model.books.postBook(
				{
					title: bookTitle,
					author: bookAuthor,
					isbn: bookIsbn
				},
				function(data){
					_thisViewModel.addBookToDom(bookTitle, bookAuthor, bookIsbn, data.objectId);
					$('#bookTitle').val('');
					$('#bookAuthor').val('');
					$('#bookIsbn').val('');
					noty({
						text: 'Cuccessfully added a new book'
					});
				},
				function(err){
					throw new Error(err.responseText);
				}
			);
		}else{
			alert('Error - Empty input field!');
			console.log('Error - Empty input field!');
		}
	}
	
	ViewModel.prototype.deleteBook = function deleteBook(bookId){
		this.model.books.removeBook(
			bookId,
			function(data){
				$('#books').find('[bookDiv-Id=' + bookId +']').remove();
				noty({
						text: 'You removed this book',
					});
			},
			function(err){
				throw new Error(err.responseText);
			});
	}
	
	ViewModel.prototype.attachEventListener = function attachEventListener(_thisViewModel){
		$('#addBook').click(function(){
			_thisViewModel.addBook(_thisViewModel);
		});
	}
	
	ViewModel.prototype.addBookToDom = function addBookToDom(bookTitle, bookAuthor, bookIsbn, bookId){
		var _this = this;
		var countTime = 3000;
		var bookDiv = $('<div/>')
			.addClass('bookList')
			.attr('bookDiv-Id', bookId)
			.data('title', bookTitle)
			.data('author', bookAuthor)
			.data('isbn', bookIsbn)
			.fadeToggle(countTime);
		var bookTitle = $('<p/>')
			.attr('class', 'info')
			.text('Title: ' + bookTitle)
			.appendTo(bookDiv);
		var bookAuthor = $('<p/>')
			.attr('class', 'info')
			.text('Author: ' + bookAuthor)
			.appendTo(bookDiv);
		var bookIsbn = $('<p/>')
			.attr('class', 'info')
			.text('book-ISBN: ' + bookIsbn)
			.appendTo(bookDiv);
		var deleteBtn = $('<p id="deleteBtn">Delete book</p>')
			.click(function(){
				_this.deleteBook(bookId);
			})
			.appendTo(bookDiv);
		var updateBtn = $('<p id="updateBtn">Update book</p>')
			.click(function(){
				_this.updateBook(bookId);
			})
			.appendTo(bookDiv);
		$('#books').append(bookDiv);
	}
	
	return {
		loadViewModel: function(model){
			return new ViewModel(model);
		}
	}
}());