import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

const config: SocketIoConfig = { 
  url: environment.ws, 
  options: {} };
 

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

//services
import { SocketsService } from './services/sockets/sockets.service';
import { ChatService } from './services/chat/chat.service';
import { ChatComponent } from './components/chat/chat.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListUsersComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule
  ],
  providers: [
    SocketsService,
    ChatService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
