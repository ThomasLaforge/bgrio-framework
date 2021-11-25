export abstract class Hand<Card> {
    constructor(
        public cards: Card[]
    )
    {}

    abstract useCard(card: Card): void
}