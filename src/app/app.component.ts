import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBooking';
  enableEdit: boolean = false;

  hideTab:boolean=false;
  x(){
    this.hideTab = true;
  }
}
