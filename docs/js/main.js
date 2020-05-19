"use strict";
var Car = (function () {
    function Car() {
        console.log("car created");
    }
    Car.prototype.update = function () {
        console.log("vrooom!");
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        var c = new Car();
        c.update();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
console.log("hello ts");
//# sourceMappingURL=main.js.map