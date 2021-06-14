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
    this.getOnwardJourneyDate();
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

  onOnwrdJourneyDate:any = "";
  onReturnJourneyDate:any = "";
  onward_journey_date:any="";

  getOnwardJourneyDate(){
    var date:any = new Date();
    var toDate:any = date.getDate();
    if(toDate < 10){
      toDate = '0'+toDate;
    }

    var month = date.getMonth()+1;
    if(month < 10){
      month = '0'+month;
    }

    var hour = date.getHours();
    if(hour < 10){
      hour = '0'+hour;
    }

    var minutes = date.getMinutes();
    if(minutes < 10){
      minutes = '0'+minutes;
    }
    var year = date.getFullYear();
    this.onOnwrdJourneyDate = year+"-"+month+"-"+toDate+"T"+hour+":"+minutes;
    this.onward_journey_date = this.onOnwrdJourneyDate;
    console.log(this.onOnwrdJourneyDate);
  }

  getReturnJouneyDate(date:string){
    console.log(date);
    this.onReturnJourneyDate= (date);
    console.log(this.onReturnJourneyDate);
  }



  onSelectionOnway(){
    this.radioSel1 = this.bookFlight.onward_flight_rate.split(" ");
    this.final_flight_rate = parseInt(this.radioSel1[1]);
    this.bookFlight.final_flight_rate = this.final_flight_rate;
  }

  onSelectionReturnTicket(){
    this.radioSel2 = this.bookFlight.return_flight_rate.split(" ");
    this.radioSel1 = this.bookFlight.onward_flight_rate.split(" ");

    this.final_flight_rate = parseInt(this.radioSel2[1])+parseInt(this.radioSel1[1]);
    this.bookFlight.final_flight_rate = this.final_flight_rate;
  }

  applyDiscount(discount:string){
    console.log("applying discount "+this.bookFlight.discount);
    const promise = this.bookFlightService.getDiscountByCode(this.bookFlight.discount);
    promise.subscribe((response)=>{
      this.discount=response as Discount;
      this.totalRate = (parseInt(this.radioSel2[1])+parseInt(this.radioSel1[1]));
      this.final_flight_rate = (parseInt(this.radioSel2[1])+parseInt(this.radioSel1[1])*(this.discount.discount_percentage/100));
      this.bookFlight.final_flight_rate = this.final_flight_rate;
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
