import { Component, OnInit } from '@angular/core';
import BookFlight from '../Entity/BookFlight';
import BookFlightService from '../Services/bookFlightService';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private bookFlightService:BookFlightService) { }
  bookFlight:BookFlight = new BookFlight();
  bookFlights:BookFlight[]=[];

  ngOnInit(): void {
  }

  saveTicket(){
    console.log("saved "+this.bookFlight.flightType);
    const promise = this.bookFlightService.save(this.bookFlight);
    promise.subscribe(function(response){
      console.log(response);
      alert('Saved Successfully')
    },
    function(error){
      alert(error.message);
    });
  }

}
