"use strict";
var Block = (function () {
    function Block(gameInstance) {
        var _this = this;
        this._X = 0;
        this._Y = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.blockSpeed = 0;
        this._div = document.createElement("block");
        this.gameInstance = gameInstance;
        this.blockSpeed = 10 * this.gameInstance.globalSpeed;
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this._div);
        this.upkey = 80;
        this.downkey = 76;
        this._X = 0;
        this._Y = -500;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Object.defineProperty(Block.prototype, "div", {
        get: function () { return this._div; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "X", {
        get: function () { return this._X; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "Y", {
        get: function () { return this._Y; },
        enumerable: false,
        configurable: true
    });
    Block.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    Block.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = this.blockSpeed;
                break;
            case this.downkey:
                this.downSpeed = this.blockSpeed;
                break;
        }
    };
    Block.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Block.prototype.update = function () {
        var newPosY = this._Y - this.upSpeed + this.downSpeed;
        this._Y = newPosY;
        this._div.style.transform = "translate(" + this.X + "px, " + this.Y + "px)";
    };
    return Block;
}());
var Player = (function () {
    function Player() {
        var _this = this;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.speed = 10;
        this.element = document.createElement("player");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.rightKey = 68;
        this.leftKey = 65;
        this.posX = 0;
        this.posY = 700;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    Player.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = this.speed;
                break;
            case this.rightKey:
                this.rightSpeed = this.speed;
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
        this.element.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scale(0.3)";
    };
    return Player;
}());
var Game = (function () {
    function Game() {
        this.score = 0;
        this.globalSpeed = 1;
        this.player = new Player();
        this.block = new Block(this);
        this.gameLoop();
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.player.update();
        this.block.update();
        this.checkBlockPlayerCollision(this.player);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkBlockPlayerCollision = function (player) {
        var hit = this.checkCollision(player.getRectangle(), this.block.getRectangle());
        if (hit) {
            this.updateScore(-1);
            this.gameOver();
        }
    };
    Game.prototype.updateScore = function (addScoreAmount) {
        this.score += addScoreAmount;
    };
    Game.prototype.gameOver = function () {
        console.log("YOU HAVE DIED");
        document.getElementsByTagName("message")[0].innerHTML = "YOU HAVE DIED";
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map