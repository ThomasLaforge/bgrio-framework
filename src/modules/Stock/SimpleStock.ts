import { Stock } from "./Stock";

export class SimpleStock implements Stock {

    constructor(
        public value = 0,
        public min = 0,
        public max?: number
    ){}
    
    add(nb = 1){
        this.value += nb
        if( 
            (this.max || this.max === 0) 
            && this.value > this.max
        ){
            this.value = this.max
        }
    }

    use(nb = 1){
        this.value -= nb
        if( 
            (this.min || this.min === 0) 
            && this.value < this.min
        ){
            this.value = this.min
        }
    }
}