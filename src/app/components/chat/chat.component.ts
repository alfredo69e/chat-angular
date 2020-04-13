import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  public text: string = '';
  private messages: Subscription
  public newMessage: any[] = [];
  private element: HTMLElement;

  constructor(
    private _chatService: ChatService
  ) { }

  public onSend() {

    if(this.text.length > 0) {
      this._chatService.sendMessage(this.text);

      this.text = '';
    }
    
  }

  ngOnInit(): void {

    this.element = document.getElementById('chats');

   this.messages = this._chatService.getMessage()
    .subscribe((res) => {

      console.log(res);
      this.newMessage.push(res);

      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
      

    }, (err) => {

    })

  }

  ngOnDestroy() {
    if(this.messages) {
      this.messages.unsubscribe();
    }
  }



}
