var htmlDocument = htmlDocument || {};

(function(htmlDocument){
    function Section(title){
        ListElement.call(this,title);
    }

    Section.extends(ListElement);

    Section.prototype._buildHtmlElement = function () {
        var header = document.createElement("h1");
        header.innerHTML = this._title;

        var div = document.createElement("div");
        div.appendChild(header);

        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = 'Set section\'s title...';
        input.name = 'sectionTitle';

        var button = document.createElement("button");
        button.innerHTML = 'Add New Section';
        button.name = 'addArticleButton';

        var errorMessage = document.createElement("div");
        errorMessage.setAttribute("name", "errorSection");
        errorMessage.className = "hideError";
        errorMessage.innerHTML = "Section's title cannot be empty! Please, enter some title.";

        var section = document.createElement("section");

        section.appendChild(header);
        section.appendChild(div);
        section.appendChild(input);
        section.appendChild(button);
        section.appendChild(errorMessage);
        this._htmlElement = section;
    };

    htmlDocument.getSection = function(title){
        return new Section(title)
    };

})(htmlDocument);