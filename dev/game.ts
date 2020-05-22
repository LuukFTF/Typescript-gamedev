let randomState = Math.floor(Math.random() * Math.floor(2));

class Game {
    name : string = "Game"

    constructor(){

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
        


    console.log(this.name + " created")
    }
}

window.addEventListener("load", () => new Game())
