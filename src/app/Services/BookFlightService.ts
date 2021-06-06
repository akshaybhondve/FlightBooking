import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookFlight from "../Entity/BookFlight";
const BASE_URL="http://localhost:9090/api_v1/"

@Injectable()
export default class BookFlightService{
    constructor(private http:HttpClient){ }

    getAllFlightTickets(){
        return this.http.get(BASE_URL+"bookings");
    }

    save(ticket:BookFlight) {
        console.log(ticket);
        return this.http.post(BASE_URL+"save-booking",ticket)
    }
}