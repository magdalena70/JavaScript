var app = app || {};

app.data = (function () {
    function Data(url, requester) {
        this.books = new Books(url, requester);
    }

    var Books = (function () {
        function Books(url, requester) {
            this._url = url;
            this._requester = requester;
            this._headers = app.headers.load();
        }

        Books.prototype.getAll = function () {
            var url = this._url + 'classes/Book';

            return this._requester.get(url, this._headers)
                .then(function (data) {
                    return data;
                }, function (error) {
                    console.log(error);
                });
        };

        Books.prototype.add = function (book) {
            var url = this._url + 'classes/Book';

            return this._requester.post(url, book, this._headers)
                .then(function (data) {
                    return data;
                }, function (error) {
                    console.log(error);
                });
        };

        Books.prototype.delete = function (objectId) {
            var url = this._url + 'classes/Book/' + objectId;

            return this._requester.delete(url, this._headers)
                .then(function (data) {
                    return data;
                }, function (error) {
                    console.log(error);
                });
        };

        Books.prototype.edit = function (objectId, book) {
            var url = this._url + 'classes/Book/' + objectId;

            return this._requester.put(url, book, this._headers)
                .then(function (data) {
                    return data;
                }, function (error) {
                    console.log(error);
                });
        };

        return Books;
    }());


    return {
        load: function (url, requester) {
            return new Data(url, requester);
        }
    }
}());