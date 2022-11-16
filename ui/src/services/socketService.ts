import * as io from 'socket.io-client'

const SERVER_URL = 'http://localhost:8080'

export class SocketServic {
    private socket: any;

    public initSocket(): void {
        this.socket = io.connect(SERVER_URL);
    }

    public send(message: any): void {
        this.socket.emit('message', message);
    }

    public onMessage(): void {
        return this.socket.on('message', )
    }
}
