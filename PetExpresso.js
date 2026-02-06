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