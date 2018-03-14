import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  socket = io(window.location.origin, {
    path: '/socket'
  });

  public send(label: string, data: any) {
    this.socket.emit(label, data);
  }

  /**
   * Subscribes to a specified socket event and executes the
   * given function fn.
   *
   * @param {string} str name of the event
   * @param {(msg) => void} fn to be executed
   */
  public subscribeTo(str: string, fn: (msg) => void) {
    this.socket.on(str, msg => fn(msg));
  }
}
