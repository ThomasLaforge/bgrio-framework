import { Socket, Namespace } from "socket.io";
import { SocketPlayer, GameTypeClass} from "@bgrio/common";

export interface Server {
    socketEvents: any
}

export interface ExtendedSocket extends Socket {
    username: string;
    socketPlayer: SocketPlayer;
}

export interface ExtendedNamespace extends Namespace {
    game: GameTypeClass
}