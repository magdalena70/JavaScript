Function.prototype.extends = function (parent) {
    if (!Object.create) {
        Object.create = function (proto) {
            function F() { }            ;
            F.prototype = proto;
            return new F();
        };
    }    ;
    
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

var CreateShape = (function () {

    var Shape = (function () {
        function Shape(x, y, color) {
            if (typeof (x) != 'number' || typeof (y) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x = x;
            this._y = y;
            this._color = color;
        }
        
        Shape.prototype.toString = function () {
            return '    Color: ' + this._color + 
        ',\n    Point: (x = ' + this._x + ', y = ' + this._y + ')';
        }
        
        return Shape;

    }())
    
    var Circle = (function () {
        function Circle(x, y, color, radius) {
            Shape.call(this, x, y, color);
            if (typeof (radius) != 'number') {
                throw new Error('Radius must be a number.');
            }

            this._radius = radius;
        }
        
        Circle.extends(Shape);
        Circle.prototype.toString = function () {
            return 'Circle -> {\n' + Shape.prototype.toString.call(this) + 
        ',\n    Radius: ' + this._radius + '\n}';
        }
        
        return Circle;
    }())
    
    var Rectangle = (function () {
        function Rectangle(x, y, color, width, height) {
            Shape.call(this, x, y, color);
            if (typeof (width) != 'number') {
                throw new Error('Width must be a number.');
            }
            
            if (typeof (height) != 'number') {
                throw new Error('Height must be a number.');
            }

            this._width = width;
            this._height = height;
        }
        
        Rectangle.extends(Shape);
        Rectangle.prototype.toString = function () {
            return 'Rectangle -> {\n' + Shape.prototype.toString.call(this) + 
        ',\n    Width: ' + this._width + ',\n    Height: ' + this._height + '\n}';
        }
        
        return Rectangle;
    }())
    
    var Triangle = (function () {
        function Triangle(x, y, color, x2, y2, x3, y3) {
            Shape.call(this, x, y, color);
            if (typeof (x2) != 'number' || typeof (y2) != 'number' || 
                typeof (x3) != 'number' || typeof (y3) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
        }
        
        Triangle.extends(Shape);
        Triangle.prototype.toString = function () {
            return 'Triangle -> {\n' + Shape.prototype.toString.call(this) + 
        ',\n    Point2: (x = ' + this._x2 + ', y =' + this._y2 + 
        '),\n    Point3: (x =' + this._x3 + ', y =' + this._y3 + ')\n}';
        }
        
        return Triangle;
    }())
    
    var Line = (function () {
        function Line(x, y, color, x2, y2) {
            Shape.call(this, x, y, color);
            if (typeof (x2) != 'number' || typeof (y2) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x2 = x2;
            this._y2 = y2;
        }
        
        Line.extends(Shape);
        Line.prototype.toString = function () {
            return 'Line -> {\n' + Shape.prototype.toString.call(this) + 
        ',\n    Point2: (x = ' + this._x2 + ', y = ' + this._y2 + ')\n}';
        }
        
        return Line;
    }())
    
    var Segment = (function () {
        function Segment(x, y, color, x2, y2) {
            Shape.call(this, x, y, color);
            if (typeof (x2) != 'number' || typeof (y2) != 'number') {
                throw new Error('Coordinates x and y  must be numbers.');
            }

            this._x2 = x2;
            this._y2 = y2;
        }
        
        Segment.extends(Shape);
        Segment.prototype.toString = function () {
            return 'Segment -> {\n' + Shape.prototype.toString.call(this) + 
        ',\n    Point2: (x = ' + this._x2 + ', y = ' + this._y2 + ')\n}';
        }
        
        return Segment;
    }())
    
    //  Add all shapes in a module
    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    };

    return CreateShape;
    
}())


var circle = new CreateShape.Circle(50, 50, '#FF0000', 20);
//var circle = new CreateShape.Circle(50, 50, '#FF0000', 'str'); // invalid radius
console.log(circle.toString());
var rectangle = new CreateShape.Rectangle(20, 20, '#FF0000', 10, 10);
//var rectangle = new CreateShape.Rectangle(20, 20, '#FF0000', 'str', 10); // invalid width
console.log(rectangle.toString());
var triangle = new CreateShape.Triangle(30, 20, '#FF0000', 35, 25, 40, 30);
//var triangle = new CreateShape.Triangle(30, 20, '#FF0000', 35, 25, 'str', 30); // invalid x3
console.log(triangle.toString());
var line = new CreateShape.Line(35, 40, '#FF0000', 55, 70);
console.log(line.toString());
var segment = new CreateShape.Segment(15, 30, '#FF0000', 25, 50);
console.log(segment.toString());