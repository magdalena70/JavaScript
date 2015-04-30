var app = app || {};

(function () {
    var url = 'https://api.parse.com/1/';
    var requester = app.requester.load();
    var data = app.data.load(url, requester);
    var controller = app.controller.load(data);
    controller.attachEvents();

    app.router = Sammy(function () {
        var selector = '#main';

        this.get('#/', function () {
            $(selector).load('templates/welcome.html').hide().show(2000);
        });

        this.get('#/all-books', function () {
            controller.loadAllBooksPage();
        });

        this.get('#/add-book', function () {
            $(selector).load('templates/add-book.html').hide().show(2000);
        });

        this.get('#/edit-book/:objectId', function () {
            controller.loadEditBooksPage(this.params['objectId']).hide().show(2000);
        });
    });

    app.router.run('#/');

}());