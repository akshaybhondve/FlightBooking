import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import BookFlight from "../Entity/BookFlight";
const BASE_URL="http://localhost:3000/tickets"

@Injectable()
export default class BookFlightService{
    constructor(private http:HttpClient){ }

    getAllFlightTickets(){
        return this.http.get(BASE_URL);
    }

    save(ticket:BookFlight) {
        console.log(ticket);
        return this.http.post(BASE_URL,ticket,{
            headers:{
                "content-type":"application/json"
            }
        })
    }
}