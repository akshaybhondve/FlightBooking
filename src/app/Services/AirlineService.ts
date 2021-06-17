import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Airline from "../Entity/Airline";
const BASE_URL="http://ec2-100-26-157-235.compute-1.amazonaws.com:8961/FlightBookingAdmin/api_v1/"

@Injectable()
export default class AirlineService{
    constructor(private http:HttpClient){ }

    getAirLines(){
        return this.http.get(BASE_URL+'airlines');
    }

    save(airline:Airline) {
        console.log(airline);
        return this.http.post(BASE_URL+'save-airline',airline);
    }

    getAirlinesName(airlineId:number){
        console.log(airlineId);
        return this.http.get(BASE_URL+`airline/${airlineId}`);
    }
   
}