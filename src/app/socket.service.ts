import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  socket = io('/api')

  public send(data: any) {
    this.socket.emit('vote state', 'get');
  }


}
