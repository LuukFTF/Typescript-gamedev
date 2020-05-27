class Player {

    private element : HTMLElement
    private posX : number
    private posY : number

    private rightKey : number
    private leftKey : number

    private rightSpeed : number = 0
    private leftSpeed : number = 0

    private speed : number = 10

    constructor() {
        this.element = document.createElement("player")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.element)

        this.rightKey = 68
        this.leftKey = 65

        this.posX = 0
        this.posY = 700

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = this.speed
                break
            case this.rightKey:
                this.rightSpeed = this.speed
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0
                break
            case this.rightKey:
                this.rightSpeed = 0
                break
        }
    }

    public update() {
        let newPosX = this.posX - this.leftSpeed + this.rightSpeed

        // check of de paddle binnen beeld blijft
        if (newPosX > 0 && newPosX + 100 < window.innerWidth) this.posX = newPosX

        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px) scale(0.3)`
    }
}