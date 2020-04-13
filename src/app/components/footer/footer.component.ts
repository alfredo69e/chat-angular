import { Component } from '@angular/core';
import { SocketsService } from '../../services/sockets/sockets.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    public _socketsService: SocketsService
  ) { }


}
