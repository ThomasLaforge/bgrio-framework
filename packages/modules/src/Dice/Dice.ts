export default class Dice<T> {
    constructor(
        public faces: T[]
    ){}

    roll(){
        const index =  Math.floor(Math.random() * this.getNbFace())
        return this.faces[index]
    }

    getNbFace(){
        return this.faces.length
    }
}
