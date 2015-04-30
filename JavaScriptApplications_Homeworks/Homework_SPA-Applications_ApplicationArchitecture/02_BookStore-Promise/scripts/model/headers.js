var app = app || {};

app.headers = (function () {
    var getHeaders = function () {
        return {
            'X-Parse-Application-Id': 'QJLRO7Y5wTmODz1ycz69dOoZoXZvzAV7NSfsOdcy',
            'X-Parse-REST-API-Key': 'J3xLuhuv9ioEFHZnVoB2VegmNX3vvu9eKfjCYuA9',
        };
    };

    return {
        load: getHeaders
    }
}());