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
				_this.addTemplate(data);
				console.log(data);
			},
			function(err){
				noty({
						text: 'Error',
						type: 'error'
					});
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
					$('#books').empty();
					_this.showAllBooks();
					noty({
						text: 'Successful update'
					});
				},
				function(err){
					noty({
						text: 'Error',
						type: 'error'
					});
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
					isbn: bookIsbn,
				},
				function(data){
					_thisViewModel.showAllBooks();
					$('#bookTitle').val('');
					$('#bookAuthor').val('');
					$('#bookIsbn').val('');
					noty({
						text: 'Cuccessfully added a new book'
					});
				},
				function(err){
					noty({
						text: 'Error',
						type: 'error'
					});
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
				noty({
						text: 'Error',
						type: 'error'
					});
				throw new Error(err.responseText);
			});
	}
	
	ViewModel.prototype.attachEventListener = function attachEventListener(_thisViewModel){
		$('#addBook').click(function(){
			_thisViewModel.addBook(_thisViewModel);
		});
	}
	
	ViewModel.prototype.addTemplate = function addTemplate(data){
		var _this = this;
		$.get('templates/template.html', function(template){
			var view = data;
			var html = Mustache.render(template, view);
			$('#books').html(html);
		
			data.results.forEach(function(book){
				$('#updateBtn-'+book.objectId).click(function(){
					_this.updateBook(book.objectId);
				}).hide().show(2000);
				$('#deleteBtn-'+book.objectId).click(function(){
					_this.deleteBook(book.objectId);
				}).hide().show(2000);
			});
		});
	}
	
	return {
		loadViewModel: function(model){
			return new ViewModel(model);
		}
	}
}());