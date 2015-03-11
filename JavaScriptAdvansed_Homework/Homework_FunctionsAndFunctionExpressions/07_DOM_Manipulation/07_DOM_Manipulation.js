var DomManipulations = function () {
    var createNewElement = function (parent, childTag, id, text) {
        var parentElement = document.querySelector(parent);
        var newElement = document.createElement(childTag);
        var newElementId = document.createAttribute("id");
        newElementId.value = id;
        newElement.setAttributeNode(newElementId);
        var node = document.createTextNode(text);
        newElement.appendChild(node);
        parentElement.appendChild(newElement);
    };
    
    var removeElement = function (parentSelector, childSelector) {
        var parent = document.querySelector(parentSelector);
        var child = document.querySelector(childSelector);
        parent.removeChild(child);
    };
    
    var addHandler = function (selector, event, callbackFunction) {
        var element = document.querySelector(selector);
        element.addEventListener(event, callbackFunction);
    };
    
    var retrieveAllElements = function (selector) {
        var elements = document.querySelectorAll(selector);
        return elements;
    };
    
    return {
        createNewElement: createNewElement,
        removeElement: removeElement,
        retrieveAllElements: retrieveAllElements,
        addHandler: addHandler
    }
}();

function removeChild() {
    DomManipulations.removeElement('body', 'ul');
}

DomManipulations.createNewElement('body', 'button', 'createBtn', 'Click me to create new list');
DomManipulations.addHandler('button#createBtn', 'click', createList);
function createList() {
    DomManipulations.createNewElement('body', 'ul', 'firstUl', 'A. First <ul></ul> nested in <body>.');
    DomManipulations.createNewElement('ul#firstUl', 'li', 'firstLi', '1.1. Click me, please!');
    DomManipulations.addHandler('li#firstLi', 'click', function () { alert("I\'m first <li></li> nested in first <ul></ul>.!") });
    DomManipulations.createNewElement('li#firstLi', 'ul', 'secondUl', 'B. Second <ul></ul> nested in first <li></li>.');
    DomManipulations.createNewElement('ul#secondUl', 'li', 'firstNestedLi', '2.1. First <li></li> nested in second <ul></ul>.');
    DomManipulations.createNewElement('ul#secondUl', 'li', 'secondNestedLi', '2.2. Second <li></li> nested in second <ul></ul>.');
}
DomManipulations.createNewElement('body', 'button', 'removeBtn', 'Click me to remove list');
DomManipulations.addHandler('button#removeBtn', 'click', removeChild);

DomManipulations.retrieveAllElements('ul');