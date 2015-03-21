var htmlDocument = htmlDocument || {};

var countArticle = 0;
(function (htmlDocument) {
    function Article(title) {
		countArticle++;
        if(!title){
            throw new  ReferenceError('Title cannot be empty.');
        }
		
		this._title = countArticle + '. ' + title;
    }

    Article.extends(ListElement);

    Article.prototype._buildHtmlElement = function () {
        var header = document.createElement("h2");
        header.innerHTML = this._title;

        var itemDiv = document.createElement("div");
        itemDiv.appendChild(header);

        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = 'Set item\'s title...';
        input.name = 'itemName';

        var button = document.createElement("button");
        button.innerHTML = 'Add New Item';
        button.name = 'addItemButton';

        var errorMessage = document.createElement("div");
        errorMessage.setAttribute("name", "errorArticle");
        errorMessage.className = "hideError";
        errorMessage.innerHTML = "Item's title cannot be empty! Please, enter some title.";


        var buttonDiv = document.createElement("div");
        buttonDiv.appendChild(input);
        buttonDiv.appendChild(button);
        buttonDiv.appendChild(errorMessage);

        var article = document.createElement("article");

        article.appendChild(itemDiv);
        article.appendChild(buttonDiv);

        this._htmlElement = article;
    };

    htmlDocument.getArticle = function (title) {
        return new Article(title);
    };

})(htmlDocument);