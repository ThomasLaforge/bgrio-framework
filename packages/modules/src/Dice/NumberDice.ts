export class NumberDice {
    constructor(
        public nbFace = 6
    ){}

    roll(){
        return 1 + Math.floor(Math.random() * this.nbFace)
    }
}
