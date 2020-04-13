import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  public socketStatus: boolean = false;
  public user: User = null;

  constructor(
    private _socket: Socket,
    private _router: Router
  ) {
    this.loadLocalStorage();
    this.checkStatus();
   }


  public checkStatus() {
    this._socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
      this.loadLocalStorage();
    });

    this._socket.on('disconnect', () => {
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
  }

  public emit( event: string, payload?: any, callback?: Function ){
    this._socket.emit(event, payload, callback);
  }


  public listen(event: string) {
    return this._socket.fromEvent( event );
  }

  public loginWs(name: string) {

    return new Promise((resolve, reject) => {
      this.emit( 'config-user', { name }, (res) => {

        this.user = new User( name );
        this.setUserLocalStorage();
        return resolve( res )
      })
    })

  }

  public logout() {
    this.user = null;
    localStorage.removeItem('user');

    const payload = {
      name: 'sin-nombre'
    }

    this.emit( 'config-user', payload, () => {}); 
    this._router.navigate(['/']);
  }

  public getUser () {
    return this.user;
  }

  public setUserLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  public loadLocalStorage() {
    if( localStorage.getItem('user') ) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loginWs(this.user.name);
    }
  }

}
