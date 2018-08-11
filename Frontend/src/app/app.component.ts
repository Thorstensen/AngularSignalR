import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _hubConnection: HubConnection;
  msgs: Message[] = [];

  constructor() { 
    let y = 1;
  }

  ngOnInit(): void {
    let _hubConnectionBuilder = new HubConnectionBuilder();
    _hubConnectionBuilder.withUrl('http://localhost:51259/notifications');

    this._hubConnection =_hubConnectionBuilder.build();
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
      if(this.msgs.length > 5)
        this.msgs = [];
      
        this.msgs.push({ severity: type, summary: payload });
    });
  }
}