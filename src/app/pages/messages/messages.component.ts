import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/services/sockets/sockets.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
    public _socketsService: SocketsService
  ) { }

  onLogout() {
    this._socketsService.logout();
  }

  ngOnInit(): void {
    
  }

}
