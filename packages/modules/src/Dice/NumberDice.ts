import Dice from "./Dice";

export default class NumberDice extends Dice<number>{
    constructor(
        nbFace: number
    ){
        super(
            Array.from({length: nbFace}, (_, i) => i + 1)
        )
    }
}