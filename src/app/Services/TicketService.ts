import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import Ticket from "../Entity/Ticket";

const BASE_URL="http://ec2-100-26-157-235.compute-1.amazonaws.com:8961/FlightBookingAdmin/api_v1/ticket/"

@Injectable()
export default class TicketService{
    constructor(private http:HttpClient){ }

    getAllTickets(){
        return this.http.get(BASE_URL+'ticket-categorys');
    }

    saveTicket(ticket:Ticket) {
        console.log(ticket);
        return this.http.post(BASE_URL+'save-ticketcategory',ticket);
    }

    getTicketPriceByAirlineName(airline_name:string){
        return this.http.get(BASE_URL+`airline_name-${airline_name}`);
    }
    
}