import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../../services/sockets/sockets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials: any;

  constructor(
    private _socketsService: SocketsService,
    private _route: Router
  ) { }

  public onLogin(data: object) {
    console.log('llegue aca');
    this._socketsService.loginWs(data['name'])
    .then(() => {
      this._route.navigate(['messages']);
    })
    
  }
  ngOnInit(): void {
    this.credentials = {
      name: null,
      pass: null
    }
  }

}
