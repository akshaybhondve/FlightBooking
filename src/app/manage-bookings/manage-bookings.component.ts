import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import BookFlight from '../Entity/BookFlight';
import BookFlightService from '../Services/BookFlightService';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {

  constructor(private route:Router,private bookFlightService:BookFlightService) { }
  bookFlights:BookFlight[]=[];
  bookFlight:BookFlight=new BookFlight();

  ngOnInit(): void {
    const promise=this.bookFlightService.getAllFlightTickets();
    promise.subscribe((response)=>{
      console.log();
      this.bookFlights=response as BookFlight[];
    })
  }

  updateBookingFlightStatus(booking_id:number,status:string){
    const promoise = this.bookFlightService.updateBookingFlightStatus(booking_id,status);
    promoise.subscribe((response)=>{
      this.bookFlight = response as BookFlight;
      alert("Flight has been "+this.bookFlight.status);
      this.route.navigate(['/book-flight']);
    },
    function(error){
      alert(error.message);
    });
  }
  

}
