export default class Dice<T> {
    constructor(
        public faces: T[]
    ){}

    roll(){
        const index =  Math.floor(Math.random() * this.nbFace)
        return this.faces[index]
    }

    get nbFace(){
        return this.faces.length
    }
}
