/// <reference path="player.ts"/>

class Game {
    private player : Player
    private block : Block

    public globalSpeed : number = 1

    constructor() {
        this.player = new Player()
        this.block = new Block(this)

        this.gameLoop()
    }
    
    private gameLoop(){
        this.player.update()
        this.block.update()

        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())