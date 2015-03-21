var htmlDocument = htmlDocument || {};

(function (htmlDocument) {
    var number = 0;
    function Item(title) {
        number++;
        if(!title){
            throw new  ReferenceError('Title cannot be empty.');
        }
		
		this._title = ' - ' + title;
        this._id = 'item' + number;		
    }

    Item.extends(ListElement);

    Item.prototype._buildHtmlElement = function () {
        var div = document.createElement("div");

        var input = document.createElement("input");
        input.type = "checkbox";
        input.id = this._id;

        var label = document.createElement("label");
        label.innerHTML = this._title;
        label.htmlFor = this._id;

        div.appendChild(input);
        div.appendChild(label);

        this._htmlElement = div;
    };

    htmlDocument.getItem = function(title) {
        return new Item(title);
    };

})(htmlDocument);