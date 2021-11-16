export class Dice {
    constructor(
        public nbFace = 6
    ){}

    roll(){
        return 1 + Math.floor(Math.random() * this.nbFace)
    }
}
