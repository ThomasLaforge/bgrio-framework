import { Socket, Namespace } from "socket.io";
import { SocketPlayer, GameTypeClass} from "@bgrio/common";

export interface ChatMessage {
    username: string,
    msg: string
}

export const serverPort = process.env.PORT || 3027

export interface Server {
    socketEvents: any
}

export const DEFAULT_IS_PRIVATE_GAME = false

export interface ExtendedSocket extends Socket {
    username: string;
    socketPlayer: SocketPlayer;
}

export interface ExtendedNamespace extends Namespace {
    game: GameTypeClass
}