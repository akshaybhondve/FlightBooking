import { Component, OnInit } from '@angular/core';
import BookFlight from '../Entity/BookFlight';
import BookFlightService from '../Services/BookFlightService';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {

  constructor(private bookFlightService:BookFlightService) { }
  bookFlights:BookFlight[]=[];

  ngOnInit(): void {
    const promise=this.bookFlightService.getAllFlightTickets();
    promise.subscribe((response)=>{
      console.log();
      this.bookFlights=response as BookFlight[];
    })
  }
  

}
