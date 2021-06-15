import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Airline from '../Entity/Airline';
import Flight from '../Entity/Flight';
import ScheduleFlight from '../Entity/ScheduleFlight';
import AirlineService from '../Services/AirlineService';
import FlightService from '../Services/FlightService';

@Component({
  selector: 'app-manage-flight',
  templateUrl: './manage-flight.component.html',
  styleUrls: ['./manage-flight.component.css']
})
export class ManageFlightComponent implements OnInit {

  constructor(private flightService:FlightService, private airlineService:AirlineService,private route:Router) { }
  flights:Flight[]=[];
  airline:Airline=new Airline();
  flight:Flight=new Flight();
  flightname:string="";
  scheduleFlight:ScheduleFlight=new ScheduleFlight();

  ngOnInit(): void {
    const promise=this.flightService.getAllFlights();
    promise.subscribe((response)=>{
      console.log();
      this.flights=response as Flight[];
    })
  }

  getAirlinesName(id : number){
    const promise=this.airlineService.getAirlinesName(id);
    promise.subscribe((response)=>{
      console.log();
      this.airline=response as Airline;
      this.flightname=this.airline.airline_name;
    })
  }

  getScheduleForm(airline_name:string,fromLocation:string,toLocation:string){
    this.scheduleFlight.airline_name=airline_name;
    this.scheduleFlight.from_location=fromLocation;
    this.scheduleFlight.to_location=toLocation;
    this.route.navigate(['/schedule-flight'], { queryParams: {airline_name : airline_name,
      fromLocation:fromLocation,toLocation:toLocation} });
  }

}
