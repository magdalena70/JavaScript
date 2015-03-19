var world = world || {};

(function (world) {
    function Student(name, age, grade) {
        world.Person.call(this, name, age);
        this._grade = grade;
        this._constructor = 'Student';
    }

    Student.extends(world.Person);
    Student.prototype.sayHello = function () {
        return world.Person.prototype.sayHello.call(this) + ' My grade: ' + this._grade;
    }

    world.Student = Student;
}(world));
