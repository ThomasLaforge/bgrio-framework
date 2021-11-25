import { Game } from "./Game";
import { GameClass } from "./definitions";
import { SocketPlayer } from "./SocketPlayer";

export class SoloGame extends Game {

    constructor(
        public gameClass: GameClass, 
        public player: SocketPlayer
    ){
        super(gameClass)
        this.player = player
    }

}