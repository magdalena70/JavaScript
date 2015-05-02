var app = app || {};

(function(){
	var baseUrl = "https://api.parse.com/1/";
	var ajaxRequester = app.ajaxRequester.get();
	var data = app.data.get(baseUrl, ajaxRequester);
	var controller = app.controller.get(data);
	controller.attachEventHandlers();
	
	var selector = $('#wrapper');
	app.router = Sammy(function(){
		this.get('#/', function(){
			$('header').show(3000);
			controller.loadHome(selector);
		});
		
		this.get('#/register', function(){
			$('header').hide();
			controller.loadRegister(selector);
		});
		
		this.get('#/login', function(){
			$('header').hide();
			controller.loadLogin(selector);
		});
		
		this.get('#/bookmarks', function(){
			$('header').hide();
			controller.loadBookmarks(selector);
		});
	});
	
	app.router.run('#/');
}());