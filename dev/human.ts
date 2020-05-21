let randomState = Math.floor(Math.random() * Math.floor(2));

class Woman{
    name: string;
    defaultState: string;

    constructor(name: string, defaultState: string){
        this.name = name;
        this.defaultState = defaultState;
        console.log(this.name + " is geboren")
        console.log(this.name + " is " + this.defaultState)
    }

    aandacht(){
        console.log(this.name + " wil aandacht")
    }
    fysiekeAandacht(){
        console.log(this.name + " wil fysieke aandacht")
    }
    fysiekeWinkAandacht(){
        console.log(this.name + " wil fysieke ;) aandacht")
    }

}

class Man{
    name: string;

    constructor(name: string){
        this.name = name;
        console.log(this.name + " is geboren")
    }

    hungry(){
        console.log(this.name + " wil koekjes")
    }
    horny(){
        console.log(this.name + " wil neuken")
    }
}

let teuntje = new Woman("Teuntje", "verveeld");
let lucas = new Man("Lucas");


teuntje.aandacht()
teuntje.fysiekeAandacht()
teuntje.fysiekeWinkAandacht()

if(randomState == 0){
    lucas.hungry()
} else {
    lucas.horny()
}


