Object.prototype.extends = function (properties) {
    function F() { }    ;
    F.prototype = Object.create(this);
    for (var property in properties) {
        F.prototype[property] = properties[property];
    }
    
    F.prototype._super = this;
    return new F();
}

var CreateShape = (function () {
    var shape = {
        init: function (x, y, color) {
            if (typeof (x) != 'number' || typeof (y) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x = x;
            this._y = y;
            this._color = color;
        },
        toString: function () {
            return '    Color: ' + this._color + 
        ',\n    Point: (x = ' + this._x + ', y = ' + this._y + ')';
        }
    };
    
    var circle = shape.extends({
        init: function (x, y, color, radius) {
            this._super.init.apply(this, [x, y, color]);
            if (typeof (radius) != 'number') {
                throw new Error('Radius must be a number.');
            }

            this._radius = radius;
            return this;
        },
        toString: function () {
            return 'Circle -> {\n' + this._super.toString.call(this) + 
        ',\n    Radius: ' + this._radius + '\n}';
        }
    });
    
    var rectangle = shape.extends({
        init: function (x, y, color, width, height) {
            this._super.init.apply(this, [x, y, color]);
            if (typeof (width) != 'number') {
                throw new Error('Width must be a number.');
            }
            
            if (typeof (height) != 'number') {
                throw new Error('Height must be a number.');
            }

            this._width = width;
            this._height = height;
            return this;
        },
        toString: function () {
            return 'Rectangle -> {\n' + this._super.toString.call(this) + 
            ',\n    Width: ' + this._width + ',\n    Height: ' + this._height + '\n}';
        }
    });
    
    var triangle = shape.extends({
        init: function (x, y, color, x2, y2, x3, y3) {
            this._super.init.apply(this, [x, y, color]);
            if (typeof (x2) != 'number' || typeof (y2) != 'number' || 
                typeof (x3) != 'number' || typeof (y3) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
            return this;
        },
        toString: function () {
            return 'Triangle -> {\n' + this._super.toString.call(this) + 
        ',\n    Point2: (x = ' + this._x2 + ', y =' + this._y2 + 
        '),\n    Point3: (x =' + this._x3 + ', y =' + this._y3 + ')\n}';
        }
    });
    
    var line = shape.extends({
        init: function (x, y, color, x2, y2) {
            this._super.init.apply(this, [x, y, color]);
            if (typeof (x2) != 'number' || typeof (y2) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x2 = x2;
            this._y2 = y2;
            return this;
        },
        toString: function () {
            return 'Line -> {\n' + this._super.toString.call(this) + 
        ',\n    Point2: (x = ' + this._x2 + ', y = ' + this._y2 + ')\n}';
        }
    });
    
    var segment = shape.extends({
        init: function (x, y, color, x2, y2) {
            this._super.init.apply(this, [x, y, color]);
            if (typeof (x2) != 'number' || typeof (y2) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x2 = x2;
            this._y2 = y2;
            return this;
        },
        toString: function () {
            return 'Segment -> {\n' + this._super.toString.call(this) + 
        ',\n    Point2: (x = ' + this._x2 + ', y = ' + this._y2 + ')\n}';
        }
    });

    return {
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    };
    
}())


var newCircle = Object.create(CreateShape.circle).init(50, 50, '#FF0000', 20);
//var newCircle = Object.create(CreateShape.circle).init(50, 50, '#FF0000', 'str'); // invalid radius
console.log(newCircle.toString());
var newRectangle = Object.create(CreateShape.rectangle).init(20, 20, '#FF0000', 10, 10);
//var newRectangle = Object.create(CreateShape.rectangle).init(20, 20, '#FF0000', 10, 'str'); // invalid height
console.log(newRectangle.toString());
var newTriangle = Object.create(CreateShape.triangle).init(30, 20, '#FF0000', 35, 25, 40, 30);
console.log(newTriangle.toString());
var newLine = Object.create(CreateShape.line).init(35, 40, '#FF0000', 55, 70);
//var newLine = Object.create(CreateShape.line).init(35, 40, '#FF0000', 'str', 70); // invalid x2
console.log(newLine.toString());
var newSegment = Object.create(CreateShape.segment).init(15, 30, '#FF0000', 25, 50);
console.log(newSegment.toString());