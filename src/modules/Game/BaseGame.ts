
export abstract class BaseGame <PlayerCollection> {
    constructor(
        public players: PlayerCollection
    )
    {}

    abstract isGameOver(): boolean
}