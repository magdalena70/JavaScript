function addElementInSection(element) {
    var name = element.target.name;
    var parent, input, title, errorMessage;

    switch (name) {
        case 'addItemButton':
            parent = element.target.parentNode.parentNode;
            input = parent.querySelector('input[type=text]');
            title = input.value;
            errorMessage = parent.querySelector('div[name=errorArticle]');
            try {
                htmlDocument.getItem(title).addToDOM(parent);
            } catch (error) {
                if (error instanceof ReferenceError) {
                    errorMessage.className = 'showError';
                }
            }
            break;
        case 'addArticleButton':
            parent = element.target.parentNode;
            input = parent.querySelector('input[name=sectionTitle]');
            title = input.value;
            errorMessage = parent.querySelector('div[name=errorSection]');
            try {
                htmlDocument.getArticle(title).addToDOM(parent);
            } catch (error) {
                if (error instanceof ReferenceError) {
                    errorMessage.className = 'showError';
                }
            }
            break;
        default:
            errorMessage = document.querySelector('.showError');
            if (errorMessage) {
                errorMessage.className = 'hideError';
            }
            break;
    }

    if (input) {
        input.value = '';
    }
}

var section = htmlDocument.getSection('TODO List');
var body = document.body;
body.appendChild(section.getHtmlElement());
body.addEventListener('click', addElementInSection);