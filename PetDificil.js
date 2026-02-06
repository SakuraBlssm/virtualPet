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