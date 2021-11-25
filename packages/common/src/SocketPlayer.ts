export class SocketPlayer {
    
    constructor(
        public surname: string, 
        public socketId: string
    ){}

    isEqual(p: SocketPlayer){
        return this.socketId === p.socketId
    }
    
}