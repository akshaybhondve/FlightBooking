import { Component, OnInit } from '@angular/core';
import BookFlight from '../Entity/BookFlight';
import BookFlightService from '../Services/BookFlightService';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

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
