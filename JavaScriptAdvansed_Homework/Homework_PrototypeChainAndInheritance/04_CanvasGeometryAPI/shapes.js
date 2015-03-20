var i, canvas, ctx, count = 0, shapesList = {};

canvas = document.getElementById('myCanvas');
canvas.width = 700;
canvas.height = 500;
ctx = canvas.getContext("2d");

Object.prototype.extends = function(parent) {
    if (!Object.create) {
        Object.prototype.create = function(proto) {
            function F() {}
            F.prototype = proto;
            return new F();
        };
    }

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

function areValidArgumens(args) {
    for (i = 0; i < args.length; i++) {
        if (i !== 2 && (args[i] < 0 || isNaN(args[i]))) {
            return false;
        }
    }

    return true;
}

var Shapes = (function() {
    var Shape = (function() {
        function Shape(x, y, color) {
            if (arguments.length !== 3 || !areValidArgumens(arguments)) {
                alert('There is missing or incorrect argument!');
                throw new Error('There is missing or incorrect argument!');
            }

            this._x = x;
            this._y = y;
            this._color = color;
        }

        Shape.prototype.toString = function() {
            return 'Color: ' + this._color + ', Point 1: (x1:' + this._x + ', y1: ' + this._y + ')';
        };

        Shape.prototype.draw = function() {
            ctx.beginPath();
            ctx.fillStyle = this._color;
        };

        return Shape;
    }());

    var Circle = (function() {
        function Circle(x, y, color, radius) {
            if (arguments.length !== 4 || !areValidArgumens(arguments)) {
                alert('There is missing or incorrect argument!');
                throw new Error('There is missing or incorrect argument!');
            }

            Shape.call(this, x, y, color);
            this._radius = radius;
        }

        Circle.extends(Shape);

        Circle.prototype.toString = function() {
            return 'Shape: Circle, ' + Shape.prototype.toString.call(this) + ', Radius: ' + this._radius;
        };

        Circle.prototype.draw = function() {
            Shape.prototype.draw.call(this);
            ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        };

        return Circle;
    }());

    var Rectangle = (function() {
        function Rectangle(x, y, color, width, height) {
            if (arguments.length !== 5 || !areValidArgumens(arguments)) {
                alert('There is missing or incorrect argument!');
                throw new Error('There is missing or incorrect argument!');
            }

            Shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function() {
            return 'Shape: Rectangle, ' + Shape.prototype.toString.call(this) +
                ', Width: ' + this._width + ', Height: ' + this._height;
        };

        Rectangle.prototype.draw = function() {
            Shape.prototype.draw.call(this);
            ctx.rect(this._x, this._y, this._width, this._height);
            ctx.fill();
            ctx.stroke();
        };

        return Rectangle;
    }());

    var Triangle = (function() {
        function Triangle(x, y, color, x2, y2, x3, y3) {
            if (arguments.length !== 7 || !areValidArgumens(arguments)) {
                alert('There is missing or incorrect argument!');
                throw new Error('There is missing or incorrect argument!');
            }

            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
        }

        Triangle.extends(Shape);

        Triangle.prototype.toString = function() {
            return 'Shape: Triangle, ' + Shape.prototype.toString.call(this) +
                ', Point 2: (x: ' + this._x2 + ', y: ' + this._y2 + ')' +
                ', Point 3: (x: ' + this._x3 + ', y: ' + this._y3 + ')';
        };

        Triangle.prototype.draw = function() {
            Shape.prototype.draw.call(this);
            ctx.moveTo(this._x, this._y);
            ctx.lineTo(this._x2, this._y2);
            ctx.lineTo(this._x3, this._y3);
            ctx.fill();
            ctx.stroke();
        };

        return Triangle;
    }());

    var Line = (function() {
        function Line(x, y, color, x2, y2) {
            if (arguments.length !== 5 || !areValidArgumens(arguments)) {
                alert('There is missing or incorrect argument!');
                throw new Error('There is missing or incorrect argument!');
            }

            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
        }

        Line.extends(Shape);

        Line.prototype.toString = function() {
            return 'Shape: Line, ' + Shape.prototype.toString.call(this) +
                ', Point 2: (x: ' + this._x2 + ', y: ' + this._y2 + ')';
        };

        Line.prototype.draw = function() {
            Shape.prototype.draw.call(this);
            ctx.moveTo(this._x, this._y);
            ctx.lineTo(this._x2, this._y2);
            ctx.fill();
            ctx.stroke();
        };

        return Line;
    }());

    var Segment = (function() {
        function Segment(x, y, color, x2, y2) {
            if (arguments.length !== 5 || !areValidArgumens(arguments)) {
                alert('There is missing or incorrect argument!');
                throw new Error('There is missing or incorrect argument!');
            }

            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
        }

        Segment.extends(Shape);

        Segment.prototype.toString = function() {
            return 'Shape: Segment, ' + Shape.prototype.toString.call(this) +
                ', Point 2: (x: ' + this._x2 + ', y: ' + this._y2 + ')';
        };

        Segment.prototype.draw = function() {
            Shape.prototype.draw.call(this);
            ctx.moveTo(this._x, this._y);
            ctx.lineTo(this._x2, this._y2);
            ctx.fill();
            ctx.stroke();
        };

        return Segment;
    }());

    return {
        Shape: Shape,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Segment: Segment,
        Line: Line
    };
}());

function submitForm() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var color = document.getElementById("color").value;
    var shape = document.getElementById("shape").value;
    var radius = parseInt(document.getElementById("radius").value);
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    var x2 = parseInt(document.getElementById("x2").value);
    var y2 = parseInt(document.getElementById("y2").value);
    var x3 = parseInt(document.getElementById("x3").value);
    var y3 = parseInt(document.getElementById("y3").value);

    addShape(x, y, color, shape, radius, width, height, x2, y2, x3, y3);
}

function addShape(x, y, color, shape, radius, width, height, x2, y2, x3, y3) {
    switch (shape) {
        case 'circle':
            var circle = new Shapes.Circle(x, y, color, radius);
            shapesList[('s' + count)] = circle;
            addShapeInfo(circle);
            break;
        case 'rectangle':
            var rectangle = new Shapes.Rectangle(x, y, color, width, height);
            shapesList[('s' + count)] = rectangle;
            addShapeInfo(rectangle);
            break;
        case 'triangle':
            var triangle = new Shapes.Triangle(x, y, color, x2, y2, x3, y3);
            shapesList[('s' + count)] = triangle;
            addShapeInfo(triangle);
            break;
        case 'line':
            var line = new Shapes.Line(x, y, color, x2, y2);
            shapesList[('s' + count)] = line;
            addShapeInfo(line);
            break;
        case 'segment':
            var segment = new Shapes.Segment(x, y, color, x2, y2);
            shapesList[('s' + count)] = segment;
            addShapeInfo(segment);
            break;
        default:
            break;
    }

    count++;

    drawShapesList();
}

function drawShapesList() {
    ctx.clearRect(0, 0, 700, 500);
    for (var i in shapesList) {
        shapesList[i].draw();
    }
}

function addShapeInfo(shape) {
    var shapesInfoTag = document.getElementById("shapes-info");
    var newOption = document.createElement("option");
    newOption.setAttribute("value", ("s" + count));
    var textNode = document.createTextNode(shape.toString());
    newOption.appendChild(textNode);
    shapesInfoTag.appendChild(newOption);
}

function removeShape() {
    var element = document.getElementById("shapes-info");
    var shapeIndex = element.options[element.selectedIndex].value;

    element.removeChild(element.options[element.selectedIndex]);
    delete shapesList[shapeIndex];

    drawShapesList();
}