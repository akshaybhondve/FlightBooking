import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import ScheduleFlight from "../Entity/ScheduleFlight";

const BASE_URL="http://ec2-100-26-157-235.compute-1.amazonaws.com:8961/FlightBookingAdmin/api_v1/"

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

    getScheduleFlightByID(scheduleId:number){
        return this.http.get(BASE_URL+`schedule-${scheduleId}`);
    }

    getScheduleFlight(fromLocation:string,toLocation:string){
        return this.http.get(BASE_URL+`from_location-${fromLocation}`+`/to_location-${toLocation}`);
    }

    updateScheduledFlightStatus(schedule_id:number,status:string){
        return this.http.get(BASE_URL+`update-scheduleflight-status/${schedule_id}/${status}`);
    }
    
}