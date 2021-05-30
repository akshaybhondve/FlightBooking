import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Airline from "../Entity/Airline";
const BASE_URL="http://localhost:3000/airlines"

@Injectable()
export default class AirlineService{
    constructor(private http:HttpClient){ }

    getAirLines(){
        return this.http.get(BASE_URL);
    }

    save(airline:Airline) {
        console.log(airline);
        return this.http.post(BASE_URL,airline,{
            headers:{
                "content-type":"application/json"
            }
        })
    }
}