class Player {

    private element : HTMLElement
    private posX : number
    private posY : number

    private rightKey : number
    private leftKey : number

    private rightSpeed : number = 0
    private leftSpeed : number = 0

    constructor() {
        this.element = document.createElement("player")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.element)

        this.rightKey   = 87
        this.leftKey = 83

        this.posX = 0
        this.posY = 200

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        // Hiermee kan je checken welke keycode achter een bepaalde toets zit. 
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 5
                break
            case this.rightKey:
                this.rightSpeed = 5
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

        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }
}