import { Component, OnInit } from '@angular/core';
import BookFlight from '../Entity/BookFlight';
import Discount from '../Entity/Discount';
import BookFlightService from '../Services/BookFlightService';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private bookFlightService:BookFlightService) { }
  
  bookFlight:BookFlight = new BookFlight();
  discount:Discount = new Discount();
  bookFlights:BookFlight[]=[];

  ngOnInit(): void {
  }

  saveTicket(){
    console.log("saved "+this.bookFlight.flight_type);
    const promise = this.bookFlightService.save(this.bookFlight);
    promise.subscribe(function(response){
      console.log(response);
      alert('Saved Successfully')
    },
    function(error){
      alert(error.message);
    });
  }

  radioSel1:any;
  radioSel2:any;
  totalRate!:number;
  final_flight_rate!:number;

  onSelectionOnway(){
    this.radioSel1 = this.bookFlight.onward_flight_rate.split(" ");
    this.final_flight_rate = Number(this.radioSel1[1]);
  }

  onSelectionReturnTicket(){
    this.radioSel2 = this.bookFlight.return_flight_rate.split(" ");
    this.radioSel1 = this.bookFlight.onward_flight_rate.split(" ");

    this.final_flight_rate = Number(this.radioSel2[1])+Number(this.radioSel1[1]);
  }

  applyDiscount(discount:string){
    console.log("applying discount "+this.bookFlight.discount);
    const promise = this.bookFlightService.getDiscountByCode(this.bookFlight.discount);
    promise.subscribe((response)=>{
      this.discount=response as Discount;
      this.totalRate = (Number(this.radioSel2[1])+Number(this.radioSel1[1]));
      this.final_flight_rate = (Number(this.radioSel2[1])+Number(this.radioSel1[1])*(this.discount.discount_percentage/100));
    },
    function(error){
      alert("No Discount Found...Retry !");
    });
  }

  clearFinalAmount(){
    this.bookFlight.final_flight_rate=0;
    this.bookFlight.onward_flight_rate="";
    this.bookFlight.return_flight_rate="";
    this.bookFlight.discount="";
  }


}
