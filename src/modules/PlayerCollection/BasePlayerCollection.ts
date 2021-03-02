export abstract class BasePlayerCollection<Player> {

    constructor(
        public players: Player[]
    )
    {}

    get nbPlayers(){
        return this.players.length
    }

}