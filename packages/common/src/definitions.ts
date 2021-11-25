import { Client } from './Client';
import { MultiplayerGame } from './MultiplayerGame';
import { Server } from './Server';
import { SoloGame } from './SoloGame';

export type Class = { new(...args: any[]): any; };

export type GameClass = Class;
export type GameTypeClass = MultiplayerGame| SoloGame

export interface GameModule {
    id: string,
    client: Client,
    server: Server
}
export interface GameLobbyListElt {
    people: string[]
    gameId: string
    isFull: boolean
}

export type GameLobbyList = GameLobbyListElt[]