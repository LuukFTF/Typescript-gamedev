class Woman{
    name : string = "woman"
    nickname: string;
    defaultState: string;

    constructor(nickname: string, defaultState: string){
        this.nickname = nickname;
        this.defaultState = defaultState;

        console.log(this.name + " created")

        console.log(this.nickname + " is geboren")
        console.log(this.nickname + " is " + this.defaultState)
    }
    

    aandacht(){
        console.log(this.nickname + " wil aandacht")
    }
    fysiekeAandacht(){
        console.log(this.nickname + " wil fysieke aandacht")
    }
    fysiekeWinkAandacht(){
        console.log(this.nickname + " wil fysieke ;) aandacht")
    }

}

class Man{
    name : string = "man"
    nickname: string;

    constructor(nickname: string){
        this.nickname = nickname;

        console.log(this.name + " created")

        console.log(this.nickname + " is geboren")
    }

    hungry(){
        console.log(this.nickname + " wil koekjes")
    }
    horny(){
        console.log(this.nickname + " wil neuken")
    }
}
