import { ExtendedSocket } from "./Server";
import { Server } from 'socket.io'

export class SocketIoDescriptor {

    constructor(
        public io: Server
    ){}

    get allUsernames(): string[] {
        return Object.keys(this.io.sockets.sockets).map(socketId => {
            let socket = this.io.sockets.sockets[socketId]
            return (socket as ExtendedSocket).username
        })
    }

}