import { Game } from "./Game";
import { DEFAULT_IS_PRIVATE_GAME, DEFAULT_NB_PLAYER } from "./constants";
import { SocketPlayer } from "./SocketPlayer";
import { GameClass } from "./definitions";

export class MultiplayerGame extends Game {

    constructor(
        public gameClass: GameClass,
        public nbPlayer = DEFAULT_NB_PLAYER,
        public players: SocketPlayer[] = [],
        public isPrivate = DEFAULT_IS_PRIVATE_GAME,
        public canBeForcedIsFull?: Function,
        private _forcedIsFull = false
    ){
        super(gameClass)
    }

    start(){
        console.log('multiplayer game start', this.canStart())
        if(this.canStart()){
            super.start(this.players)
            this._forcedIsFull = true
        }
        else {
            throw Error('can\t start the game')
        }
    }

    canStart(){
        return this.nbPlayer === 0
            || ( this.nbPlayer > 0 && this.players.length === this.nbPlayer )
            || ( this.nbPlayer < 0 && this.players.length > Math.abs(this.nbPlayer) )
    }
   
    addPlayer(p: SocketPlayer){
        this.players = this.players.concat(p)
    }
    
    removePlayer(socketId: string){
        this.players = this.players.filter(p => p.socketId !== socketId)
    }
    
    get playersNames(){
        return this.players.map(p => p.surname)
    }

    get isFull(){
        return this._forcedIsFull || this.nbPlayer === this.players.length
    }

    isFirstPlayer(socketId: string){
        return this.players[0] && this.players[0].socketId === socketId 
    }

    getPlayer(socketId: string){
        return this.players.find(p => p.socketId === socketId) as SocketPlayer
    }

    getPlayerIndex(p: SocketPlayer){
        return this.players.findIndex(player => player.socketId === p.socketId) as number
    }

}