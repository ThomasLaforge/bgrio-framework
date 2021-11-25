import { ExtendedSocket, ExtendedNamespace, DEFAULT_IS_PRIVATE_GAME } from "./Server";
import { Server } from "socket.io";
import { SocketPlayer, MultiplayerGame, SoloGame } from "@bgrio/common";

export class SuperSocket {

    constructor(
        public baseSocket: ExtendedSocket
    ){}

    on(action: string, listener: (...argsListener: any[]) => void){
        this.baseSocket.on(action, (...args) => {
            console.log(this.username || this.baseSocket.id ,' receive : ', action)
            listener(...args)
        })
    }

    emit(messageType: string, ...data: any[]){
        console.log(this.username || this.baseSocket.id ,' send : ', messageType)
        return this.baseSocket.emit(messageType, ...data)
    }

    join(roomName: string | string[]){
        console.log(this.username || this.baseSocket.id ,' join : ', roomName)
        this.baseSocket.join(roomName)
    }

    leave(roomName: string){
        console.log(this.username || this.baseSocket.id ,' leave : ', roomName)
        this.baseSocket.leave(roomName)
    }

    playerEnterGameRoom(game: MultiplayerGame){
        this.join(game.id)
        this.leave('lobby');
        let room = this.baseSocket.server.to(game.id) as ExtendedNamespace
        room.game = game
        if(!game.players.find(p => p.socketId === this.id)){
            game.addPlayer(this.socketPlayer)
        }
        this.emit('lobby:player.enter_in_game_table', game.id)
        this.baseSocket.to('lobby').emit('lobby:player.new_game');
    }

    createNewMultiplayerGame(gameType: string, isPrivate = DEFAULT_IS_PRIVATE_GAME, nbPlayerToStart?: number): MultiplayerGame {
        let newGame = new MultiplayerGame(gameType, isPrivate, nbPlayerToStart)
        newGame.addPlayer(this.socketPlayer)
        return newGame
    }

    createNewSoloGame(gameType: string, isPrivate = DEFAULT_IS_PRIVATE_GAME): SoloGame {
        return new SoloGame(gameType, this.socketPlayer)
    }

    get server(): Server { return this.baseSocket.server }

    get username(){ return this.baseSocket.username}
    set username(username: string){ this.baseSocket.username = username }

    get socketPlayer(){ return this.baseSocket.socketPlayer}
    set socketPlayer(player: SocketPlayer){ this.baseSocket.socketPlayer = player }

    get id(){
        return this.baseSocket.id
    }

}