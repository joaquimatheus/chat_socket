import { io } from 'socket.io-client'
import { Observer, Observable } from 'rxjs'

import { IChat } from '../components/ChatBubble'
import { Event } from '../model/Event'

const SERVER_URL = 'http://localhost:8080'

export class SocketService {
    private socket:any = io(SERVER_URL)

    public initSocket(): void {
        this.socket.on("connect", () => {
            console.log(this.socket.id)
        })
    }

    public send(message: IChat): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<IChat> {
        return new Observable<IChat>(observer => {
            this.socket.on('message', (data: IChat) => observer.next(data))
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next())
        });
    }
}
