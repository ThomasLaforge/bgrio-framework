import { ValueCard } from "../Cards/ValueCard";
import { BasicCardPlayer } from "../Player/BasicCardPlayer";
import { BasePlayerCollection } from "./BasePlayerCollection";

export abstract class TurnBasedPlayerCollection<Player> extends BasePlayerCollection<Player> {
    constructor(
        players: Player[],
        public currentPlayerIndex = 0
    )
    {
        super(players)
    }

    abstract play(...options): void

    nextPlayer(){
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.nbPlayers
    }

    get currentPlayer(){
        return this.players[this.currentPlayerIndex]
    }
}