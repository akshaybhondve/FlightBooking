import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import ScheduleFlight from "../Entity/ScheduleFlight";

const BASE_URL="http://localhost:9090/api_v1/"

@Injectable()
export default class ScheduleFlightService{
    constructor(private http:HttpClient){ }

    getAllScheduleFlights(){
        return this.http.get(BASE_URL+'scheduleflights');
    }

    saveScheduleFlights(flight:ScheduleFlight) {
        console.log(flight);
        return this.http.post(BASE_URL+'save-scheduleflight',flight);
    }
    
}