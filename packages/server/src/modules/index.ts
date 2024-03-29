import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import * as path from 'path'

// My socket
import { SuperSocket } from './SuperSocket';
import { ExtendedSocket } from './Server';
import { SocketIoDescriptor } from './SocketIoDescriptor';

// Events
import { addLoginEvents } from '../socketEvents/login'
import { addLobbyEvents } from '../socketEvents/lobby'
import { addChatEvents } from '../socketEvents/chat'

import { GameCollection, GameModule, serverPort } from '@bgrio/common';

export class BoardGameServer {

    constructor(
        public games: GameModule[],
        public serveClient = false
    ){}

    start(){
        const app = express();
        const httpServer = createServer(app);
        const io = new Server(httpServer, { /* options */ });
        
        const GC = new GameCollection()
        let hasLoggedAllSocketEvents = false
    
        // render index page
        if(this.serveClient){
            const clientDirPath = path.join(__dirname, '../../src/client')
            app.use(express.static(clientDirPath));
            app.get('/', (_, res) => {
                res.sendFile(path.join(clientDirPath, 'index.html'));
            });
        }
    
        io.on('connection', (baseSocket: ExtendedSocket) => {
            const server = new SocketIoDescriptor(io)
            let socket = new SuperSocket(baseSocket)
            console.log('a user connected', socket.id);
    
            // add events from modules
            addLoginEvents(socket)
            addChatEvents(socket)
            addLobbyEvents(socket, GC)
    
            // add games events
            this.games.forEach( (g: any) => {
                g.addEvents(socket, GC)
            })
    
            socket.on('reconnecting', () => {
                console.log('reconnecting...')
            })
    
            socket.on('reconnect', () => {
                console.log('reconnect...')
            })
    
            socket.on('disconnect', () => {
                console.log('disconnecting ...', socket.id)
                let game = GC.getGameWithUser(socket.id)
                if (game) {
                    let gameHasStarted = game.startGameDate
                    if (gameHasStarted) {
                        console.log('was in game', game.id)
                        // delete the game
                        // GC.removeGame(game.id)
                    }
                    else {
                        // remove player
                        game.removePlayer(socket.id)
                    }
                    socket.baseSocket.to(game.id).emit('game:user_disconnect', socket.username, gameHasStarted)
                }
            })
    
            // Debugs
            socket.on('debug:get_all_sockets', async () => {
                console.log('ask getAllSockets', server.allUsernames)
                try{
                    const clients = await io.allSockets;
                    socket.emit('debug:get_all_sockets', clients)
                }
                catch(e){
                    console.error('error on getting all sockets')
                }
            })
    
            // logging events
            if (!hasLoggedAllSocketEvents) {
                console.log('allEvents', baseSocket.eventNames())
                hasLoggedAllSocketEvents = true
            }
        });
    
        // start server
        httpServer.listen(serverPort, function () {
            console.log('listening on localhost:' + serverPort);
        });
    }
}