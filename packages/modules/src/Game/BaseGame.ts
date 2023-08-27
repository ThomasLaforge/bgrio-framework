
export abstract class BaseGame <PlayerCollection> {

    constructor(
        public players: PlayerCollection,
        public startDate = Date.now(),
        public endDate?: number,
    )
    {}

    abstract isGameOver(): boolean
}