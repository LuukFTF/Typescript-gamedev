/// <reference path="player.ts"/>

class Game {
    private player : Player
    private block : Block

    public score : number = 0

    public globalSpeed : number = 1

    constructor() {
        this.player = new Player()
        this.block = new Block(this)

        this.gameLoop()
    }
    
    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
        }

    private gameLoop(){
        this.player.update()
        this.block.update()

        this.checkBlockPlayerCollision(this.player)

        requestAnimationFrame(()=>this.gameLoop())
    }

    checkBlockPlayerCollision(player : Player) {

        let hit = this.checkCollision(player.getRectangle(), this.block.getRectangle())
        // let hit2 = this.checkCollision(player.getRectangle(), this.block2.getRectangle())

        if (hit) {
            this.updateScore(-1)
            this.gameOver()
        }
    }


    updateScore(addScoreAmount: number) {
        this.score += addScoreAmount
        // document.getElementsByTagName("score")[0].innerHTML = `Score: ${this.score}`
    }

    gameOver() {
        console.log("YOU HAVE DIED")
        document.getElementsByTagName("message")[0].innerHTML = `YOU HAVE DIED`
    }

} 

window.addEventListener("load", () => new Game())