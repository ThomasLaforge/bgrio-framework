import { Stock } from "./Stock"

export class GenericStock<T> implements Stock {

    constructor(
        public values: T[],
        public currentIndex = 0
    ){}

    add(nb = 1){
        this.currentIndex += nb
        if(this.currentIndex > this.maxCurrentIndex) this.currentIndex = this.maxCurrentIndex
    }

    use(nb = 1){
        this.currentIndex -= nb
        if(this.currentIndex < 0) this.currentIndex = 0
    }

    get currentValue(){
        return this.values[this.currentIndex]
    }

    get maxCurrentIndex(){
        return this.values.length - 1
    }
}