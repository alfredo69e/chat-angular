import { Injectable } from '@angular/core';
import { SocketsService } from '../sockets/sockets.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private _socketsService: SocketsService
  ) { }

 public sendMessage(message: string) {
    const payload = {
      de: this._socketsService.getUser().name,
      cuerpo: message,

    }
    this._socketsService.emit('message', payload)
  }

  public getMessage() {
   return this._socketsService.listen('new-message');
  }

  public getMessagesPrivate() {
    return this._socketsService.listen('private-message');
  }

  public getUsersActive() {
    return this._socketsService.listen('user-actives');
  }

  public emitUsers() {
    this._socketsService.emit('get-users');
  }

}
