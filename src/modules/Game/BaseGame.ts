
export abstract class BaseGame <PlayerCollection> {

    constructor(
        public players: PlayerCollection,
        public startDate = Date.now()
    )
    {}

    abstract isGameOver(): boolean
}