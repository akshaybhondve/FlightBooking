import { Component, OnInit } from '@angular/core';
import Airline from '../Entity/Airline';
import BookFlight from '../Entity/BookFlight';
import Discount from '../Entity/Discount';
import Flight from '../Entity/Flight';
import ScheduleFlight from '../Entity/ScheduleFlight';
import Ticket from '../Entity/Ticket';
import BookFlightService from '../Services/BookFlightService';
import FlightService from '../Services/FlightService';
import ScheduleFlightService from '../Services/ScheduleFlightService';
import TicketService from '../Services/TicketService';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private scheduleFlightService:ScheduleFlightService,private ticketService:TicketService,private bookFlightService:BookFlightService,private flightService:FlightService) { }
  
  bookFlight:BookFlight = new BookFlight();
  discount:Discount = new Discount();
  bookFlights:BookFlight[]=[];
  onwards:ScheduleFlight[]=[];
  returns:ScheduleFlight[]=[];
  onwardTicketPrice:Ticket[]=[];
  returnTicketPrice:Ticket[]=[];
  returnSchedule:ScheduleFlight=new ScheduleFlight();
  onwardSchedule:ScheduleFlight=new ScheduleFlight();

  ngOnInit(): void {
    this.getOnwardJourneyDate();
  }

  getOnwardScheduleFlight(fromLocation:string, toLocation:string){
    const promise = this.bookFlightService.getScheduleFlight(fromLocation,toLocation);
    promise.subscribe((response)=>{
      this.onwards = response as ScheduleFlight[];
      if (this.onwards.length === 0) 
      { 
        alert('Could not find any onward scheduled flights- Please enter correct location name')
      }
    },
    function(error){
      alert(error.message);
    });
  }

  getReturnScheduleFlight(fromLocation:string, toLocation:string){
    const promise = this.bookFlightService.getScheduleFlight(fromLocation,toLocation);
    promise.subscribe((response)=>{
      this.returns = response as ScheduleFlight[];
      if (this.returns.length === 0) 
      { 
        alert('Could not find any return scheduled flights- Please enter correct location name')
      }
    },
    function(error){
      alert(error.message);
    });
  }

  getOnwardFlightPricesO1(value:number){
    this.bookFlight.onward_scheduled_flight=value;
    this.getOnwardScheduleFlightByIDO2(value);
  }

  onwardAirlineName="";
  getOnwardScheduleFlightByIDO2(value:number){
    const promise = this.scheduleFlightService.getScheduleFlightByID(value);
    promise.subscribe((response)=>{
      this.onwardSchedule = response as ScheduleFlight;
      this.onwardAirlineName=this.onwardSchedule.airline_name;
      this.getAllOnwardFlightPriceByAirlineNameO3(this.onwardAirlineName);
    },
    function(error){
      alert(error.message);
    });
  }

  getAllOnwardFlightPriceByAirlineNameO3(value:string){
    const promise = this.ticketService.getTicketPriceByAirlineName(value);
    promise.subscribe((response)=>{
      this.onwardTicketPrice = response as Ticket[];
    },
    function(error){
      alert(error.message);
    });
  }

getReturnFlightPricesR1(value:number){
    this.bookFlight.return_scheduled_flight=value;
    this.getReturnScheduleFlightByIDR2(value);
  }

  returnAirlineName="";
  getReturnScheduleFlightByIDR2(value:number){
    const promise = this.scheduleFlightService.getScheduleFlightByID(value);
    promise.subscribe((response)=>{
      this.returnSchedule = response as ScheduleFlight;
      this.returnAirlineName=this.returnSchedule.airline_name;
      this.getAllReturnFlightPriceByAirlineNameR3(this.returnAirlineName);
    },
    function(error){
      alert(error.message);
    });
  }

  getAllReturnFlightPriceByAirlineNameR3(value:string){
    const promise = this.ticketService.getTicketPriceByAirlineName(value);
    promise.subscribe((response)=>{
      this.returnTicketPrice = response as Ticket[];
    },
    function(error){
      alert(error.message);
    });
  }


  saveTicket(){
    const promise = this.bookFlightService.save(this.bookFlight);
    promise.subscribe(function(response){
      console.log(response);
      alert('Saved Successfully')
    },
    function(error){
      alert(error.message);
    });
  }

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
    this.final_flight_rate = this.bookFlight.onward_flight_rate;
    this.bookFlight.final_flight_rate = this.bookFlight.onward_flight_rate;
  }

  onSelectionReturnTicket(){
    this.final_flight_rate = Number(this.bookFlight.return_flight_rate) + Number(this.bookFlight.onward_flight_rate);
    this.bookFlight.final_flight_rate = this.final_flight_rate;
  }

  applyDiscount(discount:string){
    console.log("applying discount "+this.bookFlight.discount);
    const promise = this.bookFlightService.getDiscountByCode(this.bookFlight.discount);
    promise.subscribe((response)=>{
      this.discount=response as Discount;
      this.totalRate = Number(this.bookFlight.return_flight_rate) + Number(this.bookFlight.onward_flight_rate);
      this.final_flight_rate = (this.totalRate*(this.discount.discount_percentage/100));
      this.bookFlight.final_flight_rate = this.final_flight_rate;
    },
    function(error){
      alert("No Discount Found...Retry !");
    });
  }

  clearFinalAmount(){
    this.bookFlight.final_flight_rate=0;
    this.bookFlight.onward_flight_rate=0;
    this.bookFlight.return_flight_rate=0;
    this.bookFlight.discount="";
  }

  clearForm(){
    this.bookFlight.flight_type="";
    this.bookFlight.from_location="";
    this.bookFlight.to_location="";
    // onward_journey_date:string="";
    // return_journey_date:string="";
    this.bookFlight.onward_flight_rate=0;
    this.bookFlight.return_flight_rate=0;
    this.bookFlight.onward_scheduled_flight=0;
    this.bookFlight.return_scheduled_flight=0;
    this.bookFlight.onward_meal="";
    this.bookFlight.return_meal="";
    this.bookFlight.discount="";
    this.bookFlight.onward_seat="";
    this.bookFlight.return_seat="";
    this.bookFlight.final_flight_rate=0;
  }


}
