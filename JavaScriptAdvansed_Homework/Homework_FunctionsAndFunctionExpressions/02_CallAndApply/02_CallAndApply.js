function Product(name, price) {
    this.name = name;
    this.price = price;
    
    if (price < 0) {
        throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
    }
    
    return this;
}

// Using call() with arguments
function CallFoodWithArgs(name, price) {
    Product.call(this, name, price);
    this.category = 'CallFoodWithArgs';
}

CallFoodWithArgs.prototype = Object.create(Product.prototype);
var cheeseCall = new CallFoodWithArgs('feta', 5);
console.log(cheeseCall);

// Using call() without arguments
function CallFoodWithoutArgs(name, price) {
    Product.call();
    this.category = 'CallFoodWithoutArgs';
}

CallFoodWithoutArgs.prototype = Object.create(Product.prototype);
var cheeseCall = new CallFoodWithoutArgs('feta', 5);
console.log(cheeseCall);

// Using apply() with arguments
function ApplyFoodWithArgs(name, price) {
    Product.apply(this, [name, price]);
    this.category = 'ApplyFoodWithArgs';
}

ApplyFoodWithArgs.prototype = Object.create(Product.prototype);
var cheeseApply = new ApplyFoodWithArgs('parmesan', 4);
console.log(cheeseApply);

// Using apply() without arguments
function ApplyFoodWithoutArgs(name, price) {
    Product.apply();
    this.category = 'ApplyFoodWithoutArgs';
}

ApplyFoodWithoutArgs.prototype = Object.create(Product.prototype);
var cheeseApply = new ApplyFoodWithoutArgs('parmesan', 4);
console.log(cheeseApply);

