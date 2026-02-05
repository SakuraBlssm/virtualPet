/*Goober and what they do!!!
    -Goober doesnt get hungry as often, and is a lot more happy
    -They only eat goober goo, and will lose a lot of happiness if they eat anything else
*/
class Goober extends Pet { //JS objects try not to be needlessly confusing challenge (impossible)
    constructor() {
        super();
        //should be (stat loss/tick * stat multiplier) in game loop, change if necessary
        this.StatMultipliers = {
            Hunger: .5,
            Happiness: .5
        }
    }

    //Eats food (with the addition of the goober goo thing)
    eat(food) {
        if (food.Name != "Goober Goo") {
            this.Happiness -= 10
        }
        this.Hunger += food.eat()
    }
}

/*Expresso: a brief summary
    -Expresso doesnt get hungry as often like goober, but they lose more joy
    -No gimmick theyre just more maintenance on the happiness side
*/

class Expresso extends Pet {
    constructor() {
        super();
        this.StatMultipliers = {
            Hunger: .65,
            Happiness: 1.5
        }
    }
}

/*Sunnyside
    -Sunnyside is the opposite of expresso, having more joy stockpiled but getting very hungry
    -It also gains some happiness by eating
*/

class Sunnyside extends Pet {
    constructor() {
        super();
        this.StatMultipliers = {
            Hunger: 1.5,
            Happiness: .65
        }
    }

    eat(food) {
        let statGain = food.eat()
        this.Hunger += statGain
        this.Happiness += Math.floor(statGain / 3)
    }
}

/*Dificil
    -More stat loss and less hunger per food
    -Basically hardmode
*/

class Dificil extends Pet {
    constructor() {
        super();
        this.StatMultipliers = {
            Hunger: 3,
            Happiness: 3
        }
    }

    eat(food) {
        this.Hunger = Math.floor(food.eat() / 2)
    }
}