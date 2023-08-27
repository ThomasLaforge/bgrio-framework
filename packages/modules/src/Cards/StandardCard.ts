import { ColorCard } from "./ColorCard";

export enum StandardColors {
    Spades = "spades",
    Clubs = "clubs",
    Hearts = "hearts",
    Diamonds = "diamonds"
}

export class StandardCard extends ColorCard<StandardColors> {

    constructor(
        public value: number,
        public color: StandardColors
    )
    {
        super(value, color)
    }

}