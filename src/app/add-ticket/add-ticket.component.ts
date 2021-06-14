import { Component, OnInit } from '@angular/core';
import Airline from '../Entity/Airline';
import Ticket from '../Entity/Ticket';
import AirlineService from '../Services/AirlineService';
import TicketService from '../Services/TicketService';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  constructor(private ticketService: TicketService, private airlineService:AirlineService) { }
  ticket:Ticket = new Ticket();
  tickets:Ticket[]=[];
  airlines:Airline[]=[];

  ngOnInit(): void {
    const promoise = this.airlineService.getAirLines()
    promoise.subscribe((response)=>{
      console.log(response);
      this.airlines = response as Airline[];
    },
    function(error){
      alert(error.message);
    });
  }

  getTickets(){
    
  }

  saveTicket(){
    console.log("saved "+this.ticket.ticket_price);
    const promise = this.ticketService.saveTicket(this.ticket);
    promise.subscribe(function(response){
      console.log(response);
      alert('Saved Successfully')
    },
    function(error){
      alert(error.message);
    });
  }

  clearForm(){
    this.ticket.airline_id=0;
    this.ticket.airline_name="";
    this.ticket.ticket_type="";
    this.ticket.ticket_price=0;
  }
}
