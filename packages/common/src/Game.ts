import { GameClass } from "./definitions"

export abstract class Game {

    constructor(
        public gameClass: GameClass,
        public id = Date.now().toString(),
        public gameInstance: any = null,
        public creationDate = Date.now(),
        public startGameDate: number = null,
    ){}

    start(...options: any[]){
        if(!this.hasStart()){
            this.gameInstance = new this.gameClass(...options)
            console.log('Game start', options, this.gameInstance)
            this.startGameDate = Date.now()
        }
    }

    hasStart(){
        return !!this.startGameDate
    }

}