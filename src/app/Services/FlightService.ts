import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import Flight from "../Entity/Flight";

const BASE_URL="http://localhost:9090/api_v1/"

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