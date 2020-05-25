/// <reference path="player.ts"/>

class Game {
    private player : Player

    constructor() {
        this.player = new Player()

        this.gameLoop()
    }
    
    private gameLoop(){
        this.player.update()

        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())