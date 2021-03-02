import { shuffle } from "../tools";
import { BaseDeck } from "./BaseDeck";

export abstract class DeckWithDiscard<Card> extends BaseDeck<Card> {
    constructor(
        cards: Card[],
        public discard: Card[] = [],
        shuffle?: boolean
    )
    {
        super(cards, shuffle)
    }

    discardCard(card: Card){
        this.discard = [card, ...this.discard]
    }

    shuffleAllBackInDeck(){
        this.cards = shuffle([...this.cards, ...this.discard])
        this.discard = []
    }

    get discardLength(){
        return this.discard.length
    }
    
}