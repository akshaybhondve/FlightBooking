import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookFlight from "../Entity/BookFlight";
const BASE_URL="http://ec2-100-26-157-235.compute-1.amazonaws.com:8961/FlightBookingUser/api_v1/"

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

    updateBookingFlightStatus(booking_id:number,status:string){
        return this.http.get(BASE_URL+`update-flight-status/${booking_id}/${status}`);
    }

}