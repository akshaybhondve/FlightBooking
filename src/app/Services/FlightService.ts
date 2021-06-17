import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import Flight from "../Entity/Flight";

const BASE_URL="http://ec2-100-26-157-235.compute-1.amazonaws.com:8961/FlightBookingAdmin/api_v1/"

@Injectable()
export default class FlightService{
    constructor(private http:HttpClient){ }

    getAllFlights(){
        return this.http.get(BASE_URL+'flights');
    }

    saveFlights(flight:Flight) {
        console.log(flight);
        return this.http.post(BASE_URL+'save-flight',flight);
    }
    
}