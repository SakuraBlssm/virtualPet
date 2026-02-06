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