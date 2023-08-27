import { BaseCard } from "./BaseCard";

export abstract class ValueCard extends BaseCard<number> {

    constructor(
        public value: number
    )
    {
        super()
    }

    isEqual(card: ValueCard){
        return card.value === this.value
    }

}