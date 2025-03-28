var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Engine started");
    };
    Car.prototype.stop = function () {
        console.log("Engine stopped");
    };
    // You can add additional methods/properties
    Car.prototype.honk = function () {
        console.log("Beep beep!");
    };
    return Car;
}());
var obj = new Car("tesla", "x", 2011);
obj.honk();
console.log(obj.model);
