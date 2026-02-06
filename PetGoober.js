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