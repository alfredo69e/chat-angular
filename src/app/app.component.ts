import { Component, OnInit } from '@angular/core';
import { SocketsService } from './services/sockets/sockets.service';
import { ChatService } from './services/chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private _socketsService: SocketsService,
    private _chatService: ChatService
  ) { }

  ngOnInit(): void {
    this._chatService.getMessagesPrivate()
    .subscribe((res) => {
      console.log(res);
      
    }, (err) => {

    });
  }

}
