var app = app || {};

app.requester = (function () {
    function Requester() {
        this.get = makeGetRequest;
        this.post = makePostRequest;
        this.put = makePutRequest;
        this.delete = makeDeleteRequest;
    }
    var makeRequest = function (url, method, data, headers) {
		// use promise
        var defer = Q.defer();

        $.ajax({
            url: url,
            method: method,
            data: JSON.stringify(data),
            headers: headers,
            contentType: 'application/JSON',
            success: function (data) {
                defer.resolve(data);
            },
            error: function (error) {
                defer.reject(error);
            }
        });

        return defer.promise;
    };

    var makeGetRequest = function (url, headers) {
        return makeRequest(url, 'GET', null, headers);
    };

    var makePostRequest = function (url, data, headers) {
        return makeRequest(url, 'POST', data, headers);
    };

    var makePutRequest = function (url, data, headers) {
        return makeRequest(url, 'PUT', data, headers);
    };

    var makeDeleteRequest = function (url, headers) {
        return makeRequest(url, 'DELETE', null, headers);
    };

    return {
        load: function () {
            return new Requester();
        }
    }
}());