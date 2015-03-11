function traverse(selector) {
    
    function findHtmlElement(element) {
        this.htmlElement = element;
        this.indent = '';
        
        this.printElement = function printToDivById(indent) {
            var idOfResultDiv = 'results'
            var className = this.htmlElement.className;
            var elementId = this.htmlElement.id;
            var tagName = this.htmlElement.tagName;
            var result =
                indent +
                tagName.toLowerCase() + ': ' +
                (elementId == '' ? elementId : 'id="' + elementId + '"') +
                (className == '' ? className : ' class="' + className + '"') + '<br/>';
            
            var div = document.getElementById(idOfResultDiv);
            div.innerHTML += result;
        };
        
        this.getChildren = function () {
            var childrenAsHtmlElements = this.htmlElement.children;
            var children = [];
            var i;
            for (i = 0; i <= this.htmlElement.childElementCount; i++) {
                if (childrenAsHtmlElements[i] != undefined) {
                    var element = new findHtmlElement(childrenAsHtmlElements[i]);
                    element.indent = this.indent + '.....';
                    children.push(element);
                }
            }
            
            return children;
        };
        
        this.printChildren = function () {
            var i, children = this.getChildren();
            for (i in children) {
                children[i].printElement(this.indent);
                children[i].printChildren();
            }
        }
    }
    var element = document.querySelector(selector);
    var item = new findHtmlElement(element);
    item.printChildren();

}
var selector = '.birds';
traverse(selector);