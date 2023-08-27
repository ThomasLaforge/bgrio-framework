import { BaseCard } from "./BaseCard";

export class ColorCard<ColorEnum> extends BaseCard<number> {

    constructor(
        public value: number,
        public color: ColorEnum
    )
    {
        super()
    }

    isEqual(card: ColorCard<ColorEnum>){
        return card.value === this.value && card.color === this.color
    }

}


