import { shuffle } from "../tools"

export class BaseDeck<Card> {

    constructor(
        public cards: Card[],
        shuffle = true
    )
    {
        shuffle && this.shuffle()
    }

    pick(nbCards = 1){
        const cards = this.cards.slice(0, nbCards)
        this.cards = this.cards.slice(nbCards, this.cards.length)
        return cards
    }

    putOnTop(cards: Card[]){
        this.cards = [...cards, ...this.cards]
    }

    shuffle(){
        this.cards = shuffle(this.cards)
    }

    get length(){
        return this.cards.length
    }
}