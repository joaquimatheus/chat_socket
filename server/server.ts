import { createServer, Server } from 'http';
import cors from 'cors';
import express from 'express';
import * as socketIo from 'socket.io';

import { Message } from './core/model/chatModel'

export class ChatServer {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private io: socketIo.Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express()
        this.app.use(cors())
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private sockets(): void {
        this.io = new socketIo.Server(this.server, {
            cors: {
                origin: '*'
            }
        })
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connection', (socket: any) => {
            console.log(socket.id)

            console.log(socket.rooms)
            socket.join("room1")
            console.log(socket.rooms)

            console.log('Connected client on port %s.', this.port);

            socket.on('message', (m: Message) => {
                console.log(`[server](message): %s`, JSON.stringify(m));
                this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnect');
            })
        })
    }

    public getApp(): express.Application {
        return this.app;
    }
}
