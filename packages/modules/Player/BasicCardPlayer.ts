import { Hand } from "../Cards/Hand";
import { BasePlayer } from "./BasePlayer";

export abstract class BasicCardPlayer<Card> extends BasePlayer {
    constructor(
        pseudo: string,
        public hand: Hand<Card>
    ){
        super(pseudo)
    }
}