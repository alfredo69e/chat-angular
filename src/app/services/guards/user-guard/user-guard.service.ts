import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SocketsService } from '../../sockets/sockets.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    public _socketsService: SocketsService,
    private router: Router
  ) { }

  canActivate() {

    if(this._socketsService.getUser() ) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false
    }

  }
}
