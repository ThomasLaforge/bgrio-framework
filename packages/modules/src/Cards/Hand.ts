export abstract class Hand<Card> {
    constructor(
        public cards: Card[],
        public initialCards: Card[] = []
    )
    {}

    abstract useCard(card: Card): void

    shuffle(): void {
        this.cards.sort(() => Math.random() - 0.5)
    }

    draw(): Card {
        if(this.cards.length === 0) throw new Error('No cards left')
        const card = this.cards[0]
        this.cards = this.cards.slice(1)
        return card
    }

    addCard(card: Card): void {
        this.cards = [...this.cards, card]
    }

    reset(shuffle = false): void {
        this.cards = this.initialCards
        if(shuffle){
            this.shuffle()
        }
    }

}