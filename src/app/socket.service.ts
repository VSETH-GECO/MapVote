import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  socket = io(window.location.origin, {
    path: '/socket'
  });

  /**
   * Sends a message over the socket.
   *
   * @param {string} label for the message
   * @param data content of the message
   */
  public send(label: string, data: any) {
    this.socket.emit(label, data);
  }

  /**
   * Subscribes to a specified socket event and executes the
   * given function fn.
   *
   * @param {string} label of the event
   * @param {(msg) => void} fn to be executed
   */
  public subscribeTo(label: string, fn: (msg) => void) {
    this.socket.on(label, msg => fn(msg));
  }
}
