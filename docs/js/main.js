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
var randomState = Math.floor(Math.random() * Math.floor(2));
var Game = (function () {
    function Game() {
        this.name = "Game";
        var teuntje = new Woman("Teuntje", "verveeld");
        var lucas = new Man("Lucas");
        teuntje.aandacht();
        teuntje.fysiekeAandacht();
        teuntje.fysiekeWinkAandacht();
        if (randomState == 0) {
            lucas.hungry();
        }
        else {
            lucas.horny();
        }
        console.log(this.name + " created");
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Woman = (function () {
    function Woman(nickname, defaultState) {
        this.name = "woman";
        this.nickname = nickname;
        this.defaultState = defaultState;
        console.log(this.name + " created");
        console.log(this.nickname + " is geboren");
        console.log(this.nickname + " is " + this.defaultState);
    }
    Woman.prototype.aandacht = function () {
        console.log(this.nickname + " wil aandacht");
    };
    Woman.prototype.fysiekeAandacht = function () {
        console.log(this.nickname + " wil fysieke aandacht");
    };
    Woman.prototype.fysiekeWinkAandacht = function () {
        console.log(this.nickname + " wil fysieke ;) aandacht");
    };
    return Woman;
}());
var Man = (function () {
    function Man(nickname) {
        this.name = "man";
        this.nickname = nickname;
        console.log(this.name + " created");
        console.log(this.nickname + " is geboren");
    }
    Man.prototype.hungry = function () {
        console.log(this.nickname + " wil koekjes");
    };
    Man.prototype.horny = function () {
        console.log(this.nickname + " wil neuken");
    };
    return Man;
}());
//# sourceMappingURL=main.js.map