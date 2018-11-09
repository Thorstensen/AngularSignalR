import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _snackBar : MatSnackBar;
  private _message : string;
  private _hubConnection : HubConnection;

  constructor(snackbar : MatSnackBar) {
    this._snackBar = snackbar;
    
    let _hubConnectionBuilder = new HubConnectionBuilder();
    _hubConnectionBuilder.withUrl('http://localhost:51260/notifications');
    this._hubConnection =_hubConnectionBuilder.build();
  }

  ngOnInit(): void {
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
      if(this._message != null && this._message.length > 0)
      this._snackBar.open(this._message, null, {
        duration: 1000,
        panelClass: ['snackbar']
      });
    });
  }

  onSubmitMessage() : void {
    this._hubConnection.invoke("BroadcastMessageAsync", "Header!", this._message)
                       .then(() => console.log("Sent Message: " + this._message))
                       .catch(err => console.log('Caught error: ' + err));
  }
}
