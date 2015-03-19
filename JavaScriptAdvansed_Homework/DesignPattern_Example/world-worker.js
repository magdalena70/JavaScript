var world = world || {};

(function (world) {
    function Worker(name, age, workingHoursPerDay) {
        world.Person.call(this, name, age);
        this._workingHoursPerDay = workingHoursPerDay;
        this._constructor = 'Worker';
    }

    Worker.extends(world.Person);
    Worker.prototype.sayHello = function () {
        return world.Person.prototype.sayHello.call(this) +
            ' My working hours per day: ' + this._workingHoursPerDay;
    }

    world.Worker = Worker;
}(world));
