import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public usersActives: Observable<any>;

  constructor(
    private _chatService: ChatService
  ) { }

  ngOnInit(): void {

    this.usersActives =  this._chatService.getUsersActive();

    this._chatService.emitUsers();
   
  }

}
