var app = app || {};

app.controller = (function(){
	function BaseController(data){
			this._data = data;
	}
	
	BaseController.prototype.loadHome = function(selector){
		$(selector).load('templates/home.html');
	}
	
	BaseController.prototype.loadRegister = function(selector){
		$(selector).load('templates/register.html');
	}
	
	BaseController.prototype.loadLogin = function(selector){
		$(selector).load('templates/login.html');
	}
	
	BaseController.prototype.loadBookmarks = function(selector){
		this._data.bookmarks.getAll()
			.then(function(data){
				console.log(data);
				$.get('templates/bookmarks.html', function(template){
					var output = Mustache.render(template, data);
					$(selector).html(output);
				});	
			});
		$(selector).load('templates/bookmarks.html');
	}
	
	BaseController.prototype.attachEventHandlers = function(){
		var selector = '#wrapper';
		attachLoginHandler.call(this, selector); // make this to be = BaseController - by call()
		attachRegisterHandler.call(this, selector); 
		attachCreateBookmarkHandler.call(this, selector); 
		attachDeleteBookmarkHandler.call(this, selector); 
		attachLogoutHandler.call(this, selector);
	}
	
	var attachLoginHandler = function(selector){
		var _this = this;
		$(selector).on('click', '#login', function(){
			var username = $('#user-name').val();
			var password = $('#password').val();
			_this._data.users.login(username, password)
				.then(function(data){
					window.history.replaceState('Bookmarks', 'Bookmarks', '#/bookmarks');
				
					var text = 'Hello, ' + localStorage.username.toUpperCase();
					printSuccess(text);
				}, 
				function(error){
					var text = 'You entered username: ' + username + ' and password: ' + password + ' Try again.';
					alert(error.responseText + text);
					$('#user-name').val('');
					$('#password').val('');
				});
		});
	}
	
	var attachRegisterHandler = function(selector){
		var _this = this;
		$(selector).on('click', '#register', function(){
			var username = $('#user-name').val();
			var password = $('#password').val();
			var confirmPassword = $('#confirm-password').val();
			
			if(password == confirmPassword) {
				_this._data.users.register(username, password)
					.then(function(data){
						console.log(data);
						window.history.replaceState('Bookmarks', 'Bookmarks', '#/bookmarks');
						
						var text = username.toUpperCase() + ', you registered successfully!';
						printSuccess(text);
					}, 
					function(error){
						alert(error.responseText);
					});
			}else{
				alert('Password does not match! Try again.');
                $('#password').val('').css('background', 'red');
                $('#confirm-password').val('').css('background', 'red');
			}
		});
	}
	
	var attachCreateBookmarkHandler = function(selector){
		var _this = this;
		$(selector).on('click', '#addNew', function(){
			var title = $('#newTitle').val();
			var url = $('#newUrl').val();
			var bookmark = {
				title: title,
				url: url
			};
			
			_this._data.bookmarks.add(bookmark)
				.then(function(data){
					console.log();
					_this._data.bookmarks.getById(data.objectId)
						.then(function(bookmark){
							console.log(bookmark);
							var bookmarkDiv = $('<div class="bookmarks"/>');
							var newBookmarkTitle = $('<p/>').html('Title: <span>' + bookmark.title + '</span>').appendTo(bookmarkDiv);
							var newBookmarkUrl = $('<p/>').html('url: <span>' + bookmark.url + '</span>').appendTo(bookmarkDiv);
							var delBtn = $('<button class="delete">Delete</button>').appendTo(bookmarkDiv);
							$('#allBookmarks').append(bookmarkDiv);
							$('#newTitle').val('');
							$('#newUrl').val('');
							printSuccess('Product added successfully!');
						},
						function(error){
							alert(error.responseText);
						});
				},
				function(error){
					alert(error.responseText);
				});
		});
	}
	
	var attachDeleteBookmarkHandler = function(selector){
		var _this = this;
		$(selector).on('click', '.delete', function(ev){
			var deleteConfirmed = confirm('Do you want to delete this bookmark?');
			if(deleteConfirmed){
				var objectId = $(this).parent().data('id');
				_this._data.bookmarks.delete(objectId)
					.then(function(data){
						$(ev.target).parent().remove();
						printSuccess('Product deleted successfully!');
					},
					function(error){
						alert(error.responseText);
					});
			}
		})
	}
	
	var attachLogoutHandler = function (selector) {
        var _this = this;
        $(selector).on('click', '#logout', function () {
            localStorage.clear();
            alert('Do you want to leave this page?');
            window.history.replaceState('Home', 'Home', '#/');
            //location.reload();
			var text = 'Thank You for being with us!<br/>Please come back again, you are welcome'.toUpperCase();
			printSuccess(text);
        });
    }
	
	var printSuccess = function (text) {
        noty({
                text: text,
                type: 'success',
                layout: 'top',
                timeout: 5000}
        );
    }

	return {
		get: function(data){
			return new BaseController(data);
		}
	};
}());