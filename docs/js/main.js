"use strict";
var Player = (function () {
    function Player() {
        var _this = this;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.element = document.createElement("player");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.rightKey = 87;
        this.leftKey = 83;
        this.posX = 0;
        this.posY = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    Player.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 5;
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
        }
    };
    Player.prototype.update = function () {
        var newPosX = this.posX - this.leftSpeed + this.rightSpeed;
        if (newPosX > 0 && newPosX + 100 < window.innerWidth)
            this.posX = newPosX;
        this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Player;
}());
var Game = (function () {
    function Game() {
        this.player = new Player();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.player.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map