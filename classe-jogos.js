class hero {
    constructor(nameHero, ageHero, classHero){
        this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.classHero = classHero;
    }

    atacar() {
        let classHero = ""
        let attackHero = ""

        if (hero.classHero === "mage"){
            classHero = "Mage"
            attackHero = "magia."
        } else if (hero.classHero === "warrior") {
            classHero = "Warrior"
            attackHero = "espada."
        } else if (hero.classeHero === "ninja"){
            classHero = "ninja"
            attackHero = "shuriken."
        } else {
            classHero = "monk"
            attackHero = "artes marciais.";
        }
        console.log(`O herói de nome ${nameHero} de idade ${ageHero} da classe ${classHero} atacou usando ${attackHero}`)
    }

}

let nameHero = "Sebastião"
let ageHero = "30"
let classHero = "monk"

let myHero = new hero(nameHero, ageHero, classHero);

myHero.atacar()

    
