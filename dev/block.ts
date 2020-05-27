class Block {
    private _div : HTMLElement
    private gameInstance : Game

    private _X : number = 0
    private _Y : number = 0

    private downkey : number
    private upkey : number

    private downSpeed : number = 0
    private upSpeed : number = 0

    private blockSpeed : number = 0

    //
    public get div(): HTMLElement { return this._div }

    public get X(): number { return this._X }
    public get Y(): number { return this._Y }


    constructor(gameInstance : Game) {
        this._div = document.createElement("block")

        this.gameInstance = gameInstance

        this.blockSpeed = 10*this.gameInstance.globalSpeed

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this._div)

        this.upkey   = 80
        this.downkey = 76

        this._X = 0
        this._Y = -500

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this._div.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        // console.log(e.keyCode)

        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = this.blockSpeed
                break
            case this.downkey:
                this.downSpeed = this.blockSpeed
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0
                break
            case this.downkey:
                this.downSpeed = 0
                break
        }
    }

    public update() {
        let newPosY = this._Y - this.upSpeed + this.downSpeed

        // if (newPosY > 0 && newPosY + 100 < window.innerHeight) 

        this._Y = newPosY
        this._div.style.transform = `translate(${this.X}px, ${this.Y}px)`
    }
}
