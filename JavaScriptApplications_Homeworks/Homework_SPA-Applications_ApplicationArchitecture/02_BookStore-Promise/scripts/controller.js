var app = app || {};

app.controller = (function () {
    function Controller(data) {
        this._data = data;
        this._selector = '#main';
    }

    Controller.prototype.attachEvents = function () {
        deleteBookHandler.call(this, this._selector);
        addBookHandler.call(this, this._selector);
        editBookHandler.call(this, this._selector);
    };

    var deleteBookHandler = function (selector) {
        var _this = this;

        $(selector).on('click', '.delete-book-btn', function (ev) {
			
			noty({
				text: 'Do you want to continue?',
				layout: 'center',
				type: 'success',
				buttons: [
					{addClass: 'btn btn-primary', text: 'Ok', onClick: function($noty) {
						// this = button element
						// $noty = $noty element
						var objectId = $(ev.target).parent().attr('id');
						_this._data.books.delete(objectId)
							.then(function (data) {
								$noty.close(2000);
								this.Noty.success('You clicked "Ok" button: The book is deleted !');
								$('#' + objectId).remove();
								_this.loadAllBooksPage();
							}, function (error) {
								this.Noty.error('Error: Book is not deleted.');
								throw new Error(error.responseText);
							});
						}
					},
					{addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
						$noty.close(2000);
						noty({text: 'You clicked "Cancel" button', type: 'error', timeout: 1800});
						}
					}
				]
			});
        });
    };

    var addBookHandler = function (selector) {
        var _this = this;

        $(selector).on('click', '#add-book', function (ev) {
            var title = $('#book-title').val();
            var author = $('#book-author').val();
            var isbn = $('#book-isbn').val();

            if (title === '' || author === '' || isbn === '') {
               Noty.error('The input fields cannot be empty ! ' +
                   'Please, try again.');
            } else {
                var book = {
                    title: title,
                    author: author,
                    isbn: isbn
                };

                _this._data.books.add(book)
                    .then(function (data) {
                        Noty.success('The Book is successfully added !');
                        app.router.setLocation('#/all-books');
                    }, function (error) {
                        Noty.error('The book cannot be added.');
                        console.log(error);
                    });
            }
        });
    };

    var editBookHandler = function (selector) {
        var _this = this;
        $(selector).on('click', '#apply-book-btn', function (ev) {
            var objectId = $(ev.target).parent().attr('id');
            var title = $('#book-title').val();
            var author = $('#book-author').val();
            var isbn = $('#book-isbn').val();
			
			if (title === '' || author === '' || isbn === '') {
               Noty.error('The input fields cannot be empty ! ' +
                   'Please, try again.');
            } else {
				var book = {
					title: title,
					author: author,
					isbn: isbn
				};

				_this._data.books.edit(objectId, book)
					.then(function (data) {
						Noty.success('The Book is successfully edited !');
						app.router.setLocation('#/all-books');
					}, function (error) {
						Noty.success('The Book cannot be edited !');
						console.log(error);
					});
			}
        })
    };

    Controller.prototype.loadAllBooksPage = function () {
        var _this = this;

        this._data.books.getAll()
            .then(function (data) {
                console.log(data);
                if (data['results'].length > 0) {
                    $.get('./templates/books.html', function (template) {
                        var output = Mustache.render(template, data);
                        $(_this._selector).html(output).hide().show(4000);
                    });
                } else {
                    $.get('./templates/empty-list.html', function (template) {
                        $(_this._selector).html(Mustache.render(template).hide().show(4000));
                    });
                }
            }, function (error) {
                console.log(error);
            });
    };

    Controller.prototype.loadEditBooksPage = function (objectId) {
        var _this = this;

        var li = $('#' + objectId);
        var title = li.children('div').eq(0).text();
        var author = li.children('div').eq(1).text();
        var isbn = li.children('div').eq(2).text();

        $.get('./templates/edit-book.html', function (template) {
            var book = {
                title: title,
                author: author,
                isbn: isbn,
                objectId: objectId
            };

            var output = Mustache.render(template, book);
            $(_this._selector).html(output).hide().show(2000);
        });
    };
    
    return {
        load: function (data) {
            return new Controller(data)
        }
    }
}());