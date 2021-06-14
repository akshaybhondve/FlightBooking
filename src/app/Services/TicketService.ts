import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import Ticket from "../Entity/Ticket";

const BASE_URL="http://localhost:9090/api_v1/ticket/"

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
    
}